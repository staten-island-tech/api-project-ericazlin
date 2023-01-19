import '../styles/style.css'
const URL = "https://meowfacts.herokuapp.com/"

async function booty(URL) {
  try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.log(error);
  }
}
                   
document.querySelector(".btn").addEventListener("click", booty(URL))

