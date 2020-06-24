class User{
    constructor(name){
        this.name = name ;
    }
    sayHi(){
        alert(this.name);
    }

}
let user =new User("John");

function sumAll(...args){
let sum = 0;
console.log(args)
for(let arg of args) sum+=arg;
return sum;
}


let arr = [1,2,3]
let arr2 = [4,5,6]
let merged = [...arr,...arr2]

let arr =["1","2"]
let [aa,bb]=arr

let aa = 1;
let bb = 2;
[aa,bb] = [bb,aa]
console.log(bb)
