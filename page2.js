var bgText = document.getElementById("bgText");
var prevDiv = document.getElementById("preview");
var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var picChooser = document.getElementById("picChooser");
var numUse = 0;

bgText.addEventListener("keyup", function(ev){
    //console.log(ev.keyCode);
    if (ev.keyCode == 13) {
        //do something to background
        console.log(c1.checked, c2.checked, c3.checked)
        if (c1.checked) {
            //document.body.style.backgroundColor = bgText.value;
            if (bgText.value == "husky") {
                document.body.style.backgroundImage = "url(imgs/1.jpg)";
            } else if (bgText.value == "blueheeler") {
                document.body.style.backgroundImage = "url(imgs/2.jpg)";
            } else if (bgText.value == "bordercollie") {
                document.body.style.backgroundImage = "url(imgs/3.jpg)";
            } else {
                document.body.style.backgroundColor = bgText.value;
            }
            //document.body.style.backgroundImage = "url(" + bgText.value + ")";
        } else if (c2.checked) {
            //prevDiv.style.backgroundColor = bgText.value;
            if (bgText.value == "husky") {
                prevDiv.style.backgroundImage = "url(imgs/1.jpg)";
            } else if (bgText.value == "blueheeler") {
                prevDiv.style.backgroundImage = "url(imgs/2.jpg)";
            } else if (bgText.value == "bordercollie") {
                prevDiv.style.backgroundImage = "url(imgs/3.jpg)";
            } else {
                prevDiv.style.backgroundColor = bgText.value;
            }
            //prevDiv.style.backgroundImage = "url(" + bgText.value + ")";
        } else if (c3.checked) {
            //menu.style.backgroundColor = bgText.value;
            if (bgText.value == "husky") {
                menu.style.backgroundImage = "url(imgs/1.jpg)";
            } else if (bgText.value == "blueheeler") {
                menu.style.backgroundImage = "url(imgs/2.jpg)";
            } else if (bgText.value == "bordercollie") {
                menu.style.backgroundImage = "url(imgs/3.jpg)";
            } else {
                menu.style.backgroundColor = bgText.value;
            }
            //menu.style.backgroundImage = "url(" + bgText.value + ")";
        } else {
            alert("Choose an option!");
        }
        //prevDiv.style.backgroundColor = bgText.value;
        bgText.value = "";
        
        numUse++;
        console.log(numUse);
        if (numUse > 5) {
            //alert("You've reached the limit! Please pay to use more!");
            document.getElementById("display").innerHTML = "You've reached the limit! Please pay to use more!";
        }
    }
});

picChooser.addEventListener("change", function(){
    var picNum = parseInt(picChooser.value);
    
    if (picNum > 3) {
        picChooser.value = 1;
    }
    if (picNum < 1) {
        picChooser.value = 3;
    }
    
    if (c1.checked) {
        document.body.style.backgroundImage = "url(imgs/" + picChooser.value + ".jpg)";
    } else if (c2.checked) {
        prevDiv.style.backgroundImage = "url(imgs/" + picChooser.value + ".jpg)";
    } else if (c3.checked) {
        menu.style.backgroundImage = "url(imgs/" + picChooser.value + ".jpg)";
    } else {
        alert("Choose an option!");
        picChooser.value = "";
    }
});