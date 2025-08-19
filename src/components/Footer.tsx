import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <p className="text-sm mb-4">
              Федеральное государственное бюджетное образовательное учреждение высшего образования 
              «Уральский государственный архитектурно-художественный университет имени Н.С.Алфёрова»
            </p>
            <p className="text-sm mb-2">620075 Россия, Екатеринбург, ул. Карла Либкнехта, 23</p>
            <p className="text-sm mb-4">Телефон +7 (343) 371 33 69</p>
            <p className="text-sm">
              © УрГАХУ,{' '}
              <Link href="mailto:webmaster@usaaa.ru" className="hover:text-blue-300">
                webmaster@usaaa.ru
              </Link>
            </p>
            <p className="text-sm mt-2">
              Официальный сайт УрГАХУ. Все права защищены. При использовании любых материалов сайта 
              ссылка на{' '}
              <Link href="https://usaaa.ru" className="hover:text-blue-300">
                https://usaaa.ru
              </Link>{' '}
              обязательна.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Link href="/sveden/common" className="text-sm hover:text-blue-300 block mb-2">
                  Сведения об образовательной организации
                </Link>
                <Link href="/store/dokumenty/pd.pdf" className="text-sm hover:text-blue-300 block">
                  Политика обработки персональных данных
                </Link>
              </div>
              <div>
                <Link href="/faculties/fa" className="text-sm hover:text-blue-300 block mb-2">
                  Архитектурный институт
                </Link>
                <Link href="/faculties/fd" className="text-sm hover:text-blue-300 block mb-2">
                  Институт дизайна
                </Link>
                <Link href="/faculties/iii" className="text-sm hover:text-blue-300 block">
                  Институт искусств
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Links */}
          <div>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Link href="/applicant" className="text-sm hover:text-blue-300 block mb-2">
                  Поступающим
                </Link>
                <Link href="/students" className="text-sm hover:text-blue-300 block mb-2">
                  Студентам
                </Link>
                <Link href="/about/contacts" className="text-sm hover:text-blue-300 block mb-2">
                  Контакты
                </Link>
                <Link href="/sitemap" className="text-sm hover:text-blue-300 block">
                  Карта сайта
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex justify-center space-x-6">
            <Link href="https://vk.ru/uralgaxa" className="text-gray-400 hover:text-white">
              <span className="sr-only">VKontakte</span>
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </Link>
            <Link href="https://t.me/usaaa_ru" className="text-gray-400 hover:text-white">
              <span className="sr-only">Telegram</span>
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </Link>
            <Link href="https://dzen.ru/usaaa_ru" className="text-gray-400 hover:text-white">
              <span className="sr-only">Dzen</span>
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </Link>
            <Link href="https://ok.ru/group/62429998809297" className="text-gray-400 hover:text-white">
              <span className="sr-only">Odnoklassniki</span>
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
