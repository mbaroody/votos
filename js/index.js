function display(id) {
    // first, hide main navigation
    const navigation = document.getElementById("navigation");
    navigation.classList.add("d-none");

    // second, show content container
    const content = document.getElementById("content");
    content.classList.remove("d-none");
    content.classList.add("d-inline");

    // third, show panel and add class flag
    const panel = document.getElementById(id);
    panel.classList.remove("d-none");
    panel.classList.add("d-inline");
    panel.classList.add("current-displayed-panel");

    // last, display, back button to return to main navigation
    const backButton = document.getElementById("back");
    backButton.classList.remove("d-none");
    backButton.classList.add("d-inline");
}

function back() {
   
    // first, hide panel and remove class flag
    const panel = document.getElementsByClassName("current-displayed-panel").item(0);
    panel.classList.remove("d-inline");
    panel.classList.remove("current-displayed-panel");
    panel.classList.add("d-none");
    
    // second, hide content container
    const content = document.getElementById("content");
    content.classList.remove("d-inline");
    content.classList.add("d-none");

    // third, display main navigation
    const navigation = document.getElementById("navigation");
    navigation.classList.remove("d-none");
    navigation.classList.add("d-inline");
   
    // last, hide back button to main navigation
    const backButton = document.getElementById("back");
    backButton.classList.remove("d-inline");
    backButton.classList.add("d-none");
}