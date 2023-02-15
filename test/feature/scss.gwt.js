//--------------------------------------------------------
//-- SCSS - Given-When-Then
//--------------------------------------------------------
import * as gwt from "../config.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

given.currentRuleset = () => {
	given.ruleset("scss");
};

given.currentCSSCode = () => {
	given.code(`/* -- */
a {
	/* test */
}
`);
};

given.scssCode = () => {
	given.code(`/* -- */
// test

a {
	/* test */
}
`);
};

export { given, when, then };
