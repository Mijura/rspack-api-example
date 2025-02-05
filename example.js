"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RspackCompiler_1 = require("./RspackCompiler");
const configPath = "./template/configs/rspack.prod.js";
const compiler = new RspackCompiler_1.RspackCompiler(configPath);
compiler.run();
compiler.getConfig();
