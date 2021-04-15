// Checking if testing locally
const baseUrl = window.location.href.includes('127.0.0.1:5500') ? "http://127.0.0.1:5500/index.html" : "https://alexleybourne.github.io/CryptoTrack/"

const testData = {coins: ['doge', 'btc'], name: 'alex'}

window.onload = function() {
    console.log('⚡️ LOADED! ⚡️');
    console.log('PARAMS: ',getUrlParam('coins'));
    console.log('GET VARS: ', getUrlVars());
    console.log('URL', window.location.href.includes('127.0.0.1:5500'));
};

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

