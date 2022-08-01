var fruits=['Apple','Banana','Orange'];
var index=fruits.indexOf('Banana');
console.log(index);
if(-index){
    fruits[index]='Mango';
}
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);