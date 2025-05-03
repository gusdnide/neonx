
import React, { useState } from 'react';
import { ArrowRight, Check, Search, Activity, AlertTriangle, Info, X } from 'lucide-react';
import { 
  Button,
  Card,
  Badge,
  Progress,
  Alert,
  Input,
  Terminal,
  IconButton,
  StatusBar,
  NeonText,
  ScanEffect
} from '@/components/neonx';

const Index = () => {
  const [progress, setProgress] = useState(68);
  const [activeTab, setActiveTab] = useState<'overview' | 'components' | 'examples'>('overview');
  
  const terminalLines = [
    "Initializing NeonX UI framework...",
    "Loading color palettes and animations...",
    "Detecting system compatibility...",
    "Setting up component library...",
    "NeonX UI framework ready!"
  ];

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
              <Button size="sm" variant="outline">Documentation</Button>
            </div>
          </div>
          <div className="text-center py-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neonx-green to-neonx-blue bg-clip-text text-transparent">
                NeonX UI Framework
              </span>
            </h1>
            <p className="text-xl text-neonx-light-gray max-w-2xl mx-auto mb-8">
              A cybersecurity-inspired UI framework with neon aesthetics, transparency effects, and smooth animations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button icon={<ArrowRight size={16} />}>Get Started</Button>
              <Button variant="outline">View on GitHub</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="border-t border-b border-neonx-gray bg-neonx-card bg-opacity-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex overflow-x-auto py-1 gap-8">
            <button 
              className={`py-3 px-1 border-b-2 ${activeTab === 'overview' ? 'border-neonx-green text-neonx-green' : 'border-transparent text-neonx-light-gray hover:text-white'} transition-colors`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`py-3 px-1 border-b-2 ${activeTab === 'components' ? 'border-neonx-green text-neonx-green' : 'border-transparent text-neonx-light-gray hover:text-white'} transition-colors`}
              onClick={() => setActiveTab('components')}
            >
              Components
            </button>
            <button 
              className={`py-3 px-1 border-b-2 ${activeTab === 'examples' ? 'border-neonx-green text-neonx-green' : 'border-transparent text-neonx-light-gray hover:text-white'} transition-colors`}
              onClick={() => setActiveTab('examples')}
            >
              Examples
            </button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-4">About NeonX UI</h2>
              <p className="text-neonx-light-gray mb-6">
                NeonX UI is a modern React UI framework inspired by cybersecurity dashboards, featuring a sleek dark theme with neon accents, transparency effects, and smooth animations. Perfect for building futuristic, technical interfaces.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    'Cybersecurity-inspired design system',
                    'Neon color accents with glow effects',
                    'Glass morphism and transparency',
                    'Smooth animations and transitions',
                    'Responsive and accessible components',
                    'Terminal-style elements for tech interfaces',
                    'Easy customization with Tailwind CSS'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 text-neonx-green"><Check size={16} /></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <Card className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Color Palette</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { name: 'Green', color: 'bg-neonx-green' },
                    { name: 'Pink', color: 'bg-neonx-pink' },
                    { name: 'Blue', color: 'bg-neonx-blue' },
                    { name: 'Yellow', color: 'bg-neonx-yellow' },
                    { name: 'Dark', color: 'bg-neonx-dark' },
                    { name: 'Gray', color: 'bg-neonx-gray' }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className={`h-12 w-12 rounded-full ${item.color} mb-2`} />
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
              <Card variant="glass">
                <h3 className="text-xl font-semibold mb-4">Installation</h3>
                <div className="bg-neonx-dark rounded p-3 font-mono text-sm mb-4 overflow-x-auto">
                  <pre>npm install neonx-ui</pre>
                </div>
                <p className="text-neonx-light-gray text-sm">
                  After installation, import the components and styles into your React application.
                </p>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'components' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Component Library</h2>
            
            <section className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-b border-neonx-gray pb-2">Buttons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <h4 className="font-medium mb-4">Button Variants</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </Card>
                <Card>
                  <h4 className="font-medium mb-4">Button Sizes</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </Card>
                <Card>
                  <h4 className="font-medium mb-4">Icon Buttons</h4>
                  <div className="flex flex-wrap gap-3">
                    <IconButton icon={<Search size={16} />} variant="primary" />
                    <IconButton icon={<Activity size={16} />} variant="secondary" />
                    <IconButton icon={<X size={16} />} variant="danger" />
                    <IconButton icon={<Info size={16} />} variant="outline" />
                  </div>
                </Card>
              </div>
            </section>
            
            <section className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-b border-neonx-gray pb-2">Cards & Containers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <h4 className="font-medium mb-2">Default Card</h4>
                  <p className="text-neonx-light-gray text-sm">The standard card component with a dark background.</p>
                </Card>
                <Card variant="glass">
                  <h4 className="font-medium mb-2">Glass Card</h4>
                  <p className="text-neonx-light-gray text-sm">A card with glassmorphism effect and transparency.</p>
                </Card>
                <Card variant="terminal">
                  <h4 className="font-medium mb-2">Terminal Card</h4>
                  <p>Output and command interfaces for a tech appearance.</p>
                </Card>
                <Card variant="outlined">
                  <h4 className="font-medium mb-2">Outlined Card</h4>
                  <p className="text-neonx-light-gray text-sm">A minimalist card with only borders visible.</p>
                </Card>
              </div>
            </section>
            
            <section className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-b border-neonx-gray pb-2">Status & Feedback</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <h4 className="font-medium mb-4">Badges</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger" pulse>Critical</Badge>
                    <Badge variant="info">Info</Badge>
                  </div>
                </Card>
                <Card>
                  <h4 className="font-medium mb-4">Progress Indicators</h4>
                  <div className="space-y-4">
                    <Progress value={progress} showValue />
                    <div className="flex gap-3">
                      <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>Decrease</Button>
                      <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>Increase</Button>
                    </div>
                  </div>
                </Card>
                <Card>
                  <h4 className="font-medium mb-4">Alerts</h4>
                  <div className="space-y-3">
                    <Alert 
                      variant="info" 
                      title="Information" 
                      icon={<Info size={18} />}
                      dismissible
                    >
                      This is an informational alert message.
                    </Alert>
                    <Alert 
                      variant="warning" 
                      title="Warning" 
                      icon={<AlertTriangle size={18} />}
                    >
                      This is a warning alert message.
                    </Alert>
                  </div>
                </Card>
                <Card>
                  <h4 className="font-medium mb-4">Status Bar</h4>
                  <StatusBar
                    items={[
                      { id: '1', content: "System Online", status: "online" },
                      { id: '2', content: "4 Services Running", status: "loading" },
                      { id: '3', content: "1 Warning", status: "warning" },
                    ]}
                  />
                </Card>
              </div>
            </section>
            
            <section className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-b border-neonx-gray pb-2">Special Effects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <h4 className="font-medium mb-4">Neon Text</h4>
                  <div className="space-y-3">
                    <NeonText color="green" as="p" className="text-xl">Neon Green Text</NeonText>
                    <NeonText color="pink" as="p" className="text-xl">Neon Pink Text</NeonText>
                    <NeonText color="gradient" as="p" className="text-xl">Gradient Text</NeonText>
                  </div>
                </Card>
                <Card>
                  <h4 className="font-medium mb-4">Terminal Output</h4>
                  <Terminal lines={terminalLines} />
                </Card>
                <Card className="md:col-span-2">
                  <h4 className="font-medium mb-4">Scan Effect</h4>
                  <ScanEffect className="p-6 border border-neonx-gray rounded-md">
                    <div className="text-center">
                      <h5 className="text-lg mb-2">Network Scanning in Progress</h5>
                      <p className="text-neonx-light-gray">Checking for vulnerabilities...</p>
                    </div>
                  </ScanEffect>
                </Card>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'examples' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Usage Examples</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">Search Interface</h3>
              <Card className="p-6">
                <div className="max-w-2xl mx-auto">
                  <div className="mb-6">
                    <Input 
                      placeholder="Search for vulnerabilities..." 
                      icon={<Search size={18} />} 
                      className="mb-2"
                    />
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="default" className="cursor-pointer">XSS</Badge>
                      <Badge variant="default" className="cursor-pointer">SQL Injection</Badge>
                      <Badge variant="default" className="cursor-pointer">Open Redirect</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="border border-neonx-gray rounded-md p-3 hover:bg-neonx-gray hover:bg-opacity-20 cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-neonx-green">SQL Injection Vulnerability</h4>
                        <Badge variant="danger">Critical</Badge>
                      </div>
                      <p className="text-sm text-neonx-light-gray mb-2">
                        Found at: /admin/search.php?q=test
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs">Last detected: 3 hours ago</span>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                    
                    <div className="border border-neonx-gray rounded-md p-3 hover:bg-neonx-gray hover:bg-opacity-20 cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-neonx-blue">Cross-Site Scripting (XSS)</h4>
                        <Badge variant="warning">High</Badge>
                      </div>
                      <p className="text-sm text-neonx-light-gray mb-2">
                        Found at: /profile?name=test
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs">Last detected: 1 day ago</span>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">Dashboard Card Example</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-0 overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">Security Status</h4>
                      <Badge variant="success">Secure</Badge>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Vulnerabilities</span>
                          <span>0/12</span>
                        </div>
                        <Progress value={0} max={12} variant="success" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Security Score</span>
                          <span>92%</span>
                        </div>
                        <Progress value={92} variant="default" />
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-neonx-gray p-3 bg-neonx-card bg-opacity-30">
                    <Button size="sm" variant="ghost" className="w-full">
                      View Security Report
                    </Button>
                  </div>
                </Card>
                
                <Card className="p-0 overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">System Performance</h4>
                      <Badge variant="warning">High Load</Badge>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>CPU Usage</span>
                          <span>78%</span>
                        </div>
                        <Progress value={78} variant="warning" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Memory</span>
                          <span>54%</span>
                        </div>
                        <Progress value={54} variant="info" />
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-neonx-gray p-3 bg-neonx-card bg-opacity-30">
                    <Button size="sm" variant="ghost" className="w-full">
                      Monitor Resources
                    </Button>
                  </div>
                </Card>
                
                <Card className="p-0 overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">Latest Activity</h4>
                      <span className="text-xs text-neonx-light-gray">Updated 2m ago</span>
                    </div>
                    <ul className="space-y-2">
                      <li className="text-sm flex items-center gap-2">
                        <span className="h-2 w-2 bg-neonx-green rounded-full"></span>
                        <span>User login from 192.168.1.105</span>
                      </li>
                      <li className="text-sm flex items-center gap-2">
                        <span className="h-2 w-2 bg-neonx-yellow rounded-full"></span>
                        <span>Failed SSH attempt on port 22</span>
                      </li>
                      <li className="text-sm flex items-center gap-2">
                        <span className="h-2 w-2 bg-neonx-blue rounded-full"></span>
                        <span>Configuration file updated</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-t border-neonx-gray p-3 bg-neonx-card bg-opacity-30">
                    <Button size="sm" variant="ghost" className="w-full">
                      View All Activity
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}
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
                A cybersecurity-inspired UI framework
              </p>
            </div>
            <div className="flex gap-8">
              <div>
                <h3 className="text-sm font-semibold mb-2">Documentation</h3>
                <ul className="space-y-1">
                  <li><a className="text-neonx-light-gray text-sm hover:text-white" href="#">Getting Started</a></li>
                  <li><a className="text-neonx-light-gray text-sm hover:text-white" href="#">Components</a></li>
                  <li><a className="text-neonx-light-gray text-sm hover:text-white" href="#">Examples</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2">Resources</h3>
                <ul className="space-y-1">
                  <li><a className="text-neonx-light-gray text-sm hover:text-white" href="#">GitHub</a></li>
                  <li><a className="text-neonx-light-gray text-sm hover:text-white" href="#">NPM Package</a></li>
                  <li><a className="text-neonx-light-gray text-sm hover:text-white" href="#">Support</a></li>
                </ul>
              </div>
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

export default Index;
