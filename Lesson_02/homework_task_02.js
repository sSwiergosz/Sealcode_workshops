$(document).ready(function() {

    function add_new_task() {
        let $task = $('#new-task-input').val();
        let $new_task = $(`<li><input type="checkbox"> ${$task} <button type="submit" class="delete-task-btn"> Delte task</button></li>`);
        $('li:last').after($new_task);
    }

    function remove_task($index) {
        $('li').eq($index).remove();
    }

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

    $('.delete-task-btn').on('click', function() {
        remove_task($(this).closest('li').index());
    });
});