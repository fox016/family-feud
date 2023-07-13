var currentIndex = null;

$(document).ready(function() {
  $("#prevBtn").click(goPrev);
  $("#nextBtn").click(goNext);
  setQuestion(0);
});

function setQuestion(index) {
  currentIndex = index;
  $("#question").html(_questions[index].text);
}

function goNext() {
  if(currentIndex < _questions.length-1)
    setQuestion(currentIndex+1);
}

function goPrev() {
  if(currentIndex > 0)
    setQuestion(currentIndex-1);
}
