import React, { useState } from 'react';
import { FeatureLayout } from './FeatureLayout';
import { ProfileSection } from './talent-discovery/ProfileSection';
import { ChatInterface } from './talent-discovery/ChatInterface';
import { SkillTreeSection } from './talent-discovery/SkillTreeSection';
import { TalentDiscoveryHero } from './talent-discovery/TalentDiscoveryHero';
import { CognitiveAnalysis } from './talent-discovery/CognitiveAnalysis';
import { CareerProjection } from './talent-discovery/CareerProjection';

export function FeatureTalentDiscovery() {
  const [activeProfile, setActiveProfile] = useState<string>('1');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'victoria',
      content: `Hi! I'm Victoria, your AI co-pilot for discovering your child's unique talents. Would you like to explore their current interests and abilities?`,
      timestamp: new Date().toISOString()
    }
  ]);

  const handleSendMessage = (content: string, attachments?: Message['attachments']) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content,
      timestamp: new Date().toISOString(),
      attachments
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <FeatureLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TalentDiscoveryHero />
        
        <div className="mb-8">
          <ChatInterface 
            messages={messages}
            onSendMessage={handleSendMessage}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ProfileSection 
              activeProfile={activeProfile}
              onProfileSelect={setActiveProfile}
            />
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <CognitiveAnalysis profileId={activeProfile} />
            <SkillTreeSection profileId={activeProfile} />
            <CareerProjection profileId={activeProfile} />
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
}