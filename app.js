// const BASE_URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_93jUIfvqvnziEdRQMVwWCSsp9B3jN7UHaXPwYbey&base_currency=";
const BASE_URL = "https://api.exchangerate-api.com/v4/latest/";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");



for (let select of dropdowns){
    for (currCode in countryList){
       let newOption = document.createElement("option");
       newOption.innerText = currCode;
       newOption.value = currCode;
       if (select.name === "from" &&  currCode === "USD"){
        newOption.selected = "selected";
       } else if (select.name === "to" &&  currCode === "INR"){
        newOption.selected = "selected";  
       }
       select.append(newOption); 
    }

    select.addEventListener("change",(evt) => {
        updateFlag(evt.target);
    });
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;
    // console.log(amtValue);
    if(amtValue == "" || amtValue < 1) {
       amtValue = 1;
       amount.value = "1";
    }
    const URL = `${BASE_URL}${fromCurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    const userChoice = toCurr.value;
    // let rate = data.data[userChoice];
    let rate = data.rates[userChoice];
    console.log(rate);
    console.log(fromCurr.value,toCurr.value);
    let finalAmount = amtValue * rate;
    msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
    
}

btn.addEventListener("click", (evt) => {
     evt.preventDefault();
     updateExchangeRate();
});


window.addEventListener("load",() => {
    updateExchangeRate();
});


//*#*#@^((^@^@^$*(@$  ChatGPT take - 1 Codeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

// const BASE_URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_93jUIfvqvnziEdRQMVwWCSsp9B3jN7UHaXPwYbey";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// const updateDropdowns = async () => {
//     try {
//         const response = await fetch(BASE_URL);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         const currencyList = Object.keys(data.rates);

//         for (let currency of currencyList) {
//             let newOption = document.createElement("option");
//             newOption.innerText = currency;
//             newOption.value = currency;
//             if (currency === "USD") {
//                 newOption.selected = true;
//             } else if (currency === "INR") {
//                 newOption.selected = true;  
//             }
//             fromCurr.appendChild(newOption); 
//             toCurr.appendChild(newOption.cloneNode(true));
//         }

//         updateFlag(fromCurr);
//         updateFlag(toCurr);

//         updateExchangeRate();
//     } catch (error) {
//         console.error('There was a problem fetching the data:', error);
//     }
// };

// const updateExchangeRate = async () => {
//     try {
//         let amount = document.querySelector(".amount input").value || 1;
//         const URL = BASE_URL;
//         const response = await fetch(URL);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         const rate = data.rates[toCurr.value];
//         const finalAmount = amount * rate;
//         msg.innerText = `${amount} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
//     } catch (error) {
//         console.error('There was a problem fetching the data:', error);
//     }
// };

// const updateFlag = (element) => {
//     // Replace this function with your implementation for updating flags
//     // It's not provided in the code snippets you've shared
//     // Make sure you have a function that updates the flag image based on the selected currency
//     let currCode = element.value;
//         let countryCode = countryList[currCode];
//         let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//        let img = element.parentElement.querySelector("img");
//        img.src = newSrc;


// };

// btn.addEventListener("click", (evt) => {
//      evt.preventDefault();
//      updateExchangeRate();
// });

// window.addEventListener("load",() => {
//     updateDropdowns();
// });
