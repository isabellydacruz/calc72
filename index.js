// Moved from index.html
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnCalculo');
    if (btn) {
        btn.addEventListener('click', () => {
            window.location.href = 'calculo.html';
        });
    }
});
