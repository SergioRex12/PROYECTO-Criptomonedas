import { Api } from "./api.js"

const api = new Api();

document.addEventListener('DOMContentLoaded',() => {
    addCryptoList();

    document.addEventListener('submit',checkData);
})

//Añade los nombres de las cryptos a la lista
function addCryptoList() {
    //Llamo la api
    const lista = api.getCryptoNames();
    
    //Para eseprar que la api responda
    setTimeout(() => {
        
        const rowCrypto = document.querySelector('#criptomonedas');

        lista.forEach(item => {
            const {nombre, inicial} = item;
            rowCrypto.innerHTML += `
            <option value=${inicial}>${nombre}</option>
            `;
        });

    }, 500);
}

//Comprobamos el form
function checkData(e) {
    e.preventDefault();
    const monedaSel = document.querySelector('#moneda').value;
    const cryptoSel = document.querySelector('#criptomonedas').value;


    if (monedaSel === "" || cryptoSel === "") return console.log("Selecciona todos los campos");

    searchData(monedaSel,cryptoSel);
}

//Buscamos la crypto que elejiste con su moneda
function searchData(moneda, crypto) {
    let datos = api.getCrypto(moneda,crypto);

    setTimeout(() => {
        const zona = document.querySelector('#resultado');
        datos = datos[0].DISPLAY[crypto][moneda];
        const {LOWDAY, HIGHDAY, PRICE, CHANGEPCTDAY} = datos;

        console.log(datos);
        const div = document.createElement("div");
        div.innerHTML = `
            <h1>test</h1>
            <p>test2</p>
        
        `;
        zona.appendChild(div);
        
    }, 1000);
}