import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, MapPin, Users } from 'lucide-react';
import type { ChildProfile } from '../FeatureTalentDiscovery';

interface Event {
  id: string;
  title: string;
  type: 'academic' | 'sports' | 'arts' | 'music';
  startTime: string;
  endTime: string;
  location: string;
  instructor: string;
  color: string;
}

interface CalendarViewProps {
  profile: ChildProfile;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Advanced Math Tutoring',
    type: 'academic',
    startTime: '15:00',
    endTime: '16:30',
    location: 'Online',
    instructor: 'Dr. Smith',
    color: 'bg-blue-100 text-blue-700 border-blue-200'
  },
  {
    id: '2',
    title: 'Soccer Practice',
    type: 'sports',
    startTime: '17:00',
    endTime: '18:30',
    location: 'Sports Complex',
    instructor: 'Coach Johnson',
    color: 'bg-green-100 text-green-700 border-green-200'
  },
  {
    id: '3',
    title: 'Piano Lessons',
    type: 'music',
    startTime: '14:00',
    endTime: '15:00',
    location: 'Music Studio',
    instructor: 'Ms. Chen',
    color: 'bg-purple-100 text-purple-700 border-purple-200'
  }
];

const timeSlots = Array.from({ length: 12 }, (_, i) => i + 9); // 9 AM to 8 PM

export function CalendarView({ profile }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'day' | 'week'>('week');

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const getWeekDates = () => {
    const dates = [];
    const firstDay = new Date(currentDate);
    firstDay.setDate(firstDay.getDate() - firstDay.getDay()); // Start from Sunday
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDay);
      date.setDate(firstDay.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 7 : -7));
    setCurrentDate(newDate);
  };

  const getEventPosition = (event: Event) => {
    const startHour = parseInt(event.startTime.split(':')[0]);
    const startMinute = parseInt(event.startTime.split(':')[1]);
    const endHour = parseInt(event.endTime.split(':')[0]);
    const endMinute = parseInt(event.endTime.split(':')[1]);
    
    const top = (startHour - 9) * 60 + startMinute;
    const height = (endHour - startHour) * 60 + (endMinute - startMinute);
    
    return {
      top: `${top}px`,
      height: `${height}px`
    };
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <CalendarIcon className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">Schedule</h3>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigateWeek('prev')}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <span className="font-medium">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
            <button
              onClick={() => navigateWeek('next')}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          <div className="flex rounded-lg border border-gray-200">
            <button
              onClick={() => setView('day')}
              className={`px-4 py-2 text-sm font-medium ${
                view === 'day'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Day
            </button>
            <button
              onClick={() => setView('week')}
              className={`px-4 py-2 text-sm font-medium ${
                view === 'week'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Week
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Days Header */}
          <div className="grid grid-cols-8 gap-4 mb-4">
            <div className="w-20"></div> {/* Time column */}
            {getWeekDates().map((date, index) => (
              <div key={index} className="text-center">
                <div className="font-medium text-gray-900">
                  {daysOfWeek[index]}
                </div>
                <div className="text-sm text-gray-500">
                  {date.getDate()}
                </div>
              </div>
            ))}
          </div>

          {/* Time Grid */}
          <div className="relative grid grid-cols-8 gap-4">
            {/* Time Labels */}
            <div className="space-y-20">
              {timeSlots.map((hour) => (
                <div key={hour} className="text-sm text-gray-500 -mt-2">
                  {hour % 12 || 12}:00 {hour < 12 ? 'AM' : 'PM'}
                </div>
              ))}
            </div>

            {/* Day Columns */}
            {Array.from({ length: 7 }).map((_, dayIndex) => (
              <div key={dayIndex} className="relative">
                {/* Hour lines */}
                {timeSlots.map((hour) => (
                  <div
                    key={hour}
                    className="absolute w-full border-t border-gray-100"
                    style={{ top: `${(hour - 9) * 80}px` }}
                  />
                ))}

                {/* Events */}
                {events.map((event) => (
                  <div
                    key={event.id}
                    className={`absolute w-full p-2 rounded-lg border ${event.color}`}
                    style={getEventPosition(event)}
                  >
                    <h4 className="font-medium text-sm mb-1">{event.title}</h4>
                    <div className="flex items-center space-x-2 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>
                        {event.startTime} - {event.endTime}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs mt-1">
                      <Users className="w-3 h-3" />
                      <span>{event.instructor}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}