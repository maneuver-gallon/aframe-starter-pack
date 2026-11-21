const b = document.getElementById("scene");

function genPost(x, y, z, r) {
    const l = document.createElement("a-entity");
    l.setAttribute("gltf-model", "#streetlight");
    l.setAttribute("scale", "10 10 10");
    const pos = x + " " + y + " " + z;
    l.setAttribute("position", pos);
    const rot = "0 " + r + " 0";
    l.setAttribute("rotation", rot);
    l.setAttribute("color", "#333");
    b.appendChild(l);
}

function genLight(o) {
    const light = document.createElement("a-light");
    const light2 = document.createElement("a-light");
    let lightPos = "2.97 8.9 " + (-o);
    light.setAttribute("type", "spot");
    light.setAttribute("position", lightPos);
    light.setAttribute("rotation", "-90 0 0");
    light.setAttribute("angle", "45");
    light.setAttribute("color", "orange");
    b.appendChild(light);
    light2.setAttribute("type", "spot");
    light2.setAttribute("angle", "85");
    light2.setAttribute("penumbra", "0.9");
    light2.setAttribute("intensity", "0.3");
    light2.setAttribute("color", "orange");
    light2.setAttribute("rotation", "-90 0 0");
    light2.setAttribute("position", lightPos);
    b.appendChild(light2);
}

function buildScene(num) {
    let xl = 0;
    let zl = 0;
    let rl = 0;
    let zoff1 = Math.random() * 60;
    let zoff2 = Math.random() * 60;
    genLight(zoff1);
    for (let i = 0; i < num; i++){
        console.log("bweh");
        xl = ((-1) ** i) * 5;
        rl = (i % 2) * 180;
        genPost(xl, 0, zl - zoff1, rl);
        genPost(-xl, 0, (100 - zl) + zoff2, rl - 180);
        zl -= 100;
        zoff1 = Math.random() * 60;
        zoff2 = Math.random() * 60;
    }
}

const img = document.getElementById("streetlight");
img.addEventListener("load", buildScene(12));
