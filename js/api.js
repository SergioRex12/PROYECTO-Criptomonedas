
const apiKey = "031e2e3573cc01c53236990331918f8076d1b7d9836e3fb824d0158c790e5939";

export class Api {
    constructor() {}

    //Saca los nombres de las cryptos más populares (10) 
    async getCryptoNames() {
        const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${apiKey}`;
        try {
            const consulta = await fetch(url);
            const resutlado = await consulta.json();

            return resutlado;

        } catch (error) {
            console.log(error);
        }
    }

    //Saca los datos de una crypto 
    async getCrypto(moneda,crypto)
    {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`;
        
        const consulta = await fetch(url);
        const resultado = await consulta.json();
        return resultado;    
    }
} 