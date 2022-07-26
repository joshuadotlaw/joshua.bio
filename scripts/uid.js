module.exports = function script(len) {
  let id = "";
  let dict = "013456789cfghjmkqrsvwxyz".split("");
  let disallowed = ["69","ss","666","s3x","53x","6006s","60065"];
  for (let i = 0; i < len; i += 1) {
    id += dict[parseInt((Math.random() * dict.length).toFixed(0),10) % dict.length];
    if (disallowed.some(v => id.includes(v))) {
      id = "";
      i = 0;
    }
  }
  return id;
}