let animals = new Set(["Tiger", "Bear", "Lion"])

animals.add("Monkey")

console.log(animals)

if (animals.has('Tiger')) {
    console.log('Tiger exists in the zoo');
}

animals.delete('Bear');
console.log(animals)

animals.forEach(animal => console.log(animal))