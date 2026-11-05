const roles = ["Full-Stack Developer", "Founder of Sanatplace", "Python · JavaScript"];
const el = document.getElementById("typed");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduce) {
  el.textContent = roles[0];
} else {
  let r = 0, i = 0, del = false;
  (function tick() {
    const word = roles[r];
    i += del ? -1 : 1;
    el.textContent = word.slice(0, i);
    let wait = del ? 35 : 70;
    if (!del && i === word.length) { del = true; wait = 1800; }
    else if (del && i === 0) { del = false; r = (r + 1) % roles.length; wait = 300; }
    setTimeout(tick, wait);
  })();
}

document.getElementById("year").textContent = new Date().getFullYear();
