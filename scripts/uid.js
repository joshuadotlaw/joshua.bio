module.exports = function script(len) {
  let id = "";
  let dict = "013456789cfghjmkqrsvwxyz".split("");
  for (let i = 0; i < len; i += 1) {
    id += dict[parseInt((Math.random() * dict.length).toFixed(0),10) % dict.length];
  }
  return id;
}