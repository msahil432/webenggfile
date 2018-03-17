function validate(form){
    var name = form.name.value;
    var uname = form.username.value;
    var email = form.email.value;
    var password = form.password.value;

    console.log("Validating :"+name+" - "+uname+" - "+email+" - "+password);
    if(name == "" | uname == ""
        | email == "" | password == ""){
        alert("Complete the Form");
        console.log("Empty Form")
        return;
    }

    var unameRegx = /^[a-zA-Z0-9]+$/;
    var emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}/gm
    if(!uname.match(unameRegx)){
        alert("Enter Valid Username")
        console.log("invalid username")
    }else if(!email.match(emailRegx)){
        alert("Enter Valid Email Address")
        console.log("Invalid email")
    }else if(!password.match(passwordRegx)){
        alert("Create Stronger Password!")
        console.log("Weak password")
    }else{
        var date = new Date();
        var n = date.toDateString();
        var time = date.toLocaleTimeString();

        alert("Signup Successful at "+time+" "+date);
        console.log("Signup success")
    }
}