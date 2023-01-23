// import '../styles/style.css'
// const URL = "https://meowfacts.herokuapp.com/"

// async function booty(URL) {
//   try {
//       const response = await fetch(URL);
//       const data = await response.json();
//       console.log(data);
//   } catch (error) {
//       console.log(error);
//   }
// }
                   
// document.querySelector(".btn").addEventListener("click", booty(URL))
//https://github.com/alexwohlbruck/cat-facts
import '../styles/style.css'
import {products} from './products.js'

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

function filteringBool(productAttr) {

    const productsFiltered = products.filter(product => product[productAttr] == true)

    productsFiltered.forEach(card => {
        DOMSelectors.everything.insertAdjacentHTML("afterbegin",
                                                  `
      <div id=card>
      <img src=${card.image}>
      <h1 id="text"> this is ${card.name} </h1>
      </img>
      </div>
      `
      )
    })
    console.log(productsFiltered)
}

function clearProducts() {
    DOMSelectors.everything.innerHTML = ""
}

filteringBool("exists")

DOMSelectors.existBtn.addEventListener("click", function () {
    clearProducts()
    filteringBool("exists")
})