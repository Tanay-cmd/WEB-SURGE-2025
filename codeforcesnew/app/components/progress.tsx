export function Progress({ 
  value, 
  className 
}: { 
  value: number;
  className?: string;
}) {
  return (
    <div className={`progress w-full bg-gray-300 rounded h-2 ${className || ''}`}>
      <div className="bg-blue-600 h-2 rounded" style={{ width: `${value}%` }}></div>
    </div>
  )
}

