let input = document.getElementById("input");

function validate(e) {
  let value = e.target.value.length;
  if (value > 4) {
    console.log("Validate");
  } else {
    console.log(" Not Validate");
  }
}

input.addEventListener("keydown", validate);
