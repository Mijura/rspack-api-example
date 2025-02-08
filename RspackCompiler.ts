import { rspack, MultiCompiler, MultiRspackOptions } from "@rspack/core"
import Compiler from "./Compiler"

export class RspackCompiler implements Compiler {
  
  config: MultiRspackOptions
  compiler: MultiCompiler

  constructor(configPath: string) {
    this.config = require(configPath)
    this.compiler = rspack(this.config)
  }

  run() {

    // Run the compiler
    this.compiler.run((err, stats) => {
      if (err) {
        console.error("Compilation error:", err)
        return;
      }

      if (stats?.hasErrors()) {
        console.error(`Compilation errors: ${stats}`)
        return;
      }

      console.log("Compilation succeeded!")
    });

    // Close the compiler
    this.compiler.close(() => console.log("Compiler closed."))
  }

  getConfig(): string {
    console.log("Prod Config:", JSON.stringify(this.config, null, 2))
    return this.config.toString()
  }
}
