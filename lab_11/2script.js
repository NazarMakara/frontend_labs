let urlParams = new URLSearchParams(window.location.search);
let Key = urlParams.get('planet');

if (Key) {
    showDetails(Key);
} else {
    document.getElementById("planetContent").innerHTML = "<p>Planet not found!</p>";
}