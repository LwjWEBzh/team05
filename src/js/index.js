new BScroll("header", {
    scrollX: true,
    click: true
});
$("span").on("click", function() {
    $(this).addClass("active").siblings().removeClass("active");
})
var mySwiper = new Swiper('.banner', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    pagination: '.swiper-pagination',
})