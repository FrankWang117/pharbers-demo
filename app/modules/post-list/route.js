import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return this.get('store').findAll('post', { include: 'comments' })
	},
	actions: {
		showComment(comments) {
			this.controllerFor('post-list').set('comments', comments);
		}
	}
});
