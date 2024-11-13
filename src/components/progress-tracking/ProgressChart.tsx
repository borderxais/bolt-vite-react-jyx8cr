import React from 'react';
import { LineChart, Activity } from 'lucide-react';

interface ProgressChartProps {
  data: {
    subject: string;
    progress: number;
    trend: 'up' | 'down' | 'stable';
  }[];
}

export function ProgressChart({ data }: ProgressChartProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Activity className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">Progress Overview</h3>
        </div>
        <LineChart className="w-6 h-6 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">{item.subject}</h4>
              <div className="w-48 h-2 bg-gray-100 rounded-full mt-2">
                <div 
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-600">
              {item.progress}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}