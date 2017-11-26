$(document).ready(function() {

    function add_new_task() {
        let $task = $('#new-task-input').val();
        let $new_task = $(`<li><input type="checkbox"><p class="task-list__paragraph"> ${$task} </p><button type="submit" class="delete-task-btn"> Delte task</button></li>`);
        $('ul:last').append($new_task);
    }

    function actual_date() {
        let d = new Date();
        let c_day = d.getDate();
        let c_month = d.getMonth() + 1;
        let c_year = d.getFullYear();

        let c_date = `Dzisiejsza data: ${c_day}.${c_month}.${c_year}`;
        $('time').prepend(c_date);
    }

    actual_date();

    $('#add-task-btn').on('click', function() {
        if($('#new-task-input').val() != '') {
            add_new_task();
        }
    });

    $(document).keypress(function(e) {
        if(e.which == 13) {
            if($('#new-task-input').val() != '') {
                add_new_task();
            }
        }
    });

    $('ul').on('click', '.delete-task-btn',function(e) {
        e.preventDefault();
        $(this).parent().remove();
    });

    $('ul').on('click', 'input[type="checkbox"]',function(e) {
        let $task_index = $('input[type="checkbox"]').index(this);
        console.log($task_index);
        e.stopPropagation();

        if($('.task-list__paragraph').eq($task_index).hasClass('checked')) {
            $('.task-list__paragraph').eq($task_index).css('text-decoration', 'none');
            $('.task-list__paragraph').eq($task_index).removeClass('checked');
        }
        else {
            $('.task-list__paragraph').eq($task_index).addClass('checked');
            $('.task-list__paragraph').eq($task_index).css('text-decoration', 'line-through');
        }
    });
});