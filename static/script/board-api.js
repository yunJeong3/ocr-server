const board_number = window.location.pathname.split('/board/')[1];
const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간

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
    let createdAt = new Date(board.created_at);
    createdAt = new Date(createdAt.getTime() + TIME_ZONE).toISOString().replace('T', ' ').slice(0, -5);
    let modifiedAt = new Date(board.modefied_at);
    modifiedAt = new Date(modifiedAt.getTime() + TIME_ZONE).toISOString().replace('T', ' ').slice(0, -5);

    $('#username').text(board.username === null ? 'anonymous' : board.username.username);
    $('#title').val(board.title);
    $('#content').val(board.content);
    // $('#file').attr('src', board.file);
    // $('#created_at').val(board.created_at);


    $('#created_at').val(createdAt);
    $('#modified_at').val(modifiedAt);
    // $('#image_link').val(board.image_link);
    $('#image_link').attr('src', board.image_link);
});

$('#chkBtn').click(function(){
    var gSize = "";
    var checkedItems = $("input[name=lang]:checked");
    var image_link = $('#image_link').attr('src');
    console.log(image_link);

    if(image_link != "") {
        checkedItems.each(function(index){
            gSize += $(this).val();
            if (index < checkedItems.length - 1) {
                gSize += "+";
            }
        });
    
        data = {}
        if(gSize === "") {
            alert("체크박스에 체크해주세요.");
        }else {
            console.log(gSize);
            data['lang'] = gSize;
            data['image_link'] = image_link;

            $('#loading_container').show();
            $.ajax({
                "url" : `/ocr`,
                "method" : "POST",
                "data" : JSON.stringify(data),
                "headers" : {
                    "Content-Type" : "application/json",
                    'X-CSRFToken': csrftoken
                },
            }).done(function(response){
                console.log(response);
                alert('변형 성공');

                if(response.result !== "")
                    $('#text').text(response.result);
                else if(response.result === ""){
                    $('#text').text("텍스트를 인식하지 못했습니다.");
                }

                $('#loading_container').hide();

            }).fail(function(error){
                console.log(error);
                alert('변형 오류..');
                $('#loading_container').hide();
            })
        }

    }else {
        alert("이미지가 존재하지 않습니다. 이미지를 등록해주세요.");
    }
    
})