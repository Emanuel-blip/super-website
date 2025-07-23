import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './components/LanguageSwitcher'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import HowToUseAI from './components/HowToUseAI'
import AIPrompts from './components/AIPrompts'
import VibeCoding from './components/VibeCoding'
import LearningPage from './components/LearningPage'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/how-to-use-ai" element={<HowToUseAI />} />
              <Route path="/ai-prompts" element={<AIPrompts />} />
              <Route path="/vibe-coding" element={<VibeCoding />} />
              <Route path="/learning" element={<LearningPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App

