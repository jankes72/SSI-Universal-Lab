# SSI CODEX · wyniki badań Xaviera

Stan publikacji na 20 listopada 2026 r. Kolektyw SSI bada, kiedy lokalny model może przygotować propozycję do przeglądu i jak sprawdzić jej uzasadnienie. Poniżej podajemy zarówno trafienia, jak i fałszywe wskazania źródła.

## Polski tekst · od wartości do dowodu

| Próba | Co zmierzyliśmy |
|---|---|
| R1 · liczba i cytat | SSI 0,5B poprawnie podał liczbę w 8/9 pytań z dostępnym faktem. Zgadł we wszystkich 3 przypadkach bez faktu. Samodzielnie wykonał pełne zadanie w 0/12. |
| R2 · wybór zdania | Model zwrócił „2” we wszystkich 12 próbach. Trafił w źródło w 2/6 pytań z faktem, rozpoznał brak informacji w 0/6. |
| R3 · kontrola etykiety i pozycji | We wszystkich 8 pytaniach o źródło model wybrał etykietę „2”. Oznaczała środkowy wiersz tylko w 4/8. Model poprawnie skopiował cyfrę w 2/4 osobnych próbach kontrolnych. |
| R4 · przypisanie cytatu do liczby | W 4/6 pytań z faktem model podał właściwą liczbę. W 0/6 pozostałych jawnie rozpoznał brak informacji. Reguła dopasowania liczby i nazwy opracowana po tej próbie wskazała 4 trafne cytaty na 6 wydanych. |
| R5 · sprawdzenie reguł na nowych notatkach | Po zamrożeniu reguł model ponownie podał właściwą liczbę w 4/6, wobec 2/6 dla wyboru pierwszej liczby. Przy braku informacji podał liczbę we wszystkich 6 przypadkach. Pełna samodzielna odpowiedź z cytatem lub jawnym wskazaniem braku danych uzyskała 0/12. |

### R5 · co zmienia sposób wyboru cytatu?

Sześć nowych syntetycznych polskich notatek dało 12 pytań. W każdej parze na jedno pytanie można odpowiedzieć z tekstu, na drugie brakuje danych. Każda metoda poniżej korzysta z tych samych odpowiedzi modelu.

| Reguła programu po odpowiedzi 0,5B | Wydane cytaty | Trafne | Błędne mimo dostępnego faktu | Fałszywe przy braku faktu | Wstrzymane |
|---|---:|---:|---:|---:|---:|
| Liczba występuje w jednym zdaniu | 4 | 2 | 0 | 2 | 8 |
| Dodatkowy filtr nazwy w tym zdaniu | 3 | 1 | 0 | 2 | 9 |
| Jedyne zdanie zawierające liczbę i nazwę razem | 8 | 3 | 1 | 4 | 4 |

W notatce 16 osób **wysiadło** na przystanku Rumianek. Na pytanie o liczbę osób, które tam **wsiadły**, model odpowiedział „16”. Reguła znalazła zarazem liczbę i nazwę w prawdziwym zdaniu, a mimo to wydała fałszywe uzasadnienie. Dla zespołu sprawdzającego dokumentację oznacza to, że w ocenie cytatu trzeba uwzględnić również czynność, której dotyczy pytanie.

**Warunki R5.** SSI 0,5B Q4Q8 na CPU, jeden wątek. Suma czasów 12 wywołań wyniosła 277,652 s, średnio 23,14 s na pytanie. Najwyższy raportowany RSS procesu wyniósł 641,02 MiB. Źródłem są zakończone zapisy przebiegu `XAVIER_CYTAT_NAZWA_R5`. SHA-256 banku pytań: `f2362c07dfc6a6e47f2f5e55e3a07638c22303a9b0837e56e7edf1f1347c350e`.

## Przegląd kodu i porównywanie rewizji

| Próba | Wynik |
|---|---|
| CAL4 · cztery zadania kodowe i źródłowe | Qwen2.5-Coder 3B samodzielnie 2/4. Po dodaniu instrukcji weryfikacji osiągnął 4/4 zarówno z propozycją SSI 0,5B, jak i z pustym polem propozycji. |
| HOLDOUT12 · osobny panel 12 zadań | Model 3B samodzielnie i z pustą kartą osiągnął po 11/12. Z surową propozycją 0,5B uzyskał 10/12. |
| FIELDS12 · rekordy o ustalonym schemacie | Reguła porównująca pola bezpośrednio z wejścia rozstrzygnęła 12/12. Model 3B z pustą kartą oraz z kartą pól od 0,5B uzyskał po 7/12. Z polami odczytanymi regułą uzyskał 8/12. |

## R6 · czy propozycja SSI 0,5B pomaga modelowi 3B wybrać źródło?

Na tych samych sześciu notatkach co w R5 Qwen2.5-Coder 3B miał wskazać numer zdania lub odpowiedzieć „0”, gdy notatka nie zawierała odpowiedzi. Każdy z 12 przypadków przeszedł przez trzy warianty, łącznie 36 wywołań. Klucz odpowiedzi służył do oceny po zakończeniu generacji.

| Co otrzymał model 3B | Poprawne źródło / 6 | Rozpoznany brak / 6 | Fałszywe źródło przy braku / 6 | Wynik / 12 | Obie odpowiedzi poprawne / 6 par | Łączny czas wywołań 3B |
|---|---:|---:|---:|---:|---:|---:|
| BASE · notatka i pytanie | 6 | 3 | 3 | 9 | 3 | 196,075 s |
| EMPTY · dodatkowa instrukcja i pusta karta | 6 | 3 | 3 | 9 | 3 | 209,195 s |
| B · ta sama instrukcja i liczba z SSI 0,5B | 6 | 3 | 3 | 9 | 3 | 221,308 s |

Wszystkie 36 odpowiedzi miało poprawny format. Karta zmieniła dwa rozstrzygnięcia wobec EMPTY. W H_04 model z kartą słusznie wstrzymał wskazanie źródła o stołach przewidzianych w projekcie. W H_10 karta spowodowała fałszywe wskazanie zdania o zleconych odbitkach. Bilans wyniósł jedno trafienie więcej i jedno mniej. W tym panelu karta nie zwiększyła łącznej trafności. Próba dotyczy wyboru zdania w sześciu znanych notatkach.

**Warunki R6.** Qwen2.5-Coder 3B Instruct, Q4_K_M, dwa wątki CPU, temperatura 0, seed 42, kontekst 2048, limit odpowiedzi 32 tokeny, `keep_alive=0`. Kolejność wariantów była zrównoważona. Czasy obejmują wywołania modelu 3B wraz z ładowaniem. Wartości 0,5B pochodziły z R5. Weryfikację wykonano na 36 rekordach z dziennika operatora, sprawdzając kolejność, odciski poleceń i odpowiedzi oraz odtwarzając wynik programem R6.

| Przypadek | Klucz | BASE | EMPTY | B |
|---|---:|---:|---:|---:|
| H_01 | 1 | 1 | 1 | 1 |
| H_02 | 0 | 2 | 3 | 3 |
| H_03 | 2 | 2 | 2 | 2 |
| H_04 | 0 | 1 | 1 | 0 |
| H_05 | 1 | 1 | 1 | 1 |
| H_06 | 0 | 2 | 1 | 1 |
| H_07 | 3 | 3 | 3 | 3 |
| H_08 | 0 | 0 | 0 | 0 |
| H_09 | 3 | 3 | 3 | 3 |
| H_10 | 0 | 0 | 0 | 3 |
| H_11 | 2 | 2 | 2 | 2 |
| H_12 | 0 | 0 | 0 | 0 |

[Karta SSI CODEX i kontakt w sprawie pilotażu](../produkty/SSI-CODEX.md) · [Pozostałe wyniki Kolektywu](Wyniki.md)
