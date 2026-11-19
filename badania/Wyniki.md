# Wyniki Kolektywu SSI

Stan zestawienia na 20 listopada 2026 r. Każda liczba odnosi się do określonego zadania. Porównanie silników tej samej adaptacji, test aplikacji i porównanie z oryginalnym modelem bazowym odpowiadają na różne pytania.

## Jak zmienił się czas generacji na CPU?

ASTER porównał wykonanie na tym samym komputerze MS-7A15. Dla każdego rozmiaru użyto jednego polecenia. Każda para wariantów wygenerowała te same 128 tokenów. Dla 1,5B i 3B wejście liczyło 63 tokeny, a silnik używał dwóch wątków. Poniżej są mediany czasu generacji.

| Adaptacja | Punkt odniesienia → wariant SSI | Przed | Po | Przyspieszenie |
|---|---|---:|---:|---:|
| 0,5B | SSI R3 → R4 AVX2 | 22,43 s | 16,79 s | [1,34×](https://ssi.chaos.re/#exp-cpu05) |
| 1,5B | podstawowy silnik SSI → R2.7 AVX2 | 128,99 s | 47,05 s | [2,74×](https://ssi.chaos.re/#exp-cpu15) |
| 3B | podstawowy silnik SSI → R2 AVX2 | 256,53 s | 80,66 s | [3,18×](https://ssi.chaos.re/#exp-cpu3) |

Szersze porównanie jakości odpowiedzi tych adaptacji z oryginalnym Qwen pozostaje otwarte.

## Atlas112 w warstwie 0 modelu 70B

Czy warto przeznaczyć wyższą precyzję na konkretne fragmenty wag? W próbie R7 na CPU serwera MICRONET podnieśliśmy precyzję 112 z 448 kafli projekcji `up_proj` z Q8 do BF16. Atlas wskazał kafle na 10 prefiksach kalibracyjnych. Wybór zamroziliśmy przed testem na ośmiu nowych polskich zdaniach. Główny wynik obejmuje 20 różnych prefiksów, po jednokrotnym policzeniu wspólnych początków zdań.

| Wariant `up_proj` | Średni względny błąd L2 | Mediana czasu przejścia MLP | Dane wag na przejście | Szczyt RSS procesu |
|---|---:|---:|---:|---:|
| Wszystkie kafle Q8 | 2,9225% | 2,1330 s | 677,25 MiB | 46,11 MiB |
| 112 kafli BF16 według Atlasu | **2,3466%** | 2,1521 s | 732,81 MiB | 46,36 MiB |
| 112 kafli BF16 z jednego losowania | 2,6580% | 2,1425 s | 732,81 MiB | 46,11 MiB |
| Wszystkie kafle `up_proj` w BF16 | 1,8514% | 2,2983 s | 899,50 MiB | 45,86 MiB |

Przy identycznej ilości danych wag Atlas uzyskał niższy błąd niż losowy wybór na **19 z 20 prefiksów**. W jednym przypadku wygrał wybór losowy. Przy podniesieniu precyzji jednej czwartej kafli Atlas zachował **53,76% redukcji średniego błędu**, jaką dało podniesienie precyzji całej projekcji. W każdej z czterech par zdań Atlas dokładniej od losowej kontroli odtworzył też wpływ zmiany kolejności słów na wektor wyjściowy.

Błąd L2 mierzy odległość wyjścia MLP warstwy 0 od referencji BF16. Projekcje `gate_proj` i `down_proj` pracowały w Q8 we wszystkich wariantach. Czasy i RSS dotyczą badanego przejścia MLP. Powtarzalność względem kolejnych losowań, wpływ na generowane odpowiedzi i tempo całego modelu wymagają osobnych pomiarów. Źródłem liczb jest końcowy odczyt operatora z przebiegu `R7_ATLAS112_COMPLETE`.

## Co pokazały pozostałe próby?

| Próba | Wynik i zakres | Źródło |
|---|---|---|
| ASTER, odczyt warunkowy | W 8 syntetycznych zgłoszeniach odczyt wszystkich pól wymagał 16 wywołań, a odczyt tylko potrzebnych pól 12. Oba warianty podjęły 8/8 poprawnych decyzji. Łączny czas wywołań wyniósł odpowiednio 292,93 i 188,83 s. Bazę odtworzono z 12 wspólnych i 4 dodatkowych pomiarów. | [Odczyt pól](https://ssi.chaos.re/#exp-conditional) |
| ASTER, współpraca dwóch małych modeli | Przy tych samych 20 zadaniach jeden model 0,5B uzyskał 13/20 w 25,97 s, para 11/20 w 15,68 s. W tej próbie szybsza para popełniła dwa błędy więcej. | [Wynik JM1](https://ssi.chaos.re/#exp-jm1) |
| XAVIER / CODEX, liczba i cytat w polskich notatkach | Model 0,5B odczytał właściwą liczbę w 8/9 notatek z odpowiedzią. Pełne zadanie wymagało także cytatu lub wskazania braku danych. Wynik wzrósł z 0/12 do 9/12 po dodaniu reguły opracowanej i sprawdzonej na tych samych odpowiedziach. | [Próba z notatkami](https://ssi.chaos.re/#exp-notes) |
| SPLOT, NanoBit | Na syntetycznych wagach ze wspólnym wzorcem błąd odtworzenia wyniósł 0,01426 dla Q2 i 0,00146 dla NanoBit + LoRA przy podobnym rozmiarze. Bez wspólnego wzorca wygrało Q2, z błędem 0,01359 wobec 0,19186. Miarą był błąd wag. | [Porównanie NanoBit](https://ssi.chaos.re/#exp-nanobit) |
| NanoGate, rzeczywisty model 0,5B | Przed modyfikacją model rozwiązał 4/6 zadań JM1 i 1/6 programistycznych. Próba zatrzymała się na pomiarze bazowym. Wpływ modyfikacji na czas i jakość pozostaje do zmierzenia. | [Próba NanoGate](https://ssi.chaos.re/#exp-nanogate) |
| MultiQuant 70B | Model BF16 na GPU i wariant IQ2_XXS na CPU z limitem 8 GiB i swapem poprawnie odpowiedziały na jedno wspólne pytanie. Osobna seria 96/96 dotyczy wyłącznie BF16. | [Publiczny raport SSI V5](https://github.com/jankes72/SSI_V5/blob/8ab81c767eac6c6356667546be95e8d4cf506a3f/PUBLIC_MODELS/SSI_MULTIQ_V7_70B_8G_PUBLIC_RESULTS_20261025.md) |
| XAVIER / CODEX, zadania w dwóch językach | Model 3B, model z przykładem i zespół trzech modeli uzyskały po 8/10. Dla pytań po polsku mediana pełnej odpowiedzi wyniosła 40,63 s dla samego 3B i 85,46 s dla zespołu. | [Porównanie wariantów](https://ssi.chaos.re/#exp-cascade) |
| SPLOT, dobór tematu Nano-Comm | Na dwóch pytaniach porównanie bez kart i z kartami dało po 0/2. W osobnej serii model skopiował 10/10 etykiet, dobrał rolę w 0/10 i rozpoznał znaczenie w 2/10. | [Wynik Nano-Comm](https://ssi.chaos.re/#exp-nano) |
| MultiQuant, oryginalne wagi 70B na CPU | W osobnej, wznawianej próbie silnik SSI wykonał 80 warstw BF16. Dla jednego pytania odtworzył odpowiedź „4” i oba tokeny referencji GPU. Pełny czas i szczyt RAM pozostają nieustalone. | [Próba 70B BF16](https://ssi.chaos.re/#exp-bfstream) |
| Herkules, Plecak i Labirynt | 110/110 lokalnych testów funkcjonalnych i regresyjnych aplikacji. Wpływ na pozycje strony lub cytowania marki w odpowiedziach AI wymaga pomiaru w pilotażu. | [Wynik prototypu](https://ssi.chaos.re/#exp-hercules) |

## SSI CODEX · nowy pomiar na polskich notatkach

W próbie R5 model SSI 0,5B poprawnie odczytał liczbę w 4 z 6 pytań z odpowiedzią. Reguła łącząca liczbę z nazwą wydała 8 cytatów, z których 3 uzasadniały odpowiedź. Raport pokazuje także wyniki kontroli, przypadki braku danych i porównanie rewizji o ustalonym schemacie. [Badania SSI CODEX](SSI-CODEX.md) · [Produkt i pilotaż](../produkty/SSI-CODEX.md)

[Zobacz, jak dobieramy zakres pilotażu](../uslugi/Pilotaze.md) · [Wróć do katalogu](../README.md)
