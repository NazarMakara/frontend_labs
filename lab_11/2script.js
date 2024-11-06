let urlParams = new URLSearchParams(window.location.search);
let Key = urlParams.get('agent');

if (Key) {
    showDetails(Key);
}
