//Prompt: can you make me an index.html and app.js file that demonstrates asynchronous javascript
const message = document.getElementById('message');

setTimeout(() => {
  message.innerHTML = 'Hello, World!';
}, 1000);

/* Explanation:
  In this example, we use setTimeout() to wait for 1 second before changing the content of a <p> element on the page.
  This allows us to simulate an asynchronous operation, such as making an API request or waiting for a user interaction.
  The setTimeout() function is set up to call a callback function after 1 second, which updates the innerHTML property of
  the message element to display the text "Hello, World!".
  When you load index.html in your browser, you should see the message "Loading...", and after 1 second, it should change
  to "Hello, World!".
*/

//Prompt: can you show me an example of asynchronous javascript to put in my app.js file? I would like it to do some sort of math
function add(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a + b);
      }, 1000);
    });
  }
  
  function multiply(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a * b);
      }, 1000);
    });
  }
  
  async function performMath(a, b) {
    const sum = await add(a, b);
    const product = await multiply(a, b);
    console.log(`The sum of ${a} and ${b} is ${sum}`);
    console.log(`The product of ${a} and ${b} is ${product}`);
  }
  
  performMath(2, 3);

/* Explanation:
  In this example, we define two functions, add() and multiply(), that each return a Promise that resolves with the
  result of a mathematical operation. We also define an async function, performMath(), that uses await to wait for 
  the results of these operations before logging them to the console.

  When you run this JavaScript code, you should see the following output in your console after 1 second:
    The sum of 2 and 3 is 5
    The product of 2 and 3 is 6
  This demonstrates how asynchronous JavaScript can be used to perform mathematical operations, where the results of
  the operations are not available immediately. The setTimeout() function is used to simulate a long-running operation,
  such as making an API request or performing complex calculations, that takes time to complete.
*/

//Prompt: can you make an animation to add to my index.html and app.js files that utilizes asynchrouns javascript?
const box = document.getElementById('box');

let left = 0;
const interval = setInterval(() => {
  left += 5;
  box.style.left = `${left}px`;
  if (left >= window.innerWidth - 50) {
    clearInterval(interval);
  }
}, 16);

/* Explanation:
  In this example, we have an index.html file that contains a red box with the ID box. The corresponding app.js 
  file uses JavaScript to move the box across the screen by incrementing its left property by 5 pixels every 16 
  milliseconds, as determined by the setInterval() function. The movement of the box continues until the left 
  property exceeds the width of the window minus the width of the box (50 pixels). At this point, the clearInterval()
  function is called to stop the animation.

  This demonstrates how asynchronous JavaScript can be used to create simple animations that run in the background
  and update the user interface without blocking other parts of the application.
*/

//Prompt: can you make me more asynchronous javascript examples with unit test for them?

// // async function that adds two numbers using Promises
// const add = (a, b) => {
//   return new Promise((resolve, reject) => {
//     if (a && b) {
//       resolve(a + b);
//     } else {
//       reject(Error("Invalid input"));
//     }
//   });
// };

// export {add}; I could not figure out how to use jest

//Prompt: can you make me an synchronous javascript program that has a button.
//        when the button is clicked, it will wait a bit and then make the string 
//        "BOO" appear big in the middle of the screen?

const button = document.getElementById("myButton");
  const output = document.getElementById("output");

  button.addEventListener("click", function () {
    output.innerHTML = "";
    const boo = 'BOO'
    for (let i = 0; i <  boo.length; i++) {
      setTimeout(function () {
        output.innerHTML += boo[i];
      }, i * 900);
    }
  });

//Prompt: can you show me another example [of asynchronous javaScript] but also without reading files

  const myAsyncFunction = () => {
    return new Promise((resolve, reject) => {
      try {
        let result = 0;
        for (let i = 0; i < 100000000; i++) {
          result += i;
        }
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };
  
  myAsyncFunction()
    .then(result => {
      console.log(`The result to the first one is ${result}.`);
    })
    .catch(error => {
      console.error(`An error occurred: ${error}.`);
    });

    const myAsyncFunction2 = async () => {
      let result = 0;
      for (let i = 0; i < 100000000; i++) {
        result += i;
      }
      return result;
    };
    
    (async () => {
      try {
        const result = await myAsyncFunction2();
        console.log(`The result to the second one is ${result}.`);
      } catch (error) {
        console.error(`An error occurred: ${error}.`);
      }
    })();
    