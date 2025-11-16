// ## **Question 4 --- The Rotating XOR Cipher**

// ### **Problem**

// You receive a sequence of integers and a rotation count `R`.\
// Perform the following transformation:

// 1.  Rotate the list right by `R` positions\

// 2.  Compute a cumulative XOR:

//         output[i] = arr[0] XOR arr[1] XOR ... XOR arr[i]

// Return the final transformed list.

// ### **Conditions**

// -   1 ≤ N ≤ 300,000\
// -   0 ≤ R ≤ 10⁹\
// -   Must compute rotation efficiently

// ### **Sample Input**

//     R = 2  
//     List: 4 1 3 2

// ### **Sample Output**

//     After Rotation: 3 2 4 1  
//     Final XOR List: 3 1 5 4


function xor(arr,R)
{
    const n=arr.length;
    R=R%n;

    const rotated =arr.slice(n-R).concat(arr.slice(0,n-R));


    let res=[];
    let cur=0;
    for(let i=0;i<rotated.length;i++)
    {
        res.push(cur^rotated[i]);
        cur=cur^rotated[i];
    }
    console.log(res);
}


let R=2;
let arr=[4,1,3,2];
xor(arr,R);

