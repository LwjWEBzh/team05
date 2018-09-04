$('#dylist li').on('click', function() {
    $(this).addClass('bg').siblings().removeClass('bg')
})