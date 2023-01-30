function checkData(playerUsername, playerName, playerAvatar) {

if (typeof playerName == "string" && typeof playerName == 'string') {
    DOMSelectors.fact.innerHTML = 
    `
    <div id="playerText">
    <h1 class="actualText">Username: ${playerUsername}</h1>
    <h1>Real Name: ${playerAvatar}</h1>
    </div>
    <div id="avatar">
    <img src="${playerName}" alt="N/A"></img>
    </div>
    `
  } else if (typeof playerName == 'undefined' && typeof playerAvatar != "string"){
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
  } else if (typeof playerName == 'string' && typeof playerAvatar != "string"){
    DOMSelectors.fact.innerHTML = 
    `
    <div id="playerText">
    <h1 class="actualText">Username: ${playerUsername}</h1>
    <h1>Real Name: N/A</h1>
    </div>
    <div id="avatar">
    <img src="${playerName}" alt="N/A"></img>
    </div>
    `
  } else{
    DOMSelectors.fact.innerHTML = 
    `
    <div id="playerText">
    <h1 class="actualText">Username: ${playerUsername}</h1>
    <h1>Real Name: ${playerAvatar}</h1>
    </div>
    <div id="avatar">
    <h1>[no image available]</h1>
    </div>
    `
  }
}