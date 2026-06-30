import { Course, Instructor, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'O programu', href: '#o-programu' },
  { label: 'Kurzy', href: '#skupiny' },
  { label: 'Náš tým', href: '#lektori' },
  { label: 'Fotogalerie', href: '#fotogalerie' },
  { label: 'Videa', href: '#videa' },
  { label: 'Přihláška', href: '#prihlaska' },
];

export const COURSES: Course[] = [
  {
    id: 'skokanci',
    title: 'Skokánci',
    ageGroup: '4–5 let',
    gender: 'Chlapci i děvčata',
    description: 'Zábavný úvod do velkého světa pohybu formou hravých cvičení, opičích drah a bezpečných základů gymnastiky, které budují přirozenou obratnost.',
    color: 'bg-emerald-500',
    icon: 'Baby',
    capacity: 15,
    price: 2200,
    schedule: 'Každé pondělí 16:00 – 17:00',
    location: 'Masarykovo gymnázium Příbor (Malá tělocvična)',
    benefits: ['Rozvoj koordinace ruka-oko', 'Základy bezpečné gymnastiky a pádů', 'Hravé budování lásky ke sportu']
  },
  {
    id: 'klokanci',
    title: 'Klokánci',
    ageGroup: '6–7 let',
    gender: 'Chlapci i děvčata',
    description: 'Rozvoj dynamiky, rychlosti a rytmických dovedností. Ideální přechod z mateřské školy pro rozvoj vytrvalosti a týmové sounáležitosti prostřednictvím her.',
    color: 'bg-sky-500',
    icon: 'Rabbit',
    capacity: 15,
    price: 2200,
    schedule: 'Každé úterý 16:00 – 17:00',
    location: 'Masarykovo gymnázium Příbor (Malá tělocvična)',
    benefits: ['Zlepšení odrazové síly a obratnosti', 'Týmové hry a rychlé reakce', 'Základy atletické průpravy']
  },
  {
    id: 'sportaci',
    title: 'Sporťáci',
    ageGroup: '8–15 let',
    gender: 'Pouze chlapci',
    description: 'Všestranná sportovní příprava se zaměřením na atletické základy, míčové hry a rozvoj fyzické síly, vytrvalosti a zdravé sebedůvěry dětí.',
    color: 'bg-amber-500',
    icon: 'Trophy',
    capacity: 15,
    price: 2200,
    schedule: 'Každé úterý 17:00 – 18:00',
    location: 'Masarykovo gymnázium Příbor (Malá tělocvična)',
    benefits: ['Pokročilá obratnost a základy atletiky', 'Míčové sporty a herní taktika', 'Všestranné posilování vlastní vahou']
  },
  {
    id: 'divky',
    title: 'Pohyb pro dívky',
    ageGroup: '6–12 let',
    gender: 'Pouze děvčata',
    description: 'Specializovaný kurz pro mladé slečny kombinující základy estetické gymnastiky, moderního tance, rytmiky a protahování v přátelském, nesoutěživém dívčím kolektivu.',
    color: 'bg-rose-500',
    icon: 'Footprints',
    capacity: 15,
    price: 2200,
    schedule: 'Každý čtvrtek 16:00 – 17:00',
    location: 'Masarykovo gymnázium Příbor (Malá tělocvična)',
    benefits: ['Správné držení těla a flexibilita', 'Rytmická a taneční tvořivost', 'Posílení sebedůvěry a ladnosti']
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'jiri',
    name: 'Mgr. Jiří Šplíchal',
    role: 'Zakladatel & Hlavní trenér',
    bio: 'Uvědomuji si, že pro děti musí být cvičení především zábavná hra.',
    image: 'https://lh3.googleusercontent.com/d/1hCdw8DEEm4YEeYXSWk8CGwpS0uxg7CBE', // Beautiful coach photo
    specialization: ['Tělesná výchova & Biologie', 'Licence: Atletika, lyžování & snowboard', 'Kondiční trénink dětí'],
    bullets: [
      'Učitel na Masarykově gymnáziu v Příboře',
      'Absolvent FTK a PřF Univerzity Palackého v Olomouci (Tělesná výchova a Biologie)',
      'Držitel atletické, lyžařské a snowboardové licence',
      'Certifikované kurzy (kondiční trénink, balanční pomůcky, zdravotník)',
      'Dlouholeté zkušenosti se sportovním vedením dětí',
      'Kondiční trenér tenisového oddílu'
    ],
    quote: '„Každý, kdo se pohybuje, má radost ze života. To pozoruji nejen na sobě, ale také na dvou svých dětech. Téměř všechen volný čas věnuji pohybovým aktivitám, jejichž jsou oni pevnou součástí.Uvědomuji si, že pro děti musí být cvičení především zábavná hra.“',
    youtubeLink: {
      label: 'Ukázková hodina (YouTube)',
      url: 'https://www.youtube.com/watch?v=gqB2ilE0dTg'
    }
  },
  {
    id: 'daniel',
    name: 'Mgr. Daniel Reichert',
    role: 'Trenér & Lektor',
    bio: 'Ukazuje se, že čas, který dětem věnujeme, se jim v životě vrátí.',
    image: 'https://lh3.googleusercontent.com/d/0B9XZR-vdCZSnZWg1U2d3aFN6a1U',
    specialization: ['Tělesná výchova & Zeměpis', 'Licence: Atletika, lyžování & snowboard', 'In-line bruslení'],
    bullets: [
      'Učitel na Masarykově gymnáziu v Příboře',
      'Absolvent Ostravské univerzity (Tělesná výchova a Zeměpis)',
      'Držitel atletické, lyžařské, snowboardové licence a licence na in–line bruslení',
      'Certifikované kurzy (kondiční trénink, balanční pomůcky, zdravotník)',
      'Bohaté zkušenosti se sportovním vedením dětí různého věku'
    ],
    quote: '„Mé dvě dcery jsou již ve věku, kdy si sportovní aktivity vyhledávají samy. Ukazuje se, že čas, který jsme jim v dětství společně s manželkou věnovali při různých sportovních činnostech, v nich zakořenil a sport se stal přirozenou součástí jejich života.“'
  },
  {
    id: 'pomocnici',
    name: 'Pomocní instruktoři',
    role: 'Z řad našich studentů',
    bio: 'Naši aktivní starší studenti, kteří skvěle doplňují náš trenérský tým.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop',
    specialization: ['Tanec', 'Atletika', 'Gymnastika'],
    bullets: [
      'Dbají na bezpečnost dětí během tréninku',
      'Pomáhají s organizací her a stanovišť',
      'Předcvičují a motivují svým vlastním příkladem'
    ]
  }
];

export const HERO_IMAGES = [
  'https://lh3.googleusercontent.com/d/191EVUYXaxVLq5QnWnfFP8xQVKm62x8N7',
  'https://lh3.googleusercontent.com/d/1EIKcXPaX6ilqEDI_CuzOB6wUy7M2-cm6',
  'https://lh3.googleusercontent.com/d/1H56F-t9g3J2QkdfgCtNQVMCTBstzbJXZ',
];

export const FAQS = [
  {
    question: 'Co si mají děti vzít na první lekci s sebou?',
    answer: 'Stačí běžné sportovní oblečení (tričko, kraťasy nebo legíny) a čistá sportovní sálová obuv s nebarvící podrážkou (non-marking). S sebou nezapomeňte vzít především podepsanou láhev s čistou vodou. Na lekcích dívčího pohybu holčičky často preferují cvičení v piškotech nebo naboso.'
  },
  {
    question: 'Co dělat, pokud dítě onemocní nebo zmešká lekci?',
    answer: 'Pokud je dítě nemocné, lekce bohužel propadá bez nároku na finanční kompenzaci.'
  },
  {
    question: 'Je možné se přihlásit i v průběhu rozběhnutého pololetí?',
    answer: 'Pokud je v dané skupině stále volné místo, rádi vás přivítáme i uprostřed pololetí! V takovém případě vám samozřejmě vypočítáme poměrnou část školného za lekce, které již proběhly.'
  },
  {
    question: 'Mohou rodiče lekce aktivně sledovat?',
    answer: 'Abychom udrželi plnou pozornost dětí a podpořili jejich samostatnost, tréninky probíhají bez přítomnosti rodičů v tělocvičně. Rodiče mohou pohodlně vyčkat v prostorách šaten, popřípadě u otevřených dveří. Vždy na konci pololetí ale pořádáme slavnostní otevřenou lekci, kde vám děti ukážou vše, co se naučily!'
  },
  {
    question: 'Co dělat, pokud se dítěti trénink nebude líbit?',
    answer: 'Pokud po prvním tréninku usoudíte, že cvičení pro dítě zatím není to pravé, přihlášku můžete bez jakýchkoliv stornopoplatků stornovat. V takovém případě hradíte pouze poměrnou část školného za tuto jednu absolvovanou lekci.'
  },
  {
    question: 'Přispívají pojišťovny na sportovní kurzy?',
    answer: 'Ano, škola vydává potvrzení pro pojišťovnu.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Jana Malá',
    child: 'Tobiáš, 5 let',
    text: 'Tobiášek se každé úterý nemůže dočkat Skokánků. Jirka i Daniel jsou úžasní trenéři, kteří umí děti neuvěřitelně namotivovat. Opičí dráhy jsou u nich absolutní hit!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Petr Novák',
    child: 'Eliška, 8 let',
    text: 'Eliška navštěvuje kurz Pohybu pro dívky druhým rokem. Velmi oceňuji, že cvičení je nesoutěžní – nejde o body ani medaile, ale o radost ze samotného tance a protažení.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Martina Dvořáková',
    child: 'Lukáš, 7 let',
    text: 'Skvělý program všestranné přípravy. Syn se dříve styděl v kolektivu, ale trenéři ho skvěle zapojili prostřednictvím her. Dnes má mnohem lepší fyzičku a našel si nové kamarády.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop'
  }
];
