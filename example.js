"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RspackApiCompiler_1 = require("./RspackApiCompiler");
const configPath = "./template/configs/rspack.prod.js";
const compiler = new RspackApiCompiler_1.RspackApiCompiler(configPath);
compiler.run();
