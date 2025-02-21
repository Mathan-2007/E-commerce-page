function star(event) {
    var img = event.target; 
    if (img.src == "https://img.icons8.com/?size=256w&id=104&format=png") {
        img.src = "https://img.icons8.com/?size=256w&id=qdQpy48X3Rjv&format=png";
    } else{
        img.src == "https://img.icons8.com/?size=256w&id=104&format=png"
    }
}
function cart(event){
    alert("ADDED SUCCESSFULLY !!")
    var r=event.target.parentElement
    var x=document.createElement("div")
    var a=document.getElementsByTagName("f")
    a.append(x)
}