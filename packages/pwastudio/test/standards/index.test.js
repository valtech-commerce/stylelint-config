//--------------------------------------------------------
//-- Pwastudio - Standards tests
//--------------------------------------------------------
import packageTests from "../../../../test/standards/package-tests";
import { given, when, then } from "./index.gwt";

describe(`Validate 'pwastudio' package.json`, () => {
	packageTests({ given, when, then });
});
