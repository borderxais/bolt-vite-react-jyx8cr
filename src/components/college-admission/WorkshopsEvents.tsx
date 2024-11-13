import React from 'react';
import { Calendar, Users, Clock, MapPin, ExternalLink } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  mode: 'online' | 'in-person' | 'hybrid';
  speaker: string;
  description: string;
  attendees: number;
  capacity: number;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Crafting a Compelling College Essay',
    type: 'Workshop',
    date: '2024-03-15',
    time: '4:00 PM - 5:30 PM EST',
    location: 'Online via Zoom',
    mode: 'online',
    speaker: 'Dr. Emily Watson',
    description: 'Learn essential techniques for writing standout college essays that capture attention and showcase your unique story.',
    attendees: 45,
    capacity: 100
  },
  {
    id: '2',
    title: 'Ivy League Admissions Strategy',
    type: 'Webinar',
    date: '2024-03-20',
    time: '6:00 PM - 7:30 PM EST',
    location: 'Online via Zoom',
    mode: 'online',
    speaker: 'James Martinez, Former Harvard Admissions Officer',
    description: 'Get insider insights on what top universities look for and how to strengthen your application.',
    attendees: 75,
    capacity: 150
  },
  {
    id: '3',
    title: 'STEM Programs College Fair',
    type: 'Fair',
    date: '2024-04-05',
    time: '10:00 AM - 4:00 PM EST',
    location: 'Convention Center',
    mode: 'in-person',
    speaker: 'Multiple University Representatives',
    description: 'Meet representatives from top STEM programs and learn about admission requirements and opportunities.',
    attendees: 120,
    capacity: 500
  }
];

export function WorkshopsEvents() {
  return (
    <div className="space-y-8">
      {/* Calendar View */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Upcoming Events</h3>
          </div>
          <button className="text-blue-600 hover:text-blue-700">
            View Full Calendar
          </button>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{event.title}</h4>
                  <p className="text-blue-600">{event.type}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.mode === 'online'
                    ? 'bg-green-100 text-green-700'
                    : event.mode === 'in-person'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-purple-100 text-purple-700'
                }`}>
                  {event.mode.charAt(0).toUpperCase() + event.mode.slice(1)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees}/{event.capacity} Registered</span>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="font-medium text-gray-900 mb-1">Speaker</h5>
                <p className="text-gray-600">{event.speaker}</p>
              </div>

              <p className="text-gray-600 mb-4">{event.description}</p>

              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <span>Register Now</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <Calendar className="w-4 h-4" />
                  <span>Add to Calendar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h4 className="font-medium text-gray-900 mb-4">Additional Resources</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-white p-4 rounded-lg text-left hover:shadow-md transition-shadow">
            <h5 className="font-medium text-gray-900 mb-1">Past Event Recordings</h5>
            <p className="text-sm text-gray-600">Access recordings of previous workshops and webinars</p>
          </button>
          <button className="bg-white p-4 rounded-lg text-left hover:shadow-md transition-shadow">
            <h5 className="font-medium text-gray-900 mb-1">Presentation Materials</h5>
            <p className="text-sm text-gray-600">Download slides and resources from past events</p>
          </button>
        </div>
      </div>
    </div>
  );
}