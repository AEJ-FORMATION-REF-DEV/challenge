/* déclaration des constatntes pour les actions d'afficharge de mot de passe */
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

const togglePasswordConfirm = document.querySelector('#togglePasswordConfirm');

const passwordConfirm = document.querySelector('#passwordConfirm');


/* action pour afficher le mot de passe */

togglePassword.addEventListener('click', function (e) {
    // basculer l'attribut 
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // basculer l'icône œil / barre oblique
    this.classList.toggle('bi-eye');
});


togglePasswordConfirm.addEventListener('click', function (e) {
    // basculer l'attribut 
    const type = passwordConfirm.getAttribute('type') === 'passwordConfirm' ? 'text' : 'passwordConfirm';
    passwordConfirm.setAttribute('type', type);
    // basculer l'icône œil / barre oblique
    this.classList.toggle('bi-eye');
});



   







