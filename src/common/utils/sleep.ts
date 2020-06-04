/**
 * Returns a promise that resolves after how many milliseconds you pass it.
 *
 * @description Great for waiting any amount of time. If you do not pass it any value,
 * it will immediately resolve. This is handy when you need to ensure the following code is put at the end of the JS event callstack.
 */
// prettier-ignore
export const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
