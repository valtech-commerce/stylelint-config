//--------------------------------------------------------
//-- PWA Studio - Feature tests
//--------------------------------------------------------
import configTests from "../config";
import { given, when, then } from "./pwastudio.gwt";

describe(`Validate that 'pwastudio' works`, () => {
	configTests({ given, when, then });

	test(`Ensure config can be used with CSS Modules`, async () => {
		given.cssModulesCode();
		await when.configIsUsed();
		then.shouldNotHaveThrown();
		then.resultsShouldContainNoError();
	});
});
