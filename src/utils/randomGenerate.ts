export function generateRandomString (len: number) {
  const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWZ';
  let ret = '';
  for (let i = 0; i < len; i++) {
    ret += a.charAt(Math.floor(Math.random() * a.length))
  }
  return ret;
}