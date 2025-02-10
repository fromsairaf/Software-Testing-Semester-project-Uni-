// Function to process the input
function processName() {
  // Remove spaces from the input string
  let str = document.getElementById("abc").value.trim();
  if (str === "") {
    document.getElementById("h21").innerHTML =
      "Oops! The input cannot be empty.";
    document.getElementById("h22").innerHTML = "";
    document.getElementById("h23").innerHTML = "";

    return;
  }
  str = str.replace(/\s+/g, ""); // Removes all spaces

  let counter_S = 0; // Lowercase letters count
  let counter_C = 0; // Uppercase letters count
  let isValid = true;

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);

    //SaiRa FatIMa
    if (letter >= "a" && letter <= "z") {
      counter_S++;
      //6
    } else if (letter >= "A" && letter <= "Z") {
      counter_C++;
      //5
    } else {
      isValid = false; // Invalid character found
    }
  }
  // Output results based on validity
  if (!isValid) {
    document.getElementById("h21").innerHTML = "Please enter a valid input.";
    document.getElementById("h22").innerHTML = "";
    document.getElementById("h23").innerHTML = "";
    // document.write("Please enter a valid input." + "<br>");
  } else {
    document.getElementById("h21").innerHTML =
      "Processed Input: " + str + "<br>";
    document.getElementById("h22").innerHTML =
      "Number of Lowercase letters: " + counter_S + "<br>";
    document.getElementById("h23").innerHTML =
      "Number of Uppercase letters: " + counter_C + "<br>";
  }
}
document.getElementById("button01").addEventListener("click", myFunc);
function myFunc() {
  document.getElementById("abc").value = "";
}
