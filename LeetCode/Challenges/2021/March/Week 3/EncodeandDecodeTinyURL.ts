/**
 * Encodes a URL to a shortened URL.
 */

const url = {};
const ALPHANUMERIC: string =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const prefix: string = 'http://tinyurl.com/';

function encode(longUrl: string): string {
  // ? generate Id
  let id: string = createdIdSize(6);
  while (url[id]) {
    id = createdIdSize(6);
  }
  url[id] = longUrl;
  return prefix + id;
}

/**
 *
 * @param n number
 */

function createdIdSize(n: number): string {
  let i: number = n;
  let id: string = '';

  while (i-- > 0) {
    id += ALPHANUMERIC[(Math.random() * ALPHANUMERIC.length) | 0];
  }
  return id;
}
/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  return url[shortUrl.split(prefix)[1]];
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
