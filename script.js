const textos = [
  "✨ ¡Feliz Cumpleaños, Brujita! ✨",
  "🎂 Que este día sea mágico 🎂",
  "🌸 Disfruta cada momento 🌸",
  "💫 Eres una persona increíble 💫",
  "🎉 ¡Sigue brillando siempre! 🎉",
  "🌟 Hoy es tu día especial 🌟",
  "💖 Te queremos mucho 💖"
];
let indice = 0;
const textoElemento = document.getElementById('texto-slider');

document.getElementById('next').addEventListener('click', () => {
  indice = (indice + 1) % textos.length;
  textoElemento.textContent = textos[indice];
});
document.getElementById('prev').addEventListener('click', () => {
  indice = (indice - 1 + textos.length) % textos.length;
  textoElemento.textContent = textos[indice];
});