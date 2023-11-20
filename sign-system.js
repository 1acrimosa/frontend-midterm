//                       SIGN PAGE JS                 //

let signUpButton = document.getElementById('signUpButton');
let signInButton = document.getElementById('signInButton');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');

signInButton.addEventListener('click', () => {
    nameField.style.maxHeight = '0';

    title.innerHTML = 'Sign In';
    signUpButton.classList.add('disable');
    signInButton.classList.remove('disable');
});

signUpButton.addEventListener('click', () => {
    nameField.style.maxHeight = '60px';

    title.innerHTML = 'Sign Up';
    signInButton.classList.add('disable');
    signUpButton.classList.remove('disable');
});