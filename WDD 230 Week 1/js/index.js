document.getElementById('lastmod').textContent = document.lastModified;
// for the copyright date
let year = document.querySelector('#currentyear');
let currentyear = new Date().getFullYear();
year.textContent = currentyear;