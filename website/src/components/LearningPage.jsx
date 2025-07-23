import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Play, CheckCircle, Clock, Users, Star, ArrowRight, Download } from 'lucide-react'
import { getTranslation } from '../translations'
import { useLanguage } from './LanguageSwitcher'

const LearningPage = () => {
  const { currentLanguage } = useLanguage()
  const t = (key) => getTranslation(key, currentLanguage)
  const [selectedCourse, setSelectedCourse] = useState(null)

  const courses = [
    {
      id: 1,
      title: {
        hy: 'AI-ի Հիմունքներ Սկսնակների Համար',
        en: 'AI Fundamentals for Beginners',
        ru: 'Основы ИИ для начинающих'
      },
      description: {
        hy: 'Սովորեք արհեստական բանականության հիմունքները զրոյից՝ առանց նախնական գիտելիքների',
        en: 'Learn artificial intelligence fundamentals from scratch without prior knowledge',
        ru: 'Изучите основы искусственного интеллекта с нуля без предварительных знаний'
      },
      duration: {
        hy: '4 շաբաթ',
        en: '4 weeks',
        ru: '4 недели'
      },
      lessons: 12,
      students: 2500,
      rating: 4.8,
      level: {
        hy: 'Սկսնակ',
        en: 'Beginner',
        ru: 'Начинающий'
      },
      topics: [
        {
          hy: 'Ի՞նչ է AI-ը',
          en: 'What is AI?',
          ru: 'Что такое ИИ?'
        },
        {
          hy: 'Մեքենայական ուսուցման հիմունքներ',
          en: 'Machine Learning Basics',
          ru: 'Основы машинного обучения'
        },
        {
          hy: 'AI-ի կիրառման ոլորտներ',
          en: 'AI Application Areas',
          ru: 'Области применения ИИ'
        },
        {
          hy: 'Առաջին AI նախագիծ',
          en: 'First AI Project',
          ru: 'Первый проект ИИ'
        }
      ]
    },
    {
      id: 2,
      title: {
        hy: 'AI Հրահանգների Արվեստ',
        en: 'The Art of AI Prompts',
        ru: 'Искусство ИИ промптов'
      },
      description: {
        hy: 'Սովորեք ստեղծել արդյունավետ հրահանգներ AI համակարգերի համար',
        en: 'Learn to create effective prompts for AI systems',
        ru: 'Научитесь создавать эффективные промпты для систем ИИ'
      },
      duration: {
        hy: '2 շաբաթ',
        en: '2 weeks',
        ru: '2 недели'
      },
      lessons: 8,
      students: 1800,
      rating: 4.9,
      level: {
        hy: 'Միջին',
        en: 'Intermediate',
        ru: 'Средний'
      },
      topics: [
        {
          hy: 'Հրահանգների կառուցվածք',
          en: 'Prompt Structure',
          ru: 'Структура промптов'
        },
        {
          hy: 'Տեքստային հրահանգներ',
          en: 'Text Prompts',
          ru: 'Текстовые промпты'
        },
        {
          hy: 'Պատկերային հրահանգներ',
          en: 'Image Prompts',
          ru: 'Промпты для изображений'
        },
        {
          hy: 'Առաջադեմ տեխնիկաներ',
          en: 'Advanced Techniques',
          ru: 'Продвинутые техники'
        }
      ]
    },
    {
      id: 3,
      title: {
        hy: 'Vibe Coding՝ Ապագայի Ծրագրավորում',
        en: 'Vibe Coding: Programming of the Future',
        ru: 'Vibe Coding: Программирование будущего'
      },
      description: {
        hy: 'Սովորեք ծրագրավորել AI օգնությամբ և ստեղծել ապագայի ծրագրակազմ',
        en: 'Learn to program with AI assistance and create software of the future',
        ru: 'Научитесь программировать с помощью ИИ и создавать программное обеспечение будущего'
      },
      duration: {
        hy: '6 շաբաթ',
        en: '6 weeks',
        ru: '6 недель'
      },
      lessons: 18,
      students: 1200,
      rating: 4.7,
      level: {
        hy: 'Առաջադեմ',
        en: 'Advanced',
        ru: 'Продвинутый'
      },
      topics: [
        {
          hy: 'AI օգնական գործիքներ',
          en: 'AI Assistant Tools',
          ru: 'Инструменты ИИ помощников'
        },
        {
          hy: 'Կոդի գեներացիա',
          en: 'Code Generation',
          ru: 'Генерация кода'
        },
        {
          hy: 'Ավտոմատ թեստավորում',
          en: 'Automated Testing',
          ru: 'Автоматизированное тестирование'
        },
        {
          hy: 'AI-ով նախագծի կառավարում',
          en: 'AI Project Management',
          ru: 'Управление проектами с ИИ'
        }
      ]
    }
  ]

  const learningPaths = [
    {
      title: {
        hy: 'Սկսնակի Ուղի',
        en: 'Beginner Path',
        ru: 'Путь новичка'
      },
      description: {
        hy: 'Սկսեք AI-ի հետ ծանոթությունը զրոյից',
        en: 'Start your AI journey from scratch',
        ru: 'Начните знакомство с ИИ с нуля'
      },
      courses: [1, 2],
      duration: {
        hy: '6 շաբաթ',
        en: '6 weeks',
        ru: '6 недель'
      }
    },
    {
      title: {
        hy: 'Ծրագրավորողի Ուղի',
        en: 'Developer Path',
        ru: 'Путь разработчика'
      },
      description: {
        hy: 'Սովորեք ինտեգրել AI-ը ձեր ծրագրավորման աշխատանքում',
        en: 'Learn to integrate AI into your programming work',
        ru: 'Научитесь интегрировать ИИ в свою работу программиста'
      },
      courses: [1, 3],
      duration: {
        hy: '10 շաբաթ',
        en: '10 weeks',
        ru: '10 недель'
      }
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
              {currentLanguage === 'hy' ? 'Սկսեք Ուսուցումը' : currentLanguage === 'en' ? 'Start Learning' : 'Начать обучение'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {currentLanguage === 'hy' 
                ? 'Ընտրեք ձեր մակարդակին համապատասխան դասընթացը և սկսեք AI-ի հետ ծանոթությունը'
                : currentLanguage === 'en'
                ? 'Choose a course that matches your level and start your AI journey'
                : 'Выберите курс, соответствующий вашему уровню, и начните знакомство с ИИ'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning Paths */}
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
              {currentLanguage === 'hy' ? 'Ուսուցման Ուղիներ' : currentLanguage === 'en' ? 'Learning Paths' : 'Пути обучения'}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {currentLanguage === 'hy' 
                ? 'Ընտրեք ձեր նպատակներին համապատասխան ուսուցման ուղին'
                : currentLanguage === 'en'
                ? 'Choose the learning path that matches your goals'
                : 'Выберите путь обучения, соответствующий вашим целям'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {learningPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{path.title[currentLanguage]}</h3>
                <p className="text-gray-300 mb-6">{path.description[currentLanguage]}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-300">{path.duration[currentLanguage]}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm text-gray-300">
                      {path.courses.length} {currentLanguage === 'hy' ? 'դասընթաց' : currentLanguage === 'en' ? 'courses' : 'курса'}
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>{currentLanguage === 'hy' ? 'Ընտրել այս ուղին' : currentLanguage === 'en' ? 'Choose this path' : 'Выбрать этот путь'}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Courses */}
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
              {currentLanguage === 'hy' ? 'Հասանելի Դասընթացներ' : currentLanguage === 'en' ? 'Available Courses' : 'Доступные курсы'}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {currentLanguage === 'hy' 
                ? 'Մեր բոլոր դասընթացները մշակված են փորձառու մասնագետների կողմից'
                : currentLanguage === 'en'
                ? 'All our courses are developed by experienced professionals'
                : 'Все наши курсы разработаны опытными профессионалами'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                {/* Course Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      course.level[currentLanguage] === 'Սկսնակ' || course.level[currentLanguage] === 'Beginner' || course.level[currentLanguage] === 'Начинающий'
                        ? 'bg-green-500/20 text-green-400'
                        : course.level[currentLanguage] === 'Միջին' || course.level[currentLanguage] === 'Intermediate' || course.level[currentLanguage] === 'Средний'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {course.level[currentLanguage]}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{course.title[currentLanguage]}</h3>
                  <p className="text-gray-300 text-sm mb-4">{course.description[currentLanguage]}</p>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="text-xs text-gray-300">{course.duration[currentLanguage]}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="text-xs text-gray-300">
                      {course.lessons} {currentLanguage === 'hy' ? 'դաս' : currentLanguage === 'en' ? 'lessons' : 'уроков'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="text-xs text-gray-300">{course.students.toLocaleString()}</div>
                  </div>
                </div>

                {/* Course Topics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-gray-300">
                    {currentLanguage === 'hy' ? 'Ինչ կսովորեք:' : currentLanguage === 'en' ? 'What you\'ll learn:' : 'Что вы изучите:'}
                  </h4>
                  <ul className="space-y-2">
                    {course.topics.slice(0, 3).map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{topic[currentLanguage]}</span>
                      </li>
                    ))}
                    {course.topics.length > 3 && (
                      <li className="text-sm text-purple-400">
                        +{course.topics.length - 3} {currentLanguage === 'hy' ? 'ավելին' : currentLanguage === 'en' ? 'more' : 'еще'}
                      </li>
                    )}
                  </ul>
                </div>

                {/* Course Actions */}
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    onClick={() => setSelectedCourse(course)}
                  >
                    <Play className="w-5 h-5" />
                    <span>{currentLanguage === 'hy' ? 'Սկսել դասընթացը' : currentLanguage === 'en' ? 'Start Course' : 'Начать курс'}</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full border border-purple-500 text-purple-400 py-3 rounded-xl font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>{currentLanguage === 'hy' ? 'Ծրագիր' : currentLanguage === 'en' ? 'Syllabus' : 'Программа'}</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modal */}
      {selectedCourse && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCourse(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-purple-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">{selectedCourse.title[currentLanguage]}</h3>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-300 mb-6">{selectedCourse.description[currentLanguage]}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-500/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-400">{selectedCourse.lessons}</div>
                <div className="text-sm text-gray-300">
                  {currentLanguage === 'hy' ? 'Դասեր' : currentLanguage === 'en' ? 'Lessons' : 'Уроки'}
                </div>
              </div>
              <div className="bg-cyan-500/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-cyan-400">{selectedCourse.duration[currentLanguage]}</div>
                <div className="text-sm text-gray-300">
                  {currentLanguage === 'hy' ? 'Տևողություն' : currentLanguage === 'en' ? 'Duration' : 'Длительность'}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4">
                {currentLanguage === 'hy' ? 'Դասընթացի բովանդակություն:' : currentLanguage === 'en' ? 'Course content:' : 'Содержание курса:'}
              </h4>
              <ul className="space-y-3">
                {selectedCourse.topics.map((topic, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{topic[currentLanguage]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>{currentLanguage === 'hy' ? 'Սկսել այս դասընթացը' : currentLanguage === 'en' ? 'Start this course' : 'Начать этот курс'}</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default LearningPage

