// สร้างฟังชั่นที่จะเช็คค่่าเป็นจำนวนเฉพาะหรือไม่
const isPrime = (n) => {
  // 0 กับ 1 ไม่ใช่จำนวนเฉพาะ
  if (n <= 1) return false;

  // 2 กับ 3 เป็นจำนวนเฉพาะ
  if (n <= 3) return true;

  // ตัวเลขที่หารด้วย 2 หรือ 3 ไม่ใช่จำนวนเฉพาะ
  if (n % 2 == 0 || n % 3 == 0) return false;

  // ลูปข้ามตัวเลขที่เป็นคู่และตัวเลขที่เป็นผลคูณของ 3 เพราะเราได้ตรวจสอบแล้วในเงื่อนไขก่อนหน้า
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
};

// สร้างฟังชั่นที่จะหาผลรวมของจำนวนเฉพาะตั้งแต่ 0 ถึง n
const sumPrimes = (n) => {
  //รับค่า n เเล้วสร้าง array ที่มีค่าเริ่มต้นเป็น 0 ถึง n เเล้วใช้ฟังชั่น isPrime ในการตรวจสอบว่าเป็นจำนวนเฉพาะหรือไม่ เเล้วเอามาบวกกันโดยใช้ reduce
  const answer = Array.from({ length: n + 1 }, (_, i) => i)
    .filter(isPrime)
    .reduce((result, num) => result + num, 0);
  console.log(answer);
  return answer;
};

sumPrimes(10); // 17
sumPrimes(59); // 440
sumPrimes(977); // 73156
