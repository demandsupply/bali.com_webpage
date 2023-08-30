// Function ONE:
//  Create a function which shows the clicked div and hide all the others

function showAnswer(id) {
    if (document.getElementById) {
        var answerId = document.getElementById(id);
        var allAnswers = document.getElementsByClassName("faq-answer");
        for (var i=0; i < allAnswers.length; i++) {
            allAnswers[i].style.display = "none";
        }
        answerId.style.display = "block";
    }
    return false;
}

function toggleAnswer1() {
    var answer = document.getElementById("faq-1")
    var displaySetting = answer.style.display;

    if (displaySetting == 'block') {
        answer.style.display = 'none';
    }
    else {
        answer.style.display = 'block';
    }
}

function toggleAnswer2() {
    var answer = document.getElementById("faq-2")
    var displaySetting = answer.style.display;

    if (displaySetting == 'block') {
        answer.style.display = 'none';
    }
    else {
        answer.style.display = 'block';
    }
}

// function all() {
//     showAnswer(id);
//     toggleAnswer(id);
// }