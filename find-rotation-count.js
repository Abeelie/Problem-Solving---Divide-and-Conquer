/** 
 Write a function called findRotationCount which accepts an array of distinct 
 numbers sorted in increasing order. The array has been rotated counter-clockwise 
 n number of times. Given such an array, find the value of n.

 Constraints:
 Time Complexity: O(log N)
*/

const findRotationCount = (array, low = 0, high = array.length - 1) => {
    /**
      If high is less than low return 0 means no rotation count
      If high is equal to low return low means no rotation count
    */
      if (high < low) return 0;
      if (high === low) return low;
  
    /** 
      Initialize the middleIndex to be the Math floor average of left
      and right index.
    */
      const middleIndex = Math.floor((low + high) / 2);

    /**
      If middleIndex is less than the high and the the array middle index value is
      less than the array middle index return middle index plus 1.
    */
      if (middleIndex < high && array[middleIndex + 1] < array[middleIndex]) return middleIndex + 1;
  
    /**
      If middle index is less than the low and array middle index value is less
      than the array middle index minus 1 return the middle index.  
    */
      if (middleIndex > low && array[middleIndex] < array[middleIndex - 1]) return middleIndex;
      
    /**
      If array high value is greater than the array middle index value
      return the function within itself with the arguments array, low and middle index minus
      one to loop through again
    */
      if (array[high] > array[middleIndex]) return findRotationCount(array, low, middleIndex - 1);
    /**
     If none of the conditions where met return the fuction recursivly to loop through
     the array again
    */
      return findRotationCount(array, middleIndex + 1, high);
}

module.exports = findRotationCount