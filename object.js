const car = {
    make : "ford",
    model : "mustang",
    color : "black",
    type : "sedan",
    tires : "firestone",
    mode : "sport",
    gasoline : "super",
    startEngine : function() { //prompt 7
        return "VROOM VRROOM!";
      },
    turnOffEngine : function() { //prompt 8
        return "Car Turned Off";
    }
   }

console.log(car);
//prompt 2
function carStuff() {
    
    let results = [];

    for(let propName in car){
        console.log(propName);
        results = propName;
    }
    return results;
}
//Prompt 3
delete car.gasoline;
console.log(car);

//Prompt 4
const personProps = Object.keys(car);
console.log(personProps);

//Prompt 5
const personVals = Object.values(car);
console.log(personVals);

//Prompt 6 
car.tints = '33%';
car.carPlay = true;
console.log(car);

//Prompt 7
console.log(car.startEngine());

//prompt 8
console.log(car.turnOffEngine());

//prompt 9
function carPrompt() {
    for(let prop in car){
        console.log(prop);
    }
}

//prompt 10
const duck = {
    name: 'Chicken Nugget',
    favoriteFood: ['bread', 'whopper', 'french fries', 'small fish', 'fish eggs'],
    canfly: true,
    age: 1,
    smart: 'dumb',

    chirpSound: function(){
        console.log("Quack");
    },

    birdDiet: function(){
        console.log(this.favoriteFood);
    },

    fly: function(){
        if(this.canfly == true){
            console.log('I live in the sky');
        } else{
            console.log("I'd like to stay on the ground");
        }
    }
}

//prompt 11
const cloutHouse = {
    name: 'Clout House',
    age: 20,
    owner: 'Justin Lorenzo',
    size: '8000ft',
    isClout: true,
    advantages: {pool: true, size: 'massive', clout: 'large', rich: true},
    favoriteWeather: ['Fall', 'Winter', 'Summer'],
    weather: function(){
        console.log(this.favoriteWeather);
    },
    people: function(){
        console.log('clout Gang');
    },
    isSold: function(){

        if(this.owner !== 'Justin Lorenzo'){
            console.log('House was sold');
        } else{
            console.log('Justin Lorenzo still owns Clout House');
        }
    }
}