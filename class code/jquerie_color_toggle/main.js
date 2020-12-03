let clickToggle = false;


$('.box').click(function(){

    if(clickToggle) {
    $('.box').css("background", "red")
} else {
    $('.box').css("background", "lightblue")
}

let newBox = `<div class="box"></div>`

$('body').append(newBox);

clickToggle = !clickToggle

})