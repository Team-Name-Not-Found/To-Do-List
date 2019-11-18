"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMutualConfigs = function (routesConfig, swaggerConfig) {
    var validateControllerPathGlobs = function (test) {
        if (!Array.isArray(test)) {
            throw new Error("controllerPathGlobs must be an array");
        }
        if (!test.length) {
            throw new Error("controllerPathGlobs must include at least one glob string");
        }
        test.forEach(function (item) {
            if (typeof item !== 'string' || item === '') {
                throw new Error("Found a value (" + item + ") that is not a valid glob for controllerPathGlobs");
            }
        });
    };
    var haveSameValues = function (array1, array2) {
        return array1.every(function (item) { return array2.includes(item); });
    };
    if (routesConfig.controllerPathGlobs) {
        validateControllerPathGlobs(routesConfig.controllerPathGlobs);
    }
    if (swaggerConfig.controllerPathGlobs) {
        validateControllerPathGlobs(swaggerConfig.controllerPathGlobs);
    }
    if (swaggerConfig.controllerPathGlobs && routesConfig.controllerPathGlobs) {
        if (!haveSameValues(swaggerConfig.controllerPathGlobs, routesConfig.controllerPathGlobs)) {
            throw new Error("You do not have to pass controllerPathGlobs for both SwaggerConfig and RoutesConfig; " + "but if you do, then they must have the same values. Current they differ.");
        }
    }
};
//# sourceMappingURL=mutualConfigValidation.js.map