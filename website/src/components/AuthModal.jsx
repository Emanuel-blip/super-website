import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from './LanguageSwitcher';
import { getTranslation } from '../translations';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { currentLanguage } = useLanguage();
  const t = (key) => getTranslation(key, currentLanguage);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Էլ. փոստը պարտադիր է';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Անվավер էլ. փոստի հասցե';
    }

    if (!formData.password) {
      newErrors.password = 'Գաղտնաբառը պարտադիր է';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Գաղտնաբառը պետք է լինի առնվազն 8 նիշ';
    }

    if (mode === 'register') {
      if (!formData.fullName) {
        newErrors.fullName = 'Անունը պարտադիր է';
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Գաղտնաբառի հաստատումը պարտադիր է';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Գաղտնաբառերը չեն համընկնում';
      }

      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = 'Պետք է համաձայնվեք պայմաններին';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock success
      setSuccess(true);
      
      // Track analytics
      console.log(`${mode} attempt:`, formData.email);
      
      // Close modal after success
      setTimeout(() => {
        setSuccess(false);
        onClose();
        // Reset form
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          fullName: '',
          agreeToTerms: false
        });
      }, 2000);
      
    } catch (error) {
      setErrors({ general: 'Սխալ է տեղի ունեցել: Խնդրում ենք նորից փորձել:' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    setErrors({});
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      agreeToTerms: false
    });
  };

  if (!isOpen) return null;

  if (success) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <Card className="relative glass-card shadow-2xl w-full max-w-md">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2 armenian-text">
              {mode === 'login' ? 'Բարի գալուստ!' : 'Գրանցումը հաջողվեց!'}
            </h3>
            <p className="text-muted-foreground armenian-text">
              {mode === 'login' 
                ? 'Դուք հաջողությամբ մուտք գործեցիք:'
                : 'Ձեր հաշիվը ստեղծվեց: Բարի գալուստ ai4all:'
              }
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative glass-card shadow-2xl w-full max-w-md">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold gradient-text armenian-text">
              {mode === 'login' ? t('login') : t('register')}
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 pt-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name (Register only) */}
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 armenian-text">
                  {t('fullName')}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 bg-background/50 border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.fullName ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Անուն Ազգանուն"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1 armenian-text">{errors.fullName}</p>
                )}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2 armenian-text">
                {t('email')}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 bg-background/50 border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.email ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 armenian-text">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2 armenian-text">
                {t('password')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full pl-10 pr-12 py-3 bg-background/50 border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.password ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 armenian-text">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password (Register only) */}
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 armenian-text">
                  {t('confirmPassword')}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`w-full pl-10 pr-12 py-3 bg-background/50 border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.confirmPassword ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1 armenian-text">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            {/* Terms Agreement (Register only) */}
            {mode === 'register' && (
              <div>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                    className="mt-1 w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                  />
                  <span className="text-sm text-muted-foreground armenian-text">
                    Ես համաձայն եմ{' '}
                    <a href="/terms" className="text-primary hover:underline">
                      Օգտագործման պայմանների
                    </a>{' '}
                    և{' '}
                    <a href="/privacy" className="text-primary hover:underline">
                      Գաղտնիության քաղաքականության
                    </a>{' '}
                    հետ
                  </span>
                </label>
                {errors.agreeToTerms && (
                  <p className="text-red-500 text-sm mt-1 armenian-text">{errors.agreeToTerms}</p>
                )}
              </div>
            )}

            {/* General Error */}
            {errors.general && (
              <div className="flex items-center space-x-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span className="armenian-text">{errors.general}</span>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full gradient-bg hover:scale-105 transition-all duration-300 py-3"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                  <span className="armenian-text">
                    {mode === 'login' ? 'Մուտք գործում...' : 'Գրանցվում...'}
                  </span>
                </div>
              ) : (
                <span className="armenian-text">
                  {mode === 'login' ? t('login') : t('register')}
                </span>
              )}
            </Button>

            {/* Switch Mode */}
            <div className="text-center">
              <button
                type="button"
                onClick={switchMode}
                className="text-sm text-muted-foreground hover:text-primary transition-colors armenian-text"
              >
                {mode === 'login' 
                  ? 'Չունե՞ք հաշիվ: Գրանցվել'
                  : 'Արդեն ունե՞ք հաշիվ: Մուտք գործել'
                }
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthModal;

