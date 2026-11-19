# SSI MultiQuant Studio

**Produkt w rozwoju.** Studio ma pomagać w wyborze modelu do konkretnego sprzętu i zadania. Przykładowo firma z komputerem bez GPU może chcieć wyciągać terminy i cytaty z polskich dokumentów. Rozmiar pliku modelu to tylko jedna z informacji potrzebnych do tej decyzji. [Opis MultiQuant Studio w SSI V5](https://github.com/jankes72/SSI_V5/blob/8ab81c767eac6c6356667546be95e8d4cf506a3f/README.md?plain=1#L16-L20)

W pilotażu określamy dostępny RAM, CPU lub GPU, typ pytań, oczekiwaną poprawność oraz dopuszczalny czas odpowiedzi. Ten sam zestaw przykładów służy do oceny modelu bazowego i każdego zmodyfikowanego wariantu. Potencjalny rezultat dla klienta to zestawienie jakości, czasu i zużycia pamięci oraz rekomendacja wariantu do dalszych prób.

Jedno z doświadczeń dotyczyło modelu Llama 3.1 70B Instruct. Wersja BF16 na dwóch GPU A100 oraz wersja IQ2_XXS na CPU z limitem 8 GiB i dostępnym swapem odpowiedziały „4” na pytanie „2 + 2”. Odpowiedź potwierdza uruchomienie obu wariantów w tej próbie. Szerszy test jakości należy wykonać na tych samych zadaniach po obu stronach. [Raport o 70B na GPU i CPU](https://github.com/jankes72/SSI_V5/blob/8ab81c767eac6c6356667546be95e8d4cf506a3f/PUBLIC_MODELS/SSI_MULTIQ_V7_70B_8G_PUBLIC_RESULTS_20261025.md)

[Usługi modyfikacji modeli](../uslugi/Pilotaze.md) · [Wyniki Nano i CPU](../badania/Wyniki.md) · [Zgłoś sprzęt i zadanie](https://ssi.chaos.re/#contact)
