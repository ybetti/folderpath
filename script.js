fetch("folders.json")
    .then(response => response.json())
    .then(data => {
        const folderLinks = data;
        createButtons(folderLinks);
    });

function createButtons(links) {
    const container = document.getElementById("button-container");
    links.forEach(link => {
        const button = document.createElement("button");
        button.textContent = link.label;
        button.onclick = () => {
            location.href = link.path;
        };
        container.appendChild(button);
    });
}
