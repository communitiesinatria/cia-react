require('dotenv').config();
const mongoose = require('mongoose');
const CryptoJS = require("crypto-js");

const roles = require('../../roles.json')


const x = {
    key: 'default',
    encrypt: async function (txt) {
        return CryptoJS.AES.encrypt(txt, this.key).toString();
    },
    decrypt: async function (txt) {
        return CryptoJS.AES.decrypt(txt, this.key).toString(CryptoJS.enc.Utf8);
    },
}

//Set up default mongoose connection
const mongoDB = process.env.CIA_DATA_DB;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', () => console.log('database connected'));

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    profile_img: String,
    bio: String,
    github: String,
    instagram: String,
    password: { type: String, required: true },
    props: {
        type: Object, default: {
            joined_on: Date.now()
        }
    },
    role: { type: String, default: roles.NOOB }
});

const EventSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    event_img: String,
    date: { type: Date, required: true },
    register: { type: String, required: true },
    other_links: [String]
});
const ProjectSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    project_img: String,
    join: { type: String, required: true },
    other_links: [String]
});


const UserModel = mongoose.model('users', UserSchema);
const EventModel = mongoose.model('events', EventSchema);
const ProjectModel = mongoose.model('projects', ProjectSchema);

module.exports = { ProjectModel, EventModel, UserModel, mongoose };

