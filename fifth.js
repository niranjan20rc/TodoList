// ## **Question 5 --- The Unstable Island Chains**

// ### **Problem**

// You are given a 2D grid of 0s and 1s representing water and land.\
// A *land cell* is unstable if: - It is land (1)\
// - It connects horizontally or vertically to **exactly one** other land
// cell

// Count the number of unstable cells across the entire grid.

// ### **Conditions**

// -   1 ≤ rows, cols ≤ 2000\
// -   Must be optimized (avoid repeated scanning)\
// -   4‑direction adjacency only

// ### **Sample Input**

//     Grid:
//     1 1 0
//     0 1 0
//     1 0 1

// ### **Sample Output**

//     Unstable Cells: 3

// ------------------------------------------------------------------------


let arr=[[1,1,0],[0,1,0],[1,0,1]];


let dir =[
    [-1,0],
    [1,0],
    [0,-1],
    [0,1]
]

let max=0;
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr[i].length;j++)
        {
            if(arr[i][j]==1){
                
                let c=0;
            
            for( let [dr,dc] of dir)
            {
                let nr=i+dr;
                let nc=j+dc;

                if(nr>=0 && nr<arr.length &&
                    nc>=0 && nc<arr[i].length &&
                    arr[nr][nc]==1
                )
                {
                    c++;
                }
            }
            if(c===1) max++
        }        

    }
}
console.log(max); 