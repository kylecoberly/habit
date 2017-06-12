import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [{
			label: "Wear night guard"
		},{
			label: "Meditate 5 minutes"
		},{
			label: "Take a multivitamin"
		},{
			label: "Morning teeth"
		},{
			label: "Drink a veggie drink"
		},{
			label: "Make a meal"
		},{
			label: "Drink a soylent"
		},{
			label: "Eat at work"
		},{
			label: "Bike 30 minutes"
		},{
			label: "Night teeth"
		}];
	}
});
