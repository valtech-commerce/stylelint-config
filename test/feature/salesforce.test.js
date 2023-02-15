//--------------------------------------------------------
//-- Salesforce - Feature tests
//--------------------------------------------------------
import configTests from "../config";
import { given, when, then } from "./salesforce.gwt";

describe(`Validate that 'salesforce' works`, () => {
	configTests({ given, when, then });
});
