
import React from 'react';
import { Button, Card, Badge, NeonText, ScanEffect } from '@/components/neonx';
import { Github, ArrowRight, BookOpen, FileText } from 'lucide-react';

const GitHub = () => {
  return (
    <div className="min-h-screen bg-neonx-base text-white pb-16">
      {/* Header */}
      <header className="py-12 px-6 md:px-12 lg:px-24 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-neonx-green to-neonx-blue flex items-center justify-center">
                <span className="text-xl font-bold">N</span>
              </div>
              <h1 className="text-2xl font-bold">NeonX UI</h1>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="success">v1.0.0</Badge>
              <Button size="sm" variant="outline" icon={<BookOpen size={16} />}>Documentation</Button>
            </div>
          </div>
          <div className="text-center py-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neonx-green to-neonx-blue bg-clip-text text-transparent">
                NeonX on GitHub
              </span>
            </h1>
            <p className="text-xl text-neonx-light-gray max-w-2xl mx-auto mb-8">
              Contribute, star, and use our open source UI framework
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button icon={<Github size={16} />}>View on GitHub</Button>
              <Button variant="outline" icon={<ArrowRight size={16} />}>Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About the Repository</h2>
            <p className="text-neonx-light-gray mb-6">
              NeonX UI is an open-source React component library that provides cybersecurity-themed UI components with neon aesthetics, transparency effects, and smooth animations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-neonx-light-gray">
                <FileText size={18} className="text-neonx-green" />
                <span>MIT License</span>
              </div>
              <div className="flex items-center gap-2 text-neonx-light-gray">
                <Github size={18} className="text-neonx-green" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2 text-neonx-light-gray">
                <ArrowRight size={18} className="text-neonx-green" />
                <span>Regular Updates</span>
              </div>
              <div className="flex items-center gap-2 text-neonx-light-gray">
                <BookOpen size={18} className="text-neonx-green" />
                <span>Comprehensive Docs</span>
              </div>
            </div>
            <Button>Star on GitHub</Button>
          </Card>
          
          <Card variant="glass">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/yourusername/neonx-ui" className="flex items-center gap-2 text-neonx-green hover:text-white transition-colors">
                  <Github size={18} />
                  <span>Repository</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/yourusername/neonx-ui/issues" className="flex items-center gap-2 text-neonx-green hover:text-white transition-colors">
                  <Github size={18} />
                  <span>Issues</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/yourusername/neonx-ui/pulls" className="flex items-center gap-2 text-neonx-green hover:text-white transition-colors">
                  <Github size={18} />
                  <span>Pull Requests</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/yourusername/neonx-ui/releases" className="flex items-center gap-2 text-neonx-green hover:text-white transition-colors">
                  <Github size={18} />
                  <span>Releases</span>
                </a>
              </li>
              <li>
                <a href="https://neonx-ui.github.io" className="flex items-center gap-2 text-neonx-green hover:text-white transition-colors">
                  <BookOpen size={18} />
                  <span>Documentation</span>
                </a>
              </li>
            </ul>
          </Card>
        </div>

        <ScanEffect className="mb-12">
          <Card variant="terminal" className="p-6">
            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">1. Clone the Repository</h3>
              <div className="bg-neonx-dark p-3 rounded-md font-mono text-sm overflow-x-auto mb-4">
                <code>git clone https://github.com/yourusername/neonx-ui.git</code>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">2. Install Dependencies</h3>
              <div className="bg-neonx-dark p-3 rounded-md font-mono text-sm overflow-x-auto mb-4">
                <code>cd neonx-ui<br />npm install</code>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">3. Run Development Server</h3>
              <div className="bg-neonx-dark p-3 rounded-md font-mono text-sm overflow-x-auto mb-4">
                <code>npm run dev</code>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">4. Use in Your Project</h3>
              <div className="bg-neonx-dark p-3 rounded-md font-mono text-sm overflow-x-auto">
                <code>npm install neonx-ui<br />import {'{ Button, Card }'} from 'neonx-ui'</code>
              </div>
            </div>
          </Card>
        </ScanEffect>

        <div className="text-center mb-12">
          <NeonText color="gradient" as="h2" className="text-3xl font-bold mb-6">Features Overview</NeonText>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card>
              <div className="text-center p-4">
                <div className="h-12 w-12 rounded-full bg-neonx-green bg-opacity-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-neonx-green text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Neon Aesthetics</h3>
                <p className="text-neonx-light-gray">
                  Vibrant colors with glow effects for a futuristic look
                </p>
              </div>
            </Card>
            <Card>
              <div className="text-center p-4">
                <div className="h-12 w-12 rounded-full bg-neonx-blue bg-opacity-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-neonx-blue text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-neonx-light-gray">
                  Glass morphism and transparency effects
                </p>
              </div>
            </Card>
            <Card>
              <div className="text-center p-4">
                <div className="h-12 w-12 rounded-full bg-neonx-pink bg-opacity-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-neonx-pink text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Animations</h3>
                <p className="text-neonx-light-gray">
                  Smooth transitions and interactive elements
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neonx-gray py-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-neonx-green to-neonx-blue flex items-center justify-center">
                  <span className="text-xs font-bold">N</span>
                </div>
                <h2 className="text-lg font-bold">NeonX UI</h2>
              </div>
              <p className="text-neonx-light-gray text-sm mt-2">
                Open source project on GitHub
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/yourusername/neonx-ui" className="text-neonx-light-gray hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://neonx-ui.github.io" className="text-neonx-light-gray hover:text-white transition-colors">
                <BookOpen size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-neonx-gray text-center text-neonx-light-gray text-sm">
            © 2025 NeonX UI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GitHub;
