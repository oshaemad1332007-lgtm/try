// ----------------------------------------------------
// ----------------------------------------------------
// slide par

let sidebar = document.getElementById("sidebar");

function toggleSidebar() {
sidebar.classList.toggle("active");
}



// ---------------------------------------------------------
// ---------------------------------------------------------

// dark mode

let x = document.getElementsByClassName("btn1");
let icon = document.getElementsByClassName("img-dark");




if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
    icon.src = "images/moon-solid.png";
    
}
else
{
    icon.src = "images/moon-regular.png";


}

for (let i = 0; i < x.length; i++) {
    


    x[i].onclick = function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("mode", "dark");
            

            for (let i = 0; i < icon.length; i++)
            { icon[i].src = "images/moon-solid.png"; }
                        
        }

        else {
            localStorage.setItem("mode", "light");
            
        for (let i = 0; i < icon.length; i++)
            { icon[i].src ="images/moon-regular.png"; }


        }




    }
}



// ---------------------------------------------------------
// ------------------------------------------------------------
// change btn


let btn2 = document.querySelector(".btn2");
let cards = document.querySelectorAll(".cardsimg");



if (localStorage.getItem("mode_change") === "change") {
cards.forEach(el => el.classList.add("change"));
}

btn2.onclick = function () {
cards.forEach(el => el.classList.toggle("change"));

if (cards[0].classList.contains("change")) {
    localStorage.setItem("mode_change", "change");
} else {
    localStorage.setItem("mode_change", "notchange");
}
};


