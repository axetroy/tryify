function Tryify(func, ctx) {
  if (this instanceof Tryify) {
    this.ctx = ctx || this;
    this.func = func;
  } else {
    return new Tryify(func, ctx);
  }
}

const prototype = Tryify.prototype;

prototype.constructor = Tryify;

prototype.catch = function(func) {
  this.errorHandler = func;
  return this;
};

prototype.run = function(...args) {
  try {
    this.func.apply(this.ctx, ...args);
  } catch (err) {
    this.errorHandler && this.errorHandler(err);
  }
};

export default Tryify;
