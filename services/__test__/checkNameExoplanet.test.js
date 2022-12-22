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

    it(`should return false for incorrect`, () => {
        expect(checkNameExoplanet("Trappiste$****01****-00")).toBe(false);
    });
});
