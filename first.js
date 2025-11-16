// # **Question 1 --- The Shifting Pyramid**

// ### **Problem**

// You are given a list of positive integers. You need to repeatedly
// perform the following operation until the list becomes strictly
// increasing:

// -   Find every pair of adjacent elements where `A[i] >= A[i+1]`
// -   Increase `A[i+1]` just enough so that `A[i+1] > A[i]`

// Return the final modified list and the total number of increments
// performed across the entire process.

// ### **Conditions**

// -   1 ≤ N ≤ 2000\
// -   1 ≤ A\[i\] ≤ 10⁹\
// -   Must avoid brute force that loops unnecessarily

// ### **Sample Input**

//     5
//     4 4 2 2 1

// ### **Sample Output**

//     Final List: 4 5 6 7 8
//     Total Increments: 14



let arr=[4,4,2,2,1];

function pyramid(arr){
    let count=0;
    let max=arr[0];
    let arr2=[];
    arr2.push(arr[0]);
    console.log(arr.length)
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]>=max)
        {
            if(arr[i]==max)
            {
                max=max+1;
                arr2.push(max)
                count++;
            }
            else{

                max=arr[i];
                arr2.push(arr[i]);
            }
        }
        else
        {
            let ll=max+1 -arr[i];
            count+=ll;
            arr2.push(max+1);
            max=max+1;
        }
    }
    console.log(arr2);
    console.log(count);

}


console.log(pyramid(arr));