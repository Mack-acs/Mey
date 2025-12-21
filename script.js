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

Tu dulzura, tu fuerza y tu forma de ser
hacen que el mundo sea más bonito.

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
  "Porque tienes la sonrisa más hermosa que existe 😊", "Porque tu risa es contagiosa 😄", "Porque amo tu personalidad 🌟", "Porque me haces sentir segura 🏡", "Porque puedo ser yo misma contigo 💕", "Porque tienes un corazón enorme 💗", "Porque me escuchas de verdad 👂", "Porque eres fuerte 💪", "Porque tus abrazos son sinceros 🤗", "Porque eres valiente 🦁", "Porque eres increíblemente inteligente 🧠", "Porque llenas de luz la vida ✨", "Porque eres dulce ❤️", "Porque eres muy linda 🫂", "Porque eres creativa 🎨", "Porque nuestra amistad es sincera 👌", "Porque eres generosa 💝", "Porque me inspiras a ser mejor 🌱", "Porque tu presencia es un regalo 🎁", "Porque eres divertida 🎉", "Porque tienes una mente brillante 💡", "Porque eres empática 💓", "Porque tu presencia calma 🫶", "Porque recuerdas cosas importantes de mí 💬", "Porque tienes sueños hermosos 🌙", "Porque eres determinada 🎯", "Porque eres muy valiosa ☀️", "Porque eres cariñosa 🥰", "Porque me haces sentir especial ⭐", "Porque eres única en el mundo 🌍", "Porque verte feliz me alegra el corazón 😊", "Porque eres sincera 💯", "Porque motivas a todos 🚀", "Porque eres adorable 🦋", "Porque tienes talento para todo 🌟", "Porque eres una reina 👑", "Porque me das paz 🕊️", "Porque eres reflexiva 🤔", "Porque tienes un alma hermosa 💫", "Porque me gusta lo que compartes 📱", "Porque eres leal 💓", "Porque me gusta la emoción con la que hablas 🤗", "Porque eres resiliente 🌸", "Porque eres de confianza 🔐", "Porque eres apasionada 🔥", "Porque tienes un estilo único 👗", "Porque me haces feliz 😄", "Porque dices palabras bonitas ❤️", "Porque me entiendes 📚", "Porque eres sabia 🦉", "Porque celebras mis logros 🎊", "Porque brillas más que el sol ☀️", "Porque llenas de color cualquier lugar al que vayas 🌈", "Porque te alegras por mi felicidad 😊", "Porque los momentos compartidos contigo son hermosos ❤️", "Porque eres protectora 🛡️", "Porque me aceptas como soy 🤗", "Porque eres honesta 🎯", "Porque tienes iniciativa 💪", "Porque eres soñadora ☁️", "Porque me das buenos consejos 💡", "Porque siempre sacas sonrisas 🎭", "Porque tu bondad es natural ❤️", "Porque eres linda al expresarte 🗣️", "Porque me haces sentir comprendida 🤝", "Porque eres especial en todo sentido ✨", "Porque tienes una mirada linda 👁️", "Porque eres interesante 📖", "Porque me haces reír hasta llorar 😂", "Porque eres atenta 👀", "Porque tienes gustos geniales 🎵", "Porque eres amable con todos 🌻", "Porque me sorprendes siempre 🎁", "Porque eres humilde 🙏", "Porque tienes carisma 💫", "Porque eres encantadora 🌺", "Porque nunca minimizas lo que te cuentan 💓", "Porque eres transparente 💎", "Porque tienes un humor increíble 🤪", "Porque eres cálida ☀️", "Porque inspiras a crecer 🌱", "Porque eres excepcional 🏆", "Porque tienes una personalidad magnética 🧲", "Porque nunca te rindes 💪", "Porque me das confianza 🦋", "Porque eres auténtica sin filtros 📸", "Porque tienes una energía positiva ⚡", "Porque eres detallista 🎀", "Porque me haces sentir querida 🌟", "Porque eres hermosa siendo tú misma 💯", "Porque brillas en cualquier lugar ✨", "Porque eres inolvidable 💝", "Porque eres una amiga maravillosa 🫂", "Porque eres parte de mi vida 💕", "Porque tu amistad es un tesoro 💎", "Porque tu amistad no tiene condiciones 🫶", "Porque siempre estás presente de alguna forma 💓", "Porque me encanta tenerte en mi vida 🌸", "Porque simplemente... eres Mey 💗", "Y porque hay mil razones más que descubrir cada día 🌈"
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

let canvas, ctx, isDrawing = false, currentColor = '#ff1493', isEraser = false, isBucket = false;

function openDraw() {
  document.getElementById("drawModal").classList.add("show");
  if (!canvas) {
    canvas = document.getElementById("drawCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDraw);
    canvas.addEventListener("mouseout", stopDraw);
    canvas.addEventListener("touchstart", handleTouch);
    canvas.addEventListener("touchmove", handleTouch);
    canvas.addEventListener("touchend", stopDraw);
  }
}

function closeDraw() {
  document.getElementById("drawModal").classList.remove("show");
}

function changeColor(color, btn) {
  currentColor = color;
  isEraser = false;
  isBucket = false;
  document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.eraser-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function toggleEraser(btn) {
  isEraser = !isEraser;
  isBucket = false;
  document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.eraser-btn').forEach(b => b.classList.remove('active'));
  if (isEraser) btn.classList.add('active');
  else document.querySelector('.color-btn').classList.add('active');
}

function toggleBucket(btn) {
  isBucket = !isBucket;
  isEraser = false;
  isDrawing = false;
  document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.eraser-btn').forEach(b => b.classList.remove('active'));
  if (isBucket) btn.classList.add('active');
}

function startDraw(e) {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor(e.clientX - rect.left);
  const y = Math.floor(e.clientY - rect.top);
  if (isBucket) {
    floodFill(x, y, currentColor);
    return;
  }
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function draw(e) {
  if (!isDrawing) return;
  const rect = canvas.getBoundingClientRect();
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  if (isEraser) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 20;
  } else {
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 3;
  }
  ctx.lineCap = "round";
  ctx.stroke();
}

function stopDraw() {
  isDrawing = false;
}

function handleTouch(e) {
  e.preventDefault();
  const touch = e.touches[0];
  const mouseEvent = new MouseEvent(e.type === "touchstart" ? "mousedown" : "mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}

function floodFill(x, y, fillColor) {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;
  const targetColor = getColorAtPixel(data, x, y);
  const fill = hexToRgba(fillColor);
  if (colorsMatch(targetColor, fill)) return;
  const stack = [[x, y]];
  while (stack.length) {
    const [cx, cy] = stack.pop();
    if (cx < 0 || cy < 0 || cx >= canvas.width || cy >= canvas.height) continue;
    const idx = (cy * canvas.width + cx) * 4;
    if (!colorsMatch(getColorAtPixel(data, cx, cy), targetColor)) continue;
    data[idx] = fill[0];
    data[idx + 1] = fill[1];
    data[idx + 2] = fill[2];
    data[idx + 3] = 255;
    stack.push([cx + 1, cy]);
    stack.push([cx - 1, cy]);
    stack.push([cx, cy + 1]);
    stack.push([cx, cy - 1]);
  }
  ctx.putImageData(imgData, 0, 0);
}

function getColorAtPixel(data, x, y) {
  const i = (y * canvas.width + x) * 4;
  return [data[i], data[i + 1], data[i + 2], data[i + 3]];
}

function colorsMatch(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

function hexToRgba(hex) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255, 255];
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveDrawing() {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [canvas.width, canvas.height]
  });
  const imgData = canvas.toDataURL('image/png');
  pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
  pdf.save('mi-dibujo-para-mey.pdf');
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
  { text: "Y te diré algo más: no cambies, no dejes que ellos ganen.", book: "El mapa de los anhelos", author: "Allice Kellen" }
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