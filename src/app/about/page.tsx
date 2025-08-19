import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import Sidebar from '@/components/Sidebar'
import StatsCard from '@/components/StatsCard'
import { Users, GraduationCap, BookOpen, Award } from 'lucide-react'

export default function About() {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'УНИВЕРСИТЕТ' }
  ]

  const stats = [
    {
      title: 'Студентов и аспирантов',
      value: '2000+',
      description: 'Обучается в университете',
      icon: <Users size={24} />
    },
    {
      title: 'Преподавателей',
      value: '250',
      description: 'Квалифицированный состав педагогов',
      icon: <GraduationCap size={24} />
    },
    {
      title: 'Докторов наук',
      value: '49',
      description: 'Докторов и профессоров',
      icon: <Award size={24} />
    },
    {
      title: 'Книг в библиотеке',
      value: '80 000',
      description: 'Самая крупная библиотека на Урале',
      icon: <BookOpen size={24} />
    }
  ]

  const aboutLinks = [
    { name: 'ИСТОРИЯ', href: '/about/history', description: 'История университета с 1947 года' },
    { name: 'АДМИНИСТРАЦИЯ', href: '/about/admin', description: 'Руководство университета' },
    { name: 'ПРЕПОДАВАТЕЛИ', href: '/about/staff', description: 'Профессорско-преподавательский состав' },
    { name: 'ДОКУМЕНТЫ', href: '/about/osnovnye-dokumenty', description: 'Основные документы университета' },
    { name: 'УЧЕНЫЙ СОВЕТ', href: '/about/uchenyi-sovet', description: 'Ученый совет УрГАХУ' },
    { name: 'ПОПЕЧИТЕЛЬСКИЙ СОВЕТ', href: '/about/popechitelskii-sovet', description: 'Попечительский совет' },
    { name: 'СИСТЕМА ГАРАНТИЙ КАЧЕСТВА ОБРАЗОВАНИЯ', href: '/about/qd', description: 'Система менеджмента качества' },
    { name: 'БИБЛИОТЕКА', href: '/about/library', description: 'Научная библиотека УрГАХУ' },
    { name: 'МУЗЕЙ АРХИТЕКТУРЫ И ДИЗАЙНА', href: '/about/muzei-arhitektury-i-dizaina', description: 'Музей архитектуры и дизайна' },
    { name: 'КОНТАКТЫ', href: '/about/contacts', description: 'Контактная информация' },
    { name: 'РЕКВИЗИТЫ', href: '/about/rekvizity', description: 'Реквизиты университета' },
    { name: 'ПРИЕМ ОБРАЩЕНИЙ ГРАЖДАН', href: '/about/obrascheniya-grazhdan', description: 'Обращения граждан' },
    { name: 'ПРОФИЛАКТИКА МОШЕННИЧЕСТВА', href: '/about/profilaktika-moshennichestva', description: 'Информация о мошенничестве' }
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
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Об университете</h1>
              
              <p className="text-lg text-gray-700 mb-8">
                Уральский государственный архитектурно-художественный университет имени Н.С. Алфёрова 
                является одним из ведущих вузов страны, готовящих высококвалифицированные кадры в области 
                градостроительства, архитектуры, дизайна, изобразительного искусства.
              </p>

              {/* Statistics */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Университет в цифрах</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <StatsCard
                      key={index}
                      title={stat.title}
                      value={stat.value}
                      description={stat.description}
                      icon={stat.icon}
                    />
                  ))}
                </div>
              </section>

              {/* About Links */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Информация об университете</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aboutLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{link.name}</h3>
                      <p className="text-gray-600">{link.description}</p>
                    </Link>
                  ))}
                </div>
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
