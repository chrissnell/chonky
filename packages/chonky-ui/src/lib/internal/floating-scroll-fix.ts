// Side-effect-only module: auto-installs the bits-ui focus-scroll fix on
// import. Marked as side-effectful in package.json so bundlers don't tree-
// shake it away. See initFloatingScrollFix in ./utils.ts for details.
import { initFloatingScrollFix } from './utils.js';

if (typeof window !== 'undefined') {
	initFloatingScrollFix();
}
