const playerArray = [];

function display(select){
    const playerList = document.getElementById('Player-List');
    playerList.innerHTML = "";
    for(let i = 0; i < playerArray.length; i++){
        const name = playerArray[i].playerName;
        
        const tr = document.createElement('tr');
        
        tr.innerHTML = ` 
        <th>${i + 1}</th>
        <td>${name}</td> `;

        playerList.appendChild(tr);
}

if(playerArray.length === 6){
    alert('there is no more space to put Player');
    return;
}
   
}

function selectPlayer (element){
    const selectPlayerName = element.parentNode.children[0].innerText;
  
    const player ={
        playerName : selectPlayerName,
    }
    
    playerArray.push(player);
    document.getElementById('total-player').innerText = playerArray.length;

    display(playerArray);
    
}


