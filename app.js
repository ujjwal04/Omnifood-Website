var real_file_hero = document.getElementById("real_file_hero");
var real_file_slide = document.getElementById("real-file-slide");
var id=[0,0,0,1];


function custom_Button_slide(el) {
    id = el.id.split("-");
    console.log(id);
    document.getElementById("real-file-slide-"+id[3]).click();
}

function open_File(el) {
    console.log(el.id);
    var id = el.id.split("-");
    const file = el.files[0];
    if(file) {
        const reader = new FileReader();
        reader.addEventListener('load',function() {
            console.log(id);
            document.getElementById("img-"+id[3]).src = `${this.result}`;
        });
        reader.readAsDataURL(file);
        document.getElementById("uploader-"+id[3]).style.display="none";
        document.getElementById("meals-"+id[3]).style.backgroundColor = "black";
        document.getElementById("img-"+id[3]).classList.remove("low-opcaity");
        document.getElementById("img-"+id[3]).classList.add("img_hover");
    }
}

const editButton = document.getElementById("edit");
editButton.addEventListener('click',() => {
    document.getElementById("grid-photos").scrollIntoView();
    for(var i=1;i<=8;i++) {
        document.getElementById("uploader-"+i).style.display="block";
        document.getElementById("meals-"+i).style.backgroundColor = "white";
        document.getElementById("img-"+i).classList.add("low-opacity");
        document.getElementById("img-"+i).classList.remove("img_hover");
    }
})





