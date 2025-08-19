import Link from 'next/link'

const Sidebar = () => {
  const sidebarItems = [
    {
      title: 'Сведения об образовательной организации',
      href: '/sveden/common'
    },
    {
      title: 'Электронная информационно-образовательная среда',
      href: 'http://edu.usaaa.ru'
    },
    {
      title: 'КУРСЫ / МАСТЕР-КЛАССЫ',
      href: '#',
      isHeader: true
    },
    {
      title: 'Довузовская подготовка',
      href: '/applicant/dovuzovskaya-podgotovka'
    },
    {
      title: 'Подготовительное отделение ФДП (Уральская детская школа моды)',
      href: '/faculties/fdp/uralskaya-detskaya-shkola-mody'
    },
    {
      title: 'Программы дополнительного профессионального образования',
      href: '/faculties/fakultet-dopolnitelnogo-professionalnogo-obrazovaniya'
    },
    {
      title: 'Стажировки для преподавателей вузов – творческие направления и архитектура',
      href: '//www.daad.ru/ru/stipendien/tvorcheskie-napravleniya-i-arhitektur/'
    },
    {
      title: 'КОНКУРСЫ / ФЕСТИВАЛИ',
      href: '#',
      isHeader: true
    },
    {
      title: 'Премия «Лучший промышленный дизайн России»',
      href: '/students/konkursy/luchshii-promyshlennyi-dizain-rossii'
    },
    {
      title: 'Еще >>',
      href: '/students/konkursy'
    }
  ]

  return (
    <aside className="w-80 bg-gray-50 p-6">
      <div className="space-y-4">
        {sidebarItems.map((item, index) => (
          <div key={index}>
            {item.isHeader ? (
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
            ) : (
              <Link
                href={item.href}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors block mb-2"
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
