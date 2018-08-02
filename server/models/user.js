const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const {secret} = require('./../db/secret');
const bcrypt = require('bcryptjs');

/**
 * {
 *  email: "whatever@gmail.com",
 *  password: "aslgshdflsaksdjlas", //encoded and hashed password
 * tokens: [{
 *  access: 'auth', //Specifies token type
 *  token: "lskajflaskjlksdjlksajflask" //token string
 * }]
 * }
 */

 const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: `{value} is not a valid email`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true
    },
    tokens: [{
        access:{
            type: String,
            required: true
        },
        token:{
            type: String,
            required: true
        }
    }],
    createdAt: {
        type: Date,
        default: new Date().toDateString()
    },
    description: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: 'Corpse fighter'
    }
});

UserSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();
    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
    const user = this;
    const access = 'auth';
    const token = jwt.sign({_id: user._id.toHexString(), access}, secret).toString();
    user.tokens.push({access, token});
    return user.save().then(() => {
        return token;
    });
};

UserSchema.statics.findByToken = function (token) {
    const User = this;
    let decoded;
    try{
        decoded = jwt.verify(token, secret);
    }catch(e){
        return Promise.reject();
    }
    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

UserSchema.pre('save', function (next){
    let user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    }else{
        next();
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = {User};