// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
//var lyricsData = [
// { text: "Don't go killing all my roses, 'cause I've only started growing", time: 6 },
// { text: "Oo don't go, rain on my parade, I'm just trying to have a good good midnight", time: 15 },
// { text: "Run, feel alive, feel my blood rushing through", time: 19 },
// { text: "My big dumb heart, it takes work, it takes a lot, but I keep", time: 25 },
// { text: "Singing, yesterday is dead to me, I feel the ground beneath my feet", time: 30 },
// { text: "I say", time: 35 },
// { text: "Oo don't go killing all my roses, 'cause I've only started growing", time: 41 },
// { text: "Oo don't go, rain on my parade, I'm just trying to have a good good morning", time: 52 },
// { text: "Star, wait on my third alarm, open all my window shades", time: 57 },
// { text: "Feel the sun in my face, birds are singing", time: 64 },
// { text: "Yesterday is dead to me, I feel the ground beneath my feet", time: 69 },
// { text: "When I say", time: 74 },
// { text: "Oo don't go killing all my roses, 'cause I've only started growing", time: 80 },
// { text: "Oo don't go, rain on my parade, I'm just trying to have a good good day", time: 90 },
// { text: "Oh, oh, oh, good good day", time: 95 },
// { text: "Oh, I take my roots until the crown, oh", time: 102 },
// { text: "You won't ever see me down, no, you won't ever cut me down", time: 107 },
// { text: "Mhm, I take my roots into the crown, oh", time: 112 },
// { text: "You won't ever see me down, no, you won't ever cut me down", time: 117 },
// { text: "When I say", time: 120 },
// { text: "Oo don't go killing all my roses, 'cause I've only started growing", time: 125 },
// { text: "Oo don't go, rain on my parade, I'm just trying to have a good good", time: 130 },
// { text: "I take my roots into the crown, oh", time: 137 },
// { text: "You won't ever see me down, no, you won't ever cut me down", time: 142 },
// { text: "I take my roots into the crown, no", time: 147 },
// { text: "You won't ever cut me down, no, you won't ever cut me down", time: 152 }
//];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);