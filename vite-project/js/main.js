import '../styles/style.css'
const URL = "https://meowfacts.herokuapp.com/"
booty(URL);

document.querySelector(".btn").addEventListener("click", booty)
async function booty(URL) {
  try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);

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