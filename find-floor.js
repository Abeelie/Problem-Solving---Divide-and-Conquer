/** 
  Write a function called findFloor which accepts a sorted array and a value x, 
  and returns the floor of x in the array. The floor of x in an array is the 
  largest element in the array which is smaller than or equal to x. 
  If the floor does not exist, return -1.

   Constraints:
   Time Complexity: O(log N)
*/

const findFloor = (arr, val) => {
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
      If the value of the middle index is equal to the input val or if 
      the value of the middle index less then the val input and if the 
      middle index value plus 1 is greater than the val input then 
      return middle index value. This means the largest element was found.
    */
      if (arr[midIdx] === val || (arr[midIdx] < val && arr[midIdx + 1] > val)) return arr[midIdx];

    /**
      If the left index is equal to the right index and if middle index value
      is less than or equal to the val input return the middle index value.
      This also means largest element was found and also this is the last step in the
      binary search.
    */
      if (leftIdx === rightIdx && arr[midIdx] <= val) return arr[midIdx];

    /**
      If the middle index value is less than the val input then left index is 
      equal to middle index plus one or else if the middle index value is greater
      than val input then right index is equal to middle index minus 1. This
      continues the search. 
    */
      arr[midIdx] < val ? leftIdx = midIdx + 1 : rightIdx = midIdx - 1
    }
    /**
      Return zero if nothing was found.
     */
    return -1;
}

module.exports = findFloor