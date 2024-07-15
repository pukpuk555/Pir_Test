function isTwoSum(nums, target) {
  // สร้าง Set เพื่อเก็บค่าของตัวเลขที่เราตรวจสอบไปแล้ว
  const seenNumbers = new Set();

  for (let num of nums) {
    // สร้างค่าที่ต้องหาโดยใช้ target - num เช่น target = 8 แล้ว num = 1 จะได้ complement = 7
    const complement = target - num;

    // ถ้าเจอค่า complement ใน seenNumbers ให้ return true
    if (seenNumbers.has(complement)) {
      return true;
    }

    // ถ้าไม่เจอ ให้เก็บค่า num ใน seenNumbers
    seenNumbers.add(num);
  }

  // ถ้าเช็คครบทุกตัวแล้วไม่เจอคู่ที่รวมกันได้เท่ากับ target ให้ return false
  return false;
}

console.log(isTwoSum([1, 3, 5, 7, 16, 4], 8));
console.log(isTwoSum([1, 3, 5, 7, 16, 4], 12));
console.log(isTwoSum([1, 3, 5, 7, 16, 4], 18));
console.log(isTwoSum([12, 17, 14, 11, 19, 8], 20));
