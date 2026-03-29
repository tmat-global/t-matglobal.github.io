// ================================================================
// T-Mat Global — script.js v5.1  CLEAN DIAMOND EDITION
// Improved performance + reduced visual noise + better mobile
// ================================================================

const container = document.getElementById('canvas-container');
if (!container) console.warn('canvas-container not found');

const scene = new THREE.Scene();
scene.background = null;

// ── Renderer ─────────────────────────────────────────────────
const renderer = new THREE.WebGLRenderer({ 
  antialias: true, 
  alpha: true,
  powerPreference: "high-performance"
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
if (container) container.appendChild(renderer.domElement);

// ── Camera ────────────────────────────────────────────────────
const camera = new THREE.PerspectiveCamera(
  42, window.innerWidth / window.innerHeight, 0.1, 2000
);
camera.position.set(0, 0, 6.5);
camera.lookAt(0, 0, 0);

// ── Sun position (far off-screen left) ───────────────────────
const SUN_X = -85, SUN_Y = 12, SUN_Z = 0;

// ── Lighting ──────────────────────────────────────────────────
const sunPt = new THREE.PointLight(0xfff5e0, 3.8, 500);  // Slightly softer
sunPt.position.set(SUN_X, SUN_Y, SUN_Z);
scene.add(sunPt);

const dirSun = new THREE.DirectionalLight(0xffeedd, 1.8);
dirSun.position.set(-8, 2, 3);
scene.add(dirSun);

const fillLight = new THREE.DirectionalLight(0x0a1a33, 0.35);
fillLight.position.set(8, -2, -4);
scene.add(fillLight);

scene.add(new THREE.AmbientLight(0x05080f, 0.85));

// ── Texture Loader ────────────────────────────────────────────
const TL = new THREE.TextureLoader();

// ── Stars — 20,000 colored (kept but optimized) ───────────────
(function buildStars() {
  const N = 20000;
  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const r  = 300 + Math.random() * 1200;
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    pos[i*3]   = r * Math.sin(ph) * Math.cos(th);
    pos[i*3+1] = r * Math.sin(ph) * Math.sin(th);
    pos[i*3+2] = r * Math.cos(ph);
    const t = Math.random();
    if (t < 0.70)      { col[i*3]=0.90; col[i*3+1]=0.94; col[i*3+2]=1.00; }
    else if (t < 0.90) { col[i*3]=1.00; col[i*3+1]=0.98; col[i*3+2]=0.90; }
    else               { col[i*3]=1.00; col[i*3+1]=0.82; col[i*3+2]=0.48; }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
  scene.add(new THREE.Points(geo, new THREE.PointsMaterial({
    size: 0.18, 
    vertexColors: true,
    transparent: true, 
    opacity: 0.75, 
    sizeAttenuation: true
  })));
})();

// ── Earth Group ───────────────────────────────────────────────
const earthGroup = new THREE.Group();
earthGroup.position.set(1.5, 0, 0);
earthGroup.rotation.z = THREE.MathUtils.degToRad(23.5);
scene.add(earthGroup);

const EARTH_R = 1.85;

// Earth surface
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(EARTH_R, 96, 96),
  new THREE.MeshPhongMaterial({
    map:         TL.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'),
    specularMap: TL.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'),
    normalMap:   TL.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg'),
    specular:    new THREE.Color(0x1a55aa),
    shininess:   35,
    normalScale: new THREE.Vector2(0.85, 0.85)
  })
);
earthGroup.add(earth);

// Clouds (slightly softer)
const clouds = new THREE.Mesh(
  new THREE.SphereGeometry(EARTH_R * 1.018, 64, 64),
  new THREE.MeshPhongMaterial({
    map:         TL.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'),
    transparent: true, 
    opacity: 0.55,
    side: THREE.DoubleSide, 
    depthWrite: false
  })
);
earthGroup.add(clouds);

// Atmosphere (reduced intensity)
const atmosInner = new THREE.Mesh(
  new THREE.SphereGeometry(EARTH_R * 1.07, 48, 48),
  new THREE.MeshBasicMaterial({
    color: 0x2255cc, 
    transparent: true, 
    opacity: 0.08,
    side: THREE.BackSide, 
    depthWrite: false
  })
);
earthGroup.add(atmosInner);

// ── Moon ──────────────────────────────────────────────────────
const moonPivot = new THREE.Object3D();
earthGroup.add(moonPivot);
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(EARTH_R * 0.27, 32, 32),
  new THREE.MeshStandardMaterial({ 
    color: 0xbbbbaa, 
    roughness: 0.93, 
    metalness: 0.01 
  })
);
moon.position.x = EARTH_R * 2.9;
moonPivot.add(moon);

// ── Planet factory ────────────────────────────────────────────
function makePlanet({ size, color, emissive, roughness, dist, speed, rings, ringColor, tilt, startAngle }) {
  const pts = [];
  for (let i = 0; i <= 200; i++) {
    const a = (i / 200) * Math.PI * 2;
    pts.push(new THREE.Vector3(SUN_X + Math.cos(a) * dist, 0, Math.sin(a) * dist));
  }
  scene.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.LineBasicMaterial({ color: 0x1a2a3a, transparent: true, opacity: 0.18 })
  ));

  const pivot = new THREE.Object3D();
  pivot.position.set(SUN_X, SUN_Y, SUN_Z);
  pivot.rotation.y = startAngle || 0;
  scene.add(pivot);

  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(size, 40, 40),
    new THREE.MeshStandardMaterial({
      color:     new THREE.Color(color),
      emissive:  new THREE.Color(emissive || '#000000'),
      emissiveIntensity: 0.06,
      roughness: roughness !== undefined ? roughness : 0.82,
      metalness: 0.04
    })
  );
  mesh.position.x = dist;
  if (tilt) mesh.rotation.z = tilt;
  pivot.add(mesh);

  if (rings) {
    const ringData = [
      { inner: 1.38, outer: 1.95, color: ringColor || 0xc8a855, opacity: 0.58 },
      { inner: 1.95, outer: 2.45, color: 0x9a7830, opacity: 0.25 }
    ];
    ringData.forEach(r => {
      const rg = new THREE.Mesh(
        new THREE.RingGeometry(size * r.inner, size * r.outer, 80),
        new THREE.MeshBasicMaterial({ 
          color: r.color, 
          transparent: true, 
          opacity: r.opacity, 
          side: THREE.DoubleSide 
        })
      );
      rg.rotation.x = Math.PI / 2.2;
      mesh.add(rg);
    });
  }

  return { pivot, mesh, speed };
}

// ── Planets ───────────────────────────────────────────────────
const AU = 85;

const planets = [
  makePlanet({ size:0.10, color:'#8a7a70',                     dist:AU*0.387, speed:0.0130, roughness:0.92, startAngle:0.80 }),
  makePlanet({ size:0.18, color:'#e8d880', emissive:'#2a1800', dist:AU*0.723, speed:0.0096, roughness:0.55, startAngle:2.10 }),
  makePlanet({ size:0.14, color:'#c1440e', emissive:'#200800', dist:AU*1.524, speed:0.0062, roughness:0.88, startAngle:4.50 }),
  makePlanet({ size:0.55, color:'#c8894a', emissive:'#150800', dist:AU*2.500, speed:0.0038, roughness:0.70, startAngle:1.20 }),
  makePlanet({ size:0.45, color:'#e4d080', emissive:'#1a1200', dist:AU*3.200, speed:0.0026, roughness:0.75, rings:true, ringColor:0xc8a855, tilt:0.47, startAngle:3.80 }),
  makePlanet({ size:0.30, color:'#7adede', emissive:'#002828', dist:AU*4.000, speed:0.0017, roughness:0.45, tilt:1.57, startAngle:5.20 }),
  makePlanet({ size:0.28, color:'#2244cc', emissive:'#000818', dist:AU*4.850, speed:0.0012, roughness:0.60, startAngle:0.30 })
];

// ── Meteors (reduced number and intensity) ───────────────────
const meteors = [];
function spawnMeteor() {
  const len = 1.2 + Math.random() * 2.5;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0,0,0,len,0,0]), 3));
  const mat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
  const line = new THREE.Line(geo, mat);

  const reset = () => {
    line.position.set(
      (Math.random() - 0.2) * 14,
      2.5 + Math.random() * 4,
      (Math.random() - 0.5) * 4
    );
    line._vx = -0.035 - Math.random() * 0.045;
    line._vy = -0.025 - Math.random() * 0.035;
    line._vz =  0.006 + Math.random() * 0.014;
    line._life    = 0;
    line._maxLife = 60 + Math.random() * 90;
    line.material.opacity = 0;
    line.rotation.z = Math.atan2(line._vy, line._vx);
  };

  reset();
  line._life = Math.random() * 100;
  line._resetFn = reset;
  scene.add(line);
  meteors.push(line);
}
for (let i = 0; i < 12; i++) spawnMeteor();   // Reduced from 20

// ── Mouse / touch parallax ────────────────────────────────────
let tRotX = 0, tRotY = 0, cRotX = 0, cRotY = 0;
document.addEventListener('mousemove', e => {
  tRotY = (e.clientX / window.innerWidth  - 0.5) *  0.18;
  tRotX = (e.clientY / window.innerHeight - 0.5) * -0.09;
});
document.addEventListener('touchmove', e => {
  if (!e.touches[0]) return;
  tRotY = (e.touches[0].clientX / window.innerWidth  - 0.5) *  0.13;
  tRotX = (e.touches[0].clientY / window.innerHeight - 0.5) * -0.06;
}, { passive: true });

// ── Responsive layout ─────────────────────────────────────────
function updateLayout() {
  const w = window.innerWidth;
  if (w < 600) {
    earthGroup.position.x = 0;
    camera.fov = 52;
  } else if (w < 900) {
    earthGroup.position.x = 0.8;
    camera.fov = 47;
  } else if (w < 1200) {
    earthGroup.position.x = 1.4;
    camera.fov = 44;
  } else {
    earthGroup.position.x = 1.65;
    camera.fov = 42;
  }
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', updateLayout);
updateLayout();

// ── Scroll ────────────────────────────────────────────────────
let scrollY = 0;
window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

// ── Section title reveal ──────────────────────────────────────
const titleObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.section-title').forEach(t => titleObserver.observe(t));

// ── Animation loop ────────────────────────────────────────────
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();

  // Smooth mouse lerp
  cRotX += (tRotX - cRotX) * 0.045;
  cRotY += (tRotY - cRotY) * 0.045;

  // Earth rotation
  earth.rotation.y  += 0.0011;
  clouds.rotation.y += 0.0015;

  // Moon
  moonPivot.rotation.y += 0.016;

  // Gentle bob
  const baseY = window.innerWidth < 600 ? -0.15 : 0;
  earthGroup.position.y = baseY + Math.sin(elapsed * 0.35) * 0.05;

  // Planets
  planets.forEach(({ pivot, mesh, speed }) => {
    pivot.rotation.y += speed;
    mesh.rotation.y  += speed * 4;
  });

  // Meteors (softer)
  meteors.forEach(m => {
    m._life++;
    const p = m._life / m._maxLife;
    m.material.opacity = Math.max(0, Math.min(0.75, p < 0.2 ? p*3.5 : (1-p)*3.5));
    m.position.x += m._vx;
    m.position.y += m._vy;
    m.position.z += m._vz;
    if (m._life >= m._maxLife) m._resetFn();
  });

  // Camera movement
  const baseZ = window.innerWidth < 600 ? 7.5 : window.innerWidth < 900 ? 7.0 : 6.5;
  const scrollPull = Math.min(scrollY * 0.00022, 0.55);

  camera.position.x = Math.sin(elapsed * 0.035) * 0.08 + cRotY * 0.22;
  camera.position.y = Math.cos(elapsed * 0.028) * 0.04 + cRotX * 0.22;
  camera.position.z = baseZ + scrollPull;
  camera.lookAt(earthGroup.position.x * 0.22, 0, 0);

  renderer.render(scene, camera);
}

animate();