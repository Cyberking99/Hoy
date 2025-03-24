export const feltToString = felt => felt.toString(16)
  // Split into 2 chars
  .match(/.{2}/g)
  // Get char from code
  .map( c => String.fromCharCode(parseInt( c, 16 ) ) )
  // Join to a string
  .join('');

export const stringToByteArray = (inputString) => {
    if (typeof inputString !== 'string') {
        throw new TypeError('Input must be a string.');
    }
    const encoder = new TextEncoder();
    return Array.from(encoder.encode(inputString));
}
