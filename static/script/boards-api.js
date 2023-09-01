$.ajax({
    "url" : "api/v1/boards",
    "method" : "GET",
    "timeout" : 0,
}).done(function(list){
    list.forEach(board => {
        image_url = 'media/noimage.jpeg';
        image_url = board.loaded_file === null ? image_url : board.loaded_file;

        $('#container').append(`
        <div class="board">
            <a href="/board/${board.post_no}">
                <ul>
                    <li><h4 id="title">${board.title}</li>
                    <li><p id="name">${board.username.username}</li>
                    <li>
                        <p id="content">${board.content}
                    </li>
                    <li><input type="datetime" value="${board.modefied_at}" readonly></li>
                    <li><p id="file_name">${board.file}</li>
                </ul>
            </a>
        </div>
        `)
    })
});

// 버튼 클릭 시 '게시글 작성하기' 페이지로 이동
function writeBtn(){
    location.href = "/board/write";
}