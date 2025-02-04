"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const react_1 = __importDefault(require("react"));
function App() {
    return react_1.default.createElement("h1", { className: "bg-surface-1 text-heading p-4 font-bold text-3xl" }, "JigJoy UI Template");
}
