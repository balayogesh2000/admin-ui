import "./App.css";
import Two from "./Two";

const App = () => {
  const checkPalindrome = (str) => {
    let start = 0;
    let end = str.length - 1;
    let middle = Math.floor(str.length / 2);
    let isPalindrome = true;
    for (let i = start; i < middle; i++) {
      if (str[i].toLowerCase() !== str[end - i].toLowerCase()) {
        isPalindrome = false;
      }
    }
    return isPalindrome;
  };

  const createSubstringsAndCheckMaxPalindrome = (str) => {
    let max = 0;
    let maxSubstr = "";
    for (let i = 0; i < str.length; i++) {
      for (let j = i; j < str.length; j++) {
        const substr = str.slice(i, j + 1);
        const res = checkPalindrome(substr);
        if (res) {
          if (substr.length > max) {
            max = substr.length;
            maxSubstr = substr;
          }
        }
      }
    }
    return maxSubstr;
  };

  // const res = createSubstringsAndCheckMaxPalindrome("RaceCar");
  // console.log(res, "res");
  return <Two />;
};

export default App;
