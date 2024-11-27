fetch("../src/players.json")
    .then((response) => response.json())
    .then((data) => displayplayers(data.players))

function displayplayers(data){
    const cardPlayer = document.getElementById("dis-ply")
    cardPlayer.innerHTML = data.map((player) =>{
        return `<div class="flex flex-wrap gap-2">
                     <div class="flex flex-wrap border border-black gap-2 bg-[#E6E9AF] rounded-t-full w-32">
                       <figure class="w-full flex justify-center">
                           <img class="rounded-t-full bg-[#E8E8D8] w-full h-32 border-b border-black" src="${player.photo}" alt="${player.name}" title="${player.name}">
                       </figure>
                       <div class="flex flex-col justify-center items-center w-full pb-2">
                           <h1 class="text-lg font-medium ">${player.name}</h1>
                           <h1 class="text-sm">${player.rating}</h1>
                       </div>
                     </div> 
                   </div>`
   })
   .join( ``);
}