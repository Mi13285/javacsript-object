// let user={
//     name: "John",
//     surname:"Smith",

// }
// delete user.name
// console.log(user)
// console.log(user.surname)
// console.log(user[surname]);
// user.name="slava"
// console.log(user.name);

// let admin={
//     name:"Misha",
//     age: 28,
//     surname:"Kudinov"
// };
// console.log(admin.age);

// let mam={
//     name: "Oksana",
//     age: 48,
//     surname:"Kudinova",
// }
// console.log(mam.name);
// console.log(mam.surname);
// console.log(mam.age);
// for(let famaly in mam){
//     console.log(mam);
//     console.log(mam[famaly]);
// }

// let shop = {
//     make: "computer",
//     cost: 20000,
//     "made in usa":"techlogy",
// }
// console.log(shop["made in usa"]);

// let boy= {
//     name:"Саша"
// }
// boy.name="Cлава"
// console.log(boy.name);

// let boy= {
//     "1":"Misha",
//     "2":"Slava",
//     "3":"Alex",
// }
// for (let boys in boy);
// console.log(boy);

// let boy={
//     name:"Misha",
//     age:28,
// }
// console.log( "name"in boy );
// function isEmpty(obj) {
//     console.log(obj.constructor.length);
//   for (let lol in obj) {
//     return false;
//   }
//   return true;
// }
// let schedule = {};

// console.log(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule)); // false

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
function summa(obj) {
  let sum = 0;
  console.log(obj);
  for (let lol in obj) {
    console.log(lol);
    console.log(obj[lol]);
    sum += obj[lol];
  }
  return sum;
}
let salaries1 = {};
console.log(summa(salaries));
console.log(summa(salaries1));

// / до вызова функции
// function multiplyNumeric(obj){
//     for (let lol in obj){
//         console.log(lol)
//         console.log(obj[lol])
//         console.log(typeof(obj[lol]))
//       if  (typeof(obj[lol])==="number"){
//         console.log("это число")
//         obj[lol] *=2

//       }
//     }
// }
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);
// console.log(menu)

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function summa(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     console.log(obj);
//     console.log(obj[key]);
//     sum += obj[key];
//   }
//   return sum;
// }

// let salaries1 = {};
// console.log(summa(salaries));
// console.log(summa(salaries1));

function multiplyNumeric(obj) {
  for (let key in obj) {
    console.log(obj);
    console.log(obj[key]);
    console.log(key);
    console.log(typeof obj[key]);
    if (typeof obj[key] === "number") {
      console.log("ghh");
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

// multiplyNumeric(menu);
// console.log(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };

// let student = {
//   name: "Misha",
//   age: 28,
// };

// let copyStudent = Object.assign({},student);
// student.name ="pasha";
// console.log(student.name);
// console.log(copyStudent.name);

// let car = {name:"BmV",};
// let car1= car;
// console.log(car1);

// let group = {
//   boys:28,
//   girls:30,
// }
//  let group1 = Object.assign( {},group);
//  group.boys = 50;
// console.log(group.boys);
// console.log(group1.boys)

// let robot = {
//   name: "Bars",
//   tip: "tanks",
//   country: {
//     made: "Germany",
//     made1: "Usa",
//   },
// };
// let copyRobot = Object.assign({},robot)
// console.log(robot);
// robot.skils = "china lang";
// console.log(robot.tip);
// console.log(robot.country.made);
// console.log(robot.country.made1);
// console.log(robot.skils);
// console.log(robot.country);
// console.log(copyRobot);

// let girl = {
//   name:"Vera",
//   age: 18,
//   University :"Ural Medicin Univerty",
// };
// let student = girl;
// console.log(student);
// console.log(girl);
// student = null;
// console.log(student);

// let calculator = {

//   read() {
//     this.y =  +prompt ("Запишите число");
//     this.x = +prompt("Запишите втрое число");

//   },
//   sum() {

//    return this.y+this.x

//   },
//   mul() {

//     return  this.y * this.x

//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  },
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep();

ladder.up().up().down().showStep().down().showStep();
