/** 
 Given an array of 1s and 0s which has all 1s first followed by all 0s, 
 write a function called countZeroes, which returns the number of zeroes in the 
 array.

 Constraints:
 Time Complexity: O(log N)
*/

const countZeroes = (arr) => {
    /** 
      Since all 1s are followed by zero's and the tests show that no 1s follow zero,
      If the first value is zero then return the length of the array would all be zero's.
    */
    if (arr[0] === 0) return arr.length;

    /** 
      Initializing left index to be zero which is the first value of the array.
      Initializing the right index to get the last value of the array by
      using arr.length - 1.
    */ 
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    /**
      While the left index is less than or equal to the right index.
      Initialize the middle index to be the Math floor average of left
      plus right index divided by 2.
    */
    while (leftIdx <= rightIdx) {
      const midIdx = Math.floor((leftIdx + rightIdx) / 2);

    /**
      If the middle index value equals zero and the left value of the middle
      index equals one return the array length minus the middle index. This 
      meams 0 was found because if the left of the midIndx which is 1 then 
      according to the rules everything after that 1 will be zero. From there you
      can subtract the arr.length from the midIdx to count zero's.
    */
      if (arr[midIdx] === 0 && arr[midIdx - 1] === 1) return arr.length - midIdx;
      
    /**
      If the middle index value is equal to 1 the new value of left index 
      is equal to middle index plus 1 else if the middle index value is zero
      the right index new value is middle index minus 1. This continues the search
      to count the zero's. 
    */

      arr[midIdx] === 1 ? leftIdx = midIdx + 1 : rightIdx = midIdx - 1;
    }
    /**
      Return zero if zero is not found in the array
    */
    return 0;
}


module.exports = countZeroes