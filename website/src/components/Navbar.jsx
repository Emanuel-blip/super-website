import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Cpu, Sparkles, Search, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import LanguageSwitcher, { useLanguage } from './LanguageSwitcher'
import SearchModal from './SearchModal'
import AuthModal from './AuthModal'
import { getTranslation } from '../translations'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showAuth, setShowAuth] = useState(false)
  const location = useLocation()
  const { currentLanguage } = useLanguage()

  const t = (key) => getTranslation(key, currentLanguage)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: t('home'), icon: '🏠' },
    { path: '/about', label: t('about'), icon: '👥' },
    { path: '/how-to-use-ai', label: t('howToUseAI'), icon: '🤖' },
    { path: '/ai-prompts', label: t('aiPrompts'), icon: '💬' },
    { path: '/vibe-coding', label: t('vibeCoding'), icon: '⚡' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Cpu className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-xl font-bold gradient-text armenian-text">ai4all</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 ml-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 armenian-text hover-lift ${
                    isActive(item.path)
                      ? 'bg-primary text-primary-foreground glow-effect'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(true)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Auth Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowAuth(true)}
                className="text-muted-foreground hover:text-foreground"
              >
                <User className="h-5 w-5" />
              </Button>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* CTA Button - Desktop */}
              <div className="hidden lg:block">
                <Button className="gradient-bg hover:scale-105 transition-transform duration-300 armenian-text">
                  <Sparkles className="h-4 w-4 mr-2" />
                  {t('startLearning')}
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-foreground hover:text-primary"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 glass-card mt-2 rounded-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 armenian-text ${
                      isActive(item.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <Button className="w-full gradient-bg armenian-text">
                    <Sparkles className="h-4 w-4 mr-2" />
                    {t('startLearning')}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modals */}
      <SearchModal 
        isOpen={showSearch} 
        onClose={() => setShowSearch(false)} 
      />
      <AuthModal 
        isOpen={showAuth} 
        onClose={() => setShowAuth(false)} 
      />
    </>
  )
}

export default Navbar

