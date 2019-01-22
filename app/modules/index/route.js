import Route from '@ember/routing/route';
import { isEmpty } from '@ember/utils';
export default Route.extend({
	actions: {
		submit() {
			let controller = this.controllerFor('index'),
				email = controller.get('email'),
				password = controller.get('password');
			if (email === '' || password === '') {
				window.alert('请输入账号以及密码')
			} else {
				let dataSend = {
					"data": {
						"type": "Account",
						"id": "000",
						"attributes": {
							"account": email,
							"password": password
						}
					}
				};

				$.post('/v0/AccountValidation', JSON.stringify(dataSend), (data, status) => {
					if (data.error !== null) {
						window.alert(data.error)
					} else {
						controller.transitionToRoute('post-list')
					}
				}, "json");
			}

		}
	}
});
