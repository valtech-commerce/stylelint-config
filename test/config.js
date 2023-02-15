//--------------------------------------------------------
//-- Config tests
//--------------------------------------------------------

export default ({ given, when, then }) => {
	beforeEach(() => {
		given.noException();
		given.noRuleset();
		given.noConfig();
		given.noCode();
		given.noResults();
		given.currentRuleset();
		given.currentCSSCode();
	});

	test(`Ensure YAML is parsable`, () => {
		when.configIsLoaded();
		then.shouldNotHaveThrown();
	});

	test(`Ensure file contains config`, () => {
		when.configIsLoaded();
		then.configShouldNotBeEmpty();
	});

	test(`Ensure config can be used with vanilla CSS`, async () => {
		await when.configIsUsed();
		then.shouldNotHaveThrown();
		then.resultsShouldContainNoError();
	});
};
