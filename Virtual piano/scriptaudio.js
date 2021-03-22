document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyD') {
    soundClickDO();
  }
  if (event.code == 'KeyR') {
    soundClickDO();
  }
  if (event.code == 'KeyF') {
    soundClickRE();
  }
  if (event.code == 'KeyT') {
    soundClickRE();
  }
  if (event.code == 'KeyG') {
    soundClickMI();
  }
  if (event.code == 'KeyH') {
    soundClickFA();
  }
  if (event.code == 'KeyU') {
    soundClickFA();
  }
  if (event.code == 'KeyJ') {
    soundClickSOL();
  }
  if (event.code == 'KeyI') {
    soundClickSOL();
  }
  if (event.code == 'KeyK') {
    soundClickLJA();
  }
  if (event.code == 'KeyO') {
    soundClickLJA();
  }
  if (event.code == 'KeyL') {
    soundClickSI();
  }
});

function full(){
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
} else {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
}

function soundClickDO() {
  var audio = new Audio();
  audio.src = "audio/do.mp3";
  audio.autoplay = true; 
}

function soundClickRE() {
  var audio = new Audio();
  audio.src = "audio/re.mp3";
  audio.autoplay = true;
}

function soundClickMI() {
  var audio = new Audio();
  audio.src = "audio/mi.mp3";
  audio.autoplay = true;
}

function soundClickFA() {
  var audio = new Audio();
  audio.src = "audio/fa.mp3";
  audio.autoplay = true;
}

function soundClickSOL() {
  var audio = new Audio();
  audio.src = "audio/sol.mp3";
  audio.autoplay = true;
}

function soundClickLJA() {
  var audio = new Audio();
  audio.src = "audio/lja.mp3";
  audio.autoplay = true;
}

function soundClickSI() {
  var audio = new Audio();
  audio.src = "audio/si.mp3";
  audio.autoplay = true;
}