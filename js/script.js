// responsive navbar 
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('sun')){
            darkmode.classList.replace('sun','moon');
            document.body.classList.remove('active');
        }else if(darkmode.classList.contains('moon')){
            darkmode.classList.replace('moon','sun');
            document.body.classList.add('active');
        }
    }

    //show page after loader
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("animate-bottom").style.display = "block";
}

    // Post form data to SheetDB on form submission
    var form = document.getElementById('sheetdb-form');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
        })
        .then(response => response.json())
        .then(data => {
            alert("Your message was sent successfully");
            form.reset();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });
    });