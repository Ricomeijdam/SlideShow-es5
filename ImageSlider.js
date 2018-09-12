var index = 1;
var jpg;
var time = 3000;
var img;

function plusIndex(click){
    index = index + click;
    showImage(index);
    setTimeout("plusIndex(1)", time);
}

function showImage(click){
    jpg = document.getElementsByClassName("slides");
    if(click > jpg.length){
        index = 1
    }
    if(click < 1){
        index = jpg.length
    }
    for(img = 0; img < jpg.length; img++)
        {
            jpg[img].style.display = "none";
        }
        jpg[index-1].style.display = "block";
}






    window.onload = plusIndex(1);

