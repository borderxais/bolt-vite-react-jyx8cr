import React from 'react';
import { Brain } from 'lucide-react';

interface InsightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
}

export function InsightCard({ title, description, icon, color = 'blue' }: InsightCardProps) {
  return (
    <div className={`bg-${color}-50 p-6 rounded-xl`}>
      <div className="flex items-start space-x-4">
        <div className={`p-2 bg-${color}-100 rounded-lg`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}