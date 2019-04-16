const { succeed, fail, repair, get } = require("./enhancer.js");
// test away!

it("should increase enhancement by 1", () => {
  expect(succeed({ name: "Weapon", enhancement: 15, durability: 98 })).toEqual({
    name: "Weapon",
    enhancement: 16,
    durability: 98
  });
});

it("Should return the item with a replenished durability of 100", () => {
  expect(repair({ name: "Hammer", enhancement: 13, durability: 20 })).toEqual({
    name: "Hammer",
    enhancement: 13,
    durability: 100
  });
});
