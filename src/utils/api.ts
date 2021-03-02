const API_ENDPOINT =
  process.env.REACT_APP_API_ENDPOINT || 'https://www.omdbapi.com/'
const API_KEY = process.env.REACT_APP_API_KEY

function prepareUrl(baseUrl: string, ...params: string[]): string {
  return `${baseUrl}?${params.join('&')}`
}

async function callApi<T>(
  method: string,
  url: string,
  data?: Record<string, unknown> | string | number | boolean,
  signal?: AbortSignal
): Promise<T> {
  const res = await fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
    signal,
  })

  return res.json()
}

export function makeGetRequest<T>(
  signal: AbortSignal,
  ...params: string[]
): Promise<T> {
  const url = prepareUrl(API_ENDPOINT, `apiKey=${API_KEY}`, ...params)

  return callApi('get', url, undefined, signal)
}
