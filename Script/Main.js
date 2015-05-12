/**
 * Created by omar on 11/05/2015.
 */
parite=0;
parite2=0;
deg=0;


window.onload=function(){
    console.log("démarrage");
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


//**************************************************

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

//***************************************

