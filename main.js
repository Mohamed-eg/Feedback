const rates = document.querySelectorAll(".rating");
const rateInput = document.getElementById("colector_input");

rates.forEach((e) => {
  e.addEventListener("click", () => {
    rates.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    creatpartFu(e);
    rateInput.value = e.innerText;
    console.log(rateInput.value);
  });
});

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const particles = [];
  const color = randomColor();

  for (let i = 0; i < 10; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle", "move");

    const { x, y } = randomLocation();
    particle.style.setProperty("--x", x);
    particle.style.setProperty("--y", y);
    particle.style.background = color;
    btn.style.background = color;

    btn.appendChild(particle);

    particles.push(particle);
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        const innerP = document.createElement("span");
        innerP.classList.add("particle", "move");
        innerP.style.transform = `translate(${x}, ${y})`;

        const xs = Math.random() * 100 - 50 + "px";
        const ys = Math.random() * 100 - 50 + "px";
        innerP.style.setProperty("--x", `calc(${x} + ${xs})`);
        innerP.style.setProperty("--y", `calc(${y} + ${ys})`);
        innerP.style.animationDuration = Math.random() * 300 + 200 + "ms";
        innerP.style.background = color;

        btn.appendChild(innerP);
        particles.push(innerP);
      }

      setTimeout(() => {
        particles.forEach((particle) => {
          particle.remove();
        });
      }, 500);
    }, 300);
  }
});

function randomLocation() {
  return {
    x: (Math.random() * window.innerWidth - window.innerWidth / 2) / 5 + "px",
    y: (Math.random() * window.innerHeight - window.innerHeight / 2) / 5 + "px",
  };
}

function randomColor() {
  return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
}

//----------------------------------------------------
const creatpartFu = (e) => {
  const particles = [];
  const color = randomColor();

  for (let i = 0; i < 10; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle", "move");

    const { x, y } = randomLocation();
    particle.style.setProperty("--x", x);
    particle.style.setProperty("--y", y);
    particle.style.background = color;

    e.appendChild(particle);

    particles.push(particle);
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        const innerP = document.createElement("span");
        innerP.classList.add("particle", "move");
        innerP.style.transform = `translate(${x}, ${y})`;

        const xs = Math.random() * 100 - 50 + "px";
        const ys = Math.random() * 100 - 50 + "px";
        innerP.style.setProperty("--x", `calc(${x} + ${xs})`);
        innerP.style.setProperty("--y", `calc(${y} + ${ys})`);
        innerP.style.animationDuration = Math.random() * 300 + 200 + "ms";
        innerP.style.background = color;

        e.appendChild(innerP);
        particles.push(innerP);
      }

      setTimeout(() => {
        particles.forEach((particle) => {
          particle.remove();
        });
      }, 500);
    }, 300);
  }
};
