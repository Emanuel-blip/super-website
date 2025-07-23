import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Users, Code, Lightbulb, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from './LanguageSwitcher';
import { getTranslation } from '../translations';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { currentLanguage } = useLanguage();
  const t = (key) => getTranslation(key, currentLanguage);

  // Mock search data
  const searchData = [
    {
      id: 1,
      title: 'AI-ի Հիմունքներ',
      description: 'Սովորեք արհեստական բանականության հիմունքները',
      category: 'course',
      url: '/how-to-use-ai',
      icon: BookOpen
    },
    {
      id: 2,
      title: 'Machine Learning Ալգորիթմներ',
      description: 'Խորը ուսուցում ML ալգորիթմների մասին',
      category: 'course',
      url: '/ai-prompts',
      icon: BookOpen
    },
    {
      id: 3,
      title: 'Vibe Coding',
      description: 'Ապագայի ծրագրավորման մեթոդներ',
      category: 'tool',
      url: '/vibe-coding',
      icon: Code
    },
    {
      id: 4,
      title: 'AI Համայնք',
      description: 'Միացեք մեր ակտիվ համայնքին',
      category: 'community',
      url: '/about',
      icon: Users
    },
    {
      id: 5,
      title: 'ChatGPT Հրահանգներ',
      description: 'Լավագույն հրահանգները ChatGPT-ի համար',
      category: 'prompt',
      url: '/ai-prompts',
      icon: Lightbulb
    },
    {
      id: 6,
      title: 'Neural Networks',
      description: 'Նեյրոնային ցանցերի հիմունքները',
      category: 'course',
      url: '/how-to-use-ai',
      icon: BookOpen
    }
  ];

  const categories = [
    { id: 'all', name: 'Բոլորը', icon: Search },
    { id: 'course', name: 'Դասընթացներ', icon: BookOpen },
    { id: 'prompt', name: 'Հրահանգներ', icon: Lightbulb },
    { id: 'tool', name: 'Գործիքներ', icon: Code },
    { id: 'community', name: 'Համայնք', icon: Users }
  ];

  useEffect(() => {
    if (query.length > 0) {
      setIsLoading(true);
      // Simulate API call delay
      const timer = setTimeout(() => {
        const filtered = searchData.filter(item => {
          const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase()) ||
                              item.description.toLowerCase().includes(query.toLowerCase());
          const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
          return matchesQuery && matchesCategory;
        });
        setResults(filtered);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [query, selectedCategory]);

  const handleResultClick = (result) => {
    // Navigate to the result URL
    window.location.href = result.url;
    onClose();
    
    // Track search analytics
    console.log('Search result clicked:', result.title);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl">
        <Card className="glass-card shadow-2xl">
          <CardContent className="p-0">
            {/* Search Header */}
            <div className="flex items-center p-6 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('searchPlaceholder')}
                className="flex-1 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none text-lg"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="ml-3"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 p-4 border-b border-border">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center space-x-2"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                  </Button>
                );
              })}
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : results.length > 0 ? (
                <div className="p-2">
                  {results.map((result) => {
                    const IconComponent = result.icon;
                    return (
                      <button
                        key={result.id}
                        onClick={() => handleResultClick(result)}
                        className="w-full p-4 text-left hover:bg-muted/50 rounded-lg transition-colors flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground mb-1 armenian-text">
                            {result.title}
                          </h3>
                          <p className="text-sm text-muted-foreground armenian-text">
                            {result.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : query.length > 0 ? (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground armenian-text">
                    Ոչինչ չի գտնվել "{query}" հարցման համար
                  </p>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground armenian-text">
                    Սկսեք տպել՝ փնտրելու համար
                  </p>
                </div>
              )}
            </div>

            {/* Search Tips */}
            {query.length === 0 && (
              <div className="p-4 border-t border-border">
                <p className="text-sm text-muted-foreground armenian-text mb-2">
                  Հուշումներ:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['AI հիմունքներ', 'Machine Learning', 'Vibe Coding', 'Հրահանգներ'].map((tip) => (
                    <button
                      key={tip}
                      onClick={() => setQuery(tip)}
                      className="px-3 py-1 bg-muted/50 hover:bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors armenian-text"
                    >
                      {tip}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SearchModal;

