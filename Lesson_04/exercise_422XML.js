var songs;
const xhr = new XMLHttpRequest();
xhr.open('GET', 'exercise_421.xml', true);

xhr.onload = function() {
    if(xhr.status == 200) {
        const response = xhr.responseXML;
        songs = response.getElementsByTagName('song');
    }
};

xhr.send(null);

function innerContent(index) {
    let i = index;

    let newContent = `<ul class="song"><li class="title">Title: ${getNodeValue(songs[index], 'title')}</li>`;
    newContent += `<li class="author">Author: ${getNodeValue(songs[index], 'author')}</li>`;
    newContent += `<li class="genre">Genre: ${getNodeValue(songs[index], 'genre')}</li>`;
    newContent += `<li class="album">Album: ${getNodeValue(songs[index], 'album')}</li>`;
    newContent += `<li class="year">Year: ${getNodeValue(songs[index], 'year')}</li></ul>`;
    document.getElementById('content').innerHTML = newContent;
}

function btnId() {
    var buttons = document.getElementsByClassName("btn");
    var prev_id=0;

    for (var i = 0; i <= buttons.length; i++) {
        buttons[i].onclick = function(e) {
            if(this.id != prev_id) { //if different button was clicked
                buttons[prev_id].disabled = false;
            }
            innerContent(this.id);
            this.disabled = true;
            prev_id = this.id; //save previous id
        };
    }
}

function getNodeValue(obj, tag) { // get data from XML
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

btnId();
