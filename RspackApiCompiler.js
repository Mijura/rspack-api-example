"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RspackApiCompiler = void 0;
var core_1 = require("@rspack/core");
var devConfig = require('./template/configs/rspack.dev.js');
var RspackApiCompiler = /** @class */ (function () {
    function RspackApiCompiler() {
    }
    RspackApiCompiler.prototype.run = function () {
        console.log("Dev Config:", JSON.stringify(devConfig, null, 2));
        // Create and configure a Compiler instance
        var compiler = (0, core_1.rspack)(devConfig);
        // Run the compiler
        compiler.run(function (err, stats) {
            if (err) {
                console.error("Compilation error:", err);
                return;
            }
            if (stats === null || stats === void 0 ? void 0 : stats.hasErrors()) {
                console.error("Compilation errors: ".concat(stats));
                return;
            }
            console.log("Compilation succeeded!");
        });
        // Close the compiler
        compiler.close(function () { return console.log("Compiler closed."); });
    };
    return RspackApiCompiler;
}());
exports.RspackApiCompiler = RspackApiCompiler;
