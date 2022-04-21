const btn = document.getElementById("okay");
const text = document.getElementById("joke_id")
const posts_btn = document.getElementById("posts_btn_id")
const url = "https://icanhazdadjoke.com/";
// https://geek-jokes.sameerkumar.website/api?format=json
btn.addEventListener('click', getJoke);
posts_btn.addEventListener('click', getPosts);

async function getJoke() {
    const jokeData = await fetch(url, {
    headers: {
        'Accept': 'application/json'
    }
    });
    const jokeObj = await jokeData.json();
    text.innerHTML = jokeObj.joke;
    text.style.display = "inline-block";
    document.getElementById("posts").style.display = "none";

    posts_btn.classList.remove("underline");
    btn.classList.add("underline");
}
async function getPosts() {
    text.style.display = "none";
    document.getElementById("posts").style.display = "flex";

    posts_btn.classList.add("underline");
    btn.classList.remove("underline");
}