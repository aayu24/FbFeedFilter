<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url: "localhost8000/login", success: function(result){
            $("#login_btn").console.log('logging in');
        }});
    });
});
</script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url: "localhost8000/register", success: function(result){
            $("#register_btn").console.log('please wait');
        }});
    });
});
</script>

</head>
<body>

<button id='login_btn'>Login</button>

<button id='register_btn'>Register</button>

</body>
</html>
