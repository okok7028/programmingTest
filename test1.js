const Bread = (breadType, recipe) => {
    const bread = {};
    bread.breadType = breadType;
    bread.recipe = { ...recipe };
    return bread;
};

const list = [];

const creamBread = Bread("cream", {flour: 100, water: 100, cream: 200});
const sugarBread = Bread("sugar", {flour: 100, water: 50, sugar: 200});
const butterBread = Bread("butter", {flour: 100, water: 100, butter: 50});

list.push(creamBread);
list.push(sugarBread);
list.push(butterBread);

list.forEach(bread => {
    const { breadType, recipe } = bread;
    console.log(`breadType: ${breadType}`);
    console.log("recipe");
    console.log(`flour: ${recipe.flour}`);
    console.log(`water: ${recipe.water}`);
    console.log(`${breadType}: ${recipe[breadType]}`);
    console.log("");
});