export function cn(...classes: (string | undefined | false | null)[]): string {
	return classes.filter(Boolean).join(' ');
}

/**
 * Works around a bits-ui focus-scope issue where floating content (portaled to
 * <body>) is focused via `.focus()` without `{ preventScroll: true }`. The
 * browser then scrolls the viewport to bring the freshly-positioned element
 * into view — which manifests as a scroll-to-top jump when opening any menu,
 * popover, tooltip, dialog, etc.
 *
 * See bits-ui focus-scope.svelte.js where `firstTabbable.focus()` is called
 * unqualified. Upstream fix would be trivial (add { preventScroll: true }).
 *
 * This patches HTMLElement.prototype.focus to inject preventScroll for any
 * element living inside [data-bits-floating-content-wrapper]. Idempotent and
 * auto-installed on first import of this package in the browser — consumers
 * don't need to call this manually.
 */
const PATCH_FLAG = '__chonkyFloatingScrollFix';

export function initFloatingScrollFix(): () => void {
	if (typeof window === 'undefined' || typeof HTMLElement === 'undefined') {
		return () => {};
	}
	const proto = HTMLElement.prototype as HTMLElement & { [PATCH_FLAG]?: boolean };
	if (proto[PATCH_FLAG]) return () => {};

	const origFocus = HTMLElement.prototype.focus;
	HTMLElement.prototype.focus = function (opts?: FocusOptions) {
		if (this.closest?.('[data-bits-floating-content-wrapper]')) {
			return origFocus.call(this, { ...opts, preventScroll: true });
		}
		return origFocus.call(this, opts);
	};
	proto[PATCH_FLAG] = true;

	return () => {
		HTMLElement.prototype.focus = origFocus;
		delete proto[PATCH_FLAG];
	};
}

