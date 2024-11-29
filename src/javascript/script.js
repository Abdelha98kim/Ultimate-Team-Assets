// Fetching date from json and show it in simple cards
fetch("../src/players.json")
    .then((response) => response.json())
    .then((data) => displayplayers(data.players))

function displayplayers(data){
    const cardPlayer = document.getElementById("dis-ply")
    cardPlayer.innerHTML = data.map((player) =>{
        return `<div class="flex flex-wrap gap-2">
                     <div class="flex flex-wrap border border-black gap-1 bg-[#E6E9AF] w-24 ">
                       <figure class="w-full flex justify-center">
                           <img class="bg-[#E8E8D8] w-full h-24 border-b border-black" src="${player.photo}" alt="${player.name}" title="${player.name}">
                       </figure>
                       <div class="flex flex-col justify-center items-center w-full pb-2">
                           <h1 class="text-lg font-medium ">${player.name}</h1>
                           <h1 class="text-sm flex items-center"><img class="bg-[#E8E8D8] w-3 h-2" src="${player.flag}" alt="${player.nationality}" title="${player.nationality}"> | ${player.position} | ${player.rating}</h1>
                       </div>
                     </div> 
                   </div>`
   })
   .join( ``);
}

// Showing the form of adding player
const buttonAdding = document.getElementById("add-player");
buttonAdding.addEventListener("click", function(){
    const formAdding = document.getElementById("card-ajoute");
    formAdding.style = "display:block;"
});

// Close the form of adding player
const buttonClosing = document.getElementById("close-button");
buttonClosing.addEventListener("click", function(){
    const formAdding = document.getElementById("card-ajoute");
    formAdding.style = "display:hidden;"
});

// Adding player to the list
const addPlayer = document.getElementById("playerAdding");
addPlayer.addEventListener("click", function(){
    const fullName = document.getElementById("name").value;
    var nameNoSpace = fullName.split(' ').join('');
    const rating = document.getElementById("rating").value;
    const position = document.getElementById("position").value;
    const pace = document.getElementById("pace").value;
    const shooting = document.getElementById("shooting").value;
    const passing = document.getElementById("passing").value;
    const dribbling = document.getElementById("dribbling").value;
    const defending = document.getElementById("defending").value;
    const physical = document.getElementById("physical").value;
    const playerPicture = document.getElementById("player-picture").files[0];
    let pictureUrl = '';
    if (playerPicture) {
        pictureUrl = URL.createObjectURL(playerPicture);
    }
    const countryFlag = document.getElementById("country-flag").files[0];
    let flagUrl = '';
    if (countryFlag) {
        flagUrl = URL.createObjectURL(countryFlag);
    }
    const sectionCard = document.getElementById("displayAddingPlayers");

    sectionCard.insertAdjacentHTML ("beforeend", 
        `
        <div class="flex flex-wrap gap-2 mb-2" id="${nameNoSpace}">
          <div class="flex flex-wrap border border-black gap-1 bg-[#E6E9AF] w-24 ">
            <figure class="w-full flex justify-center">
                <img class="bg-[#E8E8D8] w-full h-24 border-b border-black" src="${pictureUrl}" alt="${fullName}" title="${fullName}">
            </figure>
            <div class="flex flex-col justify-center items-center w-full mb-2">
                <h1 class="text-lg font-medium ">${fullName}</h1>
                <h1 class="text-sm flex items-center pt-3"><img class="bg-[#E8E8D8] w-3 h-2 mr-1" src="${flagUrl}" alt="Country Flag"> | ${position} | ${rating}</h1>
                <div class="flex flex-wrap gap-1 pt-3">
                        <button class="text-xs bg-orange-300 py-1 px-2 rounded-lg" id="edit">Edit</button>
                        <button class="text-xs bg-orange-300 py-1 px-2 rounded-lg" onclick = "deleteCard(${nameNoSpace})">Delete</button>
                </div>
            </div>
          </div> 
        </div>
    ` 
    )
    document.getElementById("name").value = " ";
    document.getElementById("rating").value = " ";
    document.getElementById("position").value = " ";
    document.getElementById("pace").value = " ";
    document.getElementById("shooting").value = " ";
    document.getElementById("passing").value = " ";
    document.getElementById("dribbling").value = " ";
    document.getElementById("defending").value = " ";
    document.getElementById("physical").value = " ";

    const formAdding = document.getElementById("card-ajoute");
    formAdding.style = "display:hidden;"
});

// delete card
function deleteCard(nameNoSpace){ 
    nameNoSpace.remove();
}