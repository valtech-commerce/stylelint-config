//--------------------------------------------------------
//-- Salesforce - Given-When-Then
//--------------------------------------------------------
import * as gwt from "../config.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

given.currentRuleset = () => {
	given.ruleset("salesforce");
};

given.currentCSSCode = () => {
	given.code(`/* -- */
a {
	/* test */
}
`);
};

export { given, when, then };
