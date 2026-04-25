
let x = document.getElementById("btn1");
let icon = document.getElementById("img-dark");
let logo = document.getElementById("logo2");
let img_map =document.getElementById("maps");


if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
    icon.src = "images/moon-solid.png";
    logo.src = "images/Logo (4).png";
    img_map.src = "images/image_map3.png";

}
else
{
    icon.src = "images/moon-regular.png";
    logo.src = "images/Logo.png";
    img_map.src = "images/image_map.png";

}



x.onclick = function ()
{

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark"))
    {
        localStorage.setItem("mode", "dark");
        icon.src = "images/moon-solid.png";
        logo.src = "images/Logo (4).png";
        img_map.src = "images/image_map3.png";


    }

    else
    {
        localStorage.setItem("mode", "light");
        icon.src = "images/moon-regular.png";
        logo.src = "images/Logo.png";
            img_map.src = "images/image_map.png";



    }




}