"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSourceCode = void 0;
const core_1 = require("@rspack/core");
const devConfig = require('./template/configs/rspack.dev.js');
const buildSourceCode = () => {
    console.log("Dev Config:", JSON.stringify(devConfig, null, 2));
    // Create and configure a Compiler instance
    const compiler = (0, core_1.rspack)(devConfig);
    // Run the compiler
    compiler.run((err, stats) => {
        if (err) {
            console.error("Compilation error:", err);
            return;
        }
        if (stats === null || stats === void 0 ? void 0 : stats.hasErrors()) {
            console.error(`Compilation errors: ${stats}`);
            return;
        }
        console.log("Compilation succeeded!");
    });
    // Close the compiler
    compiler.close(() => console.log("Compiler closed."));
};
exports.buildSourceCode = buildSourceCode;
(0, exports.buildSourceCode)();
