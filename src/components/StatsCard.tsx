interface StatsCardProps {
  title: string
  value: string
  description?: string
  icon?: React.ReactNode
}

const StatsCard = ({ title, value, description, icon }: StatsCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            {icon}
          </div>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{value}</h3>
      <h4 className="text-lg font-medium text-gray-700 mb-2">{title}</h4>
      {description && (
        <p className="text-sm text-gray-600">{description}</p>
      )}
    </div>
  )
}

export default StatsCard
