module.exports = function generate_uid(len) {
  let uid = "";
  let pool = "013456789cfghjmkqrsvwxyz";
  let unwanted = [
    "69",
    "ss",
    "666",
    "s3x",
    "53x",
    "j3w",
    "717",
    "xxx",
    "kkk",
    "4n41",
    "6006",
    "6008",
    "8008",
    "8006",
    "4114h",
  ];
  pool = pool.split("");
  for (let i = 0; i < len; i += 1) {
    uid += pool[
      parseInt((Math.random() * pool.length)
      .toFixed(0),10) % pool.length
    ];
    if (unwanted.some(v => uid.includes(v))) {
      uid = "";
      i = 0;
    }
  }
  return uid;
}