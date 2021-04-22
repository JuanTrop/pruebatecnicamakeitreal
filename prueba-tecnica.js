const count = (str, char) => {
    let matches = 0;
	matches = str.search(char);

    return (matches == -1 || matches == 0) ? 0 : matches;
};

console.log(count("Hello", "l"));
console.log(count("Hola", "g"));


//Segundo ejercicio

const filter = (numberArray) => {

    let moreThanTen = (value) => value > 10;

    result = numberArray.filter(moreThanTen)

    return result;
}; 

console.log(filter([3, 12, 45, 7])); // retorna [12, 45]
console.log(filter([3, 5]));         // retorna []

//Tercer ejecicio

const hypotenuse = (a, b) => (a**2 + b**2)**(0.5);

console.log(hypotenuse(3, 4));    // retorna 5
console.log(hypotenuse(10, 13));  // retorna 16.401219466856727