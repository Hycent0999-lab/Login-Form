function validate() {

    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if(username== 'Hycent' && password== '0999') {
        alert('login successful');
        return false;
    }
    else {
        alert('login failed');
    }
}