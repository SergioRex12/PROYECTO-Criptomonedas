

export class UI {
    constructor() {}



    alerta(texto) {

        const zona = document.querySelector('#resultado');

        if (zona.childElementCount > 0) return;

        const div = document.createElement('div');

        div.classList.add('error')
        div.textContent = texto;

        zona.appendChild(div);

        
        setTimeout(() => {
            div.remove();
        }, 3000);
    }


    spinner() {

        const spinner = document.querySelector('#spinner');
 
        if (spinner.classList.contains('oculto')) {
            spinner.classList.remove('oculto')
        } else {
            spinner.classList.add('oculto')
        }

    }
}