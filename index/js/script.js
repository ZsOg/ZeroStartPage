$(document).ready(function() {
  //判断窗口大小，添加输入框自动完成
  var wid = $("body").width();
  if (wid < 640) {
    //$(".wd").attr('autocomplete', 'off');
  } else {
    $(".wd").focus();
  }
});
