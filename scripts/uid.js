module.exports = function script(len) {
  let id = "";
  let dict = "0123456789".split("");
  for (let i = 0; i < len; i += 1) {
    let random_index;
    random_index = parseInt((Math.random() * dict.length).toFixed(0),10) % dict.length;
    id += dict[random_index];
  }
  return id;
}