const input = "Every developer likes to mix kubernetes and javascript";

/** result = "E3y d7r l3s to mix k8s and j8t"; */

const result = input
  .split(' ')
  .map((word) => {
    let newWord = '';
    const length = word.length;
    if(length <= 4) {
      return word;
    }
    newWord = word[0] + (length - 2) + word[length-1];
    return newWord;
  })
  .join(' ');

console.log(result);