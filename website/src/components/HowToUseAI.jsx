import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Play, Code, Brain, Lightbulb, Target, ChevronRight, ExternalLink } from 'lucide-react'
import { getTranslation } from '../translations'
import { useLanguage } from './LanguageSwitcher'

const HowToUseAI = () => {
  const { currentLanguage } = useLanguage()
  const t = (key) => getTranslation(key, currentLanguage)
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: {
        hy: 'AI-ի Հիմունքները',
        en: 'AI Fundamentals',
        ru: 'Основы ИИ'
      },
      description: {
        hy: 'Սկսեք AI-ի հիմունքները սովորելուց՝ հասկանալու համար, թե ինչ է արհեստական բանականությունը և ինչպես է այն աշխատում',
        en: 'Start by learning AI fundamentals to understand what artificial intelligence is and how it works',
        ru: 'Начните с изучения основ ИИ, чтобы понять, что такое искусственный интеллект и как он работает'
      },
      content: {
        hy: 'Արհեստական բանականությունը (AI) համակարգչային համակարգերի ունակությունն է կատարել այնպիսի առաջադրանքներ, որոնք սովորաբար մարդկային բանականություն են պահանջում։ Սա ներառում է ուսուցում, պատճառաբանություն, խնդիրների լուծում, ընկալում և լեզվի հասկացում։',
        en: 'Artificial Intelligence (AI) is the ability of computer systems to perform tasks that typically require human intelligence. This includes learning, reasoning, problem-solving, perception, and language understanding.',
        ru: 'Искусственный интеллект (ИИ) - это способность компьютерных систем выполнять задачи, которые обычно требуют человеческого интеллекта. Это включает обучение, рассуждение, решение проблем, восприятие и понимание языка.'
      }
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: {
        hy: 'Մեքենայական Ուսուցում',
        en: 'Machine Learning',
        ru: 'Машинное обучение'
      },
      description: {
        hy: 'Սովորեք մեքենայական ուսուցման հիմունքները և տեսեք, թե ինչպես են մեքենաները սովորում տվյալներից',
        en: 'Learn machine learning fundamentals and see how machines learn from data',
        ru: 'Изучите основы машинного обучения и посмотрите, как машины учатся на данных'
      },
      content: {
        hy: 'Մեքենայական ուսուցումը AI-ի մի ճյուղ է, որը թույլ է տալիս համակարգչային ծրագրերին ավտոմատ բարելավվել փորձի միջոցով՝ առանց բացահայտ ծրագրավորման։ Այն օգտագործում է ալգորիթմներ՝ տվյալներում օրինաչափություններ գտնելու և կանխատեսումներ կատարելու համար։',
        en: 'Machine learning is a branch of AI that allows computer programs to automatically improve through experience without being explicitly programmed. It uses algorithms to find patterns in data and make predictions.',
        ru: 'Машинное обучение - это ветвь ИИ, которая позволяет компьютерным программам автоматически улучшаться через опыт без явного программирования. Оно использует алгоритмы для поиска закономерностей в данных и прогнозирования.'
      }
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: {
        hy: 'Գործնական Կիրառում',
        en: 'Practical Application',
        ru: 'Практическое применение'
      },
      description: {
        hy: 'Սկսեք օգտագործել AI գործիքները ձեր առօրյա առաջադրանքներում և նախագծերում',
        en: 'Start using AI tools in your daily tasks and projects',
        ru: 'Начните использовать инструменты ИИ в ваших повседневных задачах и проектах'
      },
      content: {
        hy: 'AI գործիքները կարող են օգտագործվել տարբեր ոլորտներում՝ տեքստի գեներացիա, պատկերների ստեղծում, տվյալների վերլուծություն, ավտոմատացում և շատ այլ բաներ։ Սկսեք պարզ գործիքներից և աստիճանաբար անցեք ավելի բարդ լուծումների։',
        en: 'AI tools can be used in various fields - text generation, image creation, data analysis, automation and much more. Start with simple tools and gradually move to more complex solutions.',
        ru: 'Инструменты ИИ могут использоваться в различных областях - генерация текста, создание изображений, анализ данных, автоматизация и многое другое. Начните с простых инструментов и постепенно переходите к более сложным решениям.'
      }
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: {
        hy: 'Մասնագիտացում',
        en: 'Specialization',
        ru: 'Специализация'
      },
      description: {
        hy: 'Ընտրեք ձեզ հետաքրքրող ոլորտը և խորանալ այդ ուղղությամբ',
        en: 'Choose the field that interests you and dive deeper in that direction',
        ru: 'Выберите интересующую вас область и углубитесь в этом направлении'
      },
      content: {
        hy: 'AI-ն ունի բազմաթիվ մասնագիտացման ոլորտներ՝ բնական լեզվի մշակում, համակարգչային տեսողություն, ռոբոտաշինություն, խաղային AI և այլն։ Ընտրեք այն ոլորտը, որը ձեզ ամենաշատն է հետաքրքրում և սկսեք խորանալ այդ ուղղությամբ։',
        en: 'AI has many specialization areas - natural language processing, computer vision, robotics, game AI and others. Choose the field that interests you most and start diving deeper in that direction.',
        ru: 'ИИ имеет множество областей специализации - обработка естественного языка, компьютерное зрение, робототехника, игровой ИИ и другие. Выберите область, которая вас больше всего интересует, и начните углубляться в этом направлении.'
      }
    }
  ]

  const tools = [
    {
      name: 'ChatGPT',
      description: {
        hy: 'Հզոր AI չատբոտ տեքստի գեներացիայի և հարցերի պատասխանման համար',
        en: 'Powerful AI chatbot for text generation and answering questions',
        ru: 'Мощный ИИ чатбот для генерации текста и ответов на вопросы'
      },
      category: {
        hy: 'Տեքստ',
        en: 'Text',
        ru: 'Текст'
      },
      url: 'https://chat.openai.com'
    },
    {
      name: 'DALL-E',
      description: {
        hy: 'AI գործիք պատկերների ստեղծման համար տեքստային նկարագրությունից',
        en: 'AI tool for creating images from text descriptions',
        ru: 'ИИ инструмент для создания изображений из текстовых описаний'
      },
      category: {
        hy: 'Պատկեր',
        en: 'Image',
        ru: 'Изображение'
      },
      url: 'https://openai.com/dall-e-2'
    },
    {
      name: 'GitHub Copilot',
      description: {
        hy: 'AI օգնական ծրագրավորողների համար կոդի գրման և ավտոմատացման համար',
        en: 'AI assistant for programmers for code writing and automation',
        ru: 'ИИ помощник для программистов для написания кода и автоматизации'
      },
      category: {
        hy: 'Կոդ',
        en: 'Code',
        ru: 'Код'
      },
      url: 'https://github.com/features/copilot'
    },
    {
      name: 'Midjourney',
      description: {
        hy: 'Արվեստական պատկերների ստեղծման համար AI գործիք',
        en: 'AI tool for creating artistic images',
        ru: 'ИИ инструмент для создания художественных изображений'
      },
      category: {
        hy: 'Արվեստ',
        en: 'Art',
        ru: 'Искусство'
      },
      url: 'https://midjourney.com'
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
              {t('howToUseAITitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('howToUseAISubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('learningStepsTitle')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('learningStepsSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Steps Navigation */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-purple-500/30 to-cyan-500/30 border-purple-500/50'
                      : 'bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-purple-500/20 hover:border-purple-500/40'
                  } border backdrop-blur-sm`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${
                      activeStep === index ? 'bg-purple-500' : 'bg-purple-500/20'
                    }`}>
                      <div className={activeStep === index ? 'text-white' : 'text-purple-400'}>
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step.title[currentLanguage]}</h3>
                      <p className="text-gray-300 text-sm">{step.description[currentLanguage]}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      activeStep === index ? 'rotate-90 text-purple-400' : 'text-gray-500'
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Step Content */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-500 rounded-xl mr-4">
                  <div className="text-white">
                    {steps[activeStep].icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{steps[activeStep].title[currentLanguage]}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {steps[activeStep].content[currentLanguage]}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>{t('startLearning')}</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular AI Tools */}
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
              <Lightbulb className="w-8 h-8 text-purple-400 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">
                {t('popularAIToolsTitle')}
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('popularAIToolsSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{tool.name}</h3>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                      {tool.category[currentLanguage]}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{tool.description[currentLanguage]}</p>
                </div>
                <motion.a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group-hover:text-cyan-400"
                >
                  <span>{currentLanguage === 'hy' ? 'Փորձել' : currentLanguage === 'en' ? 'Try it' : 'Попробовать'}</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl p-12 backdrop-blur-sm border border-purple-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {currentLanguage === 'hy' ? 'Պատրա՞ստ եք սկսել' : currentLanguage === 'en' ? 'Ready to start?' : 'Готовы начать?'}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {currentLanguage === 'hy' 
                ? 'Միացեք մեր համայնքին և սկսեք ձեր AI ճանապարհորդությունը այսօր'
                : currentLanguage === 'en'
                ? 'Join our community and start your AI journey today'
                : 'Присоединяйтесь к нашему сообществу и начните свое путешествие в мир ИИ сегодня'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                {t('startLearning')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-purple-500 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                {t('learnMore')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HowToUseAI

