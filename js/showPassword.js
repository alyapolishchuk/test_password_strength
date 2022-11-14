const input = document.getElementById('userPassword');
const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text')
    } else {
        input.setAttribute("type", "password");
    }
})