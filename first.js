
// const profile ={
//     userName:"Shradhha Khapra",
//     isFollow:true,
//     followers:40,
//     following:4
// };
// console.log(typeof profile["userName"]);

// let number=prompt("Enter a number");
// if (number%5 === 0) {
//     console.log(number," is divide by 5");
// } else {
//     console.log(number," is not divide by 5");
// }

// let marks=prompt("enter your marks");
// if(marks>=80 && marks<=100){
//     alert("you have grade A");
// }else if(marks>=70 && marks<=89){
//     alert("you have grade B");
// }else if(marks>=60 && marks<=69){
//     alert("you have grade C");
// }else if(marks>=50 && marks<=59){
//     alert("you have grade D");
// }
// else{
//     alert("you are failed");
// }



//LOOP
// count=0
// for(let i=0;i<=100;i++){
//  if(i%2 == 0)
//  console.log(i);
//  count++;
// }
// console.log("total count of even number",count);

// let str="sakshi sambhaji gavali";
// for(let i of str){
//     console.log(i);
// }


//automatic ID generator
// let str=prompt("Enter your full name:");
//    let Leng = str.length;
//   let str1="@"+ str+ str.length;
//    console.log(str1);


//ARRAY average of marks
// let marks=[85,97,44,37,76,60]
// let sum=0;
// for(let el of marks){
//   sum=sum+el;
// }
// console.log("Sum of the marks is:\t",sum)
// let avg=sum/marks.length;
// console.log("the average of marks is:",avg);


// array with value of 10%
// let item=[250,645,300,900,50]
// let i=0;
// for(let val of item){
//     console.log(`value at index ${i}=${val}`);
//     let offer=val/10;
//     item[i]=item[i]-offer;
//     console.log(`value after the offer is ${item[i]}`);
//     i++;
// }
// console.log(item);


// let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(company);
//  let comp=company.shift();
//  console.log(comp);
//  console.log(company);


//  let cond=company.splice(1,1,"Ola");
//  console.log(company);

//  company.push("Amazon");
//  console.log(company);

// function countVowel(str){
//   let count=0;
//   for(let i of str){
//     if(i=="a" || i=="e" ||i=="o" ||i=="i" ||i=="u"){
//         count++;
//     }
//   }
//   console.log(count);
// }
// countVowel("sakshi");


// let arr=[7,5,2,4];
// let i=0;
// let target=9;
// if(arr[i]>=target){
//     i++;
// }
// elseif(target < arr[i]){
//     let result=target-arr[i];
//     for(let item of arr){
//         if(result==arr[item])
//         console.log(arr.item);
//     }
//     console.log("output",arr[i],arr[item]);
// }

// let arr = [7, 8,3,1];
// let target = 9;

// for (let i = 0; i < arr.length; i++) {
//     let result = target - arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//         if (result === arr[j]) {
//             console.log("output:", arr[i], arr[j]);
//             break; // Stop after finding the first pair
//         }
//     }
// }


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     const numIndices = new Map(); // Map to store indices of numbers
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i]; // Calculate the complement
//         if (numIndices.has(complement)) {
//             // If complement exists in the map, return the indices
//             return [numIndices.get(complement), i];
//         }
//         // Store current number's index in the map
//         numIndices.set(nums[i], i);
//     }
//     // If no solution is found, return empty array
//     return [];
// };

// // Example usage:
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); // Output: [0, 1]


//  let marks=[87,93,64,99,86];
//  let result=marks.filter((val)=>{
//     return val>90;
//  });
//  console.log(result);

// let n=prompt("enter the numbers");
// let arr=[];
// for(let i=1;i<=n;i++){
//   arr[i-0]=i;
// }
// console.log(arr);
// let arr1=arr.reduce((val,next)=>{
//     return val+next, val*next;
// });
// console.log(arr1);

//***********DOM MANIPULATION

//let ex=document.getElementById("sak");
//console.log(ex);
//console.dir(ex);

// let ex=document.getElementsByClassName("sak1");
// console.log(ex);

// let ex=document.querySelector("div");
 //console.log(ex);
//  let ex=document.querySelectorAll("div");
//  console.log(ex);



// let ex=document.getElementById("sak");
// console.log(ex);
// let ex1=ex.getAttribute("id");
// console.log(ex1)

// let ex=document.querySelector("div");
//  console.log(ex.setAttribute("id","sak2"));

// let ex=document.querySelector("div");
// ex.style.backgroundColor="pink";

// let newbtn=document.createElement("button");
// newbtn.innerText="Click me";
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
// let el=document.querySelector("body");
// el.prepend(newbtn);

//let btn=document.querySelector("button");
// btn.onclick =()=>{
//     console.log("sakshi");
// };

// const hb=()=>{
//     console.log("sakshi gavali");
// });

// btn.removeEventListener(hb);



//MODE CHANGE EXAMPLE

// let btn=document.querySelector("#btn");
// let mode="dark";
// btn.addEventListener("click",() =>{
//   if(mode == "dark"){
//     mode="light";
//     document.querySelector("#btn").style.backgroundColor="black";
//     document.querySelector("#btn").style.color="white";
//   }else{
//     mode="dark";
//     document.querySelector("#btn").style.backgroundColor="white";
//     document.querySelector("#btn").style.color="black";
//   }
// });

let para=document.querySelector("div");
let mode="aqua";
para.addEventListener("mouseover",() =>{
  if(mode == "aqua"){
    mode="black";
    document.querySelector("div").style.backgroundColor="black";
    document.querySelector("div").style.color="white";
  }else{
    mode="black";
    document.querySelector("div").style.backgroundColor="aqua";
    document.querySelector("div").style.color="black";
  }
});
