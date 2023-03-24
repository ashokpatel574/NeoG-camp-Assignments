// Async JS Practice Question Set 2

// Instructions:

// Specific instructions have been written for each question present in this set.
// Please follow ES6 norms for writing your functions.
// You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed.
// An example has been provided for fetch call related questions for your understanding.

// 1.  Use this URL - https://example.com/post/comments to make a fake fetch call and list out all the emails of users on the DOM in ordered list. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch1 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/post/comments") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
            {
              email: "hello@outlook.com",
              commentBody: "Good going a lot to learn from you awesome",
            },
            {
              email: "ram99@gmail.com",
              commentBody: "Anyone from Vadodara here",
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "No Commentes found.",
        });
      }
    }, 2000);
  });
};

const output1 = document.getElementById("output1");

fakeFetch1(`https://example.com/post/comments`)
  .then((response) => {
    output1.innerHTML = `<ol class="orderedList1"></ol>`;

    response.data.forEach((element) => {
      document.querySelector(
        ".orderedList1"
      ).innerHTML += `<li>${element.email}</li>`;
    });
  })
  .catch((error) => (output1.innerText = error.message));

// your code here

// Output on the DOM should be:
// 1. xyz@gmail.com
// 2. hello@outlook.com
// 3. ram99@gmail.com

//------------------------------------------------------------------------------------------------------------------------------------------------------------//

//  2. Use this URL - https://example.com/winner-team to make a fake fetch call to the get names of winner group members and show a nice message on the DOM congratulating all of them. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch2 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/winner-team") {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: ["Jhon", "Raju", "Anjali", "Sakshi"],
          },
        });
      } else {
        reject({
          status: 404,
          message: "No Users found.",
        });
      }
    }, 2000);
  });
};

// your code here

const output2 = document.getElementById("output2");

fakeFetch2(`https://example.com/winner-team`)
  .then((response) => {
    const [...studentsName] = response.data.data;

    output2.innerText = `Congratulation to the members of winning team ${studentsName.join(
      ", "
    )} great work keep it up.`;
  })
  .catch((error) => (output2.innerText = error.message));

// Output on the DOM should be:
// Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work keep it up.

//------------------------------------------------------------------------------------------------------------------------------------------------------------//

//  3. Use this URL - https://example.com/login to make a fake fetch call and show the status like it is authenticated or not with a message in the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch3 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/login") {
        resolve({
          status: 200,
          data: {
            auth: true,
          },
        });
      } else {
        reject({
          status: 404,
          message: "Status not found",
        });
      }
    }, 2000);
  });
};

// your code here

const output3 = document.getElementById("output3");

fakeFetch3(`https://example.com/login`)
  .then((response) => {
    if (response.data.auth && response.status === 200) {
      output3.innerText = `Verified`;
    }
  })
  .catch((error) => (output3.innerText = error.message));

// Output on the DOM should be:
// Verified

//------------------------------------------------------------------------------------------------------------------------------------------------------------//

//  4. Use this URL - https://example.com/order/status/OR00A12 to make a fake fetch call and show the order status using the user name on the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch4 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/order/status/OR00A12") {
        resolve({
          status: 200,
          data: {
            order: {
              orderId: "OR00A12",
              status: "delivery pending",
              userName: "Kajal Kumari",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No order found",
        });
      }
    }, 2000);
  });
};

// your code here
const output4 = document.getElementById("output4");

fakeFetch4(`https://example.com/order/status/OR00A12`)
  .then((response) => {
    const { status, userName } = response.data.order;
    output4.innerText = `Hello ${userName} your order status is ${status}.`;
  })
  .catch((error) => (output4.innerText = error.message));

// Output on the DOM should be:

// Hello Kajal Kumari your order status is delivery pending.

//------------------------------------------------------------------------------------------------------------------------------------------------------------//

//  5. Use this URL - https://example.com/photo to make a fake fetch call and show an image on the DOM using the photo link received in the response. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch5 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/photo") {
        resolve({
          status: 200,
          data: {
            photo: {
              link: "https://source.unsplash.com/featured/300x201",
              title: "Random Image",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No order found",
        });
      }
    }, 2000);
  });
};

// your code here

const output5 = document.getElementById("output5");

fakeFetch5(`https://example.com/photo`)
  .then((response) => {
    const { link, title } = response.data.photo;
    output5.innerHTML = `<img src='${link}' alt='${title}' /> `;
  })
  .catch((error) => (output5.innerText = error.message));

// Output: an image on the DOM

//------------------------------------------------------------------------------------------------------------------------------------------------------------//

//  6. Use this URL - https://example.com/api/productlist to make a fake fetch call and print the total price of all the products. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch6 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/productlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Shoes", price: 100, quantity: 2 },
            { itemName: "Hat", price: 350, quantity: 1 },
            { itemName: "Tshirt", price: 410, quantity: 5 },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
};

// Your Code here

const output6 = document.getElementById("output6");

fakeFetch6(`https://example.com/api/productlist`)
  .then((response) => {
    const totalAmt = response.data.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    output6.innerText = `INR ${totalAmt}`;
  })
  .catch((error) => (output6.innerText = error.message));

// Output on the DOM should be:
// Total: INR 2600

//------------------------------------------------------------------------------------------------------------------------------------------------------------//

//  7. Use this URL - https://example.com/api/users to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM (Oops! Unexpected Error. Please try again.), as per the status received from the server. The error should be displayed in red colour. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch7 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users") {
        reject({
          status: 500,
          message: "Internal Server Error",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

// Your Code here

const output7 = document.getElementById("output7");

fakeFetch7(`https://example.com/api/users`)
  .then((response) => (output7.innerText = response.data.message))
  .catch((error) => {
    if (error.status === 500) {
      output7.innerText = `Oops. Unexpected Error. Please try again.`;
      output7.style.color = `red`;
    }
  });

// Output on the DOM should be (in red color):
// Oops. Unexpected Error. Please try again.

//  8. Use this URL - https://example.com/api/allbooks to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM (Bad Request! Requested size too large.), as per the status received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch8 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/allbooks") {
        reject({
          status: 400,
          message: "Bad Request",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

// Your Code here

const output8 = document.getElementById("output8");

fakeFetch8(`https://example.com/api/allbooks`)
  .then((response) => (output8.innerText = response.data.message))
  .catch((error) => {
    if (error.status === 400) {
      output8.innerText = `${error.message}! Requested size too large. `;
    }
  });

// Output on the DOM should be:
// Bad Request! Requested size too large.

//------------------------------------------------------------------------------------------------------------------------------------------------------------//

//  9. Use this URL - https://example.com/welcome to make a fake fetch call and display a welcome message to the user on the DOM. Welcome message (if provided) should be used else the default message of Welcome to the servershould be shown. Message should be only shown if the user is logged in. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch9 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!url === "https://example.com/welcome") {
        reject({
          status: 511,
          message: "Network auth required",
        });
      } else {
        resolve({
          status: 200,
          data: {
            logged: true,
          },
        });
      }
    }, 2000);
  });
};

// your code here

const output9 = document.getElementById("output9");

fakeFetch9(`https://example.com/welcome`)
  .then((response) => {
    if (response.status === 200) {
      output9.innerText = response.data.logged
        ? `Logged In, Welcome`
        : `Logged Out`;
    }
  })
  .catch((error) => {
    if (error.status === 511) {
      output9.innerText = error.message;
    }
  });

// Output: As per the response from server

//------------------------------------------------------------------------------------------------------------------------------------------------------------//

// 10. Use this URL - https://example.com/getImage to make a fake fetch call which takes a url and dimensions for the photo to be displayed. Dimensions should be passed in the format [width, height]. Show the image provided in the response on DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// Dimensions can be 200/300/100. For example you can pass [200, 200] or [200, 300], etc.

const fakeFetch10 = (url, dimensions) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/getImage") {
        resolve({
          status: 200,
          data: {
            image: {
              link: `https://picsum.photos/${dimensions[0]}/${dimensions[1]}`,
              title: "Random Image",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No photo of such dimension found",
        });
      }
    }, 2000);
  });
};

// your code here

const output10 = document.getElementById("output10");

fakeFetch10(`https://example.com/getImage`, [200, 300])
  .then((response) => {
    const { link, title } = response.data.image;
    output10.innerHTML = `<img src='${link}' alt='${title}'/>`;
  })
  .catch((error) => {
    if (error.status === 404) {
      output10.innerText = error.message;
    }
  });

// Output on the DOM should be an image.

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
