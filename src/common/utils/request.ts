export const request = async <T>(
  url: string,
  method: string,
  body?: any
): Promise<T> => {
  const token = localStorage.getItem('token');
  const opts = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-API-AUTH-KEY': process.env.REACT_APP_HTTP_AUTH!,
      'X-Auth-Key': token!,
    },
    body: JSON.stringify(body),
  };

  try {
    const baseUrl = process.env.REACT_APP_HTTP_URL + url;
    const res = await fetch(baseUrl, opts);
    const data = await res.json();

    // check for error response
    if (!res.ok) {
      // get error message from body or default to response status
      const error = (data && data.message) || res.status;
      return Promise.reject(error);
    }

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('There was an error!', error);
    throw new Error(error.message);
  }
};

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const getPostsFetcher = () => request<Post[]>('posts', 'GET');
