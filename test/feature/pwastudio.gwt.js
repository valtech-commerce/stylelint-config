//--------------------------------------------------------
//-- PWA Studio - Given-When-Then
//--------------------------------------------------------
import * as gwt from "../config.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

given.currentRuleset = () => {
	given.ruleset("pwastudio");
};

given.currentCSSCode = () => {
	given.code(`/* -- */
a {
    /* test */
}
`);
};

given.cssModulesCode = () => {
	given.code(`/* -- */
.class-a {
    /* test */
}

.class-b {
    composes: class-a;
}
`);
};

export { given, when, then };
