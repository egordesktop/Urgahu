import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import NewsCard from '@/components/NewsCard'

export default function Home() {
  const newsItems = [
    {
      title: 'Информация от прокуратуры о зачислении на обучение детей участников специальной военной операции',
      href: '/news/2025/informaciya-voennoi-prokuratury',
      date: '2025-01-15',
      category: 'Важно'
    },
    {
      title: 'Памятка для абитуриента-целевика',
      href: '/applicant/celevoi-priem/pamyatka.pdf',
      date: '2025-01-14',
      category: 'Абитуриентам'
    },
    {
      title: 'Презентационные материалы для абитуриентов',
      href: '//minobrnauki.gov.ru/action/targeted_training/',
      date: '2025-01-13'
    },
    {
      title: 'Сайт ЕКЦ «Приём в вуз»',
      href: '//priemvuz.ru/',
      date: '2025-01-12'
    },
    {
      title: 'Не памятка о мерах социальной поддержки молодым семьям с детьми.',
      href: '/news/2025/pamyatka.pdf',
      date: '2025-01-11',
      category: 'Студентам'
    },
    {
      title: 'Рекомендации о возможностях построения карьеры для молодежи на государственной гражданской службе, проводимых государственными органах практиках и стажировках, а также информация о Портале государственной гражданской службы.',
      href: '/news/2025/gossluzhba.pdf',
      date: '2025-01-10',
      category: 'Карьера'
    },
    {
      title: 'УрГАХУ завершил зачисление абитуриентов на бюджетные места бакалавриата и специалитета.',
      href: '/news/2025/promezhutochnye-itogi-priemnoi-kampamm',
      date: '2025-01-09',
      category: 'Приемная кампания'
    },
    {
      title: 'Представители более 10 стран станут участниками Международного фестиваля креативных индустрий.',
      href: '/news/2025/festival-kreativnyh-industrii',
      date: '2025-01-08',
      category: 'Международное сотрудничество'
    },
    {
      title: 'Открыт набор на программы профессиональной переподготовки в сфере креативных индустрий',
      href: '/news/2025/idoki-nabor',
      date: '2025-01-07',
      category: 'Дополнительное образование'
    },
    {
      title: 'Начало проведения конкурсных отборов IX сезона ежегодной Всероссийской олимпиады студентов «Я — профессионал»',
      href: '/news/2025/ya-2014-professional',
      date: '2025-01-06',
      category: 'Олимпиады'
    },
    {
      title: 'Открывается приём заявок на участие в V Международном культурно-образовательном чемпионате «История будущего».',
      href: '/news/2025/istoriya-buduschego-2013-2025',
      date: '2025-01-05',
      category: 'Конкурсы'
    },
    {
      title: 'Студенческий журнал «Архипелаг» №3/2025',
      href: '/news/2025/archipelag_july2025.pdf',
      date: '2025-01-04',
      category: 'Студенческая жизнь'
    },
    {
      title: 'Всероссийская программа сопровождения молодых государственных и муниципальных служащих «ГосСтарт».',
      href: '/news/2025/gosstart-stazhirovki',
      date: '2025-01-03',
      category: 'Стажировки'
    },
    {
      title: 'Проектная графика как основа индустриального дизайна и проектирования 3D-интерфейсов.',
      href: '/news/2025/proektnaya-grafika',
      date: '2025-01-02',
      category: 'Наука'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* News Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Новости университета</h2>
              
              <div className="space-y-2">
                {newsItems.map((item, index) => (
                  <NewsCard
                    key={index}
                    title={item.title}
                    href={item.href}
                    date={item.date}
                    category={item.category}
                  />
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link
                  href="/news"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {'>>'} Все новости
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Приемная комиссия</h3>
              <p className="text-sm text-blue-700">
                Телефоны ЕКЦ «Приём в вуз» – 8 (800) 301-44-55 (для звонков по России), 8 (495) 122-22-68 (для звонков из-за рубежа).
              </p>
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
