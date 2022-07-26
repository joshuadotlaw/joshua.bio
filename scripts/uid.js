module.exports = function generate_uid(len) {
  let uid = "";
  let pool = "013456789cfghjmkqrsvwxyz".split("");
  let unwanted = [
    "69","ss","666",
    "s3x","53x","6006s",
    "60065","8008s",
    "80085","xxx"
  ];
  for (let i = 0; i < len; i += 1) {
    uid += pool[parseInt((Math.random() * pool.length).toFixed(0),10) % pool.length];
    if (unwanted.some(v => uid.includes(v))) {
      uid = "";
      i = 0;
    }
  }
  return uid;
}