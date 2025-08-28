// Mapeamento das páginas e seus arquivos
const pages = [
    {
        id: '0-INICIO',
        desktopImg: 'Desktop/0-INICIO.jpg',
        mobileImg: 'Celular/1BEMVINDOCELULAR1.jpg',
        hasPlayer: false,
        hasNav: false,
        title: 'No More Chains - Início',
        content: `<div class="flex justify-center items-center h-full w-full">
                    <img src="Desktop/0-INICIO.jpg" class="max-w-xs md:max-w-md lg:max-w-xl" alt="Logo da página inicial" onerror="this.src='https://placehold.co/400x400/000000/6cff00?text=Logo+Não+encontrado'">
                  </div>`
    },
    {
        id: '1-COMA',
        desktopImg: 'Desktop/1-COMA.jpg',
        mobileImg: 'Celular/2COMACELULAR2.jpg',
        hasPlayer: true,
        hasNav: true,
        title: 'No More Chains - Coma',
        audio: 'MP3/coma.mp3',
        songTitle: 'COMA',
        content: `<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 page-text">
                    <div class="text-sm space-y-4">
                        <p>A liberdade começa quando se rejeita o molde. Nem todas as prisões têm grades, muitas têm padrões. Não há volta quando se sente o gosto de si mesmo.</p>
                        <p>Freedom begins when you reject the mold. Not all prisons have bars, many wear patterns. Once you taste yourself, there's no turning back.</p>
                    </div>
                    <div class="text-sm space-y-4">
                        <p>Your chances slipped away<br>Without knowing the cost<br>Tried day after day<br>Since was lost<br>So confused<br>By the new<br>Still I walk unafraid<br>Like a hole in the soul pulling through<br><br>Like a darkened room<br>Covering my eyes<br>Blinding my desire<br>Pouring in the fear<br><br>Keep me away<br>From the poison<br>Free from your mental cell</p>
                    </div>
                    <div class="lg:col-span-1 flex justify-center items-center">
                        <img src="Desktop/1-COMA.jpg" class="max-w-full h-auto" alt="Arte da música Coma" onerror="this.src='https://placehold.co/400x400/000000/6cff00?text=Imagem+Coma'">
                    </div>
                 </div>`
    },
    {
        id: '2-BORN-AGAIN',
        desktopImg: 'Desktop/2-BORN-AGAIN.jpg',
        mobileImg: 'Celular/3BORNAGAINCELULAR3.jpg',
        hasPlayer: true,
        hasNav: true,
        title: 'No More Chains - Born Again',
        audio: 'MP3/bornagain.mp3',
        songTitle: 'BORN AGAIN',
        content: `<div class="flex flex-col items-center justify-center text-center p-8 page-text">
                    <img src="Desktop/2-BORN-AGAIN.jpg" class="w-1/2 mb-8" alt="Arte da música Born Again" onerror="this.src='https://placehold.co/400x400/000000/6cff00?text=Imagem+Born+Again'">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <p>A luz vem me perseguindo<br>Pelas ruínas das minhas escolhas<br>Eu quero paz<br>Paz<br>Uma liberdade que eu nunca tive<br>Para me encontrar<br>Não há como voltar agora<br>Deixe-me ir para onde não há dor<br>Me liberte<br>E me leve para um lugar onde eu possa ver de novo</p>
                        <p>The light is chasing me<br>Through the ruins of my choices<br>I want peace<br>Peace<br>A freedom I've never had<br>To find myself<br>There's no going back now<br>Let me go where there's no pain<br>Set me free<br>And take me to a place where I can see again</p>
                    </div>
                </div>`
    },
    {
        id: '3-THE-VOICE',
        desktopImg: 'Desktop/3-THE-VOICE.jpg',
        mobileImg: 'Celular/4THEVOICECELLULAR4.jpg',
        hasPlayer: true,
        hasNav: true,
        title: 'No More Chains - The Voice',
        audio: 'MP3/voice.mp3',
        songTitle: 'THE VOICE',
        content: `<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 items-center page-text">
                    <div class="text-sm space-y-4">
                        <p>A voz ecoa e não para de me assombrar.<br>Eu tento fugir, mas não há saída. A minha visão está turva, eu não vejo nada...<br><br>The voice echoes and doesn't stop haunting me. I try to escape, but there's no way out. My vision is blurred, I see nothing...</p>
                    </div>
                    <div class="text-sm space-y-4">
                        <p>I am haunted by the voices from the past<br>A constant whisper, a painful echo that will last<br>I try to run, but they're always there<br>A heavy burden, a weight to bear<br><br>My vision's blurred, I cannot see<br>Lost in a fog of memories<br>A desperate plea, a silent cry<br>To break free from this painful lie</p>
                    </div>
                </div>`
    },
    {
        id: '4-NO-MORE-CHAINS',
        desktopImg: 'Desktop/4-NO-MORE-CHAINS.jpg',
        mobileImg: 'Celular/5NOMORECHAINSCELULARS.jpg',
        hasPlayer: true,
        hasNav: true,
        title: 'No More Chains - Sem Correntes',
        audio: 'MP3/nomorechains.mp3',
        songTitle: 'NO MORE CHAINS',
        content: `<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 items-center page-text">
                    <div class="text-sm space-y-4">
                        <p>No More Chains - A liberdade é o único caminho.<br><br>No More Chains - freedom is the only way.</p>
                    </div>
                    <div class="text-sm space-y-4">
                        <p>A liberdade começa quando se rejeita o molde. Não há volta quando se sente o gosto de si mesmo.</p>
                        <p>Freedom begins when you reject the mold. Once you taste yourself, there's no turning back.</p>
                    </div>
                 </div>`
    },
    {
        id: '5-SILENCE',
        desktopImg: 'Desktop/5-SILENCE.jpg',
        mobileImg: 'Celular/6SILENCECELULAR6.jpg',
        hasPlayer: true,
        hasNav: true,
        title: 'No More Chains - Silêncio',
        audio: 'MP3/silence.mp3',
        songTitle: 'SILENCE',
        content: `<div class="flex flex-col lg:flex-row justify-center items-center gap-8 p-8 page-text">
                    <img src="Desktop/5-SILENCE.jpg" class="max-w-full h-auto" alt="Imagem da música Silence" onerror="this.src='https://placehold.co/400x400/000000/6cff00?text=Imagem+Silence'">
                    <div class="text-sm space-y-4">
                        <p>Sometimes the silence hurts the most<br>A quiet prison, a lonely ghost<br>I long for noise, a comforting sound<br>To break the stillness, all around<br><br>The silence whispers, a chilling dread<br>Words unsaid, and hopes unread<br>In this vast emptiness, I'm all alone<br>A silent scream, a heart of stone</p>
                    </div>
                 </div>`
    },
    {
        id: '6-RELEASE',
        desktopImg: 'Desktop/6-release.jpg',
        mobileImg: 'Celular/7RELEASECELULAR7.jpg',
        hasPlayer: true,
        hasNav: true,
        title: 'No More Chains - Libertação',
        audio: 'MP3/nomorechains.mp3', // Usando a mesma música por falta de um arquivo específico
        songTitle: 'RELEASE',
        content: `<div class="flex flex-col lg:flex-row justify-center items-center gap-8 p-8 page-text">
                    <div class="text-sm space-y-4">
                        <p>Uma canção de liberdade, um hino de vitória<br>A alma em ascensão, a glória de sua história<br>Não há mais correntes para te prender<br>O céu é o limite, é hora de viver<br><br>An anthem of freedom, a hymn of victory<br>The soul is ascending, the glory of history<br>No more chains to hold you down<br>The sky is the limit, it's time to live now</p>
                    </div>
                    <img src="Desktop/6-release.jpg" class="max-w-full h-auto" alt="Imagem da música Release" onerror="this.src='https://placehold.co/400x400/000000/6cff00?text=Imagem+Release'">
                 </div>`
    },
    {
        id: '7-GALERIA-FOTOS',
        desktopImg: 'Desktop/7-GALERIA-FOTOS.jpg',
        mobileImg: 'Celular/8GALLERYCELULAR8.jpg',
        hasPlayer: false,
        hasNav: true,
        title: 'No More Chains - Galeria',
        content: `<div class="flex flex-col items-center p-8 page-text">
                    <h1 class="text-3xl text-green-500 mb-8">GALERIA DE FOTOS</h1>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                        <!-- As imagens serão carregadas dinamicamente -->
                        <img src="Desktop/7-GALERIA-FOTOS.jpg" alt="Galeria de fotos" class="w-full h-auto rounded-lg shadow-lg" onerror="this.src='https://placehold.co/400x400/000000/6cff00?text=Galeria+Fotos'">
                    </div>
                 </div>`
    },
    {
        id: '8-FUNDO-VIDEO',
        desktopImg: 'Desktop/8-FUNDO-VIDEO.jpg',
        mobileImg: 'Celular/9FUNDOCELULAR9.jpg',
        hasPlayer: true,
        hasNav: true,
        title: 'No More Chains - Vídeo',
        audio: 'MP3/voice.mp3', // Exemplo
        songTitle: 'FUNDO VÍDEO',
        content: `<div class="flex flex-col items-center justify-center h-full w-full p-8 page-text">
                    <h1 class="text-3xl text-green-500 mb-8">VÍDEO</h1>
                    <!-- Embed do vídeo aqui -->
                    <div class="relative w-full" style="padding-top: 56.25%;">
                        <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                    </div>
                 </div>`
    }
];

// Variáveis de controle
let currentPageIndex = 0;
const pageContent = document.getElementById('page-content');
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const progressbar = document.getElementById('progress-bar');
const audioContainer = document.getElementById('audio-container');
const navigationButtons = document.getElementById('navigation-buttons');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const songTitle = document.getElementById('song-title');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');

// Função para carregar uma página
const loadPage = (index) => {
    const page = pages[index];
    currentPageIndex = index;
    document.title = page.title;
    
    // Define o conteúdo da página
    pageContent.innerHTML = page.content;
    
    // Define a imagem de fundo com transição
    const backgroundImg = window.innerWidth <= 768 ? page.mobileImg : page.desktopImg;
    pageContent.style.backgroundImage = `url(${backgroundImg})`;
    
    // Lógica para o player de áudio
    if (page.hasPlayer && page.audio) {
        audioPlayer.src = page.audio;
        songTitle.textContent = page.songTitle;
        audioContainer.classList.remove('hidden');
        // Reset player
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    } else {
        audioContainer.classList.add('hidden');
    }

    // Lógica para os botões de navegação
    if (page.hasNav) {
        navigationButtons.classList.remove('hidden');
    } else {
        navigationButtons.classList.add('hidden');
    }

    // Atualiza o estado dos botões de navegação
    backBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === pages.length - 1;
    backBtn.style.opacity = backBtn.disabled ? '0.5' : '1';
    nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
};

// Evento de click para o botão play/pause
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        audioPlayer.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
});

// Evento para atualizar a barra de progresso
audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressbar.style.width = `${progress}%`;

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    if (audioPlayer.duration) {
        totalTimeEl.textContent = formatTime(audioPlayer.duration);
    }
});

// Navegação entre as páginas
backBtn.addEventListener('click', () => {
    if (currentPageIndex > 0) {
        loadPage(currentPageIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPageIndex < pages.length - 1) {
        loadPage(currentPageIndex + 1);
    }
});

// Carrega a primeira página ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    loadPage(0);
});

// Lidar com a redimensionamento da janela
window.addEventListener('resize', () => {
    loadPage(currentPageIndex);
});

// Adicionar função para carregar páginas via keyboard
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        if (currentPageIndex < pages.length - 1) {
            loadPage(currentPageIndex + 1);
        }
    } else if (e.key === 'ArrowLeft') {
        if (currentPageIndex > 0) {
            loadPage(currentPageIndex - 1);
        }
    }
});
