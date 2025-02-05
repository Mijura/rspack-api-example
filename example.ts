
import { RspackApiCompiler } from "./RspackApiCompiler"
const configPath = "./template/configs/rspack.prod.js"
const compiler = new RspackApiCompiler(configPath)

compiler.run()