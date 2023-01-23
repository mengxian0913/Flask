const container = document.querySelector('.container');
const show_upload_container = document.querySelector('.show-upload-container');
const cancel = document.querySelector('#cancel');
const upload_container = document.querySelector('.upload-photo');
const image_input = document.querySelector('#image-file');
const image = document.querySelector('#image');
const submit_photo = document.querySelector('#submit-photo');
const photo_place = document.querySelector('.photo-place');

console.log(photo_place);

let upload_image = "";

image_input.addEventListener('change', function(){  
    console.log(image_input.value);
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        upload_image = reader.result;
        image.src = `${upload_image}`;
    });
    reader.readAsDataURL(this.files[0]);
    submit_photo.addEventListener('click', function(){
        var newimg = document.createElement('img');
        newimg.src = reader.result;
        photo_place.appendChild(newimg);
    });
});


cancel.addEventListener('click', function(){
    console.log('CLICK!');
    console.log(container.style.height);
    container.classList.remove('is-active');
    upload_container.style.display = `none`;
})

show_upload_container.addEventListener('click', function(){
    console.log('CLICK');
    console.log(container.style.height);
    upload_container.style.display = `flex`;
    container.classList.add('is-active');
})


/*pypyphph*/

const http = "https"
img_data += "gggggg";

var imgs=[];

for(let i=0;i<img_data.length-5;i++){
    let tmp = img_data[i] + img_data[i+1] + img_data[i+2] + img_data[i+3] + img_data[i+4];
    if(tmp == http){
        let now="";
        while(img_data[i] != '&' && img_data[i+1] != '#'){
            now = now + img_data[i];
            i++;
        }
        imgs.push(now);
    }
}


console.log(imgs.length);

for(let i=0;i<imgs.length;i++){
    console.log(imgs[i]);
    var img = document.createElement("img");
    img.setAttribute("src", imgs[i]);
    photo_place.appendChild(img);
}