
var index = 0;

function kiemTra(){
    if (index == 8) {
        document.querySelector('.next').style.display = 'none'
    }
    if (index != 1) {
        document.querySelector('.back').style.display = 'block'
    }  
    
    if (index == 1) {
        document.querySelector('.back').style.display = 'none'
    }
    if (index != 8) {
        document.querySelector('.next').style.display = 'block'
    }

}

function next() {
    index++;
    if (index > 8) {
        index = 1
    }
    document.getElementById('slide-show').src = 'img/' + index + '.jpg'
    mo2();
}

function back() {
    console.log(index);
    index--;
    if (index < 1) {
        index = 8
    }
    document.getElementById('slide-show').src = 'img/' + index + '.jpg'
    mo2();

}

function dong() {
    document.getElementById('slide').style.zIndex = '-1'
    document.querySelector('.main').style.transform = 'scale(0.1)'
}
var t;
function mo(img) {
    document.getElementById('slide-show').src = img.src
    document.getElementById('slide').style.zIndex = '10'
    document.querySelector('.main').style.transform = 'scale(1)'
    index = document.getElementById('slide-show').getAttribute('src').substring(31, 32);
    mo2();
}

function mo1(indexImg){
    var chiso = indexImg.getAttribute('index');
    document.getElementById('slide-show').src = 'img/' + chiso + '.jpg'
    index = chiso
}
function mo2(){
    var divLon = document.getElementsByClassName('chek');
    for(var i = 0;i<8;i++){
        if(divLon[i].getAttribute('index') == index){
            divLon[i].style.background = 'black'
        }else{
            divLon[i].style.background = '#fff'
        }
    }
}