// Muokkaa tätä tiedostoa – kaikki sivun sisältö tulee täältä.

export const profile = {
  name: 'Jani Nurminen',
  title: 'Tieto- ja viestintätekniikan opiskelija',
  photo: '/profile.jpg',
  intro:
    'Teknisestä ongelmanratkaisusta, tekoälystä ja ohjelmistojen käytännön hyödyntämisestä innostunut ohjelmistokehittäjä. Opiskelen insinööriksi Metropoliassa.',
  about: [
    'Taustani yhdistää pitkän kokemuksen vastuullisista teknisistä tehtävistä, asiakaspalvelusta ja järjestelmien ylläpidosta sekä tuoreen ohjelmistokehityksen osaamisen. Minulla on käytännön kokemusta IT-tuesta, verkkotekniikasta, esitystekniikasta ja teknisten ongelmien selvittämisestä käyttäjälähtöisesti.',
    'Opiskelen tieto- ja viestintätekniikan insinööriksi, ja aiemmissa opinnoissani olen perehtynyt muun muassa Pythoniin, SQL:ään, JavaScriptiin, Reactiin, ASP.NET MVC:hen, Djangoon, NoSQL-tietokantoihin, DevOpsiin, Big Dataan ja ohjelmistorobotiikkaan.',
    'Haluan kehittää osaamistani erityisesti tekoälyn, datan ja liiketoimintasovellusten parissa sekä soveltaa teknologiaa konkreettisesti käyttäjien ja liiketoiminnan tarpeisiin.',
  ],
  email: 'nurminenjj@gmail.com',
  github: 'https://github.com/JNurminen',
  linkedin: 'https://www.linkedin.com/in/jani-nurminen-900545196/',
}

export const skills = [
  {
    group: 'Ohjelmointi',
    items: ['Python', 'C#', 'JavaScript', 'React', 'HTML & CSS', 'ASP.NET MVC', 'Django'],
  },
  {
    group: 'Data & automaatio',
    items: ['SQL', 'NoSQL', 'Big Data', 'DevOps', 'Git', 'RPA', 'Tekoälyn hyödyntäminen'],
  },
  {
    group: 'IT & yhteistyö',
    items: [
      'IT-tuki',
      'Käyttäjäneuvonta',
      'Verkkotekniikka',
      'Tietoturvan perusteet',
      'Tekninen ongelmanratkaisu',
      'Asiakaspalvelu',
    ],
  },
]

export const experience = [
  {
    role: 'Kiinteistövastaava',
    place: 'L & Y Paloheimon Säätiö, Järvenpää',
    period: '2015 – nyt',
    points: [
      'Kiinteistöjen ja talotekniikan ylläpito: ilmanvaihto, lämmitys, vesi ja jäähdytys',
      'Paloturvallisuuteen liittyvät tehtävät',
      'Vikatilanteiden selvittäminen ja käytännön ongelmanratkaisu',
      'Yhteistyö palveluntarjoajien, käyttäjien ja sidosryhmien kanssa',
    ],
  },
  {
    role: 'IT-tukihenkilö',
    place: 'Salmi Catering Oy, Järvenpää',
    period: '2018 – 2023',
    points: [
      'Tekninen tuki tapahtumissa ja asiakastilaisuuksissa',
      'Äänentoisto-, videotykki- ja tietoteknisten laitteiden käyttö ja vianratkaisu',
      'Verkkoyhteyksien ja esitystekniikan käyttöönotto',
      'Nopea ongelmanratkaisu paineen alla ja teknisten ratkaisujen selittäminen asiakkaille',
    ],
  },
]

export const education = [
  {
    degree: 'Tieto- ja viestintätekniikan insinööri',
    place: 'Metropolia, Helsinki',
    period: '2025 – 2027',
    description:
      'Opinnot vahvistavat ohjelmistokehityksen, järjestelmäajattelun, datan hyödyntämisen ja modernien teknologioiden osaamista.',
  },
  {
    degree: 'Tieto- ja viestintätekniikan perustutkinto, ohjelmistokehittäjä',
    place: 'Careeria, Porvoo',
    period: '2023 – 2025',
    description:
      'Valmistuin erinomaisin arvosanoin. Painopisteinä ohjelmistokehitys, tietokannat, web-teknologiat, data, DevOps ja automaatio.',
  },
]

export const projects = [
  {
    title: 'Muistiinpanosovellus',
    description:
      'Full stack -sovellus, jossa käyttäjä voi rekisteröityä, kirjautua ja hallita omia muistiinpanojaan. Kirjautuminen on toteutettu JWT-tokeneilla, ja käyttöliittymää on testattu Cypressillä.',
    tech: ['React', 'Django REST', 'JWT', 'PostgreSQL', 'Cypress'],
    github: 'https://github.com/JNurminen/Django-React',
    demo: '',
  },
  {
    title: 'Yhteystietosovellus',
    description:
      'Yhteystietojen hallintaan tarkoitettu sovellus, jossa React-käyttöliittymä keskustelee Flask-REST-rajapinnan kanssa. Mukana yksikkötestit ja Cypress-päästä päähän -testit.',
    tech: ['React', 'Python', 'Flask', 'SQLite', 'Cypress'],
    github: 'https://github.com/JNurminen/PRJ1',
    demo: '',
  },
  {
    title: 'Elokuvasovellus',
    description:
      'Sovelluksella voi selata suosittuja elokuvia, hakea niitä TMDB-rajapinnasta ja tallentaa suosikkeja. Sovelluksen tila on hallittu React Contextilla.',
    tech: ['React', 'REST API', 'Context API'],
    github: 'https://github.com/JNurminen/React-MovieApp',
    demo: '',
  },
  {
    title: 'Tekoälychat',
    description:
      'Chat-käyttöliittymä, joka on yhdistetty Googlen Gemini-kielimalliin. Sivupalkissa näkyvät aiemmat kysymykset, ja vastaukset muotoillaan luettavaan muotoon.',
    tech: ['React', 'Gemini API', 'Vite'],
    github: 'https://github.com/JNurminen/React-Gemini',
    demo: '',
  },
  {
    title: 'Musiikkitietokanta',
    description:
      'Django-sovellus bändien ja albumien hallintaan: listaus, lisäys, muokkaus ja poisto kirjautuneille käyttäjille. Julkaistu Renderiin PostgreSQL-tietokannan kanssa.',
    tech: ['Python', 'Django', 'PostgreSQL', 'Render'],
    github: 'https://github.com/JNurminen/djangosovellus',
    demo: '',
  },
  {
    title: 'REST API (Northwind)',
    description:
      'ASP.NET Core -rajapinta, jonka kautta voi käsitellä Northwind-tietokannan asiakkaita, työntekijöitä ja tuotteita Entity Frameworkin avulla.',
    tech: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server'],
    github: 'https://github.com/JNurminen/RestApi1',
    demo: '',
  },
]
