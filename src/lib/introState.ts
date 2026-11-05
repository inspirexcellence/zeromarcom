/**
 * In-memory intro lifecycle state for ZEROMARCOM.
 * 
 * Rules:
 * 1. When a user loads or reloads the homepage (F5, browser refresh),
 *    window.__zeromarcom_intro_done is undefined/false, so the intro splash
 *    and video emergence play before opening the homepage.
 * 2. When the intro finishes, or when any subpage is visited,
 *    markIntroDone() sets window.__zeromarcom_intro_done = true.
 * 3. During client-side navigation (e.g. clicking the 'Home' nav link or logo),
 *    window.__zeromarcom_intro_done remains true, so the intro is skipped and
 *    the homepage opens directly in full screen.
 * 4. Subpages (/about, /services, /why-us, etc.) never show the intro.
 */

declare global {
  interface Window {
    __zeromarcom_intro_done?: boolean;
  }
}

export function isIntroDone(): boolean {
  if (typeof window === "undefined") return false;
  return Boolean(window.__zeromarcom_intro_done);
}

export function markIntroDone(): void {
  if (typeof window === "undefined") return;
  window.__zeromarcom_intro_done = true;
  try {
    sessionStorage.removeItem("zeromarcom_intro_played");
  } catch {
    // Ignore if sessionStorage is not accessible
  }
}

export function clearLegacyIntroStorage(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem("zeromarcom_intro_played");
  } catch {
    // Ignore if sessionStorage is not accessible
  }
}
