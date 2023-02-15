//--------------------------------------------------------
//-- Config - Given-When-Then
//--------------------------------------------------------
import path from "node:path";
import { given as baseGiven, when as baseWhen, then as baseThen } from "./base.gwt.js";

const given = { ...baseGiven };
const when = { ...baseWhen };
const then = { ...baseThen };

const stylelint = require("stylelint");

let ruleset;
let configPath;
let config;
let results;
let code;

//-- Given - Reset
given.noRuleset = () => {
	ruleset = undefined;
};

given.noConfig = () => {
	config = undefined;
};

given.noCode = () => {
	code = undefined;
};

given.noResults = () => {
	results = undefined;
};

//-- Given - Ruleset
given.ruleset = (value) => {
	ruleset = value;
};

given.code = (value) => {
	code = value;
};

//-- When - Config
when.configIsLoaded = () => {
	when.attempting(() => {
		configPath = path.join(__dirname, "..", "src", "config", ruleset);
		config = require(configPath);
	});
};

when.configIsUsed = async () => {
	when.configIsLoaded();
	await when.attemptingAsync(async () => {
		results = await stylelint.lint({ config, configBasedir: path.dirname(configPath), code });
	});
};

//-- Then - Config
then.configShouldNotBeEmpty = () => {
	expect(config).toBeObject();
	expect(config).not.toEqual({});
};

then.resultsShouldContainNoError = () => {
	expect(results).toContainEntries([["errored", false]]);
};

export { given, when, then };
