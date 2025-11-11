
const text = "Hello World!";
const arr = [].slice.call(text);
const reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}

const reversedText = reversedArr.join('');
console.log(reversedText);
