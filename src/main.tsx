import L from "leaflet"; // Am Anfang der Datei ergänzen



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

const Dom1 = "/assets/bilder/Dom1.jpg";
const Dom2 = "/assets/bilder/Dom2.jpg";
const Dom3 = "/assets/bilder/Dom3.jpg";
const Dom4 = "/assets/bilder/Dom4.jpg";
const Dom5 = "/assets/bilder/Dom5.jpg";
const Brief = "/assets/bilder/brief.png";

const stages: Record<string, Stage> = {
  fragerunde1: {
    title: "Fragerunde 1 – Die leichten 5",
    kind: "quiz",
    code: "51",
    codeText: "Ihr erhaltet die erste Zahl. Notiert euch diese sorgfältig.",
    questions: [
      { q: "Wann habt ihr euch verlobt?", answer: "08.08.1999" },
      { q: "Wie hat Opa Willi von eurer Verlobung erfahren?", answer: "Zeitung" },
      { q: "Wie viele Kilometer läuft Ronja, wenn sie ein mal die Promenade umrundet?", answer: "4,5" },
      { q: "Was für eine Hochzeitstorte durfte Carmen an eurer Hochzeit verspeisen?", answer: "Erdbeertorte" },
      { q: "Ronja ist ihr Handy in den Aasee gefallen, upsi. Wie tief muss Jösti tauchen, um es wieder zu holen?", answer: "2" },
    ],
  },

  raetsel1: {
    title: "Rätsel 1 – Der Gießer",
    kind: "puzzle",
    images: [
      Dom1,
      Dom2,
      Dom3,
      Dom4,
      Dom5
    ],
    questions: [
      { q: "Welcher Baum verbirgt sich hinter dem Gießer?", answer: "linde" }
    ],
    answer: "linde",
    code: "57",
    codeText: "Notiert euch auch diese Zahl.",
    tips: [
      "Tipp 1: Schuat beim Grafen vorbei, vielleicht kann er euch helfen.",
      "Tipp 2: Wie Antwort steht wortwörtlich zu Füßen.",
    ]
  },

  fragerunde2: {
    title: "Fragerunde 2 – Am Rosenplatz",
    kind: "quiz",
    code: "44",
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
    code: "483",
    codeText: "Ihr erhaltet eine weitere Zahl. Notiert euch diese Zahl gut.",
    // vier Beispiel-Begriffe — passe nach Wunsch an
    pantomimeTerms: ["Ski fahren auf dem Anhänger", "Hochzeitstorte anschneiden", "City-Roller fahren", "Hochzeitstanz"],
    placeholder:
      "Klicke auf die Karten, um die umzudrehen und den Begriff sichtbar zu machen. Viel Spaß beim Pantomime-Spielen!",
  },

  fragerunde3: {
    title: "Fragerunde 3",
    kind: "quiz",
    code: "7",
    codeText: "Eine weitere Zahl für eure Sammlung.",
    questions: [
      { q: "Welches Außergewöhnlichste Gericht hat Christoph am hochzeitstag 2020 serviert? ", answer: "Schnitzel mit Pommes|Schnitzel und Pommes|Schnipo|Schnitzel|Pommes" },
      { q: "8 oder doch 12? Wie viele glocken hängen im Turm des sankt-Paulus Doms?", answer: "10" },
      { q: "Wie heißt die Kulinarische Spezialität, die typisch für das Münsterland ist?", answer: "Töttchen" },
      { q: "Welche drei Charaktereigenschaften hat Christoph von Astrid gelernt? ", answer: "weinen, gefühle zeigen, offenheit|vor anderen weinen, gefühle äußern, selbstbewusstsein|vor anderen weinen, gefühle äußern, offenheit" },
      { q: "Was Hat Niklas über den Burrata gedacht, als er ihn das erste mal bei uns gegessen hat?", answer: "er ist schlecht|schlecht|verschimmelt" },
    ],
    tips: [
      "Tipp 1: Schuat beim Grafen vorbei, vielleicht kann er euch helfen.",
      "Tipp 2: Wie Antwort steht wortwörtlich zu Füßen.",
    ]
  },

  raetsel3: {
    title: "Rätsel 3 – Die teuflisch gute Geschichte",
    kind: "puzzle",
    code: "37",
    codeText: "Notiert euch diese Zahl gut.",
    images: [Brief], // Pfad zum Bild, z.B. Brief
    questions: [{ q: "Wo geht es als nächstes hin?", answer: "Picassoplatz" }],
    answer: "picassoplatz",
  },

  fragerunde4: {
    title: "Fragerunde 4 - Das Musik-Special",
    kind: "quiz",
    code: "50",
    codeText: "Ihr erhaltet die letzte Zahl für eure Sammlung.",
    questions: [
      { q: "Wie heißt der Song?", answer: "Männer", audio: "/assets/songs/maenner.mp3" },
      { q: "Wie heißt der Song?", answer: "Immer auf mich zählen", audio: "/assets/songs/immer_auf_mich_zaehlen.mp3" },
      { q: "Wie heißt der Song?", answer: "Mr. Brightside", audio: "/assets/songs/Mr_Brightside.mp3" },
      { q: "Wie heißt der Song?", answer: "Fix You", audio: "/assets/songs/fix_you.mp3" },    
      { q: "Wie heißt der Song?", answer: "New York, Rio, Rosenheim", audio: "/assets/songs/new_york_rio_rosenheim.mp3" },
      { q: "Wie heißt der Song?", answer: "Alles aus Liebe", audio: "/assets/songs/alles_aus_liebe.mp3"},
      { q: "Wie heißt der Song?", answer: "Spinner", audio: "/assets/songs/spinner.mp3" },    
      { q: "Wie heißt der Song?", answer: "Dont Speak", audio: "/assets/songs/dont_speak.mp3" },    
    ],
    tips: [
      "Ein deutscher Musiker besingt hier sehr ironisch die Eigenschaften eines bestimmten Geschlechts.",
      "Diese bekannte A-cappella-Band singt oft sehr humorvolle, alltagsnahe Texte – diesmal geht’s um Verlässlichkeit.",
      "Ein Indie-Rock-Hit aus den frühen 2000ern, der von Eifersucht handelt und bis heute in Clubs läuft.",
      "In diesem Lied versucht jemand, einen geliebten Menschen in einer schweren Zeit wieder „zusammenzusetzen“.",
      "Ein deutscher Indie-Hit über Fernweh, Weltreisen – und eine bayerische Stadt.",
      "Eine der bekanntesten deutschen Punkbands erzählt hier eine tragische Liebesgeschichte.",
      "Ein Song darüber, mutig zu sein und an seine Träume zu glauben – egal was andere sagen.",
      "Ein Herzschmerz-Hit der 90er mit Gwen Stefani als Sängerin, der von einer zerbrechenden Beziehung handelt.",
    ]
  },

  raetsel4: {
    title: "Rätsel 4 – Die Rathaus-Ruthe",
    kind: "puzzle",
    placeholder: "Das letzte Rätsel! Löst es, um die finale Zahl zu erhalten.",
    code: "746",
    codeText: "Notiert euch diese Zahl gut.",
    questions: [{ q: "Welche Summe verbirgt sich hinter der Ruthe?", answer: "8" }],
    answer: "8",
  },

  finale: {
    title: "Finale – Der Schatz zum greifen nah",
    kind: "puzzle",
    codeText: "Die Zahlen zusammen ergeben die Koordinaten des Schatzes!",
    placeholder: "Das letzte Rätsel! Löst es, um die finale Zahl zu erhalten.",
    questions: [{ q: "Habt ihr den Brief vom Anfang noch einmal gründlich gelesen? Beantwortet dann die letzte Frage: \n\n Was steckt hinter den Zahlen?", answer: "Koordinaten" }],
    answer: "Koordinaten",
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

/*
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
}*/


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

// ...existing code...
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

    // Finale: Koordinaten-Bereich direkt anzeigen
    if (stageId === "finale" && !document.getElementById("coord-area")) {
      const coordDiv = document.createElement("div");
      coordDiv.id = "coord-area";
      coordDiv.style.marginTop = "24px";
      coordDiv.innerHTML = `
        <h3>Gib die Koordinaten ein, um den Ort des Schatzes zu finden. :</h3>
        <div style="display:flex; gap:24px; justify-content:center; margin-bottom:16px;">
          <div>
            <label>Breite:</label>
            <div style="display:flex; align-items:center; gap:4px;">
              <input type="number" id="zahl1" class="coord-input" />
              <span>°</span>
              <input type="number" id="zahl2" class="coord-input" />
              <span>'</span>
              <input type="number" id="zahl3" class="coord-input" />
              <span>.</span>
              <input type="number" id="zahl4" class="coord-input" />
              <span>'' N</span>
            </div>
          </div>
          <div>
            <label>Länge:</label>
            <div style="display:flex; align-items:center; gap:4px;">
              <input type="number" id="zahl5" class="coord-input" />
              <span>°</span>
              <input type="number" id="zahl6" class="coord-input" />
              <span>'</span>
              <input type="number" id="zahl7" class="coord-input" />
              <span>.</span>
              <input type="number" id="zahl8" class="coord-input" />
              <span>'' E</span>
            </div>
          </div>
        </div>
        <button id="init-coords-btn" style="margin-top:12px;">Initiieren</button>
        <div id="coord-feedback" style="margin-top:12px;"></div>
        <div id="osm-map" style="width:100%;height:400px;margin-top:18px;border-radius:8px;overflow:hidden;"></div>
      `;
      result.appendChild(coordDiv);

      document.getElementById("init-coords-btn")?.addEventListener("click", () => {
        // Werte auslesen
        const z1 = (document.getElementById("zahl1") as HTMLInputElement).value || "0";
        const z2 = (document.getElementById("zahl2") as HTMLInputElement).value || "0";
        const z3 = (document.getElementById("zahl3") as HTMLInputElement).value || "0";
        const z4 = (document.getElementById("zahl4") as HTMLInputElement).value || "0";
        const z5 = (document.getElementById("zahl5") as HTMLInputElement).value || "0";
        const z6 = (document.getElementById("zahl6") as HTMLInputElement).value || "0";
        const z7 = (document.getElementById("zahl7") as HTMLInputElement).value || "0";
        const z8 = (document.getElementById("zahl8") as HTMLInputElement).value || "0";

        // Umrechnung in Dezimalgrad
        function toDecimal(deg: string, min: string, sec: string, msec: string) {
          const d = parseFloat(deg);
          const m = parseFloat(min);
          const s = parseFloat(sec + "." + msec);
          return d + m / 60 + s / 3600;
        }
        const lat = toDecimal(z1, z2, z3, z4);
        const lon = toDecimal(z5, z6, z7, z8);

        const feedback = document.getElementById("coord-feedback");
        feedback!.textContent = `Koordinaten: ${lat.toFixed(6)}, ${lon.toFixed(6)}`;

        // Karte anzeigen
        const mapDiv = document.getElementById("osm-map");
        if (mapDiv) {
          mapDiv.innerHTML = "";
          setTimeout(() => {
            const map = L.map(mapDiv).setView([lat, lon], 5); // Start weiter raus
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            }).addTo(map);

            setTimeout(() => {
              map.flyTo([lat, lon], 19, { animate: true, duration: 5 });
              L.marker([lat, lon]).addTo(map)
                .bindPopup("Schatz-Standort")
                .openPopup();
            }, 300);
          }, 100);
        }
      });
    }
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

  // Fragerunde 1
  if (stageId === "fragerunde1") {
    const qContainer = document.createElement("div");
    qContainer.id = "questions";
    stage.questions?.forEach((item, i) => {
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
      `;
      qContainer.appendChild(div);

      const btn = div.querySelector<HTMLButtonElement>(`#check${i}`);
      btn?.addEventListener("click", () => checkAnswer(i, item.answer));
    });

    const solveBtn = document.createElement("button");
    solveBtn.id = "solveBtn";
    solveBtn.textContent = "Lösen";
    solveBtn.addEventListener("click", () => solveQuiz(stageId));
    qContainer.appendChild(solveBtn);
    content.appendChild(qContainer);
  }

  // Rätsel 1 (Galerie)
  if (stageId === "raetsel1") {
    const p = document.createElement("div");
    p.className = "puzzle";

    // Text über dem Bild/Galerie
    const infoText = document.createElement("p");
    infoText.textContent = "Wer suchet der findet. Folgt den Bildern in der richtigen Reihenfolge, dann könnt ihr sie vielleicht beantworten, meine Frage!";
    infoText.style.fontWeight = "bold";
    infoText.style.marginBottom = "50px";
    p.appendChild(infoText);

  if (stage.images && stage.images.length) {
    // Galerie-Container
    const galleryDiv = document.createElement("div");
    galleryDiv.id = `puzzle-${stageId}`;
    galleryDiv.className = "puzzle-gallery";

    // Hauptbild-Bereich
    const mainDiv = document.createElement("div");
    mainDiv.className = "puzzle-main";

    const prevBtn = document.createElement("button");
    prevBtn.className = "puzzle-prev";
    prevBtn.setAttribute("aria-label", "Vorheriges");
    prevBtn.textContent = "‹";

    const mainImg = document.createElement("img");
    mainImg.className = "puzzle-main-img";
    mainImg.src = stage.images[0];
    mainImg.alt = "Bild 1";

    const nextBtn = document.createElement("button");
    nextBtn.className = "puzzle-next";
    nextBtn.setAttribute("aria-label", "Nächstes");
    nextBtn.textContent = "›";

    mainDiv.appendChild(prevBtn);
    mainDiv.appendChild(mainImg);
    mainDiv.appendChild(nextBtn);

    // Thumbnails
    const thumbsDiv = document.createElement("div");
    thumbsDiv.className = "puzzle-thumbs";
    stage.images.forEach((src, i) => {
      const t = document.createElement("img");
      t.className = "puzzle-thumb";
      t.src = src;
      t.alt = `Vorschau ${i + 1}`;
      t.addEventListener("click", () => showPuzzleImage(stageId, i));
      thumbsDiv.appendChild(t);
    });

    // Frage & Antwort
    const questionDiv = document.createElement("div");
    questionDiv.className = "puzzle-question";
    questionDiv.innerHTML = `
      <p><strong>Frage:</strong> Welcher Baum verbirgt sich hinter dem Gießer?</p>
      <input id="puzzle-answer-${stageId}" type="text" placeholder="Antwort" />
      <button id="puzzle-check-${stageId}">Prüfen</button>
      <div class="tip-row" style="margin-top:8px;">
        <button class="tip-btn" id="tip-btn-raetsel1-0">Tipp 1</button>
        <div class="tip-text" id="tip-text-raetsel1-0" style="display:none;"></div>
        <button class="tip-btn" id="tip-btn-raetsel1-1">Tipp 2</button>
        <div class="tip-text" id="tip-text-raetsel1-1" style="display:none;"></div>
      </div>
    `;

    galleryDiv.appendChild(mainDiv);
    galleryDiv.appendChild(thumbsDiv);
    galleryDiv.appendChild(questionDiv);

    p.appendChild(galleryDiv);

    prevBtn.addEventListener("click", () => {
      const cur = puzzleState[stageId]?.idx ?? 0;
      showPuzzleImage(stageId, cur - 1);
    });
    nextBtn.addEventListener("click", () => {
      const cur = puzzleState[stageId]?.idx ?? 0;
      showPuzzleImage(stageId, cur + 1);
    });

    // prüf-button
    questionDiv.querySelector<HTMLButtonElement>(`#puzzle-check-${stageId}`)?.addEventListener("click", () => checkPuzzleAnswer(stageId));

    // Tipp-Button Funktionalität
    const tipBtn = questionDiv.querySelector<HTMLButtonElement>("#tip-btn-raetsel1");
    const tipText = questionDiv.querySelector<HTMLDivElement>("#tip-text-raetsel1");
    if (stage.tips && stage.tips.length > 0) {
      stage.tips.forEach((tip, idx) => {
        const tipBtn = questionDiv.querySelector<HTMLButtonElement>(`#tip-btn-raetsel1-${idx}`);
        const tipText = questionDiv.querySelector<HTMLDivElement>(`#tip-text-raetsel1-${idx}`);
        if (tipBtn && tipText) {
          tipBtn.addEventListener("click", () => {
            tipText.innerHTML = tip;
            tipText.style.display = tipText.style.display === "none" ? "block" : "none";
          });
        }
      });
    }

    content.appendChild(p);
    puzzleState[stageId] = { idx: 0 };
    showPuzzleImage(stageId, 0);
  } else {
    p.innerHTML = `<p>${stage.placeholder || "Platzhalter für Rätsel"}</p>`;
    content.appendChild(p);
  }
}

// Fragerunde 3
  if (stageId === "fragerunde2") {
    const qContainer = document.createElement("div");
    qContainer.id = "questions";
    stage.questions?.forEach((item, i) => {
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
      `;
      qContainer.appendChild(div);

      const btn = div.querySelector<HTMLButtonElement>(`#check${i}`);
      btn?.addEventListener("click", () => checkAnswer(i, item.answer));
    });

    const solveBtn = document.createElement("button");
    solveBtn.id = "solveBtn";
    solveBtn.textContent = "Lösen";
    solveBtn.addEventListener("click", () => solveQuiz(stageId));
    qContainer.appendChild(solveBtn);
    content.appendChild(qContainer);
  }

  // Rätsel 2 (Pantomime)
  if (stageId === "raetsel2") {
    const p = document.createElement("div");
    p.className = "puzzle";
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
        btn.innerHTML = `
          <span class="face front">Begriff ${i + 1} aufdecken</span>
          <span class="face back">${term}</span>
        `;
        btn.addEventListener("click", () => {
          btn.classList.toggle("flipped");
          checkLastCardAndShowCount();
        });
        list.appendChild(btn);
      });

      wrap.appendChild(list);

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

      function checkLastCardAndShowCount() {
        const last = list.querySelector<HTMLElement>('[data-index="3"]');
        if (!last) return;
        const isFlipped = last.classList.contains("flipped");
        countWrap.style.display = isFlipped ? "block" : "none";
      }
      checkLastCardAndShowCount();

      p.appendChild(wrap);
      content.appendChild(p);
    } else {
      p.innerHTML = `<p>${stage.placeholder || "Platzhalter für Rätsel"}</p>`;
      content.appendChild(p);
    }
  }

  // Fragerunde 3
  if (stageId === "fragerunde3") {
    const qContainer = document.createElement("div");
    qContainer.id = "questions";
    stage.questions?.forEach((item, i) => {
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
      `;
      qContainer.appendChild(div);

      const btn = div.querySelector<HTMLButtonElement>(`#check${i}`);
      btn?.addEventListener("click", () => checkAnswer(i, item.answer));
    });

    const solveBtn = document.createElement("button");
    solveBtn.id = "solveBtn";
    solveBtn.textContent = "Lösen";
    solveBtn.addEventListener("click", () => solveQuiz(stageId));
    qContainer.appendChild(solveBtn);
    content.appendChild(qContainer);
  }

  // Rätsel 3 (Briefsymbol, Bild, Frage)
  if (stageId === "raetsel3") {
    const p = document.createElement("div");
    p.className = "puzzle";

    const briefBtn = document.createElement("button");
    briefBtn.className = "brief-btn";
    briefBtn.innerHTML = "📩";
    briefBtn.style.fontSize = "120px";
    briefBtn.style.marginBottom = "56px";

    const img = document.createElement("img");
    img.src = stage.images?.[0] || "";
    img.alt = "Brief";
    img.style.display = "none";
    img.style.maxWidth = "100%";
    img.style.maxHeight = "80vh";
    img.style.marginBottom = "16px";
    img.style.borderRadius = "8px";
    img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";

    briefBtn.addEventListener("click", () => {
      img.style.display = "block";
      briefBtn.style.display = "none";
    });

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
  }

if (stageId === "fragerunde4") {
  content.appendChild(renderTeamsArea());
  const qContainer = document.createElement("div");
  qContainer.id = "questions";
  stage.questions?.forEach((item, i) => {
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
        <div class="tip-row" style="margin-top:8px;">
          <button class="tip-btn" id="tip-btn-${i}">Tipp</button>
          <div class="tip-text" id="tip-text-${i}" style="display:none;"></div>
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

    const btn = div.querySelector<HTMLButtonElement>(`#check${i}`);
    btn?.addEventListener("click", () => checkAnswer(i, item.answer));

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
      audio?.addEventListener("ended", () => {
        playBtn.textContent = "▶️";
        isPlaying = false;
      });
    }
     // Tipp-Button Funktionalität hinzufügen
    const tipBtn = div.querySelector<HTMLButtonElement>(`#tip-btn-${i}`);
    const tipText = div.querySelector<HTMLDivElement>(`#tip-text-${i}`);
    if (stage.tips && stage.tips[i] && stage.tips[i].trim() !== "") {
      tipBtn?.addEventListener("click", () => {
        tipText!.innerHTML = stage.tips![i];
        tipText!.style.display = tipText!.style.display === "none" ? "block" : "none";
      });
    } else {
      tipBtn!.style.display = "none";
    }
  
  });

  const solveBtn = document.createElement("button");
  solveBtn.id = "solveBtn";
  solveBtn.textContent = "Lösen";
  solveBtn.addEventListener("click", () => solveQuiz(stageId));
  qContainer.appendChild(solveBtn);
  content.appendChild(qContainer);
}


if (stageId === "raetsel4") {
  const p = document.createElement("div");
  p.className = "puzzle";

  // Optional: Bild anzeigen, falls vorhanden
  if (stage.images && stage.images.length) {
    const img = document.createElement("img");
    img.src = stage.images[0];
    img.alt = "Rätselbild";
    img.style.maxWidth = "100%";
    img.style.maxHeight = "80vh";
    img.style.marginBottom = "24px";
    img.style.borderRadius = "8px";
    img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
    p.appendChild(img);
  }

  // Frage, Eingabefeld und Prüfen-Button
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.alignItems = "center";
  row.style.gap = "12px";
  row.style.marginTop = "16px";

  const q = document.createElement("label");
  q.textContent = stage.questions?.[0].q || "Frage:";
  q.style.fontWeight = "bold";
  q.style.marginRight = "8px";

  const input = document.createElement("input");
  input.type = "text";
  input.id = "puzzle-answer-raetsel4";
  input.placeholder = "Antwort";

  const checkBtn = document.createElement("button");
  checkBtn.textContent = "Prüfen";
  checkBtn.addEventListener("click", () => checkPuzzleAnswer(stageId));

  row.appendChild(q);
  row.appendChild(input);
  row.appendChild(checkBtn);

  p.appendChild(row);

  content.appendChild(p);
}

// ...existing code...
if (stageId === "finale") {
  const p = document.createElement("div");
  p.className = "puzzle";

  // Frage, Eingabefeld und Prüfen-Button
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.alignItems = "center";
  row.style.gap = "12px";
  row.style.marginTop = "16px";

  const q = document.createElement("label");
  q.textContent = stage.questions?.[0].q || "Frage:";
  q.style.fontWeight = "bold";
  q.style.marginRight = "8px";

  const input = document.createElement("input");
  input.type = "text";
  input.id = "puzzle-answer-finale";
  input.placeholder = "Antwort";

  const checkBtn = document.createElement("button");
  checkBtn.textContent = "Prüfen";
  checkBtn.addEventListener("click", () => checkPuzzleAnswer(stageId));

  row.appendChild(q);
  row.appendChild(input);
  row.appendChild(checkBtn);

  p.appendChild(row);

  content.appendChild(p);

}
// ...existing code...

  
}

renderStage(getStageId());
