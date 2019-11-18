"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warnAdditionalPropertiesDeprecation = function (noAdditionalPropertiesValue) {
    // tslint:disable-next-line: no-console
    console.warn('###########################################\n' +
        ("  WARNING: " + noAdditionalPropertiesValue + " is a deprecated selection for noImplicitAdditionalProperties and will be removed in a future version. \n") +
        '           Please review the config documentation for more explicit options: https://github.com/lukeautry/tsoa/blob/master/src/config.ts\n' +
        '###########################################');
};
//# sourceMappingURL=deprecations.js.map