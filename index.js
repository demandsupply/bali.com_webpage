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