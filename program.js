// 1.remove duplicates

// let arr=[1,2,2,3,3];

// let res =[...new Set(arr)];
// console.log(res);


// 2.frequency

// let arr=[1,2,3,4,4,2,5];

// let map=new Map();

// for(let i=0;i<arr.length;i++)
// {
//     map.set(arr[i],(arr[i]||0) +1);
// }

// console.log(map);

// 3.reverse


// let s="hello";

// let s1=s.split("").reverse().join("");
// if(s===s1)
//     console.log("palindrome");
// else
//     console.log("not palaindrome")


// 4.max,Min 

// let arr=[1,2,3,5]
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

//sum of array

// console.log(arr.reduce((a,b)=>a+b,0));

// missing n8umber 
// let n=arr.length+1;

// let total =n*(n+1)/2;
// let sum= arr.reduce((a,b)=>a+b,0);

// console.log(total-sum);


// let s=" i hello welcome"


// console.log(s.split(" ").reverse().join(" "));



// let arr=[1,2,3,4,5,5];

// let u=[...new Set(arr)];

// u.sort((a,b)=> b-a);

// console.log(u[1]);



// let s="buddy";

// let c=0;
// let vowel ="aeiouAEIOU";

// for(x of s)
// {
//     if(vowel.includes(x))
//     {
//         c++;
//     }
// }

// console.log(c);




// let s=" my name is mohammed ashik ";

// let w= s.trim().split(" ");
// let max="";

// for(let x of w)
// {
//     if(x.length>max.length)
//     {
//         max=x;
//     }
// }
// console.log(max);


// fibonacci 
let s="aeiouwwwaqqqq";
console.log(s.replace(/[aeiouAEIOU]/g,""));