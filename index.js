// Function ONE (function A + function B)
// Create a function which:
// 1 - shows / hide the div when the user clicks on it
// 2 - shows the clicked div and hide all the others

function showAnswer(id) {
    if (document.getElementById) {
        var answerId = document.getElementById(id);
        var allAnswers = document.getElementsByClassName("faq-answer");
        for (var i=0; i < allAnswers.length; i++) {
            if (allAnswers[i] != answerId) {
                allAnswers[i].style.display = "none";
                allAnswers[i].parentElement.classList.remove('active');
            } else {
                if (answerId.style.display == "none" || answerId.style.display == "") {
                    answerId.style.display = "block";
                    answerId.parentElement.classList.add('active');
                } else {
                    answerId.style.display = "none";
                    allAnswers[i].parentElement.classList.remove('active');
                }
            }
        }
    }
    return false;
}

// Function TWO: top button scroll
// Create a function which shows a top button after the user scrolled some pixels of the page

// Get the button
let mybutton = document.getElementById("fixed-button-top")


// When user scroll down of the viewport size, show the button
window.onscroll = function() {ButtonTopScroll()};

// Create the function
function ButtonTopScroll() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display ="none";
    }
}

// Create the function to go to the top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop =0;
}

$(`html, body`).animate({scrollTop: 0}, 5000);



// Function THREE: show on scroll nav menu
// Create a function which shows the second nav menu whente the usere scroll down the page by n amount

let navScroll = document.getElementById("nav-scroll");
let prevScroll = window.scrollY;

// window.onscroll = function() {
//     var currentScroll = window.scrollY;
//     if (prevScroll > currentScroll) {
//         navScroll.style.top = "0";
//     } else {
//         navScroll.style.top = "-300px";
//     }
//     prevScroll = currentScroll;
// }

let navOffset = navScroll.offsetTop; 

window.addEventListener("scroll", () => {
    (window.scrollY > 100) ?
    navScroll.classList.add("fix") :
    navScroll.classList.remove("fix");
}); 

// Function A:
// Create a function which show / hide the div when the user clicks on it

// function toggleAnswer1() {
//     var answer = document.getElementById("faq-1")
//     var displaySetting = answer.style.display;

//     if (displaySetting == 'block') {
//         answer.style.display = 'none';
//     }
//     else {
//         answer.style.display = 'block';
//     }
// }

// function toggleAnswer2() {
//     var answer = document.getElementById("faq-2")
//     var displaySetting = answer.style.display;

//     if (displaySetting == 'block') {
//         answer.style.display = 'none';
//     }
//     else {
//         answer.style.display = 'block';
//     }
// }


// Function B:
//  Create a function which shows the clicked div and hide all the others

// function showAnswer(id) {
//     if (document.getElementById) {
//         var answerId = document.getElementById(id);
//         var allAnswers = document.getElementsByClassName("faq-answer");
//         for (var i=0; i < allAnswers.length; i++) {
//             allAnswers[i].style.display = "none";
//         }
//         answerId.style.display = "block";
//     }
//     return false;
// }





