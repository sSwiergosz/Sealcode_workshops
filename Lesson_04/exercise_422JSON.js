const xhr = new XMLHttpRequest();
xhr.open('GET', 'exercise_421.json', true);

xhr.onload = function() {
    if(xhr.status == 200) {
      responseObject = JSON.parse(xhr.responseText);
    }
};

xhr.send(null);

function innerContent(index) {
  let i = index;
  
  let newContent = `<ul class="song"><li class="title">Title: ${responseObject.songs[i].title}</li>`;
  newContent += `<li class="author">Author: ${responseObject.songs[i].author}</li>`;
  newContent += `<li class="genre">Genre: ${responseObject.songs[i].genre}</li>`;
  newContent += `<li class="album">Album: ${responseObject.songs[i].album}</li>`;
  newContent += `<li class="year">Year: ${responseObject.songs[i].year}</li></ul>`;

  document.getElementById('content').innerHTML = newContent;
}

function btnId() {
  var buttons = document.getElementsByClassName("btn");
  var prev_id=0;

  for (var i = 0; i <= buttons.length; i++) {
    buttons[i].onclick = function(e) {
      if(this.id != prev_id) {
        buttons[prev_id].disabled = false;
      }
      innerContent(this.id);
      this.disabled = true;
      prev_id = this.id;
    };
  }
}

btnId();
