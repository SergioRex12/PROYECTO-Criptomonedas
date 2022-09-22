
const apiKey = "031e2e3573cc01c53236990331918f8076d1b7d9836e3fb824d0158c790e5939";

export class Api {
    constructor() {}

    //Saca los nombres de las cryptos más populares (10) 
    getCryptoNames() {
        const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${apiKey}`;
        let objNombres = [];

        fetch(url) 
            .then(resultado => resultado.json())
            .then(resultado => {

                //Creamos el objeto con todas las monedas 
                resultado.Data.forEach(item => {
                    objNombres.push({
                        nombre: item.CoinInfo.FullName,
                        inicial: item.CoinInfo.Internal
                    })
                });
            })

        return objNombres;
    }

    //Saca los datos de una crypto 
    getCrypto(moneda,crypto)
    {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`;
        let data = [];
        fetch(url)
            .then(resultado => resultado.json())
            .then(resultado => data.push(resultado));

        return data;    
    }
} 