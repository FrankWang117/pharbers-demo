import DS from 'ember-data';

export default DS.Model.extend({
	accountName: DS.attr('string'),
	content: DS.attr('string'),
	post: DS.belongsTo()
});
