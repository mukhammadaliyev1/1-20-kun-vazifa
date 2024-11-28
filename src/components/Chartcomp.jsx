import React, { useState, useEffect } from "react";
import lord from "../axios"; 

const ProgressBar = ({ label, value }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium text-gray-700">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: `${value}%` }}
        ></div> 
      </div>
    </div>
  );
};

const ProgressChart = () => {
  const [datas, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    lord
      .get("professional")
      .then((response) => {
        const limitedData = response.data.percents.slice(0, 8); 
        setdata(limitedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full flex justify-center max-w-5xl mx-auto p-4">
      {loading ? (
        <p className="text-center text-gray-500">Ma'lumotlar yuklanmoqda...</p>
      ) : datas.length === 0 ? (
        <p className="text-center text-red-500">Ma'lumotlar topilmadi!</p>
      ) : (
        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-10">
          {datas.map((item, index) => (
            <ProgressBar
              key={index}
              label={item.label}
              value={item.percentage}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgressChart;
