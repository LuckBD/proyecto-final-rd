function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

function validateForm(){
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}