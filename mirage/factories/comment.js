import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	'accountName': faker.internet.userName,
	'content': faker.random.word,
});
