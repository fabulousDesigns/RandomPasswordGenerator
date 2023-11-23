let crypto = require("crypto");
let id = crypto.randomBytes(20).toString('hex');
let generatedAt = new Date().getTime();
let randomHash = "Time:" + generatedAt + " " + "Hash:" + id;
// 
function randomHashGenerator() {
  // return randomHash;
  console.log(randomHash);
}
randomHashGenerator();

