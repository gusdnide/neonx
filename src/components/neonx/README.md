
# NeonX UI Framework

A cybersecurity-inspired UI framework with neon aesthetics, transparency effects, and smooth animations for modern React applications.

## 🌟 Features

- Cybersecurity-inspired design system
- Neon color accents with glow effects
- Glass morphism and transparency effects
- Smooth animations and transitions
- Terminal-style UI elements
- Responsive and accessibility-focused components

## 📸 Screenshots

### Component Showcase

![NeonX UI Components](https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop)

### Dashboard Example

![NeonX Dashboard Example](https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop)

## 🧩 Components

### Button

```jsx
import { Button } from '@/components/neonx';

<Button>Click Me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button icon={<ArrowRight size={16} />}>With Icon</Button>
```

### Card

```jsx
import { Card } from '@/components/neonx';

<Card>
  <h3>Standard Card</h3>
  <p>Card content here</p>
</Card>

<Card variant="glass">
  <h3>Glass Card</h3>
  <p>With transparency effect</p>
</Card>

<Card variant="terminal">
  <h3>Terminal Card</h3>
  <p>Looks like a terminal window</p>
</Card>
```

### Badge

```jsx
import { Badge } from '@/components/neonx';

<Badge>Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger" pulse>Critical</Badge>
<Badge variant="info">Info</Badge>
```

### Progress

```jsx
import { Progress } from '@/components/neonx';

<Progress value={75} />
<Progress value={33} variant="warning" showValue />
<Progress value={90} variant="success" />
```

### Alert

```jsx
import { Alert } from '@/components/neonx';
import { Info, AlertTriangle } from 'lucide-react';

<Alert 
  variant="info" 
  title="Information" 
  icon={<Info size={18} />}
>
  This is an informational alert.
</Alert>

<Alert 
  variant="warning" 
  title="Warning" 
  icon={<AlertTriangle size={18} />}
  dismissible
>
  This is a warning alert with dismiss option.
</Alert>
```

### Terminal

```jsx
import { Terminal } from '@/components/neonx';

const lines = [
  "Initializing system...",
  "Loading modules...",
  "Connection established.",
  "Ready for input."
];

<Terminal lines={lines} />
```

### NeonText

```jsx
import { NeonText } from '@/components/neonx';

<NeonText color="green">Neon Green Text</NeonText>
<NeonText color="pink">Neon Pink Text</NeonText>
<NeonText color="gradient">Gradient Text</NeonText>
```

### ScanEffect

```jsx
import { ScanEffect } from '@/components/neonx';

<ScanEffect>
  <div className="p-6">
    <h4>Scanning in progress</h4>
    <p>Please wait...</p>
  </div>
</ScanEffect>

<ScanEffect color="pink" active={isActive}>
  Content with conditional scan effect
</ScanEffect>
```

## 📱 Responsive Design

All NeonX UI components are built with responsiveness in mind, adapting seamlessly to different screen sizes.

## 🎨 Color System

NeonX uses a carefully crafted color palette:

- `neonx-green`: #00FF8C - For success states and primary actions
- `neonx-pink`: #FF3CA5 - For errors, warnings and highlights
- `neonx-blue`: #00A3FF - For information and secondary elements
- `neonx-yellow`: #FFD600 - For warnings and tertiary actions
- `neonx-base`: #0A0E17 - Base background
- `neonx-card`: #141925 - Card background
- `neonx-dark`: #060A12 - Darker elements
- `neonx-gray`: #2A303C - Borders and separators
- `neonx-light-gray`: #6B7280 - Secondary text

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/neonx-ui.git

# Navigate to the project directory
cd neonx-ui

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📦 Installation in Your Project

```bash
# Install the package
npm install neonx-ui

# Import styles (if using separate CSS)
import 'neonx-ui/dist/style.css'

# Import components
import { Button, Card } from 'neonx-ui'
```

## 🔗 Links

- [GitHub Repository](https://github.com/yourusername/neonx-ui)
- [Documentation](https://neonx-ui.github.io)
- [NPM Package](https://www.npmjs.com/package/neonx-ui)

## 📜 License

MIT
