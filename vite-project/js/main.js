import '../styles/style.css'
const URL = "https://meowfacts.herokuapp.com/"

const DOMSelectors = {
  factBtn: document.getElementById("factBtn"),
  fact: document.querySelector(".fact"),
}

async function booty(URL) {
  try {
      const response = await fetch(URL);
      const data = await response.json();
      DOMSelectors.fact.insertAdjacentText('afterbegin', `${data.data}`)
      console.log(data.data)
  } catch (error) {
      console.log(error);
  }
}       

function clear() {
  DOMSelectors.fact.innerHTML = ""
}

booty(URL)

DOMSelectors.factBtn.addEventListener("click", function() {
  clear()
  booty(URL)

})

