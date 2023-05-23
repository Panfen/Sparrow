export function curry(fn) {
  const arity = fn.length;
  return function curried(...args) {
    // 如果没有传入参数就把参数列表设置为[undefined]
    const newArgs = args.length === 0 ? [undefined] : args;
    return newArgs.length >= arity ? fn(...newArgs) : curried.bind(null, ...newArgs);
  };
}

export function indentity(x) {
  return x;
}

export function compose(...fns) {
  return fns.reduce((acc, cur) => (x) => cur(acc(x)), indentity);
}
