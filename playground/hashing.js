const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = "123abc";

bcrypt.genSalt(50, (error, salt) => {
    bcrypt.hash(password, salt, (error, hash) => {
        console.log("Hash: ", hash);
    });
});

const hashedPw = '$2a$10$rqMLgrQ4S6679M5gcrqBc.7jIcnK6Q4yxNji.gm40d7ED67szjuMe';

bcrypt.compare(password, hashedPw, (err, res) => {
    console.log(res);
});

// const data = {
//     id: 10
// };

// const token = jwt.sign(data, '123abc');
// console.log(token);
// const decoded = jwt.verify(token, '123abc');
// console.log(decoded);


// const message = "I am user number 3";
// const hash = SHA256(message).toString();

// // console.log(`Message: ${message}`);
// // console.log(`Hash: ${hash}`);

// const data = {
//     id: 4
// };

// const secret = Math.random().toString(36).substring(1);

// const token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + secret).toString()
// };
// // console.log(`full hash: ${token.hash}`);

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// const resultHash = SHA256(JSON.stringify(token.data) + secret).toString();

// if(resultHash === token.hash){
//     console.log("Data was not changed");
// }else{
//     console.log("Data was changed, don't trust it!");
// }