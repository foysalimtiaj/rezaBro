const bars=document.getElementById("bars").addEventListener("click", barsClick)
function barsClick() {
    const x=document.getElementById("menu");
    if (x.className==="menu") {
        x.className+=" try"
        
    }
    else{
        x.className="menu"
    }
}