# SSI CODEX

SSI CODEX to rozwijany przez Kolektyw SSI produkt dla zespołów, które utrzymują kod i dokumentację. W pilotażu można sprawdzić go na konkretnej zmianie. Przekazujesz dwie rewizje i regułę przeglądu. Wspólnie oceniamy, czy system wskazał zmianę, przytoczył właściwy fragment i rozpoznał brak informacji. Za projekt CODEX odpowiada Xavier w Kolektywie SSI.

## Co można sprawdzić w pilotażu?

| Zadanie zespołu | Co oceniamy |
|---|---|
| Przegląd fragmentu kodu według ustalonej reguły | Czy propozycja robocza powinna przejść dalej, czy wymaga zatrzymania i oceny człowieka? |
| Porównanie dwóch wersji rekordu | Które pole zmieniło wartość? Czy w obu wersjach są dane potrzebne do decyzji? |
| Odczyt liczby z notatki technicznej | Czy zdanie źródłowe potwierdza liczbę, czynność i obiekt wskazane w pytaniu? |

## Co już zmierzyliśmy?

W próbie 12 porównań rekordów o ustalonych polach reguła programowa poprawnie rozstrzygnęła 12/12 zmian lub braków. W odrębnej próbie sześciu nowych polskich notatek lokalny model SSI 0,5B odczytał liczbę w 4/6 pytań z odpowiedzią. Reguła łącząca liczbę z nazwą przypisała właściwy cytat w 3 z 8 wydanych wskazań. W R6 model 3B poprawnie wskazał zdanie dla 6/6 dostępnych faktów i rozpoznał brak informacji w 3/6 pytań. Wszystkie trzy warianty uzyskały 9/12. Dlatego w pilotażu osobno liczymy poprawne odpowiedzi, błędne źródła i wstrzymane decyzje. [Wyniki i metody badania](../badania/SSI-CODEX.md)

## Po co szkolimy CODEX przez 20 godzin?

Czy dodatkowe sprawdzenie pomoże wskazać właściwe zdanie w notatce, zauważyć brak pola w rewizji albo poprawnie napisać krótkie wyrażenie w Pythonie? 20 listopada uruchomiliśmy próbę na jednym serwerze SSI. Przez 16 godzin CODEX dobiera sposób odpowiedzi do pięciu rodzajów zadań. Przez kolejne 4 godziny porównujemy go z modelem bazowym na nowych przykładach. Zmierzymy, które błędy znikają, jakie się pojawiają i ile trwa odpowiedź. To pozwoli zespołom dobrać zadanie do pilotażu i wskazać miejsca wymagające przeglądu człowieka. [Plan badania i stan przy starcie](../badania/SSI-CODEX.md#cel-20-godzinnego-badania-ssi-codex)

**Zgłoś przypadek do pilotażu.** Wystarczą dwie przykładowe rewizje bez danych poufnych, jedna reguła przeglądu i opis oczekiwanej odpowiedzi. Ustalimy zakres próby, sprzęt i kryteria odbioru. [Kontakt w SSI Universal Lab](https://ssi.chaos.re/#contact) · [Katalog produktów](../README.md)
