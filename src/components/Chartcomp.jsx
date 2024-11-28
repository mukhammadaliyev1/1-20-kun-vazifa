// import React, { useEffect, useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import http from "../axios";


// const ChartComponent = () => {
//   const [datas, setdata] = useState([])
//   useEffect(()=>{
//     http.get('professional')
//     .then(data =>{
//       const limitedData = data.data.percents.slice(0, 4);
//       setdata(limitedData)
//     })
//     .catch(err =>{
//       console.log(err);
      
//     })
//   },[])

  
//   const chartdatas = datas.map((value) => ({
//     name: value.label, 
//     value: value.percentage, 
//   }));

//   return (
//     <div style={{ width: "100%", height: 300 }}>
//            <ResponsiveContainer>
//         <BarChart
//           data={chartdatas}
//           layout="vertical"
//           margin={{ top: 100, right: 30, left: 20, bottom: 20 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis type="number" domain={[0, 100]} />
//           <YAxis type="category" dataKey="name" width={200} />
//           <Tooltip />
//           <Bar dataKey="value" fill="#00468b" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default ChartComponent;





// import React, { useEffect, useState } from "react"
// import {
//   Radar,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   ResponsiveContainer
// } from "recharts"
// import http from "../axios"

// const RadarChartComponent = () => {
//   const [datas, setdata] = useState([])

//   useEffect(() => {
//     http.get("professional")
//       .then((data) => {
//         const limitedData = data.data.percents.slice(0, 5)
//         setdata(limitedData)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }, [])

//   const chartdatas = datas.map((value) => ({
//     subject: value.label,
//     value: value.percentage,
//     fullMark: 100
//   }))

//   return (
//     <div className="w-full max-w-5xl mx-auto">
    
//       <div className="mb-8" style={{ width: "100%", height: 400 }}>
//         <ResponsiveContainer>
//           <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartdatas}>
//             <PolarGrid stroke="#e2e8f0" />
//             <PolarAngleAxis
//               dataKey="subject"
//               tick={{ fill: "#1e293b", fontSize: 12 }}
//               style={{ fontWeight: 500 }}
//             />
//             <PolarRadiusAxis
//               angle={90}
//               domain={[0, 100]}
//               axisLine={false}
//               tick={{ fontSize: 12 }}
//             />
//             <Radar
//               dataKey="value"
//               stroke="#2563eb"
//               fill="#3b82f6"
//               fillOpacity={0.4}
//             />
//           </RadarChart>
//         </ResponsiveContainer>
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
//         {chartdatas.map((item, index) => (
//           <div key={index} className="flex items-center justify-between gap-2 p-2">
//             <span>{item.subject}</span>
//             <span className="font-bold">{item.value}%</span>
//           </div>
//         ))}
//       </div>
//       <h2 className="text-2xl font-bold mt-12 mb-4">Психологик диагностика</h2>
//     </div>
//   )
// }

// export default RadarChartComponent





import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import http from "../axios";

const RadarChartComponent = () => {
  const [datas, setdata] = useState([]);
  const [loading, setLoading] = useState(true); // Yangi state

  useEffect(() => {
    http
      .get("professional")
      .then((data) => {
        console.log("Ma'lumotlar:", data.data); // Ma'lumotlarni tekshirish
        const limitedData = data.data.percents.slice(0, 5);
        setdata(limitedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, []);

  const chartdatas = datas.map((value) => ({
    subject: value.label,
    value: value.percentage,
    fullMark: 100,
  }));

  return (
    <div className="w-full max-w-5xl mx-auto">
      {loading ? (
        <p>Ma'lumotlar yuklanmoqda...</p>
      ) : chartdatas.length === 0 ? (
        <p>Ma'lumotlar topilmadi yoki noto‘g‘ri!</p>
      ) : (
        <>
          <div className="mb-8" style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="70%"
                data={chartdatas}
              >
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "#1e293b", fontSize: 12 }}
                  style={{ fontWeight: 500 }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  axisLine={false}
                  tick={{ fontSize: 12 }}
                />
                <Radar
                  dataKey="value"
                  stroke="#2563eb"
                  fill="#3b82f6"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {chartdatas.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-2 p-2"
              >
                <span>{item.subject}</span>
                <span className="font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold mt-12 mb-4">Психологик диагностика</h2>
        </>
      )}
    </div>
  );
};

export default RadarChartComponent;
