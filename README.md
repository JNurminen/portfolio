# Portfolio

Henkilökohtainen portfoliosivustoni: **https://jnurminen.github.io/portfolio/**

Responsiivinen yhden sivun portfolio, jossa esittelen osaamiseni, työkokemukseni, koulutukseni ja projektini.

## Teknologiat

React, Tailwind CSS, Vite, GitHub Actions, GitHub Pages

## Rakenne

```
src/data.js         Kaikki sivun sisältö (profiili, taidot, kokemus, projektit)
src/components/     Sivun osiot omina komponentteinaan
public/             Profiilikuva
.github/workflows/  Automaattinen julkaisu GitHub Pagesiin
```

Sisältö on erotettu komponenteista, joten tekstejä voi päivittää muokkaamalla vain `src/data.js`-tiedostoa.

## Käynnistys

```bash
npm install
npm run dev
```

Sivu aukeaa osoitteeseen http://localhost:5173/portfolio/

## Julkaisu

Jokainen push `main`-haaraan rakentaa sivun ja julkaisee sen GitHub Pagesiin GitHub Actionsin avulla.
