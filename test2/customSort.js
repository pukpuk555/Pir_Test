const sortOddEven = (arr) => {
  // เรียงลำดับเลขก่อน
  arr.sort((a, b) => a - b);
  //สร้างตัวเเปรเพื่อแยกเลขคู่กับเลขคี่
  let odd = [];
  let even = [];

  for (let i = 0; i < arr.length; i++) {
    //เอาเลขคู่เข้า even arr นอกนั้นเข้า odd arr
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  //เอามาต่อกัน
  const result = odd.concat(even);
  console.log(result);
  return result;
};

sortOddEven([4, 2, 5, 7, 1, 6]); //[ 1, 5, 7, 2, 4, 6 ]
sortOddEven([25, 40, 14, 91, 31, 22, 49, 13, 6]); //[13, 25, 31, 49, 91, 6, 14, 22, 40]
