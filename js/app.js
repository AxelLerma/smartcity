//app.js
//funciones globales 

const showAlert = (Elementid, message) => {
    const alert = document.getElementById(Elementid)
    if (!alert) return
    alert.textContent = message
    alert.classList.remove('d-none')
}

const hideAlert = Elementid => {
    const alert = document.getElementById(Elementid)
    if (!alert) return
    alert.classList.add('d-none')
}