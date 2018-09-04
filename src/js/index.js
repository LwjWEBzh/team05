new BScroll("header", {
    scrollX: true,
    click: true
});
$("span").on("click", function() {
    $(this).addClass("active").siblings().removeClass("active");
})