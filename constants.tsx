import { Course, Instructor, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'O programu', href: '#o-programu' },
  { label: 'Kurzy', href: '#skupiny' },
  { label: 'Náš tým', href: '#lektori' },
  { label: 'Momenty', href: '#fotogalerie' },
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
    price: 2450,
    schedule: 'Každé úterý 15:30 – 16:30',
    location: 'ZŠ Jičínská Příbor (Malá tělocvična)',
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
    capacity: 18,
    price: 2600,
    schedule: 'Každé pondělí 16:00 – 17:00',
    location: 'ZŠ Jičínská Příbor (Velká tělocvična)',
    benefits: ['Zlepšení odrazové síly a obratnosti', 'Týmové hry a rychlé reakce', 'Základy atletické průpravy']
  },
  {
    id: 'sportaci',
    title: 'Sporťáci',
    ageGroup: '8–11 let',
    gender: 'Chlapci i děvčata',
    description: 'Všestranná sportovní příprava se zaměřením na atletické základy, míčové hry a rozvoj fyzické síly, vytrvalosti a zdravé sebedůvěry dětí.',
    color: 'bg-amber-500',
    icon: 'Trophy',
    capacity: 20,
    price: 2800,
    schedule: 'Každý čtvrtek 16:30 – 17:45',
    location: 'Masarykovo gymnázium Příbor (Tělocvična)',
    benefits: ['Pokročilá obratnost a základy atletiky', 'Míčové sporty a herní taktika', 'Všestranné posilování vlastní vahou']
  },
  {
    id: 'divky',
    title: 'Pohyb pro dívky',
    ageGroup: '6–10 let',
    gender: 'Pouze děvčata',
    description: 'Specializovaný kurz pro mladé slečny kombinující základy estetické gymnastiky, moderního tance, rytmiky a protahování v přátelském, nesoutěživém dívčím kolektivu.',
    color: 'bg-rose-500',
    icon: 'Footprints',
    capacity: 16,
    price: 2550,
    schedule: 'Každou středu 15:45 – 16:45',
    location: 'Masarykovo gymnázium Příbor (Zrcadlový sál)',
    benefits: ['Správné držení těla a flexibilita', 'Rytmická a taneční tvořivost', 'Posílení sebedůvěry a ladnosti']
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'jiri',
    name: 'Mgr. Jiří Šplíchal',
    role: 'Zakladatel & Hlavní trenér',
    bio: 'Absolvent FTVS UK se zaměřením na dětskou motoriku a fyziologii sportu. S více než 15 lety aktivní pedagogické a trenérské praxe se věnuje přirozenému pohybu bez předčasné specializace.',
    image: 'https://lh3.googleusercontent.com/d/1hCdw8DEEm4YEeYXSWk8CGwpS0uxg7CBE', // Beautiful coach photo
    specialization: ['Pedagogika volného času', 'Dětská fyzioterapie', 'Diagnostika držení těla']
  },
  {
    id: 'daniel',
    name: 'Daniel Reichert',
    role: 'Instruktor gymnastiky',
    bio: 'Bývalý aktivní gymnasta s vášní pro trenérství dětí. Miluje vytváření kreativních opičích drah a učí děti, že každý pád je jen příležitostí se znovu odrazit výš.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', // Cool friendly instructor
    specialization: ['Základní & akrobatická gymnastika', 'Opičí dráhy', 'Týmová motivace']
  },
  {
    id: 'klara',
    name: 'Petr Caly',
    role: 'Lektor tance a rytmiky',
    bio: 'Vystudoval Univerzitu Hradec Králové, kde získal titul v oboru dějepis a základy společenských věd (ZSV). Práce s dětmi ho nesmírně naplňuje a baví, přičemž klade důraz na přátelský a individuální přístup. Svým nadšením pro sport se snaží v dětech probudit celoživotní lásku k aktivnímu pohybu.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop', // Friendly young woman instructor
    specialization: ['Dětský moderní tanec', 'Strečink & flexibilita', 'Hry s doprovodem hudby']
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
    answer: 'V případě absence nás prosím kontaktujte e-meilem nebo telefonicky před zahájením tréninku. Rádi se s vámi domluvíme na individuální možnosti náhrady v jiné skupině nebo na našem víkendovém sportovním dopoledni, pokud je volná kapacita.'
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
    answer: 'První lekce je u nás vždy zkušební a zcela zdarma. Pokud po prvním tréninku usoudíte, že cvičení pro dítě zatím není to pravé, přihlášku můžete bez jakýchkoliv stornopoplatků stornovat.'
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
