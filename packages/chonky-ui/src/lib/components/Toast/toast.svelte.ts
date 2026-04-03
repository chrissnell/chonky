export interface ToastItem {
  id: string;
  message: string;
  variant: 'success' | 'danger' | 'info';
  duration: number;
}

let toasts = $state<ToastItem[]>([]);

export function toast(
  message: string,
  variant: 'success' | 'danger' | 'info' = 'info',
  duration = 3000
): string {
  const id = crypto.randomUUID();
  toasts.push({ id, message, variant, duration });
  if (duration > 0) setTimeout(() => dismiss(id), duration);
  return id;
}

export function dismiss(id: string) {
  toasts = toasts.filter((t) => t.id !== id);
}

export function getToasts(): ToastItem[] {
  return toasts;
}
