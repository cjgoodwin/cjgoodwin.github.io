document.getElementById('lastmod').textContent = document.lastModified;
// for the copyright date
document.addEventListener('DOMContentLoaded', function() {
    // get the initial span element in the html
    let yearSpan = document.querySelector('#currentYear');

    let currentyear = new Date().getFullYear();
    // set the elements equal to eachother so we see it on screen
    yearSpan.textContent = currentyear;
});