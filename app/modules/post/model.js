import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	subTitle: DS.attr('string'),
	content: DS.attr('string'),
	comments: DS.hasMany()
});
