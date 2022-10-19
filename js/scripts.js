// When website loads, run
window.onload = function(){
  // When submit happens
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    // Retrieve input values
    let name1 = document.getElementById("name1Input").value;
    let noun1 = document.getElementById("noun1Input").value;
    let adjective1 = document.getElementById("adjective1Input");
    
    // Replace blanks with words
    document.getElementById("name1");
    console.log(name1);

    // Stop auto reload
    event.preventDefault();
  }
}
  