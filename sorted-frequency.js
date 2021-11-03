/** 
 sortedFrequency
 Given a sorted array and a number, write a function called sortedFrequency that 
 counts the occurrences of the number in the array

 Constraints:
 Time Complexity: O(log N)
*/


const sortedFrequency = (arr, num) => {
    /** 
      Creating the findFirst function that takes in two parameters that
      are the arr and the number being searched. The goal is to find the 
      first occurence of the number using binary search. 
    */
    const findFirst = (arr, num) => {
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
      If the array middle index value is equal to num and if the array middle
      index value minus one is not equal to num return the middle index which is 
      the first occurence.
      Else if array middle index is less than the number continue search and make
      the value of left index equal to the middle index plus 1.
      Else if the array middle index value is greater than the num the value
      of the right index is middle index minus 1.
    */
        if (arr[midIdx] === num && arr[midIdx - 1] !== num) {
          return midIdx;
        }
        if (arr[midIdx] < num) {
          leftIdx = midIdx + 1;
        } else {
          rightIdx = midIdx - 1;
        }
      }
    }

    /** 
      Creating the findLast function that takes in two parameters that
      are the arr and the number being searched. The goal is to find the 
      last occurence of the number using binary search.
    */

    const findLast = (arr, num) => {
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
      If the array middle index value is equal to num and if the array middle
      index value plus one is not equal to num return the middle index which is 
      the last occurence.
      Else if array middle index is less than the number continue search and make
      the value of left index equal the middle index plus 1.
      Else if the array middle index value is greater than the num the value
      of the right index is middle index minus 1.
    */
        if (arr[midIdx] === num && arr[midIdx + 1] !== num) {
          return midIdx;
        }
        if (arr[midIdx] <= num) {
          leftIdx = midIdx + 1;
        } else {
          rightIdx = midIdx - 1;
        }
      }
    }

    /**
    Assigning the the return value of findFirst and findLast functions 
    to the constants firstNume and lastNum. 
    */
    const firstNum = findFirst(arr, num);
    const lastNum = findLast(arr, num);

    /** 
     Return lastLastNum minus firstNum plus one for number of occurence or -1 if not found. The plus 1
     has to do with how the occurence is counted. For example if the first occurence is at index
     2 and the last is at index 5 then the number of times the number occurs is last minus first which
     three which is wrong the answer is 4. The plus one ensures that all occurences between the last to first is counted.
    */
  
    //  console.log(lastNum,firstNum)
    return lastNum - firstNum + 1  || -1;
  }
  
  module.exports = sortedFrequency