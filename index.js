let crypto = require("crypto");
let id = crypto.randomBytes(20).toString('hex');
let generatedAt = new Date().getTime();
let randomHash = "This hash was generated at:" + generatedAt + ":" + id;
console.log(randomHash);
