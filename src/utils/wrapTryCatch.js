const asyncMiddleware = (fn) => (...args) => {
  const next = args[args.length-1];
  const fnReturned = fn(...args);
  Promise.resolve(fnReturned)
    .catch(next);
}  

export { asyncMiddleware };