// .1

const int1 = 35;
const int2 = 89;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
  console.log(true);
} else {
  console.log(false);
}

// console.log (int1 >= 50 && int1 <= 99 || int2 >= 50 && int2 <= 99);

console.log("----------------------------------");

// 2.

const int3 = 47;

if (
  (int1 >= 50 && int1 <= 99) ||
  (int2 >= 50 && int2 <= 99) ||
  (int3 >= 50 && int2 <= 99)
) {
  console.log(true);
} else {
  console.log(false);
}

console.log("----------------------------------");

// 3.

const a = 5;
const b = 10;
const c = 7;

if (a > b && a > c) {
  console.log("The is largest number is", a);
} else if (b > a && b > c) {
  console.log("The is largest number is", b);
} else {
  console.log("The largest number is", c);
}

if (int1 > int2 && int1 > int3) {
  console.log("The is largest number is", int1);
} else if (int2 > int1 && int2 > int3) {
  console.log("The is largest number is", int2);
} else {
  console.log("The largest number is", int3);
}

console.log("----------------------------------");

// 4.

const str = "thon";

if (str.slice(0, 2) === "Py") {
  console.log(str);
} else {
  console.log("Py" + str);
}

console.log("----------------------------------");

// 5.

if (int1 + int2 >= 50 && int1 + int2 <= 80) {
  console.log(65);
} else {
  console.log(80);
}

console.log("----------------------------------");

// 6.

const int4 = 77;
const int5 = 33;

if (int4 + int5 === 8) {
  console.log(true);
} else int4 - int5 === 8 || int5 - int4 === 8;
{
  console.log(false);
}

console.log("----------------------------------");

//  7.

if (int4 === 15 || int5 === 15) {
  console.log(true);
} else int4 + int5 === 15;
{
  console.log(false);
}

console.log("----------------------------------");

// 8.
if (int4 % 7 == 0 || int5 % 7 == 0) {
  console.log("Multiple of 7", true);
} else if (int4 % 11 == 0 || int5 % 11 == 0) {
  console.log("Multiple of 11", true);
} else {
  console.log(false);
}

console.log("----------------------------------");

// 9.

if (int4 == int5) {
  console.log((int4 + int5) * 3);
} else {
  console.log(int4 + int5);
}

console.log("----------------------------------");

// 10.

if (int5 > 19) {
  console.log((int5 - 19) * 2);
} else {
  console.log(int5 - 19);
}

console.log("----------------------------------");

// 11. BONUS

const firstName = "Layla";
const age = 43;

if (age < 13) {
  console.log(firstName, "is a child");
} else if (age >= 13 && age < 20) {
  console.log(firstName, "is a teenager");
} else if (age >= 20 && age < 30) {
  console.log(firstName, "is a young adult");
} else {
  console.log(firstName, "is an adult");
}

console.log("----------------------------------");

// 12. BONUS

switch (true) {
  case age < 12:
    console.log(firstName, "is a child");
    break;
  case age >= 12 && age < 20:
    console.log(firstName, "is a teenager");
    break;
  case age >= 20 && age < 30:
    console.log(firstName, "is a young adult");
    break;
  default:
    console.log(firstName, "is an adult");
    break;
}
