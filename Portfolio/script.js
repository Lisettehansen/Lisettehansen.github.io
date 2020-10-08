
/* bokse*/

//"Min Profil-side" - Kompetencer//
let box = document.getElementsByClassName("box");
let i;
for (i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function() {
        let content = this.nextElementSibling;
        let icon = this.children[1];
        if (content.style.display === "block") {
            content.style.display = "none";
            
        } else {
            content.style.display = "block";
            
        }
    });
}

//scroll //

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
