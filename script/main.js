/**
 * Created by omar on 11/05/2015.
 */

var parite=0;
var parite2=0;
var deg=0;


window.onload=function(){
    console.log("d�marrage");
    console.log(window.pageYOffset);


};

function animMenu() {
    console.log("marche");
    a = document.getElementById("menuicon");
    if (parite % 2 == 0) {
        z = setInterval(function () {
            a.style.transform = 'rotate(' + deg + 'deg)';
            deg = deg + 1;
            console.log(deg);
            if (deg == 90) {

                clearInterval(z);

            }
        }, 2);
        parite++;
        $('.menu').slideDown();
    }
    else {
        z = setInterval(function () {
            a.style.transform = 'rotate(' + deg + 'deg)';
            deg = deg - 1;
            console.log(deg);
            if (deg == 0) {
                clearInterval(z);
            }
        }, 2);
        parite++;
        $('.menu').slideUp();
    }

}


//*********************Fonction Afficher/Cacher SearchBar*****************************

$("#span2").click(function () {
    if (parite2 % 2 == 0) {
        $(".searchbar").slideDown();
        parite2++;
    }
    else {
        $(".searchbar").slideUp();
        parite2++;
    }

});

//**************Fonction Scroller *************************

$('a[href^="#slide1"]').click(function(){
    console.log("marche");
    $('#i_scrolldown').css('transform', 'rotate(180deg)');
    var the_id = $(this).attr("href");
        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 'slow');
    return false;
});













