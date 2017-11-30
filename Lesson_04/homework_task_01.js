const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);

const buttons = document.getElementsByClassName("btn");

xhr.onload = function() {
    if(xhr.status == 200) {
        responseObject = JSON.parse(xhr.responseText);
        for(let i = 0; i <= buttons.length; i++) {
            buttons[i].innerHTML = responseObject.movies[i].title;
        }
    }
};

xhr.send(null);

function innerContent(index) {
    let i = index;
    
    let newContent = `<ul class="movie"><li class="title">Title: ${responseObject.movies[i].title}</li>`;
    newContent += `<li class="genre">Genre: ${responseObject.movies[i].genre}</li>`;
    newContent += `<li class="director">Director: ${responseObject.movies[i].director}</li>`;
    newContent += `<li class="year">Year: ${responseObject.movies[i].year}</li>`;
    newContent += `<li class="plot">Movie plot: ${responseObject.movies[i].plot}</li></ul>`;

    document.getElementById('content').innerHTML = newContent;
}

function btnId() {
    let prev_id=0;

    for (let i = 0; i <= buttons.length; i++) {
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
