
import { RspackCompiler } from "./RspackCompiler"
const configPath = "./template/configs/rspack.prod.js"
const compiler = new RspackCompiler(configPath)

//compiler.getConfig()

compiler.run()

