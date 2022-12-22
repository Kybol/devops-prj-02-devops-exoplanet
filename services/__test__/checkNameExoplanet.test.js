const checkNameExoplanet = require("../checkNameExoplanet");

describe("checkNameExoplanet tests suites", () => {
    it(`should return true`, () => {
        expect(checkNameExoplanet("NAME")).toBe(true);
    });

    it(`should return false`, () => {
        expect(checkNameExoplanet("name")).toBe(false);
    });

    it(`should return false`, () => {
        expect(checkNameExoplanet("NAME$")).toBe(false);
    });

    it(`should return false`, () => {
        expect(checkNameExoplanet("")).toBe(false);
    });
});
