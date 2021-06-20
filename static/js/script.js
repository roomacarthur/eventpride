// Initialize Materialize with JQuery
$(document).ready(function() {
    $('.sidenav').sidenav({
        edge: "right"
    });
});

// Show/hide content on wikipride.html by clicking on buttons
$('button').on('click', function() {
    if ($(this).is('#history')) {
        $('#history-content').slideToggle().siblings('div').slideUp();
    } else if ($(this).is('#importance')) {
        $('#importance-content').slideToggle().siblings('div').slideUp();
    } else if ($(this).is('#information')) {
        $('#information-content').slideToggle().siblings('div').slideUp();
    }
});

// The modals for the flags on wikipride.html

// declare each modal
let modal1 = document.getElementById("flag1Modal");
let modal2 = document.getElementById("flag2Modal");
let modal3 = document.getElementById("flag3Modal");
let modal4 = document.getElementById("flag4Modal");
let modal5 = document.getElementById("flag5Modal");
let modal6 = document.getElementById("flag6Modal");
let modal7 = document.getElementById("flag7Modal");
let modal8 = document.getElementById("flag8Modal");
let modal9 = document.getElementById("flag9Modal");
let modal10 = document.getElementById("flag10Modal");
let modal11 = document.getElementById("flag11Modal");
let modal12 = document.getElementById("flag12Modal");

// Declare the button for each modal
let btn1 = document.getElementsByClassName("flag-button")[0];
let btn2 = document.getElementsByClassName("flag-button")[1];
let btn3 = document.getElementsByClassName("flag-button")[2];
let btn4 = document.getElementsByClassName("flag-button")[3];
let btn5 = document.getElementsByClassName("flag-button")[4];
let btn6 = document.getElementsByClassName("flag-button")[5];
let btn7 = document.getElementsByClassName("flag-button")[6];
let btn8 = document.getElementsByClassName("flag-button")[7];
let btn9 = document.getElementsByClassName("flag-button")[8];
let btn10 = document.getElementsByClassName("flag-button")[9];
let btn11 = document.getElementsByClassName("flag-button")[10];
let btn12 = document.getElementsByClassName("flag-button")[11];


// Declare the spans to close each modal
let span1 = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close")[1];
let span3 = document.getElementsByClassName("close")[2];
let span4 = document.getElementsByClassName("close")[3];
let span5 = document.getElementsByClassName("close")[4];
let span6 = document.getElementsByClassName("close")[5];
let span7 = document.getElementsByClassName("close")[6];
let span8 = document.getElementsByClassName("close")[7];
let span9 = document.getElementsByClassName("close")[8];
let span10 = document.getElementsByClassName("close")[9];
let span11 = document.getElementsByClassName("close")[10];
let span12 = document.getElementsByClassName("close")[11];

// Add an event listener to each modal to display it when clicked
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}
btn5.onclick = function() {
    modal5.style.display = "block";
}
btn6.onclick = function() {
    modal6.style.display = "block";
}
btn7.onclick = function() {
    modal7.style.display = "block";
}
btn8.onclick = function() {
    modal8.style.display = "block";
}
btn9.onclick = function() {
    modal9.style.display = "block";
}
btn10.onclick = function() {
    modal10.style.display = "block";
}
btn11.onclick = function() {
    modal11.style.display = "block";
}
btn12.onclick = function() {
    modal12.style.display = "block";
}


// Close the modal using the "x"
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}
span5.onclick = function() {
    modal5.style.display = "none";
}
span6.onclick = function() {
    modal6.style.display = "none";
}
span7.onclick = function() {
    modal7.style.display = "none";
}
span8.onclick = function() {
    modal8.style.display = "none";
}
span9.onclick = function() {
    modal9.style.display = "none";
}
span10.onclick = function() {
    modal10.style.display = "none";
}
span11.onclick = function() {
    modal11.style.display = "none";
}
span12.onclick = function() {
    modal12.style.display = "none";
}