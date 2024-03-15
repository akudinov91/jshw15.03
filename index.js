//Задача 1.

// const person = {
//   name: "Andrew",
//   age: 33,
//   city: "Baku",
//   country: "Azerbaijan",
// };

// const { name, age } = person;

// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);

//Задача 2.

// function printPersonInfo(person) {
//   const { name, age, gender, occupation } = person;
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
//   console.log(`Gender: ${gender}`);
//   console.log(`Occupation: ${occupation}`);
// }

// const person = {
//   name: "Andrew",
//   age: 33,
//   gender: "Male",
//   occupation: "Bassist",
// };

// printPersonInfo(person);

//Задача 3.

// function getFullName(person) {
//   const { firstName, lastName } = person;
//   return `${firstName} ${lastName}`;
// }

// const person = {
//   firstName: "Andrew",
//   lastName: "Kudinov",
// };

//Задача 4.

// const user = {
//   name: "Andrew",
//   address: {
//     city: "Baku",
//     country: "Azerbaijan",
//   },
// };

// const {
//   address: { city, country },
// } = user;

// console.log(city);
// console.log(country);

//Задача 5.

// const user = {
//   name: "Andrew",
//   age: 33,
//   address: {
//     street: "AzimZadeh str",
//     city: "Baku",
//   },
// };

// function printAddress(user) {
//   const {
//     address: { city, street },
//   } = user;
//   console.log(`City ${city}`);
//   console.log(`Country ${street}`);
// }

// printAddress(user);

//Задача 6.

// const product = {
//   name: "Bass",
//   price: 2000,
//   category: "guitar",
// };

// const { name, price } = product;

// console.log(`Название продукта: ${name}`);
// console.log(`Цена продукта: ${price}`);

//Задача 7.

// function applyDiscount(product, discountPercentage) {
//   const { price } = product;
//   const discountAmount = price * (discountPercentage / 100);
//   const discountedPrice = price - discountAmount;

//   return {
//     ...product,
//     price: discountedPrice,
//     discountApplied: true,
//     discountPercentage: discountPercentage,
//   };
// }

// const product = {
//   name: "iphone",
//   price: 1200,
// };

// const discountedProduct = applyDiscount(product, 10);
// console.log(discountedProduct);

//Задача 8.

// const rectangle = {
//   width: 30,
//   height: 15,
// };

// const { width: w, height: h } = rectangle;

// console.log("Width:", w);
// console.log("Height:", h);

//Задача 9.

// function calculateArea({ width, height }) {
//   return width * height;
// }

// const rectangle = { width: 5, height: 11 };
// const area = calculateArea(rectangle);
// console.log(area);

//Задача 10.

// const stats = {
//   max: 100,
//   min: 10,
//   average: 50,
// };

// const { max, min, average } = stats;

// console.log("Максимальное значение:", max);
// console.log("Минимальное значение:", min);
// console.log("Среднее значение:", average);

//--------------------------------------------------------------------

//Задача 1.

// function swapValues(arr) {
//   [arr[0], arr[1]] = [arr[1], arr[0]];
//   return arr;
// }

// let array = [1, 2];
// console.log("Before swap:", array);
// swapValues(array);
// console.log("After swap:", array);

//Задача 2.

// const coordinates = [2, 7];

// const [x, y] = coordinates;

// console.log("Значение x:", x);
// console.log("Значение y:", y);

//Задача 3.

// function getDistance(pointA, pointB) {
//   const [x1, y1] = pointA;
//   const [x2, y2] = pointB;

//   const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

//   return distance;
// }

// const point1 = [3, 7];
// const point2 = [2, 9];
// const distance = getDistance(point1, point2);
// console.log("Расстояние между точками:", distance);

//Задача 4.

// const grades = [1, 2, 3, 4, 5];

// const [firstGrade, secondGrade, thirdGrade] = grades;

// console.log(firstGrade);
// console.log(secondGrade);
// console.log(thirdGrade);

//Задача 5.

// function getAverage(grades) {
//   if (grades.length === 0) {
//     return 0;
//   }
//   const [total, count] = grades.reduce(
//     (acc, grade) => {
//       return [acc[0] + grade, acc[1] + 1];
//     },
//     [0, 0]
//   );
//   const average = total / count;

//   return average;
// }

// const grades = [23, 20, 63, 55, 41];
// const averageGrade = getAverage(grades);
// console.log(averageGrade);

//Задача 6.

// const student = ["Andrew", 33, [80, 75, 82]];

// const [name, age, grades] = student;

// console.log(name);
// console.log(age);

//Задача 7.

// function printStudentInfo(student) {
//   const [name, age, grade] = student;

//   console.log(`Student Name: ${name}`);
//   console.log(`Student Age: ${age}`);
//   console.log(`Student Grade: ${grade}`);
// }

// const studentInfo = ["Andrew", 33, "B"];
// printStudentInfo(studentInfo);

// Задача 8.

// const colors = ["Красный", "Зеленый", "Синий", "Желтый", "Оранжевый"];

// const [firstColor, secondColor, thirdColor] = colors;

// console.log("Первый цвет:", firstColor);
// console.log("Второй цвет:", secondColor);
// console.log("Третий цвет:", thirdColor);

//Задача 9.

// function combineColors(colors1, colors2) {
//   const combinedColors = [...colors1, ...colors2];
//   return combinedColors;
// }

// const colors1 = ["red", "green", "blue"];
// const colors2 = ["yellow", "purple", "orange"];

// const result = combineColors(colors1, colors2);
// console.log(result);
