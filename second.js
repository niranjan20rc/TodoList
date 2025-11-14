// ## **Question 2 --- The Mirror Segment Split**

// ### **Problem**

// A string is considered *mirror‑splittable* if it can be split into
// exactly **two non‑empty parts A and B** such that:

//     reverse(A) == B  OR  reverse(B) == A

// Return **YES** if such a split exists, otherwise **NO**.

// ### **Conditions**

// -   String length ≤ 200,000\
// -   Only lowercase letters\
// -   Must avoid checking every possible split naively

// ### **Sample Input**

//     xab cba


// a=bax
// b=cba

// b=abc
// a=bax




// ### **Sample Output**

//     YES

// ------------------------------------------------------------------------



function mirrorSplit(s) {
    const n = s.length;

    // helper: check if reverse(a) == b
    function isMirror(a, b) {
        if (a.length !== b.length) return false;
        for(let i=0;i<a.length;i++)
        {
            if(a[i]!=b[b.length-1-i]) return false;
        }
        return true;
    }

    // Try all valid split points
    for (let i = 1; i < n; i++) {
        let A = s.slice(0, i);
        let B = s.slice(i);

        if (isMirror(A, B) || isMirror(B, A)) {
            return "YES";
        }
    }

    return "NO";
}

// Example
console.log(mirrorSplit("abccba")); // YES
