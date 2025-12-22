export type Language = 'it' | 'de' | 'fr'

export interface City {
  slug: string
  name: string
  nameLocal?: string // Nome nella lingua locale (tedesco/francese)
  canton?: string
  province?: string // Per città italiane
  region: string
  country: 'CH' | 'IT'
  language: Language
  population?: number
  coordinates: {
    lat: string
    lng: string
  }
  description: string
  descriptionLocal?: string // Descrizione nella lingua locale
  keywords: string[]
}

// Città svizzere e italiane
export const swissCities: City[] = [
  // ========== TICINO (ITALIANO) ==========
  {
    slug: 'lugano',
    name: 'Lugano',
    canton: 'TI',
    region: 'Ticino',
    country: 'CH',
    language: 'it',
    population: 63000,
    coordinates: { lat: '46.0037', lng: '8.9511' },
    description: 'Software house a Lugano. Sviluppo siti web, app mobile e software gestionali per aziende del Ticino e Svizzera.',
    keywords: ['software house Lugano', 'sviluppo software Lugano', 'agenzia web Lugano', 'sviluppatore Lugano']
  },
  {
    slug: 'bellinzona',
    name: 'Bellinzona',
    canton: 'TI',
    region: 'Ticino',
    country: 'CH',
    language: 'it',
    population: 43000,
    coordinates: { lat: '46.1950', lng: '9.0250' },
    description: 'Software house a Bellinzona. Soluzioni digitali per aziende del Canton Ticino e Svizzera.',
    keywords: ['software house Bellinzona', 'sviluppo software Bellinzona', 'agenzia web Bellinzona']
  },
  {
    slug: 'locarno',
    name: 'Locarno',
    canton: 'TI',
    region: 'Ticino',
    country: 'CH',
    language: 'it',
    population: 16000,
    coordinates: { lat: '46.1700', lng: '8.8000' },
    description: 'Software house a Locarno. Sviluppo software per il settore turistico e aziende del Lago Maggiore.',
    keywords: ['software house Locarno', 'sviluppo software Locarno', 'agenzia web Locarno']
  },
  {
    slug: 'mendrisio',
    name: 'Mendrisio',
    canton: 'TI',
    region: 'Ticino',
    country: 'CH',
    language: 'it',
    population: 15000,
    coordinates: { lat: '45.8700', lng: '8.9800' },
    description: 'Software house a Mendrisio. Servizi IT per aziende del Mendrisiotto e zona di confine.',
    keywords: ['software house Mendrisio', 'sviluppo software Mendrisio', 'agenzia web Mendrisio']
  },
  {
    slug: 'chiasso',
    name: 'Chiasso',
    canton: 'TI',
    region: 'Ticino',
    country: 'CH',
    language: 'it',
    population: 8000,
    coordinates: { lat: '45.8300', lng: '9.0300' },
    description: 'Software house a Chiasso. Sviluppo software per aziende di confine e commercio internazionale.',
    keywords: ['software house Chiasso', 'sviluppo software Chiasso', 'agenzia web Chiasso']
  },

  // ========== ZURIGO (TEDESCO) ==========
  {
    slug: 'zurigo',
    name: 'Zurigo',
    nameLocal: 'Zürich',
    canton: 'ZH',
    region: 'Zurigo',
    country: 'CH',
    language: 'de',
    population: 420000,
    coordinates: { lat: '47.3769', lng: '8.5417' },
    description: 'Software house a Zurigo. Sviluppo software enterprise, fintech e soluzioni digitali per aziende svizzere e internazionali.',
    descriptionLocal: 'Software-Entwicklung in Zürich. Enterprise-Software, Fintech und digitale Lösungen für Schweizer und internationale Unternehmen.',
    keywords: ['software house Zürich', 'software development Zürich', 'web agency Zürich', 'software house Zurigo', 'Softwareentwicklung Zürich', 'Webagentur Zürich']
  },
  {
    slug: 'winterthur',
    name: 'Winterthur',
    canton: 'ZH',
    region: 'Zurigo',
    country: 'CH',
    language: 'de',
    population: 115000,
    coordinates: { lat: '47.5000', lng: '8.7500' },
    description: 'Software house a Winterthur. Sviluppo software per industria, commercio e servizi.',
    descriptionLocal: 'Software-Entwicklung in Winterthur. Software für Industrie, Handel und Dienstleistungen.',
    keywords: ['software house Winterthur', 'software development Winterthur', 'web agency Winterthur', 'Softwareentwicklung Winterthur']
  },

  // ========== BERNA (TEDESCO) ==========
  {
    slug: 'berna',
    name: 'Berna',
    nameLocal: 'Bern',
    canton: 'BE',
    region: 'Berna',
    country: 'CH',
    language: 'de',
    population: 135000,
    coordinates: { lat: '46.9481', lng: '7.4474' },
    description: 'Software house a Berna. Sviluppo software per istituzioni federali, aziende e startup della capitale svizzera.',
    descriptionLocal: 'Software-Entwicklung in Bern. Software für Bundesinstitutionen, Unternehmen und Startups der Schweizer Hauptstadt.',
    keywords: ['software house Bern', 'software development Bern', 'web agency Bern', 'software house Berna', 'Softwareentwicklung Bern']
  },
  {
    slug: 'bienne',
    name: 'Bienne',
    nameLocal: 'Biel',
    canton: 'BE',
    region: 'Berna',
    country: 'CH',
    language: 'de',
    population: 55000,
    coordinates: { lat: '47.1400', lng: '7.2500' },
    description: 'Software house a Bienne. Sviluppo software per industria orologiera e manifatturiera.',
    descriptionLocal: 'Software-Entwicklung in Biel. Software für Uhrenindustrie und Fertigung.',
    keywords: ['software house Biel', 'software development Biel', 'web agency Biel', 'Softwareentwicklung Biel']
  },
  {
    slug: 'thun',
    name: 'Thun',
    canton: 'BE',
    region: 'Berna',
    country: 'CH',
    language: 'de',
    population: 44000,
    coordinates: { lat: '46.7500', lng: '7.6300' },
    description: 'Software house a Thun. Sviluppo software per turismo, commercio e servizi.',
    descriptionLocal: 'Software-Entwicklung in Thun. Software für Tourismus, Handel und Dienstleistungen.',
    keywords: ['software house Thun', 'software development Thun', 'web agency Thun', 'Softwareentwicklung Thun']
  },
  {
    slug: 'koniz',
    name: 'Köniz',
    canton: 'BE',
    region: 'Berna',
    country: 'CH',
    language: 'de',
    population: 42000,
    coordinates: { lat: '46.9200', lng: '7.4100' },
    description: 'Software house a Köniz. Sviluppo software per aziende dell\'area metropolitana di Berna.',
    descriptionLocal: 'Software-Entwicklung in Köniz. Software für Unternehmen im Großraum Bern.',
    keywords: ['software house Köniz', 'software development Köniz', 'web agency Köniz', 'Softwareentwicklung Köniz']
  },

  // ========== GINEVRA (FRANCESE) ==========
  {
    slug: 'ginevra',
    name: 'Ginevra',
    nameLocal: 'Genève',
    canton: 'GE',
    region: 'Ginevra',
    country: 'CH',
    language: 'fr',
    population: 200000,
    coordinates: { lat: '46.2044', lng: '6.1432' },
    description: 'Software house a Ginevra. Sviluppo software per organizzazioni internazionali, banche e aziende multinazionali.',
    descriptionLocal: 'Développement de logiciels à Genève. Logiciels pour organisations internationales, banques et entreprises multinationales.',
    keywords: ['software house Genève', 'software development Genève', 'web agency Genève', 'software house Ginevra', 'développement logiciel Genève', 'agence web Genève']
  },

  // ========== BASILEA (TEDESCO) ==========
  {
    slug: 'basilea',
    name: 'Basilea',
    nameLocal: 'Basel',
    canton: 'BS',
    region: 'Basilea',
    country: 'CH',
    language: 'de',
    population: 175000,
    coordinates: { lat: '47.5596', lng: '7.5886' },
    description: 'Software house a Basilea. Sviluppo software per industria farmaceutica, chimica e biotech.',
    descriptionLocal: 'Software-Entwicklung in Basel. Software für Pharmaindustrie, Chemie und Biotech.',
    keywords: ['software house Basel', 'software development Basel', 'web agency Basel', 'software house Basilea', 'Softwareentwicklung Basel']
  },

  // ========== LOSANNA (FRANCESE) ==========
  {
    slug: 'losanna',
    name: 'Losanna',
    nameLocal: 'Lausanne',
    canton: 'VD',
    region: 'Vaud',
    country: 'CH',
    language: 'fr',
    population: 140000,
    coordinates: { lat: '46.5197', lng: '6.6323' },
    description: 'Software house a Losanna. Sviluppo software per sport, turismo, educazione e startup innovative.',
    descriptionLocal: 'Développement de logiciels à Lausanne. Logiciels pour le sport, le tourisme, l\'éducation et les startups innovantes.',
    keywords: ['software house Lausanne', 'software development Lausanne', 'web agency Lausanne', 'software house Losanna', 'développement logiciel Lausanne']
  },
  {
    slug: 'vevey',
    name: 'Vevey',
    canton: 'VD',
    region: 'Vaud',
    country: 'CH',
    language: 'fr',
    population: 20000,
    coordinates: { lat: '46.4600', lng: '6.8500' },
    description: 'Software house a Vevey. Sviluppo software per industria alimentare, turismo e servizi.',
    descriptionLocal: 'Développement de logiciels à Vevey. Logiciels pour l\'industrie alimentaire, le tourisme et les services.',
    keywords: ['software house Vevey', 'software development Vevey', 'web agency Vevey', 'développement logiciel Vevey']
  },

  // ========== LUCERNA (TEDESCO) ==========
  {
    slug: 'lucerna',
    name: 'Lucerna',
    nameLocal: 'Luzern',
    canton: 'LU',
    region: 'Lucerna',
    country: 'CH',
    language: 'de',
    population: 82000,
    coordinates: { lat: '47.0502', lng: '8.3093' },
    description: 'Software house a Lucerna. Sviluppo software per turismo, servizi finanziari e commercio.',
    descriptionLocal: 'Software-Entwicklung in Luzern. Software für Tourismus, Finanzdienstleistungen und Handel.',
    keywords: ['software house Luzern', 'software development Luzern', 'web agency Luzern', 'software house Lucerna', 'Softwareentwicklung Luzern']
  },

  // ========== SAN GALLO (TEDESCO) ==========
  {
    slug: 'san-gallo',
    name: 'San Gallo',
    nameLocal: 'St. Gallen',
    canton: 'SG',
    region: 'San Gallo',
    country: 'CH',
    language: 'de',
    population: 76000,
    coordinates: { lat: '47.4245', lng: '9.3767' },
    description: 'Software house a San Gallo. Sviluppo software per industria tessile, manifatturiera e servizi.',
    descriptionLocal: 'Software-Entwicklung in St. Gallen. Software für Textilindustrie, Fertigung und Dienstleistungen.',
    keywords: ['software house St. Gallen', 'software development St. Gallen', 'web agency St. Gallen', 'Softwareentwicklung St. Gallen']
  },

  // ========== ALTRE CITTÀ SVIZZERE ==========
  {
    slug: 'friburgo',
    name: 'Friburgo',
    nameLocal: 'Fribourg',
    canton: 'FR',
    region: 'Friburgo',
    country: 'CH',
    language: 'fr',
    population: 38000,
    coordinates: { lat: '46.8017', lng: '7.1520' },
    description: 'Software house a Friburgo. Sviluppo software per educazione, servizi e commercio.',
    descriptionLocal: 'Développement de logiciels à Fribourg. Logiciels pour l\'éducation, les services et le commerce.',
    keywords: ['software house Fribourg', 'software development Fribourg', 'web agency Fribourg', 'développement logiciel Fribourg']
  },
  {
    slug: 'schaffhausen',
    name: 'Schaffhausen',
    canton: 'SH',
    region: 'Schaffhausen',
    country: 'CH',
    language: 'de',
    population: 36000,
    coordinates: { lat: '47.7000', lng: '8.6300' },
    description: 'Software house a Schaffhausen. Sviluppo software per industria e commercio.',
    descriptionLocal: 'Software-Entwicklung in Schaffhausen. Software für Industrie und Handel.',
    keywords: ['software house Schaffhausen', 'software development Schaffhausen', 'web agency Schaffhausen', 'Softwareentwicklung Schaffhausen']
  },
  {
    slug: 'coira',
    name: 'Coira',
    nameLocal: 'Chur',
    canton: 'GR',
    region: 'Grigioni',
    country: 'CH',
    language: 'de',
    population: 37000,
    coordinates: { lat: '46.8500', lng: '9.5300' },
    description: 'Software house a Coira. Sviluppo software per turismo, servizi e commercio dei Grigioni.',
    descriptionLocal: 'Software-Entwicklung in Chur. Software für Tourismus, Dienstleistungen und Handel in Graubünden.',
    keywords: ['software house Chur', 'software development Chur', 'web agency Chur', 'Softwareentwicklung Chur']
  },
  {
    slug: 'neuchatel',
    name: 'Neuchâtel',
    canton: 'NE',
    region: 'Neuchâtel',
    country: 'CH',
    language: 'fr',
    population: 34000,
    coordinates: { lat: '46.9928', lng: '6.9319' },
    description: 'Software house a Neuchâtel. Sviluppo software per industria orologiera, ricerca e innovazione.',
    descriptionLocal: 'Développement de logiciels à Neuchâtel. Logiciels pour l\'industrie horlogère, la recherche et l\'innovation.',
    keywords: ['software house Neuchâtel', 'software development Neuchâtel', 'web agency Neuchâtel', 'développement logiciel Neuchâtel']
  },
  {
    slug: 'zugo',
    name: 'Zugo',
    nameLocal: 'Zug',
    canton: 'ZG',
    region: 'Zugo',
    country: 'CH',
    language: 'de',
    population: 31000,
    coordinates: { lat: '47.1667', lng: '8.5167' },
    description: 'Software house a Zugo. Sviluppo software per fintech, servizi finanziari e aziende internazionali.',
    descriptionLocal: 'Software-Entwicklung in Zug. Software für Fintech, Finanzdienstleistungen und internationale Unternehmen.',
    keywords: ['software house Zug', 'software development Zug', 'web agency Zug', 'software house Zugo', 'Softwareentwicklung Zug']
  },
  {
    slug: 'la-chaux-de-fonds',
    name: 'La Chaux-de-Fonds',
    canton: 'NE',
    region: 'Neuchâtel',
    country: 'CH',
    language: 'fr',
    population: 38000,
    coordinates: { lat: '47.1000', lng: '6.8300' },
    description: 'Software house a La Chaux-de-Fonds. Sviluppo software per industria orologiera e manifatturiera.',
    descriptionLocal: 'Développement de logiciels à La Chaux-de-Fonds. Logiciels pour l\'industrie horlogère et la fabrication.',
    keywords: ['software house La Chaux-de-Fonds', 'software development La Chaux-de-Fonds', 'web agency La Chaux-de-Fonds', 'développement logiciel La Chaux-de-Fonds']
  },

  // ========== VENETO - FOCUS VERONA, ROVIGO, VENEZIA ==========
  {
    slug: 'verona',
    name: 'Verona',
    province: 'VR',
    region: 'Veneto',
    country: 'IT',
    language: 'it',
    population: 258000,
    coordinates: { lat: '45.4384', lng: '10.9916' },
    description: 'Software house a Verona. Sviluppo siti web, app mobile e software gestionali per aziende veronesi e del Veneto. Specializzati in e-commerce, software turistico, soluzioni per il settore vinicolo, software per hotel e ristoranti, booking systems e piattaforme per eventi culturali come l\'Arena di Verona.',
    keywords: [
      'software house Verona', 'sviluppo software Verona', 'agenzia web Verona',
      'sviluppatore Verona', 'programmatore Verona', 'app mobile Verona',
      'siti web Verona', 'web developer Verona', 'software gestionale Verona',
      'e-commerce Verona', 'software turistico Verona', 'software vinicolo Verona',
      'creazione siti Verona', 'sviluppo app Verona', 'consulenza IT Verona',
      'software hotel Verona', 'software ristoranti Verona', 'booking system Verona',
      'software eventi Verona', 'software Arena Verona', 'piattaforme turismo Verona',
      'software enogastronomia Verona', 'e-commerce vino Verona', 'app turismo Verona',
      'software cultura Verona', 'sviluppo software Veneto', 'agenzia web Veneto',
      'preventivo sito web Verona', 'quanto costa app Verona', 'miglior software house Verona',
      'sviluppatore freelance Verona', 'cerco programmatore Verona', 'web agency Verona',
      'digital agency Verona', 'software su misura Verona', 'sviluppo ERP Verona',
      'sviluppo CRM Verona', 'software PMI Verona', 'software startup Verona'
    ]
  },
  {
    slug: 'rovigo',
    name: 'Rovigo',
    province: 'RO',
    region: 'Veneto',
    country: 'IT',
    language: 'it',
    population: 51000,
    coordinates: { lat: '45.0703', lng: '11.7900' },
    description: 'Software house a Rovigo. Sviluppo software per aziende rodigine e del Polesine. Specializzati in software agricolo, gestionali per PMI, software per aziende agricole, soluzioni per la gestione del territorio, software per cooperative agricole, sistemi di tracciabilità alimentare e soluzioni digitali per il territorio veneto.',
    keywords: [
      'software house Rovigo', 'sviluppo software Rovigo', 'agenzia web Rovigo',
      'sviluppatore Rovigo', 'programmatore Rovigo', 'app mobile Rovigo',
      'siti web Rovigo', 'web developer Rovigo', 'software gestionale Rovigo',
      'software agricolo Rovigo', 'software PMI Rovigo', 'consulenza IT Rovigo',
      'sviluppo software Polesine', 'agenzia web Polesine', 'software aziende agricole Rovigo',
      'software cooperative Rovigo', 'tracciabilità alimentare Rovigo', 'software territorio Rovigo',
      'gestione aziende agricole Rovigo', 'software zootecnia Rovigo', 'software irrigazione Rovigo',
      'preventivo software Rovigo', 'quanto costa sito web Rovigo', 'miglior software house Rovigo',
      'sviluppatore freelance Rovigo', 'cerco programmatore Rovigo', 'web agency Rovigo',
      'digital agency Rovigo', 'software su misura Rovigo', 'sviluppo ERP Rovigo',
      'sviluppo CRM Rovigo', 'software startup Rovigo', 'e-commerce Rovigo',
      'software contabilità Rovigo', 'software fatturazione Rovigo', 'app agricoltura Rovigo'
    ]
  },
  {
    slug: 'venezia',
    name: 'Venezia',
    province: 'VE',
    region: 'Veneto',
    country: 'IT',
    language: 'it',
    population: 261000,
    coordinates: { lat: '45.4408', lng: '12.3155' },
    description: 'Software house a Venezia. Sviluppo software per turismo, hotel, ristoranti, B&B, agenzie viaggi e aziende veneziane. Specializzati in software per il settore turistico, booking systems, PMS per hotel, software per crociere, soluzioni per il patrimonio culturale, app turistiche, software per eventi come la Biennale e il Carnevale di Venezia.',
    keywords: [
      'software house Venezia', 'sviluppo software Venezia', 'agenzia web Venezia',
      'sviluppatore Venezia', 'programmatore Venezia', 'app mobile Venezia',
      'siti web Venezia', 'web developer Venezia', 'software gestionale Venezia',
      'software turistico Venezia', 'software hotel Venezia', 'software ristoranti Venezia',
      'booking system Venezia', 'software patrimonio culturale Venezia', 'PMS hotel Venezia',
      'software crociere Venezia', 'app turismo Venezia', 'software B&B Venezia',
      'software agenzie viaggi Venezia', 'software eventi Venezia', 'software Biennale Venezia',
      'software Carnevale Venezia', 'piattaforme turismo Venezia', 'software musei Venezia',
      'software laguna Venezia', 'e-commerce turismo Venezia', 'software prenotazioni Venezia',
      'preventivo software Venezia', 'quanto costa app Venezia', 'miglior software house Venezia',
      'sviluppatore freelance Venezia', 'cerco programmatore Venezia', 'web agency Venezia',
      'digital agency Venezia', 'software su misura Venezia', 'sviluppo ERP Venezia',
      'sviluppo CRM Venezia', 'software startup Venezia', 'software hospitality Venezia'
    ]
  },
  {
    slug: 'padova',
    name: 'Padova',
    province: 'PD',
    region: 'Veneto',
    country: 'IT',
    language: 'it',
    population: 214000,
    coordinates: { lat: '45.4064', lng: '11.8768' },
    description: 'Software house a Padova. Sviluppo software per università, ricerca, sanità e aziende padovane.',
    keywords: ['software house Padova', 'sviluppo software Padova', 'agenzia web Padova', 'sviluppatore Padova']
  },
  {
    slug: 'vicenza',
    name: 'Vicenza',
    province: 'VI',
    region: 'Veneto',
    country: 'IT',
    language: 'it',
    population: 112000,
    coordinates: { lat: '45.5455', lng: '11.5353' },
    description: 'Software house a Vicenza. Sviluppo software per industria manifatturiera, orafa e aziende vicentine.',
    keywords: ['software house Vicenza', 'sviluppo software Vicenza', 'agenzia web Vicenza', 'sviluppatore Vicenza']
  },
  {
    slug: 'treviso',
    name: 'Treviso',
    province: 'TV',
    region: 'Veneto',
    country: 'IT',
    language: 'it',
    population: 85000,
    coordinates: { lat: '45.6669', lng: '12.2453' },
    description: 'Software house a Treviso. Sviluppo software per industria, commercio e aziende trevigiane.',
    keywords: ['software house Treviso', 'sviluppo software Treviso', 'agenzia web Treviso', 'sviluppatore Treviso']
  },
  {
    slug: 'belluno',
    name: 'Belluno',
    province: 'BL',
    region: 'Veneto',
    country: 'IT',
    language: 'it',
    population: 36000,
    coordinates: { lat: '46.1400', lng: '12.2167' },
    description: 'Software house a Belluno. Sviluppo software per turismo montano, industria e aziende bellunesi.',
    keywords: ['software house Belluno', 'sviluppo software Belluno', 'agenzia web Belluno', 'sviluppatore Belluno']
  },

  // ========== LOMBARDIA ==========
  {
    slug: 'milano',
    name: 'Milano',
    province: 'MI',
    region: 'Lombardia',
    country: 'IT',
    language: 'it',
    population: 1400000,
    coordinates: { lat: '45.4642', lng: '9.1900' },
    description: 'Software house a Milano. Sviluppo software enterprise, fintech, fashion tech e soluzioni digitali per grandi aziende e startup innovative.',
    keywords: [
      'software house Milano', 'sviluppo software Milano', 'agenzia web Milano',
      'sviluppatore Milano', 'programmatore Milano', 'app mobile Milano',
      'siti web Milano', 'web developer Milano', 'software enterprise Milano',
      'fintech Milano', 'fashion tech Milano', 'startup software Milano'
    ]
  },
  {
    slug: 'brescia',
    name: 'Brescia',
    province: 'BS',
    region: 'Lombardia',
    country: 'IT',
    language: 'it',
    population: 200000,
    coordinates: { lat: '45.5416', lng: '10.2118' },
    description: 'Software house a Brescia. Sviluppo software per industria manifatturiera, metalmeccanica e aziende bresciane.',
    keywords: ['software house Brescia', 'sviluppo software Brescia', 'agenzia web Brescia', 'sviluppatore Brescia']
  },
  {
    slug: 'bergamo',
    name: 'Bergamo',
    province: 'BG',
    region: 'Lombardia',
    country: 'IT',
    language: 'it',
    population: 120000,
    coordinates: { lat: '45.6944', lng: '9.6775' },
    description: 'Software house a Bergamo. Sviluppo software per industria, commercio e aziende bergamasche.',
    keywords: ['software house Bergamo', 'sviluppo software Bergamo', 'agenzia web Bergamo', 'sviluppatore Bergamo']
  },
  {
    slug: 'como',
    name: 'Como',
    province: 'CO',
    region: 'Lombardia',
    country: 'IT',
    language: 'it',
    population: 85000,
    coordinates: { lat: '45.8081', lng: '9.0853' },
    description: 'Software house a Como. Sviluppo software per turismo, industria tessile e aziende comasche.',
    keywords: ['software house Como', 'sviluppo software Como', 'agenzia web Como', 'sviluppatore Como']
  },
  {
    slug: 'varese',
    name: 'Varese',
    province: 'VA',
    region: 'Lombardia',
    country: 'IT',
    language: 'it',
    population: 81000,
    coordinates: { lat: '45.8206', lng: '8.8256' },
    description: 'Software house a Varese. Sviluppo software per industria, commercio e aziende varesine.',
    keywords: ['software house Varese', 'sviluppo software Varese', 'agenzia web Varese', 'sviluppatore Varese']
  },
  {
    slug: 'pavia',
    name: 'Pavia',
    province: 'PV',
    region: 'Lombardia',
    country: 'IT',
    language: 'it',
    population: 73000,
    coordinates: { lat: '45.1847', lng: '9.1581' },
    description: 'Software house a Pavia. Sviluppo software per università, ricerca, sanità e aziende pavesi.',
    keywords: ['software house Pavia', 'sviluppo software Pavia', 'agenzia web Pavia', 'sviluppatore Pavia']
  },
  {
    slug: 'cremona',
    name: 'Cremona',
    province: 'CR',
    region: 'Lombardia',
    country: 'IT',
    language: 'it',
    population: 72000,
    coordinates: { lat: '45.1327', lng: '10.0225' },
    description: 'Software house a Cremona. Sviluppo software per industria alimentare, agricoltura e aziende cremonesi.',
    keywords: ['software house Cremona', 'sviluppo software Cremona', 'agenzia web Cremona', 'sviluppatore Cremona']
  },
  {
    slug: 'mantova',
    name: 'Mantova',
    province: 'MN',
    region: 'Lombardia',
    country: 'IT',
    language: 'it',
    population: 49000,
    coordinates: { lat: '45.1564', lng: '10.7914' },
    description: 'Software house a Mantova. Sviluppo software per turismo, cultura, industria e aziende mantovane.',
    keywords: ['software house Mantova', 'sviluppo software Mantova', 'agenzia web Mantova', 'sviluppatore Mantova']
  },
  {
    slug: 'lecco',
    name: 'Lecco',
    province: 'LC',
    region: 'Lombardia',
    country: 'IT',
    language: 'it',
    population: 48000,
    coordinates: { lat: '45.8569', lng: '9.3903' },
    description: 'Software house a Lecco. Sviluppo software per industria, turismo e aziende lecchesi.',
    keywords: ['software house Lecco', 'sviluppo software Lecco', 'agenzia web Lecco', 'sviluppatore Lecco']
  },
  {
    slug: 'lodi',
    name: 'Lodi',
    province: 'LO',
    region: 'Lombardia',
    country: 'IT',
    language: 'it',
    population: 45000,
    coordinates: { lat: '45.3142', lng: '9.5031' },
    description: 'Software house a Lodi. Sviluppo software per agricoltura, industria alimentare e aziende lodigiane.',
    keywords: ['software house Lodi', 'sviluppo software Lodi', 'agenzia web Lodi', 'sviluppatore Lodi']
  },
  {
    slug: 'sondrio',
    name: 'Sondrio',
    province: 'SO',
    region: 'Lombardia',
    country: 'IT',
    language: 'it',
    population: 22000,
    coordinates: { lat: '46.1719', lng: '9.8714' },
    description: 'Software house a Sondrio. Sviluppo software per turismo montano, industria e aziende sondriesi.',
    keywords: ['software house Sondrio', 'sviluppo software Sondrio', 'agenzia web Sondrio', 'sviluppatore Sondrio']
  },
  {
    slug: 'monza',
    name: 'Monza',
    province: 'MB',
    region: 'Lombardia',
    country: 'IT',
    language: 'it',
    population: 124000,
    coordinates: { lat: '45.5845', lng: '9.2744' },
    description: 'Software house a Monza. Sviluppo software per industria, commercio, sport e aziende monzesi e della Brianza.',
    keywords: [
      'software house Monza', 'sviluppo software Monza', 'agenzia web Monza',
      'sviluppatore Monza', 'programmatore Monza', 'app mobile Monza',
      'siti web Monza', 'web developer Monza', 'software gestionale Monza',
      'software Brianza', 'sviluppo software Brianza', 'agenzia web Brianza'
    ]
  },
]

// Funzione helper per trovare una città per slug
export function getCityBySlug(slug: string): City | undefined {
  return swissCities.find(city => city.slug === slug)
}

// Funzione helper per ottenere tutte le città di un cantone
export function getCitiesByCanton(canton: string): City[] {
  return swissCities.filter(city => city.canton === canton)
}

// Funzione helper per ottenere tutte le città di una provincia
export function getCitiesByProvince(province: string): City[] {
  return swissCities.filter(city => city.province === province)
}

// Funzione helper per ottenere tutte le città di una regione
export function getCitiesByRegion(region: string): City[] {
  return swissCities.filter(city => city.region === region)
}

// Funzione helper per ottenere tutte le città di un paese
export function getCitiesByCountry(country: 'CH' | 'IT'): City[] {
  return swissCities.filter(city => city.country === country)
}
