const country = "India";
const continent = "Asia";
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

const island = false;
let language;

console.log(island);
console.log(population);
console.log(country);
console.log(language);

population++;
console.log(population);

const description = `${country} population is ${population}`;
console.log(description);
console.log(population > 9);

if (population > 9) {
    console.log("population is 10m");
} 
else {
    console.log("population is less than 10m");
}

console.log('9' - '5'); // -> ?
console.log('19' - '13' + '17'); // -> ?
console.log('19' - '13' + 17); // -> ?
console.log('123' < 57); // -> ?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?

numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
console.log(numNeighbours);

if (numNeighbours === 1) {
    console.log("Only 1 border!");
}
else if (numNeighbours > 1){
    console.log("More than 1 border!");
}
else {
    console.log("No borders");
}

if (language === 'English' && population < 50 && !island) {
    console.log(`You should live in ${country} :)`);
}
else {
    console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
    case 'chinese':
    case 'mandarin':
      console.log('MOST number of native speakers!');
      break;
    case 'spanish':
      console.log('2nd place in number of native speakers');
      break;
    case 'english':
      console.log('3rd place');
      break;
    case 'hindi':
      console.log('Number 4');
      break;
    case 'arabic':
      console.log('5th most spoken language');
      break;
    default:
      console.log('Great language too :D');
  }

  // knowing the type of the data
  console.log(typeof true);

  // type conversion
  
