import { motion } from 'framer-motion'
import { useState } from 'react'
import { MessageSquare, Copy, Star, Filter, Search, BookOpen, Lightbulb, Code, Palette, Briefcase, GraduationCap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getTranslation } from '../translations'
import { useLanguage } from './LanguageSwitcher'

const AIPrompts = () => {
  const { currentLanguage } = useLanguage()
  const t = (key) => getTranslation(key, currentLanguage)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [copiedPrompt, setCopiedPrompt] = useState(null)

  const categories = [
    { id: 'all', name: t('all'), icon: '📋' },
    { id: 'writing', name: t('writing'), icon: '✍️' },
    { id: 'coding', name: t('coding'), icon: '💻' },
    { id: 'business', name: t('business'), icon: '💼' },
    { id: 'creative', name: t('creative'), icon: '🎨' },
    { id: 'education', name: t('education'), icon: '📚' },
    { id: 'analysis', name: t('analysis'), icon: '📊' }
  ]

  const prompts = [
    {
      id: 1,
      title: t("blogPostCreationTitle"),
      category: t("writing"),
      difficulty: t("beginner"),
      rating: 4.8,
      prompt: t("blogPostCreationPrompt"),
      description: t("blogPostCreationDesc"),
      tags: [t("blog"), t("content"), t("marketing")],
      useCase: t("blogPostCreationUseCase")
    },
    {
      id: 2,
      title: t("codeReviewOptimizationTitle"),
      category: t("coding"),
      difficulty: t("medium"),
      rating: 4.9,
      prompt: t("codeReviewOptimizationPrompt"),
      description: t("codeReviewOptimizationDesc"),
      tags: [t("code"), t("review"), t("optimization")],
      useCase: t("codeReviewOptimizationUseCase")
    },
    {
      id: 3,
      title: t("businessPlanCreationTitle"),
      category: t("business"),
      difficulty: t("advanced"),
      rating: 4.7,
      prompt: t("businessPlanCreationPrompt"),
      description: t("businessPlanCreationDesc"),
      tags: [t("business"), t("planning"), t("strategy")],
      useCase: t("businessPlanCreationUseCase")
    },
    {
      id: 4,
      title: t("creativeStoryTitle"),
      category: t("creative"),
      difficulty: t("beginner"),
      rating: 4.6,
      prompt: t("creativeStoryPrompt"),
      description: t("creativeStoryDesc"),
      tags: [t("story"), t("creativity"), t("literature")],
      useCase: t("creativeStoryUseCase")
    },
    {
      id: 5,
      title: t("educationalMaterialPreparationTitle"),
      category: t("education"),
      difficulty: t("medium"),
      rating: 4.8,
      prompt: t("educationalMaterialPreparationPrompt"),
      description: t("educationalMaterialPreparationDesc"),
      tags: [t("education"), t("teaching"), t("materials")],
      useCase: t("educationalMaterialPreparationUseCase")
    },
    {
      id: 6,
      title: t("dataAnalysisTitle"),
      category: t("analysis"),
      difficulty: t("advanced"),
      rating: 4.9,
      prompt: t("dataAnalysisPrompt"),
      description: t("dataAnalysisDesc"),
      tags: [t("data"), t("analysis"), t("statistics")],
      useCase: t("dataAnalysisUseCase")
    }
  ]

  const tips = [
    {
      title: t("beSpecificTitle"),
      description: t("beSpecificDesc"),
      icon: t("beSpecificIcon")
    },
    {
      title: t("useExamplesTitle"),
      description: t("useExamplesDesc"),
      icon: t("useExamplesIcon")
    },
    {
      title: t("defineContextTitle"),
      description: t("defineContextDesc"),
      icon: t("defineContextIcon")
    },
    {
      title: t("testAndImproveTitle"),
      description: t("testAndImproveDesc"),
      icon: t("testAndImproveIcon")
    }
  ]

  const filteredPrompts = prompts.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || prompt.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedPrompt(id)
    setTimeout(() => setCopiedPrompt(null), 2000)
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case t("beginner"): return 'bg-green-500/20 text-green-400'
      case t("medium"): return 'bg-yellow-500/20 text-yellow-400'
      case t("advanced"): return 'bg-red-500/20 text-red-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 armenian-text">
              <span className="gradient-text">{t("aiArtOfPromptsTitle")}</span> {t("art")} 
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto armenian-text leading-relaxed">
              {t("aiArtOfPromptsSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t("searchPromptsPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 armenian-text"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="whitespace-nowrap armenian-text"
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="text-center text-muted-foreground armenian-text">
            {t("foundPrompts", { count: filteredPrompts.length })}
          </div>
        </div>
      </section>

      {/* Prompts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrompts.map((prompt, index) => (
              <motion.div
                key={prompt.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold armenian-text line-clamp-2">{prompt.title}</h3>
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm">{prompt.rating}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground armenian-text mb-4 line-clamp-3">
                      {prompt.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getDifficultyColor(prompt.difficulty)}>
                        {prompt.difficulty}
                      </Badge>
                      <div className="flex gap-1">
                        {prompt.tags.slice(0, 2).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium armenian-text">{t("prompt")}:</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                          className="h-8 w-8 p-0"
                        >
                          {copiedPrompt === prompt.id ? (
                            <span className="text-green-400">✓</span>
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground armenian-text line-clamp-4 font-mono">
                        {prompt.prompt}
                      </p>
                    </div>

                    <div className="text-xs text-muted-foreground armenian-text">
                      <strong>{t("usage")}:</strong> {prompt.useCase}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
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
              {t("effectivePromptSecretsTitle")} <span className="gradient-text">{t("secrets")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto armenian-text">
              {t("effectivePromptSecretsSubtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover-lift h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{tip.icon}</div>
                    <h3 className="text-xl font-bold mb-3 armenian-text">{tip.title}</h3>
                    <p className="text-muted-foreground armenian-text text-sm leading-relaxed">
                      {tip.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Structure Guide */}
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
              {t("promptStructureTitle")} <span className="gradient-text">{t("structure")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto armenian-text">
              {t("promptStructureSubtitle")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 armenian-text">{t("promptComponentsTitle")}</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
                      <div>
                        <h4 className="font-semibold armenian-text">{t("role")}</h4>
                        <p className="text-muted-foreground armenian-text text-sm">{t("roleDesc")}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">2</div>
                      <div>
                        <h4 className="font-semibold armenian-text">{t("task")}</h4>
                        <p className="text-muted-foreground armenian-text text-sm">{t("taskDesc")}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">3</div>
                      <div>
                        <h4 className="font-semibold armenian-text">{t("context")}</h4>
                        <p className="text-muted-foreground armenian-text text-sm">{t("contextDesc")}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-bold">4</div>
                      <div>
                        <h4 className="font-semibold armenian-text">{t("format")}</h4>
                        <p className="text-muted-foreground armenian-text text-sm">{t("formatDesc")}</p>
                      </div>
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
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 armenian-text">{t("examplePromptTitle")}</h3>
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                    <div className="space-y-3 armenian-text">
                      <div>
                        <span className="text-primary font-bold">{t("role")}:</span> {t("roleExample")}
                      </div>
                      <div>
                        <span className="text-secondary font-bold">{t("task")}:</span> {t("taskExample")}
                      </div>
                      <div>
                        <span className="text-accent font-bold">{t("context")}:</span> {t("contextExample")}
                      </div>
                      <div>
                        <span className="text-muted-foreground font-bold">{t("format")}:</span> {t("formatExample")}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="gradient-bg hover:scale-105 transition-transform duration-300 armenian-text">
                      <Copy className="h-4 w-4 mr-2" />
                      {t("copyExample")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20">
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
                {t("startAIPromptsTitle")} <span className="gradient-text">{t("aiPromptsTitle")}</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto armenian-text">
                {t("startAIPromptsSubtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg hover:scale-105 transition-transform duration-300 text-lg px-8 py-4 armenian-text">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  {t("tryWithChatGPT")}
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 armenian-text hover-lift">
                  <BookOpen className="h-5 w-5 mr-2" />
                  {t("learnMore")}
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AIPrompts

