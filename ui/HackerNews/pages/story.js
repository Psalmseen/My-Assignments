import view from "../utils/view.js"

export default async function Stories(path) {
    const stories = await getStories(path);
    console.log(stories);
    view.innerHTML = stories.map((story, index) => {
        return `<div>
            <div>
            <span class="grey"> ${index + 1}. </span>
            <span class="upvote grey"></span>
            <span class="news"> ${story.title}</span>
            <a href="${story.url}" class="grey">(${story.domain})</a>
        </div>
        <div class="grey">
            <span> ${story.points} points by ${story.user} ${story.time_ago}</span> |
            <a href="#"> hide</a> |
            <a href="#"> ${story.comments_count} comments </a> |
            <span> Add to favourite </span> 
            </div>
        </div>`
    }).join("");
    //{ "id": 24659282, "title": "Escaping strings in Bash using !:q", "points": 301, "user": "pcr910303", "time": 1601617405, "time_ago": "9 hours ago", "comments_count": 48, "type": "link", "url": "https://til.simonwillison.net/til/til/bash_escaping-a-string.md", "domain": "til.simonwillison.net" }

}
async function getStories(path) {
    const isHomeRoute = path === "/";
    const isNewRoute = path === "/new"
    if (isHomeRoute) {
        path = "/news";
    } else if (isNewRoute) {
        path = "/newest"
    }
    const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
    const stories = await response.json();
    // return path
    return stories;
}
//$ { JSON.stringify(stories) }
// https://node-hnapi.herokuapp.com