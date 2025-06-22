# Rillic Coming Soon Page

A beautiful, interactive landing page for Rillic featuring an Apple TV-style 3D tilt card with Rive branding.

## Features

- **Interactive Apple TV Card**: 3D tilt effect that responds to mouse movement and touch
- **Rive Branding**: Custom green gradient colors and Rive logo integration
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Floating Background**: Animated Rive logos floating in the background
- **Easy Customization**: All card settings configurable through `CARD_CONFIG`

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **UI Components**: shadcn/ui built on Radix UI
- **Build Tool**: Vite
- **Backend**: Express.js + TypeScript
- **State Management**: TanStack Query

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rillic-coming-soon-page.git
cd rillic-coming-soon-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000`

## Customization

The Apple TV card can be easily customized by modifying the `CARD_CONFIG` object in `client/src/components/AppleTVCard.tsx`:

```typescript
const CARD_CONFIG = {
  size: 400,             // Card size in pixels (100-800)
  scale: 1.05,           // Hover scale factor (1.0-1.15)
  tilt: 15,              // 3D tilt angle in degrees (0-30)
  transition: 0.6,       // Animation speed in seconds (0.2-1.5)
  shadowIntensity: 0.25, // Shadow opacity on hover (0.1-0.5)
};
```

## Project Structure

```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # React components including AppleTVCard
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utility functions and configurations
│   │   └── hooks/        # Custom React hooks
├── server/               # Backend Express server
├── shared/               # Shared TypeScript types and schemas
└── attached_assets/      # Static assets including Rive logo
```

## Design Features

- **Green Gradient Text**: Custom gradient from #42A000 to #D4F849
- **140px Bottom Spacing**: Maintains proper spacing from screen bottom
- **60px Card-to-Text Gap**: Optimized spacing between elements
- **Floating Animations**: Subtle floating effects for enhanced visual appeal

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers with modern CSS support

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ for the Rive community