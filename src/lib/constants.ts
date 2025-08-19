import { NavItem, Faculty, Program } from '@/types'

// Main navigation items
export const MAIN_NAV_ITEMS: NavItem[] = [
  { name: 'УНИВЕРСИТЕТ', href: '/about/history' },
  { name: 'ОБРАЗОВАНИЕ', href: '/faculties' },
  { name: 'НАУКА', href: '/nauka/nauka-i-professionalno-tvorcheskaya-deyatelnost' },
  { name: 'ПРОЕКТИРОВАНИЕ', href: '/business' },
  { name: 'СТУДЕНТАМ', href: '/students' },
  { name: 'СОТРУДНИКАМ', href: '/staff' },
  { name: 'ПОСТУПАЮЩИМ', href: '/applicant' },
]

// Sub navigation items
export const SUB_NAV_ITEMS: NavItem[] = [
  { name: 'ИСТОРИЯ', href: '/about/history' },
  { name: 'АДМИНИСТРАЦИЯ', href: '/about/admin' },
  { name: 'ПРЕПОДАВАТЕЛИ', href: '/about/staff' },
  { name: 'ДОКУМЕНТЫ', href: '/about/osnovnye-dokumenty' },
  { name: 'УЧЕНЫЙ СОВЕТ', href: '/about/uchenyi-sovet' },
  { name: 'ПОПЕЧИТЕЛЬСКИЙ СОВЕТ', href: '/about/popechitelskii-sovet' },
  { name: 'СИСТЕМА ГАРАНТИЙ КАЧЕСТВА ОБРАЗОВАНИЯ', href: '/about/qd' },
  { name: 'БИБЛИОТЕКА', href: '/about/library' },
  { name: 'МУЗЕЙ АРХИТЕКТУРЫ И ДИЗАЙНА', href: '/about/muzei-arhitektury-i-dizaina' },
  { name: 'КОНТАКТЫ', href: '/about/contacts' },
  { name: 'РЕКВИЗИТЫ', href: '/about/rekvizity' },
  { name: 'ПРИЕМ ОБРАЩЕНИЙ ГРАЖДАН', href: '/about/obrascheniya-grazhdan' },
  { name: 'ПРОФИЛАКТИКА МОШЕННИЧЕСТВА', href: '/about/profilaktika-moshennichestva' },
]

// Faculties
export const FACULTIES: Faculty[] = [
  { name: 'АРХИТЕКТУРНЫЙ ИНСТИТУТ', href: '/faculties/fa' },
  { name: 'ИНСТИТУТ ДИЗАЙНА', href: '/faculties/fd' },
  { name: 'ИНСТИТУТ ИЗОБРАЗИТЕЛЬНЫХ ИСКУССТВ', href: '/faculties/iii' },
  { name: 'ФАКУЛЬТЕТ ДОВУЗОВСКОЙ ПОДГОТОВКИ', href: '/faculties/fdp' },
  { name: 'ИНСТИТУТ ДОПОЛНИТЕЛЬНОГО ОБРАЗОВАНИЯ В СФЕРЕ КРЕАТИВНЫХ ИНДУСТРИЙ', href: '/faculties/fakultet-dopolnitelnogo-professionalnogo-obrazovaniya' },
  { name: 'АСПИРАНТУРА', href: '/faculties/post-graduate' }
]

// Bachelor programs
export const BACHELOR_PROGRAMS: Program[] = [
  { code: '07.03.01', name: 'Архитектура', faculty: 'Архитектурный институт', href: '/faculties/fa' },
  { code: '07.03.04', name: 'Градостроительство', faculty: 'Архитектурный институт', href: '/faculties/fa' },
  { 
    code: '54.03.01', 
    name: 'Дизайн', 
    faculty: 'Институт дизайна', 
    href: '/faculties/fd', 
    specializations: [
      'Промышленный дизайн',
      'Дизайн костюма',
      'Дизайн среды',
      'Графический дизайн',
      'Дизайн мультимедиа',
      'Дизайн интерфейсов'
    ]
  },
  { code: '54.03.02', name: 'Декоративно-прикладное искусство и народные промыслы (ДПИ и НП)', faculty: 'Институт изобразительных искусств', href: '/faculties/iii' },
  { code: '54.03.03', name: 'Искусство костюма и текстиля', faculty: 'Институт изобразительных искусств', href: '/faculties/iii' },
  { code: '54.05.02', name: 'Живопись (специальность)', faculty: 'Институт изобразительных искусств', href: '/faculties/iii' },
  { code: '54.05.03', name: 'Графика (специальность)', faculty: 'Институт изобразительных искусств', href: '/faculties/iii' },
  { code: '54.05.01', name: 'Монументально-декоративное искусство (МДИ) (специальность)', faculty: 'Институт изобразительных искусств', href: '/faculties/iii' }
]

// Master programs
export const MASTER_PROGRAMS: Program[] = [
  { code: '07.04.01', name: 'Архитектура', href: '/faculties/fa/magistracy' },
  { 
    code: '54.04.01', 
    name: 'Дизайн', 
    specializations: [
      { name: 'Промышленный дизайн', href: '/faculties/fd/indes/5-6' },
      { name: 'Дизайн костюма', href: '/faculties/fd/dizain-odezhdy' },
      { name: 'Дизайн среды', href: '/faculties/fd/dizain-sredy/magistratura' },
      { name: 'Графический дизайн', href: '/faculties/fd/graf/5-6' }
    ]
  },
  { code: '54.04.02', name: 'Декоративно-прикладное искусство и народные промыслы (ДПИ и НП)', href: '/faculties/iii/institut-izobrazitelnyh-iskusstv#mag' }
]

// Postgraduate programs
export const POSTGRADUATE_PROGRAMS: Program[] = [
  { code: '07.06.01', name: 'Архитектура', href: '/faculties/post-graduate' },
  { code: '50.06.01', name: 'Искусствоведение', href: '/faculties/post-graduate' }
]

// University statistics
export const UNIVERSITY_STATS = [
  {
    title: 'Студентов и аспирантов',
    value: '2000+',
    description: 'Обучается в университете'
  },
  {
    title: 'Преподавателей',
    value: '250',
    description: 'Квалифицированный состав педагогов'
  },
  {
    title: 'Докторов наук',
    value: '49',
    description: 'Докторов и профессоров'
  },
  {
    title: 'Книг в библиотеке',
    value: '80 000',
    description: 'Самая крупная библиотека на Урале'
  }
]

// Contact information
export const CONTACT_INFO = {
  address: '620075 Россия, Екатеринбург, ул. Карла Либкнехта, 23',
  phone: '+7 (343) 371 33 69',
  email: 'webmaster@usaaa.ru',
  website: 'https://usaaa.ru'
}

// Social media links
export const SOCIAL_LINKS = [
  { name: 'VKontakte', href: 'https://vk.ru/uralgaxa', icon: 'vk' },
  { name: 'Telegram', href: 'https://t.me/usaaa_ru', icon: 'telegram' },
  { name: 'Dzen', href: 'https://dzen.ru/usaaa_ru', icon: 'dzen' },
  { name: 'Odnoklassniki', href: 'https://ok.ru/group/62429998809297', icon: 'ok' }
]
