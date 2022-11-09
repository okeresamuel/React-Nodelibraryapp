const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.cloud__picname,
    api_key: process.env.api__key,
    api_secret: process.env.api__secret
})

module.exports = cloudinary;