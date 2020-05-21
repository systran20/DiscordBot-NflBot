const mongoose = require('mongoose');
const postSchema1 = new mongoose.Schema({	
	title: {
		type: String,
		required : true
	},
	body : {
		type: String,
		required : true
	}
});

const postSchema2 = new mongoose.Schema({	
	number: {
		type: String,
		required : true
	},
	ad : {
		type: String,
		required : true
	},
	soyad : {
		type: String,
		required : true
	},
	sinif : {
		type: String,
		required : true
	},
	sube : {
		type: String,
		required : true
	},
	cinsiyet : {
		type: String,
		required : true
	},

});


//export to use in controllers
module.exports = mongoose.model("Post" , postSchema1, 'posts');  //mongoose model methodu biz ona Post dedik