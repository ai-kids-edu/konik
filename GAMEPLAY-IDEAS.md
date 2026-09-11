# Gameplay Ideas — Konik Matematyczny

## Problem z obecnym systemem
Wiaderka z liczbami to **abstrakcyjny quiz** — dziecko podjeżdża, czyta liczbę, wybiera. To nudne po 3 minutach. Nie ma narracji, nie ma celu, nie ma "po co".

## Co działa na 5-6 latków
Dzieci w tym wieku uczą się przez **manipulację konkretem** — nie przez abstrakcje. "2+3" to nic. Ale "masz 2 jabłka i dostajesz 3 więcej — ile masz?" — to już coś.

## Propozycja: System questów z fizycznym liczeniem

### Główna pętla
1. **Farmer daje zadanie** (dymek z obrazkami, nie tekstem): "Zbierz 4 jabłka z drzew i przynieś mi je"
2. Dziecko **jeździ po świecie i zbiera** — jabłka, marchewki, kwiaty
3. **Widzi ile ma** (ikony w HUD, nie liczby)
4. **Wraca do farmera** — farmer sprawdza i się cieszy / mówi "jeszcze potrzebuję"
5. **Nagroda** — np. nowe zwierzę dołącza do farmy, otwiera się nowy teren

### Typy zadań (rosnąca trudność)

a) **Zbieranie** (liczenie do 5, potem 10) — "Zbierz 3 marchewki"

b) **Dodawanie konkretne** — "Mam 2 jabłka w koszyku. Zbierz jeszcze 3. Ile razem?" — dziecko liczy ikony w HUD

c) **Odejmowanie konkretne** — "Masz 5 marchewek. Daj 2 krowom (podjedź do krów). Ile zostało?"

d) **Porównywanie** — "Który stos jest większy?" (podjedź do właściwego)

e) **Wzory/sekwencje** — "Jabłko, marchewka, jabłko, marchewka, co dalej?" — zbierz właściwy

### Inne zadania (nie tylko matma)

- **Kolory** — "Zbierz wszystkie czerwone kwiaty" (są rozsiane po łące)
- **Dopasowanie** — "Przyprowadź cielaka do jego mamy" (podjeżdżasz blisko)
- **Sortowanie** — "Zanieś jabłka do koszyka, marchewki do wiaderka"
- **Pamięć** — "Farmer pokazał 3 zwierzęta — znajdź je na farmie"

### Jabłka na drzewach
Teraz jabłka są na losowych drzewach (30% szans, prymitywne kulki). Wiszą na liściastych drzewach (nie na sosnach). Warto dodać lekki glow lub obracanie żeby przyciągały wzrok.

## Jak zbudować progresję

```
Poziom 1: "Zbierz 3 jabłka" -> nagroda: husky dołącza do stada
Poziom 2: "Masz 2 marchewki, zbierz jeszcze 2" -> nagroda: nowe drzewo
Poziom 3: "Nakarm 3 krowy (podjedź z marchewkami)" -> nagroda: teren plaży
Poziom 4: "Ile razem masz jabłek i marchewek?" -> nagroda: biały koń partner
...
```

Każdy poziom to **jedno proste zadanie**. Dziecko widzi postęp (farma rośnie, nowe zwierzęta). Matematyka jest **narzędziem** do osiągnięcia celu, nie celem samym w sobie.

## Co zostawić, co wyrzucić

- **Wyrzucić**: wiaderka z liczbami, abstrakcyjne quizy
- **Zostawić**: galop, farmę, zbieranie jabłek, zwierzęta
- **Dodać**: system questów od farmera, fizyczne zbieranie/donoszenie, progresję

## Techniczne implikacje
To duży refactor — potrzebny `QuestManager`, system interakcji z NPC (farmer), system ekwipunku (koszyk na plecach konia?), system nagród. Ale fundament (świat, ruch, zwierzęta, modele) już jest.

---

# Aktualizacja: matematyka dla klasy 1 (gdy samo liczenie robi się za łatwe)

Córki poszły do 1 klasy — dodawanie/odejmowanie do ~15 zaczyna być za proste i się nudzi.
**Lekarstwo na nudę to nie większe liczby, tylko więcej RODZAJÓW matematyki** + świeże domeny
(geometria, czas, pieniądze, wzory). Poniżej: co obejmuje klasa 1, menu nowych wyzwań zmapowane na
świat konia (i na to, co już mamy w grze), oraz od czego zacząć.

## Co obejmuje matematyka klasy 1 (podstawa programowa, edukacja wczesnoszkolna)
- Liczby do 20, potem do 100; **dodawanie/odejmowanie w zakresie 20 z przekroczeniem progu
  dziesiątkowego** (7+5, 13−6) — to główny kamień milowy klasy 1.
- **Porównywanie** liczb (>, <, =), „o ile więcej/mniej".
- **Brakujący składnik** (4 + ? = 7) — zalążek myślenia algebraicznego.
- Liczby porządkowe (pierwszy, drugi…), liczenie **dziesiątkami/dwójkami/piątkami**, **parzyste/nieparzyste**.
- **Rytmy i sekwencje** (kontynuuj wzór).
- **Geometria**: koło, kwadrat, trójkąt, prostokąt; **symetria**.
- **Pomiary**: długość, masa (waga/równowaga), **czas — zegar (pełne i pół godziny)**, **pieniądze
  (złote i grosze!)**, kalendarz.
- Wstęp do **mnożenia jako powtarzane dodawanie** (3 wiaderka po 2 = 2+2+2) i **połowa/część**.
- **Zadania z treścią** (historyjki matematyczne).

## Menu nowych typów wyzwań (każdy = inny „smak", reużywa istniejących systemów)

**A. Głębsza arytmetyka (te same wiaderka, nowe pytania)**
- Przekraczanie dziesiątki: 7+5, 13−6.
- **Brakujący składnik**: na bramce „4 + ? = 7", wiaderko = brakująca liczba.
- **Porównania**: dwa stosy jabłek — wjedź w większy/mniejszy (>, <); „o ile więcej".
- Sumy trzech liczb (2+3+4); prosta **równowaga/waga** (obie strony równe).

**B. Pieniądze — mamy już monety i sklep! (idealne dopasowanie)**
- Ceny w **złotych i groszach**; **wydawanie reszty** („masz 10, płacisz 7 — ile reszty?").
- „Uzbieraj **dokładnie** N monet", zanim kupisz.
- Opłata za pasażera liczona od dystansu — zapłać właściwą liczbą monet.
- Uczy pieniędzy z podstawy programowej **na istniejącej ekonomii gry**.

**C. Liczenie inaczej**
- **Liczenie skokami**: zbieraj jabłka po 2/5/10; bramka „policz co drugie".
- **Parzyste/nieparzyste**: sortuj zwierzęta do dwóch zagród.
- **Porządkowe**: „wjedź do 3. bramki"; pozycje w wyścigu.
- **Szacowanie**: „ile jabłek? zgadnij", potem policz i sprawdź.

**D. Czucie liczby (embodied — bardzo skuteczne w tym wieku)**
- **Oś liczbowa**: koń skacze N pól po wielkiej osi — dodawanie/odejmowanie jako ruch.
- **Pary do 10** (6+4): zbieraj pasujące pary.
- Bramki „większe/mniejsze".

**E. Geometria i wzory (nowa domena = świeżość)**
- **Bramki-kształty**: dopasuj kształt (koło/kwadrat/trójkąt); buduj płot z figur.
- **Symetria**: uczesz konia symetrycznie / lustrzane puzzle (wpina się w salon!).
- **Kontynuuj wzór**: dokończ sekwencję kolorowych słupków/kwiatów (czerwony-niebieski-czerwony-?).

**F. Pomiary i czas**
- **Długość**: „który płot dłuższy?", mierz marchewkami jako jednostką.
- **Zegar**: cykl dzień/noc, „przyjedź o 3:00" (pełne i pół godziny), pory karmienia.
- **Waga/równowaga**: szale z belami siana.

**G. Zalążek mnożenia i ułamki**
- **Powtarzane dodawanie / szyki**: „3 wiaderka po 2 jabłka = ile?".
- **Połowy / dzielenie po równo**: podziel marchewkę na pół, rozdaj sprawiedliwie 2 zwierzętom.

**H. Zadania z treścią (świat konia daje naturalne historyjki)**
- „Farmer miał 5 krów, przyszły 3 — ile?" — jako ikoniczne mini-questy (patrz kid-first niżej).

## Zasada anty-nuda: różnorodność, nie inflacja liczb
- Rozszerz `LEVELS`, żeby odblokowywały **nowe TYPY** wyzwań, a nie tylko większe `maxNum`.
- **Rotuj typy** w sesji („talia" wyzwań), żeby nie było wciąż tego samego wiaderka.
- **Strefy tematyczne**: „las kształtów", „miasteczko pieniędzy" (sklep już jest), „droga osi liczbowej",
  „ogród wzorów". Eksploracja = różna matematyka w różnych miejscach.
- Nagrody spinaj z ekonomią (monety → salon/upiększanie, które uwielbiają).

## Czego warto uczyć TERAZ (priorytety dla świeżego pierwszaka)
1. Dodawanie/odejmowanie do 20 **z przekroczeniem dziesiątki** (kamień milowy klasy 1).
2. **Pary do 10 / brakujący składnik** (zalążek algebry).
3. **Porównania** (>, <, =).
4. **Pieniądze / wydawanie reszty** (praktyczne + pasuje do ekonomii).
5. **Liczenie skokami + parzyste/nieparzyste** (gotowość do mnożenia).
6. **Wzory/sekwencje** (logika).
7. **Kształty + symetria** (nowa, wizualna domena).
8. **Zegar** (praktyczne).
Później: powtarzane dodawanie → mnożenie, połowy.

## Kid-first (klasa 1 dopiero uczy się czytać)
- Nadal **ikony przed tekstem**, ale krótkie słowa/liczby są już OK (uczą się czytać).
- **Audio/TTS po polsku** to duży unlock dla zadań z treścią — można je „przeczytać na głos", więc
  historyjki matematyczne działają bez umiejętności czytania. (Wpisać do roadmapy dźwięku.)
- Bez kar za błąd (jak teraz): łagodny feedback, świętowanie sukcesu.

## Pierwsze do zbudowania (quick wins, najwięcej frajdy za najmniej kodu)
1. **Nowe typy pod istniejące wiaderka**: brakujący składnik + porównania (>, <) — mały kod, duża świeżość.
2. **Reszta w sklepie**: „zapłać, weź resztę" — reużywa ekonomii, uczy pieniędzy.
3. **Kontynuuj wzór** (kolorowe słupki) — nowa, wizualna, prosta mechanika.
4. Potem: **oś liczbowa** (skok konia o N) i **bramki-kształty** jako pierwsze nowe strefy.

> Zależność techniczna: żeby dodawać typy wyzwań czysto, warto zrobić z wyzwania **dane/typ**
> (`challenge.type`) zamiast jednego wariantu — patrz `DESIGN-DIRECTION.md` (podejście data-driven).

---

# Holistyczny redesign: „matematyka JEST mechaniką" (nie quiz w grze)

Research najlepszych gier (ST Math — całkowicie **bez słów**, DragonBox, Motion Math, Numberblocks)
dał jeden wniosek: istnieją dwie filozofie.
- **„Matematyka JEST mechaniką"** — czasownik gry *jest* matematyką; świat reaguje na ilość; bez
  tekstu, dotykowo, natychmiastowa wizualna konsekwencja. To wygrywa u dzieci, które nie czytają.
- **„Matematyka oprawiona grą"** (Prodigy) — zwykła pętla z doklejonym quizem. Krytykowane: słabo uczy,
  nagroda zewnętrzna.

Nasze „podjedź do bramki, policz kropki, wybierz wiaderko" to ta **druga**. Redesign = pchnąć wszystko
w stronę pierwszej: niech czasowniki świata konia (**karmienie, ładowanie, handel, zaganianie,
czesanie, skakanie**) *same będą* składaniem/rozkładaniem/porównywaniem/grupowaniem liczb. **Ekonomia
to prezent** — pieniądze to najbardziej konkretny, najbardziej motywujący kontekst matematyki.

## Zasady (przyjęte z researchu)
- **Ilość ma ciało** — rozmiar/wysokość/liczba sztuk = liczba (bele siana, stosy monet, skrzynie).
  Nigdy goła cyfra dla tego wieku.
- **Konsekwencja, nie brzęczyk** — źle = łagodny widoczny skutek (krowa dalej głodna, koń nie
  dosięga). Masz to w przewracającym się wiaderku — rozszerz wszędzie.
- **Łącz = dodawaj, rozdziel = odejmuj** — scalaj/przeciągaj stosy.
- **Ten-frame** (10 slotów) jako powtarzalny pojemnik — puste sloty uczą dopełnienia same, samo się
  koryguje. Uczy „do dziesiątki" (najważniejsza umiejętność klasy 1).
- **Otwarte cele** („zrób 7 dowolnie") zamiast jednej poprawnej odpowiedzi — bogatsze, powtarzalne.
- **Nauka przez majsterkowanie**, bez instrukcji — pierwsze spotkanie da się zrozumieć bez tekstu.
  (Uwaga: nasze córki w klasie 1 **już czytają** — więc tekst/historyjki są dla nich OK; „bez słów" to
  bonus dla młodszych/kolegów i powtarzalności, nie twardy wymóg. Można używać krótkich zadań z treścią.)
- **Progresja = nowy CZASOWNIK/miejsce, nie większe liczby.** Dwie osie trudności osobno (zakres liczb
  vs nowe typy mechanik). Nuda bierze się z kręcenia tylko zakresem.

## Trzy nowe filary (pomysły właściciela, wpięte w powyższe)

**1. Dopełnianie 4 + ? = 9 — PRIORYTET (jedna z córek potrzebuje pewności).**
To *number bonds / pary do 10* — fundament płynności. Formy:
- Szybkie wiaderko: „4 kropki + [luka] = 9 kropek" → wybierz brakującą liczbę. Ten-frame (4 wypełnione
  — ile do 9?).
- **Combine-to-feed** (najwyższy ROI z researchu): scalaj stosy jabłek, żeby nakarmić zwierzę
  **dokładnie N**; taca ten-frame; konsekwencja = najadło się / dalej głodne (reużywa animacji jedzenia).

**2. Transport (przywieź / zabierz) — daje POWÓD, żeby liczyć (konkret przed abstrakcją).**
- Zawsze **konkretny, widoczny przedmiot** (jabłka/siano/marchew) jako ciała + ten-frame; stan farmera
  widoczny (4 jabłka w ramce na 9 → puste sloty pokazują cel). Nigdy „5 czegoś".
- **GUARDRAIL anty-zgadywanie (kluczowy):** rozdziel **ZAŁADUNEK** (u źródła wybierasz konkretną liczbę
  — to jest akt matematyczny) od **DOSTAWY** (wszystko-albo-nic, jeden strzał). **Nie można dosypywać
  po drodze aż zagra** — inaczej to trial-and-error, nie liczenie. Zły załadunek → farmer pokazuje
  **lukę na ten-frame** (pudło = następny rachunek: „brakuje 2") i wracasz po ponowny załadunek (koszt),
  więc policzyć jest taniej niż zgadywać.
- Dla **czystego dopełniania** i tak preferuj formy **jednego wyboru** (combine-to-feed / wiaderko) —
  z natury brute-proof. Transport najlepszy na „**załaduj dokładnie X**", „**zabierz X**", i
  **pojemność → kursy**.
- **Pojemność/wóz:** start = **kosz/sakwa na koniu ~10 (= jeden ten-frame)**, dość na klasę 1. Później
  **wóz ciągnięty** o pojemności **< cel** → wiele kursów = grupowanie/dzielenie (progresja).

**3. Tor przeszkód konny (jak na zawodach) — embodied, motyw konia.**
- Dedykowana arena; reużywa **skoku (E)**. Przeszkody jako **oś liczbowa** („dojedź do 9"), albo
  przeskakuj **po kolei** (porządkowe), albo **co 2** (liczenie skokami). Nagroda: **kokarda/wstążka**
  (spina z ekonomią/salonem). Strącony drąg = łagodnie, jedziesz dalej (bez kary).

**Zszycie:** *dopełnianie do N* to rdzeń przewijający się przez wszystkie trzy — wiaderko → dostawa
(„dowieź do 9") → tor („dojedź do 9"). Jeden koncept, trzy smaki = pewność + różnorodność.

## Ekonomia jako główny silnik pieniędzy (mamy ją już!)
Sklep: **liczenie monet + wydawanie reszty**; **10 monet scala się widocznie w 1 złotą** (system
dziesiątkowy na oczach). To zamienia zbudowaną ekonomię w główny silnik nauki o pieniądzach i dziesiątkach.

## Inne czasowniki do odblokowania (progresja, NIE większe liczby)
Zaganianie/sortowanie do zagród (grupowanie, parzyste/nieparzyste, dzielenie po równo) · salon:
**symetria i wzory** (zero czytania, duże „wow") · **waga/równowaga** (równość, pre-algebra) · budowa
mostów z bel (długość/liczba) · gotowanie (ułamki, połowy) · zegar/terminy (czas) · mapa-kierunki.

## Kolejność budowy (fun × nauka, min. czytania, max reużycia istniejących systemów)
1. **Dopełnianie / combine-to-feed** — upgrade bramki + karmienie; number bonds; **potrzebne dziś**.
2. **Sklep: monety + reszta** (10→1 złota) — reużywa ekonomii; pieniądze + dziesiątki.
3. **Tace ten-frame** — powtarzalny, samokorygujący pojemnik.
4. **Droga-oś-liczbowa + tor przeszkód** — ruch/skok = odpowiedź (embodied).
5. **Zaganianie do zagród** — nowy, intrinsically-fun czasownik.
6. **Salon: symetria/wzory** — nowy typ, poza arytmetyką.

**Enabler techniczny:** zrobić z wyzwania **typ/dane** (`challenge.type`) — patrz `DESIGN-DIRECTION.md` P7.

---

## ✅ ZBUDOWANE — Hipodrom v1 (embodied "dopełnianie" 4+?=9)
Filar 3 (tor przeszkód) wdrożony jako pierwsza nowa działka. Lokalizacja: puste zachodnie
rubieże, `HIPPO.cx=-56, cz=-150` (ogrodzona arena, wjazd od strony drogi; marker na minimapie).

**Mechanika = matematyka:** rząd numerowanych płotków = oś liczbowa. Płotki ≤ `addend` są już
powalone (przejeżdżasz), a **żywe płotki `addend+1..target` SĄ odpowiedzią** — przeskocz każdy
(E), licznik rośnie `addend → target`. Dojazd do `target` = wygrana (konfetti, monety, 🏵️ rozeta,
`4 + 5 = 9`). Brak liczby do zgadnięcia: dziecko **wykonuje** liczenie ciałem (1 świadomy skok = +1)
→ brute-proof. Bez kary: przejazd płotka po ziemi = delikatny reset próby.

Koń jest ściągany do kłusu w arenie (`arenaSpeed`) żeby jeden skok = jeden płotek. Stan rundy:
`addend 2..5`, `gap 2..4`, `target≤9`. Rozety trwałe (save). Debug: `?debug` → `window.__hippo`.

**Do dopracowania później:** tuning okna detekcji skoku w live-play, sędzia-NPC/animacja wiwatu,
warianty (co 2 / co 5), kamera slow-mo na finiszu. Następne filary: dopełnianie combine-to-feed,
transport (load≠deliver), `challenge.type`.

### Hipodrom v2 (po review): XL + kolizje + anty-softlock
- **Tor wzdłuż Z** (korytarz ma ~300 m): rozstaw 10 m = realny rozbieg; kłus cap 9.
- **Kolizje płotu** (5 odcinków w `barnColliders`, brama północna otwarta); płotki bez kolizji (przeskakujesz). Weryfikacja statyczna przeszła.
- **Anty-softlock (krytyczny fix z review):** detekcja przez PRZECIĘCIE płotka — airborne = zaliczony, na ziemi = zrzut. Wcześniej zbyt wczesny skok blokował płotek na zawsze. Fizyka: łuk ~7,2 m < 10 m rozstaw = jedno przecięcie/skok (brak double/skip).
- **Cue dla nieczytających:** bujająca strzałka nad następnym płotkiem + pulsujący płotek; miss-popup z ikoną ⤴️.
- Flagi bramy + poprawny znak wjazdu; wyzwania-bramki wykluczone z footprintu.
- **Otwarte:** pełny reset po zrzucie (miss teraz rzadki, ale rozważyć zachowanie postępu); płot farmy nadal bez kolizji (brak bramy — decyzja właściciela).

### v24 — płoty blokują + przeskok
Ogólny **przeskok płotów**: `barnColliders` z flagą `jumpable` są pomijane, gdy koń jest w locie
i wysoko (`_barnBlocked`). Budynki NIE jumpable. Płot **farmy** dostał kolizję (20 segmentów) z
**bramą** od strony drogi (+X). Arena: płot też jumpable (można wyskoczyć). Mobile skok = przycisk ⤴️
(zawsze na dole prawego stosu). Zweryfikowane statycznie: 8 solid budynków + 25 jumpable płotów.

### v45 — hipodrom przeprojektowany: prawdziwa trasa (owal) + fizyka skoku
Po testach: dopełnianie było frustrujące/niejasne. Zmiana na **zabawę w skakanie** jak na zawodach.
- **Owalna trasa** 6 bramek (`rx16 rz38`) w arenie — jeździsz w kółko i skaczesz każdą.
- **Bramka = jumpable collider**: na ziemi odbija (trzeba skoczyć), w locie przelatujesz = zaliczona.
  Znika collider zaliczonej (otwarta). Rozwiązuje „nie łapało nad krawędzią".
- **Forgiving**: zalicza gdy skok w promieniu `jumpR 3 m` + okno 0.4 s (nie sztywna linia).
- HUD **„Bramki: X / 6"** (na okrążenie). Wszystkie 6 = 🏵️ czysty przejazd + monety, nowe okrążenie.
- **Farma zamknięta** — pełny płot dookoła, wjazd przez przeskok (jak każdy jumpable płot).
- Guard: challenge liczenia nigdy nie spawnuje na torze (fallback przesuwa na wschód od areny).
- Bez równań/resetu/utraty postępu. Odznaka 🏵️ = nagroda (do decyzji: nosić/półka/waluta).

### v51 — prawdziwa trasa: ósemka START→META + poprawki z review
- **Figure-8** (przecinająca się jak na zawodach), namalowana na piasku (world→canvas), 6 numerowanych bramek w kolejności jazdy, bramka **START·META** (szachownica) na górze.
- **Stan przejazdu**: idle → przejedź START → running (licznik bramek) → przejedź METĘ (po objechaniu trasy) → wynik. **Komunikat dopiero na mecie** (koniec nudnej nieskończonej pętli).
- Czysty przejazd (wszystkie bramki) = 🏵️ + monety; niepełny = „X/6, spróbuj wszystkie" bez kary.
- Review fixes: reset `_jumpGrace` na starcie (brak instant-clear), challenge guard poza footprint (`cx=cx+halfX+10`), usunięty martwy kod (_touched, flaga START, _hippoStartTag), nudge „Skacz!" gdy przejeżdżasz bramkę po ziemi.
- **Fix płotu**: lądowanie na linii collidera nie wymaga już drugiego skoku (wyjście z collidera dozwolone).
- Farma zamknięta (jumpable), znak wjazdowy podniesiony na słupach.
