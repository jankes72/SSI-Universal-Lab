# SSI HERKULES — moduł publiczny R1

Pakiet źródłowy dla publicznej strony Labiryntu oraz skrótu **SSI HERKULES** w panelu Universal Lab.

## Zakres

- public/herkules/index.html — semantyczna strona po polsku; treść działa bez JavaScriptu i jest czytelna dla ludzi oraz crawlerów.
- public/robots.txt, public/sitemap-herkules.xml i public/llms.txt — wskazówki dla crawlerów.
- public/herkules/tab.js — dodaje link „SSI HERKULES” do nav#tabs w panelu Universal Lab.
- integration/panel-entry-hook.js — loader do dołączenia w skrypcie wejściowym panelu.
- integration/Caddyfile.snippet — reguła statycznego serwowania publicznej ścieżki.

## Fakty i ograniczenia

- HERCULES i Labirynt są w rozwoju.
- Historyczny prototyp R3 opisywał 48 logicznych punktów; to nie jest 48 fizycznych hostów.
- Wynik 110/110 dotyczy lokalnych testów prototypu, nie wdrożenia VPS.
- Cel czterech klatek na czterech hostach jest założeniem architektury; ta paczka nie poświadcza, że klatki są zainstalowane lub działają.
- SEO/AISEO wymaga osobnych pomiarów; pobranie treści przez crawler nie dowodzi widoczności w wyszukiwarce ani cytowania przez model.
- Sam User-Agent nie uwierzytelnia bota.

## Integracja

1. Udostępnić katalog public jako /var/www/ssi-herkules/ w trybie tylko do odczytu.
2. Dodać regułę z integration/Caddyfile.snippet do bloku ssi.chaos.re, przed istniejącym handlerem domyślnym. robots.txt jest globalny dla domeny; uzgodnić reguły z istniejącą polityką.
3. Dołączyć integration/panel-entry-hook.js do aktualnego skryptu wejściowego Universal Lab. Loader dodaje link do publicznego modułu; nie wykonuje API ani działań administracyjnych.
4. Przed przeładowaniem Caddy zweryfikować konfigurację i sprawdzić anonimowe odpowiedzi /herkules/, /robots.txt, /sitemap-herkules.xml oraz /llms.txt.

To jest źródło do przeglądu. Repozytorium SSI-Universal-Lab nie ma włączonego GitHub Pages; sam PR nie wdraża strony na VPS i nie zmienia serwera.
