'use client'

import Link from 'next/link'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const Header = () => {

  const mainNavItems = [
    { name: 'УНИВЕРСИТЕТ', href: '/about/history' },
    { name: 'ОБРАЗОВАНИЕ', href: '/faculties' },
    { name: 'НАУКА', href: '/nauka/nauka-i-professionalno-tvorcheskaya-deyatelnost' },
    { name: 'ПРОЕКТИРОВАНИЕ', href: '/business' },
    { name: 'СТУДЕНТАМ', href: '/students' },
    { name: 'СОТРУДНИКАМ', href: '/staff' },
    { name: 'ПОСТУПАЮЩИМ', href: '/applicant' },
  ]

  const subNavItems = [
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

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-gray-50 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="hover:text-blue-600">
                УрГАХУ Переход на главную
              </Link>
              <Link href="/" className="hover:text-blue-600">
                Уральский государственный архитектурно-художественный университет имени Н.С. Алфёрова
              </Link>
              <Link href="http://english.usaaa.ru" className="hover:text-blue-600">
                Ural State University of Architecture and Art named by N.S. Alferov
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="http://english.usaaa.ru" className="hover:text-blue-600">
                EN
              </Link>
              <Link href="/french.pdf" className="hover:text-blue-600">
                FR
              </Link>
              <Link href="/china.pdf" className="hover:text-blue-600">
                CN
              </Link>
              <Link href="#" className="hover:text-blue-600">
                ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-blue-800">
              УрГАХУ
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Поиск..."
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                🔍
              </button>
            </div>
            
            {/* Mobile Menu */}
            <MobileMenu mainNavItems={mainNavItems} subNavItems={subNavItems} />
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="bg-gray-100 border-t border-gray-200 hidden md:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap gap-4 text-sm">
            {subNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
