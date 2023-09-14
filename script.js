var cardsDiv = document.querySelector("#cards");
var currentUsername = "";

function getUsername(element) {
    console.log(element.value);
    currentUsername = element.value;
}

function makeCard(data) {
    var res = `<div class="card">
                    <img src="${data.avatar_url}" alt="${data.login}">
                <div class="flex">
                    <h3>${data.login} </h3>
                    <p>LOCATION: ${data.location} </p>
                    <p>${data.html_url} </p>
                    </div>
                </div>`
    return res;
}

async function search() {
    var response = await fetch("https://api.github.com/users/" + currentUsername);
    var coderData = await response.json();
    // console.log(data);
    cardsDiv.innerHTML = makeCard(coderData) + cardsDiv.innerHTML;


}