import {
	create,
	visitable,
	text,
	collection,
	clickable,
	property
} from "ember-cli-page-object";
import testSelector from "ember-test-selectors";

export default create({
	visit: visitable("/"),
	header: text(testSelector("header")),
	habits: collection({
		scope: testSelector("habits"),
		itemScope: testSelector("habit"),
		item: {
			habit: text(),
			check: clickable("input"),
			isChecked: property("checked", "input")
		}
	})
});
