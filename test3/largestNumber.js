const largestNumber = (arr) => {
  //เเปลงตัวเลขเป็น string ไม่ง้ีนจะวัดไม่ได้
  arr = arr.map(String);
  //เปรี่ยบเทียบ a + b กับ b + a ดูว่าตัวไหนมากกว่ากัน
  arr.sort((a, b) => {
    if (a + b > b + a) {
      return -1;
    } else {
      return 1;
    }
  });
  //เอา string มาต่อกัน
  const result = arr.join("");
  console.log(result);
  return result;
};

largestNumber([10, 2, 13, 7]);
largestNumber([3, 30, 34, 5, 9]);
largestNumber([21, 36, 8, 45]);
