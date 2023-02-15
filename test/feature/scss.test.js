//--------------------------------------------------------
//-- SCSS - Feature tests
//--------------------------------------------------------
import configTests from "../config";
import { given, when, then } from "./scss.gwt";

describe(`Validate that 'scss' works`, () => {
	configTests({ given, when, then });

	test(`Ensure config can be used with SCSS`, async () => {
		given.scssCode();
		await when.configIsUsed();
		then.shouldNotHaveThrown();
		then.resultsShouldContainNoError();
	});
});
