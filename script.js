const channelHandle = "@valerius-mh6ux";
const videoContainer = document.getElementById("videoContainer");

// Simple & free method – works without any API key
fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=UC` + channelHandle.split("@")[1])
    .then(r => r.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const entries = data.querySelectorAll("entry");
        let html = "";
        entries.forEach((e, i) => {
            if (i >= 9) return;
            const videoId = e.querySelector("videoid").textContent;
            const title = e.querySelector("title").textContent;
            html += `
            <div class="col">
                <div class="card h-100 border-0 shadow-sm">
                    <iframe src="https://www.youtube.com/embed/${videoId}" 
                            title="${title}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen 
                            loading="lazy" 
                            class="card-img-top" 
                            style="height:200px;">
                    </iframe>
                    <div class="card-body">
                        <p class="card-text small">${title}</p>
                    </div>
                </div>
            </div>`;
        });
        videoContainer.innerHTML = html;
    });

// Language toggle (very simple)
document.getElementById("langBtn").addEventListener("click", () => {
    if (document.documentElement.lang === "am") {
        document.documentElement.lang = "en";
        location.href = "https://voxvita.github.io/voxvita/en/"; // you can create English version later
    } else {
        document.documentElement.lang = "am";
        location.reload();
    }
});
