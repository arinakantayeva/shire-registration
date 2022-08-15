function modal(selectorButton, selectorContent) {
    let body = $('body');
    let content = $(selectorContent);
    let button = $(selectorButton);

    body.prepend(
        '<div class="modal" data-modal="'
        + selectorButton
        +'">'
        +'<div class="modal__content">'
        + '<a href="#" class="modal__close">&times</a>'
        +'</div>'
        +'</div>'
    );

    let modal = $(
        '.modal[data-modal="'
        + selectorButton
        + '"]'
    );

    let close = modal.find('.modal__close');


    modal
        .find('.modal__content')
        .append(content);

    button.on('click', function (e) {
        e.preventDefault();
        modal.addClass('modal_active');
    });

    close.on('click',function (e) {
        e.preventDefault();
        modal.removeClass('modal_active');
    });
}

modal('#button', '#content');

$('body').on('click', '.password-control', function(){
    if ($('#password-input').attr('type') == 'password'){
        $(this).addClass('view');
        $('#password-input').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $('#password-input').attr('type', 'password');
    }
    return false;
});

const password = document.getElementById('password');
const toggle = document.getElementById('toggle');

function showHide(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        toggle.classList.add('hide')
    }
    else {
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide');
    }
}