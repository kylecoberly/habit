import Ember from "ember";

export default Ember.Route.extend({
	model(){
		return [{
			id: 1,
			label: "Wear night guard"
		},{
			id: 2,
			label: "Meditate 5 minutes"
		},{
			id: 3,
			label: "Take a multivitamin"
		},{
			id: 4,
			label: "Morning teeth"
		},{
			id: 5,
			label: "Drink a veggie drink"
		},{
			id: 6,
			label: "Make a meal"
		},{
			id: 7,
			label: "Drink a soylent"
		},{
			id: 8,
			label: "Eat at work"
		},{
			id: 9,
			label: "Bike 30 minutes"
		},{
			id: 10,
			label: "Night teeth"
		}];
	}
});
