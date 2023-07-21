var currentIndex = null;

$(document).ready(function() {
  $("#prevBtn").click(goPrev);
  $("#nextBtn").click(goNext);
  $('body').keyup(handleKey);
  $("#errorWrapper").hide();
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

function handleKey(e) {
  let key = e.originalEvent.key;
  if(!["1", "2", "3"].includes(key))
    return;
  displayStrikes(parseInt(key));
  setTimeout(hideStrikes, 3000);
}

function displayStrikes(n) {
  let strikeHtml = `<div class='strike'>X</div>`;
  let errorHtml = '';
  for(let i = 0; i < n; i++)
    errorHtml += strikeHtml;
  $("#errorWrapper").html(errorHtml);
  $("#errorWrapper").show();
  document.getElementById("buzzer").play();
}

function hideStrikes() {
  $("#errorWrapper").html('');
  $("#errorWrapper").hide();
}
