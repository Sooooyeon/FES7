import ColaGenerator from "./js/colaGenerate.js";
import VendingMachineFunc from "./js/vendingMachineFunc.js";

const colaGenerator = new ColaGenerator();
// console.log(await colaGenerator.loadData());
await colaGenerator.setup();

const vendingMachine = new VendingMachineFunc();
vendingMachine.setup();