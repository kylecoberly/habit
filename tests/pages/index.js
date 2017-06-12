import {
	create,
	visitable,
	text,
	collection
} from "ember-cli-page-object";
import testSelector from "ember-test-selectors";

export default create({
	visit: visitable("/"),
	header: text(testSelector("header")),
	habits: collection({
		scope: testSelector("habits"),
		itemScope: testSelector("habit"),
		item: {
			habit: text()
		}
	})
});
