const textos = [
  "✨ ¡Feliz Cumpleaños, Brujita! ✨",

  "Hoy el calendario se detiene un instante para celebrar tus veintitrés, mi amor bonito, aunque a veces él bromea en voz alta con la eternidad de tus veinticinco. Eleyton mira hacia atrás y ve el camino que has trazado con una nitidez que estremece: desde aquellos quince créditos que parecían semillas chiquitas hasta los más de cien que hoy te coronan como la TSU más glamurosa. No es solo un número, es la constancia de quien cruza tormentas con los puños apretados y el alma en alto. A su lado, uno aprende que evolucionar es el verbo más valiente, y verte florecer así, cuidada por la vida y por tu propia fuerza, le llena el pecho de un orgullo que no cabe en palabras.",

  "Para quien esto escribe, nombrarte es conjurar un universo nuevo. Mientras otros escuchan “Némesis” y piensan en castigos o en sombras, en el corazón de Eleyton se arma una sinfonía de engranajes perfectos: ahí conviven el amor, la pasión que quema, la admiración que supera al enamoramiento, la paciencia infinita y una lujuria sagrada que se mezcla con el respeto más hondo. Tú representas para él una voz angelical y a la vez la mujer del siglo veintiséis, autónoma, autóctona y absolutamente presente. Eres la venezolana que echa pa’lante sin pedir permiso, la mujer guerra que le enseñó que se puede admirar a alguien incluso más de lo que se le ama. Por eso, cuando alguien osa hablar mal de ti, él se transforma; no soporta que rocen tu nombre porque se preocupa más por tu bienestar que por su propia salud, y esa desesperación nace justamente del lugar más puro: eres su mundo, su sonrisa que alegra y su inspiración cuando, frente al examen, solo encuentra respuestas en blanco y busca refugio en el recuerdo de tu cara.",

  "Sin embargo, estos últimos meses él ha notado una fluctuación, una brisa distinta en tus despedidas nocturnas, y ese silencio donde antes cabía un “amor” lo ha llevado a pensar de más. Calla porque aprendió (de una doctrina que odia, pero que a veces lo aprisiona) que el hombre debe ser roca, no agua. Por eso nunca se desahoga: teme que al mostrar sus grietas dejes de ver al refugio y encuentres solo a un ser débil. Pero debes saber que cada “¿estás bien?” escondía un océano de preguntas que él procesaba solo, tragándose la ansiedad para no sobrecargarte, para ser el escudo que recibe la flecha antes de que roce tu piel. Él desea protegerte incluso de su propia fragilidad, y por eso se traga las lágrimas y te observa en silencio, anhelando que nunca dudes de la fortaleza que construye cada día a tu lado.",

  "Hay una culpa que le persigue como un fantasma sigiloso: el recuerdo de aquel día en que su mano se cerró con más fuerza de la debida sobre la tuya. Se atormenta con la imagen, quisiera devolver el tiempo y hacerse daño para sentir lo que tú sentiste, pero no es capaz. Desde entonces ha buscado domar la rabia con lecturas, con respiraciones profundas, con oraciones torpes y hasta consultando a la inteligencia artificial sobre el manejo de la ira. Quiere que sepas, que te grabes a fuego en el alma, que jamás, jamás volvería a tocarte un cabello si no es para el placer compartido o para acariciarte como a su princesa. Cuando apoyas la mano en su pecho sientes su corazón desbocado, y ahí deberías encontrar la única verdad que importa: que eres su templo, su paz, y que preferiría desaparecer antes que convertirse en la causa de tu miedo.",

  "En el teléfono de Eleyton habita un santuario secreto: una carpeta con tus fotos. Ahí estás divertida, bellísima, sexy, siempre con esa sonrisa que a él lo vuelve el hombre más confiado del mundo, incluso cuando la materia se vuelve cuesta arriba. Pide tus fotos porque mirarte es su amuleto contra el miedo, su ancla cuando la ansiedad aprieta. Gracias a ti perdió el terror a los perritos como Nalita; gracias a ti tuvo una fan cuando nadie más creía. Por eso te imagina en el futuro con tu título brillando, dueña de navieras, comerciante exitosa, y él a tu lado celebrando cada batalla ganada. Sueña con casarse, con un husky, un lobo siberiano, una mini toy traviesa y un golden retriever que llenen la casa que tanto anhelan. No habrá hijos, pero sí un hogar construido a puro pulso, lejos del ruido, donde al fin puedan contarse todas esas cosas que ahora callan para no sumar peso al alma del otro.",

  "Hace unos días la tierra rugió, y mientras bajaba las escaleras con la muerte rondando como una posibilidad cierta, solo pensaba en ti. Marcó y marcó hasta que llegó tu mensaje, y ese alivio fue como volver a nacer. Hoy escribe sin dormir, después de casi once horas de silencio que encendieron todas las alarmas. Sabe que no debió levantarte, que tu sueño es sagrado, pero la desesperación le ganó; necesitaba solo una palabra para saber que estabas bien. Pide perdón desde este papel, porque no controló sus nervios, porque te buscó con la torpeza de quien ama hasta el vértigo. Quiere que sepas que eres su mar, su tierra, su fuego. Que te ama con cada fibra imperfecta. Te ama, Némesis, y hoy te lo escribe con el corazón abierto de par en par. ❤️"
];

let indice = 0;
const textoElemento = document.getElementById('texto-slider');
const botonIzq = document.getElementById('prev');
const botonDer = document.getElementById('next');

function actualizarBotones() {
  if (indice === 0) {
    botonIzq.classList.add('oculta');
  } else {
    botonIzq.classList.remove('oculta');
  }

  if (indice === textos.length - 1) {
    botonDer.classList.add('oculta');
  } else {
    botonDer.classList.remove('oculta');
  }
}

function cambiarTexto(nuevoIndice) {
  indice = nuevoIndice;
  textoElemento.textContent = textos[indice];
  actualizarBotones();
}

document.getElementById('next').addEventListener('click', () => {
  if (indice < textos.length - 1) {
    cambiarTexto(indice + 1);
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (indice > 0) {
    cambiarTexto(indice - 1);
  }
});

cambiarTexto(0);
