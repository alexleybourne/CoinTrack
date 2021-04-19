// Checking if testing locally
const baseUrl = window.location.href.includes('127.0.0.1:5500') ? "http://127.0.0.1:5500/index.html" : "https://alexleybourne.github.io/CryptoTrack/"
// Coingecko API Base url
const coinGeckoUrl = 'https://api.coingecko.com/api/v3/'
// Default currency
let currency = 'USD'

// Loading animation
let loading = true
// Errors
let errors = ""

const testData = {coins: ['doge', 'btc'], name: 'alex'}

window.onload = async () => {
    console.log('⚡️ LOADED! ⚡️');
    console.log('PARAMS: ',getUrlParam('coins'));
    console.log('GET VARS: ', getUrlVars());
    console.log('URL', window.location.href.includes('127.0.0.1:5500'));
    await getCurrency();
    createCards({topRisers: 5, coin: 'doge'})
    await getCoinData();
    loading = false
};

const getCurrency = async() => {
    const data = await fetchUrl('https://ipapi.co/json/')
    console.log('IP DATA:', await data);
    currency = data?.currency;
    console.log(currency);
}

const getUrlParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get(param);
    setValue(myParam);
    return myParam;
}

const constAddParam = (values, visit) => {

    let cleanUrl = `${baseUrl}?`;

    for (const [key, value] of Object.entries(values)) {
        const newUrl = `${key}=${value}&`
        cleanUrl = `${cleanUrl}${newUrl}`
    }

    console.log('NEW CLEAN URL', cleanUrl);
    console.log('VISIT NEW LINK?', visit);
    if (visit) { 
        updateURL(cleanUrl); 
        setValue();
    }
}

const fetchUrl = async(url) => {
    const promise = await fetch(url);
    if (promise.status == 200) {
        const data = await promise.json();
        console.log(data);
        return data;
    } else {
        console.log('An error has ocurred')
        return null
    }
}

const fetchGecko = async(url) => {
    const promise = await fetch(`${coinGeckoUrl}${url}`);
    if (promise.status == 200) {
        const data = await promise.json();
        console.log(data);
        errors = '';
        return data;
    } else {
        errors = 'An error has ocurred with the Coin Gecko API';
        console.log(errors);
        return null;
    }
}

const getCoinData = async() => {
    await fetchGecko('ping');
    getTrending();
    const coinsList = await fetchUrl('./coin-list.json')
    console.log('Coins List', coinsList)
    const top100 = await fetchGecko(`coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d`);
    console.log('Top 100 coins data: ', top100);
}

const dogeTest = () => {
    constAddParam(testData, true);
}

const updateURL = (newUrl) => {
    history.pushState({}, null, newUrl);
}

const setValue = (value) => {
    const data = JSON.stringify(getUrlVars())
    document.getElementById('coin').innerHTML = `Queries Found: ${data}`;
}

const getUrlVars = () => {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

const visit = (val) => {
    if (val.includes('baseUrl')) { window.location.href = baseUrl }
}

const getTrending = async() => {
    const response = await fetchGecko('search/trending');
    console.log('Top Trending: ', response)
    return response
}

const createCards = async(cards) => {
    return 'lol'
}

