// try {
//     console.log('hello')
// }catch(err) {
//     console.log('caught')
// }

// /////
// try {
//     throw new Error();
//     console.log('hello')
// }catch(err) {
//     console.log('goodbye')
// }

// //
// var str = "Hello";
// str.match("jello");

// try {
//     Number(5).toPrecise(300)
// }catch(e) {
//     console.log("There was an error")
// }


// //

// //

// function meal(animal) {
//     animal.food = animal.food + 10;
// }


// var dog = {
//     food: 10
// };
// meal(dog);
// meal(dog);

// console.log(dog.food);

// function two() {
//     return 2;
// }
// function one() {
//     return 1;
// }

// function calculate(initialValue, incrementValue) {
//     return initialValue() + incrementValue() + incrementValue(); 
// }

// console.log(calculate(two, one));



// var purchase1 = {
//     shoes: 100,
//     stateTax: 1.2,
//     totalPrice: function() {
//         var calculation = this.shoes * this.stateTax;
//         console.log("price: ", calculation);
//     }
// }
// purchase1.totalPrice()

// class Animal {}
// let myDog = Object.create(Animal);
// console.log(Animal);

// // class Animal {}
// // let meDog = new Animal();
// // console.log(Animal);


// class tecno {
//     useCase() {
//         console.log("Good product!");
//     }
// }
// class infinix extends tecno {
//     useCase() {
//         super.useCase()
//         console.log("great product!");
//     }
// }
// class oppo extends tecno {
//     useCase() {
//         console.log("nice product");
//     }
// }

// let noAdd = new infinix();
// let secondAdd = new oppo();
// noAdd.useCase();
// secondAdd.useCase();






// const bird = {
//     firstOne: 10,
//     secondOne: 15,
//     thirdOne: 50
// }
// let newVar = Object.create(bird)
// console.log(newVar)
// console.log(newVar.firstOne);
// console.log(newVar.secondOne);
// console.log(newVar.thirdOne);

// let anotherVar = Object.create(bird);
// anotherVar.secondOne = 100;
// console.log(anotherVar.secondOne);




// // let anotherTrain = new Train('red', false);
// // console.log(anotherTrain);

// class Train{
//     constructor(color, lightsOn) {
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }
//     toggleLights() {
//         this.lightsOn = !this.lightsOn;
//     }
//     lightStatus() {
//         console.log('Is the lights ON?', this.lightsOn);
//     }
//     getSelf() {
//         console.log(this);
//     }
//     getPrototype() {
//         let proto = Object.getPrototypeOf(this);
//         console.log(proto);
//     }
// }
// let Train2 = new Train('blue', false);
// Train2.toggleLights();
// Train2.lightStatus();
// Train2.getSelf();
// Train2.getPrototype();


// class Cake {
//     constructor(lyr) {
//         this.layers = lyr + 1;
//     }
// }
// let result = new Cake(1);
// console.log(result.layers);


// class Animal {
//     constructor(lg) {
//         this.legs = lg;
//     }
// }

// class Dog extends Animal {
//     constructor() {
//         super(4);
//     }
// }

// var result = new Dog();
// console.log(result.legs);

class Animal {

}

class Cat extends Animal {
  constructor() {
    super();
    this.noise = "meow";
  }
}

var result = new Animal();
console.log(result.noise);


class Person {
    sayHello() {
        console.log("Hello");
    }
}

class Friend extends Person {
    sayHello() {
        console.log("Hey");
    }
}

var result = new Friend();
result.sayHello();


/////
const colors = ["yellow", "orange", "green"];

for (let color of colors) {
  console.log(color);
}

var clothingItem = {
  price: 50,
  color: 'beige',
  material: 'cotton',
  season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
  console.log(key, ":", clothingItem[key])
}


const animal = {
  canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (let anotherBird of Object.keys(bird)) {
    console.log(`${anotherBird}: ${bird[anotherBird]}`);
  }
}
birdCan();

function againBird() {
  for (let anotherBird in bird) {
    console.log(`${anotherBird}: ${bird[anotherBird]}`)
  }
}
againBird();


const fruits = ['orange', 'apple', 'banana', 'mango'];
function appendIndex(fruits, index) {
  console.log(`${index}. ${fruits}`)
}
fruits.forEach(appendIndex);


