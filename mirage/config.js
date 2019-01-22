export default function () {
	this.namespace = 'v0';
	this.post('/login', (schem, request) => {
		console.log(schem)
		console.log(request);
		console.log(JSON.parse(request.requestBody))
		let email = '',
			password = '',
			requestBody = JSON.parse(request.requestBody);

		email = requestBody.data.attributes.account;
		password = requestBody.data.attributes.password;


		if (email === 'alex' && password === "aa") {
			return {
				"error": null,
				"result": {
					"account": "alex",
					"password": "",
					"token": "fc3caf79350584c371e74e3d275885c0"
				},
				"status": "ok"
			}
		} else {
			return {
				"error": '账户或密码错误！',
				"result": {
					"account": "alex",
					"password": "",
					"token": "fc3caf79350584c371e74e3d275885c0"
				},
				"status": "ok"
			}

		}
	});

	this.get('/posts', ({ posts }, request) => {
		return posts.all();
	});
	this.get('/posts/:id', ({ posts }, request) => {
		let id = request.params.id,
			post = posts.find(id);

		return post;
	});
	// this.get('/comments', ({ comments }, request) => {
	// 	let _comments = [];
	// 	console.log(request.queryParams);
	// 	if (Object.keys(request.queryParams).length === 0) {
	// 		_comments = comments.all();
	// 	} else {
	// 		let post = request.queryParams['filter[post]'] - 0;
	// 		_comments = comments.where({ post: post });
	// 	}
	// 	return _comments;
	// });
}
