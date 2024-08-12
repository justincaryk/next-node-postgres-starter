export function isEmptyString(value: string): value is string {
  return typeof value === 'string' && value.trim() === '';
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const parseJwt = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );

  return JSON.parse(jsonPayload);
};

export const capitalize = <T extends string>(s: T) =>
  (s[0].toUpperCase() + s.slice(1)) as Capitalize<typeof s>;

export const getAvatarCompatibleColor = (i: number) => {
  const colors = ['red', 'orange', 'blue', 'yellow', 'green', 'purple', 'teal'];
  return colors[i % colors.length];
};

export const getSuitableAnimalAvatar = (name: string) => {
  switch (name) {
    case 'dog':
      return 'wolf';
    case 'cat':
      return 'leopard';
    case 'guinea pig':
      return 'capybara';
    case 'hamster':
      return 'wombat';
    case 'reptile':
      return 'snake';
    case 'bird':
      return 'duck';
    case 'fish':
      return 'kraken';
    default:
      return name;
  }
};
