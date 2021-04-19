const Battery = class {
  constructor(volts, milAmpHours, color, brand, rechargeable, type) {
    this.volts = volts;
    this.milAmpHours = milAmpHours;
    this.color = color;
    this.brand = brand;
    this.rechargeable = rechargeable;
    this.type = type;
  }
  changeVolts = function (newVolts) {
    this.volts = newVolts;
  };
  flipChargeable = function (toggle) {
    this.rechargeable = toggle;
  };
  changeType = function (newType) {
    this.type = newType;
  };
  recolor = function (newColor) {
    this.color = newColor;
  };
  rebrand = function (newBrand) {
    this.brand = newBrand;
  };
};
export default Battery;
