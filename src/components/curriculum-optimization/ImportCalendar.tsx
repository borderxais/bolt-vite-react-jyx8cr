import React, { useState } from 'react';
import { Calendar, Upload, Check, AlertCircle } from 'lucide-react';

interface ImportStatus {
  google?: 'connected' | 'disconnected';
  apple?: 'connected' | 'disconnected';
  outlook?: 'connected' | 'disconnected';
}

export function ImportCalendar() {
  const [importStatus, setImportStatus] = useState<ImportStatus>({});
  const [isImporting, setIsImporting] = useState(false);

  const handleConnect = (platform: keyof ImportStatus) => {
    setIsImporting(true);
    // Simulate API call
    setTimeout(() => {
      setImportStatus(prev => ({
        ...prev,
        [platform]: 'connected'
      }));
      setIsImporting(false);
    }, 1500);
  };

  const handleDisconnect = (platform: keyof ImportStatus) => {
    setImportStatus(prev => ({
      ...prev,
      [platform]: 'disconnected'
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <Calendar className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">Import Calendar</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Google Calendar */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
                alt="Google Calendar"
                className="w-8 h-8"
              />
              <span className="font-medium text-gray-900">Google Calendar</span>
            </div>
            {importStatus.google === 'connected' && (
              <Check className="w-5 h-5 text-green-600" />
            )}
          </div>
          <button
            onClick={() => importStatus.google === 'connected' 
              ? handleDisconnect('google')
              : handleConnect('google')
            }
            disabled={isImporting}
            className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg ${
              importStatus.google === 'connected'
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            } transition-colors`}
          >
            {isImporting && importStatus.google !== 'connected' ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
            ) : (
              <>
                {importStatus.google === 'connected' ? (
                  'Disconnect'
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    <span>Connect</span>
                  </>
                )}
              </>
            )}
          </button>
        </div>

        {/* Apple Calendar */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/ICal_Icon.png"
                alt="Apple Calendar"
                className="w-8 h-8"
              />
              <span className="font-medium text-gray-900">Apple Calendar</span>
            </div>
            {importStatus.apple === 'connected' && (
              <Check className="w-5 h-5 text-green-600" />
            )}
          </div>
          <button
            onClick={() => importStatus.apple === 'connected'
              ? handleDisconnect('apple')
              : handleConnect('apple')
            }
            disabled={isImporting}
            className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg ${
              importStatus.apple === 'connected'
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            } transition-colors`}
          >
            {isImporting && importStatus.apple !== 'connected' ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
            ) : (
              <>
                {importStatus.apple === 'connected' ? (
                  'Disconnect'
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    <span>Connect</span>
                  </>
                )}
              </>
            )}
          </button>
        </div>

        {/* Outlook Calendar */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg"
                alt="Outlook Calendar"
                className="w-8 h-8"
              />
              <span className="font-medium text-gray-900">Outlook Calendar</span>
            </div>
            {importStatus.outlook === 'connected' && (
              <Check className="w-5 h-5 text-green-600" />
            )}
          </div>
          <button
            onClick={() => importStatus.outlook === 'connected'
              ? handleDisconnect('outlook')
              : handleConnect('outlook')
            }
            disabled={isImporting}
            className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg ${
              importStatus.outlook === 'connected'
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            } transition-colors`}
          >
            {isImporting && importStatus.outlook !== 'connected' ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
            ) : (
              <>
                {importStatus.outlook === 'connected' ? (
                  'Disconnect'
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    <span>Connect</span>
                  </>
                )}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Import Status */}
      {Object.values(importStatus).some(status => status === 'connected') && (
        <div className="mt-6 bg-blue-50 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900">Calendar Import Status</h4>
              <p className="text-sm text-gray-600 mt-1">
                Your calendar events have been imported successfully. They will be considered 
                during schedule optimization.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}