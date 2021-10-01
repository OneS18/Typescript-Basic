interface Rapotable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const juice = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink  has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Rapotable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(juice);
