var currentIndex = null;

$(document).ready(function() {
  $("#prevBtn").click(goPrev);
  $("#nextBtn").click(goNext);
  setQuestion(0);
});

function setQuestion(index) {
  currentIndex = index;
  $("#question").html(_questions[index].text);
  let responseHtml = '';
  let resList = _questions[index].responses;
  let rowCount = Math.ceil(resList.length/2);
  $("#responseWrapper").css('grid-template-rows', ('auto ').repeat(rowCount));
  for(let i = 0; i < resList.length; i++) {
    responseHtml += `
      <div class='response'>
        <div class='responseText'>${resList[i].text}</div>
        <div class='responseCount'>${resList[i].count}</div>
      </div>
    `;
  }
  $("#responseWrapper").html(responseHtml);
  $(".response").click((e) => {
    $(e.currentTarget).css('color', 'white');
  });
}

function goNext() {
  if(currentIndex < _questions.length-1)
    setQuestion(currentIndex+1);
}

function goPrev() {
  if(currentIndex > 0)
    setQuestion(currentIndex-1);
}
