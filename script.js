// Crear corazones flotantes

function showPhrase(data){
  document.getElementById("phraseEmoji").textContent = data.emoji;
  document.getElementById("phraseText").textContent = data.phrase;
  document.getElementById("phraseModal").classList.add("show");
}

function closePhrase(){
  document.getElementById("phraseModal").classList.remove("show");
}

function closeWin(){
  document.getElementById("winModal").classList.remove("show");
}

for (let i = 0; i < 25; i++) {
  const b = document.createElement("div");
  b.className = "bubble";
  b.textContent = "○";
  b.style.left = Math.random() * 100 + "%";
  b.style.animationDelay = Math.random() * 10 + "s";
  document.body.appendChild(b);
}

const letter =
`Mey 💕
Este pequeño espacio es solo para recordarte
lo especial que eres.
Quise que fuera algo lindo pero con mi toque, 
así que lo programé especialmente para ti.
Tu dulzura y tu forma de ser hacen que esta 
amistad sea de lo más bonito.
Eres esa persona que ilumina los días grises,
que hace que todo tenga más sentido.
Gracias por existir y por ser exactamente
quien eres.

Te amo, preciosa💗`;

let typing = false;
const typedText = document.getElementById("typedText");

function openLetter() {
  document.getElementById("letterModal").classList.add("show");
  if (!typing) typeLetter();
}

function closeLetter() {
  document.getElementById("letterModal").classList.remove("show");
  typing = false;
}

function typeLetter() {
  typing = true;
  typedText.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    typedText.textContent += letter[i];
    i++;
    if (i >= letter.length) clearInterval(interval);
  }, 50);
}

const reasons = [
  "Porque tienes la sonrisa más hermosa que existe 😊", "Porque tu risa es contagiosa 😄", "Porque amo tu personalidad 🌟", "Porque me haces sentir segura 🏡", "Porque puedo ser yo misma contigo 💕", "Porque tienes un corazón enorme 💗", "Porque me escuchas de verdad 👂", "Porque eres fuerte 💪", "Porque tus abrazos son sinceros 🤗", "Porque eres valiente 🦁", "Porque eres increíblemente inteligente 🧠", "Porque llenas de luz la vida ✨", "Porque eres dulce ❤️", "Porque eres muy linda 🫂", "Porque eres creativa 🎨", "Porque nuestra amistad es sincera 👌", "Porque eres generosa 💝", "Porque me inspiras a ser mejor 🌱", "Porque tu presencia es un regalo 🎁", "Porque eres divertida 🎉", "Porque tienes una mente brillante 💡", "Porque eres empática 💓", "Porque tu presencia calma 🫶", "Porque recuerdas cosas importantes de mí 💬", "Porque tienes sueños hermosos 🌙", "Porque eres determinada 🎯", "Porque eres muy valiosa ☀️", "Porque eres cariñosa 🥰", "Porque me haces sentir especial ⭐", "Porque eres única en el mundo 🌍", "Porque verte feliz me alegra el corazón 😊", "Porque eres sincera 💯", "Porque motivas a todos 🚀", "Porque eres adorable 🦋", "Porque tienes talento para todo 🌟", "Porque eres una reina 👑", "Porque me das paz 🕊️", "Porque eres reflexiva 🤔", "Porque tienes un alma hermosa 💫", "Porque me gusta lo que compartes 📱", "Porque eres leal 💓", "Porque me gusta la emoción con la que hablas 🤗", "Porque eres resiliente 🌸", "Porque eres de confianza 🔐", "Porque eres apasionada 🔥", "Porque tienes un estilo único 👗", "Porque me haces feliz 😄", "Porque dices palabras bonitas ❤️", "Porque me entiendes 📚", "Porque eres sabia 🦉", "Porque celebras mis logros 🎊", "Porque brillas más que el sol ☀️", "Porque llenas de color cualquier lugar al que vayas 🌈", "Porque te alegras por mi felicidad 😊", "Porque los momentos compartidos contigo son hermosos ❤️", "Porque eres protectora 🛡️", "Porque me aceptas como soy 🤗", "Porque eres honesta 🎯", "Porque tienes iniciativa 💪", "Porque eres soñadora ☁️", "Porque me das buenos consejos 💡", "Porque siempre sacas sonrisas 🎭", "Porque tu bondad es natural ❤️", "Porque eres linda al expresarte 🗣️", "Porque me haces sentir comprendida 🤝", "Porque eres especial en todo sentido ✨", "Porque tienes una mirada linda 👁️", "Porque eres interesante 📖", "Porque tu esencia es hermosa 💗", "Porque eres atenta 👀", "Porque tienes gustos geniales 🎵", "Porque eres amable con todos 🌻", "Porque me sorprendes siempre 🎁", "Porque eres humilde 🙏", "Porque tienes carisma 💫", "Porque eres encantadora 🌺", "Porque nunca minimizas lo que te cuentan 💓", "Porque eres transparente 💎", "Porque tienes un humor increíble 🤪", "Porque eres cálida ☀️", "Porque inspiras a crecer 🌱", "Porque eres excepcional 🏆", "Porque tienes una personalidad magnética 🧲", "Porque nunca te rindes 💪", "Porque me das confianza 🦋", "Porque eres auténtica sin filtros 📸", "Porque tienes una energía positiva ⚡", "Porque eres detallista 🎀", "Porque me haces sentir querida 🌟", "Porque eres hermosa siendo tú misma 💯", "Porque brillas en cualquier lugar ✨", "Porque eres inolvidable 💝", "Porque eres una amiga maravillosa 🫂", "Porque eres parte de mi vida 💕", "Porque tu amistad es un tesoro 💎", "Porque tu amistad no tiene condiciones 🫶", "Porque siempre estás presente de alguna forma 💓", "Porque me encanta tenerte en mi vida 🌸", "Porque simplemente... eres Mey 💗", "Y porque hay mil razones más que descubrir cada día 🌈"
];

const reasonsList = document.getElementById("reasonsList");
let currentReasonIndex = 0;

reasons.forEach((r, i) => {
  const div = document.createElement("div");
  div.className = "reason-item";
  div.textContent = `${i + 1}. 💌 Haz clic para descubrir`;
  div.onclick = () => openReason(i);
  reasonsList.appendChild(div);
});

function openReason(index) {
  currentReasonIndex = index;
  updateReason();
  document.getElementById("reasonModal").classList.add("show");
}

function updateReason() {
  document.getElementById("reasonNumber").textContent = `Razón ${currentReasonIndex + 1} de ${reasons.length}`;
  document.getElementById("reasonText").textContent = reasons[currentReasonIndex];
}

function nextReason() {
  if (currentReasonIndex < reasons.length - 1) {
    currentReasonIndex++;
    updateReason();
  }
}

function prevReason() {
  if (currentReasonIndex > 0) {
    currentReasonIndex--;
    updateReason();
  }
}

function closeReason() {
  document.getElementById("reasonModal").classList.remove("show");
}

function openReasons() {
  document.getElementById("reasonsModal").classList.add("show");
}

function closeReasons() {
  document.getElementById("reasonsModal").classList.remove("show");
}

const memories = [
  { emoji:"🌸", phrase:"Eres tan bella como las flores" },
  { emoji:"🌺", phrase:"Eres admirable" },
  { emoji:"🌻", phrase:"Tu presencia levanta el ánimo de quienes te rodean" },
  { emoji:"🌷", phrase:"Muestras delicadeza y fuerza al mismo tiempo" },
  { emoji:"🌹", phrase:"Tu amistad es un tesoro" },
  { emoji:"💐", phrase:"Cada detalle tuyo me hace la vida más bonita" },
  { emoji:"🦋", phrase:"Aunque no intentes destacar, es imposible no notarte por tu belleza" },
  { emoji:"🌈", phrase:"Haces que todo tenga más color" },
  { emoji:"⭐", phrase:"Eres muy especial para mí" },
  { emoji:"✨", phrase:"Ser tu amiga se siente mágico" },
  { emoji:"💫", phrase:"Demuestras mucho cariño incluso a la distancia" },
  { emoji:"🌙", phrase:"Eres tan bonita como la luna" },
  { emoji:"☀️", phrase:"Tu sonrisa es como el sol que ilumina los días" },
  { emoji:"🌟", phrase:"Eres una estrella que nunca deja de brillar" },
  { emoji:"💖", phrase:"Tienes un corazón hermoso" },
  { emoji:"💝", phrase:"Tenerte en mi vida es un regalo" }
];

let cards = [];
let firstCard = null;
let lockBoard = false;
let matchedPairs = 0;

function openPhotos() {
  const gallery = document.getElementById("photoGallery");
  gallery.innerHTML = "";
  matchedPairs = 0;
  firstCard = null;
  lockBoard = false;
  cards = [...memories, ...memories].sort(() => Math.random() - 0.5);
  cards.forEach(mem => {
    const card = document.createElement("div");
    card.className = "memory-card";
    card.dataset.emoji = mem.emoji;
    card.dataset.phrase = mem.phrase;
    card.innerHTML = `
      <div class="memory-card-inner">
        <div class="memory-card-front">❔</div>
        <div class="memory-card-back">${mem.emoji}</div>
      </div>
    `;
    card.onclick = () => flipCard(card);
    gallery.appendChild(card);
  });
  document.getElementById("photosModal").classList.add("show");
}

function flipCard(card) {
  if (lockBoard || card.classList.contains("flipped")) return;
  card.classList.add("flipped");
  if (!firstCard) {
    firstCard = card;
    return;
  }
  if (firstCard.dataset.emoji === card.dataset.emoji) {
    document.getElementById("successSound").play();
    showPhrase(card.dataset);
    matchedPairs++;
    firstCard = null;
    if (matchedPairs === memories.length) {
      setTimeout(() => {
        document.getElementById("winModal").classList.add("show");
      }, 600);
    }
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      card.classList.remove("flipped");
      firstCard = null;
      lockBoard = false;
    }, 900);
  }
}

function closePhotos() {
  document.getElementById("photosModal").classList.remove("show");
}

const bookPhrases = [
  { text: "Los detalles son el reflejo de cada uno de nosotros, por eso no se puede reemplazar a nadie, porque todos estamos hechos de pequeños y preciosos detalles.", book: "El mapa de los anhelos", author: "Alice Kellen" },
  { text: "Ser fuerte no significa que seas de piedra. Todos pasamos malos momentos porque, nos guste o no la vida es así. La diferencia está en lo que hagas después. Puede que te derrumbes, pero sigues adelante a pesar de todo. Por eso eres fuerte. Más de lo que te imaginas.", book: "Hasta que nos quedemos sin estrellas", author: "Inma Rubiales" },
  { text: "Porque no hay nada más poderoso que ser un humano que ha luchado, que ha sobrevivido, que sabe cómo se siente y puede extender su mano a otros con una sonrisa y que puede asegurarles que sí se puede salir adelante, que ellos son prueba de ello.", book: "Sigue mi voz", author: "Ariana Godoy" },
  { text: "Era como el arte. Pocos logran entenderlo, pero quienes lo hicieron saben que nunca encontrarán a nadie que los haga sentir igual.", book: "El arte de ser nosotros", author: "Inma Rubiales" },
  { text: "El día que te des cuenta de lo valiosa que eres te comerás el mundo.", book: "La última nota", author: "Joana Marcus" },
  { text: "Y te diré algo más: no cambies, no dejes que ellos ganen.", book: "El mapa de los anhelos", author: "Alice Kellen" }
];

function openPlaylist() {
  const board = document.getElementById("phrasesBoard");
  board.innerHTML = "";
  bookPhrases.forEach(item => {
    const note = document.createElement("div");
    note.className = "postit";
    note.style.setProperty("--rot", `${Math.random() * 10 - 5}deg`);
    note.innerHTML = `
      <p style="margin-bottom:10px;">"${item.text}"</p>
      <small style="display:block; font-style:italic;">— ${item.book}</small>
      <small style="color:#7a6a00;">${item.author}</small>
    `;
    board.appendChild(note);
  });
  document.getElementById("playlistModal").classList.add("show");
}

function closePlaylist() {
  document.getElementById("playlistModal").classList.remove("show");
}

function openMessage() {
  const messages = [
    "Gracias por estar en mi vida 💫",
    "Eres de esas personas que hacen que la vida valga la pena 🌟",
    "Tu amistad es uno de mis tesoros más preciados 💎",
    "Cada día me siento afortunada de conocerte 🍀",
    "Eres increíble, no lo olvides nunca ✨"
  ];
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("specialMessage").textContent = randomMsg;
  document.getElementById("messageModal").classList.add("show");
}

function closeMessage() {
  document.getElementById("messageModal").classList.remove("show");
}


// DATOS DE LOS SOBRES
const envelopes = [
  { 
    title: "Cuando tengas miedo", 
    message: "Recuerda que no estás sola y que eres más fuerte de lo que crees. ✨" 
  },
  { 
    title: "Cuando estés triste", 
    message: "Permítete sentir. Todo pasa, incluso los días grises. Las lágrimas también son válidas y necesarias. 🌧️🌈" 
  },
  { 
    title: "Cuando dudes de ti", 
    message: "Recuerda que hay cosas hermosas en ti incluso cuando no las ves. Eres más increíble de lo que imaginas. 💎✨" 
  },
  { 
    title: "Cuando estés cansada", 
    message: "Descansar también es avanzar. No tienes que ser productiva todo el tiempo. Date permiso de pausar. 🌙💤" 
  },
  { 
    title: "Cuando te sientas sola", 
    message: "Piensa que hay alguien que te quiere mucho y que siempre estará ahí para ti, sin importar la distancia. 💕🫂" 
  },
  { 
    title: "Cuando todo salga bien", 
    message: "Celébralo sin culpa. Te lo mereces todo lo bueno que te pasa y mucho más. Disfruta cada victoria. 🎉⭐" 
  }
];

// ABRIR MODAL DE SOBRES
function openEnvelopes() {
  const grid = document.getElementById("envelopesGrid");
  grid.innerHTML = "";

  envelopes.forEach((item, index) => {
    const env = document.createElement("div");
    env.className = "envelope";
    env.dataset.index = index;
    
    env.innerHTML = `
      <div class="envelope-inner">
        <div class="envelope-front">
          <div class="envelope-flap"></div>
          <div class="envelope-front-face">
            <span>${item.title}</span>
          </div>
        </div>
        <div class="envelope-paper">
          <p>${item.message}</p>
        </div>
      </div>
    `;
    
    // Toggle al hacer clic
    env.onclick = (e) => {
      e.stopPropagation();
      toggleEnvelope(env);
    };
    
    grid.appendChild(env);
  });

  document.getElementById("envelopesModal").classList.add("show");
}

// ALTERNAR SOBRE (ABRIR/CERRAR)
function toggleEnvelope(envelopeElement) {
  // Si hay otros sobres abiertos, cerrarlos primero
  const allEnvelopes = document.querySelectorAll('.envelope');
  allEnvelopes.forEach(env => {
    if (env !== envelopeElement && env.classList.contains('open')) {
      env.classList.remove('open');
    }
  });
  
  // Toggle del sobre actual
  envelopeElement.classList.toggle('open');
}

// CERRAR MODAL DE SOBRES
function closeEnvelopes() {
  document.getElementById("envelopesModal").classList.remove("show");
  
  // Cerrar todos los sobres al cerrar el modal
  setTimeout(() => {
    const allEnvelopes = document.querySelectorAll('.envelope');
    allEnvelopes.forEach(env => env.classList.remove('open'));
  }, 300);
}