$(function () {
    $('#form_id').on('keyup keypress', function (e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });
    //var error_username = false;
    //var error_email = false;
    //var error_password = false;
    //var error_re_password = false;
    //var error_subject = false;
    //var error_textarea = false;



    var inputs = $(':input');
    var input_length = $('input').length;
    $('input[type="text"]').on("keyup", check_username);
    $("#email").on("keyup", check_email);
    $('#password').keyup(function () {
        (checkStrength($('#password').val()))
    });
    $("#re_password").on("keyup", check_retype_password);
    $("#textarea_id").on("keyup", check_username);

    inputs.each(function () {
        $(this).on("keypress", enterpress);
    });

    function enterpress(event) {
        console.log(event.which);
        if (event.which == 13) {
            var nextinput = $(this).parent().next().find(':input');
            var nextspan = $(this).parent().next().find('span');
            console.log("next parent node", nextinput);
            console.log("next parent node", $(this).parent().next().find('span'));
            nextinput.focus();

        }
        else return;
    }

    function check_username() {
        var span1 = $(this).next();
        var divp = $(this).parent();
        divp.removeClass(" has-error");
        console.log(" parendiv");
        span1.html('');
        var re =/^[A - Z][a - zA - Z]{4,}(?: [A - Z][a - zA - Z] *){0,2}$/;
        if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
            span1.hide();
        }
        else {
            divp.addClass(' has-error');



            span1.html('Enter Correct Name');
            span1.show();
            error_username = true;

        }
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function check_email() {
        var span1 = $(this).next();
        var divp = $(this).parent();
        divp.removeClass(" has-error");
        span1.html('');
        var email = $("#email").val();
        if (validateEmail(email)) {
            span1.hide();
        } else {
            span1.html(email + " is  not  a  email address valid :");
            span1.show();
            divp.addClass(' has-error');

           error_email = true;
        }
        return false;
    }


    //$('#password').keyup(function () {
    //    var re = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/);
    //    $(this).css('border', re.test(this.value) ? '5px solid green' : '5px solid red');
    //});

    //function check_password() {
    //    error_re_password = true;

    //}

    function checkStrength(password) {


        var divp = $("input[name='password']").parent();
        //divp.removeClass(' has-success');

      
        var strength = 0
        $('#line1').hide();
        $('#line2').hide();
        $('#line3').hide();
        $('#p1').show();
        $('#p2').show();

        if (password.length == 0) {
            $('#line1').hide();
            $('#line2').hide();
            $('#line3').hide();

        }
        else if (password.length < 5 && strength==0) {
            $('#line1').show();
            divp.addClass(" has-error");

            $('.linewrapper').css("margin", "10px 0px 15px 0px");

        }
        else if (password.length >= 5|| password.length<7) {
            $('#line1').show();
            $('#line2').show();
            divp.addClass(" has-error");

            //return 'Good'
        }
        if (password.length > 7) strength += 1
        // If password contains both lower and uppercase characters, increase strength value.
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
            strength += 1
            $('#p1').hide();
        }
            // If it has numbers and characters, increase strength value.
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
        // If it has one special character, increase strength value.
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
            strength += 1
            $('#p2').hide();

        }
            // If it has two special characters, increase strength value.
        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
        // Calculated strength value, we can return messages
        // If value is less than 2
        if (strength >= 3) {
            $('#line1').show();
            $('#line2').show();
            $('#line3').show();
            divp.removeClass(' has-error');

        }

    }
    function check_retype_password() {

        var span1 = $(this).next();
        var divp = $(this).parent();
        divp.removeClass('has-error');

        var password = $('#password').val();
        var re_password = $('#re_password').val();
        if (password != re_password) {
            span1.html("password dot match");
            divp.addClass('has-error');
            //.css('color', 'red');
            span1.show();
            error_re_password = true;
        }
        else {
            span1.hide();
        }

    }

    //this part not working all other is good
    //$("#validate1").bind("click", validate_form);
    $('#form_id').submit(function (event) {

        error_username = true;
        //error_re_password = true;
        //error_password = true;
        //error_email = true;
        check_username();
        //check_password();
        //check_retype_password();
        //check_email();
        //error_textarea = true;

        //if (error_email == false && error_password == false && error_re_password == false &&
        if (error_username == false) {
            //&& error_textarea == false) {
            return true;


        }
        else {
            return false;

        }

    });

});