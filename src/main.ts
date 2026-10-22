// Image Credit:
// File: src/assets/Propellor Hat.png
// Source: https://www.publicdomainfiles.com/show_file.php?id=13932598218705
// Creator: nicubunu
// License: Public Domain Clip Art Image: Propeller hat
// @deno-types="./asset-url.d.ts"
import propellorHatUrl from "./assets/Propellor Hat.png?no-inline";

// Image Credit:
// File: src/assets/clown_nose.png
// Source: https://boxcritters.wiki/File:Icon_clown_nose.png.html
// Creator: Hyper Hippo Entertainment Ltd
// License: Copyrighted by Hyper Hippo Entertainment Ltd; used under educational fair use for student coursework
// @deno-types="./asset-url.d.ts"
import clownNoseUrl from "./assets/clown_nose.png?no-inline";

const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

function buildFace() {
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute(
    "aria-label",
    "A face wearing a propeller hat and a clown nose",
  );
  face.style.overflow = "visible";

  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "#f3cf87");
  head.setAttribute("stroke", "#302c29");
  head.setAttribute("stroke-width", "4");
  face.append(head);

  const leftEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  leftEye.setAttribute("cx", "72");
  leftEye.setAttribute("cy", "82");
  leftEye.setAttribute("rx", "6");
  leftEye.setAttribute("ry", "9");
  leftEye.setAttribute("fill", "#302c29");
  face.append(leftEye);

  const rightEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  rightEye.setAttribute("cx", "128");
  rightEye.setAttribute("cy", "82");
  rightEye.setAttribute("rx", "6");
  rightEye.setAttribute("ry", "9");
  rightEye.setAttribute("fill", "#302c29");
  face.append(rightEye);

  const clownNoseImage = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );
  clownNoseImage.setAttribute("href", clownNoseUrl);
  clownNoseImage.setAttribute("x", "65");
  clownNoseImage.setAttribute("y", "72");
  clownNoseImage.setAttribute("width", "70");
  clownNoseImage.setAttribute("height", "70");
  face.append(clownNoseImage);

  const hatImage = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );
  hatImage.setAttribute("href", propellorHatUrl);
  hatImage.setAttribute("x", "20");
  hatImage.setAttribute("y", "-70");
  hatImage.setAttribute("width", "160");
  hatImage.setAttribute("height", "160");
  face.append(hatImage);

  const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
  mouth.setAttribute("x1", "75");
  mouth.setAttribute("y1", "137");
  mouth.setAttribute("x2", "125");
  mouth.setAttribute("y2", "137");
  mouth.setAttribute("stroke", "#302c29");
  mouth.setAttribute("stroke-width", "4");
  mouth.setAttribute("stroke-linecap", "round");
  face.append(mouth);

  return face;
}

const face = buildFace();
portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
