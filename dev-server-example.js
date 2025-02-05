"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RspackDevCompiler_1 = require("./RspackDevCompiler");
const configPath = "./template/configs/rspack.dev.js";
const compiler = new RspackDevCompiler_1.RspackDevCompiler(configPath);
//compiler.getConfig()
compiler.run();
