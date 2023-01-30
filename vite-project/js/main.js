import '../styles/style.css'
const URL = "https://api.chess.com/pub/titled/GM"

const DOMSelectors = {
  factBtn: document.getElementById("factBtn"),
  fact: document.querySelector(".fact"),
  text: document.getElementById("text"),
  submit: document.getElementById("submit"),
  playerSearch: document.getElementById("playerSearch"),
}

function checkData(playerUsername, playerName, playerAvatar) {

  if (typeof playerName === "string" && typeof playerAvatar === "string") {
      DOMSelectors.fact.innerHTML = 
      `
      <div id="playerText">
      <h1 class="actualText">Username: ${playerUsername}</h1>
      <h1>Real Name: ${playerName}</h1>
      </div>
      <div id="avatar">
      <img src="${playerAvatar}" alt="N/A"></img>
      </div>
      `
    } else if (typeof playerName === 'undefined' && typeof playerAvatar === "undefined"){
      DOMSelectors.fact.innerHTML = 
      `
      <div id="playerText">
      <h1 class="actualText">Username: ${playerUsername}</h1>
      <h1>Real Name: N/A</h1>
      </div>
      <div id="avatar">
      <h1>[no image available]</h1>
      </div>
      `
    } else if (typeof playerName === 'string' && typeof playerAvatar === "undefined"){
      DOMSelectors.fact.innerHTML = 
      `
      <div id="playerText">
      <h1 class="actualText">Username: ${playerUsername}</h1>
      <h1>Real Name: ${playerName}</h1>
      </div>
      <div id="avatar">
      <h1>[no image available]</h1>
      </div>
      `
    } else if (typeof playerName === 'undefined' && typeof playerAvatar === "string"){
      DOMSelectors.fact.innerHTML = 
      `
      <div id="playerText">
      <h1 class="actualText">Username: ${playerUsername}</h1>
      <h1>Real Name: N/A</h1>
      </div>
      <div id="avatar">
      <img src="${playerAvatar}" alt="N/A"></img>
      </div>
      `
    }
  }

async function booty(URL) {
  try {
      const playerURL = "https://api.chess.com/pub/player/"
      const responsePlayer = await fetch(URL);
      const dataPlayer = await responsePlayer.json();

      const randomIndex = Math.floor(Math.random() * dataPlayer.players.length);
      const newURL = playerURL + dataPlayer.players[randomIndex]

      const responseInfo = await fetch(newURL)
      const dataInfo = await responseInfo.json();

      const dataUsername = dataInfo.username
      const dataName = dataInfo.name
      let dataAvatar = dataInfo.avatar


      checkData(dataUsername, dataName, dataAvatar)

      console.log(dataAvatar, typeof dataInfo.avatar, typeof dataInfo.name)
  } catch (error) {
      console.log(error);
  }
}       

async function getInfo() {
  try {
    const playerURL = "https://api.chess.com/pub/player/"
    const searchTerm = document.getElementById("playerSearch").value

    const friendlySearchTerm = searchTerm.replace(/ /g, "_");
    console.log(friendlySearchTerm)

    const newURL = `${playerURL}${friendlySearchTerm}`
    const responseInfo = await fetch(newURL)
    const dataInfo = await responseInfo.json();

    const GMURL = "https://api.chess.com/pub/titled/GM"
    const responseGM = await fetch(GMURL)
    const dataGM = await responseGM.json();

    const dataUsername = dataInfo.username
    const dataName = dataInfo.name
    const dataAvatar = dataInfo.avatar

    if (searchTerm == "") {
      DOMSelectors.fact.innerHTML = `
      <h1>Sorry! Please type something before you submit!</h1>
      `
    } else if (dataInfo.code == 0) {
      DOMSelectors.fact.innerHTML = `
      <h1>Sorry! This user was not found!</h1>
      `
    } else if (dataInfo.title != "GM") {
      DOMSelectors.fact.innerHTML = `
      <h1>Sorry! This user is not a GM!</h1>
      `
    }
      else if (dataGM.players.some(player => player === friendlySearchTerm)) {
        checkData(dataUsername, dataName, dataAvatar)
      }
    else {
      DOMSelectors.fact.innerHTML = `
      <h1>Sorry! Please check if the typed username is that of the GM on chess.com!</h1>
      `
    }

    
  } catch (error) {
    DOMSelectors.fact.innerHTML = `<h1>${error}</h1>`
  }
}

function clearInfo() {
  DOMSelectors.fact.innerHTML = ""
}

function clearInput() {
  DOMSelectors.playerSearch.value = "";
}

DOMSelectors.factBtn.addEventListener('click', function() {
  clearInfo()
  booty(URL)
})

DOMSelectors.submit.addEventListener('click', function() {
  clearInfo()
  getInfo()
  clearInput()
})



booty(URL)