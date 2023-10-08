<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: ReferenceError: greetign is not defined

<i>In the given code, there is a typographical error where "greetign" is used instead of "greeting" when assigning an empty object to it. As a result, "greeting" is never defined and a ReferenceError occurs, indicating that "greetign" is not defined in the current scope.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: "12"

<i>In the given code, the sum function takes two parameters, 'a' and 'b', and attempts to add them together. However, in the function call sum(1, "2"), the second argument is a string ("2") instead of a number. In JavaScript addition with a number and a string, the result what appears is a string, resulting concatenation of '1' and '2' which is '12'.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: ['🍕', '🍫', '🥑', '🍔']

<i>In the code, 'info.favoriteFood' initially references the first element of the food array, which is "🍕". Then it is reassigned to "🍝". Which does not affect the 'food' array; it only changes the value of the 'favoriteFood' property within the info object. Therefore, the food array remains unchanged.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: Hi there, undefined

<i>In the given code, the 'sayHi' function expects one argument, name. When we call sayHi() without providing any arguments, name is undefined within the function. Therefore, the template string Hi there, ${name} will result in "Hi there, undefined" when logged to the console.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>In the given code, the forEach method is used to iterate over the 'nums' array. The arrow function inside the forEach checks if each element num is truthy and increments the count variable if it is. Among the elements [0, 1, 2, 3], 0 is falsy and 1, 2 and 3 are truthy, so count is incremented thrice. Therefore, the value of count is 3.</i>

</p>
</details>
