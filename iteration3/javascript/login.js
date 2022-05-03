let account = document.querySelector('.account');
let password = document.querySelector('.password');

function login() {

    if (account.value.length > 5 && password.value.length > 5) {

        window.location.href = '../index.html';

        sessionStorage.setItem('islogin', true);

    }
}