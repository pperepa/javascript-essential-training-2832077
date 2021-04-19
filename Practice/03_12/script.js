/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

// Import Custom Classes
import Backpack from "./Backpack.js";
import Battery from "./Battery.js";
import Mug from "./Mug.js";

// Instantiation of Different Classes
const greenBackpack = new Backpack(
  "Green School Backpack",
  55,
  "green",
  23,
  22,
  33,
  true
);
const greenMug = new Mug("white", false, "Tazo", "Earl Grey", "Cold", "15.2oz");
const greenBattery = new Battery(
  3.6,
  2100,
  "green",
  "Energizer",
  false,
  "Li-ion"
);

// Battery Method Testing
greenBattery.changeVolts(0.8);
greenBattery.changeType("Ni-MH");
greenBattery.rebrand("Duracell");
greenBattery.flipChargeable(true);
greenBattery.recolor("black");
console.log("greenBattery volts: ", greenBattery.volts);
console.log("greenBattery type: ", greenBattery.type);
console.log("greenBattery brand: ", greenBattery.brand);
console.log("greenBattery rechargeable: ", greenBattery.rechargeable);
console.log("greenBattery color: ", greenBattery.color);

// Mug Method Testing
greenMug.changeColor("red");
greenMug.toggleHandle(false);
greenMug.changeTeaBrand("Arizona");
greenMug.changeTeaFlavor("Ginseng");
greenMug.teaTemp("warm");
console.log("greenMug color: ", greenMug.color);
console.log("greenMug handle: ", greenMug.handle);
console.log("greenMug Tea Brand: ", greenMug.tea.brand);
console.log("greenMug Tea Flavor: ", greenMug.tea.flavor);
console.log("greenMug Tea Temp: ", greenMug.tea.warmth);

// Backpack Method Testing
greenBackpack.toggleLid(false);
greenBackpack.newStrapLength(17.5, 19.5);
console.log("greenBackpack name: ", greenBackpack.name);
console.log("greenBackpack lid: ", greenBackpack.lidOpen);
console.log(
  "greenBackpack strap(left, right)",
  greenBackpack.strapLength.left,
  greenBackpack.strapLength.right
);
