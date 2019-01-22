import { Factory, trait } from 'ember-cli-mirage';

export default Factory.extend({
	'title': faker.name.title,
	'subTitle': faker.random.word,
	'content': faker.random.word,
	'comments': trait({
		afterCreate(post, server) {
			server.createList('comment', Math.floor(Math.random() * 23), { post });
		}
	})
});
