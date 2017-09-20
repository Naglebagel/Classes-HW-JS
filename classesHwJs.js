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