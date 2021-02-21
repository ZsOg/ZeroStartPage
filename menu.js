$(document).ready(function() {
    //判断窗口大小，添加输入框自动完成
    var wid = $("body").width();
    if (wid < 640) {
        //$(".wd").attr('autocomplete', 'off');
    } else {
        $(".wd").focus();
    }
    //菜单点击
    $("#menuBtn").click(function(event) {
        $(this).toggleClass('on');
        $(".list").toggleClass('closed');
    });
    $("#content").click(function(event) {
        $(".on").removeClass('on');
        $(".list").addClass('closed');
    });
});
var list = document.getElementById("list")
var showHide = document.getElementById("showHide")
showHide.onclick = function() {
    if (list.offsetLeft == 0) {
        list.style['margin-left'] = -300 + "px"
    } else {
        list.style['margin-left'] = 0 + "px"
    }
}
function showHide() {
    if (list.offsetLeft == 1066) {
        list.setAttribute("class", "closed")
    } else {
        list.setAttribute("class", "opened")
        console.log("not in")
    }
}
