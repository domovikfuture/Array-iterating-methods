"use strict";

//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter((name)=>{
    return name.length < 5;
});

console.log(shortNames);

//map

const answers = ['IvaAN', 'AnNa']; // или let answers....

const result = answers.map(item=> item.toLowerCase()); // или answers = answers.map.....

console.log(result);

//some

const some = [4, 'qew', 'wefdsewq'];

console.log(some.some(()=>{
    return typeof(item) === 'number';
})); // получаем true, т.к один из элементов число

//every

const every = [4, 'qew', 'wefdsewq'];

console.log(every.every(()=>{
    return typeof(item) === 'number';
})); // получаем false, т.к не каждый элемент число

//reduce

const arr = [4,5,1,3,2,6];

const res = arr.reduce((sum, current)=> sum + current, 3); // 3 аргумент - начальное значение 3, вместо 0
console.log(res);

///////////Практика/////////////
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item=> item[0]);

console.log(newArr);
































