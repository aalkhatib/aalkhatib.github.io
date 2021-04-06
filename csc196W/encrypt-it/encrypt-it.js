/*
 * Starter file 
 */
(function () {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");
    alert("window showed");



    document.getElementById("encrypt-it").addEventListener("click", handleClick);
    document.getElementById("radio12").addEventListener("click", font12);
    document.getElementById("radio24").addEventListener("click", font24);
    document.getElementById("all-caps").addEventListener("click", uppercase);
    document.getElementById("no-caps").addEventListener("click", lowercase);
    document.getElementById("reset").addEventListener("click", reset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function handleClick() {
    var text = document.getElementById("input-text").value;
    shiftCipher(text);
  }

  function font12() {
    document.getElementById('input-text').style.fontSize = "12pt";
  }

  function font24() {
    document.getElementById('input-text').style.fontSize = "24pt";
  }

  function reset() {
    document.getElementById('input-text').value = "";
  }

  function uppercase() {
    document.getElementById('input-text').style.textTransform = "uppercase";
  }

  function lowercase() {
    document.getElementById('input-text').style.textTransform = "lowercase";
  }

  /**
 * Returns an encrypted version of the given text, where
 * each letter is shifted alphabetically ahead by 1 letter,
 * and 'z' is shifted to 'a' (creating an alphabetical cycle).
 */
  function shiftCipher(text) {
    var text = document.getElementById("input-text").value;
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }


})();
