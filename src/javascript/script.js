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
   const popform = document.getElementById("form-pop")
   popform.innerHTML = data.map((player) =>{
        return `<div class="flex flex-wrap gap-2 mb-2" onclick = "popplayer(event)">
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
    const formpop = document.getElementById("form-pop");

    var picturecheck;
    if(pictureUrl == ""){
        picturecheck = false;
        document.getElementById("player-picture").style = "color:red;"
    }else{
        picturecheck = true;
        document.getElementById("player-picture").style = "color:green;"
    }

    var flagcheck;
    if(flagUrl == ""){
        flagcheck = false;
        document.getElementById("country-flag").style = "color:red;"
    }else{
        flagcheck = true;
        document.getElementById("country-flag").style = "color:green;"
    }

    var namecheck;
    if(fullName.length < 5 ){
        namecheck = false;
        document.getElementById("name").style = "border: 1px red solid;"
    }else{
        namecheck = true;
        document.getElementById("name").style = "border: 1px green solid;" 
    }

    var ratingcheck;
    if(rating < 5 || rating > 100){
        ratingcheck = false;
        document.getElementById("rating").style = "border: 1px red solid;"
        
    }else{
        ratingcheck = true;
        document.getElementById("rating").style = "border: 1px green solid;" 
    }

    var positioncheck;
    if(position == ""){
        positioncheck = false;
        document.getElementById("position").style = "border: 1px red solid;"
        
    }else{
        ratingcheck = true;
        document.getElementById("position").style = "border: 1px green solid;" 
    }

    var pacecheck;
    if(pace < 1 || pace > 100){
        pacecheck = false;
        document.getElementById("pace").style = "border: 1px red solid;"
        
    }else{
        pacecheck = true;
        document.getElementById("pace").style = "border: 1px green solid;" 
    }

    var shootingcheck;
    if(shooting < 1 || shooting > 100){
        shootingcheck = false;
        document.getElementById("shooting").style = "border: 1px red solid;"
        
    }else{
        shootingcheck = true;
        document.getElementById("shooting").style = "border: 1px green solid;" 
    }

    var passingcheck;
    if(passing < 1 || passing > 100){
        passingcheck = false;
        document.getElementById("passing").style = "border: 1px red solid;"
        
    }else{
        passingcheck = true;
        document.getElementById("passing").style = "border: 1px green solid;" 
    }

    var dribblingcheck;
    if(dribbling < 1 || dribbling > 100){
        dribblingcheck = false;
        document.getElementById("dribbling").style = "border: 1px red solid;"
        
    }else{
        dribblingcheck = true;
        document.getElementById("dribbling").style = "border: 1px green solid;" 
    }

    var defendingcheck;
    if(defending < 1 || defending > 100){
        defendingcheck = false;
        document.getElementById("defending").style = "border: 1px red solid;"
        
    }else{
        defendingcheck = true;
        document.getElementById("defending").style = "border: 1px green solid;" 
    }

    var physicalcheck;
    if(physical < 1 || physical > 100){
        physicalcheck = false;
        document.getElementById("physical").style = "border: 1px red solid;"
        
    }else{
        physicalcheck = true;
        document.getElementById("physical").style = "border: 1px green solid;" 
    }

    var picturecount = 0;
    var flagcount = 0;
    var namecount = 0;
    var ratingcount = 0;
    var positioncount = 0;
    var pacecount = 0;
    var shootingcount = 0;
    var passingcount = 0;
    var dribblingcount = 0;
    var defendingcount = 0;
    var physicalcount = 0;

    function totalcheck(picturecheck ,flagcheck ,namecheck ,ratingcheck ,positioncheck ,pacecheck ,shootingcheck ,passingcheck ,dribblingcheck ,defendingcheck ,physicalcheck){
        if(picturecheck){
            picturecount = picturecount + 1;
        }
        if(flagcheck){
            flagcount = flagcount + 1;
        }
        if(namecheck){
            namecount = namecount + 1;
        }
        if(ratingcheck){
            ratingcount = ratingcount + 1;
        }
        if(positioncheck){
            positioncount = positioncount + 1;
        }
        if(pacecheck){
            pacecount = pacecount + 1;
        }
        if(shootingcheck){
            shootingcount = shootingcount + 1;
        }
        if(passingcheck){
            passingcount = passingcount + 1;
        }
        if(dribblingcheck){
            dribblingcount = dribblingcount + 1;
        }
        if(defendingcheck){
            defendingcount = defendingcount + 1;
        }
        if(physicalcheck){
            physicalcount = physicalcount + 1;
        }

        var sumcounts = picturecount + flagcount + namecount + ratingcount + positioncount + pacecount + shootingcount +  flagcount + passingcount + dribblingcount + defendingcount + physicalcount;
        return sumcounts
    }

   var resultFinal =  totalcheck(picturecheck ,flagcheck ,namecheck ,ratingcheck ,positioncheck ,pacecheck ,shootingcheck ,passingcheck ,dribblingcheck ,defendingcheck ,physicalcheck)
    if(resultFinal == 11){
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
        formpop.insertAdjacentHTML ("beforeend", 
            `
            <div class="flex flex-wrap gap-2 mb-2" onclick = "popplayer(event)">
              <div class="flex flex-wrap border border-black gap-1 bg-[#E6E9AF] w-24 ">
                <figure class="w-full flex justify-center">
                    <img class="bg-[#E8E8D8] w-full h-24 border-b border-black" src="${pictureUrl}" alt="${fullName}" title="${fullName}">
                </figure>
                <div class="flex flex-col justify-center items-center w-full mb-2">
                    <h1 class="text-lg font-medium ">${fullName}</h1>
                    <h1 class="text-sm flex items-center pt-3"><img class="bg-[#E8E8D8] w-3 h-2 mr-1" src="${flagUrl}" alt="Country Flag"> | ${position} | ${rating}</h1>
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
    }else{
        alert("Please Fill all field")
    }
});

// add RW
const rwButton = document.getElementById("rw");
rwButton.addEventListener("click", function(){
    const showingform = document.getElementById("sec3");
    showingform.style = "display:block";   
});

// add LW
const lwButton = document.getElementById("lw");
lwButton.addEventListener("click", function(){
    const showingform = document.getElementById("sec3");
    showingform.style = "display:block";   
});

// add ST
const stButton = document.getElementById("st");
stButton.addEventListener("click", function(){
    const showingform = document.getElementById("sec3");
    showingform.style = "display:block";  
});

// add CMR
const cmrButton = document.getElementById("cmr");
cmrButton.addEventListener("click", function(){
    const showingform = document.getElementById("sec3");
    showingform.style = "display:block";
});

// add CML
const cmlButton = document.getElementById("cml");
cmlButton.addEventListener("click", function(){
    const showingform = document.getElementById("sec3");
    showingform.style = "display:block";
});

// add CMT
const cmtButton = document.getElementById("cmt");
cmtButton.addEventListener("click", function(){
    const showingform = document.getElementById("sec3");
    showingform.style = "display:block";
});

// add RB
const rbButton = document.getElementById("rb");
rbButton.addEventListener("click", function(){
    const showingform = document.getElementById("sec3");
    showingform.style = "display:block"; 
});

// add LB
const lbButton = document.getElementById("lb");
lbButton.addEventListener("click", function(){
    const showingform = document.getElementById("sec3");
    showingform.style = "display:block";
});

// add CBR
const cbrButton = document.getElementById("cbr");
cbrButton.addEventListener("click", function(){
    const showingform = document.getElementById("sec3");
    showingform.style = "display:block";
});

// add CBL
const cblButton = document.getElementById("cbl");
cblButton.addEventListener("click", function(){
    const showingform = document.getElementById("sec3");
    showingform.style = "display:block";
});

// add GK
const gkButton = document.getElementById("gk");
gkButton.addEventListener("click", function(){
    const showingform = document.getElementById("sec3");
    showingform.style = "display:block";
    gkButton.style = "display: none;"
    
}); 
// close adding terrain player 
const buttonCloseForm = document.getElementById("close-form-show");
buttonCloseForm.addEventListener("click", function(){
    const formAdding = document.getElementById("sec3");
    formAdding.style = "display:none;"
    gkButton.style = "display: block;"
});

// delete card
function deleteCard(nameNoSpace){ 
    nameNoSpace.remove();
}