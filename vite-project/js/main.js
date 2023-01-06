import '../styles/style.css'
const URL = "https://meowfacts.herokuapp.com/"
booty(URL);

async function booty(URL) {
  try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      //accounts for 1 and 2 part jokes
      if (data.setup) {
          DOMSelectors.text.innerHTML = `${data.setup} <br><br> ${data.delivery}`;
      } else {
          DOMSelectors.text.innerHTML = data.text;
      }

      console.log(response);
      return data;
  } catch (error) {
      console.log(error);
  }
}
booty(URL);


// async function booty(URL) {
//   try {
//     const response = await fetch(URL);
//     const data = await response.json();
//     data.data.forEach(text => {
//       document.body.textContent = text
//     });