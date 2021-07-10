const hamburger = document.getElementsByClassName('hamburger')[0];

hamburger.addEventListener('click', () => {
    if (document.getElementsByTagName('nav')[0].classList.toggle('collapsed'))
        hamburger.setAttribute('src', 'images/icon-close.svg');
    else
        hamburger.setAttribute('src', 'images/icon-hamburger.svg');    
});
let currentDropdown;

for (let dropdown of document.getElementsByClassName('dropdown-header'))
    dropdown.addEventListener('click', () => handleDropdown(dropdown));

function handleDropdown(dropdown) {
    if (currentDropdown && currentDropdown != dropdown)
        currentDropdown.parentElement.classList.remove('collapsed');

    dropdown.parentElement.classList.toggle('collapsed');
    currentDropdown = dropdown; 
}