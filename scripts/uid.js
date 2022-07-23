function script(len) {
  let id = "";
  let ascii_range = [48,57];
  let dict = [];
  for (let i = ascii_range[0]; i <= ascii_range[1]; i += 1) {
    dict.push(String.fromCharCode(i));
  }
  for (let j = 0; j < len; j += 1) {
    let randIdx;
    randIdx = parseInt((Math.random() * dict.length).toFixed(0),10) % dict.length;
    id += dict[randIdx];
  }
  return id;
}
module.exports = script;