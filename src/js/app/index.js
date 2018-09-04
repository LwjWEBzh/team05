$(function() {
    $.ajax({
        url: '/api/list',
        dataType: 'json',
        success: function(data) {
            var data = data.data.data;
            console.log(data);
            // $('.text').html(handlebars.compile($('.parent-box').html()(data)));
            var str = '';
            data.map(function(item) {
                str += `<dl>
                            <dt><img src="img/timg.jpg" alt=""></dt>
                            <dd>
                                <p class="title-box">
                                    <span>${item.form}</span>
                                    <span class="title">${item.title}</span>
                                </p>
                                <p class="price-box">
                                    <em><b>${item.current}</b><s>${item.original}</s></em>
                                    <span class="jian">${item.jian}</span>
                                </p>
                                <p class="jinsheng-box"><span></span><span class="jinsheng">${item.jinsheng}</span></p>
                            </dd>
                        </dl>`
            })
            $('.parent-box').html(str);
        },
        error: function(error) {
            console.warn(error);
        }
    })
})