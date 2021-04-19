/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  rename: function (newName) {
    this.name = newName;
  },
  changeVolume: function (newVol) {
    this.volume = newVol;
  },
  recolor: function (newColor) {
    this.color = newColor;
  },
  changePockets: function (newNumber) {
    this.pocketNum = newNumber;
  },
};
backpack.changePockets(50);
backpack.toggleLid(true);
backpack.changeVolume(75);
backpack.recolor("green");
