import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Eye, Heart, Award, Globe } from 'lucide-react'
import { getTranslation } from '../translations'
import { useLanguage } from './LanguageSwitcher'

const About = () => {
  const { currentLanguage } = useLanguage()
  const t = (key) => getTranslation(key, currentLanguage)

  const teamMembers = [
    {
      name: 'Արամ Ավագյան',
      role: t('founderRole'),
      image: '/api/placeholder/150/150',
      bio: t('founderBio')
    },
    {
      name: 'Անի Պետրոսյան',
      role: t('educationHeadRole'),
      image: '/api/placeholder/150/150',
      bio: t('educationHeadBio')
    },
    {
      name: 'Դավիթ Հակոբյան',
      role: t('techLeadRole'),
      image: '/api/placeholder/150/150',
      bio: t('techLeadBio')
    }
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('accessibilityTitle'),
      description: t('accessibilityDescription')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('nativeLanguageTitle'),
      description: t('nativeLanguageDescription')
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('qualityTitle'),
      description: t('qualityDescription')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('aboutSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-purple-400 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold">{t('missionTitle')}</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('missionDesc')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">5000+</div>
                    <div className="text-gray-300">{t('students')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">50+</div>
                    <div className="text-gray-300">{t('courses')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">200+</div>
                    <div className="text-gray-300">{t('projects')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">95%</div>
                    <div className="text-gray-300">{t('successRate')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="text-cyan-400 mt-1">{value.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-gray-300">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold">{t('visionTitle')}</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('visionDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-purple-400 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">
                {t('teamTitle')}
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('teamDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

