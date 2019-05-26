function alerts(p,text){
    //wrapper
    var b = document.createElement("div");
    b.style.padding = "20px";
    b.style.color = "#FFFFFF";
    b.style.position = "fixed";
    b.style.top = "0";
    b.style.left = "0";
    b.style.width = "100%";

    switch(p.toLowerCase()){
        case "d":
            b.style.backgroundColor = "#F44336";    
        break;
        case "s":
            b.style.backgroundColor = "#4CAF50";
        break;
        case "i":
            b.style.backgroundColor = "#2196F3";
        break;
        case "w":
            b.style.backgroundColor = "#FF9800";
        break;
        default:
            b.style.backgroundColor = "#2196F3";
            p = "i"
    }
   
    //text
    var text = document.createElement("span");
    text.color = "#FFFFFF";
    text.innerHTML = text;
    
    //exit button
    var x = document.createElement("span");
    x.style.marginLeft = "15px";
    x.style.color = "#FFFFFF";
    x.style.fontWeight = "bold";
    x.style.float = "right";
    x.style.lineHeight = "20px";
    x.style.cursor = "pointer";
    x.setAttribute("onclick","this.parent.style.display = 'none'");
    x.innerText = "&times;";

    document.body.appendChild(b);
    b.appendChild(text);
    b.appendChild(x);

}

console.log("%calert loaded!","color:lime");