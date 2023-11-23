let crypto = require("crypto");
let id = crypto.randomBytes(20).toString('hex');
let generatedAt = new Date().getTime();
let randomHash = "Time:" + generatedAt + " " + "Hash:" + id;
console.log(randomHash);
