exports.getPosts = (req, res) => {	
	// res.json({
		// posts: [
		// {title:'First Post'},
		// {title : 'Second Post'}
		// ]
	// })
	//const posts = Post.find()	///find all post 
	console.log('getPosts ÇALIŞTI')
	const posts = Post.find().select("_id title body")
	//const posts = Post.find().select("_id number ad soyad sinif sube cinsiyet")
	.then((posts) => {
		//res.status(200).json({posts:posts}); //default 200 OK aşağıdaki satır ile aynı
		res.json({posts:posts}); //default 200 OK
	})
	.catch(err=>console.log(err));	
}