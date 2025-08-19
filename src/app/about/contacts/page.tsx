import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import Sidebar from '@/components/Sidebar'

export default function Contacts() {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'УНИВЕРСИТЕТ', href: '/about' },
    { label: 'КОНТАКТЫ' }
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
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Контакты</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="card">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Контактная информация</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Адрес:</h3>
                      <p className="text-gray-600">
                        620075 Россия, Екатеринбург,<br />
                        ул. Карла Либкнехта, 23
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Телефон:</h3>
                      <p className="text-gray-600">+7 (343) 371 33 69</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Email:</h3>
                      <p className="text-gray-600">
                        <a href="mailto:webmaster@usaaa.ru" className="text-blue-600 hover:text-blue-800">
                          webmaster@usaaa.ru
                        </a>
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Веб-сайт:</h3>
                      <p className="text-gray-600">
                        <a href="https://usaaa.ru" className="text-blue-600 hover:text-blue-800">
                          https://usaaa.ru
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="card">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Режим работы</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Приемная ректора:</h3>
                      <p className="text-gray-600">
                        Понедельник - Пятница: 9:00 - 18:00<br />
                        Суббота: 9:00 - 13:00<br />
                        Воскресенье: выходной
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Приемная комиссия:</h3>
                      <p className="text-gray-600">
                        Понедельник - Пятница: 9:00 - 17:00<br />
                        Суббота: 9:00 - 13:00<br />
                        Воскресенье: выходной
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Как добраться</h2>
                
                <div className="card">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Карта будет загружена здесь</p>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="font-medium text-gray-700 mb-2">Общественный транспорт:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Автобусы: 1, 2, 3, 4, 5</li>
                      <li>Троллейбусы: 1, 3, 5, 7</li>
                      <li>Маршрутные такси: 01, 02, 03</li>
                      <li>Метро: станция &quot;Площадь 1905 года&quot;</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Departments Contacts */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Контакты подразделений</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card">
                    <h3 className="font-medium text-gray-700 mb-2">Архитектурный институт</h3>
                    <p className="text-gray-600">+7 (343) 371 33 70</p>
                  </div>
                  
                  <div className="card">
                    <h3 className="font-medium text-gray-700 mb-2">Институт дизайна</h3>
                    <p className="text-gray-600">+7 (343) 371 33 71</p>
                  </div>
                  
                  <div className="card">
                    <h3 className="font-medium text-gray-700 mb-2">Институт изобразительных искусств</h3>
                    <p className="text-gray-600">+7 (343) 371 33 72</p>
                  </div>
                  
                  <div className="card">
                    <h3 className="font-medium text-gray-700 mb-2">Факультет довузовской подготовки</h3>
                    <p className="text-gray-600">+7 (343) 371 33 73</p>
                  </div>
                </div>
              </div>
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
