// Fetching date from json and show it in simple cards
fetch("../src/players.json")
    .then((response) => response.json())
    .then((data) => displayplayers(data.players))

function displayplayers(data){
    const cardPlayer = document.getElementById("dis-ply")
    cardPlayer.innerHTML = data.map((player) =>{
        return `<div class="flex flex-wrap gap-2">
                     <div class="flex flex-wrap border border-black gap-2 bg-[#E6E9AF] w-24 ">
                       <figure class="w-full flex justify-center">
                           <img class="bg-[#E8E8D8] w-full h-24 border-b border-black" src="${player.photo}" alt="${player.name}" title="${player.name}">
                       </figure>
                       <div class="flex flex-col justify-center items-center w-full pb-2">
                           <h1 class="text-lg font-medium ">${player.name}</h1>
                           <h1 class="text-sm flex items-center"><img class="bg-[#E8E8D8] w-3 h-2 border-b border-black" src="${player.flag}" alt="${player.nationality}" title="${player.nationality}"> | ${player.position} | ${player.rating}</h1>
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