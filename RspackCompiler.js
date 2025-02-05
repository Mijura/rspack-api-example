"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RspackCompiler = void 0;
const core_1 = require("@rspack/core");
class RspackCompiler {
    constructor(configPath) {
        this.config = require(configPath);
    }
    run() {
        console.log("Dev Config:", JSON.stringify(this.config, null, 2));
        // Create and configure a Compiler instance
        const compiler = (0, core_1.rspack)(this.config);
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
    }
}
exports.RspackCompiler = RspackCompiler;
