import { rspack, MultiCompiler } from '@rspack/core'

const devConfig = require('./template/configs/rspack.dev.js') 

export const buildSourceCode = () => {

  console.log("Dev Config:", JSON.stringify(devConfig, null, 2));

  // Create and configure a Compiler instance
  const compiler: MultiCompiler = rspack(devConfig);

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
};

buildSourceCode()
