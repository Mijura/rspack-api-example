import { RspackDevCompiler } from "./RspackDevCompiler"
const configPath = "./template/configs/rspack.dev.js"
const compiler = new RspackDevCompiler(configPath)

//compiler.getConfig()

compiler.run()

