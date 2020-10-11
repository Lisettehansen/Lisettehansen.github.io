// Accordion på praktisk info og sceneinfo
let box = document.getElementsByClassName("info-box");
let i;
for (i = 0; i < box.length; i++) {
  box[i].addEventListener("click", function() {
    let content = this.nextElementSibling;
    let icon = this.children[1];
    if (content.style.display === "block") {
      content.style.display = "none";
      icon.src="assets/img/plus.svg";
    } else {
      content.style.display = "block";
      icon.src="assets/img/minus.svg";
    }
  });
}


//Wordpress content - program info

const apiUrl = 'http://lotjen.dreamhosters.com/wp-json/wp/v2/';
const apiKey = 'kyMREHEEitEYspulz0VBJDYKzOGhIJk7';


getImageFromWP();

function getImageFromWP() {
    let postOptionsId = 65;
    console.log('getImageFromWP()');
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                program = JSON.parse(this.responseText);
                program_fredag.src = program.acf.program_fredag;
                program_loerdag.src = program.acf.program_loerdag;

            } catch (error) {
                errorMessage(`Error parsing JSON`);
            }
        }
        if (this.readyState == 4 && this.status > 400) {
            errorMessage('An error has occured while getting the data. Please try again later!');
        }
    }
    xhttp.open('GET', `${apiUrl}posts/${postOptionsId}`, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
}


//Wordpress content - frontpage info
getContentFromWP();

function getContentFromWP() {
    let postOptionsId = 86;
    console.log('getContentFromWP()');
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                frontpage = JSON.parse(this.responseText);
                info_line.innerHTML = frontpage.acf.info_line;
                artists_year.innerHTML = frontpage.acf.artists_year;
                gallery_year.innerHTML = frontpage.acf.gallery_year;
            } catch (error) {
                errorMessage(`Error parsing JSON`);
            }
        }
        if (this.readyState == 4 && this.status > 400) {
            errorMessage('An error has occured while getting the data. Please try again later!');
        }
    }
    xhttp.open('GET', `${apiUrl}posts/${postOptionsId}`, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
}