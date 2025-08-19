import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="text-sm text-gray-600 mb-4">
      <div className="flex items-center space-x-2">
        <span>Вы здесь:</span>
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            {index > 0 && <span>→</span>}
            {item.href ? (
              <Link 
                href={item.href} 
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-800">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Breadcrumb
