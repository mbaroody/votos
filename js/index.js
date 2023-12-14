function spanish() {
    console.log("yooooo!! spanish!!")

    const info = document.getElementById("info");
    const spanish = document.getElementById("spanish");

    info.classList.add("d-none");
    spanish.classList.remove("d-none");
    spanish.classList.add("d-inline");
}

function english() {
    console.log("yooooo!! english!!")
    
    const info = document.getElementById("info");
    const english = document.getElementById("english");

    info.classList.add("d-none");
    english.classList.remove("d-none");
    english.classList.add("d-inline");
}