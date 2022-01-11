export const fetchPage =
  (host = '') =>
  (page) =>
    fetch(`${host}/api/${page}`).then((res) => res.json());

export const postPage =
  (host = '') =>
  (data) =>
    fetch(`${host}/api/${data.page}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
