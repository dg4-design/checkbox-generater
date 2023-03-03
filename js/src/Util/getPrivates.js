const privateMap = new WeakMap();
function getPrivates(self) {
  let p = privateMap.get(self);
  if (!p) {
    p = {};
    privateMap.set(self, p);
  }
  return p;
}
module.exports = getPrivates;
