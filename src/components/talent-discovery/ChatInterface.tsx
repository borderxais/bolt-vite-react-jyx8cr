import React, { useState, useRef, useEffect } from 'react';
import { Send, Upload, Image as ImageIcon } from 'lucide-react';
import type { Message } from '../FeatureTalentDiscovery';

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (content: string, attachments?: Message['attachments']) => void;
}

export function ChatInterface({ messages, onSendMessage }: ChatInterfaceProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Chat with Victoria</h3>
      </div>

      <div className="h-[400px] overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p>{message.content}</p>
              {message.attachments?.map((attachment, index) => (
                <div key={index} className="mt-2">
                  {attachment.type === 'image' ? (
                    <img
                      src={attachment.url}
                      alt={attachment.name}
                      className="max-w-full rounded"
                    />
                  ) : (
                    <a
                      href={attachment.url}
                      className="text-blue-200 hover:text-blue-100 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📎 {attachment.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
        <div className="flex space-x-4">
          <div className="flex space-x-2">
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <Upload className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <ImageIcon className="w-5 h-5" />
            </button>
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}