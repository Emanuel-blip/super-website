import { Link } from 'react-router-dom'
import { Cpu, Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Ինչպես Օգտագործել AI-ը', path: '/how-to-use-ai' },
      { name: 'AI Հրահանգներ', path: '/ai-prompts' },
      { name: 'Vibe Coding', path: '/vibe-coding' },
      { name: 'Մեր Մասին', path: '/about' }
    ],
    resources: [
      { name: 'Բլոգ', path: '#' },
      { name: 'Ուսուցման Նյութեր', path: '#' },
      { name: 'Վիդեո Դասընթացներ', path: '#' },
      { name: 'Հաճախ Տրվող Հարցեր', path: '#' }
    ],
    community: [
      { name: 'Discord Համայնք', path: '#' },
      { name: 'Telegram Խումբ', path: '#' },
      { name: 'Facebook Խումբ', path: '#' },
      { name: 'Միջոցառումներ', path: '#' }
    ],
    support: [
      { name: 'Օգնության Կենտրոն', path: '#' },
      { name: 'Կապ Մեզ Հետ', path: '#' },
      { name: 'Գաղտնիության Քաղաքականություն', path: '#' },
      { name: 'Ծառայության Պայմաններ', path: '#' }
    ]
  }

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="h-5 w-5" />, href: '#', label: 'YouTube' },
    { icon: <Github className="h-5 w-5" />, href: '#', label: 'GitHub' }
  ]

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Cpu className="h-8 w-8 text-primary" />
                  <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="text-2xl font-bold gradient-text armenian-text">ai4all</span>
              </Link>
              
              <p className="text-muted-foreground armenian-text mb-6 leading-relaxed">
                Մենք նվիրված ենք AI տեխնոլոգիաները մատչելի դարձնելուն բոլոր հայերի համար: 
                Միացեք մեզ և սովորեք ապագայի տեխնոլոգիաները այսօր:
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">info@ai4all.am</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">+374 XX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground armenian-text">Երևան, Հայաստան</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4 armenian-text">Ծրագրեր</h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path} 
                        className="text-muted-foreground hover:text-foreground transition-colors armenian-text"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 armenian-text">Ռեսուրսներ</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path} 
                        className="text-muted-foreground hover:text-foreground transition-colors armenian-text"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 armenian-text">Համայնք</h3>
                <ul className="space-y-3">
                  {footerLinks.community.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path} 
                        className="text-muted-foreground hover:text-foreground transition-colors armenian-text"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 armenian-text">Աջակցություն</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path} 
                        className="text-muted-foreground hover:text-foreground transition-colors armenian-text"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2 armenian-text">Բաժանորդագրվեք մեր նորություններին</h3>
              <p className="text-muted-foreground armenian-text">
                Ստացեք վերջին նորությունները AI տեխնոլոգիաների և մեր նոր դասընթացների մասին
              </p>
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Ձեր էլ-փոստի հասցեն" 
                className="armenian-text"
              />
              <Button className="gradient-bg whitespace-nowrap armenian-text">
                Բաժանորդագրվել
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm armenian-text">
              © 2025 ai4all. Բոլոր իրավունքները պաշտպանված են:
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

