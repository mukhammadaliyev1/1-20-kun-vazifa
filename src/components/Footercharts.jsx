import React, { useEffect, useState } from 'react';
import http from '../axios';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const HalfMoonChart = () => {
    const [dates, setDates] = useState([]);
    const [colors, setColors] = useState(['#28a745', '#d3d3d3']); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await http.get("competence");
                console.log(data.data);
                setDates(data.data);
                
                if (data.data.colors) {
                    setColors(data.data.colors);  
                }
            } catch (err) {
                console.log(err);
            }
        };
        
        fetchData();
    }, []);

   
    const dating = dates.map((value, index) => ({
        name: value.label,
        value: value.percentage,
        color: colors[index % colors.length], 
    }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={dating}
                    cx="50%"
                    cy="50%"
                    innerRadius="50%"
                    outerRadius="80%"
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {dating.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />  
                    ))}
                </Pie>
                <Legend
                    iconSize={10}
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                />
            </PieChart>
           

        </ResponsiveContainer>
         
    );
};

export default HalfMoonChart;
