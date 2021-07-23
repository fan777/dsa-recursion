/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  // base case
  if (nums.length === idx) return 1;
  // normal case
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0) {
  // base case
  if (words.length === idx) return 0;
  // normal case
  let current = words[idx].length;
  let next = longest(words, idx + 1);
  return current > next ? current : next;
}

/** everyOther: return a string with every other letter. */

// function everyOther(str, counter = 0, retVal = "") {
function everyOther(str, idx = 0, retVal = "") {
  if (str.length <= idx) return retVal;
  retVal += str[idx]
  return everyOther(str, idx + 2, retVal)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  // base case
  if (idx === Math.ceil(str.length / 2))
    return true;
  // normal case
  if (str[idx] === str[str.length - 1 - idx]) {
    return isPalindrome(str, idx + 1);
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  // base
  if (arr.length === idx) return -1;
  // normal case
  return arr[idx] === val ? idx : findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, retVal = "") {
  if (str.length === idx) return retVal;
  retVal += str[str.length - 1 - idx];
  return revString(str, idx + 1, retVal);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // ???
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  let mid = Math.floor((left + right) / 2);
  // console.log(`${mid} ${left} ${right}`)
  if (val === arr[mid]) return mid;
  if (left >= right) return -1;
  if (val > arr[mid])
    return binarySearch(arr, val, mid + 1, right)
  else
    return binarySearch(arr, val, left, mid - 1)
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
