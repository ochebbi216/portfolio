function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

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

        