document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem("userName") || 'Usuario'
    const userNameEl = document.getElementById('username')
    if (userNameEl) {
        userNameEl.textContent = userName
    }
    const logoutBtn = document.getElementById('logoutBtn')
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem("userName")
            window.location.href = 'login.html'
        })
    }

})