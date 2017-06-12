import {test} from "qunit";
import moduleForAcceptance from "habit/tests/helpers/module-for-acceptance";
import index from "habit/tests/pages/index";

moduleForAcceptance("Acceptance | index");

test("visiting /index", function(assert){
	index.visit();

	andThen(function(){
		assert.equal(currentURL(), "/");

		assert.equal(index.header, "Habit");
		assert.equal(index.habits().count, 10);
		assert.equal(index.habits(0).habit, "Wear night guard");
		assert.equal(index.habits(1).habit, "Meditate 5 minutes");

		assert.equal(index.habits(1).isChecked, false);
		index.habits(1).check();
	});
	andThen(function(){
		assert.equal(index.habits(1).isChecked, true);
	});
});
