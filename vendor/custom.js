$('.button').click(function () {
    var $add = $(".show-block-rent");

    if ($add.hasClass('hidden-block')) {
        $add.removeClass('hidden-block');
    }
    else
        $add.addClass('hidden-block');
});