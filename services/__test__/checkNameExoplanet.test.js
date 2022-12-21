const checkNameExoplanet = require("../checkNameExoplanet");

describe("checkNameExoplanet tests suites", () => {
    it(`should return true`, () => {
        expect(checkNameExoplanet("name")).toBe(true);
    });
});
