/*Write a function that accepts an array of strings and console.
logs each element using a for loop.*/
function arrayString(){
let x = [30,2,50,40,23,20,10];
for (let i = 0; i< x.length;i++){
  console.log(x[i])
}
}
arrayString()

/*Write a function that accepts an array of numbers and uses the forEach() method to console.
log each number multiplied by 2.*/
function multiplyByTwo() {
  let multiplyByTwo = [2,9,5,60,30]
  multiplyByTwo.forEach(num => {
  console.log(num * 2);
  });
  }
  multiplyByTwo();

/*Write a function that takes in an array of numbers and consoles the first four items multiplied
 by 8 and the last two added by 5.
 Console the array with the new values */
 let arr1 = [3,4,5,2,6,7];
 multiplyNumbers(arr1);
 function multiplyNumbers(num) {
     for (let i = 0; i < 4; i++) {
       num[i] = num[i] * 8;
     }
     let lasttwo= num.length - 1;
     num[lasttwo] += 5;
     num[lasttwo- 1] += 5;
     console.log(num);
 }
 

  /*Write a function that takes in the following
   array and use a while loop to iterate 
   and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9]; */
function breakAtIndexFour(arr) {
  let i = 0;
  while(i < arr.length) {
  if(i === 5) {
  break;
  }
  console.log(arr[i]);
  i++;
  }
}
  let arrNum = [1,2,3,4,5,6,7,8,9];
  breakAtIndexFour(arrNum);
  
  
  
  

  /*Write a function that takes in a an array of 
  strings and use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi'] */
function printFruits(arr) {
  for (let i = 0; i < arr.length; i++) {
  if (i === 2) {
  continue;
  }
  console.log(arr[i]);
  }
  }
  
  let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
  printFruits(fruits);