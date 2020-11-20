/*Sticky Navigation*/

let navbar = $(".navbar");

$(window).scroll(function(){
    let oTop = $(".section-2").offset().top-window.innerHeight;
    if($(window).scrollTop()>oTop){
        navbar.addClass("sticky");
    }else{
        navbar.removeClass("sticky");
    }
});

/*Counter Animation*/
let nCount = function(selector){
    $(selector).each(function(){
        $(this).animate({
            Counter: $(this).text()
        },{
            duration: 4000,
            easing: "swing",
            step:function(value){
                $(this).text(Math.ceil(value));
            }
        });
    });
};

/*Here it is handling the scroll event */
let a = 0;
$(window).scroll(function(){
    /*Here it is getting exact section location to trigger the scroll event*/
    let oTop = $(".numbers").offset().top-window.innerHeight;
     if(a==0 && $(window).scrollTop()>=oTop){
         a++;
         /*here it is calling nCount method*/
         nCount(".rect>h1");
     }
});
