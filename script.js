const nv = document.querySelector(".hero>nav"), sc = () => nv.classList.toggle("scrolled", scrollY > 10); addEventListener("scroll", sc, { passive: true }); sc();
const T = ["You can browse available flights or select the date, departing place and arrival to look up flights.", "Ship your slop fast and safely with our reliable fleet and experienced aviation team.", "Discover unforgettable halucinated flights with custom routes and experiences."];
const images = ["s_pic_1.png","s_pic_2.png", "s_pic_3.png"]
document.querySelectorAll('.tab').forEach(b => b.onclick = () => {document.querySelectorAll('.tab').forEach(x => x.classList.remove('on')); b.classList.add('on'); document.getElementById('tabtext').textContent = T[b.dataset.k]; document.getElementById('tabimage').src = images[b.dataset.k] });
document.getElementById('f').addEventListener('submit', e => { e.preventDefault(); document.getElementById('msg').textContent = 'Thank you! We will NOT contact you.'; e.target.reset() });
document.querySelector('.why .btn').onclick = () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
