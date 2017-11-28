function load(){
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    xhr.overrideMimeType("application/json");

    if(xhr.status == 200) {
      responseObject = JSON.parse(xhr.responseText);
    }

    let newContent = '<ul class="song">';
    for(let i = 0; i < responseObject.songs.length; i++) {
      newContent += `<li class=title>Title: ${responseObject.songs[i].title}</li>`;
      newContent += `<li class=author>Author: ${responseObject.songs[i].author}</li>`;
      newContent += `<li class=genre>Genre: ${responseObject.songs[i].genre}</li>`;
      newContent += `<li class=album>Album: ${responseObject.songs[i].album}</li>`;
      newContent += `<li class=year>Year: ${responseObject.songs[i].year}</li>`;
    }
    newContent += '</ul>';

    document.getElementById('content').innerHTML = newContent;
  };

  xhr.open('GET', 'exercise_421.json', true);
  xhr.send(null);
}

let el = 
el.addEventListener('click', function() {load();}, false);
