/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const Battery = {
  volts: 1.2,
  milAmpHours: 1900,
  color: "white",
  brand: "Eneloop",
  rechargeable: true,
  type: "Ni-MH",
};

const Mug = {
  color: "grey",
  handle: true,
  tea: {
    brand: "Tazo",
    flavor: "China Green Tips",
    heat: "warm",
  },
  weight: "8.6oz",
};
