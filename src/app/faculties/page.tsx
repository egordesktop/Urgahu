import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'

export default function Faculties() {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'ОБРАЗОВАНИЕ' }
  ]

  const faculties = [
    { name: 'АРХИТЕКТУРНЫЙ ИНСТИТУТ', href: '/faculties/fa' },
    { name: 'ИНСТИТУТ ДИЗАЙНА', href: '/faculties/fd' },
    { name: 'ИНСТИТУТ ИЗОБРАЗИТЕЛЬНЫХ ИСКУССТВ', href: '/faculties/iii' },
    { name: 'ФАКУЛЬТЕТ ДОВУЗОВСКОЙ ПОДГОТОВКИ', href: '/faculties/fdp' },
    { name: 'ИНСТИТУТ ДОПОЛНИТЕЛЬНОГО ОБРАЗОВАНИЯ В СФЕРЕ КРЕАТИВНЫХ ИНДУСТРИЙ', href: '/faculties/fakultet-dopolnitelnogo-professionalnogo-obrazovaniya' },
    { name: 'АСПИРАНТУРА', href: '/faculties/post-graduate' }
  ]

  const bachelorPrograms = [
    { code: '07.03.01', name: 'Архитектура', faculty: 'Архитектурный институт', href: '/faculties/fa' },
    { code: '07.03.04', name: 'Градостроительство', faculty: 'Архитектурный институт', href: '/faculties/fa' },
    { code: '54.03.01', name: 'Дизайн', faculty: 'Институт дизайна', href: '/faculties/fd', specializations: [
      'Промышленный дизайн',
      'Дизайн костюма',
      'Дизайн среды',
      'Графический дизайн',
      'Дизайн мультимедиа',
      'Дизайн интерфейсов'
    ]},
    { code: '54.03.02', name: 'Декоративно-прикладное искусство и народные промыслы (ДПИ и НП)', faculty: 'Институт изобразительных искусств', href: '/faculties/iii' },
    { code: '54.03.03', name: 'Искусство костюма и текстиля', faculty: 'Институт изобразительных искусств', href: '/faculties/iii' },
    { code: '54.05.02', name: 'Живопись (специальность)', faculty: 'Институт изобразительных искусств', href: '/faculties/iii' },
    { code: '54.05.03', name: 'Графика (специальность)', faculty: 'Институт изобразительных искусств', href: '/faculties/iii' },
    { code: '54.05.01', name: 'Монументально-декоративное искусство (МДИ) (специальность)', faculty: 'Институт изобразительных искусств', href: '/faculties/iii' }
  ]

  const masterPrograms = [
    { code: '07.04.01', name: 'Архитектура', href: '/faculties/fa/magistracy' },
    { code: '54.04.01', name: 'Дизайн', specializations: [
      { name: 'Промышленный дизайн', href: '/faculties/fd/indes/5-6' },
      { name: 'Дизайн костюма', href: '/faculties/fd/dizain-odezhdy' },
      { name: 'Дизайн среды', href: '/faculties/fd/dizain-sredy/magistratura' },
      { name: 'Графический дизайн', href: '/faculties/fd/graf/5-6' }
    ]},
    { code: '54.04.02', name: 'Декоративно-прикладное искусство и народные промыслы (ДПИ и НП)', href: '/faculties/iii/institut-izobrazitelnyh-iskusstv#mag' }
  ]

  const postgraduatePrograms = [
    { code: '07.06.01', name: 'Архитектура', href: '/faculties/post-graduate' },
    { code: '50.06.01', name: 'Искусствоведение', href: '/faculties/post-graduate' }
  ]

  const additionalPrograms = [
    { name: 'Институт дополнительного образования в сфере креативных индустрий', href: '/faculties/fakultet-dopolnitelnogo-professionalnogo-obrazovaniya' }
  ]

  const preUniversityPrograms = [
    { name: 'Подготовительные курсы', href: '/faculties/fdp/pk' },
    { name: 'Школа архитектурно-художественного творчества', href: '/faculties/fdp/school' },
    { name: 'Подготовительное отделение', href: '/faculties/fdp/po' },
    { name: 'Уральская детская школа моды', href: '/faculties/fdp/uralskaya-detskaya-shkola-mody' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="prose max-w-none">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Образование</h1>
              
              {/* Faculties Navigation */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-4">
                  {faculties.map((faculty) => (
                    <Link
                      key={faculty.name}
                      href={faculty.href}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      {faculty.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bachelor Programs */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">БАКАЛАВРИАТ / СПЕЦИАЛИТЕТ</h2>
                <ul className="space-y-2">
                  {bachelorPrograms.map((program, index) => (
                    <li key={index} className="text-gray-700">
                      {program.code} {program.name} (
                      <Link href={program.href} className="text-blue-600 hover:text-blue-800">
                        {program.faculty}
                      </Link>
                      )
                      {program.specializations && (
                        <ul className="ml-6 mt-2 space-y-1">
                          {program.specializations.map((spec, specIndex) => (
                            <li key={specIndex} className="text-gray-600">
                              • {spec}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Master Programs */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">МАГИСТРАТУРА</h2>
                <ul className="space-y-2">
                  {masterPrograms.map((program, index) => (
                    <li key={index} className="text-gray-700">
                      {program.href ? (
                        <Link href={program.href} className="text-blue-600 hover:text-blue-800">
                          {program.code} {program.name}
                        </Link>
                      ) : (
                        <span>{program.code} {program.name}</span>
                      )}
                      {program.specializations && (
                        <ul className="ml-6 mt-2 space-y-1">
                          {program.specializations.map((spec, specIndex) => (
                            <li key={specIndex}>
                              <Link href={spec.href} className="text-blue-600 hover:text-blue-800">
                                {spec.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Postgraduate Programs */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">АСПИРАНТУРА</h2>
                <ul className="space-y-2">
                  {postgraduatePrograms.map((program, index) => (
                    <li key={index}>
                      <Link href={program.href} className="text-blue-600 hover:text-blue-800">
                        {program.code} {program.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Additional Professional Education */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">ДОПОЛНИТЕЛЬНОЕ ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАНИЕ</h2>
                <ul className="space-y-2">
                  {additionalPrograms.map((program, index) => (
                    <li key={index}>
                      <Link href={program.href} className="text-blue-600 hover:text-blue-800">
                        {program.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Pre-University Education */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">ДОВУЗОВСКОЕ ОБРАЗОВАНИЕ</h2>
                <ul className="space-y-2">
                  {preUniversityPrograms.map((program, index) => (
                    <li key={index}>
                      <Link href={program.href} className="text-blue-600 hover:text-blue-800">
                        {program.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  )
}
