document.addEventListener("DOMContentLoaded", function () {
  tsParticles.load("fundo-animado", {
    fullScreen: {
      enable: false,
      zIndex: 0
    },
    background: {
      color: "transparent"
    },
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#00e5ff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.2,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        outModes: "out"
      },
      links: {
        enable: true,
        distance: 130,
        color: "#00e5ff",
        opacity: 0.1,
        width: 1
      }
    },
    detectRetina: true
  });
});