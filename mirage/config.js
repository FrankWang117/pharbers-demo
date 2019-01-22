export default function () {
	this.namespace = 'v0';

	this.post('/AccountValidation', (schem, request) => {
		let email = '',
			password = '',
			requestBody = JSON.parse(request.requestBody);

		email = requestBody.data.attributes.account;
		password = requestBody.data.attributes.password;

		if ((email === 'alex' || email === 'frank') && password === "aa") {
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

	this.get('/posts', ({ posts }) => {
		return posts.all();
	});

	this.get('/posts/:id', ({ posts }, request) => {
		let id = request.params.id,
			post = posts.find(id);

		return post;
	});

}
