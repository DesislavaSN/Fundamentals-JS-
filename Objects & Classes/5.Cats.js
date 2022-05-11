//5.	Cats
 
function catsProblem(arr){
    class Cat {
        constructor (name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
 
    let cats = [];
    for(let i = 0; i < arr.length; i++){
        let catData = arr[i].split(" ");
        // console.log(catData);
        let name = catData[0];
        let age = Number(catData[1]);
        let cat = new Cat(name, age);
        cats.push(cat);
    }
 
    for(let cat of cats){
        cat.meow();
    }
}
 
catsProblem(['Mellow 2', 'Tom 5']);
catsProblem(['Mellow 2', 'Tom 5']);