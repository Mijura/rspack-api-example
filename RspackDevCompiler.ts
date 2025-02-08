import { rspack, MultiCompiler } from "@rspack/core"
import { RspackDevServer } from "@rspack/dev-server"
import Compiler from "./Compiler"

export class RspackDevCompiler implements Compiler {
  
  config: any
  compiler: MultiCompiler

  constructor(configPath: string) {
    this.config = require(configPath)
    this.compiler = rspack(this.config)
  }

  run() {

    this.compiler.hooks.invalid.tap("invalid", (filename, changeTime) => {
      console.log(
        `📂 File changed: ${filename} at ${new Date(
          changeTime
        ).toLocaleTimeString()}`
      );
      console.log("♻️ Recompiling...")
    });
  
  
  
    // Listen for compilation results
    this.compiler.hooks.done.tap("ErrorLogger", (stats) => {
      if (stats.hasErrors()) {
        console.error("❌ Compilation Errors:");
        console.error(stats.toString({ all: false, errors: true, colors: true }))
      } else if (stats.hasWarnings()) {
        console.warn("⚠️ Compilation Warnings:")
        console.warn(
          stats.toString({ all: false, warnings: true, colors: true })
        )
      } else {
        console.log("✅ Compilation successful!")
      }
    });
  
    // Log internal infrastructure messages (optional)
    this.compiler.hooks.infrastructureLog.tap("infra", (name, type, args) => {
      console.log(name)
      console.log(`[${type}]`, ...args)
    })
  
    // Initialize the Rspack dev server with `new RspackDevServer`
    const server = new RspackDevServer(this.config.devServer, this.compiler)
  
    // Start the dev server with error handling
    server.startCallback((err) => {
      if (err) {
        console.error("❌ Error starting dev server:", err);
      } else {
        console.log(
          `🚀 Dev server running at http://localhost:${this.config.devServer.port}`
        )
      }
    })
  }

  getConfig(): string {
    console.log("Dev Config:", JSON.stringify(this.config, null, 2))
    return this.config.toString()
  }
}
