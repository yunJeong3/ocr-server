const code = document.querySelector('form').getAttribute('id');

function update_user() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    data = {}
    
    if (name != ''){
        data['name'] = name;
    }

    if (email != ''){
        data['email'] = email;
    } 

    $.ajax({
        "url" : `/api/v1/users/user/${code}`,
        "method" : "PUT",
        "timeout" : 0,
        "headers" : {
            "Content-Type" : "application/json",
            'X-CSRFToken': csrftoken
        },
        "data" : JSON.stringify(data),

    }).done(function(response){
        console.log(response);
        alert('변경 성공!');
    }).fail(function(error){
        console.log(error);
        alert('변경 오류');
    })

}

function delete_user() {
    var username = document.getElementById('username').value;
    var link = "/";
    data = {}
    data['username'] = username;
    
    $.ajax({
        "url" : `/api/v1/users/user/${code}`,
        "method" : "delete",
        "timeout" : 0,
        "headers" : {
            "Content-Type" : "application/json",
            'X-CSRFToken': csrftoken
        },
        "data" : JSON.stringify(data),

    }).done(function(response){
        console.log(response);
        alert('삭제 성공');
        location.href = link;

    }).fail(function(error){
        console.log(error);
        alert('삭제 실패')
    })
}