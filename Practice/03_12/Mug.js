const Mug = class {
  constructor(color, handle, teaBrand, teaFlavor, teaWarmth, weight) {
    this.color = color;
    this.handle = handle;
    this.tea = {
      brand: teaBrand,
      flavor: teaFlavor,
      warmth: teaWarmth,
    };
    this.weight = weight;
  }
  changeColor = function (newColor) {
    this.color = newColor;
  };
  toggleHandle = function (handleType) {
    this.handle = handleType;
  };
  changeTeaBrand = function (newBrand) {
    this.tea.brand = newBrand;
  };
  changeTeaFlavor = function (newFlav) {
    this.tea.flavor = newFlav;
  };
  teaTemp = function (newTemp) {
    this.tea.heat = newTemp;
  };
};
export default Mug;
