const STORAGE_KEY = "primaryuc_form_test_token";

// Reads a token the tester sets manually (e.g. via the browser console:
// localStorage.setItem("primaryuc_form_test_token", "<token>")). The token
// itself never ships in this bundle -- only this lookup does -- so it stays
// a no-op for every real visitor.
export function getFormTestBypassHeaders(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const token = window.localStorage.getItem(STORAGE_KEY);
    return token ? { "x-form-test-token": token } : {};
  } catch {
    return {};
  }
}
