const errorBorder = "2px solid red";
const successBorder = "2px solid green";

let fnameNode, lnameNode, phoneNode, officeNode, emailNode, passNode, cpassNode, dayNode, monthNode, yearNode, maleNode, femaleNode;
let errorNode1, errorNode2, errorNode3, errorNode4, errorNode5, errorNode8, errorNode10, errorNode11, error12;

$(function () {

    fnameNode = $('#fname');
    errorNode1 = $('#error1');

    lnameNode = $('#lname');
    errorNode2 = $('#error2');

    phoneNode = $('#phone');
    errorNode3 = $('#error3');

    officeNode = $('#office');
    errorNode4 = $('#error4');

    emailNode = $('#emailid');
    errorNode5 = $('#error5');

    passNode = $('#pass');
    cpassNode = $('#c_pass');

    errorNode6 = $('#error6');
    errorNode7 = $('#error7');
    errorNode8 = $('#error8');
    errorNode10 = $("#error10");

    dayNode = $('#day')
    monthNode = $('#month');
    yearNode = $("#year");
    maleNode = $("#male");
    femaleNode = $("#female");
    checkbox1 = $("#checkbox_1");
    checkbox2 = $("#checkbox_2");
    checkbox3 = $("#checkbox_3");
    aboutNode = $("#about");

    fnameNode.blur(() => validate1());
    lnameNode.blur(() => validate2());
    phoneNode.blur(() => validate3());
    officeNode.blur(() => validate4());
    emailNode.blur(() => validate5());
    passNode.blur(() => validate6());
    cpassNode.blur(() => validate7());
    dayNode.change(() => birthday());
    monthNode.change(() => birthday());
    yearNode.change(() => birthday());

    maleNode.click(() => radioValidation());
    femaleNode.click(() => radioValidation());

    checkbox1.click(() => checkboxValidation());
    checkbox2.click(() => checkboxValidation());
    checkbox3.click(() => checkboxValidation());

    aboutNode.blur(() => about());

    dayNode.change(() => ageCalculate());
    monthNode.change(() => ageCalculate());
    yearNode.change(() => ageCalculate());









    $('#regForm').click(() => validateForm());
});

function validateForm() {
    let s1 = validate1();
    let s2 = validate2();
    let s3 = validate3();
    let s4 = validate4();
    let s5 = validate5();
    let s6 = validate6();
    let s7 = validate7();
    let s8 = birthday();
    let s9 = radioValidation();
    let s10 = checkboxValidation();

    let s11 = about();

    return (s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9 && s10 && s11);
};

function validate1() {
    console.log("validate1");
    condition = new RegExp("^[a-zA-Z]*$");
    let fname = fnameNode.val();
    errorNode1.html("");
    if (fname === '') {
        errorNode1.html("First name is required");
        fnameNode.css('border', errorBorder);
        return false;
    } else if (condition.test(fname) == false) {
        errorNode1.html("Only alphabets are allowed");
        fnameNode.css('border', errorBorder);
        return false;

    }
    else {
        fnameNode.css('border', successBorder);
        return true;
    }
};

function validate2() {
    console.log("validate2");
    condition = new RegExp("^[a-zA-Z]*$");
    let lname = lnameNode.val();
    errorNode2.html("");
    if (lname === '') {
        errorNode2.html("Last name is required");
        lnameNode.css('border', errorBorder);
        return false;
    } else if (condition.test(lname) == false) {
        errorNode2.html("Only alphabets are allowed");
        lnameNode.css('border', errorBorder);
        return false;

    }
    else {
        lnameNode.css('border', successBorder);
        return true;
    }
};

function validate3() {
    console.log("validate3");
    let phone = phoneNode.val();
    let regExp = new RegExp("^[0-9]{10}$");  //class
    errorNode3.html("");
    //  console.log(regExp.test(phone));   // function
    if (phone === '') {
        errorNode3.html("Phone is required");
        phoneNode.css('border', errorBorder);
        return false;
    }
    else if (regExp.test(phone) == false) {
        errorNode3.html("Please enter valid Phone number");
        phoneNode.css('border', errorBorder);
        return false;
    }
    else {
        phoneNode.css('border', successBorder);
        return true;
    }
};

function validate4() {
    console.log("validate4");
    let office = officeNode.val();
    let regExp = new RegExp("^[0-9]{11}$");
    errorNode4.html("");

    if (office === '') {
        errorNode4.html("Office No is required");
        officeNode.css('border', errorBorder);
        return false;
    }
    else if (regExp.test(office) == false) {
        errorNode4.html("Please enter valid office number");
        officeNode.css('border', errorBorder);
        return false;
    }
    else {
        officeNode.css('border', successBorder);
        return true;
    }
};

function validate5() {
    console.log("validate4");
    let email = emailNode.val();
    errorNode5.html("");
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.{1}[a-zA-Z]{2,4}$/;

    if (email === '') {
        errorNode5.html("Email id is required");
        emailNode.css('border', errorBorder);
        return false;
    }
    else if (emailPattern.test(email) == false) {
        errorNode5.html("Please Provide Valid Email");
        emailNode.css('border', errorBorder);
        return false;
    }

    else {
        emailNode.css('border', successBorder);

        return true;
    }
};

function validate6() {
    let password = passNode.val();
    let regExp = new RegExp("^[a-zA-Z0-9]{6,12}$");
    errorNode6.html("");

    if (password === '') {
        errorNode6.html("Password is required");
        passNode.css('border', errorBorder);
        return false;
    }
    else if (regExp.test(password) == false) {
        errorNode6.html("Password should be between 8 to 12 charachers,  accepts only Alphanumeric characters, No Special characters");
        passNode.css('border', errorBorder);
        return false;
    }
    else {
        passNode.css('border', successBorder);
        return true;
    }
};

function validate7() {
    let password = passNode.val();
    let c_password = cpassNode.val();
    errorNode7.html("");
    if (c_password === '') {
        errorNode7.html("Confirm Password is required");
        cpassNode.css('border', errorBorder);
        return false;
    }
    else if (c_password != password) {
        errorNode7.html("Both passwords should match");
        cpassNode.css('border', errorBorder);
        return false;
    }
    else {
        cpassNode.css('border', successBorder);
        return true;
    }
}

function birthday() {
    let day = $('#day').val();
    let month = $('#month').val();
    let year = $('#year').val()
    if (day == 'day' || month == 'month' || year == "year") {

        errorNode8.html("Please Select valid DOB");
    }
    else if (day != 'day' || month != 'month') {
        errorNode8.html("");

    }
};

// Add years to birth date
let years = $("#year")
let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

for (yr = 1900; yr < year + 1; yr++) {
    $(years).append("<option value=" + yr + ">" + yr + "</option>")

}

function radioValidation() {
    console.log("helll");
    if ((!($('#male').prop('checked')) && (!($('#female').prop('checked'))))) {
        console.log("helll4");
        errorNode10.html("Select a Gender");
    }


    else {
        errorNode10.html("");

    }
}

function checkboxValidation() {
    errorNode11 = $("#error11");
    console.log("helll2");
    var check1 = $("#checkbox_1").prop('checked');
    console.log(check1);
    var check2 = $("#checkbox_2").prop('checked');
    var check3 = $("#checkbox_3").prop('checked');
    if ((check1 == false) && (check2 == false) && (check3 == false)) {
        errorNode11.html("Select a checkBox");
        return false;

    }
    else {
        errorNode11.html("");
        return true

    }
};


function about() {
    errorNode12 = $('#error12');
    condition = new RegExp("^[a-zA-Z]*$");
    console.log("helll00");
    aboutNode = $('#about').val();
    if (aboutNode == '') {
        console.log("helll001");
        errorNode12.html("Please write something about you");
        return false;

    } else if (condition.test(aboutNode) == false) {
        errorNode12.html("Only alphabets are allowed");
        $("about").css('border', errorBorder);
        return false;

    }


    else {
        console.log("helll003");
        $('#about').css('border', successBorder);
        errorNode12.html("");
        return true;
    }

}


function ageCalculate() {
    console.log("age");
    let day = $("#day").val();
    let month = $("#month").val()
    let year = $("#year").val()

    // document.getElementById("29").style.display = "block";
    // document.getElementById("30").style.display = "block";
    // document.getElementById("31").style.display = "block";
    $("#29").css("display", "block");
    $("#30").css("display", "block");
    $("#31").css("display", "block");


    if (month == "april" || month == "june" || month == "sept" || month == "nov") {
        document.getElementById("31").style.display = "none";
    };


    if (month == "feb" && (year % 4 == 0)) {
        $("#30").css("display", "none");
        $("#31").css("display", "none");
    } else if (month == "feb" && (year % 4 != 0)) {
        $("#29").css("display", "none");
        $("#30").css("display", "none");
        $("#31").css("display", "none");
    };


    if (day != "day" && month != "month" && year != "year") {
        var stringDate = month + "/" + day + "/" + year
        var timestamp = Date.parse(stringDate);
        var dateObject = new Date(timestamp);
        var currentYear = new Date().getFullYear();
        var birthYear = dateObject.getFullYear();
        var today = new Date();
        // getTime() returns the number of milliseconds since date
        var monthDiff = Math.abs(dateObject.getTime() - today.getTime());
        age = (monthDiff / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
        console.log(age)


        age = age + " years";
        $("#age").val(age);
       
        return true;

    }

}








