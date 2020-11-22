
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


