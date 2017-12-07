$(document).ready(function() {

    function add_new_task() {
        let $task = $('#new-task-input').val();
        let $new_task = $(`<li><input type="checkbox"><p class="task-list__paragraph"> ${$task} </p>
                            <button type="submit" class="delete-task-btn"> Delte task</button>
                            <button type="submit" class="send-task-btn">Send task</button></li>`);
        $('ul:last').append($new_task);
    }

    function actual_date() {
        let d = new Date();
        let c_day = d.getDate();
        let c_month = d.getMonth() + 1;
        let c_year = d.getFullYear();

        let c_date = `Dzisiejsza data: ${c_day}.${c_month}.${c_year}`;
        $('time').replaceWith(`<time>${c_date}</time`);
    }

    actual_date();

    $('#add-task-btn').on('click', function() {
        if($('#new-task-input').val() != '') {
            add_new_task();
        }
        actual_date();
    });

    $(document).keypress(function(e) {
        if(e.which == 13) {
            if($('#new-task-input').val() != '') {
                add_new_task();
            }
        }
        actual_date();
    });

    $('ul').on('click', '.delete-task-btn',function(e) {
        e.preventDefault();
        $(this).parent().remove();
        actual_date();
    });

    $('ul').on('click', 'input[type="checkbox"]',function(e) {
        let $task_index = $('input[type="checkbox"]').index(this);

        e.stopPropagation();

        if($('.task-list__paragraph').eq($task_index).hasClass('checked')) {
            $('.task-list__paragraph').eq($task_index).css('text-decoration', 'none');
            $('.task-list__paragraph').eq($task_index).removeClass('checked');
        }
        else {
            $('.task-list__paragraph').eq($task_index).addClass('checked');
            $('.task-list__paragraph').eq($task_index).css('text-decoration', 'line-through');
        }
        actual_date();
    });

    $('#fetch-data-btn').on('click', function(e) {
        $.ajax({
            type: 'GET',
            url: 'http://sealcode.org:8082/api/v1/resources/task',
            timeout: 2000,
            dataType: 'json',
            beforeSend: function() {
                $('ul:last').append('<li id="load">Loading</li>');
            },
            complete: function() {
                $('#load').remove();
            },
            success: function(data) {

                for(let i in data) {
                    $ajax_task = data[i].body.title;
                    let $new_task = $(`<li><input type="checkbox"><p class="task-list__paragraph"> 
                                        ${$ajax_task} </p><button type="submit" class="delete-task-btn"> 
                                        Delte task</button><button type="submit" class="send-task-btn">
                                        Send task</button></li>`);
                    $('ul:last').append($new_task);

                    if(data[i].body.is_done) {
                        $('ul li:last').find('.task-list__paragraph').css('text-decoration', 'line-through').addClass('checked');
                        $('ul li:last').find('input[type="checkbox"]').prop('checked', true);
                    }
                    
                }
                
            },
            fail: function() {
                alert("Error. Try again");
            }
        });
    });

    $('ul').on('click', '.send-task-btn',function(e) {
        e.preventDefault();
        let $done = false;
        let $task_index = $('.send-task-btn').index(this);

        if($('.task-list__paragraph').eq($task_index).hasClass('checked')) {
            $done = true;
        }

        let $object_data = {
            title: $('.task-list__paragraph').eq($task_index).text(),
            is_done: $done
        };

        $.ajax({
            type: 'POST',
            url: 'http://sealcode.org:8082/api/v1/resources/task',
            timeout: 2000,
            dataType: 'json',
            data: $object_data,
            success: function(data) {
                alert('Success');
            },
            fail: function() {
                alert("Error. Try again");
            }
        })

    });
});