
// ## **Question 3 --- Missing Pair Sum**

// ### **Problem**

// You are given an integer `K` and a list of integers. Two numbers form a
// *valid pair* if their sum equals `K`. Pairs cannot share elements. Some
// elements may remain unused.

// Your task is to return: - Number of valid non‑overlapping pairs - The
// count of leftover elements that could *never* be part of any pair
// summing to K

// ### **Conditions**

// -   1 ≤ N ≤ 200,000\
// -   Integer values can be negative\
// -   Must avoid O(N²) solutions

// ### **Sample Input**

//     K = 10  
//     List: 3 7 5 5 1 9 2 8

// ### **Sample Output**

//     Valid Pairs: 3  
//     Leftover Elements: 2

let k=10;
let arr=[3,7,5,5,1,2,5,9,3,,2,8];



let freq =new Map();
let c=0;
for(let i=0;i<arr.length;i++)
{
    let y=k-arr[i];

    if(freq.get(y)>0)
    {
        c++;
        freq.set(y,freq.get(y)-1);

    }
    else{
        freq.set(arr[i],(freq.get(arr[i])||0)+1);
    }
}

let h=0;
for(let x of freq.values())
{
    h+=x;
}

console.log("valid pair",c);
console.log("leftout ",h);


