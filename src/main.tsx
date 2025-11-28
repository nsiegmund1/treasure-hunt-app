// ...existing code...
type Question = { q: string; answer: string, audio?: string };

type Stage = {
  title: string;
  kind: "quiz" | "puzzle";
  questions?: Question[];
  code?: string; // Zahl, die angezeigt wird wenn gelöst
  codeText?: string; // kurzer Text nach der Zahl
  placeholder?: string; // für puzzle
  images?: string[]; // optional: Bilder für Puzzle-Galerie
  answer?: string; // optional: richtige Antwort für Puzzle
  tips?: string[]; // optionale Tipps für Quiz
  pantomimeTerms?: string[]; // neu: Begriffe für Pantomime-Runde
  audio?: string; // optional: Audio-Datei für Quiz
};

const stages: Record<string, Stage> = {
  fragerunde1: {
    title: "Fragerunde 1 – Die leichten 5",
    kind: "quiz",
    code: "XX",
    codeText: "Ihr erhaltet die erste Zahl. Notiert euch diese sorgfältig.",
    questions: [
      { q: "Wann habt ihr euch verlobt?", answer: "08.08.1999" },
      { q: "Wie hat Opa Willi von eurer Verlobung erfahren?", answer: "Zeitung" },
      { q: "Wie viele Kilometer rennt Ronja, wenn sie ein mal die Promenade umrundet?", answer: "4,5" },
      { q: "Was für eine Hochzeitstorte durfte Carmen an eurer Hochzeit verspeisen?", answer: "Erdbeertorte" },
      { q: "Ronja ist ihr Handy in den Aasee gefallen, upsi. Wie tief muss Jösti tauchen, um es wieder zu holen?", answer: "2" },
    ],
  },

  raetsel1: {
    title: "Rätsel 1 – Der Gießer",
    kind: "puzzle",
    images: [
      "/../assets/bilder/Dom1.jpg",
      "/../assets/bilder/Dom2.jpg",
      "/../assets/bilder/Dom3.jpg",
      "/../assets/bilder/Dom4.jpg",
      "/../assets/bilder/Dom5.jpg"
    ],
    questions: [
      { q: "Welcher Baum verbirgt sich hinter dem Gießer?", answer: "linde" }
    ],
    answer: "linde",
    code: "X",
    codeText: "Notiert euch auch diese Zahl.",
    tips: [
      "Tipp 1: Schuat beim Grafen vorbei, vielleicht kann er euch helfen.",
      "Tipp 2: Wie Antwort steht wortwörtlich zu Füßen.",
    ]
  },

  fragerunde2: {
    title: "Fragerunde 2 – Am Rosenplatz",
    kind: "quiz",
    code: "XX",
    codeText: "Merkt euch diese Zahl, sie hilft euch bestimmt mal weiter.",
    questions: [
      { q: "Ach ja, den besten kumpel zu fragen, ob man sein trauzeuge sein möchte, das macht man nur einmal im leben (hoffentlich). Apropos, wie wurde gerrit eigentlich gefragt?", answer: "" },
      { q: "In der ersten Januar-Woche wurde Ronja stets zu Tante Carmen ausquartiert. Aber warum?", answer: "skifahren|ski fahren|ski|urlaub" },
      { q: "Welche große Schriftstellerin lebte und studierte in Münster?", answer: "Annette von Drüste-Hülshoff" },
      { q: "Sogar eine eigene Sprache hat Münster, <i>Masematte</i>. Die sollte man als echter Münsterraner dialektfrei sprechen. Na, was heißt “Bier” auf masemattisch? ", answer: "Bäsken" },
      { q: "Die gemeine Schwägerin in Spe hatte einen ganz speziellen Spitznamen für Christoph. Jösti, weißt du den noch, oder hast du den schon verdrängt?", answer: "Knoblauchzehe" },
    ],
  },

  raetsel2: {
    title: "Rätsel 2 – Pantomime",
    kind: "puzzle",
    code: "XX",
    codeText: "Ihr erhaltet eine weitere Zahl. Notiert euch diese Zahl gut.",
    // vier Beispiel-Begriffe — passe nach Wunsch an
    pantomimeTerms: ["Ski fahren auf dem Anhänger", "Hochzeitstorte anschneiden", "City-Roller fahren", "Hochzeitstanz"],
    placeholder:
      "Klicke auf die Karten, um die umzudrehen und den Begriff sichtbar zu machen. Viel Spaß beim Pantomime-Spielen!",
  },

  fragerunde3: {
    title: "Fragerunde 3",
    kind: "quiz",
    code: "93",
    codeText: "Eine weitere Zahl für eure Sammlung.",
    questions: [
      { q: "Welches Außergewöhnlichste Gericht hat Christoph am hochzeitstag 2020 serviert? ", answer: "Schnitzel mit Pommes|Schnitzel und Pommes|Schnipo|Schnitzel|Pommes" },
      { q: "8 oder doch 12? Wie viele glocken hängen im Turm des sankt-Paulus Doms?", answer: "10" },
      { q: "Wie heißt die Kulinarische Spezialität, die typisch für das Münsterland ist?", answer: "Töttchen" },
      { q: "Welche drei Charaktereigenschaften hat Christoph von Astrid gelernt? ", answer: "weinen, gefühle zeigen, offenheit|vor anderen weinen, gefühle äußern, selbstbewusstsein|vor anderen weinen, gefühle äußern, offenheit" },
      { q: "Was Hat Niklas über den Burrata gedacht, als er ihn das erste mal bei uns gegessen hat?", answer: "er ist schlecht|schlecht|verschimmelt" },
    ],
  },

  raetsel3: {
    title: "Rätsel 3 – Die teuflisch gute Geschichte",
    kind: "puzzle",
    code: "5",
    codeText: "Notiert euch diese Zahl gut.",
    images: ["../assets/bilder/brief.png"], // Pfad zum Bild, z.B. Brief
    questions: [{ q: "Wo geht es als nächstes hin?", answer: "Picassoplatz" }],
  },

  fragerunde4: {
    title: "Fragerunde 4 - Das Musik-Special",
    kind: "quiz",
    code: "7",
    codeText: "Ihr erhaltet die letzte Zahl für eure Sammlung.",
    questions: [
      { q: "Wie heißt der Song?", answer: "Männer", audio: "../assets/songs/maenner.mp3" },
      { q: "Wie heißt der Song?", answer: "Immer auf mich zählen", audio: "../assets/songs/immer_auf_mich_zaehlen.mp3" },
      { q: "Wie heißt der Song?", answer: "Mr. Brightside", audio: "/../assets/songs/Mr_Brightside.mp3" },
      { q: "Wie heißt der Song?", answer: "Fix You", audio: "../assets/songs/fix_you.mp3" },    
      { q: "Wie heißt der Song?", answer: "New York, Rio, Rosenheim", audio: "../assets/songs/new_york_rio_rosenheim.mp3" },
      { q: "Wie heißt der Song?", answer: "Alles aus Liebe", audio: "../assets/songs/alles_aus_liebe.mp3"},
      { q: "Wie heißt der Song?", answer: "Spinner", audio: "../assets/songs/bitter_sweet_symphony.mp3" },    
      { q: "Wie heißt der Song?", answer: "Dont Speak", audio: "../assets/songs/bitter_sweet_symphony.mp3" },    

    ],
  },

  raetsel4: {
    title: "Rätsel 4 – Die Rathaus-Ruthe",
    kind: "puzzle",
    placeholder: "Letztes Rätsel / Finale – hier platzieren. Keine nächste Station.",
  },
};




// Hilfsfunktionen
function normalize(s: string): string {
  return s.trim().toLowerCase();
}

function getStageId(): string {
  const url = new URL(window.location.href);
  return (url.searchParams.get("stage") || "fragerunde1") as string;
}

function makeStageHref(stageId: string) {
  // relative link zur gleichen Seite mit query param ?stage=...
  return `?stage=${encodeURIComponent(stageId)}`;
}

function showTip(stageId: string, tipIdx: number) {
  const box = document.getElementById(`tips-box-${stageId}`);
  if (!box) return;
  const stage = stages[stageId];
  if (!stage || !stage.tips || tipIdx < 0 || tipIdx >= stage.tips.length) {
    box.textContent = "";
    return;
  }
  box.textContent = stage.tips[tipIdx];
}


// neue Hilfsfunktion: flexible Antwortprüfung
function isCorrectAnswer(userValue: string, correct: string): boolean {
  const u = normalize(userValue || "");
  const uNoSpace = u.replace(/\s+/g, "");
  if (correct.includes("|")) {
    const parts = correct.split("|").map((p) => p.trim()).filter(Boolean);
    for (const p of parts) {
      const pNorm = normalize(p);
      const pNoSpace = pNorm.replace(/\s+/g, "");
      if (u.includes(pNorm) || uNoSpace.includes(pNoSpace)) return true;
    }
    return false;
  }
  return u === normalize(correct);
}



function checkAnswer(index: number, correct: string) {
  const ans = document.getElementById(`q${index}`) as HTMLInputElement;
  const fb = document.getElementById(`fb${index}`)!;
  if (isCorrectAnswer(ans.value, correct)) {
    fb.textContent = "✓ richtig";
    (fb as HTMLElement).style.color = "green";
  } else {
    fb.textContent = "✗ falsch";
    (fb as HTMLElement).style.color = "red";
  }
}





function solveQuiz(stageId: string) {
  const stage = stages[stageId];
  if (!stage || !stage.questions) return;
  const allCorrect = stage.questions.every((q, i) => {
    const val = (document.getElementById(`q${i}`) as HTMLInputElement).value;
    return isCorrectAnswer(val, q.answer);
  });

  const result = document.getElementById("result")!;
  result.innerHTML = "";
  if (allCorrect) {
    const code = stage.code ? `<div class="code">${stage.code}</div>` : "";
    const txt = stage.codeText ? `<div class="codetext">${stage.codeText}</div>` : "";
    result.innerHTML = `<div class="codebox success">
      🎉 Alle Antworten sind korrekt! ${code}${txt}
    </div>`;
  } else {
    result.innerHTML = `<div class="codebox error">Nicht alle Antworten sind korrekt. Überprüfe die Antworten.</div>`;
  }
}





// Puzzle-spezifischer Code
const puzzleState: Record<string, { idx: number }> = {};

function showPuzzleImage(stageId: string, idx: number) {
  const container = document.getElementById(`puzzle-${stageId}`);
  if (!container) return;
  const img = container.querySelector<HTMLImageElement>(".puzzle-main-img");
  const thumbs = container.querySelectorAll<HTMLImageElement>(".puzzle-thumb");
  const stage = stages[stageId];
  if (!stage || !stage.images) return;
  if (idx < 0) idx = stage.images.length - 1;
  if (idx >= stage.images.length) idx = 0;
  puzzleState[stageId] = { idx };
  if (img) img.src = stage.images[idx];
  thumbs.forEach((t, i) => t.classList.toggle("active", i === idx));
}

function checkPuzzleAnswer(stageId: string) {
  const stage = stages[stageId];
  const input = document.getElementById(`puzzle-answer-${stageId}`) as HTMLInputElement | null;
  const result = document.getElementById("result")!;
  result.innerHTML = "";
  if (!stage || !stage.answer || !input) {
    result.innerHTML = `<div class="codebox error">Fehler beim Prüfen.</div>`;
    return;
  }
  if (normalize(input.value) === normalize(stage.answer)) {
    const code = stage.code ? `<div class="code">${stage.code}</div>` : "";
    const txt = stage.codeText ? `<div class="codetext">${stage.codeText}</div>` : "";
    result.innerHTML = `<div class="codebox success">🎉 Richtig! ${code}${txt}</div>`;
  } else {
    result.innerHTML = `<div class="codebox error">Das ist leider falsch. Versuch es nochmal.</div>`;
  }
}


function renderTeamsArea() {
  // Beispiel-Namen, passe nach Bedarf an!
  const names = ["Carmen", "Gerrit", "Moni", "Johannes", "Matthias J.", "Beata", "Matthias H.", "Katarzyna"];
  const teamsDiv = document.createElement("div");
  teamsDiv.className = "teams-area";
  teamsDiv.innerHTML = `
    <div class="team team-left">
      <h3>Team Astrid</h3>
      <ul id="team-astrid"></ul>
    </div>
    <div class="team team-center">
      <h3>Namen</h3>
      <ul id="team-names"></ul>
      <button id="create-teams-btn">Teams erstellen</button>
    </div>
    <div class="team team-right">
      <h3>Team Christoph</h3>
      <ul id="team-christoph"></ul>
    </div>
  `;

  // Namen in die Mitte einfügen
  const namesList = teamsDiv.querySelector<HTMLUListElement>("#team-names")!;
  names.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n;
    namesList.appendChild(li);
  });

  // Button-Logik: Zufällige Verteilung
  teamsDiv.querySelector<HTMLButtonElement>("#create-teams-btn")!.addEventListener("click", () => {
    // Shuffle
    const shuffled = [...names].sort(() => Math.random() - 0.5);
    const half = Math.ceil(shuffled.length / 2);
    const teamAstrid = shuffled.slice(0, half);
    const teamChristoph = shuffled.slice(half);

    // Listen leeren und neu befüllen
    namesList.innerHTML = "";
    const astridList = teamsDiv.querySelector<HTMLUListElement>("#team-astrid")!;
    const christophList = teamsDiv.querySelector<HTMLUListElement>("#team-christoph")!;
    astridList.innerHTML = "";
    christophList.innerHTML = "";

    teamAstrid.forEach(n => {
      const li = document.createElement("li");
      li.textContent = n;
      astridList.appendChild(li);
    });
    teamChristoph.forEach(n => {
      const li = document.createElement("li");
      li.textContent = n;
      christophList.appendChild(li);
    });
  });

  return teamsDiv;
}



function renderStage(stageId: string) {
  const stage = stages[stageId];
  const app = document.querySelector<HTMLDivElement>("#app")!;
  if (!stage) {
    app.innerHTML = `<h2>Unbekannte Station</h2>`;
    return;
  }

  app.innerHTML = `
    <div class="header">
      <h1>${stage.title}</h1>
    </div>
    <div id="content"></div>
    <div id="result" class="result"></div>
  `;

  const content = document.getElementById("content")!;

  if (stage.kind === "quiz" && stage.questions) {
    const qContainer = document.createElement("div");
    qContainer.id = "questions";

    // Team-Bereich NUR in Fragerunde 4 anzeigen
    if (stageId === "fragerunde4") {
      content.appendChild(renderTeamsArea());
    }


    stage.questions.forEach((item, i) => {
      const div = document.createElement("div");
      div.className = "qrow flex-row";
      div.innerHTML = `
        <div class="qrow-main">
          <p><strong>Frage ${i + 1}:<br/></strong> ${item.q}</p>
          <div class="qrow-input-row">
            <input id="q${i}" type="text" placeholder="Antwort" />
            <button id="check${i}">Prüfen</button>
            <span id="fb${i}" class="fb"></span>
          </div>
        </div>
        ${item.audio ? `
          <div class="qrow-audio">
            <button id="play-audio-${i}" class="audio-btn" type="button">▶️</button>
            <audio id="audio-${i}" src="${item.audio}" preload="auto"></audio>
          </div>
        ` : ""}
      `;
      qContainer.appendChild(div);



      // Listener an das gerade erzeugte Button-Element hängen
      const btn = div.querySelector<HTMLButtonElement>(`#check${i}`);
      btn?.addEventListener("click", () => checkAnswer(i, item.answer));
  

      // Listener für Audio Play/Pause
      if (item.audio) {

        const audio = div.querySelector<HTMLAudioElement>(`#audio-${i}`);
        const playBtn = div.querySelector<HTMLButtonElement>(`#play-audio-${i}`);
        let isPlaying = false;
        playBtn?.addEventListener("click", () => {
          if (!audio) return;
          if (audio.paused) {
            audio.play();
            playBtn.textContent = "⏸️";
            isPlaying = true;
          } else {
            audio.pause();
            playBtn.textContent = "▶️";
            isPlaying = false;
          }
        });
        // Button zurücksetzen, wenn Audio zu Ende
        audio?.addEventListener("ended", () => {
          playBtn.textContent = "▶️";
          isPlaying = false;
        });
        
      }
    });
    


    const solveBtn = document.createElement("button");
    solveBtn.id = "solveBtn";
    solveBtn.textContent = "Lösen";
    solveBtn.addEventListener("click", () => solveQuiz(stageId));
    qContainer.appendChild(solveBtn);
    content.appendChild(qContainer);

 } else if (stage.kind === "puzzle") {
    const p = document.createElement("div");
    p.className = "puzzle";

    // Pantomime-Runde
    if (stage.pantomimeTerms && stage.pantomimeTerms.length) {
      const wrap = document.createElement("div");
      wrap.className = "pantomime-wrap";
      wrap.innerHTML = `<p>${stage.placeholder || ""}</p>`;

      const list = document.createElement("div");
      list.className = "pantomime-list";

      stage.pantomimeTerms.forEach((term, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "reveal-btn";
        btn.setAttribute("data-index", String(i));
        // Vorder-/Rückseite
        btn.innerHTML = `
          <span class="face front">Begriff ${i + 1} aufdecken</span>
          <span class="face back">${term}</span>
        `;
        btn.addEventListener("click", () => {
          btn.classList.toggle("flipped");
          // prüfe, ob die letzte Karte (Index 3) aufgedeckt ist
          checkLastCardAndShowCount();
        });
        list.appendChild(btn);
      });

      wrap.appendChild(list);

      // Hidden: Frage-Text + Buttons (erscheinen erst wenn Karte 4 aufgedeckt)
      const countWrap = document.createElement("div");
      countWrap.className = "pantomime-count";
      countWrap.style.display = "none";

      const q = document.createElement("p");
      q.id = "pantomime-question";
      q.innerHTML = `<strong>Wie viele Begriffe wurden erraten?</strong>`;
      countWrap.appendChild(q);

      const btnRow = document.createElement("div");
      btnRow.className = "pantomime-count-buttons";
      [1, 2, 3, 4].forEach((n) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "count-btn";
        b.textContent = String(n);
        b.addEventListener("click", () => {
          const result = document.getElementById("result")!;
          const codeHtml = stage.code ? `<div class="code">${stage.code}</div>` : "";
          const txtHtml = stage.codeText ? `<div class="codetext">${stage.codeText}</div>` : "";
          result.innerHTML = `<div class="codebox success">🎉 Du hast ${n} Begriff(e) erraten! ${codeHtml}${txtHtml}</div>`;
        });
        btnRow.appendChild(b);
      });
      countWrap.appendChild(btnRow);

      wrap.appendChild(countWrap);

      // helper: zeigt/versteckt countWrap abhängig vom Status der letzten Karte (Index 3)
      function checkLastCardAndShowCount() {
        const last = list.querySelector<HTMLElement>('[data-index="3"]');
        if (!last) return;
        const isFlipped = last.classList.contains("flipped");
        countWrap.style.display = isFlipped ? "block" : "none";
      }

      // initial status prüfen (falls vorgerendert/gestaltet)
      checkLastCardAndShowCount();

      p.appendChild(wrap);
      content.appendChild(p);
      return; // fertig für diese Stage
    }

    // Rätsel 3: Briefsymbol mit Bild und Frage
  if (stageId === "raetsel3") {
    // Briefsymbol (SVG oder Emoji)
    const briefBtn = document.createElement("button");
    briefBtn.className = "brief-btn";
    briefBtn.innerHTML = "📩"; // oder SVG für Briefsymbol
    briefBtn.style.fontSize = "48px";
    briefBtn.style.marginBottom = "16px";

    // Bild, anfangs versteckt
    const img = document.createElement("img");
    img.src = stage.images?.[0] || "";    
    img.alt = "Brief";
    img.style.display = "none";
    img.style.maxWidth = "750px";
    img.style.marginBottom = "16px";
    img.style.borderRadius = "8px";
    img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";

    briefBtn.addEventListener("click", () => {
      img.style.display = "block";
      briefBtn.style.display = "none";
    });

    // Frage und Antwortfeld
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.gap = "12px";
    row.style.marginTop = "16px";

    const q = document.createElement("label");
    q.textContent = stage.questions?.[0].q || "Wo geht es als nächstes hin?";
    q.style.fontWeight = "bold";
    q.style.marginRight = "8px";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "puzzle-answer-raetsel3";
    input.placeholder = "Antwort";

    const checkBtn = document.createElement("button");
    checkBtn.textContent = "Prüfen";
    checkBtn.addEventListener("click", () => checkPuzzleAnswer(stageId));

    row.appendChild(q);
    row.appendChild(input);
    row.appendChild(checkBtn);

    p.appendChild(briefBtn);
    p.appendChild(img);
    p.appendChild(row);

    content.appendChild(p);
    return;
  }


        // spezielle Galerie, falls bilder vorhanden
    if (stage.images && stage.images.length) {
      p.innerHTML = `
      <div id="puzzle-${stageId}" class="puzzle-gallery">
        <div class="puzzle-main">
          <button class="puzzle-prev" aria-label="Vorheriges">‹</button>
          <img class="puzzle-main-img" src="${stage.images[0]}" alt="Bild 1" />
          <button class="puzzle-next" aria-label="Nächstes">›</button>
        </div>
        <div class="puzzle-thumbs"></div>
        <div class="puzzle-question">
          <p><strong>Frage:</strong> Welcher Baum verbirgt sich hinter dem Gießer?</p>
          <input id="puzzle-answer-${stageId}" type="text" placeholder="Antwort" />
          <button id="puzzle-check-${stageId}">Prüfen</button>
        </div>
      </div>
      `;
      p.querySelector(".puzzle-prev")?.addEventListener("click", () => {
        const cur = puzzleState[stageId]?.idx ?? 0;
        showPuzzleImage(stageId, cur - 1);
      });
      p.querySelector(".puzzle-next")?.addEventListener("click", () => {
        const cur = puzzleState[stageId]?.idx ?? 0;
        showPuzzleImage(stageId, cur + 1);
      });

      // Thumbnails erzeugen
      const thumbsCont = document.createElement("div");
      thumbsCont.className = "tmp"; // temporary container
      const galleryRoot = p.querySelector(".puzzle-thumbs")!;
      stage.images.forEach((src, i) => {
        const t = document.createElement("img");
        t.className = "puzzle-thumb";
        t.src = src;
        t.alt = `Vorschau ${i + 1}`;
        t.addEventListener("click", () => showPuzzleImage(stageId, i));
        galleryRoot.appendChild(t);
      });

      

      // prüf-button
      p.querySelector<HTMLButtonElement>(`#puzzle-check-${stageId}`)?.addEventListener("click", () => checkPuzzleAnswer(stageId));

      content.appendChild(p);
      // initial state
      puzzleState[stageId] = { idx: 0 };
      showPuzzleImage(stageId, 0);
    } else {
      p.innerHTML = `
        <p>${stage.placeholder || "Platzhalter für Rätsel"}</p>
      `;
      content.appendChild(p);
    }
  }

  
  // NEU: Tipps-Bereich — jeder Tipp mit Button und darunterstehendem Text (anfangs versteckt)
  if (stage.tips && stage.tips.length) {
    const tipsWrap = document.createElement("div");
    tipsWrap.className = "tips";
    stage.tips.forEach((tip, i) => {
      const row = document.createElement("div");
      row.className = "tip-row";

      const b = document.createElement("button");
      b.className = "tip-btn";
      b.textContent = `Tipp ${i + 1}`;

      const txt = document.createElement("div");
      txt.className = "tip-text";
      txt.style.display = "none";
      txt.innerHTML = tip;

      b.addEventListener("click", () => {
        // Toggle anzeigen/ausblenden
        txt.style.display = txt.style.display === "none" ? "block" : "none";
      });

      row.appendChild(b);
      row.appendChild(txt);
      tipsWrap.appendChild(row);
    });
    content.appendChild(tipsWrap);
  }

  

  
}











renderStage(getStageId());
