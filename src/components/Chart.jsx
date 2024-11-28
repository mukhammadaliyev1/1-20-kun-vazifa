
// import React, { useEffect, useState } from "react";
// import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
// import lord from "../axios";

// const LegalLiteracy = () => {
//   const [chartone, setchartone] = useState([]);

//   useEffect(() => {
//     lord.get("knowlodge")
//       .then((data) => {
//         console.log(data.data.semicharts);
//         setchartone(data.data.semicharts);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);


//   const getFillColor = (percentage) => {
//     if (percentage >= 100) {
//       return "#00ff00"; 
//     } else if (percentage >= 80) {
//       return "#4caf50"; 
//     } else if (percentage >= 60) {
//       return "#ffeb3b"; 
//     } else if (percentage >= 40) {
//       return "#ff9800"; 
//     } else {
//       return "#f44336"; 
//     }
//   };

//   return (
//     <div className="flex flex-wrap" style={{  marginBottom: "200px" }}>
//       {chartone.length > 0 &&
//         chartone.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               width: "30%",
//               height: 200,
//               textAlign: "center",
//               marginTop:"100px",
//               padding:"-100px"
//             }}
//           >
//             <ResponsiveContainer className="mx-auto">
//               <RadialBarChart
//                 cx="50%"
//                 cy="50%"
//                 innerRadius="70%"
//                 outerRadius="100%"
//                 startAngle={180}
//                 endAngle={0}
//                 barSize={10}
//                 data={[{ name: item.label, value: item.percentage, fill: getFillColor(item.percentage) }]}
//               >
//                 <RadialBar minAngle={10} dataKey="value" clockWise />
//               </RadialBarChart>
//             </ResponsiveContainer>
//             <p style={{ marginTop: "10px" }}>
//               {item.percentage}% <br /> {item.label}
//             </p>
//           </div>
//         ))}

             
//        <h2 className='text-4xl mt-60 -mb-60 font-bold flex gap-2.5'><p className='w-3 h-10 bg-blue-800'></p>Шахсий ва касбий хусусиятлар</h2>
//     </div>
    
//   );
// };

// export default LegalLiteracy;"use client"

import { useEffect, useState } from "react"
import { RadialBar, RadialBarChart } from "recharts"
import lord from "../axios"

export default function KnowledgeDashboard() {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    lord.get("knowlodge")
      .then((data) => {
        console.log(data.data.semicharts)
        setChartData(data.data.semicharts)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const getFillColor = (percentage) => {
    if (percentage >= 100) return "#00ff00"
    if (percentage >= 80) return "#4caf50"
    if (percentage >= 60) return "#ffeb3b"
    if (percentage >= 40) return "#ff9800"
    return "#f44336"
  }

  return (
    <div className="flex flex-wrap" style={{ marginBottom: "200px" }}>
      {chartData.length > 0 &&
        chartData.map((item, index) => (
          <div
            key={index}
            style={{
              width: "30%",
              height: 200,
              textAlign: "center",
              marginTop: "100px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <RadialBarChart
              width={150}
              height={150}
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="100%"
              startAngle={180}
              endAngle={0}
              barSize={10}
              data={[
                {
                  name: item.label,
                  value: item.percentage,
                  fill: getFillColor(item.percentage)
                }
              ]}
            >
              <RadialBar
                minAngle={10}
                dataKey="value"
                clockWise
              />
            </RadialBarChart>
            <p style={{ 
              marginTop: "-20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px"
            }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{item.percentage}%</span>
              <span style={{ fontSize: "14px", maxWidth: "200px" }}>{item.label}</span>
            </p>
          </div>
        ))}
      <h2 className="text-4xl mt-60 -mb-60 font-bold flex gap-2.5">
        <p className="w-3 h-10 bg-blue-800"></p>
        Шахсий ва касбий хусусиятлар
      </h2>
    </div>
  )
}

