// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5First(): Promise<Good[]> {
  return getAll()
    .then(response => response.sort((a, b) => a.name.localeCompare(b.name)));
}

export function getRedGoods(): Promise<Good[]> {
  return getAll()
    .then(response => response.filter(good => good.color === 'red'));
}
