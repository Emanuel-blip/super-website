import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Zap, Sparkles, Play, ArrowRight, Terminal, Cpu, Lightbulb, Rocket, Users, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getTranslation } from '../translations'
import { useLanguage } from './LanguageSwitcher'

const VibeCoding = () => {
  const { currentLanguage } = useLanguage()
  const t = (key) => getTranslation(key, currentLanguage)
  const [activeDemo, setActiveDemo] = useState(0)

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('rapidDevelopment'),
      description: t('rapidDevelopmentDesc'),
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: t('intuitiveApproach'),
      description: t('intuitiveApproachDesc'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: t('aiPartnership'),
      description: t('aiPartnershipDesc'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: t('innovativeSolutions'),
      description: t('innovativeSolutionsDesc'),
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const tools = [
    {
      name: t("cursor"),
      description: t("cursorDesc"),
      category: t("editor"),
      difficulty: t("beginner"),
      features: [t("intelligentAutocompletion"), t("codeGeneration"), t("bugFinding")],
      logo: t("cursorLogo")
    },
    {
      name: t("githubCopilot"),
      description: t("githubCopilotDesc"),
      category: t("assistant"),
      difficulty: t("beginner"),
      features: [t("codeSuggestions"), t("functionCreation"), t("testWriting")],
      logo: t("githubCopilotLogo")
    },
    {
      name: t("v0Dev"),
      description: t("v0DevDesc"),
      category: t("uiUx"),
      difficulty: t("medium"),
      features: [t("reactComponents"), t("tailwindCss"), t("responsiveDesign")],
      logo: t("v0DevLogo")
    },
    {
      name: t("replitAgent"),
      description: t("replitAgentDesc"),
      category: t("platform"),
      difficulty: t("advanced"),
      features: [t("fullApplications"), t("deployment"), t("collaboration")],
      logo: t("replitAgentLogo")
    }
  ]

  const examples = [
    {
      title: t("simpleWebsiteTitle"),
      description: t("simpleWebsiteDesc"),
      prompt: t("simpleWebsitePrompt"),
      result: t("simpleWebsiteResult"),
      time: t("simpleWebsiteTime"),
      complexity: t("beginner")
    },
    {
      title: t("mobileAppTitle"),
      description: t("mobileAppDesc"),
      prompt: t("mobileAppPrompt"),
      result: t("mobileAppResult"),
      time: t("mobileAppTime"),
      complexity: t("medium")
    },
    {
      title: t("apiBackendTitle"),
      description: t("apiBackendDesc"),
      prompt: t("apiBackendPrompt"),
      result: t("apiBackendResult"),
      time: t("apiBackendTime"),
      complexity: t("advanced")
    }
  ]

  const steps = [
    {
      step: 1,
      title: t("describeIdeaTitle"),
      description: t("describeIdeaDesc"),
      icon: t("describeIdeaIcon")
    },
    {
      step: 2,
      title: t("chooseToolTitle"),
      description: t("chooseToolDesc"),
      icon: t("chooseToolIcon")
    },
    {
      step: 3,
      title: t("startVibeCodingTitle"),
      description: t("startVibeCodingDesc"),
      icon: t("startVibeCodingIcon")
    },
    {
      step: 4,
      title: t("testAndImproveTitle"),
      description: t("testAndImproveDesc"),
      icon: t("testAndImproveIcon")
    }
  ]

  const benefits = [
    {
      title: t("timeSavingTitle"),
      description: t("timeSavingDesc"),
      stat: t("timeSavingStat"),
      icon: t("timeSavingIcon")
    },
    {
      title: t("accessibilityTitle"),
      description: t("accessibilityDesc"),
      stat: t("accessibilityStat"),
      icon: t("accessibilityIcon")
    },
    {
      title: t("qualityImprovementTitle"),
      description: t("qualityImprovementDesc"),
      stat: t("qualityImprovementStat"),
      icon: t("qualityImprovementIcon")
    },
    {
      title: t("learningSpeedTitle"),
      description: t("learningSpeedDesc"),
      stat: t("learningSpeedStat"),
      icon: t("learningSpeedIcon")
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <Code className="h-16 w-16 text-cyan-400" />
                <Sparkles className="h-8 w-8 text-orange-400 absolute -top-2 -right-2" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {t('vibeCodeTitle')}
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8">
              {t('vibeCodeSubtitle')}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
              {t('vibeCodeDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                {t('startVibeCoding')}
              </Button>
              <Button variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 text-lg font-semibold rounded-xl">
                <BookOpen className="mr-2 h-5 w-5" />
                {t('viewExamples')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Vibe Coding Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t('whatIsVibeCoding')}
            </h2>
            
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-16">
              {t('vibeCodeingExplanation')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 armenian-text">{t("traditionalProgramming")}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-muted-foreground armenian-text">{t("longLearningCurve")}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-muted-foreground armenian-text">{t("complexSyntax")}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-muted-foreground armenian-text">{t("timeConsumingDevelopment")}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-muted-foreground armenian-text">{t("frequentBugs")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card glow-effect">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 armenian-text gradient-text">Vibe Coding</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-muted-foreground armenian-text">{t("naturalLanguageInstructions")}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-muted-foreground armenian-text">{t("instantCodeGeneration")}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-muted-foreground armenian-text">{t("rapidPrototyping")}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-muted-foreground armenian-text">{t("aiOptimized")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 armenian-text">
              {t("vibeCodeingAdvantagesTitle")} <span className="gradient-text">{t("advantages")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto armenian-text">
              {t("vibeCodeingAdvantagesDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover-lift h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 armenian-text">{feature.title}</h3>
                    <p className="text-muted-foreground armenian-text text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 armenian-text">
              {t("vibeCodeingToolsTitle")} <span className="gradient-text">{t("tools")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto armenian-text">
              {t("vibeCodeingToolsSubtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-4xl">{tool.logo}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold armenian-text">{tool.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            tool.difficulty === 'Սկսնակ' ? 'bg-green-500/20 text-green-400' :
                            tool.difficulty === 'Միջին' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {tool.difficulty}
                          </span>
                        </div>
                        <span className="text-sm text-primary font-medium">{tool.category}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground armenian-text mb-4 leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold armenian-text text-sm">Հիմնական ֆունկցիաներ:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 armenian-text">
              {t('vibeCoding')} <span className="gradient-text">{t('examples')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto armenian-text">
              {t('vibeExamplesDesc')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold armenian-text">{example.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        example.complexity === 'Սկսնակ' ? 'bg-green-500/20 text-green-400' :
                        example.complexity === 'Միջին' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {example.complexity}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground armenian-text mb-4 text-sm">
                      {example.description}
                    </p>

                    <div className="bg-muted/50 rounded-lg p-3 mb-4">
                      <h4 className="font-semibold text-sm mb-2 armenian-text">Հրահանգ:</h4>
                      <p className="text-xs text-muted-foreground armenian-text font-mono">
                        "{example.prompt}"
                      </p>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="armenian-text">Արդյունք:</span>
                        <span className="text-primary font-medium">{example.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground armenian-text">
                        {example.result}
                      </p>
                    </div>

                    <Button className="w-full gradient-bg hover:scale-105 transition-transform duration-300 armenian-text">
                      <Play className="h-4 w-4 mr-2" />
                      Փորձել Այս Օրինակը
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 armenian-text">
              Ինչպես <span className="gradient-text">Սկսել</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto armenian-text">
              Հետևեք այս պարզ քայլերին՝ սկսելու ձեր Vibe Coding ճանապարհորդությունը
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover-lift h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                      {step.step}
                    </div>
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-lg font-bold mb-3 armenian-text">{step.title}</h3>
                    <p className="text-muted-foreground armenian-text text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 armenian-text">
              {t('vibeCoding')} <span className="gradient-text">{t('impact')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto armenian-text">
              {t('vibeImpactDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover-lift h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <div className="text-4xl font-bold gradient-text mb-2">{benefit.stat}</div>
                    <h3 className="text-lg font-bold mb-3 armenian-text">{benefit.title}</h3>
                    <p className="text-muted-foreground armenian-text text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="glass-card p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 armenian-text">
              {t("readyToStartTitle")} <span className="gradient-text">{t("vibeCoding")}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto armenian-text">
              {t("readyToStartDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg hover:scale-105 transition-transform duration-300 text-lg px-8 py-4 armenian-text">
                <Zap className="h-5 w-5 mr-2" />
                {t("startVibeCoding")} 
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 armenian-text hover-lift">
                <Users className="h-5 w-5 mr-2" />
                {t("joinCommunity")}
              </Button>
            </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default VibeCoding

