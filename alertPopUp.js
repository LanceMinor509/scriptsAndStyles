function alerts(p,text){
    var msg = "";
    //wrapper
    var b = document.createElement("div");
    b.style.padding = "20px";
    b.style.color = "#FFFFFF";
    b.style.position = "fixed";
    b.style.top = "0";
    b.style.left = "0";
    b.style.width = "100%";
    b.style.zIndex = "9999999";

    switch(p.toLowerCase()){
        case "d":
            b.style.backgroundColor = "#F44336";  
            msg = "Danger!";  
        break;
        case "s":
            b.style.backgroundColor = "#4CAF50";
            msg = "Success!";
        break;
        case "i":
            b.style.backgroundColor = "#2196F3";
            msg = "Info!";
        break;
        case "w":
            b.style.backgroundColor = "#FF9800";
            msg = "Warning!";
        break;
        default:
            b.style.backgaroundColor = "#2196F3";
            p = "i"
            msg = "Info!";
    }
   
    //text
    var textE = document.createElement("span");
    textE.color = "#FFFFFF";
    textE.innerHTML = "<span style='font-weight: bold;margin-right: 10px'>" + msg + "</span>" + text;
    
    //exit button
    var x = document.createElement("span");
    x.style.marginLeft = "15px";
    x.style.color = "#FFFFFF";
    x.style.fontWeight = "bold";
    x.style.float = "right";
    x.style.lineHeight = "20px";
    x.style.cursor = "pointer";
    x.style.position = "fixed";
    x.style.right = "30px";
    x.onclick = function(){
        b.style.display = "none";
    }
    x.innerHTML = "&times;";

    document.body.appendChild(b);
    b.appendChild(textE);
    b.appendChild(x);

}