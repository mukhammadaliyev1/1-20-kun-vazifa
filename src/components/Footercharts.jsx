
import React, { useEffect, useState } from 'react'
import { RadialBarChart, RadialBar } from 'recharts'
import http from '../axios'

const CompetencyChart = () => {
  const [dates, setDates] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await http.get("competence")
        console.log(data.data)
        setDates(data.data)
      } catch (err) {
        console.log(err)
      }
    }
    
    fetchData()
  }, [])

  const getFillColor = (percentage) => {
    if (percentage >= 90) return "#0066cc" // Blue for high values
    if (percentage >= 80) return "#28a745" // Green
    if (percentage >= 60) return "#28a745" // Green
    if (percentage >= 40) return "#ffa500" // Orange
    return "#dc3545" // Red for low values
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
    

    
      <div className="flex flex-wrap gap-4 justify-between">
        {dates.map((item, index) => (
          <div
            key={index}
            className="w-[calc(33%-1rem)] min-w-[150px] flex flex-col items-center"
          >
            <div className="relative w-32 h-32">
              <RadialBarChart
                width={128}
                height={128}
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="100%"
                barSize={10}
                startAngle={180}
                endAngle={-180}
                data={[
                  {
                    name: item.label,
                    value: item.percentage,
                    fill: getFillColor(item.percentage)
                  }
                ]}
              >
                <RadialBar
                  background
                  dataKey="value"
                  cornerRadius={5}
                />
              </RadialBarChart>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-2xl font-bold">{item.percentage}%</p>
              </div>
            </div>
            <p className="mt-2 text-center text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    
    </div>
  )
}

export default CompetencyChart