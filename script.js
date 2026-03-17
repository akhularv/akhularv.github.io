const letterLayouts = [
  { key: "e", zone: "home" },
  { key: "a", zone: "home" },
  { key: "r", zone: "home" },
  { key: "i", zone: "home" },
  { key: "o", zone: "home" },
  { key: "t", zone: "home" },
  { key: "n", zone: "home" },
  { key: "s", zone: "core" },
  { key: "l", zone: "core" },
  { key: "c", zone: "core" },
  { key: "u", zone: "core" },
  { key: "d", zone: "core" },
  { key: "p", zone: "core" },
  { key: "m", zone: "mid" },
  { key: "h", zone: "mid" },
  { key: "g", zone: "mid" },
  { key: "b", zone: "mid" },
  { key: "y", zone: "mid" },
  { key: "f", zone: "mid" },
  { key: "w", zone: "edge" },
  { key: "j", zone: "edge" },
  { key: "k", zone: "edge" },
  { key: "q", zone: "edge" },
  { key: "v", zone: "edge" },
  { key: "x", zone: "edge" },
  { key: "z", zone: "edge" },
  { key: ".", zone: "util" },
  { key: ",", zone: "util" },
  { key: "?", zone: "util" },
  { key: "'", zone: "util" },
];

const predictiveScenes = [
  {
    id: "overlay",
    label: "Predictive text overlay study",
    decoder: "Intent fusion",
    phrase: "future communication should feel lighter",
    ghostText: "for constrained users",
    suggestions: [
      { label: "future communication", score: 0.96, caption: "semantic prior" },
      { label: "lighter input", score: 0.82, caption: "motor effort" },
      { label: "for everyone", score: 0.74, caption: "completion" },
      { label: "reduce dwell", score: 0.66, caption: "timing gain" },
    ],
    scores: {
      e: 0.96,
      r: 0.88,
      s: 0.74,
      a: 0.58,
      i: 0.54,
      n: 0.49,
      t: 0.44,
      f: 0.59,
      u: 0.52,
      l: 0.46,
      ".": 0.25,
      ",": 0.21,
    },
    focusPath: ["f", "u", "t", "u", "r", "e", "n", "s"],
    telemetry: {
      certainty: "94%",
      latency: "118 ms",
      entropy: "0.24",
      mode: "overlay decode",
    },
    traceCaption: "semantic confidence wave",
    keyboardCaption: "effort-weighted likelihood",
    sparkline: [0.18, 0.26, 0.38, 0.35, 0.52, 0.48, 0.64, 0.58, 0.72, 0.68, 0.81, 0.76, 0.86, 0.8],
  },
  {
    id: "constraint",
    label: "Adaptive interface console",
    decoder: "Constraint-aware prior",
    phrase: "adaptive interfaces reduce effort under constraint",
    ghostText: "during cognitive load",
    suggestions: [
      { label: "adaptive interfaces", score: 0.95, caption: "context lock" },
      { label: "reduce effort", score: 0.86, caption: "motor load" },
      { label: "under constraint", score: 0.72, caption: "task frame" },
      { label: "recover intent", score: 0.64, caption: "fallback path" },
    ],
    scores: {
      a: 0.95,
      i: 0.84,
      o: 0.67,
      n: 0.6,
      r: 0.57,
      t: 0.48,
      e: 0.41,
      d: 0.51,
      c: 0.43,
      u: 0.39,
      ",": 0.28,
      ".": 0.22,
    },
    focusPath: ["a", "d", "a", "p", "t", "i", "v", "e"],
    telemetry: {
      certainty: "91%",
      latency: "132 ms",
      entropy: "0.31",
      mode: "constraint prior",
    },
    traceCaption: "adaptive confidence sweep",
    keyboardCaption: "constraint-shaped key field",
    sparkline: [0.16, 0.2, 0.32, 0.46, 0.41, 0.57, 0.62, 0.54, 0.68, 0.7, 0.66, 0.74, 0.79, 0.73],
  },
  {
    id: "generalization",
    label: "Cross-subject decoder pass",
    decoder: "Bayesian latent prior",
    phrase: "machine learning can reorganize intent in real time",
    ghostText: "across uncertain biology",
    suggestions: [
      { label: "machine learning", score: 0.93, caption: "latent prior" },
      { label: "reorganize intent", score: 0.79, caption: "decoder shift" },
      { label: "real time", score: 0.72, caption: "response loop" },
      { label: "cross subject", score: 0.67, caption: "generalization" },
    ],
    scores: {
      i: 0.93,
      n: 0.8,
      t: 0.72,
      e: 0.66,
      o: 0.55,
      a: 0.44,
      s: 0.36,
      m: 0.48,
      l: 0.4,
      g: 0.38,
      "?": 0.23,
      "'": 0.2,
    },
    focusPath: ["m", "a", "c", "h", "i", "n", "e"],
    telemetry: {
      certainty: "89%",
      latency: "146 ms",
      entropy: "0.37",
      mode: "bayesian update",
    },
    traceCaption: "cross-subject posterior trace",
    keyboardCaption: "probabilistic letter field",
    sparkline: [0.12, 0.18, 0.24, 0.22, 0.36, 0.44, 0.39, 0.54, 0.5, 0.62, 0.58, 0.7, 0.76, 0.72],
  },
  {
    id: "assist",
    label: "Adaptive support trigger",
    decoder: "Cognitive state monitor",
    phrase: "support should arrive before overload becomes failure",
    ghostText: "with graded intervention",
    suggestions: [
      { label: "support should arrive", score: 0.92, caption: "assistive cue" },
      { label: "before overload", score: 0.82, caption: "state threshold" },
      { label: "graded intervention", score: 0.74, caption: "help level" },
      { label: "preserve flow", score: 0.61, caption: "task continuity" },
    ],
    scores: {
      s: 0.92,
      u: 0.63,
      p: 0.6,
      o: 0.58,
      r: 0.55,
      t: 0.62,
      l: 0.4,
      d: 0.36,
      f: 0.42,
      y: 0.28,
      ".": 0.18,
      ",": 0.2,
    },
    focusPath: ["s", "u", "p", "p", "o", "r", "t"],
    telemetry: {
      certainty: "93%",
      latency: "109 ms",
      entropy: "0.21",
      mode: "assist trigger",
    },
    traceCaption: "cognitive support threshold",
    keyboardCaption: "support-biased confidence map",
    sparkline: [0.2, 0.24, 0.29, 0.34, 0.5, 0.61, 0.69, 0.74, 0.7, 0.78, 0.83, 0.88, 0.84, 0.9],
  },
];

const brainSeeds = [
  { x: -0.98, y: 0.16, r: 1.15, tone: "warm" },
  { x: -0.84, y: -0.12, r: 1.1 },
  { x: -0.66, y: -0.34, r: 1.22 },
  { x: -0.42, y: -0.5, r: 1.18 },
  { x: -0.14, y: -0.56, r: 1.1 },
  { x: 0.12, y: -0.5, r: 1.16, tone: "teal" },
  { x: 0.36, y: -0.38, r: 1.14 },
  { x: 0.62, y: -0.2, r: 1.08 },
  { x: 0.84, y: 0.02, r: 1.02 },
  { x: 0.96, y: 0.26, r: 1.08 },
  { x: 0.88, y: 0.52, r: 1.14 },
  { x: 0.7, y: 0.74, r: 1.08 },
  { x: 0.42, y: 0.88, r: 1.18 },
  { x: 0.12, y: 0.92, r: 1.1 },
  { x: -0.2, y: 0.86, r: 1.06 },
  { x: -0.5, y: 0.72, r: 1.12 },
  { x: -0.76, y: 0.5, r: 1.08 },
  { x: -0.9, y: 0.32, r: 0.98 },
  { x: -0.54, y: -0.06, r: 0.94 },
  { x: -0.28, y: -0.2, r: 0.92 },
  { x: 0.02, y: -0.18, r: 0.96 },
  { x: 0.28, y: -0.04, r: 0.92 },
  { x: 0.46, y: 0.18, r: 0.88, tone: "teal" },
  { x: 0.26, y: 0.38, r: 0.86 },
  { x: -0.02, y: 0.42, r: 0.88 },
  { x: -0.3, y: 0.32, r: 0.9 },
  { x: -0.48, y: 0.16, r: 0.86 },
  { x: -0.06, y: 0.66, r: 0.92 },
  { x: 0.2, y: 0.62, r: 0.84 },
  { x: -0.16, y: 1.08, r: 0.82 },
  { x: 0.06, y: 1.18, r: 0.8, tone: "warm" },
];

const brainLinks = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9],
  [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17],
  [1, 18], [18, 19], [19, 20], [20, 21], [21, 22], [22, 23], [23, 24], [24, 25], [25, 26],
  [18, 25], [19, 24], [20, 23], [21, 28], [24, 27], [27, 29], [28, 30],
  [4, 20], [6, 21], [10, 23], [12, 28], [14, 27], [3, 19], [15, 25],
];

class ConstellationField {
  constructor(canvas, host, hero) {
    this.canvas = canvas;
    this.host = host;
    this.hero = hero;
    this.ctx = canvas.getContext("2d");
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.pointer = { x: window.innerWidth * 0.72, y: 220, intensity: 0.18 };
    this.pointerTarget = { x: this.pointer.x, y: this.pointer.y, intensity: this.pointer.intensity };
    this.width = 0;
    this.height = 0;
    this.ambientStars = [];
    this.brainStars = [];
    this.ambientLinks = [];
    this.heroGlow = [];
    this.rafId = 0;
    this.isVisible = !document.hidden;
    this.resize = this.resize.bind(this);
    this.handlePointer = this.handlePointer.bind(this);
    this.handlePointerLeave = this.handlePointerLeave.bind(this);
    this.handleVisibility = this.handleVisibility.bind(this);
    this.tick = this.tick.bind(this);
  }

  init() {
    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });
    window.addEventListener("pointermove", this.handlePointer, { passive: true });
    window.addEventListener("pointerleave", this.handlePointerLeave, { passive: true });
    document.addEventListener("visibilitychange", this.handleVisibility);
    this.tick();
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.8);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = Math.round(this.width * dpr);
    this.canvas.height = Math.round(this.height * dpr);
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.buildField();
  }

  handlePointer(event) {
    this.pointerTarget.x = event.clientX;
    this.pointerTarget.y = event.clientY;
    this.pointerTarget.intensity = 1;
  }

  handlePointerLeave() {
    this.pointerTarget.x = window.innerWidth * 0.72;
    this.pointerTarget.y = 220;
    this.pointerTarget.intensity = 0.18;
  }

  handleVisibility() {
    this.isVisible = !document.hidden;
    if (this.isVisible && !this.rafId) {
      this.tick();
    }
  }

  buildField() {
    const heroRect = this.hero.getBoundingClientRect();
    const isCompact = this.width < 720;
    const constellationWidth = Math.min(this.width * (isCompact ? 0.8 : 0.42), 580);
    const constellationHeight = constellationWidth * 0.58;
    const centerX = isCompact ? this.width * 0.5 : this.width * 0.74;
    const centerY = Math.min(
      this.height * 0.42,
      Math.max(this.height * 0.22, heroRect.top + heroRect.height * (isCompact ? 0.62 : 0.36)),
    );
    const starCount = Math.max(72, Math.min(128, Math.round((this.width * this.height) / 16000)));

    this.ambientStars = Array.from({ length: starCount }, (_, index) => {
      const heroWeighted = Math.random() < 0.78;
      const spreadY = heroWeighted
        ? this.height * (0.03 + Math.random() * 0.72)
        : Math.random() * this.height;
      const depth = 0.3 + Math.random() * 0.95;
      return {
        x: Math.random() * this.width,
        y: Math.min(this.height - 24, spreadY),
        radius: 0.45 + Math.random() * 1.25,
        alpha: 0.12 + Math.random() * 0.3,
        driftX: (Math.random() - 0.5) * 6,
        driftY: (Math.random() - 0.5) * 7,
        depth,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.18 + Math.random() * 0.32,
        tint: Math.random() > 0.84 ? "warm" : Math.random() > 0.62 ? "teal" : "white",
        id: `ambient-${index}`,
      };
    });

    this.ambientLinks = this.ambientStars
      .filter((star) => star.y < this.height * 0.82)
      .sort((left, right) => left.x - right.x)
      .reduce((links, star, index, stars) => {
        const next = stars[index + 1];
        if (!next) {
          return links;
        }

        const distance = Math.hypot(next.x - star.x, next.y - star.y);
        if (distance < 130 && Math.random() > 0.42) {
          links.push([star, next, 0.028 + Math.random() * 0.03]);
        }
        return links;
      }, []);

    this.brainStars = brainSeeds.map((seed, index) => ({
      x: centerX + seed.x * constellationWidth * 0.5,
      y: centerY + seed.y * constellationHeight * 0.5,
      radius: seed.r,
      alpha: 0.3 + (index % 5) * 0.018,
      pulse: index * 0.62,
      pulseSpeed: 0.26 + (index % 6) * 0.03,
      depth: 0.9 + (index % 4) * 0.05,
      driftX: (Math.sin(index * 1.37) * 1.8),
      driftY: (Math.cos(index * 1.13) * 1.4),
      tint: seed.tone || (index % 7 === 0 ? "teal" : "white"),
    }));

    this.heroGlow = [
      {
        x: isCompact ? this.width * 0.56 : this.width * 0.74,
        y: this.height * 0.22,
        radius: isCompact ? this.width * 0.34 : 260,
        color: "rgba(102, 140, 156, 0.14)",
      },
      {
        x: isCompact ? this.width * 0.38 : this.width * 0.18,
        y: this.height * 0.12,
        radius: isCompact ? this.width * 0.28 : 190,
        color: "rgba(255, 232, 214, 0.12)",
      },
    ];
  }

  getColor(tint, alpha) {
    if (tint === "teal") {
      return `rgba(168, 216, 219, ${alpha})`;
    }
    if (tint === "warm") {
      return `rgba(255, 217, 194, ${alpha})`;
    }
    return `rgba(248, 246, 242, ${alpha})`;
  }

  drawStar(star, time, pointerShiftX, pointerShiftY, boost = 0) {
    const twinkle = this.reducedMotion ? 0 : Math.sin(time * star.pulseSpeed + star.pulse) * 0.045;
    const px = star.x + pointerShiftX * star.depth + (this.reducedMotion ? 0 : Math.sin(time * 0.22 + star.pulse) * star.driftX);
    const py = star.y + pointerShiftY * star.depth + (this.reducedMotion ? 0 : Math.cos(time * 0.24 + star.pulse) * star.driftY);
    const distance = Math.hypot(px - this.pointer.x, py - this.pointer.y);
    const pointerBoost = distance < 180 ? (1 - distance / 180) * 0.22 * this.pointer.intensity : 0;
    const alpha = Math.min(0.92, star.alpha + twinkle + pointerBoost + boost);
    const radius = star.radius + pointerBoost * 2.2 + boost * 1.8;

    this.ctx.beginPath();
    this.ctx.fillStyle = this.getColor(star.tint, alpha);
    this.ctx.arc(px, py, radius, 0, Math.PI * 2);
    this.ctx.fill();

    if (radius > 1.18) {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.getColor(star.tint, alpha * 0.16);
      this.ctx.arc(px, py, radius * 3.6, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  drawLinks(time, pointerShiftX, pointerShiftY) {
    this.ambientLinks.forEach(([from, to, opacity]) => {
      const fx = from.x + pointerShiftX * from.depth;
      const fy = from.y + pointerShiftY * from.depth;
      const tx = to.x + pointerShiftX * to.depth;
      const ty = to.y + pointerShiftY * to.depth;
      const midpointDistance = Math.hypot((fx + tx) * 0.5 - this.pointer.x, (fy + ty) * 0.5 - this.pointer.y);
      const highlight = midpointDistance < 210 ? (1 - midpointDistance / 210) * 0.04 * this.pointer.intensity : 0;

      this.ctx.beginPath();
      this.ctx.strokeStyle = `rgba(176, 208, 212, ${opacity + highlight})`;
      this.ctx.lineWidth = 0.7;
      this.ctx.moveTo(fx, fy);
      this.ctx.lineTo(tx, ty);
      this.ctx.stroke();
    });

    brainLinks.forEach(([fromIndex, toIndex], index) => {
      const from = this.brainStars[fromIndex];
      const to = this.brainStars[toIndex];
      const fx = from.x + pointerShiftX * from.depth;
      const fy = from.y + pointerShiftY * from.depth;
      const tx = to.x + pointerShiftX * to.depth;
      const ty = to.y + pointerShiftY * to.depth;
      const pulse = this.reducedMotion ? 0 : (Math.sin(time * 0.45 + index * 0.6) + 1) * 0.008;
      const midpointDistance = Math.hypot((fx + tx) * 0.5 - this.pointer.x, (fy + ty) * 0.5 - this.pointer.y);
      const highlight = midpointDistance < 260 ? (1 - midpointDistance / 260) * 0.06 * this.pointer.intensity : 0;

      this.ctx.beginPath();
      this.ctx.strokeStyle = `rgba(170, 205, 214, ${0.045 + pulse + highlight})`;
      this.ctx.lineWidth = 0.85;
      this.ctx.moveTo(fx, fy);
      this.ctx.lineTo(tx, ty);
      this.ctx.stroke();
    });
  }

  tick(now = 0) {
    if (!this.isVisible) {
      this.rafId = 0;
      return;
    }

    this.pointer.x += (this.pointerTarget.x - this.pointer.x) * 0.045;
    this.pointer.y += (this.pointerTarget.y - this.pointer.y) * 0.045;
    this.pointer.intensity += (this.pointerTarget.intensity - this.pointer.intensity) * 0.04;

    const time = now * 0.001;
    const normX = this.pointer.x / this.width - 0.5;
    const normY = this.pointer.y / window.innerHeight - 0.5;
    const pointerShiftX = this.reducedMotion ? 0 : normX * 18;
    const pointerShiftY = this.reducedMotion ? 0 : normY * 14;

    this.ctx.clearRect(0, 0, this.width, this.height);

    const fade = this.ctx.createLinearGradient(0, 0, 0, this.height);
    fade.addColorStop(0, "rgba(8, 15, 24, 0.22)");
    fade.addColorStop(0.22, "rgba(8, 15, 24, 0.12)");
    fade.addColorStop(0.58, "rgba(239, 232, 221, 0.015)");
    fade.addColorStop(1, "rgba(239, 232, 221, 0)");
    this.ctx.fillStyle = fade;
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.heroGlow.forEach((glow) => {
      const radial = this.ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, glow.radius);
      radial.addColorStop(0, glow.color);
      radial.addColorStop(0.45, glow.color.replace(/0\.\d+\)$/, "0.05)"));
      radial.addColorStop(1, "rgba(0, 0, 0, 0)");
      this.ctx.fillStyle = radial;
      this.ctx.fillRect(0, 0, this.width, this.height);
    });

    this.ambientStars.forEach((star) => this.drawStar(star, time, pointerShiftX, pointerShiftY));
    this.drawLinks(time, pointerShiftX, pointerShiftY);
    this.brainStars.forEach((star) => this.drawStar(star, time, pointerShiftX * 0.8, pointerShiftY * 0.9, 0.11));

    this.rafId = window.requestAnimationFrame(this.tick);
  }
}

const keyboardGrid = document.getElementById("keyboard-grid");
const suggestionRow = document.getElementById("suggestion-row");
const compositionOutput = document.getElementById("composition-output");
const ghostOutput = document.getElementById("ghost-output");
const telemetryGrid = document.getElementById("telemetry-grid");
const decoderSparkline = document.getElementById("decoder-sparkline");
const decoderMode = document.getElementById("decoder-mode");
const certaintyPill = document.getElementById("certainty-pill");
const compositionMode = document.getElementById("composition-mode");
const decoderCaption = document.getElementById("decoder-caption");
const keyboardCaption = document.getElementById("keyboard-caption");
const composerSceneLabel = document.getElementById("composer-scene-label");
const composerCard = document.querySelector(".composer-card");
const neuronBackground = document.getElementById("neuron-background");
const utilityButtons = document.querySelectorAll("[data-action]");
const atmosphereCanvas = document.getElementById("constellation-canvas");
const atmosphereHost = document.querySelector(".page-atmosphere");
const heroSection = document.querySelector(".hero");
const heroCopy = document.querySelector(".hero-copy");
const heroBrain = document.querySelector(".hero-brain");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const validScenes = predictiveScenes.filter((scene) => {
  return (
    scene &&
    typeof scene.id === "string" &&
    typeof scene.label === "string" &&
    typeof scene.decoder === "string" &&
    typeof scene.phrase === "string" &&
    typeof scene.ghostText === "string" &&
    Array.isArray(scene.suggestions) &&
    scene.suggestions.length > 0 &&
    scene.telemetry &&
    Array.isArray(scene.sparkline)
  );
});
const keyButtonMap = new Map();
let stateIndex = 0;
let activePhrase = validScenes[0]?.phrase || "";
let activeGhost = validScenes[0]?.ghostText || "";
let focusPath = [];
let focusIndex = 0;
let sceneCycleId = 0;
let focusSweepId = 0;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalizeScore(value, fallback = 0.14) {
  const number = Number.isFinite(value) ? value : fallback;
  return clamp(number, 0, 1);
}

function getScene(index) {
  if (!validScenes.length) {
    return null;
  }

  return validScenes[index] || validScenes[0];
}

function createKeyButton(layout) {
  const button = document.createElement("button");
  button.className = "key-button";
  button.type = "button";
  button.dataset.key = layout.key;
  button.innerHTML = `
    <span class="key-letter">${layout.key}</span>
    <span class="key-score">${layout.zone}</span>
  `;
  button.addEventListener("click", () => {
    activePhrase += layout.key;
    updateComposition();
    pulseButton(button);
    restartSceneCycle();
  });
  keyButtonMap.set(layout.key, button);
  return button;
}

function renderKeyboard() {
  keyboardGrid.innerHTML = "";
  keyButtonMap.clear();
  letterLayouts.forEach((layout) => {
    keyboardGrid.appendChild(createKeyButton(layout));
  });
}

function updateComposition() {
  compositionOutput.textContent = activePhrase || "";
  ghostOutput.textContent = activeGhost ? ` ${activeGhost}` : "";
}

function renderSuggestions(scene) {
  suggestionRow.innerHTML = "";
  scene.suggestions.forEach((suggestion) => {
    const score = normalizeScore(suggestion.score, 0.24);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "suggestion-chip";
    button.style.setProperty("--suggestion-strength", `${Math.round(score * 100)}%`);
    button.innerHTML = `
      <span class="suggestion-chip__label">${suggestion.label}</span>
      <span class="suggestion-chip__meta">${suggestion.caption || "prediction"} · ${Math.round(score * 100)}%</span>
    `;
    button.addEventListener("click", () => {
      activePhrase = suggestion.label;
      activeGhost = scene.ghostText;
      certaintyPill.textContent = `${Math.round(score * 100)}%`;
      updateComposition();
      pulseButton(button);
      restartSceneCycle();
    });
    suggestionRow.appendChild(button);
  });
}

function renderTelemetry(scene) {
  const items = [
    ["certainty", scene.telemetry.certainty],
    ["latency", scene.telemetry.latency],
    ["entropy", scene.telemetry.entropy],
    ["mode", scene.telemetry.mode],
  ];

  telemetryGrid.innerHTML = items
    .map(([label, value]) => {
      return `
        <div class="telemetry-card">
          <span class="telemetry-card__label">${label}</span>
          <span class="telemetry-card__value">${value}</span>
        </div>
      `;
    })
    .join("");
}

function renderSparkline(scene) {
  if (!decoderSparkline) {
    return;
  }

  const width = 320;
  const height = 72;
  const baseline = 60;
  const points = scene.sparkline.length ? scene.sparkline : [0.18, 0.2, 0.2, 0.18];
  const path = points
    .map((point, index) => {
      const x = (index / Math.max(points.length - 1, 1)) * width;
      const y = baseline - normalizeScore(point, 0.2) * 34;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
  const areaPath = `${path} L ${width} ${baseline} L 0 ${baseline} Z`;
  const dots = points
    .map((point, index) => {
      const x = (index / Math.max(points.length - 1, 1)) * width;
      const y = baseline - normalizeScore(point, 0.2) * 34;
      return `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${index === points.length - 1 ? 3.2 : 2.2}" fill="${index === points.length - 1 ? "#f7b18f" : "#9fe5df"}" />`;
    })
    .join("");

  decoderSparkline.innerHTML = `
    <defs>
      <linearGradient id="decoder-area" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="rgba(13,167,162,0.34)" />
        <stop offset="100%" stop-color="rgba(13,167,162,0)" />
      </linearGradient>
      <linearGradient id="decoder-line" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#86d6d2" />
        <stop offset="100%" stop-color="#f1b08a" />
      </linearGradient>
    </defs>
    <line x1="0" y1="${baseline}" x2="${width}" y2="${baseline}" stroke="rgba(239,248,246,0.12)" stroke-width="1" stroke-dasharray="4 8"></line>
    <path d="${areaPath}" fill="url(#decoder-area)"></path>
    <path d="${path}" fill="none" stroke="url(#decoder-line)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path>
    ${dots}
  `;
}

function applyFocusSweep() {
  keyButtonMap.forEach((button) => {
    button.classList.remove("is-focus", "is-trailing");
  });

  if (!focusPath.length) {
    return;
  }

  const primary = keyButtonMap.get(focusPath[focusIndex % focusPath.length]);
  const trailingOne = keyButtonMap.get(focusPath[(focusIndex + 1) % focusPath.length]);
  const trailingTwo = keyButtonMap.get(focusPath[(focusIndex + 2) % focusPath.length]);

  primary?.classList.add("is-focus");
  trailingOne?.classList.add("is-trailing");
  trailingTwo?.classList.add("is-trailing");
}

function restartFocusSweep() {
  window.clearInterval(focusSweepId);
  focusIndex = 0;
  applyFocusSweep();

  if (reducedMotionQuery.matches || focusPath.length < 2) {
    return;
  }

  focusSweepId = window.setInterval(() => {
    focusIndex = (focusIndex + 1) % focusPath.length;
    applyFocusSweep();
  }, 620);
}

function renderKeyboardState(scene) {
  keyButtonMap.forEach((button, key) => {
    const score = normalizeScore(scene.scores?.[key], 0.14);
    const scale = 0.92 + score * 0.34;
    button.style.scale = `${scale}`;
    button.style.setProperty("--key-strength", score.toFixed(2));
    button.classList.toggle("is-active", score > 0.34);
    button.querySelector(".key-score").textContent = score > 0.2 ? `${Math.round(score * 100)}%` : "idle";
  });

  focusPath = Array.isArray(scene.focusPath) ? scene.focusPath : [];
  restartFocusSweep();
}

function renderState(index) {
  const scene = getScene(index);
  if (!scene) {
    return;
  }

  activePhrase = scene.phrase;
  activeGhost = scene.ghostText;
  composerSceneLabel.textContent = scene.label;
  decoderMode.textContent = scene.decoder;
  certaintyPill.textContent = scene.telemetry.certainty;
  compositionMode.textContent = scene.telemetry.mode;
  decoderCaption.textContent = scene.traceCaption;
  keyboardCaption.textContent = scene.keyboardCaption;
  updateComposition();
  renderSuggestions(scene);
  renderTelemetry(scene);
  renderSparkline(scene);
  renderKeyboardState(scene);
}

function pulseButton(button) {
  button.classList.add("is-pressed");
  window.setTimeout(() => button.classList.remove("is-pressed"), 180);
}

function cycleState() {
  if (!validScenes.length) {
    return;
  }

  stateIndex = (stateIndex + 1) % validScenes.length;
  renderState(stateIndex);
}

function restartSceneCycle() {
  window.clearInterval(sceneCycleId);
  if (validScenes.length > 1) {
    sceneCycleId = window.setInterval(cycleState, 6400);
  }
}

function handleUtility(action) {
  if (action === "space") {
    activePhrase += " ";
    updateComposition();
    restartSceneCycle();
  }
  if (action === "backspace") {
    activePhrase = activePhrase.slice(0, -1);
    updateComposition();
    restartSceneCycle();
  }
  if (action === "confirm") {
    cycleState();
    restartSceneCycle();
    return;
  }
}

function setupComposerMotion() {
  if (!composerCard) {
    return;
  }

  if (reducedMotionQuery.matches) {
    composerCard.style.setProperty("--console-pointer-x", "78%");
    composerCard.style.setProperty("--console-pointer-y", "18%");
    return;
  }

  function onPointerMove(event) {
    const rect = composerCard.getBoundingClientRect();
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
    composerCard.style.setProperty("--console-pointer-x", `${x}%`);
    composerCard.style.setProperty("--console-pointer-y", `${y}%`);
  }

  function onPointerLeave() {
    composerCard.style.setProperty("--console-pointer-x", "78%");
    composerCard.style.setProperty("--console-pointer-y", "18%");
  }

  composerCard.addEventListener("pointermove", onPointerMove);
  composerCard.addEventListener("pointerleave", onPointerLeave);
}

function setupHeroBrainMotion() {
  if (!heroCopy || !heroBrain) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    heroBrain.style.setProperty("--brain-shift-x", "0px");
    heroBrain.style.setProperty("--brain-shift-y", "0px");
    heroBrain.style.setProperty("--brain-rotate", "0deg");
    heroBrain.style.setProperty("--brain-scale", "1");
    return;
  }

  const target = { x: 0, y: 0, scroll: 0 };
  const current = { x: 0, y: 0, scroll: 0 };
  let rafId = null;

  function updateScrollTarget() {
    const rect = heroCopy.getBoundingClientRect();
    const reference = window.innerHeight * 0.58;
    const normalized = (reference - rect.top) / (window.innerHeight + rect.height);
    target.scroll = Math.max(-1, Math.min(1, normalized * 2 - 0.55));
  }

  function onPointerMove(event) {
    const rect = heroCopy.getBoundingClientRect();
    target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  }

  function onPointerLeave() {
    target.x = 0;
    target.y = 0;
  }

  function tick() {
    current.x += (target.x - current.x) * 0.08;
    current.y += (target.y - current.y) * 0.08;
    current.scroll += (target.scroll - current.scroll) * 0.07;

    const shiftX = current.x * 16 + current.scroll * -8;
    const shiftY = current.y * 12 + current.scroll * 34;
    const rotate = current.x * 3.2 + current.scroll * 5.5;
    const scale = 1 + Math.abs(current.scroll) * 0.035;

    heroBrain.style.setProperty("--brain-shift-x", `${shiftX.toFixed(2)}px`);
    heroBrain.style.setProperty("--brain-shift-y", `${shiftY.toFixed(2)}px`);
    heroBrain.style.setProperty("--brain-rotate", `${rotate.toFixed(2)}deg`);
    heroBrain.style.setProperty("--brain-scale", scale.toFixed(3));

    rafId = window.requestAnimationFrame(tick);
  }

  updateScrollTarget();
  heroCopy.addEventListener("pointermove", onPointerMove);
  heroCopy.addEventListener("pointerleave", onPointerLeave);
  window.addEventListener("scroll", updateScrollTarget, { passive: true });
  window.addEventListener("resize", updateScrollTarget);
  rafId = window.requestAnimationFrame(tick);

  window.addEventListener("beforeunload", () => {
    if (rafId) {
      window.cancelAnimationFrame(rafId);
    }
  });
}

if (atmosphereCanvas && atmosphereHost && heroSection) {
  const field = new ConstellationField(atmosphereCanvas, atmosphereHost, heroSection);
  field.init();
}

setupHeroBrainMotion();
setupComposerMotion();

if (keyboardGrid && suggestionRow && compositionOutput && ghostOutput && telemetryGrid && decoderSparkline && validScenes.length) {
  renderKeyboard();
  renderState(stateIndex);
  restartSceneCycle();
}

utilityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    pulseButton(button);
    handleUtility(button.dataset.action);
  });
});

/* -------------------------------------------------------------------------- */
/* Project Popup Architecture                                                   */
/* -------------------------------------------------------------------------- */

const projectRegistry = {
  "slice-platform": {
    layout: "slice-platform",
    type: "Experimental Neurobiology",
    title: "Multi-Electrode Array Organotypic Slice Recordings",
    intro: "Building the full system needed to capture circuit level change, not just measure pieces of it. This view follows the project the way it was actually built: as a chained set of biological constraints that had to be solved in sequence.",
    stats: [
      { label: "Circuit target", value: "Thalamocortical" },
      { label: "Recording", value: "MEA + morphology" },
      { label: "State", value: "Entering collection" },
    ],
    links: [
      {
        label: "Open slice planner",
        href: "https://akhularv.github.io/Allen-Atlas-3d-Brain-Slice-Visualizer/",
      },
    ],
    steps: [
      {
        id: "question",
        side: "left",
        index: "01",
        label: "Problem framing",
        title: "Preserve the circuit long enough to watch real change happen",
        summary: "Standard acute slices break the system too early. The platform had to hold developing tissue alive while keeping the actual circuit intact.",
        detail: "The project begins with a hard experimental constraint: if the slice degrades too quickly, there is no way to observe developmental or treatment-linked change at the circuit level. Preservation had to come first, before any recording logic could matter.",
        bullets: [
          "Long-horizon observation instead of short acute windows",
          "Preserve pathway integrity, not just generic tissue viability",
          "Design around the neurobiological question rather than convenience",
        ],
      },
      {
        id: "geometry",
        side: "right",
        index: "02",
        label: "Geometry + labeling",
        title: "Find the angle, preserve the route, validate what the slice contains",
        summary: "RNA-seq analysis and literature review shaped both the antibody strategy and the slice geometry needed to preserve the circuit.",
        detail: "This is where the computational and experimental sides lock together. Transcriptomic reasoning narrowed the antibody choices, while slice geometry was driven by the need to physically preserve the thalamocortical route rather than cut something that only looked tidy in section.",
        bullets: [
          "Antibody selection grounded in RNA-seq and prior literature",
          "Oblique slice planning aimed at circuit preservation",
          "Morphology and signal collection designed as one system",
        ],
        figure: {
          layout: "planner",
          src: "./assets/brain-slicer-3d.png",
          alt: "3D brain slice planning view",
          caption: "Atlas-guided planner view used to preserve the targeted circuit",
        },
        note: "Read my other project card to learn more.",
      },
      {
        id: "culture",
        side: "left",
        index: "03",
        label: "Culture viability",
        title: "Keep developing mouse tissue alive in vitro without losing the experiment",
        summary: "The protocol had to support survival, developmental continuity, and downstream recording quality at the same time.",
        detail: "Organotypic culture only matters if the tissue stays meaningfully usable. Media, handling, and procedure design had to support survival without flattening the biology or degrading the future electrophysiology.",
        bullets: [
          "Procedure tuned for survival and developmental continuity",
          "Handling choices designed around later recording quality",
          "Wet-lab execution aligned with downstream computational analysis",
        ],
      },
      {
        id: "recording",
        side: "right",
        index: "04",
        label: "MEA stack",
        title: "Turn the preserved circuit into measurable electrophysiology",
        summary: "Once the slice is stable, the platform becomes a recording system capable of capturing signal change rather than isolated snapshots.",
        detail: "The recording layer is part of the experimental architecture itself. Multi-electrode array acquisition, morphology, and circuit targeting all need to line up so the data later has the resolution and context required for interpretation.",
        bullets: [
          "MEA acquisition designed around pathway-level questions",
          "Signal collection paired with post-hoc morphology",
          "Built to detect treatment-linked disruption, not just generic activity",
        ],
      },
      {
        id: "handoff",
        side: "left",
        index: "05",
        label: "ML handoff",
        title: "Design the experiment so the dataset is ready for machine learning",
        summary: "The project is entering first-phase collection with analysis planned from the start, not retrofitted after the fact.",
        detail: "The system goal is not only to record the circuit, but to produce the right data substrate for later modeling. Experimental choices are already being shaped by the need for interpretable treatment comparisons once the dataset matures.",
        bullets: [
          "Experimental design already shaped by downstream analysis needs",
          "Dataset structure aimed at interpretable treatment comparisons",
          "Validated platform, now entering real collection",
        ],
      },
    ],
  },
  "bayesian-vae": {
    layout: "perceptogram",
    type: "Neural Decoding System",
    title: "Perceptogram: Bayesian VAE Upgrade",
    intro: "Trying to make neural decoding generalize without pretending biology is cleaner than it is. This interface is now organized more like a paper figure set: each tab isolates one modeling idea and gives it a cleaner visual language.",
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/akhularv/Perceptogram_VAE",
      },
    ],
    stages: [
      {
        id: "signals",
        label: "Signal frame",
        kicker: "Event-aligned EEG input",
        title: "Start with the signal as biology actually gives it to us",
        body: "The original framework sat too close to a clean, subject-specific assumption. This version starts from the fact that EEG is noisy, variable, and person-dependent, then keeps that reality visible in the way the system is modeled.",
        metrics: [
          { label: "Paradigm", value: "EEG -> image" },
          { label: "Window", value: "100-380 ms" },
        ],
        bullets: [
          "Preserve biologically messy variance instead of smoothing it away",
          "Treat signal variability as part of the modeling problem",
          "Use event-locked windows that actually carry visual information",
        ],
        figure: "signals",
      },
      {
        id: "latent",
        label: "Diffusion map",
        kicker: "Latent reconstruction path",
        title: "Map EEG into diffusion latents instead of forcing a brittle direct target",
        body: "The diffusion-based reconstruction framing is important because it lets the signal influence structured latent spaces rather than collapse into a single deterministic answer. That is a better fit for noisy EEG and for image reconstruction problems where uncertainty matters.",
        metrics: [
          { label: "Embedding heads", value: "AutoKL + CLIP" },
          { label: "Bridge", value: "Linear latent map" },
        ],
        bullets: [
          "Use a simple latent mapping as a stable baseline",
          "Let AutoKL and CLIP heads carry different parts of the image signal",
          "Keep the interface legible as an actual ML pipeline rather than a concept sketch",
        ],
        figure: "latent",
      },
      {
        id: "bayes",
        label: "Bayesian prior",
        kicker: "Probabilistic model structure",
        title: "Add Bayesian structure so uncertainty becomes legible inside the decoder",
        body: "The Bayesian upgrade pushes the system away from nice-looking regression and toward a model that can actually reason under ambiguity. The goal is not just performance, but learning a decoder whose prior structure changes meaningfully as new biology comes in.",
        metrics: [
          { label: "Inference", value: "Hierarchical Bayes" },
          { label: "Probe", value: "Prior weight shifts" },
        ],
        bullets: [
          "Track posterior behavior rather than only final output quality",
          "Measure how early subjects shape the prior weight matrix",
          "Use uncertainty as model structure, not as leftover noise",
        ],
        figure: "bayes",
      },
      {
        id: "generalization",
        label: "Cross-subject shift",
        kicker: "Reconstruction + perturbation",
        title: "Inspect what changes when a new participant perturbs the model",
        body: "The current post-hoc work is about what happens when the model sees another subject. The interesting question is not only whether performance moves, but how the latent organization and weights themselves shift when another biology enters the system.",
        metrics: [
          { label: "Current probe", value: "N+1 subject" },
          { label: "Goal", value: "Generalizable decoding" },
        ],
        bullets: [
          "Track weight shifts caused by the ninth participant",
          "Use perturbation analysis instead of treating the model as a black box",
          "Keep reconstruction examples tied to actual subject transfer behavior",
        ],
        figure: "generalization",
      },
    ],
  },
  "cross-species-vae": {
    layout: "cross-species",
    type: "Machine Learning System",
    title: "Cross Species Treatment Effect VAE",
    intro: "Using interpretable latent spaces to move from raw RNA-seq expression shifts to actual biological mechanism. Click the system components to inspect how the model separates pathway structure, treatment signal, and batch effects.",
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/akhularv/cross_species_vae",
      },
    ],
    linksMap: [
      ["projection", "content"],
      ["projection", "style"],
      ["projection", "batch"],
      ["content", "aggregate"],
      ["style", "aggregate"],
      ["batch", "aggregate"],
      ["aggregate", "mouse-decoder"],
      ["aggregate", "human-decoder"],
    ],
    story: [
      {
        label: "Content encoder",
        title: "What belongs to the baseline biology stays here",
        body: "The content encoder is where the model stores the stable biological structure that should be present whether the sample is treated or not. That gives me a place to preserve real tissue organization without forcing treatment effects to explain everything.",
      },
      {
        label: "Treatment encoder",
        title: "This is the branch I actually want to perturb",
        body: "The treatment encoder is meant to concentrate maternal immune activation signal into a latent channel that can be moved, suppressed, or amplified. If perturbing this branch changes decoded pathways in a coherent way, that starts to look like mechanism instead of correlation.",
      },
      {
        label: "Batch encoder",
        title: "Technical variance gets isolated before it poisons interpretation",
        body: "The batch encoder exists so acquisition and processing differences have their own latent home. That matters because if technical variance leaks into the treatment channel, any later biological interpretation becomes much harder to trust.",
      },
      {
        label: "Perturbation readout",
        title: "Separated latents become experimental handles",
        body: "Once the encoders split structure, treatment, and batch apart, I can perturb specific nodes and watch what changes in the mouse and human decoders. That turns the model into a system for asking what the treatment is doing to biology, not just whether the model can reconstruct the data.",
      },
    ],
    hotspots: [
      {
        id: "projection",
        label: "Pathway projection",
        short: "332 pathway nodes",
        title: "Project transcriptomic input into a pathway-level representation",
        body: "The first move is away from a flat expression table and into a pathway-aware representation. That gives the rest of the model a more biological structure to reason over before latent disentanglement starts.",
        bullets: [
          "Pathway-level entry rather than raw flat features",
          "Keeps the biological organization structured from the first layer",
          "Sets up the downstream disentanglement work",
        ],
        metrics: [
          { label: "Top layer", value: "332 pathways" },
        ],
        tone: "warm",
        x: 50,
        y: 14,
      },
      {
        id: "content",
        label: "Content encoder",
        short: "baseline biology",
        title: "Separate the biological structure from treatment and batch",
        body: "The content encoder is where baseline biological organization is meant to live. It gives the model a place to represent core structure without forcing that structure to absorb treatment-specific or technical effects.",
        bullets: [
          "Captures non-treatment biological organization",
          "Reduces latent bleed from treatment into everything else",
          "Supports more interpretable latent decomposition",
        ],
        metrics: [
          { label: "Role", value: "Biological structure" },
        ],
        tone: "teal",
        x: 24,
        y: 34,
      },
      {
        id: "style",
        label: "Treatment encoder",
        short: "MIA signal",
        title: "Track treatment-linked variance in its own latent channel",
        body: "The treatment branch is where the model is supposed to hold the signal we actually care about: what changes because of maternal immune activation rather than because samples come from a different biological background.",
        bullets: [
          "Dedicated treatment-aware latent space",
          "Supports perturbation analysis on the treatment channel",
          "Key to mapping model behavior back to mechanism",
        ],
        metrics: [
          { label: "Role", value: "Treatment signal" },
        ],
        tone: "warm",
        x: 50,
        y: 34,
      },
      {
        id: "batch",
        label: "Batch encoder",
        short: "technical variance",
        title: "Isolate technical variance before it contaminates the biology",
        body: "Batch effects can dominate transcriptomic models if they are not given their own place to live. This branch exists so technical variance can be modeled explicitly instead of being mistaken for mechanism.",
        bullets: [
          "Encodes acquisition-related variance",
          "Protects treatment interpretation from batch leakage",
          "Makes the latent decomposition more trustworthy",
        ],
        metrics: [
          { label: "Role", value: "Batch effects" },
        ],
        tone: "neutral",
        x: 76,
        y: 34,
      },
      {
        id: "aggregate",
        label: "Latent fusion",
        short: "concat + reparam",
        title: "Recombine the latent factors without losing the separation logic",
        body: "The middle of the model is the structural hinge between disentanglement and reconstruction. The separated latent factors are concatenated and reparameterized here before decoding.",
        bullets: [
          "Concatenate content, treatment, and batch channels",
          "Reparameterize before decoding",
          "Preserve the logic of separated latent factors through reconstruction",
        ],
        metrics: [
          { label: "Bridge", value: "Concat + reparam" },
        ],
        tone: "core",
        x: 50,
        y: 57,
      },
      {
        id: "mouse-decoder",
        label: "Mouse decoder",
        short: "species branch A",
        title: "Decode back into the mouse expression space",
        body: "One decoder branch reconstructs mouse-space expression so the latent perturbations can be translated back into concrete expression changes in the modeled species.",
        bullets: [
          "Mouse-specific reconstruction branch",
          "Supports species-aware interpretation",
          "Makes latent perturbation biologically readable",
        ],
        metrics: [
          { label: "Output", value: "Mouse expression" },
        ],
        tone: "teal",
        x: 31,
        y: 82,
      },
      {
        id: "human-decoder",
        label: "Human decoder",
        short: "species branch B",
        title: "Hold the model against a second species and compare mechanism",
        body: "The human branch makes the system genuinely cross-species rather than merely treatment-aware. It lets the latent space be tested against another biological context and opens the door to mechanistic comparison.",
        bullets: [
          "Human-specific reconstruction branch",
          "Supports cross-species treatment comparison",
          "Moves the model from descriptive to mechanistic",
        ],
        metrics: [
          { label: "Output", value: "Human expression" },
        ],
        tone: "warm",
        x: 69,
        y: 82,
      },
    ],
  }
};

class ProjectModal {
  constructor() {
    this.layer = document.getElementById("project-layer");
    this.backdrop = document.getElementById("project-backdrop");
    this.window = document.getElementById("project-window");
    this.closeBtn = document.getElementById("project-close");
    this.content = document.getElementById("project-content");
    this.cards = document.querySelectorAll(".project-card[data-project-id]");
    this.cleanupFns = [];
    this.isOpen = false;
    this.activeCard = null;
    this.overlayTouchY = null;

    this.init();
  }

  init() {
    if (!this.layer) return;

    this.cards.forEach(card => {
      card.addEventListener("click", () => this.open(card));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.open(card);
        }
      });
    });

    this.closeBtn.addEventListener("click", () => this.close());
    this.backdrop.addEventListener("click", () => this.close());
    this.layer.addEventListener("wheel", (e) => this.routeOverlayWheel(e), { passive: false });
    this.layer.addEventListener("touchstart", (e) => this.handleOverlayTouchStart(e), { passive: true });
    this.layer.addEventListener("touchmove", (e) => this.handleOverlayTouchMove(e), { passive: false });
    this.layer.addEventListener("touchend", () => this.resetOverlayTouch(), { passive: true });
    this.layer.addEventListener("touchcancel", () => this.resetOverlayTouch(), { passive: true });
    
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) this.close();
    });
  }

  routeOverlayWheel(event) {
    if (!this.isOpen || !this.window || this.window.contains(event.target)) {
      return;
    }

    event.preventDefault();
    this.window.scrollTop += event.deltaY;
  }

  handleOverlayTouchStart(event) {
    if (!this.isOpen || this.window.contains(event.target)) {
      this.overlayTouchY = null;
      return;
    }

    this.overlayTouchY = event.touches[0]?.clientY ?? null;
  }

  handleOverlayTouchMove(event) {
    if (!this.isOpen || this.overlayTouchY == null || this.window.contains(event.target)) {
      return;
    }

    const nextY = event.touches[0]?.clientY;
    if (typeof nextY !== "number") {
      return;
    }

    event.preventDefault();
    this.window.scrollTop += this.overlayTouchY - nextY;
    this.overlayTouchY = nextY;
  }

  resetOverlayTouch() {
    this.overlayTouchY = null;
  }

  renderContent(projectId) {
    const data = projectRegistry[projectId];
    if (!data) return;
    this.cleanupInteractiveContent();
    this.window.dataset.layout = data.layout || "default";
    this.content.innerHTML = this.renderProject(data);
    setupLocalProjectLinks(this.content);
    this.bindInteractiveContent(data);
  }

  cleanupInteractiveContent() {
    this.cleanupFns.forEach((cleanup) => cleanup());
    this.cleanupFns = [];
  }

  renderProject(data) {
    if (data.layout === "slice-platform") {
      return this.renderSlicePlatform(data);
    }
    if (data.layout === "perceptogram") {
      return this.renderPerceptogram(data);
    }
    if (data.layout === "cross-species") {
      return this.renderCrossSpecies(data);
    }
    return this.renderDefaultProject(data);
  }

  renderLinks(links = []) {
    if (!links.length) {
      return "";
    }

    return `
      <div class="project-resource-row">
        ${links.map((link) => {
          if (link.localPreviewPath) {
            return `<a class="project-resource-link project-resource-link--local" data-local-preview-path="${link.localPreviewPath}"
              data-local-preview-port="${link.localPreviewPort || "8000"}" href="#" hidden>${link.label}</a>`;
          }
          return `<a class="project-resource-link" href="${link.href}" target="_blank" rel="noopener">${link.label}</a>`;
        }).join("")}
      </div>
    `;
  }

  renderStats(stats = []) {
    if (!stats.length) {
      return "";
    }
    return `
      <div class="project-metric-grid">
        ${stats.map((stat) => `
          <div class="project-metric-card">
            <span>${stat.label}</span>
            <strong>${stat.value}</strong>
          </div>
        `).join("")}
      </div>
    `;
  }

  renderTagList(tags = []) {
    return `<ul class="tag-row">${tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>`;
  }

  renderDefaultProject(data) {
    const sectionsHtml = (data.sections || []).map(section => `
      <div class="project-modal__section">
        <h4>${section.heading}</h4>
        <p>${section.body}</p>
      </div>
    `).join("");

    return `
      <div class="project-modal__header">
        <span class="eyebrow">${data.type}</span>
        <h2 id="modal-title">${data.title}</h2>
      </div>
      <div class="project-modal__body">
        <div class="project-modal__intro">
          <p class="lede">${data.intro}</p>
          ${this.renderLinks(data.links)}
          ${this.renderTagList(data.tags)}
        </div>
        <div class="project-modal__details">
          ${sectionsHtml}
        </div>
      </div>
    `;
  }

  renderSlicePlatform(data) {
    const firstStep = data.steps[0];
    return `
      <div class="project-modal project-modal--slice">
        <div class="project-modal__header project-modal__header--dense">
          <span class="eyebrow">${data.type}</span>
          <h2 id="modal-title">${data.title}</h2>
          <p class="project-modal__lede">${data.intro}</p>
        </div>
        <div class="project-slice-meta">
          <div class="project-slice-monitor">
            <span class="project-slice-monitor__label">Timeline focus</span>
            <strong data-slice-active-title>${firstStep.title}</strong>
            <p data-slice-active-summary>${firstStep.summary}</p>
          </div>
          ${this.renderStats(data.stats)}
        </div>
        <section class="project-slice-timeline" data-slice-timeline aria-label="Investigation timeline">
          ${data.steps.map((step, index) => `
            <article class="project-timeline-step project-timeline-step--${step.side}${index === 0 ? " is-near" : ""}" data-slice-step="${step.id}" data-slice-title="${step.title}" data-slice-summary="${step.summary}" tabindex="0">
              <div class="project-timeline-step__marker">
                <span>${step.index}</span>
              </div>
              <div class="project-timeline-step__card">
                <span class="project-timeline-step__label">${step.label}</span>
                <h3>${step.title}</h3>
                <p class="project-timeline-step__summary">${step.summary}</p>
                <div class="project-timeline-step__details">
                  <p>${step.detail}</p>
                  <ul>
                    ${step.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                  </ul>
                  ${step.figure ? `
                    <figure class="project-timeline-step__figure${step.figure.layout === "planner" ? " project-timeline-step__figure--planner" : ""}">
                      ${step.figure.layout === "planner" ? `
                        <div class="planner-shot planner-shot--timeline">
                          <div class="planner-shot__toolbar">
                            <span>Atlas standard</span>
                            <span class="planner-shot__badge">P4 developmental</span>
                          </div>
                          <div class="planner-shot__body">
                            <div class="planner-shot__viewport planner-shot__viewport--brain">
                              <img src="${step.figure.src}" alt="${step.figure.alt}" loading="lazy" />
                            </div>
                            <aside class="planner-shot__sidebar">
                              <span class="planner-shot__status">Backend connected</span>
                              <div class="planner-shot__control-group">
                                <span>Free orbit</span>
                                <span>400um</span>
                              </div>
                              <div class="planner-shot__control-group">
                                <span>Thalamocortical</span>
                                <span>Generate slice</span>
                              </div>
                              <div class="planner-shot__meter">
                                <span>R:3.7mm</span>
                                <span>C:3.7mm</span>
                              </div>
                            </aside>
                          </div>
                        </div>
                      ` : `
                        <img src="${step.figure.src}" alt="${step.figure.alt}" loading="lazy" />
                      `}
                      <figcaption>${step.figure.caption}</figcaption>
                    </figure>
                  ` : ""}
                  ${step.id === "geometry" ? `
                    <div class="project-timeline-step__resources">
                      ${this.renderLinks(data.links)}
                      <p class="project-timeline-step__note">${step.note}</p>
                    </div>
                  ` : ""}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }

  renderPerceptogram(data) {
    const firstStage = data.stages[0];
    return `
      <div class="project-modal project-modal--perceptogram">
        <div class="project-modal__header project-modal__header--dense">
          <span class="eyebrow">${data.type}</span>
          <h2 id="modal-title">${data.title}</h2>
          <p class="project-modal__lede">${data.intro}</p>
          ${this.renderLinks(data.links)}
        </div>
        <div class="project-stage-nav" role="tablist" aria-label="Decoder stages">
          ${data.stages.map((stage, index) => `
            <button type="button" class="project-stage-tab${index === 0 ? " is-active" : ""}" data-stage-id="${stage.id}" role="tab" aria-selected="${index === 0 ? "true" : "false"}">
              <span>${stage.label}</span>
            </button>
          `).join("")}
        </div>
        <div class="project-stage-layout">
          <div class="project-stage-visual">
            <div class="project-stage-visual__frame" data-stage-visual>
              ${this.renderPerceptogramVisual(firstStage.figure)}
            </div>
          </div>
          <div class="project-stage-copy">
            <span class="project-stage-copy__kicker" data-stage-kicker>${firstStage.kicker}</span>
            <h3 data-stage-title>${firstStage.title}</h3>
            <p data-stage-body>${firstStage.body}</p>
            <div class="project-stage-copy__bullets" data-stage-bullets>
              <ul>
                ${firstStage.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
              </ul>
            </div>
            <div class="project-stage-copy__metrics" data-stage-metrics>
              ${this.renderStats(firstStage.metrics)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderPerceptogramVisual(type) {
    if (type === "signals") {
      return `
        <div class="paper-visual paper-visual--signals">
          <div class="paper-visual__meta">
            <span>Figure 1</span>
            <span>event-aligned eeg + reconstruction window</span>
          </div>
          <div class="paper-signals-layout">
            <svg class="paper-signals-plot" viewBox="0 0 640 280" aria-hidden="true">
              <defs>
                <linearGradient id="signal-window" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="rgba(246, 166, 129, 0.18)" />
                  <stop offset="100%" stop-color="rgba(246, 166, 129, 0.03)" />
                </linearGradient>
              </defs>
              <rect x="116" y="28" width="188" height="212" fill="url(#signal-window)" rx="12" />
              <g stroke="rgba(142,160,170,0.25)" stroke-width="1">
                <line x1="70" y1="54" x2="612" y2="54" />
                <line x1="70" y1="104" x2="612" y2="104" />
                <line x1="70" y1="154" x2="612" y2="154" />
                <line x1="70" y1="204" x2="612" y2="204" />
                <line x1="116" y1="24" x2="116" y2="240" />
                <line x1="210" y1="24" x2="210" y2="240" />
                <line x1="304" y1="24" x2="304" y2="240" />
                <line x1="398" y1="24" x2="398" y2="240" />
                <line x1="492" y1="24" x2="492" y2="240" />
              </g>
              <g fill="rgba(214,224,228,0.72)" font-size="14" font-family="Avenir Next, sans-serif">
                <text x="20" y="60">Oz</text>
                <text x="20" y="110">P7</text>
                <text x="20" y="160">PO8</text>
                <text x="20" y="210">O2</text>
                <text x="98" y="262">0 ms</text>
                <text x="186" y="262">100</text>
                <text x="280" y="262">200</text>
                <text x="374" y="262">300</text>
                <text x="468" y="262">400</text>
                <text x="562" y="262">500</text>
              </g>
              <g fill="rgba(247,183,153,0.82)" font-size="13" font-family="Avenir Next, sans-serif">
                <text x="144" y="42">information-rich window</text>
              </g>
              <path d="M70 50 C104 22, 124 84, 156 58 S220 28, 254 64 S316 88, 352 48 S424 18, 464 54 S544 90, 612 42" stroke="rgba(155,229,223,0.92)" stroke-width="4" fill="none" stroke-linecap="round"/>
              <path d="M70 100 C112 70, 134 136, 170 110 S234 82, 274 124 S344 142, 390 104 S470 72, 518 118 S578 136, 612 112" stroke="rgba(247,176,138,0.88)" stroke-width="4" fill="none" stroke-linecap="round"/>
              <path d="M70 150 C106 134, 128 194, 164 162 S236 126, 276 170 S342 194, 390 158 S470 130, 518 180 S578 198, 612 166" stroke="rgba(190,204,255,0.8)" stroke-width="4" fill="none" stroke-linecap="round"/>
              <path d="M70 200 C98 184, 124 220, 160 204 S234 176, 282 214 S356 236, 404 202 S482 170, 526 214 S582 224, 612 208" stroke="rgba(122,214,171,0.72)" stroke-width="4" fill="none" stroke-linecap="round"/>
            </svg>
            <div class="paper-recon-grid">
              <div class="paper-recon-grid__header">
                <span>ground truth</span>
                <span>reconstruction</span>
              </div>
              <div class="paper-recon-grid__tiles">
                ${Array.from({ length: 6 }).map((_, index) => `
                  <div class="paper-thumb paper-thumb--truth paper-thumb--${index + 1}"></div>
                  <div class="paper-thumb paper-thumb--recon paper-thumb--${index + 1}"></div>
                `).join("")}
              </div>
            </div>
          </div>
          <p class="paper-visual__caption">A paper-style composition: stacked EEG traces on the left, diffusion reconstruction examples on the right, and the information-rich time window called out directly in the plot.</p>
        </div>
      `;
    }
    if (type === "latent") {
      return `
        <div class="paper-visual paper-visual--latent">
          <div class="paper-visual__meta">
            <span>Figure 2</span>
            <span>linear map into diffusion latents</span>
          </div>
          <div class="paper-pipeline">
            <div class="paper-pipeline__node">EEG trials</div>
            <div class="paper-pipeline__arrow"></div>
            <div class="paper-pipeline__node">Linear map</div>
            <div class="paper-pipeline__arrow"></div>
            <div class="paper-pipeline__fork">
              <span>AutoKL</span>
              <span>CLIP-Vision</span>
              <span>CLIP-Text</span>
            </div>
            <div class="paper-pipeline__arrow"></div>
            <div class="paper-pipeline__node paper-pipeline__node--accent">Latent diffusion decoder</div>
          </div>
          <div class="paper-latent-panels">
            <svg viewBox="0 0 300 180" class="paper-density-plot" aria-hidden="true">
              <g stroke="rgba(142,160,170,0.22)" stroke-width="1">
                <line x1="30" y1="150" x2="280" y2="150" />
                <line x1="50" y1="22" x2="50" y2="150" />
              </g>
              <path d="M40 150 C68 150, 86 84, 116 84 C146 84, 164 150, 192 150" fill="none" stroke="rgba(155,229,223,0.92)" stroke-width="4" stroke-linecap="round" />
              <path d="M128 150 C156 150, 178 54, 206 54 C234 54, 254 150, 280 150" fill="none" stroke="rgba(247,176,138,0.88)" stroke-width="4" stroke-linecap="round" />
              <g fill="rgba(214,224,228,0.72)" font-size="13" font-family="Avenir Next, sans-serif">
                <text x="54" y="28">prior</text>
                <text x="196" y="46">posterior</text>
              </g>
            </svg>
            <div class="paper-latent-cloud">
              <span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
          <p class="paper-visual__caption">The latent view makes the model read like a real ML system: a simple mapping into multiple diffusion embeddings, followed by distribution-aware inference rather than a single forced prediction.</p>
        </div>
      `;
    }
    if (type === "bayes") {
      return `
        <div class="paper-visual paper-visual--bayes">
          <div class="paper-visual__meta">
            <span>Figure 3</span>
            <span>posterior structure + ablation behavior</span>
          </div>
          <div class="paper-bayes-layout">
            <svg viewBox="0 0 320 220" class="paper-bayes-curves" aria-hidden="true">
              <g stroke="rgba(142,160,170,0.22)" stroke-width="1">
                <line x1="36" y1="184" x2="294" y2="184" />
                <line x1="64" y1="28" x2="64" y2="184" />
              </g>
              <path d="M42 184 C74 184, 90 102, 118 102 C146 102, 162 184, 194 184" fill="none" stroke="rgba(155,229,223,0.92)" stroke-width="4" stroke-linecap="round" />
              <path d="M108 184 C144 184, 172 58, 206 58 C240 58, 266 184, 294 184" fill="none" stroke="rgba(247,176,138,0.9)" stroke-width="4" stroke-linecap="round" />
              <rect x="116" y="48" width="100" height="136" fill="rgba(247,176,138,0.1)" rx="14" />
              <g fill="rgba(214,224,228,0.72)" font-size="13" font-family="Avenir Next, sans-serif">
                <text x="70" y="42">prior</text>
                <text x="196" y="52">posterior</text>
              </g>
            </svg>
            <div class="paper-bars">
              <div class="paper-bars__row"><span>AutoKL</span><i style="--bar:72%"></i></div>
              <div class="paper-bars__row"><span>CLIP-Vision</span><i style="--bar:90%"></i></div>
              <div class="paper-bars__row"><span>CLIP-Text</span><i style="--bar:61%"></i></div>
              <div class="paper-bars__row"><span>No Vision</span><i style="--bar:38%"></i></div>
              <div class="paper-bars__row"><span>Full model</span><i style="--bar:96%"></i></div>
            </div>
          </div>
          <p class="paper-visual__caption">This tab uses actual paper language: posterior narrowing on the left and an ablation-style comparison on the right, so the Bayesian upgrade reads like an ML study instead of a loose concept.</p>
        </div>
      `;
    }
    return `
      <div class="paper-visual paper-visual--generalization">
        <div class="paper-visual__meta">
          <span>Figure 4</span>
          <span>segment swapping + n+1 perturbation</span>
        </div>
        <div class="paper-swap-grid">
          ${Array.from({ length: 24 }).map((_, index) => `
            <div class="paper-swap-tile paper-swap-tile--${(index % 6) + 1}"></div>
          `).join("")}
        </div>
        <div class="paper-generalization-footer">
          <div class="paper-subject-track">
            <span>S1</span><span>S3</span><span>S5</span><span>S8</span><span class="is-incoming">S9</span>
          </div>
          <svg viewBox="0 0 420 120" aria-hidden="true">
            <path d="M24 80 C90 26, 142 42, 208 34 S320 20, 394 62" />
            <path d="M24 60 C80 92, 144 88, 212 96 S330 100, 394 48" />
          </svg>
        </div>
        <p class="paper-visual__caption">The reconstruction panel is styled after the paper’s segment-swapping figures: repeated outputs across time windows, then a compact subject-shift readout underneath to connect reconstruction quality to cross-subject perturbation.</p>
      </div>
    `;
  }

  renderCrossSpecies(data) {
    const firstHotspot = data.hotspots[0];
    const lineMarkup = data.linksMap.map(([fromId, toId]) => {
      const from = data.hotspots.find((entry) => entry.id === fromId);
      const to = data.hotspots.find((entry) => entry.id === toId);
      if (!from || !to) {
        return "";
      }
      return `<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" />`;
    }).join("");
    return `
      <div class="project-modal project-modal--architecture">
        <div class="project-modal__header project-modal__header--dense">
          <span class="eyebrow">${data.type}</span>
          <h2 id="modal-title">${data.title}</h2>
          <p class="project-modal__lede">${data.intro}</p>
          ${this.renderLinks(data.links)}
        </div>
        <div class="architecture-canvas">
          <div class="architecture-canvas__header">
            <span class="architecture-canvas__label">Interactive latent architecture</span>
            <p>Click the components.</p>
          </div>
          <div class="architecture-canvas__board" data-arch-board>
            <div class="architecture-canvas__grid" aria-hidden="true"></div>
            <div class="architecture-canvas__zones" aria-hidden="true">
              <div class="architecture-zone architecture-zone--input">Transcriptomic input</div>
              <div class="architecture-zone architecture-zone--encoders">Encoder separation</div>
              <div class="architecture-zone architecture-zone--latent">Latent fusion</div>
              <div class="architecture-zone architecture-zone--decoders">Species-specific decoding</div>
            </div>
            <div class="architecture-canvas__streams" aria-hidden="true">
              <span class="architecture-stream architecture-stream--content"></span>
              <span class="architecture-stream architecture-stream--treatment"></span>
              <span class="architecture-stream architecture-stream--batch"></span>
              <span class="architecture-stream architecture-stream--decode-left"></span>
              <span class="architecture-stream architecture-stream--decode-right"></span>
            </div>
            <svg class="architecture-canvas__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              ${lineMarkup}
            </svg>
            ${data.hotspots.map((hotspot) => `
              <button type="button" class="architecture-node architecture-node--${hotspot.tone}"
                data-hotspot-id="${hotspot.id}" style="left:${hotspot.x}%; top:${hotspot.y}%;">
                <span class="architecture-node__name">${hotspot.label}</span>
                <span class="architecture-node__meta">${hotspot.short}</span>
              </button>
            `).join("")}
            <div class="architecture-popover" data-arch-popover hidden>
              <button type="button" class="architecture-popover__close" data-arch-close aria-label="Close component details">&times;</button>
              <span class="architecture-popover__label">Model subsystem</span>
              <h3 data-arch-title>${firstHotspot.title}</h3>
              <p data-arch-body>${firstHotspot.body}</p>
              <div class="architecture-popover__metrics" data-arch-metrics>
                ${this.renderStats(firstHotspot.metrics)}
              </div>
              <ul class="architecture-popover__list" data-arch-bullets>
                ${firstHotspot.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
              </ul>
            </div>
          </div>
          <div class="architecture-story">
            ${data.story.map((entry) => `
              <article class="architecture-story__card">
                <span class="architecture-story__label">${entry.label}</span>
                <h3>${entry.title}</h3>
                <p>${entry.body}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  bindInteractiveContent(data) {
    if (data.layout === "slice-platform") {
      this.bindSlicePlatform(data);
    }
    if (data.layout === "perceptogram") {
      this.bindPerceptogram(data);
    }
    if (data.layout === "cross-species") {
      this.bindCrossSpecies(data);
    }
  }

  bindSlicePlatform(data) {
    const cards = Array.from(this.content.querySelectorAll("[data-slice-step]"));
    const activeTitle = this.content.querySelector("[data-slice-active-title]");
    const activeSummary = this.content.querySelector("[data-slice-active-summary]");
    const scroller = this.window;

    const update = () => {
      const viewport = scroller.getBoundingClientRect();
      const center = viewport.top + viewport.height * 0.5;
      let bestCard = null;
      let bestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height * 0.5;
        const distance = Math.abs(center - cardCenter);
        const proximity = clamp(1 - distance / (viewport.height * 0.75), 0, 1);
        card.style.setProperty("--timeline-proximity", proximity.toFixed(3));
        if (distance < bestDistance) {
          bestDistance = distance;
          bestCard = card;
        }
      });

      cards.forEach((card) => card.classList.toggle("is-near", card === bestCard));
      if (bestCard && activeTitle && activeSummary) {
        activeTitle.textContent = bestCard.dataset.sliceTitle || "";
        activeSummary.textContent = bestCard.dataset.sliceSummary || "";
      }
    };

    const requestUpdate = () => window.requestAnimationFrame(update);

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        card.scrollIntoView({ block: "center", behavior: "smooth" });
      });
      card.addEventListener("focus", requestUpdate);
    });

    scroller.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.requestAnimationFrame(update);
    this.cleanupFns.push(() => {
      scroller.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    });
  }

  bindPerceptogram(data) {
    const tabs = this.content.querySelectorAll("[data-stage-id]");
    const visualHost = this.content.querySelector("[data-stage-visual]");
    const kicker = this.content.querySelector("[data-stage-kicker]");
    const title = this.content.querySelector("[data-stage-title]");
    const body = this.content.querySelector("[data-stage-body]");
    const bullets = this.content.querySelector("[data-stage-bullets]");
    const metrics = this.content.querySelector("[data-stage-metrics]");

    const activate = (stageId) => {
      const stage = data.stages.find((entry) => entry.id === stageId);
      if (!stage) return;

      tabs.forEach((tab) => {
        const active = tab.dataset.stageId === stageId;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", active ? "true" : "false");
      });
      if (visualHost) visualHost.innerHTML = this.renderPerceptogramVisual(stage.figure);
      if (kicker) kicker.textContent = stage.kicker;
      if (title) title.textContent = stage.title;
      if (body) body.textContent = stage.body;
      if (bullets) {
        bullets.innerHTML = `<ul>${stage.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>`;
      }
      if (metrics) {
        metrics.innerHTML = this.renderStats(stage.metrics);
      }
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => activate(tab.dataset.stageId));
    });
  }

  bindCrossSpecies(data) {
    const hotspots = this.content.querySelectorAll("[data-hotspot-id]");
    const board = this.content.querySelector("[data-arch-board]");
    const popover = this.content.querySelector("[data-arch-popover]");
    const close = this.content.querySelector("[data-arch-close]");
    const title = this.content.querySelector("[data-arch-title]");
    const body = this.content.querySelector("[data-arch-body]");
    const bullets = this.content.querySelector("[data-arch-bullets]");
    const metrics = this.content.querySelector("[data-arch-metrics]");

    const activate = (hotspotId) => {
      const hotspot = data.hotspots.find((entry) => entry.id === hotspotId);
      if (!hotspot) return;

      hotspots.forEach((entry) => entry.classList.toggle("is-active", entry.dataset.hotspotId === hotspotId));
      if (title) title.textContent = hotspot.title;
      if (body) body.textContent = hotspot.body;
      if (bullets) {
        bullets.innerHTML = hotspot.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
      }
      if (metrics) {
        metrics.innerHTML = this.renderStats(hotspot.metrics);
      }

      const activeButton = Array.from(hotspots).find((entry) => entry.dataset.hotspotId === hotspotId);
      if (popover && board && activeButton) {
        const boardRect = board.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        const x = clamp(buttonRect.left - boardRect.left + buttonRect.width * 0.5, 170, boardRect.width - 170);
        const y = clamp(buttonRect.top - boardRect.top + buttonRect.height + 22, 140, boardRect.height - 160);
        popover.hidden = false;
        popover.style.setProperty("--popover-x", `${x}px`);
        popover.style.setProperty("--popover-y", `${y}px`);
        popover.classList.add("is-visible");
      }
    };

    hotspots.forEach((hotspot) => {
      hotspot.addEventListener("click", () => activate(hotspot.dataset.hotspotId));
    });

    close?.addEventListener("click", () => {
      if (popover) {
        popover.classList.remove("is-visible");
        popover.hidden = true;
      }
      hotspots.forEach((entry) => entry.classList.remove("is-active"));
    });
  }

  open(cardElement) {
    const projectId = cardElement.dataset.projectId;
    this.renderContent(projectId);
    
    this.activeCard = cardElement;
    
    // Force reflow for CSS transition
    void this.layer.offsetWidth;
    
    this.layer.classList.add("is-active");
    this.layer.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("modal-open");
    document.body.classList.add("modal-open");
    cardElement.setAttribute("aria-expanded", "true");
    this.window.scrollTop = 0;
    
    // Prevent browser from automatically jumping the page to the focused element
    setTimeout(() => this.closeBtn.focus({ preventScroll: true }), 50);
    this.isOpen = true;
  }

  close() {
    this.cleanupInteractiveContent();
    this.layer.classList.remove("is-active");
    this.layer.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("modal-open");
    document.body.classList.remove("modal-open");
    this.resetOverlayTouch();
    
    if (this.activeCard) {
      this.activeCard.setAttribute("aria-expanded", "false");
      this.activeCard.focus({ preventScroll: true });
    }
    
    this.isOpen = false;
  }
}

function setupLocalProjectLinks(root = document) {
  const localLinks = root.querySelectorAll("[data-local-preview-path]");
  const isLocalHost = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";

  localLinks.forEach((link) => {
    if (!isLocalHost) {
      link.remove();
      return;
    }

    const previewPort = link.dataset.localPreviewPort || "8000";
    const previewPath = link.dataset.localPreviewPath || "/";
    link.href = `${window.location.protocol}//${window.location.hostname}:${previewPort}${previewPath}`;
    link.hidden = false;
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });
}

// Initialize directly since the script is at the bottom of the body
setupLocalProjectLinks();
new ProjectModal();
