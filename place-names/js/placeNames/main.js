// Put your code here

const names = [
   "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

console.log("All Place Names");

const StartsWithThe = names.filter(name => name.includes("The"));

for (const name of StartsWithThe) {


  console.log(name);
}
