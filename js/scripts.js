// When website loads, run
window.onload = function() {
  // When submit happens
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    // Stop auto reload
    event.preventDefault();

    // Retrieve input values
    const name1 = document.getElementById("name1Input").value;
    const noun1 = document.getElementById("noun1Input").value;
    const adjective1 = document.getElementById("adjective1Input").value;
    
    // Replace blanks with words
    document.querySelector("span#name1").innerText = name1;
    document.querySelector("span#noun1").innerText = noun1;
    document.querySelector("span#adjective1").innerText = adjective1;

    const story = document.querySelector("p#story");
    story.removeAttribute("class");
  };
};
  