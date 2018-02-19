var disp = document.getElementById("display");
var bgInp = document.getElementById("bgText");
var menu = document.getElementById("menu");

var ir = document.getElementById("red");
var ig = document.getElementById("green");
var ib = document.getElementById("blue");

var rr = document.getElementById("Rred");
var rg = document.getElementById("Rgreen");
var rb = document.getElementById("Rblue");

var colorInp = document.getElementById("colorInp");

var curElement = disp;

document.getElementById("change").addEventListener("click", function(){
    console.log(bgInp.value);
    //bgInp.value -> return "blue"
    
    curElement.style.backgroundColor = bgInp.value;
    bgInp.value = "";
});

menu.addEventListener("click", function(){
    //console.log(curElement);
    curElement = menu;
    //console.log(curElement);
});

disp.addEventListener("click", function(){
    curElement = disp;
});

bgInp.addEventListener("click", function(){
    curElement = bgInp;
});

ir.addEventListener("change", function(){
    curElement.style.backgroundColor = "rgb(" + ir.value + ", " + ig.value + ", " + ib.value + ")";
    rr.value = ir.value;
});

ig.addEventListener("change", function(){
    curElement.style.backgroundColor = "rgb(" + ir.value + ", " + ig.value + ", " + ib.value + ")";
    rg.value = ig.value;
});

ib.addEventListener("change", function(){
    curElement.style.backgroundColor = "rgb(" + ir.value + ", " + ig.value + ", " + ib.value + ")";
    rb.value = ib.value;
});

rr.addEventListener("change", function(){
    curElement.style.backgroundColor = "rgb(" + rr.value + ", " + rg.value + ", " + rb.value + ")";
    ir.value = rr.value;
});

rg.addEventListener("change", function(){
    curElement.style.backgroundColor = "rgb(" + rr.value + ", " + rg.value + ", " + rb.value + ")";
    ig.value = rg.value;
});

rb.addEventListener("change", function(){
    curElement.style.backgroundColor = "rgb(" + rr.value + ", " + rg.value + ", " + rb.value + ")";
    ib.value = rb.value;
});

colorInp.addEventListener("change", function(){
    curElement.style.backgroundColor = colorInp.value;
});
