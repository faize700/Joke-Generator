const btnEle = document.getElementById("btn");
const jokeEle = document.getElementById("jokes");

// const apiKey = "Ld1+tD5lDdfAh5quyprDhg==W2Dtgqqk7TW9D7ez";
// const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const apiUrl = "https://icanhazdadjoke.com/";

option = {
    method : "GET",
    // headers : {
    //     "X-Api-Key" : apiKey
    // }
    headers:{
            accept :" application/json" ,
        },
}

async function getJoke(){

    try {
        jokeEle.innerText = "Updating...";
        btnEle.disabled = true;
        btnEle.innerText = "Loading";
        
        const response = await fetch(apiUrl,option);
        const data = await response.json();

        btnEle.disabled = false;
        btnEle.innerText = "Tell me a Joke";
        jokeEle.innerText = data.joke;
    } catch (error) {
        jokeEle.innerText = "An Error happened, check and try again!";
        btnEle.disabled = false;
        btnEle.innerText = "Tell me a Joke";
        console.log('Error:', error);
    }

    
}

btnEle.addEventListener("click", getJoke);
