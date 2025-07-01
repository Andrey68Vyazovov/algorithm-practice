export function myAtoi(s) {
  s = s.trim();
  let sign = 1,
    i = 0;
  if (s.charAt(i) === "-" || s.charAt(i) === "+") {
    sign = s.charAt(i) === "-" ? -1 : 1;
    i++;
  }
  let num = 0;
  while (i < s.length && s.charAt(i) >= "0" && s.charAt(i) <= "9") {
    num = num * 10 + Number(s.charAt(i));
    i++;
  }
  num = num * sign;

  const INT_MIN = Math.pow(-2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;
  if (num < INT_MIN) {
    num = INT_MIN;
  }
  if (num > INT_MAX) {
    num = INT_MAX;
  }
  return num;
};
