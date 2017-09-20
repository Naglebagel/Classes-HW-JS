class Pet {
	constructor(name){
		this.name = name;
		this.owner = '';
	}
	setOwner(owner){
		this.owner = owner
	}
}

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
}

const sparky = new Dog('Sparky', 100);
sparky.setOwner('Robert');
sparky.bark();
sparky.chaseTail();
sparky.getPrice();
console.log(sparky);

