document.getElementById("postButton").onclick = function() {post()};

function post() {
    document.getElementById("postButton").innerHTML=("chicken");
}

let backgroundMusic = document.getElementById("backgroundMusic");
backgroundMusic.volume = 0.01;
backgroundMusic.play();

