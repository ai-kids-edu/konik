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
