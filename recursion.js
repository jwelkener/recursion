/** product: calculate the product of an array of numbers. */

function product(nums) {
let result = 1;

  for (let i = 0; i <nums.length; i++) {
      result*=nums[i];
  }  
  
  return result;
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  if (idx === words.length) return longestSoFar;
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return longest(words, idx +1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx>= str.length) return newStr;
  newStr+= str[idx];
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
    let leftIdx = idx;
    let rightIdx = str.length - idx - 1;
    if (leftIdx >= rightIdx) return true;
    if (str[leftIdx] !== str[rightIdx]) return false;
    return isPalindrome(str, idx +1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx =0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx +1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0; newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length -1 - idx];
  return revString(str, idx +1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key])
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  // Base case: if start is greater than end, value is not found
  if (start > end) {
    return -1;
  }

  // Find the middle index of the array
  const mid = Math.floor((start + end) / 2);

  // If the middle element is the target value, return its index
  if (arr[mid] === val) {
    return mid;
  }
  
  // If the middle element is greater than the target value, search the left half
  if (arr[mid] > val) {
    return binarySearch(arr, val, start, mid - 1);
  } 
  
  // If the middle element is less than the target value, search the right half
  else {
    return binarySearch(arr, val, mid + 1, end);
  }
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
