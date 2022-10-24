export const convertImgUrl = (url: string, param: number = 400): string =>
  url.split('._V1')[0] + `._V1_UX${param}_AL_.jpg`;
