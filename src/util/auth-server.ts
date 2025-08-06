export async function fetchWithAuth(
  input: RequestInfo,
  init: RequestInit = {},
) {
  const headers = {
    ...init.headers,
    'Content-Type': 'application/json',
  };

  return fetch(input, {
    ...init,
    headers,
  });
}
