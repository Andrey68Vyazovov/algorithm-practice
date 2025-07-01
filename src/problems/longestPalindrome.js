export function longestPalindrome(s) {
  if (!s) return "";

  const cleanedStr = s.toLowerCase().replace(/[^a-zа-яё0-9]/g, "");
  if (!cleanedStr) return "";

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < cleanedStr.length && cleanedStr[left] === cleanedStr[right]) {
      left--;
      right++;
    }
    return cleanedStr.slice(left + 1, right);
  }

  let longest = "";
  for (let i = 0; i < cleanedStr.length; i++) {
    const palindromeOdd = expandAroundCenter(i, i);
    const palindromeEven = expandAroundCenter(i, i + 1);
    const currentLongest = palindromeOdd.length > palindromeEven.length 
      ? palindromeOdd 
      : palindromeEven;
    if (currentLongest.length > longest.length) {
      longest = currentLongest;
    }
  }

  return longest;
}