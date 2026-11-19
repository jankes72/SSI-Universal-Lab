# SSI HERCULES

**Produkt w rozwoju.** HERCULES ma odpowiadać na dwa pytania właściciela serwisu. Czy usługi działają prawidłowo i czy można je odtworzyć? Czy wyszukiwarki i asystenci AI znajdują aktualne, zatwierdzone informacje o ofercie? Dla każdego z tych pytań potrzebne są inne dane. [Opis produktu w SSI V5](https://github.com/jankes72/SSI_V5/blob/8ab81c767eac6c6356667546be95e8d4cf506a3f/README.md?plain=1#L16-L20)

## Ochrona i diagnostyka

Planowany moduł Guard ma obserwować dostępność usług, stan aktualizacji, ustawienia dostępu i wyniki prób odtworzenia kopii. Gdy wykryje problem, operator powinien dostać opis zdarzenia, jego wpływu i proponowanego działania. W pilotażu właściciel wskazuje uprawnione serwery, zakres odczytu i osoby zatwierdzające zmiany.

## Plecak Herkulesa

Plecak to zbiór publicznych informacji zatwierdzonych przez firmę. Dla pytania o produkt ma wskazywać opis funkcji, aktualne warunki i stronę źródłową. Na przykład klient pytający, czy urządzenie działa offline, powinien dostać jednoznaczną odpowiedź wraz z odsyłaczem do właściwego opisu. Gdy dokumentacja milczy, plan zakłada zgłoszenie brakującej informacji do weryfikacji. Klient i robot indeksujący mają dostęp do tych samych opublikowanych faktów.

## Labirynt

Labirynt służy do badania zachowania automatycznego ruchu w odizolowanej symulacji. W prototypie przygotowano 48 logicznych punktów. W lokalnej serii aplikacji Plecaka i Labiryntu zaliczono **110/110 testów funkcjonalnych i regresyjnych**. Skuteczność na serwerze klienta wymaga osobnej oceny. [Wynik prototypu](https://ssi.chaos.re/#exp-hercules)

## Widoczność w wyszukiwarkach i odpowiedziach AI

Proponowany pilotaż zaczyna się od wybrania fraz, pytań i stron firmy. Dla wyszukiwarki porównujemy wyświetlenia, kliknięcia, CTR i średnią pozycję z kolejnych okresów w Google Search Console. Dla asystentów AI powtarzamy ustalone pytania i zapisujemy, czy odpowiedź wymienia firmę, czy prawidłowo opisuje produkt i do jakiej strony odsyła. Logi odwiedzin robotów mierzą jeszcze inne zjawisko — pobranie treści. Wynik klienta można ocenić dopiero po zebraniu danych z jego serwisu.

Do rozmowy o pilotażu wystarczą adres publicznej strony, jedna usługa lub produkt oraz pytanie, na które klient powinien znaleźć odpowiedź. [Zgłoś temat Herkulesa](https://ssi.chaos.re/#contact) · [Wróć do katalogu](../README.md)
