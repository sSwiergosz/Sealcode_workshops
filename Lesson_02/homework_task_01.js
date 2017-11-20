$(document).ready(function() {
    $('aside h2').append('<span>!!!</span>');
    
    $('ul li:last').after('<li>Nowy element</li>');
    $('ul li:last').attr('id', 'new-id');

    $('footer').remove();

    $('h1').attr('class', 'header-new');

    $('ul li:last').css({
        'color': 'red',
        'font- family': 'Serif',
        'line-height': '15px'
    });

    $('ul').css({
        'background': 'green'
    });

    $('span').css ({
        'color': 'blue'
    })
});