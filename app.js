import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/pexelsFreeScrabble.png";
import "./assets/img/4geeks.ico";

window.onload = function () {
  // Declaring the arrays
  let possList = ["My", "Our", "Yalls"]; // possessives
  let adjList = ["Fun", "Texan", "Red"];
  let nounList = ["Pet", "Guava", "Jedi"];
  let extList = ["us", "me", "va", "cat"];

  // Random integer generator
  function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  // string that will be displayed; number of combos
  let output = "";
  let numDomains = 0;

  // Nested for loops to get domain combos
  for (let i = 0; i < possList.length; i++) {
    for (let j = 0; j < adjList.length; j++) {
      for (let k = 0; k < nounList.length; k++) {
        let extText = extList[getRandomIntInclusive(0, extList.length - 1)];
        // Special domain hack for "Guava"
        let nounText = nounList[k];
        if (extText == "va" && nounList[k] == "Guava") {
          nounText = "Gua";
        }
        output +=
          possList[i] + adjList[j] + nounText + "." + extText + "<br>";
        numDomains += 1;
      }
      output += "<br>";
    }
  }

  //Displaying the number of combos in h1
  if (numDomains > 0) {
    document.querySelector(".numDomains").innerHTML = numDomains;
  }

  // displaying the results
  document.querySelector(".listHere").innerHTML = output;
};
