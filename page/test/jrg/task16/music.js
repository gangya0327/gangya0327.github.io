//轮播效果
$(document).ready(function(){    
    $(".carousl .btns li").click(function(){
        var btnNow = $(".carousl .btns .now")
        btnNow.removeClass("now")
        $(this).addClass("now")

        var btnIndex = $(this).index() //0123456
        $(".carousl .imgs img").removeClass("now left right")
        $(".carousl .imgs img").eq(btnIndex).addClass("now")

        var imgLength = $(".carousl .imgs img").length
        var imgLeft = (btnIndex == 0)?(imgLength-1):(btnIndex-1)
        var imgRight = (btnIndex == imgLength-1)?(0):(btnIndex+1)
        $(".carousl .imgs img").eq(imgLeft).addClass("left")
        $(".carousl .imgs img").eq(imgRight).addClass("right")
    })
    $(document).on("click", ".carousl .imgs .left, .carousl .imgs .right" ,function(){
        var goIndex = $(this).index()
        $(".carousl .btns li").eq(goIndex).click();
    })
    function clickRight() {
        $(".carousl .imgs .right").click()
    }
    var carouslMove = setInterval(clickRight, 2000)

    $(".carousl").mouseover(function(){
        clearInterval(carouslMove)
    }).mouseout(function(){
        carouslMove = setInterval(clickRight, 2000)
    })
})