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
