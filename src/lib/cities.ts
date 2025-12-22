export interface CityData {
  name: string
  slug: string
  canton: string
  cantonCode: string
  description: string
  keywords: string[]
  coordinates: {
    lat: string
    lng: string
  }
  postalCode: string
  areaServed: string[]
}

export const swissCities: CityData[] = [
  {
    name: 'Zurigo',
    slug: 'zurigo',
    canton: 'Zurigo',
    cantonCode: 'ZH',
    description: 'Software house a Zurigo. Sviluppo siti web, app mobile e software gestionali per aziende zurighesi. Qualità svizzera e innovazione tecnologica.',
    keywords: [
      'software house Zurigo',
      'sviluppo software Zurigo',
      'agenzia web Zurigo',
      'sviluppatore Zurigo',
      'app mobile Zurigo',
      'siti web Zurigo',
      'web developer Zurigo',
      'programmatore Zurigo',
    ],
    coordinates: {
      lat: '47.3769',
      lng: '8.5417',
    },
    postalCode: '8000',
    areaServed: ['Zurigo', 'Zürich', 'Winterthur', 'Uster', 'Dübendorf', 'Schlieren', 'Bülach', 'Dietikon'],
  },
  {
    name: 'Basilea',
    slug: 'basilea',
    canton: 'Basilea Città',
    cantonCode: 'BS',
    description: 'Software house a Basilea. Sviluppo software per aziende farmaceutiche, biotech e manifatturiere. Soluzioni digitali innovative.',
    keywords: [
      'software house Basilea',
      'sviluppo software Basilea',
      'agenzia web Basilea',
      'sviluppatore Basilea',
      'app mobile Basilea',
      'siti web Basilea',
      'web developer Basilea',
      'programmatore Basilea',
    ],
    coordinates: {
      lat: '47.5596',
      lng: '7.5886',
    },
    postalCode: '4000',
    areaServed: ['Basilea', 'Basel', 'Riehen', 'Bettingen', 'Allschwil', 'Binningen', 'Münchenstein'],
  },
  {
    name: 'Berna',
    slug: 'berna',
    canton: 'Berna',
    cantonCode: 'BE',
    description: 'Software house a Berna. Sviluppo software per istituzioni federali, banche e aziende. Soluzioni enterprise di alta qualità.',
    keywords: [
      'software house Berna',
      'sviluppo software Berna',
      'agenzia web Berna',
      'sviluppatore Berna',
      'app mobile Berna',
      'siti web Berna',
      'web developer Berna',
      'programmatore Berna',
    ],
    coordinates: {
      lat: '46.9481',
      lng: '7.4474',
    },
    postalCode: '3000',
    areaServed: ['Berna', 'Bern', 'Ostermundigen', 'Köniz', 'Muri bei Bern', 'Wohlen bei Bern', 'Ittigen'],
  },
  {
    name: 'Ginevra',
    slug: 'ginevra',
    canton: 'Ginevra',
    cantonCode: 'GE',
    description: 'Software house a Ginevra. Sviluppo software per organizzazioni internazionali, banche private e aziende di lusso.',
    keywords: [
      'software house Ginevra',
      'sviluppo software Ginevra',
      'agenzia web Ginevra',
      'sviluppatore Ginevra',
      'app mobile Ginevra',
      'siti web Ginevra',
      'web developer Ginevra',
      'programmatore Ginevra',
    ],
    coordinates: {
      lat: '46.2044',
      lng: '6.1432',
    },
    postalCode: '1200',
    areaServed: ['Ginevra', 'Genève', 'Carouge', 'Vernier', 'Lancy', 'Meyrin', 'Onex', 'Plan-les-Ouates'],
  },
  {
    name: 'Losanna',
    slug: 'losanna',
    canton: 'Vaud',
    cantonCode: 'VD',
    description: 'Software house a Losanna. Sviluppo software per startup, aziende tech e istituzioni educative. Innovazione e creatività.',
    keywords: [
      'software house Losanna',
      'sviluppo software Losanna',
      'agenzia web Losanna',
      'sviluppatore Losanna',
      'app mobile Losanna',
      'siti web Losanna',
      'web developer Losanna',
      'programmatore Losanna',
    ],
    coordinates: {
      lat: '46.5197',
      lng: '6.6323',
    },
    postalCode: '1000',
    areaServed: ['Losanna', 'Lausanne', 'Renens', 'Prilly', 'Pully', 'Morges', 'Vevey', 'Montreux'],
  },
  {
    name: 'San Gallo',
    slug: 'san-gallo',
    canton: 'San Gallo',
    cantonCode: 'SG',
    description: 'Software house a San Gallo. Sviluppo software per aziende manifatturiere, tessili e del settore sanitario.',
    keywords: [
      'software house San Gallo',
      'sviluppo software San Gallo',
      'agenzia web San Gallo',
      'sviluppatore San Gallo',
      'app mobile San Gallo',
      'siti web San Gallo',
      'web developer San Gallo',
      'programmatore San Gallo',
    ],
    coordinates: {
      lat: '47.4245',
      lng: '9.3767',
    },
    postalCode: '9000',
    areaServed: ['San Gallo', 'St. Gallen', 'Gossau', 'Wil', 'Rapperswil-Jona', 'Buchs'],
  },
  {
    name: 'Lucerna',
    slug: 'lucerna',
    canton: 'Lucerna',
    cantonCode: 'LU',
    description: 'Software house a Lucerna. Sviluppo software per aziende turistiche, hotel e ristoranti. Soluzioni digitali per il settore hospitality.',
    keywords: [
      'software house Lucerna',
      'sviluppo software Lucerna',
      'agenzia web Lucerna',
      'sviluppatore Lucerna',
      'app mobile Lucerna',
      'siti web Lucerna',
      'web developer Lucerna',
      'programmatore Lucerna',
    ],
    coordinates: {
      lat: '47.0502',
      lng: '8.3093',
    },
    postalCode: '6000',
    areaServed: ['Lucerna', 'Luzern', 'Kriens', 'Emmen', 'Ebikon', 'Horw', 'Adligenswil'],
  },
  {
    name: 'Winterthur',
    slug: 'winterthur',
    canton: 'Zurigo',
    cantonCode: 'ZH',
    description: 'Software house a Winterthur. Sviluppo software per aziende industriali, tech e startup innovative.',
    keywords: [
      'software house Winterthur',
      'sviluppo software Winterthur',
      'agenzia web Winterthur',
      'sviluppatore Winterthur',
      'app mobile Winterthur',
      'siti web Winterthur',
      'web developer Winterthur',
      'programmatore Winterthur',
    ],
    coordinates: {
      lat: '47.5056',
      lng: '8.7241',
    },
    postalCode: '8400',
    areaServed: ['Winterthur', 'Seen', 'Töss', 'Veltheim', 'Wülflingen', 'Oberwinterthur'],
  },
]

export function getCityBySlug(slug: string): CityData | undefined {
  return swissCities.find(city => city.slug === slug)
}

export function getAllCitySlugs(): string[] {
  return swissCities.map(city => city.slug)
}
