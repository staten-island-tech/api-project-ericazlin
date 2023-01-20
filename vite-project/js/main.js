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
    everything: document.querySelector(".everything"),
    btn: document.querySelector(".btn"),
    filter: document.getElementById("filter"),
        doofBtn: document.getElementById("doofBtn"),
        existBtn: document.getElementById("existBtn"),
        frozenBtn: document.getElementById("frozenBtn"),
        snackBtn: document.getElementById("snackBtn"),
        freshBtn: document.getElementById("freshBtn"),
        chemicalsBtn: document.getElementById("chemicalsBtn"),
        hotFoodBtn: document.getElementById("hotFoodBtn"),
        carPartsBtn: document.getElementById("carPartsBtn"),
        drinksBtn: document.getElementById("drinksBtn"),
        coldFoodBtn: document.getElementById("coldFoodBtn"),
        candyBtn: document.getElementById("candyBtn"),
        bakedBtn: document.getElementById("bakedBtn"),
}

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