// ============================================================
// T-Mat Global — script.js  v3.0
// NASA-style solar system: realistic sun, all 9 planets,
// perspective depth, galaxy background
// ============================================================

const container = document.getElementById('canvas-container');
if (!container) { console.warn('canvas-container not found'); }

const scene = new THREE.Scene();
scene.background = null; // transparent so CSS bg shows

// ── Renderer ─────────────────────────────────────────────
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = false;
if (container) container.appendChild(renderer.domElement);

// ── Camera — angled like NASA's solar system view ─────────
// 25° tilt gives depth: inner planets look close, outer look far
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.set(0, 28, 65);
camera.lookAt(0, 0, 0);

// ── Lighting ──────────────────────────────────────────────
// 1. Sun point light — warm, bright, realistic falloff
const sunPointLight = new THREE.PointLight(0xfff4d6, 4.0, 60);
sunPointLight.position.set(0, 0, 0);
scene.add(sunPointLight);

// 2. Soft ambient — deep space blue-black
const ambient = new THREE.AmbientLight(0x0a0a1a, 1.2);
scene.add(ambient);

// 3. Hemisphere: warm top (sun side), cool bottom
const hemi = new THREE.HemisphereLight(0xfff0cc, 0x0a0a2a, 0.3);
scene.add(hemi);

// ── Texture Loader ────────────────────────────────────────
const TL = new THREE.TextureLoader();

// ── Galaxy: 15,000 stars with color variation ─────────────
(function buildGalaxy() {
  const count = 15000;
  const pos   = new Float32Array(count * 3);
  const col   = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r   = 150 + Math.random() * 800;
    const th  = Math.random() * Math.PI * 2;
    const ph  = Math.acos(2 * Math.random() - 1);
    pos[i*3]   = r * Math.sin(ph) * Math.cos(th);
    pos[i*3+1] = r * Math.sin(ph) * Math.sin(th);
    pos[i*3+2] = r * Math.cos(ph);
    // Star colors: white, blue-white, warm yellow
    const t = Math.random();
    if (t < 0.7) { col[i*3]=0.95; col[i*3+1]=0.95; col[i*3+2]=1.0; }        // blue-white
    else if (t < 0.9) { col[i*3]=1.0; col[i*3+1]=1.0; col[i*3+2]=0.85; }    // warm white
    else { col[i*3]=1.0; col[i*3+1]=0.85; col[i*3+2]=0.55; }                 // orange giant
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
  scene.add(new THREE.Points(geo, new THREE.PointsMaterial({
    size: 0.18, vertexColors: true, transparent: true, opacity: 0.9, sizeAttenuation: true
  })));
})();

// ── Sun ───────────────────────────────────────────────────
// Real sun: bright yellow-white core, warm corona, no hard edges
const SUN_R = 2.5;

const sunCore = new THREE.Mesh(
  new THREE.SphereGeometry(SUN_R, 64, 64),
  new THREE.MeshBasicMaterial({ color: 0xfffde0 })
);
scene.add(sunCore);

const corona1 = new THREE.Mesh(
  new THREE.SphereGeometry(SUN_R * 1.18, 64, 64),
  new THREE.MeshBasicMaterial({ color: 0xffcc44, transparent: true, opacity: 0.22, side: THREE.BackSide })
);
scene.add(corona1);

const corona2 = new THREE.Mesh(
  new THREE.SphereGeometry(SUN_R * 1.55, 64, 64),
  new THREE.MeshBasicMaterial({ color: 0xff8800, transparent: true, opacity: 0.08, side: THREE.BackSide })
);
scene.add(corona2);

const corona3 = new THREE.Mesh(
  new THREE.SphereGeometry(SUN_R * 2.2, 64, 64),
  new THREE.MeshBasicMaterial({ color: 0xff6600, transparent: true, opacity: 0.04, side: THREE.BackSide })
);
scene.add(corona3);

// ── Orbit ring helper ─────────────────────────────────────
function makeOrbit(r) {
  const pts = [];
  for (let i = 0; i <= 128; i++) {
    const a = (i / 128) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r));
  }
  const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.06 })
  );
  scene.add(line);
}

// ── Planet factory ────────────────────────────────────────
function makePlanet({ size, color, emissive, roughness, dist, speed, rings, ringColor, tilt }) {
  makeOrbit(dist);
  const pivot = new THREE.Object3D();
  scene.add(pivot);

  const mat = new THREE.MeshStandardMaterial({
    color: color,
    emissive: emissive || 0x000000,
    emissiveIntensity: 0.04,
    roughness: roughness !== undefined ? roughness : 0.8,
    metalness: 0.05
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(size, 48, 48), mat);
  mesh.position.x = dist;
  if (tilt) mesh.rotation.z = tilt;
  pivot.add(mesh);

  if (rings) {
    // Inner + outer ring for realism
    const rg1 = new THREE.Mesh(
      new THREE.RingGeometry(size * 1.35, size * 1.9, 80),
      new THREE.MeshBasicMaterial({ color: ringColor || 0xc8aa60, transparent: true, opacity: 0.65, side: THREE.DoubleSide })
    );
    rg1.rotation.x = Math.PI / 2.2;
    mesh.add(rg1);
    const rg2 = new THREE.Mesh(
      new THREE.RingGeometry(size * 1.9, size * 2.3, 80),
      new THREE.MeshBasicMaterial({ color: ringColor || 0xa08840, transparent: true, opacity: 0.35, side: THREE.DoubleSide })
    );
    rg2.rotation.x = Math.PI / 2.2;
    mesh.add(rg2);
  }

  return { pivot, mesh, speed };
}

// ── Solar system — 9 planets, real colors, good perspective ──
// Distances tuned so the 25° camera shows them beautifully
const planets = [
  makePlanet({ size: 0.90, color: 0x8a8a8a, dist: 4.0,  speed: 4.74 }),
  makePlanet({ size: 1.50, color: 0xe8d8a0, roughness: 0.6, dist: 7.0,  speed: 3.50 }),
  makePlanet({ size: 1.65, color: 0x1a6fa8, emissive: 0x051530, dist: 10.0,  speed: 2.98 }),
  makePlanet({ size: 1.20, color: 0xb84020, emissive: 0x200800, dist: 13.5,  speed: 2.41 }),
  makePlanet({ size: 3.60, color: 0xc8894a, emissive: 0x1a0800, roughness: 0.7, dist: 20.0,  speed: 1.31 }),
  makePlanet({ size: 3.00, color: 0xe4d080, roughness: 0.75, dist: 28.0,  speed: 0.97, rings: true, ringColor: 0xc8a855, tilt: 0.47 }),
  makePlanet({ size: 2.10, color: 0x82e4e4, roughness: 0.5, dist: 35.0, speed: 0.68, tilt: 1.57 }),
  makePlanet({ size: 1.90, color: 0x2244cc, emissive: 0x020820, dist: 41.0, speed: 0.54 }),
  makePlanet({ size: 0.70, color: 0x908070, dist: 46.0, speed: 0.47 }),
];

// ── Earth: real NASA texture ──────────────────────────────
const earthMesh = planets[2].mesh;
earthMesh.material = new THREE.MeshPhongMaterial({
  map:         TL.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'),
  specularMap: TL.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'),
  normalMap:   TL.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg'),
  specular:    new THREE.Color(0x1155aa),
  shininess:   30
});

// Earth cloud layer
const earthClouds = new THREE.Mesh(
  new THREE.SphereGeometry(1.72, 48, 48),
  new THREE.MeshPhongMaterial({
    map: TL.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'),
    transparent: true, opacity: 0.55, side: THREE.DoubleSide
  })
);
earthMesh.add(earthClouds);

earthMesh.add(new THREE.Mesh(
  new THREE.SphereGeometry(1.88, 48, 48),
  new THREE.MeshBasicMaterial({ color: 0x0044ff, transparent: true, opacity: 0.07, side: THREE.BackSide })
));

// ── Jupiter: add band-like emissive variation ─────────────
// Subtle second sphere for banding effect
const jupiterBands = new THREE.Mesh(
  new THREE.SphereGeometry(0.485, 48, 48),
  new THREE.MeshBasicMaterial({ color: 0x8a4020, transparent: true, opacity: 0.12, side: THREE.BackSide })
);
planets[4].mesh.add(jupiterBands);

// ── Moon (orbits Earth) ───────────────────────────────────
const moonPivot = new THREE.Object3D();
earthMesh.add(moonPivot); // Moon orbits Earth mesh

const moonMesh = new THREE.Mesh(
  new THREE.SphereGeometry(0.45, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0xccccbb, roughness: 0.95, metalness: 0.0 })
);
moonMesh.position.x = 3.2; // distance from Earth
moonPivot.add(moonMesh);

// ── Meteors (random streaks flying through space) ─────────
const METEOR_COUNT = 18;
const meteors = [];

for (let i = 0; i < METEOR_COUNT; i++) {
  // Each meteor: a stretched capsule-like line
  const length = 1.5 + Math.random() * 3.5;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0,0,0, length,0,0]), 3));
  const mat = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.0
  });
  const line = new THREE.Line(geo, mat);

  // Random starting position far out
  const resetMeteor = (m) => {
    m.line.position.set(
      (Math.random() - 0.5) * 120,
      20 + Math.random() * 30,
      (Math.random() - 0.5) * 120
    );
    // Direction: diagonal downward streak
    m.vx = -0.3 - Math.random() * 0.5;
    m.vy = -0.4 - Math.random() * 0.4;
    m.vz =  0.1 + Math.random() * 0.3;
    m.life = 0;
    m.maxLife = 40 + Math.random() * 60;
    m.line.material.opacity = 0;
  };

  scene.add(line);
  const meteor = { line, vx: 0, vy: 0, vz: 0, life: 0, maxLife: 60 };
  resetMeteor(meteor);
  // Stagger start times
  meteor.life = Math.random() * meteor.maxLife;
  meteors.push(meteor);
  meteor.reset = () => resetMeteor(meteor);
}

// ── Meteor Shower (burst of 40 parallel streaks) ──────────
const SHOWER_COUNT = 40;
const showerMeteors = [];
let showerActive = false;
let showerTimer = 0;
const SHOWER_INTERVAL = 900; // frames between showers

for (let i = 0; i < SHOWER_COUNT; i++) {
  const length = 2 + Math.random() * 4;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0,0,0, length,0,0]), 3));
  const mat = new THREE.LineBasicMaterial({
    color: new THREE.Color().setHSL(0.12 + Math.random() * 0.1, 0.9, 0.85),
    transparent: true,
    opacity: 0.0
  });
  const line = new THREE.Line(geo, mat);
  scene.add(line);

  const sm = {
    line,
    life: 0,
    maxLife: 30 + Math.random() * 40,
    active: false,
    vx: -0.55 - Math.random() * 0.2,
    vy: -0.5  - Math.random() * 0.2,
    vz:  0.15 + Math.random() * 0.15,
    delay: i * 3 // stagger each streak
  };
  showerMeteors.push(sm);
}

function triggerShower() {
  showerActive = true;
  showerMeteors.forEach((sm, i) => {
    sm.active = true;
    sm.life = -sm.delay;
    sm.line.position.set(
      30 + (Math.random() - 0.5) * 60,
      25 + Math.random() * 20,
      (Math.random() - 0.5) * 60
    );
    sm.line.material.opacity = 0;
  });
}


window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ── Scroll ────────────────────────────────────────────────
let scrollY = 0;
window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

// ── Section title reveal ──────────────────────────────────
const titleObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.section-title').forEach(t => titleObserver.observe(t));

// ── Animation loop ────────────────────────────────────────
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();

  // Sun corona pulse
  corona1.scale.setScalar(1 + Math.sin(t * 1.2) * 0.018);
  corona2.scale.setScalar(1 + Math.sin(t * 0.8 + 1) * 0.025);
  sunCore.rotation.y += 0.002;

  // Planets — 2x speed
  planets.forEach(({ pivot, mesh, speed }) => {
    mesh.rotation.y  += 0.008 * speed;   // 2x self-rotation
    pivot.rotation.y += speed * 0.0024;  // 2x orbital speed
  });

  // Earth clouds
  earthClouds.rotation.y += 0.0014;

  // Moon orbiting Earth
  moonPivot.rotation.y += 0.025;

  // ── Regular meteors ──────────────────────────────────────
  meteors.forEach(m => {
    m.life++;
    const progress = m.life / m.maxLife;

    if (progress < 0.2) {
      // Fade in
      m.line.material.opacity = (progress / 0.2) * 0.9;
    } else if (progress < 0.7) {
      m.line.material.opacity = 0.9;
    } else {
      // Fade out
      m.line.material.opacity = ((1 - progress) / 0.3) * 0.9;
    }

    m.line.position.x += m.vx;
    m.line.position.y += m.vy;
    m.line.position.z += m.vz;

    // Rotate streak to match direction
    m.line.rotation.z = Math.atan2(m.vy, m.vx);

    if (m.life >= m.maxLife) m.reset();
  });

  // ── Meteor shower ─────────────────────────────────────────
  showerTimer++;
  if (showerTimer >= SHOWER_INTERVAL && !showerActive) {
    triggerShower();
    showerTimer = 0;
  }

  if (showerActive) {
    let allDone = true;
    showerMeteors.forEach(sm => {
      if (!sm.active) return;
      sm.life++;
      if (sm.life < 0) return; // waiting for delay

      const progress = sm.life / sm.maxLife;
      allDone = false;

      if (progress < 0.25) {
        sm.line.material.opacity = (progress / 0.25);
      } else if (progress < 0.65) {
        sm.line.material.opacity = 1.0;
      } else {
        sm.line.material.opacity = ((1 - progress) / 0.35);
      }

      sm.line.position.x += sm.vx;
      sm.line.position.y += sm.vy;
      sm.line.position.z += sm.vz;
      sm.line.rotation.z  = Math.atan2(sm.vy, sm.vx);

      if (sm.life >= sm.maxLife) {
        sm.active = false;
        sm.line.material.opacity = 0;
      }
    });
    if (allDone) showerActive = false;
  }

  // Camera
  const scrollFactor = Math.min(scrollY * 0.001, 1.5);
  camera.position.x  = Math.sin(t * 0.05) * 2;
  camera.position.y  = 28 - scrollFactor * 8;
  camera.position.z  = 65 + scrollFactor * 12;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}

animate();