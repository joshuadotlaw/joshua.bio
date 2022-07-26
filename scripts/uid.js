module.exports = function generate_uid(len) {
  let uid = "";
  let pool = "013456789cfghjmkqrsvwxyz";
  let unwanted = [
    "69",
    "ss",
    "666",
    "s3x",
    "53x",
    "717",
    "xxx",
    "kkk",
    "fvk",
    "fvc",
    "fvq",
    "sh17",
    "svck",
    "5vck",
    "4n41",
    "6006",
    "6008",
    "8008",
    "8006",
    "4114h",
    "1s14m",
    "1514m",
    "j3svs",
    "j35vs",
    "j3sv5",
    "j35v5"
  ];
  pool = pool.split("");
  for (let i = 0; i < len; i += 1) {
    uid += pool[
      parseInt((Math.random() * pool.length)
      .toFixed(0),10) % pool.length
    ];
    if (uid.length == len) {
      if (unwanted.some(v => uid.includes(v))) {
        console.log("Unwanted substring in " + uid);
        console.log("Starting over...");
        uid = "";
        i = 0;
      }
    }
  }
  console.log("uid: " + uid);
  return uid;
}