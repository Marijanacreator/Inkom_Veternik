# INKOM DOO - dizajnerski predlog

Statički sajt na srpskoj latinici. Paket radi bez instalacije, baze podataka i build koraka.

## Postavljanje na GitHub Pages

1. Raspakujte ZIP. `index.html`, `assets/` i ostali fajlovi treba da budu direktno u korenu repozitorijuma, bez dodatnog nadređenog foldera.
2. Otpremite sve fajlove, uključujući `.github/workflows/pages.yml` i `.nojekyll`.
3. U repozitorijumu otvorite **Settings > Pages > Source > GitHub Actions**.
4. Push na granu `main` ili `master` pokreće postavljanje. Tok proverite u kartici **Actions**.

Alternativa: **Deploy from a branch > main > / (root)**. U tom slučaju nije potrebno koristiti Actions workflow.

## Lokalni pregled

U folderu sajta pokrenite `python -m http.server 4173 --bind 127.0.0.1` i otvorite http://127.0.0.1:4173.

## Sadržaj paketa

- 13 HTML stranica, styles.css i app.js
- assets/ sa slikama, logotipima i SVG ikonama koje stranice koriste
- .github/workflows/pages.yml i .nojekyll

Putanje su relativne i podržavaju GitHub Pages projekat u poddirektorijumu. Kontakt linkovi koriste `tel:`. Nema sistema za slanje kontakt forme.

Ovo je nezvanični dizajnerski predlog, ne zvanični sajt kompanije. Status prava na fotografije i potvrde asortimana ostaje prema ranije dostavljenoj razvojnoj evidenciji; paket ne predstavlja potvrdu prava za komercijalnu objavu.
