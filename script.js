// ============================================================
// T-Mat Global — script.js
// Three.js 3D Earth Scene
// ✅ Cleaned: removed duplicate IntersectionObserver
// ✅ Cleaned: removed dead #logo-orbit code
// ============================================================

const container = document.getElementById('canvas-container');
const scene     = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 3.5);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // cap at 2x for performance
container.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xea9401, 1.5);
sunLight.position.set(5, 3, 5);
scene.add(sunLight);

const backLight = new THREE.SpotLight(0xea9401, 1);
backLight.position.set(-5, 0, -5);
scene.add(backLight);

// Texture Loader
const textureLoader = new THREE.TextureLoader();

// Earth Group
const earthGroup = new THREE.Group();
scene.add(earthGroup);

// 1. Earth
const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
const earthMaterial = new THREE.MeshPhongMaterial({
  map:         textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'),
  specularMap: textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'),
  normalMap:   textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg'),
  specular:    new THREE.Color(0x333333),
  shininess:   15
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earthGroup.add(earth);

// 2. Clouds
const cloudGeometry = new THREE.SphereGeometry(1.02, 64, 64);
const cloudMaterial = new THREE.MeshPhongMaterial({
  map:         textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'),
  transparent: true,
  opacity:     0.8,
  blending:    THREE.AdditiveBlending,
  side:        THREE.DoubleSide
});
const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
earthGroup.add(clouds);

// 3. Atmosphere glow
const atmosGeometry = new THREE.SphereGeometry(1.1, 64, 64);
const atmosMaterial = new THREE.MeshBasicMaterial({
  color:       0xea9401,
  transparent: true,
  opacity:     0.1,
  blending:    THREE.AdditiveBlending,
  side:        THREE.BackSide
});
const atmosphere = new THREE.Mesh(atmosGeometry, atmosMaterial);
scene.add(atmosphere);

// 4. Stars
const starsGeometry = new THREE.BufferGeometry();
const starCount = 2000;
const starPos   = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i++) {
  starPos[i] = (Math.random() - 0.5) * 100;
}
starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
const starField     = new THREE.Points(starsGeometry, starsMaterial);
scene.add(starField);

// 5. Small planets
function createPlanet(size, color, distance, speed) {
  const geo  = new THREE.SphereGeometry(size, 32, 32);
  const mat  = new THREE.MeshStandardMaterial({ color });
  const mesh = new THREE.Mesh(geo, mat);
  const orbit = new THREE.Object3D();
  orbit.add(mesh);
  scene.add(orbit);
  mesh.position.x = distance;
  return { orbit, speed };
}

const planets = [
  createPlanet(0.05, 0xaaaaaa, 1.8, 0.5),
  createPlanet(0.08, 0xffcc00, 2.5, 0.3),
  createPlanet(0.06, 0xff5500, 3.2, 0.2),
];

// Resize handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Scroll
let scrollY = 0;
window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

// ✅ Section title reveal — ONLY for .section-title
// Mission cards handled in index.html unified script — NO conflict
const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section-title').forEach(title => {
  titleObserver.observe(title);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  earth.rotation.y  += 0.001;
  clouds.rotation.y += 0.0015;
  starField.rotation.y -= 0.0002;

  planets.forEach(p => {
    p.orbit.rotation.y += p.speed * 0.01;
  });

  // Scroll: camera moves up slightly
  camera.position.y = -scrollY * 0.002;

  renderer.render(scene, camera);
}

animate();