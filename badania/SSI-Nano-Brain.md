# SSI Nano-Brain · Czy mały model potrafi dobrać właściwą funkcję?

20 listopada 2026 r. · Badania Kolektywu SSI · ASTER

Nano-Brain ma korzystać z biblioteki gotowych kompetencji Pocket. Badaliśmy najpierw sam wybór. Użytkownik mógł poprosić o zapisanie nazwy jako jednego klucza wielkimi literami z podkreśleniami, o rozdzielenie nazwy na kolejne słowa albo o inną operację, np. policzenie liter. W tym ostatnim przypadku poprawną decyzją było pominięcie obu funkcji. Wszystkie próby zakończyły się bez uruchamiania funkcji.

## Wybór spośród trzech możliwości

W ośmiogodzinnej sesji R9 na CPU zebraliśmy 369 kompletnych zadań testowych, po 123 dla każdej decyzji. Klasyfikator SSI wybrał poprawną odpowiedź w 172/369 zadań. Model językowy 0,5B z opisem kompetencji wypadł poprawnie w 153/369, a z dodatkowymi przykładami w 149/369. Dodatkowe przykłady ograniczyły liczbę błędnych wskazań funkcji przy braku dopasowania z 47/123 do 26/123.

W R10 użyliśmy 24 nowych poleceń. Każda z ośmiu nazw wystąpiła w trzech poleceniach o różnych celach. Model z podstawowym opisem trafił w 13/24 zadaniach. Rozpoznał wszystkie 8 próśb o listę słów i pominął obie funkcje w 5/8 przypadków braku dopasowania. Przeoczył wszystkie 8 próśb o pojedynczy klucz. Po dodaniu podpowiedzi model prawidłowo pominął funkcje w 8/8 takich przypadków, ale trafił już tylko w 2/8 próśb o listę. Łącznie uzyskał 10/24.

## Czy prostsze pytanie pomogło?

W R11 zadaliśmy modelowi jedno pytanie o każde z tych samych 24 poleceń. Czy użytkownik chce otrzymać pojedynczy klucz? Model odpowiedział „tak” 24 razy. Wykrył wszystkie właściwe prośby, a jednocześnie zaakceptował każdą z 16 pozostałych. Trafność zbalansowana, która daje równą wagę wykryciu celu i poprawnej odmowie, wyniosła 50%.

| Wybór pojedynczego klucza na tych samych poleceniach | Wykryte właściwe prośby | Błędne wskazania przy prośbie o listę | Błędne wskazania przy innej operacji |
|---|---:|---:|---:|
| Model 0,5B z pytaniem „tak czy nie” | 8/8 | 8/8 | 8/8 |
| Klasyfikator SSI z R9 | 4/8 | 3/8 | 5/8 |
| Zmieniony klasyfikator, późniejsza próba lokalna | 7/8 | 3/8 | 2/8 |

Ostatni wariant przygotowaliśmy po analizie znanego zestawu. W trzech dodatkowych poleceniach użytkownik chciał kolejno zmienić pisownię nazwy, wykonać zmianę odwrotną i porównać długości zapisów. Klasyfikator wskazał tę samą kompetencję za każdym razem. Tylko pierwsza decyzja była poprawna.

**Co dalej?** W planowanym R12 sprawdzimy rozpoznawanie kierunku zmiany na nowych nazwach. Osobno ocenimy prośby opisane słowami, w których użytkownik nie podaje przykładowego wyniku. Do tego czasu wybór kompetencji pozostaje eksperymentem.

[Pozostałe wyniki Kolektywu](Wyniki.md) · [Katalog SSI Universal Lab](../README.md)
