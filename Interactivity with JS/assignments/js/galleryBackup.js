function upDate(previewPic){
        var change = document.getElementById("image");
        change.innerHTML = previewPic.alt;
        // object.style.backgrounImage = "url('imageURL')";
        // string concatenate using +
        change.style.backgroundImage = "url('" + previewPic.src + "')";
     }  
    
function unDo(){
        document.getElementById("image").innerHTML = "Hover over an image below to display here.";
        // object.style.background="#f3f3f3 url('img_tree.png') no-repeat right top";
        // object.style.background="color image repeat attachment position size origin clip|initial|inherit";
        document.getElementById("image").style.background = "#8e68ff url('')";
     }