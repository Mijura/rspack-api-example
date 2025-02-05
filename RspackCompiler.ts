import { rspack, MultiCompiler, MultiRspackOptions } from "@rspack/core";
import Compiler from "./Compiler";

export class RspackCompiler implements Compiler {
  config: MultiRspackOptions;

  constructor(configPath: string) {
    this.config = require(configPath);
  }

  run() {
    console.log("Dev Config:", JSON.stringify(this.config, null, 2));

    // Create and configure a Compiler instance
    const compiler: MultiCompiler = rspack(this.config);

    // Run the compiler
    compiler.run((err, stats) => {
      if (err) {
        console.error("Compilation error:", err);
        return;
      }

      if (stats?.hasErrors()) {
        console.error(`Compilation errors: ${stats}`);
        return;
      }

      console.log("Compilation succeeded!");
    });

    // Close the compiler
    compiler.close(() => console.log("Compiler closed."));
  }
}
