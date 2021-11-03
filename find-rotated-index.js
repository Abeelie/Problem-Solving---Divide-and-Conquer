/** 
 Write a function called findRotatedIndex which accepts a rotated array of 
 sorted numbers and an integer. The function should return the index of num in 
 the array. If the value is not found, return -1.

 Constraints:
 Time Complexity: O(log N)
*/

const findRotatedIndex = (arr, num) => {
    /**
      Initalizing the left and right side variables to be used in the split array
      to hold half of the array values of the passed in arr argument. 
    */
    let leftSideOfSplitArray;
    let rightSideOfSplitArray;


    /** 
      Creating the splitArray function too assign the values of the
      leftSideOfSplitArray and rightSideOfSplitArray which are the 
      two half of the array argument
    */
    const splitArray = (arr) => {
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
      plus right index divided by 1.
    */
      while (leftIdx <= rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2);

    /**
     If the array mid index is greater than the array mid index plus one
     assign the leftSideOfSplitArray variable the left side half and the 
     rightSideOfSplitArray the right side half.
    */
        if (arr[midIdx] > arr[midIdx + 1]) {
          leftSideOfSplitArray = [0, midIdx];
          rightSideOfSplitArray = [midIdx + 1, arr.length - 1];
        }

    
    /**
       If the array mid index value is less than the array mid index value plus
       one and if the array mid index value is greater than the array mid index
       minus 1 then assign leftIdx the midIdx plus one else assign the rightIdx 
       midIdx minus 1.  
     */
        if (arr[midIdx] < arr[midIdx + 1] && arr[midIdx] > arr[midIdx - 1]) {
          leftIdx = midIdx + 1;
        } else {
          rightIdx = midIdx - 1;
        }
      }
    }
    

    /** 
      Creating the binarySearch function to search through the array. The function
      paramenters containes the array, the starting point, the end, and the target value that the
      binarySearch is looking for. 
    */

    const binarySearch = (arr, start, end, target) => {
    /**
      Initalizing the leftIdx and the rightIdx to be the starting point and the
      end point.
    */
      let leftIdx = start;
      let rightIdx = end;

    /**
      While the left index is less than or equal to the right index.
      Initialize the middle index to be the Math floor average of left
      plus right index divided by 2.
    */
      while (leftIdx <= rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2);

    /** 
      Assigning the midVal constant to be the value of the array midIdx
    */
        const midVal = arr[midIdx];

    /** 
      If midval is less than the target that is being searched for assign the
      leftIdx the value of midIdx plus 1
      Else if the midval is greater than the target assign the rightIdx the value
      of midIdx minus one
      Else return the midIdx meaning target found
    */
        if (midVal < target) {
          leftIdx = midIdx + 1;
        } else if (midVal > target) {
          rightIdx = midIdx - 1;
        } else {
          return midIdx;
        }
      }
      /**
        Return -1 target not found in the array
      */
      return -1;
    }

    /** 
      Applying the splitArray to the array input
    */
    splitArray(arr);

    /**
      Assigning the leftnum and rightnum the return value from the binarySearch 
    */
    const leftNum = binarySearch(arr, leftSideOfSplitArray[0], leftSideOfSplitArray[1], num);
    const rightNum = binarySearch(arr, rightSideOfSplitArray[0], rightSideOfSplitArray[1], num);
  
    /** 
      Return the largest of the two using Math.max
    */
    return Math.max(leftNum, rightNum);
  }

module.exports = findRotatedIndex