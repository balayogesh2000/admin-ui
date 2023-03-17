const Two = () => {
  const frequencyCounter = (str) => {
    let obj = {};
    str.split("").forEach((item) => {
      if (obj[item]) {
        obj[item]++;
      } else {
        obj[item] = 1;
      }
    });
    return obj;
  };
  const isAnagram = (strA, strB) => {
    let res = true;
    if (strA.length !== strB.length) {
      res = false;
      return res;
    }
    const objA = frequencyCounter(strA);
    const objB = frequencyCounter(strB);

    Object.keys(objA).forEach((key) => {
      if (objA[key] !== objB[key]) {
        res = false;
      }
    });
    return res;
  };
  const res = isAnagram("abcba", "cbaba");
  console.log(res);
  return <div></div>;
};

export default Two;
