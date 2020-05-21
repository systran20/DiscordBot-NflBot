const mongoose = require('mongoose');
const Post = require ('../models/post');
const {
    MONGO_URI
} = require('../config.json');
const {
    getPosts
} = require('../database/post');
module.exports = {
    name: 'db',
    description: 'Connect Atlas Mongo DB',
    args: true,
    usage: '[sınıf şube]',
    execute(msg, args) {
        msg.channel.send('Try to connect DB...');
        //DB then PROMISE
        //MONGO_URI=mongodb://localhost/nodeapi
        mongoose.connect(MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => msg.channel.send('DB Connected'))
            .then(() => {
                const posts = Post.find().select("_id title body")
                    .then((posts) => {
                        //res.status(200).json({posts:posts}); //default 200 OK aşağıdaki satır ile aynı
                        msg.channel.send(posts);
                        /*
                        res.json({
                            posts: posts
                        }); //default 200 OK
                        */
                    })
                    .catch(err => msg.channel.send(err));
            });
        mongoose.connection.on("error", err => {
            msg.channel.send(`DB Connection Error: ${err.message}`);
        })
    }
}