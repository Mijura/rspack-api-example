export default interface Compiler {
  run(): void;
  getConfig(): string;
}
