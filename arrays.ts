const carMakers = ["ford", "toyota", "Volkswagen"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f115"], ["corrola"], ["golf 4"]];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incopatible values
carMakers.push(100);

//Help with 'map'

carMakers.map((car: string): string => {
  return car;
});

//Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push("2020-10-20");
importantDates.push(new Date());
importantDates.push(100);
