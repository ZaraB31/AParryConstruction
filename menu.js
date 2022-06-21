function openMenu() {
    var x = document.getElementById("myTopNav");
    var y = document.getElementById("title");
    if (x.className === "topnav") {
        x.className += " responsive";
        y.className += " responsive";
    } else {
        x.className = "topnav";
        y.className = "title";
    }
}