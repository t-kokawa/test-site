const img = document.querySelector("img");
img.onclick = () => {
    const src = img.getAttribute("src");
    if (src === "images/camera-man.jpeg") {
        img.setAttribute("src", "images/camera-woman.jpeg");
    } else {
        img.setAttribute("src", "images/camera-man.jpeg");
    }
}

const button = document.querySelector("button");
const head = document.querySelector("h1");

function setUserName() {
    const name = prompt("名前は？");
    if (!name) {
        setUserName();
    } else {
        localStorage.setItem("name", name);
        head.textContent = `やあ、${name}`;
    }

}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const name = localStorage.getItem("name");
    head.textContent = `やあ、${name}`;
}

button.onclick = setUserName;
