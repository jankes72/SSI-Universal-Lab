# SSI Universal Lab

Polski · [English](lang/en.md) · [Deutsch](lang/de.md) · [Español](lang/es.md) · [Français](lang/fr.md)

Rozwijamy lokalne modele językowe i sprawdzamy, które zadania potrafią wykonać na sprzęcie dostępnym klientowi. W Universal Lab można porozmawiać z SSI Advisor, poznać wyniki Kolektywu i zgłosić własny przypadek do pilotażu. [Otwórz Universal Lab](https://ssi.chaos.re/)

## Co chcesz zrobić?

| Potrzeba | Co rozwijamy | Gdzie przeczytać więcej |
|---|---|---|
| Chcę wiedzieć, co dzieje się na moim serwerze i jak ludzie oraz systemy AI znajdują ofertę firmy. | HERCULES łączy diagnostykę usług, obserwację ruchu robotów i badanie widoczności strony. Plecak gromadzi zatwierdzone opisy produktów, a Labirynt służy do odizolowanych prób. | [SSI HERCULES](produkty/HERCULES.md) |
| Chcę zadawać pytania o dokumenty firmy i sprawdzać, skąd pochodzi odpowiedź. | Private AI ma wyszukiwać właściwe fragmenty, przytaczać źródła i przestrzegać uprawnień osoby pytającej. | [SSI Private AI](produkty/Private-AI.md) |
| Mam ograniczony RAM lub sprzęt bez GPU. Chcę wiedzieć, jaki model sobie poradzi. | MultiQuant Studio służy do porównywania wariantów modelu pod względem jakości, czasu i pamięci na wskazanym sprzęcie. | [SSI MultiQuant Studio](produkty/MultiQuant-Studio.md) |
| Mam własny model i chcę sprawdzić, czy modyfikacja SSI Nano pomoże w konkretnym zadaniu. | W ramach pilotażu ustalamy próbę bazową i kryteria oceny. Wyniki badań Nano obejmują także przypadki, w których prostsza metoda wypadła lepiej. | [Usługi R&D](uslugi/Pilotaze.md) |
| Chcę porozmawiać o współpracy, poprosić o dostęp lub umówić spotkanie. | SSI Advisor pomaga znaleźć temat i przygotować zgłoszenie. Termin i zakres potwierdza operator. | [SSI Advisor i Universal Lab](narzedzia/Universal-Lab.md) |
| Chcę sprawdzić zmianę w kodzie lub porównać dwie rewizje dokumentacji. | SSI CODEX przygotowuje propozycję do przeglądu. W pilotażu mierzymy zgodność z regułą, trafność źródła i rozpoznawanie braków. | [SSI CODEX](produkty/SSI-CODEX.md) |

Cztery produkty są **w rozwoju**. Publicznie dostępne są rozmowa z SSI Advisor, formularz kontaktowy i opisane niżej wyniki. [Kierunki produktowe w SSI V5](https://github.com/jankes72/SSI_V5/blob/3cb98382de3753c3b13981b5de9e7fd690e43736/README.md?plain=1#L16-L23)

## SSI CODEX · co sprawdzamy przez 20 godzin?

Czy CODEX potrafi wskazać zdanie potwierdzające odpowiedź i zauważyć, że w notatce brakuje szukanego faktu? 20 listopada uruchomiliśmy na jednym serwerze SSI próbę obejmującą także przegląd kodu, porównanie rewizji, odczytywanie wyników Pythona i pisanie krótkich wyrażeń. Przez 16 godzin CODEX dobiera sposób odpowiedzi. Ostatnie 4 godziny służą porównaniu go z modelem bazowym na nowych zadaniach. Chcemy zmierzyć zarówno poprawione odpowiedzi, jak i nowe błędy oraz czas potrzebny na dodatkowe sprawdzenie. [Opis badania i stan przy starcie](badania/SSI-CODEX.md#cel-20-godzinnego-badania-ssi-codex)

## Co już zmierzyliśmy?

Przy generowaniu tych samych 128 tokenów na CPU wariant 3B skrócił medianę czasu z 256,53 do 80,66 s. Prototyp Plecaka i Labiryntu Herkulesa zaliczył 110 ze 110 lokalnych testów aplikacji. Każdy wynik ma własny punkt odniesienia i zakres próby. [Wyniki Kolektywu](badania/Wyniki.md)

Sprawdziliśmy też, kiedy mały model potrafi dobrać gotową funkcję do polecenia. Próby obejmowały wybór między dwiema kompetencjami oraz sytuacje, w których żadna nie pasowała. [SSI Nano-Brain i biblioteka Pocket](badania/SSI-Nano-Brain.md)

[O SSI i architekturze](https://ssi.chaos.re/dyrektor/o-ssi) · [Zgłoś temat do rozmowy](https://ssi.chaos.re/#contact)
