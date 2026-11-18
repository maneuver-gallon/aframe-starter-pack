function genLight(x, y, z, r) {
    const l = document.createElement("a-obj-model");
    l.setAttribute("src", "#streetlight");
    l.setAttribute("scale", "1 1 1");
    const pos = x + " " + y + " " + z;
    l.setAttribute("position", pos);
    const rot = "0 " + r + " 0";
    l.setAttribute("rotation", rot);
    l.setAttribute("color", "#333");
    const b = document.getElementById("scene");
    b.appendChild(l);
}

function buildScene(num) {
    let xl = 0;
    let zl = 0;
    let rl = -90;
    let zoff1 = 0;
    let zoff2 = 0;
    for (let i = 0; i < num; i++){
        console.log("bweh");
        xl = ((-1) ** i) * 5;
        rl = ((-1) ** i) * 90;
        zoff1 = Math.random() * 60;
        zoff2 = Math.random() * 60;
        genLight(xl, 0, zl - zoff1, rl);
        genLight(-xl, 0, (100 - zl) + zoff2, -rl);
        zl -= 100;
    }
}

buildScene(12);