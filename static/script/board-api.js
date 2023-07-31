const board_number = window.location.pathname.split('/board/')[1];
function update() {
    $.ajax({
        "url" : `/api/v1/boards/board/${board_number}`,
        "method" : "GET",
        "timeout" : 0,
    }).done(function (board){
        console.log(board);
        $('#')
    })
}

$.ajax({
    "url" : `/api/v1/boards/board/${board_number}`,
    "method" : "GET",
    "timeout" : 0,
}).done(function (board){
    console.log(board);
    $('#username').text(board.username === null ? 'anonymous' : board.username.username);
    $('#title').val(board.title);
    $('#content').val(board.content);
    $('#file').attr('src', board.file);
    $('#created_at').val(board.created_at);
    $('#modefied_at').val(board.modefied_at);
});