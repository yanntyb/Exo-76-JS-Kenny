document.addEventListener("keypress", function (e){
    console.log(e.key)
    if(e.key === "z"){
        let t = parseInt(document.getElementById('kenny').style.top);
        t = t - 10;
        document.getElementById('kenny').style.top = t + 'px';
    }else if(e.key === "s"){
        let t = parseInt(document.getElementById('kenny').style.top);
        t = t + 10;
        document.getElementById('kenny').style.top = t + 'px';
    }else if(e.key === "q"){
        let l = parseInt(document.getElementById('kenny').style.left);
        l = l - 10;
        document.getElementById('kenny').style.left = l + 'px';
    }else if(e.key === "d"){
        let r = parseInt(document.getElementById('kenny').style.left);
        r = r + 10;
        document.getElementById('kenny').style.left = r + 'px';
    }
    zone();
})



function testHover(playerCoord,zoneCoord){
    let countDead = document.getElementById("nombreMort");
    let box = [zoneCoord[0], zoneCoord[0] + zoneCoord[2],zoneCoord[1],zoneCoord[1] + zoneCoord[2]];
    if((box[0] < playerCoord[0]) && (playerCoord[0] < box[1]) && (box[2] < playerCoord[1]) &&  (playerCoord[1] < box[3])){
        document.getElementById("kenny").style.left = "200px";
        document.getElementById("kenny").style.top = "200px"
        countDead.innerHTML = (parseInt(countDead.innerHTML) + 1).toString();
        console.log(countDead);
    }
}

function zone(){
    let perso = document.getElementById("kenny");
    perso.coord = [
        parseInt(perso.style.left),
        parseInt(perso.style.top)
    ];


    let coordZone = [
        parseInt(document.getElementById("zone").style.left),
        parseInt(document.getElementById("zone").style.top),
        parseInt(document.getElementById("zone").style.width)
    ];
    testHover(perso.coord, coordZone);
}

