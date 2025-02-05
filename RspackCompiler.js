"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RspackCompiler = void 0;
const core_1 = require("@rspack/core");
class RspackCompiler {
    constructor(configPath) {
        this.config = require(configPath);
        this.compiler = (0, core_1.rspack)(this.config);
    }
    run() {
        // Run the compiler
        this.compiler.run((err, stats) => {
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
        this.compiler.close(() => console.log("Compiler closed."));
    }
    getConfig() {
        console.log("Prod Config:", JSON.stringify(this.config, null, 2));
        return this.config.toString();
    }
}
exports.RspackCompiler = RspackCompiler;
