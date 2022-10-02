import { Api } from "./api.js"
import { UI } from "./ui.js";

const api = new Api();
const ui = new UI();


document.addEventListener('DOMContentLoaded',() => {
    addCryptoList();

    document.addEventListener('submit',checkData);
})

//Añade los nombres de las cryptos a la lista
async function addCryptoList() {
    //Llamo la api
    const lista = await api.getCryptoNames();

    const rowCrypto = document.querySelector('#criptomonedas');

    lista.Data.forEach(item => {
        const nombre = item.CoinInfo.FullName;
        const inicial = item.CoinInfo.Internal;

        rowCrypto.innerHTML += `
            <option value=${inicial}>${nombre}</option>
        `;
    });
}

//Comprobamos el form
function checkData(e) {
    e.preventDefault();

    const monedaSel = document.querySelector('#moneda').value;
    const cryptoSel = document.querySelector('#criptomonedas').value;

    if (monedaSel === "" || cryptoSel === "") return ui.alerta("Selecciona todos los campos");
    const zona = document.querySelector('#resultado');
    
    while (zona.firstChild) {
        zona.firstChild.remove()
    }

    ui.spinner();
    searchData(monedaSel,cryptoSel);
}

//Buscamos la crypto que elejiste con su moneda
async function searchData(moneda, crypto) {
    let datos = await api.getCrypto(moneda,crypto);
  
    const zona = document.querySelector('#resultado');

    datos = datos.DISPLAY[crypto][moneda];
    const {LOWDAY, HIGHDAY, PRICE, CHANGEPCTDAY, LASTUPDATE} = datos;
    
    ui.spinner();

    const div = document.createElement("div");
    div.innerHTML = `
        <p class ="precio">El precio es: <span> ${PRICE} </span>  </p>
        <p>Precio más alto del día: <span> ${HIGHDAY} </span>  </p>
        <p>Precio más bajo del día: <span"> ${LOWDAY} </span>  </p>
        <p>Variación últimas 24 horas: <span> ${CHANGEPCTDAY}% </span>  </p>
        <p>Última actualización: <span> ${LASTUPDATE} </span>  </p>
    `;
    zona.appendChild(div);
        
}