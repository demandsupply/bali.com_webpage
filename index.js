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





