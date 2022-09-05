let divWidth = $("#boxColors").innerWidth();

$("#options").css('left' , `-${divWidth}`);

window.onscroll = () => {
    if (window.scrollY > 0) {
        document.querySelector('nav').classList.add('active');
    } else {
        document.querySelector('nav').classList.remove('active');
    }
    if(window.scrollY > 150){
        document.querySelector('.home .icons').style.opacity = '1'
    } else{
        document.querySelector('.home .icons').style.opacity = '0'
    }
}

$(document).ready(function () {
    $("#loading .spinner").fadeOut(3000, function(){
     $("#loading").fadeOut(1000, function(){
         $("#loading").remove();
     })
    }); 
});

let itemColor = $(".item-color")

$(itemColor).eq(0).css("backgroundColor", 'tomato');
$(itemColor).eq(1).css("backgroundColor", 'orange');
$(itemColor).eq(2).css("backgroundColor", 'rgb(15, 111, 156)');
$(itemColor).eq(3).css("backgroundColor", '#888');
$(itemColor).eq(4).css("backgroundColor", '#0fc');
$(itemColor).eq(5).css("backgroundColor", '#111');
$(itemColor).eq(6).css("backgroundColor", '#666');
$(itemColor).eq(7).css("backgroundColor", '#fff');
$(itemColor).eq(8).css("backgroundColor", '#ccc');
$(itemColor).eq(9).css("backgroundColor", '#00f');

$(itemColor).click(function (e) { 
    let bgColors =  $(e.target).css("backgroundColor");
    $(".change").css("color", bgColors);
    
});

$("#options i").click(function(){
    if( $("#options").css('left') == "0px" ){

        $("#options").animate({left: `-${divWidth}`}, 1000)
    }
    else{
        $("#options").animate({left: `0px`}, 1000)
    }
})