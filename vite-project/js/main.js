import '../styles/style.css'

const URL = "https://meowfacts.herokuapp.com/"

async function booty(URL){
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.data.forEach(text => {
      document.body.textContent = text
    });
  } catch (error) {
    console.log(error)
  }
}

booty(URL);