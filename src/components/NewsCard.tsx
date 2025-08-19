import Link from 'next/link'

interface NewsCardProps {
  title: string
  href: string
  date?: string
  category?: string
}

const NewsCard = ({ title, href, date, category }: NewsCardProps) => {
  return (
    <div className="flex items-start space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
      <div className="flex-1">
        <Link
          href={href}
          className="text-sm text-gray-700 hover:text-blue-600 transition-colors block"
        >
          {title}
        </Link>
        {(date || category) && (
          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
            {date && <span>{date}</span>}
            {category && <span className="bg-gray-200 px-2 py-1 rounded">{category}</span>}
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsCard
