// ===== Utilidades =====
const qs = (s, el = document) => el.querySelector(s);
const qsa = (s, el = document) => [...el.querySelectorAll(s)];
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

// ===== Navegação (scroll suave entre seções) =====
function scrollToSection(id) {
    const el = typeof id === 'string' ? qs(id) : id;
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', id);
}

// Delegação de cliques nos botões
document.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;

    // Evita abrir menu do botão direito nos players
    if (b.classList.contains('play')) e.preventDefault();

    const next = b?.dataset?.next;
    const prev = b?.dataset?.prev;
    const home = b?.dataset?.home;
    if (next) { scrollToSection(next); }
    if (prev) { scrollToSection(prev); }
    if (home) { scrollToSection(home); }
});

// ===== Player de áudio por seção =====
function formatTime(sec = 0) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function setupSectionPlayer(section) {
    const audio = qs('audio', section);
    if (!audio) return;

    const src = section.dataset.audio;
    if (src) audio.src = src;

    const player = qs('.player', section);
    const playBtn = qs('.play', section);
    const seek = qs('.seek', section);
    const tCur = qs('.current', section);
    const tDur = qs('.duration', section);

    // Evita "salvar como" no clique direito do áudio
    audio.addEventListener('contextmenu', (e) => e.preventDefault());
    section.addEventListener('contextmenu', (e) => {
        if (e.target.tagName.toLowerCase() === 'audio') e.preventDefault();
    });

    audio.addEventListener('loadedmetadata', () => {
        tDur.textContent = formatTime(audio.duration || 0);
    });

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            // Pausa outros áudios antes de tocar o atual
            qsa('audio').forEach(a => { if (a !== audio) a.pause(); });
            audio.play().catch(() => {});
            player.classList.add('paused');
        } else {
            audio.pause();
            player.classList.remove('paused');
        }
    });

    audio.addEventListener('timeupdate', () => {
        const pct = (audio.currentTime / (audio.duration || 1)) * 100;
        seek.value = pct || 0;
        tCur.textContent = formatTime(audio.currentTime || 0);
    });

    // Seek manual
    seek.addEventListener('input', () => {
        const pct = parseFloat(seek.value);
        audio.currentTime = (pct / 100) * (audio.duration || 0);
    });

    // Quando terminar, volta o botão para "play"
    audio.addEventListener('ended', () => {
        player.classList.remove('paused');
    });
}

// Inicializa todos os players de seções com áudio
qsa('.page-audio').forEach(setupSectionPlayer);

// ===== Pausa automática de players fora da viewport =====
const obs = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    const audio = qs('audio', target);
    const player = qs('.player', target);
    if (!audio) return;
    if (!isIntersecting) {
      audio.pause();
      player?.classList?.remove('paused');
    }
  });
}, { threshold: 0.2 });

qsa('.page').forEach(sec => obs.observe(sec));

// ===== Acesso direto por hash (#section-3) =====
window.addEventListener('load', () => {
  const id = location.hash || '#section-1';
  const el = qs(id);
  if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
});
