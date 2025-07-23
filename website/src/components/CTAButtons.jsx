import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, BookOpen, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageSwitcher';
import { getTranslation } from '../translations';

const CTAButtons = ({ variant = "default", size = "default" }) => {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const t = (key) => getTranslation(key, currentLanguage);

  const handleStartLearning = () => {
    // Navigate to learning page using React Router
    navigate('/learning');
    
    // Track analytics
    console.log('Start Learning button clicked');
  };

  const handleExploreAI = () => {
    // Navigate to about page or AI basics section
    navigate('/how-to-use-ai');
    
    // Track analytics
    console.log('Explore AI button clicked');
  };

  const handleJoinCommunity = () => {
    // Redirect to community page or Discord/Telegram
    window.open('https://discord.gg/ai4all', '_blank', 'noopener,noreferrer');
    
    // Track analytics
    console.log('Join Community button clicked');
  };

  const handleViewResources = () => {
    // Navigate to resources page
    navigate('/ai-prompts');
    
    // Track analytics
    console.log('View Resources button clicked');
  };

  if (variant === "hero") {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={handleStartLearning}
          size="lg"
          className="gradient-bg hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          {t('startLearning')}
        </Button>
        <Button
          onClick={handleExploreAI}
          variant="outline"
          size="lg"
          className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 text-lg px-8 py-4"
        >
          <BookOpen className="w-5 h-5 mr-2" />
          {t('exploreAI')}
        </Button>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={handleStartLearning}
          className="gradient-bg hover:scale-105 transition-all duration-300"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {t('startLearning')}
        </Button>
        <Button
          onClick={handleJoinCommunity}
          variant="outline"
          className="border-primary/50 hover:border-primary hover:bg-primary/10"
        >
          <Users className="w-4 h-4 mr-2" />
          {currentLanguage === 'hy' ? 'Միանալ Համայնքին' : currentLanguage === 'en' ? 'Join Community' : 'Присоединиться к сообществу'}
        </Button>
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          onClick={handleStartLearning}
          className="gradient-bg hover:scale-105 transition-all duration-300"
          size={size}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {t('startLearning')}
        </Button>
        <Button
          onClick={handleViewResources}
          variant="outline"
          className="border-primary/50 hover:border-primary hover:bg-primary/10"
          size={size}
        >
          <ArrowRight className="w-4 h-4 mr-2" />
          {currentLanguage === 'hy' ? 'Ռեսուրսներ' : currentLanguage === 'en' ? 'Resources' : 'Ресурсы'}
        </Button>
      </div>
    );
  }

  // Default single button
  return (
    <Button
      onClick={handleStartLearning}
      className="gradient-bg hover:scale-105 transition-all duration-300"
      size={size}
    >
      <Sparkles className="w-4 h-4 mr-2" />
      {t('startLearning')}
    </Button>
  );
};

export default CTAButtons;

