import ColaGenerator from "./js/colaGenerate";
import VendingMachineFunc from "./js/vendingMachineFunc";

const colaGenerator = new ColaGenerator();

await colaGenerator.setup();

const vendingMachine = new VendingMachineFunc();
vendingMachine.setup();