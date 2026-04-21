//register.js
document.getElementById('registerform')?.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.getElementById('nombreCompleto').value
    const email = document.getElementById('registerEmail').value
    const password = document.getElementById('Password').value
    const confirmPassword = document.getElementById('confirmPassword').value

    if (!name || !email || !password || !confirmPassword) {
        showAlert('registeralert', 'todos los datos son obligatorios')
        return
    }

    if (password !== confirmPassword) {
        showAlert('registeralert', 'las contraseñas no son iguales')
        return
    }

    // simulación de registro 
    localStorage.setItem("userName", name)

    showAlert('registeralert', 'registro satisfactorio')

    setTimeout(() => {
        window.location.href = 'login.html'
    }, 1000)
})

