class Pet {
	constructor(name){
		this.name = name;
		this.owner = '';
	}
	setOwner(owner){
		this.owner = owner
	}
};

const cat = new Pet('bob');
cat.setOwner('Dave');
console.log(cat);

class Dog extends Pet {
	constructor(name, price){
		super(name);
		this.price = price;
	}
	bark(){
		console.log("bark");
	}
	chaseTail(){
		console.log("oh boy oh boy oh boy");
	}
	getPrice(){
		return this.price;
	}
};

const sparky = new Dog('Sparky', 3);
sparky.setOwner('Robert');
sparky.bark();
sparky.chaseTail();
sparky.getPrice();
console.log(sparky);

class Cat extends Pet{
	constructor(name, price){
		super(name);
		this.price = price;
	}
	purr(){
		console.log('purrrrr');
	}
	clean(){
		console.log('cleaning');
	}
	getPrice(){
		return this.price;
	}
};

const sprinkles = new Cat('Sprinkles', 5);
sprinkles.setOwner('Karen');
sprinkles.purr();
sprinkles.clean();
sprinkles.getPrice();
console.log(sprinkles);


class Person{
	constructor(name){
		this.name = name;
		this.age = 0;
		this.weight = 0;
		this.mood = 0;
		this.pets = [];
		this.bankAccount = 0;
	}
	getName(){
		return this.name;
	}
	getAge(){
		return this.age;
	}
	getWeight(){
		return this.weight;
	}
	greet(other_person){
		console.log("Hello " + other_person);
	}
	eat(){
		this.weight += 30;
		this.mood += 10;
	}
	excercise(){
		this.weight -= 10;
	}
	newAge(){
		this.age += 25;
		this.weight +=75;
		this.mood -= 5;
		this.bankAccount += 10;
	}
	buyPet(pet){
		this.pets.push(pet);
		this.mood += 10;
		pet.getPrice();
		this.bankAccount = this.bankAccount - pet.getPrice();
	}
}

const jill = new Person('Jill');
jill.getName();
jill.getAge();
jill.getWeight();
jill.greet('Dylan');
jill.eat();
jill.excercise();
jill.newAge();
jill.buyPet(sprinkles);
sprinkles.setOwner('Jill');
console.log(jill);










