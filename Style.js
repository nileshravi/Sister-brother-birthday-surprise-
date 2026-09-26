document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     GET ALL SCREENS
     ========================================= */

  const screens = {
    question: document.getElementById("questionScreen"),
    birthday: document.getElementById("birthdayScreen"),
    cake: document.getElementById("cakeScreen"),
    envelope: document.getElementById("envelopeScreen"),
    memories: document.getElementById("memoriesScreen"),
    letterEnvelope: document.getElementById("letterEnvelopeScreen"),
    letter: document.getElementById("letterScreen"),
    final: document.getElementById("finalScreen")
  };


  /* =========================================
     SCREEN CONTROLLER
     ========================================= */

  function showScreen(screen) {

    Object.values(screens).forEach((item) => {
      if (item) {
        item.classList.add("hidden");
      }
    });

    if (screen) {
      screen.classList.remove("hidden");

      setTimeout(() => {
        screen.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    }
  }


  /* =========================================
     YES / NO
     ========================================= */

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  const questionEmoji = document.getElementById("questionEmoji");
  const questionTitle = document.getElementById("questionTitle");
  const questionText = document.getElementById("questionText");

  if (yesBtn) {

    yesBtn.addEventListener("click", () => {
       const introMusic = document.getElementById("introMusic");

      if (introMusic) {
         introMusic.volume = 0.25;
         introMusic.play().catch(() => {});
       }
       if (noReactionTimer) {
         clearTimeout(noReactionTimer);
       }

      questionEmoji.innerHTML = "🤩🎉🥳";
      questionTitle.innerHTML = "YAYYYYY!!! 😍✨";

      questionText.innerHTML =
        "I knew you would say YES! 🥹💖<br>" +
        "Get ready for something really special... 🎁✨";

      yesBtn.style.display = "none";

      if (noBtn) {
        noBtn.style.display = "none";
      }

      launchConfetti();

      setTimeout(() => {
        showScreen(screens.birthday);
      }, 2300);

    });

  }

  let noReactionTimer;
  if (noBtn) {

    noBtn.addEventListener("click", () => {

      questionEmoji.innerHTML = "😤💢";

      questionTitle.innerHTML =
        "EXCUSE ME?! 😤";

      questionText.innerHTML =
        "Itni mehnat se surprise banaya hai<br>" +
        "aur tum NO bol rahe ho?! 😒💢";

      noBtn.innerHTML =
        "NO... Sorry 😭";

      noReactionTimer = setTimeout(() => {

        questionEmoji.innerHTML = "😠👉";

        questionTitle.innerHTML =
          "Ab YES dabao! 😤";

        questionText.innerHTML =
          "Warna surprise dekhne nahi milega! 😒🎁";

      }, 1800);

    });

  }


  /* =========================================
     BIRTHDAY → CAKE
     ========================================= */

  const startCakeBtn =
    document.getElementById("startCakeBtn");

  if (startCakeBtn) {

    startCakeBtn.addEventListener("click", () => {

      showScreen(screens.cake);

    });

  }


/* =========================================
   CAKE CUTTING
   ========================================= */

const cutCakeBtn =
  document.getElementById("cutCakeBtn");

const cake =
  document.getElementById("cake");

const cakeStatus =
  document.getElementById("cakeStatus");

const continueAfterCake =
  document.getElementById("continueAfterCake");

const leftCake =
  document.querySelector(".cake-left");

const rightCake =
  document.querySelector(".cake-right");

const knife =
  document.getElementById("knife");

if (cutCakeBtn) {

  cutCakeBtn.addEventListener("click", () => {

    cutCakeBtn.disabled = true;
    cutCakeBtn.style.opacity = "0.5";

    if (cakeStatus) {
      cakeStatus.innerHTML =
        "Cutting the cake... 🔪🎂";
    }

    /* 🔪 KNIFE GOES DOWN */
    if (knife) {

      knife.animate(
        [
          {
            transform:
              "translateX(-50%) translateY(-15px) rotate(-18deg)"
          },
          {
            transform:
              "translateX(-50%) translateY(20px) rotate(-8deg)"
          },
          {
            transform:
              "translateX(-50%) translateY(75px) rotate(5deg)"
          }
        ],
        {
          duration: 1200,
          easing: "ease-in-out",
          fill: "forwards"
        }
      );

    }

    /* 🎂 CAKE SPLIT — AFTER KNIFE */
    setTimeout(() => {

      if (leftCake) {

        leftCake.animate(
          [
            {
              transform: "translateX(0)"
            },
            {
              transform: "translateX(-12px)"
            },
            {
              transform: "translateX(-45px) rotate(-3deg)"
            }
          ],
          {
            duration: 1000,
            easing: "ease-out",
            fill: "forwards"
          }
        );

      }

      if (rightCake) {

        rightCake.animate(
          [
            {
              transform: "translateX(0)"
            },
            {
              transform: "translateX(12px)"
            },
            {
              transform: "translateX(45px) rotate(3deg)"
            }
          ],
          {
            duration: 1000,
            easing: "ease-out",
            fill: "forwards"
          }
        );

      }

    }, 1100);

    /* 🎉 CELEBRATION */
    setTimeout(() => {

      if (cakeStatus) {
        cakeStatus.innerHTML =
          "YAYYYYY!!! 🎂🥳 Happy Birthday! ✨";
      }

      createBirthdayBalloons();
      createCakeConfetti();

    }, 2200);

    /* 💌 NEXT BUTTON */
    setTimeout(() => {

      if (continueAfterCake) {
        continueAfterCake.classList.remove("hidden");
      }

    }, 2800);

  });

}


/* =========================================
   CAKE → SMALL ENVELOPE
   ========================================= */

if (continueAfterCake) {

  continueAfterCake.addEventListener("click", () => {

    showScreen(screens.envelope);

  });

}


  /* =========================================
   SMALL PINK ENVELOPE
   ========================================= */

const smallEnvelope =
  document.getElementById("smallEnvelope");

const openEnvelopeBtn =
  document.getElementById("openEnvelopeBtn");

const smallMessage =
  document.getElementById("smallMessage");

const memoriesBtn =
  document.getElementById("memoriesBtn");


/* 💌 OPEN ENVELOPE */

if (openEnvelopeBtn && smallEnvelope) {

  openEnvelopeBtn.addEventListener("click", () => {

    smallEnvelope.classList.add("open");

    openEnvelopeBtn.style.display = "none";

    setTimeout(() => {

      if (smallMessage) {
        smallMessage.classList.remove("hidden");
      }

    }, 1000);

  });

}


/* 📸 GO TO MEMORIES */

if (memoriesBtn) {

  memoriesBtn.addEventListener("click", () => {

    showScreen(screens.memories);

  });

}


/* =========================================
   MEMORIES — FINAL PHOTO SWITCH SYSTEM
   ========================================= */

const memorySlides =
  document.querySelectorAll(".memory-slide");

const nextMemoryBtn =
  document.getElementById("nextMemoryBtn");

let currentMemory = 0;


/* SHOW ONE PHOTO ONLY */

function showMemory(index) {

  memorySlides.forEach((slide, i) => {

    if (i === index) {

      slide.style.display = "block";
      slide.style.opacity = "1";

    } else {

      slide.style.display = "none";

    }

  });

}


/* FIRST PHOTO */

if (memorySlides.length > 0) {

  showMemory(0);

}


/* NEXT BUTTON */

if (nextMemoryBtn) {

  nextMemoryBtn.addEventListener("click", function () {

    console.log("NEXT MEMORY CLICKED");

    if (
      currentMemory <
      memorySlides.length - 1
    ) {

      currentMemory++;

      showMemory(currentMemory);


      if (
        currentMemory ===
        memorySlides.length - 1
      ) {

        nextMemoryBtn.textContent =
          "Open One Last Surprise 💌";

      } else {

        nextMemoryBtn.textContent =
          "Next Memory → ✨";

      }

      window.scrollTo({
        top: memorySlides[currentMemory].offsetTop - 100,
        behavior: "smooth"
      });

    } else {

      /* PHOTO 8 KE BAAD */

      showScreen(
        document.getElementById(
          "letterEnvelopeScreen"
        )
      );

    }

  });

}
  /* =========================================
     BIG ENVELOPE
     ========================================= */

  const bigEnvelope =
    document.getElementById("bigEnvelope");

  const openBigLetterBtn =
    document.getElementById("openBigLetterBtn");


  if (openBigLetterBtn && bigEnvelope) {

    openBigLetterBtn.addEventListener("click", () => {

      bigEnvelope.classList.add("open");

      openBigLetterBtn.style.display = "none";

      setTimeout(() => {

        showScreen(screens.letter);

      }, 1300);

    });

  }


  /* =========================================
     LETTER → FINAL
     ========================================= */

  const finishLetterBtn =
  document.getElementById("finishLetterBtn");

if (finishLetterBtn) {

  finishLetterBtn.addEventListener("click", function () {

    const letterScreen =
      document.getElementById("letterScreen");

    const finalScreen =
      document.getElementById("finalScreen");

    if (letterScreen) {
      letterScreen.classList.add("hidden");
    }

    if (finalScreen) {
      finalScreen.classList.remove("hidden");
      finalScreen.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    setTimeout(function () {

      if (typeof launchFinalConfetti === "function") {
        launchFinalConfetti();
      }

      if (typeof createFloatingHearts === "function") {
        createFloatingHearts();
      }

    }, 500);

  });

}

  /* =========================================
     CONFETTI
     ========================================= */

  function launchConfetti() {

    const emojis = [
      "🎉",
      "🎊",
      "✨",
      "💖",
      "💕",
      "🥳"
    ];

    for (let i = 0; i < 70; i++) {

      const piece =
        document.createElement("span");

      piece.innerHTML =
        emojis[
          Math.floor(
            Math.random() * emojis.length
          )
        ];

      piece.style.position = "fixed";
      piece.style.left =
        Math.random() * 100 + "vw";
      piece.style.top = "-30px";
      piece.style.fontSize =
        15 + Math.random() * 20 + "px";

      piece.style.zIndex = "99999";
      piece.style.pointerEvents = "none";

      document.body.appendChild(piece);

      const duration =
        1800 + Math.random() * 1800;

      piece.animate(
        [
          {
            transform:
              "translateY(0) rotate(0deg)",
            opacity: 1
          },
          {
            transform:
              `translateY(${window.innerHeight + 100}px)
               rotate(${Math.random() * 720}deg)`,
            opacity: 0
          }
        ],
        {
          duration: duration,
          easing: "ease-out"
        }
      );

      setTimeout(() => {
        piece.remove();
      }, duration);

    }

  }


  /* =========================================
     CAKE BALLOONS
     ========================================= */

  function createBirthdayBalloons() {

    for (let i = 0; i < 7; i++) {

      const balloon =
        document.createElement("div");

      balloon.innerHTML = "🎈";

      balloon.style.position = "fixed";
      balloon.style.left =
        (5 + i * 14) + "vw";
      balloon.style.bottom = "-80px";
      balloon.style.fontSize =
        45 + Math.random() * 25 + "px";

      balloon.style.zIndex = "99999";
      balloon.style.pointerEvents = "none";

      document.body.appendChild(balloon);

      const duration =
        3000 + Math.random() * 1800;

      balloon.animate(
        [
          {
            transform:
              "translateY(0) scale(.7)",
            opacity: 0
          },
          {
            transform:
              "translateY(-50vh) scale(1)",
            opacity: 1
          },
          {
            transform:
              `translateY(-${window.innerHeight + 150}px)
               rotate(15deg)`,
            opacity: 0
          }
        ],
        {
          duration: duration,
          easing: "ease-out"
        }
      );

      setTimeout(() => {
        balloon.remove();
      }, duration);

    }

  }


  /* =========================================
     CAKE CONFETTI
     ========================================= */

  function createCakeConfetti() {

    const emojis = [
      "🎉",
      "🎊",
      "✨",
      "💖",
      "💕",
      "🥳",
      "⭐"
    ];

    for (let i = 0; i < 60; i++) {

      const piece =
        document.createElement("span");

      piece.innerHTML =
        emojis[
          Math.floor(
            Math.random() * emojis.length
          )
        ];

      piece.style.position = "fixed";
      piece.style.left = "50vw";
      piece.style.top = "45vh";
      piece.style.fontSize =
        12 + Math.random() * 18 + "px";

      piece.style.zIndex = "99999";
      piece.style.pointerEvents = "none";

      document.body.appendChild(piece);

      const angle =
        Math.random() * Math.PI * 2;

      const distance =
        150 + Math.random() * 300;

      const x =
        Math.cos(angle) * distance;

      const y =
        Math.sin(angle) * distance;

      const duration =
        1000 + Math.random() * 1000;

      piece.animate(
        [
          {
            transform:
              "translate(0,0) scale(0)",
            opacity: 1
          },
          {
            transform:
              `translate(${x}px,${y}px) scale(1.2)`,
            opacity: 0
          }
        ],
        {
          duration: duration,
          easing: "ease-out"
        }
      );

      setTimeout(() => {
        piece.remove();
      }, duration);

    }

  }


  /* =========================================
     FINAL CONFETTI
     ========================================= */

  function launchFinalConfetti() {

    launchConfetti();
    launchConfetti();

  }


  /* =========================================
     FLOATING HEARTS
     ========================================= */

  function createFloatingHearts() {

    const hearts = [
      "❤️",
      "💖",
      "💕",
      "💗",
      "✨"
    ];

    for (let i = 0; i < 30; i++) {

      const heart =
        document.createElement("span");

      heart.innerHTML =
        hearts[
          Math.floor(
            Math.random() * hearts.length
          )
        ];

      heart.style.position = "fixed";
      heart.style.left =
        Math.random() * 100 + "vw";
      heart.style.bottom = "-50px";
      heart.style.fontSize =
        18 + Math.random() * 20 + "px";

      heart.style.zIndex = "99999";
      heart.style.pointerEvents = "none";

      document.body.appendChild(heart);

      const duration =
        2500 + Math.random() * 2500;

      heart.animate(
        [
          {
            transform:
              "translateY(0) scale(.8)",
            opacity: 0
          },
          {
            transform:
              "translateY(-50vh) scale(1.1)",
            opacity: 1,
            offset: 0.3
          },
          {
            transform:
              `translateY(-${window.innerHeight + 100}px)
               scale(1.3)`,
            opacity: 0
          }
        ],
        {
          duration: duration,
          easing: "ease-out"
        }
      );

      setTimeout(() => {
        heart.remove();
      }, duration);

    }

  }

});
// Dooron Dooron starts when Memories open
const memoriesBtn = document.getElementById("memoriesBtn");

if (memoriesBtn) {
  memoriesBtn.addEventListener("click", function () {

    // Stop opening music
    const introMusic = document.getElementById("introMusic");
    if (introMusic) {
      introMusic.pause();
      introMusic.currentTime = 0;
    }

    // Start Dooron Dooron
    const dooronMusic = document.getElementById("dooronMusic");

    if (dooronMusic) {
      dooronMusic.src =
        "https://www.youtube.com/embed/l_8KzlYBY_8?autoplay=1&loop=1&playlist=l_8KzlYBY_8";
    }
  });
}
/* 💌 LETTER TYPEWRITER - SEQUENTIAL */

const openLetterButton = document.getElementById("openLetterBtn");

if (openLetterButton) {
  openLetterButton.addEventListener("click", function () {

    setTimeout(function () {

      const paragraphs = document.querySelectorAll(".letter-text p");

      let paragraphIndex = 0;

      function typeNextParagraph() {

        if (paragraphIndex >= paragraphs.length) {
          return;
        }

        const paragraph = paragraphs[paragraphIndex];

        // Original paragraph ka text pehle save karo
        const text = paragraph.textContent.trim();

        // Paragraph ko typing ke liye ready karo
        paragraph.style.visibility = "visible";
        paragraph.style.opacity = "1";
        paragraph.textContent = "";

        let charIndex = 0;

        function typeCharacter() {

          if (charIndex < text.length) {

            paragraph.textContent += text.charAt(charIndex);
            charIndex++;

            setTimeout(typeCharacter, 35);

          } else {

            paragraphIndex++;

            // Next paragraph thoda delay ke baad
            setTimeout(typeNextParagraph, 700);
          }
        }

        typeCharacter();
      }

      typeNextParagraph();

    }, 1500);

  });
}
/* 🔐 PASSWORD PROTECTION */

const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");
const passwordScreen = document.getElementById("passwordScreen");
const questionScreen = document.getElementById("questionScreen");

const correctPassword = "nothing";

if (unlockBtn) {
  unlockBtn.addEventListener("click", function () {

    if (passwordInput.value === correctPassword) {

      passwordScreen.classList.add("hidden");
      questionScreen.classList.remove("hidden");

    } else {

      passwordError.textContent =
        "Oops! Wrong password 😜 Try again ❤️";

      passwordInput.value = "";
    }
  });
}
if (passwordInput) {
  passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      unlockBtn.click();
    }
  });
}
