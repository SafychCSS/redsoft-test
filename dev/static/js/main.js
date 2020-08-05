document.addEventListener('DOMContentLoaded', function() {
    const btnBuy = document.querySelectorAll('.js-btn-buy');

    async function getData(btn) {
        btn.classList.add('btn_load');
        btn.setAttribute('disabled', true);
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts/1');
        if (response.ok) {
            btn.classList.remove('btn_load');
            btn.classList.add('btn_check');
            btn.textContent = 'В корзине';
            btn.removeAttribute('disabled');

            localStorage.setItem(btn.getAttribute('data-btn'), btn.getAttribute('data-btn'));
        }
    }

    for (let i = 0; i < btnBuy.length; i += 1) {
        let dataBtn = btnBuy[i].getAttribute('data-btn');

        for (let a = 0; a < localStorage.length; a += 1) {
            if (localStorage.key(a) === dataBtn) {
                btnBuy[i].classList.add('btn_check');
            }
        }
        btnBuy[i].addEventListener('click', getData.bind(null, btnBuy[i]));
    }
});