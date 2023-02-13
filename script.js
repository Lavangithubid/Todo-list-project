// let arr = ["Apple", "Banana", "orange", "Grape"];
// let items = "";
// arr.forEach((element) => {
//   console.log(items);

//   items += `<div class="input-header">
//                 <h1>${element}</h1>
//             </div>`;
//   console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// });
// console.log(items);

function reverse(word) {
  return word.split(""); /*.reverse().join("");*/
  // console.log(reverse("Key"));
  // console.log(word.split("").reverse());
}

function reverse(sentence) {
  sentence = sentence.toUpperCase();
  let split = sentence.split("");
  // console.log(split);

  let rev = split.reverse();
  // console.log(rev);

  let join = rev.join("");
  // console.log(join);

  return join;
}
// let string = prompt("Enter a Sentence");
// let result = reverse(string);
// console.log(reverse("What is your Name of the Program"));
// console.log(result);

function reverseSentence(sentences) {
  let newWord = "";
  for (let i = sentences.length - 1; i >= 0; i--) {
    newWord = newWord + sentences[i];
  }
  return newWord;
}
console.log(
  reverseSentence("What is thevalue of the reverse sentence of the sentence")
);
