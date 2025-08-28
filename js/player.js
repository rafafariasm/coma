
function qs(sel, el=document){ return el.querySelector(sel); }
function qsa(sel, el=document){ return Array.from(el.querySelectorAll(sel)); }

function formatTime(s){
  if(isNaN(s) || !isFinite(s)) return "0:00";
  const m = Math.floor(s/60);
  const r = Math.floor(s%60);
  return `${m}:${r.toString().padStart(2,'0')}`;
}

function initPlayer(scope=document){
  const wrapper = qs('.player', scope);
  if(!wrapper) return;
  const audio = new Audio();
  const src = wrapper.dataset.src;
  if(!src){ wrapper.classList.add('hidden'); return; }
  audio.src = src;
  audio.preload = "metadata";

  const playBtn = qs('.play-btn', scope);
  const bar = qs('.bar', scope);
  const fill = qs('.fill', bar);
  const time = qs('.time', scope);

  const playIcon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 5v14l12-7L7 5Z" stroke="currentColor" stroke-width="2"/></svg>`;
  const pauseIcon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 5h4v14H7zM13 5h4v14h-4z" stroke="currentColor" stroke-width="2"/></svg>`;
  playBtn.innerHTML = playIcon;

  let dragging = false;

  playBtn.addEventListener('click', ()=>{
    if(audio.paused){ audio.play(); } else { audio.pause(); }
  });
  audio.addEventListener('play', ()=> playBtn.innerHTML = pauseIcon);
  audio.addEventListener('pause', ()=> playBtn.innerHTML = playIcon);

  audio.addEventListener('timeupdate', ()=>{
    if(!dragging){
      const p = (audio.currentTime / (audio.duration||1))*100;
      fill.style.inset = `0 ${100-p}% 0 0`;
      time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    }
  });
  audio.addEventListener('loadedmetadata', ()=>{
    time.textContent = `0:00 / ${formatTime(audio.duration)}`;
  });

  function seek(e){
    const rect = bar.getBoundingClientRect();
    const x = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
    const ratio = x / rect.width;
    fill.style.inset = `0 ${100-(ratio*100)}% 0 0`;
    audio.currentTime = ratio * (audio.duration || 0);
  }
  bar.addEventListener('pointerdown', (e)=>{
    dragging = true; seek(e);
    window.addEventListener('pointermove', seek);
    window.addEventListener('pointerup', ()=>{
      dragging = false;
      window.removeEventListener('pointermove', seek);
    }, {once:true});
  });
}

function applyBackgrounds(){
  const page = document.querySelector('.page');
  if(!page) return;
  const mobile = page.dataset.bgMobile || "";
  const desktop = page.dataset.bgDesktop || mobile || "";
  page.style.setProperty('--bg-mobile', `url('${mobile}')`);
  page.style.setProperty('--bg-desktop', `url('${desktop}')`);
}

document.addEventListener('DOMContentLoaded', ()=>{
  applyBackgrounds();
  initPlayer(document);
});
