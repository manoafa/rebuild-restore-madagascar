# Rebuild & Restore Madagascar

A responsive charity website built with Next.js, TypeScript, and Tailwind CSS for the Rebuild & Restore Madagascar organization.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, warm, and trustworthy design with custom color scheme
- **Interactive Components**: Framer Motion animations for smooth transitions
- **Multiple Pages**: Home, About, Projects, Blog, Donate, Volunteer, Contact
- **Donation Integration**: Ready for Stripe and PayPal integration
- **Volunteer System**: Comprehensive volunteer application form
- **SEO Optimized**: Meta tags, structured data, and accessibility features
- **TypeScript**: Full type safety throughout the application

## Pages

### Home Page
- Hero section with mission statement
- Call-to-action buttons (Donate, Volunteer)
- Statistics section
- Featured projects showcase
- Call-to-action section

### About Us
- Organization story and mission
- Team member profiles
- Core values
- Vision and mission statements

### Projects/Events
- Grid layout with project cards
- Filter by category
- Project status indicators
- Progress tracking
- Detailed project information

### Blog/News
- Article listings with categories
- Search functionality
- Featured articles
- Author information
- Publication dates

### Donate
- Secure donation form
- Multiple payment methods (Stripe, PayPal)
- Donation amount selection
- Recurring donation options
- Impact information

### Volunteer
- Comprehensive application form
- Volunteer opportunities
- Skills and interest matching
- Flexible commitment options
- Benefits and requirements

### Contact
- Contact form with validation
- Multiple contact methods
- Interactive map (placeholder)
- FAQ section
- Response time information

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Payment**: Stripe & PayPal (ready for integration)
- **Deployment**: Vercel-ready

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── donate/
│   ├── projects/
│   ├── volunteer/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Reusable components
│   ├── AboutHero.tsx
│   ├── CallToAction.tsx
│   ├── ContactForm.tsx
│   ├── ContactMap.tsx
│   ├── DonationForm.tsx
│   ├── FeaturedProjects.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── MissionVision.tsx
│   ├── Navigation.tsx
│   ├── PaymentMethods.tsx
│   ├── StatsSection.tsx
│   ├── TeamSection.tsx
│   ├── ValuesSection.tsx
│   ├── VolunteerForm.tsx
│   └── VolunteerOpportunities.tsx
├── lib/                    # Utility functions
└── types/                  # TypeScript type definitions
```

## Customization

### Colors
The website uses a custom color scheme defined in `tailwind.config.js`:
- Primary: #3b82f6 (Blue)
- Secondary: #f97316 (Orange)
- Warm color palette for compassionate feel

### Fonts
- **Primary**: Inter (body text)
- **Display**: Lato (headings)
- Both loaded from Google Fonts

### Images
Currently uses placeholder images from Unsplash. Replace with actual organization photos:
- Update image URLs in components
- Ensure images are optimized for web
- Add proper alt text for accessibility

## Payment Integration

The donation system is ready for integration with:
- **Stripe**: For credit card processing
- **PayPal**: For PayPal payments

To complete integration:
1. Add your Stripe and PayPal API keys
2. Implement server-side payment processing
3. Add webhook handlers for payment confirmation
4. Set up email notifications

## Deployment

The project is configured for deployment on Vercel:

1. **Connect Repository**
   - Link your GitHub repository to Vercel
   - Enable automatic deployments

2. **Environment Variables**
   - Add payment API keys
   - Configure email settings
   - Set up analytics tracking

3. **Domain Setup**
   - Configure custom domain
   - Set up SSL certificates
   - Configure redirects if needed

## SEO & Accessibility

- **Meta Tags**: Comprehensive meta tags for social sharing
- **Structured Data**: Ready for schema markup
- **Alt Text**: All images have descriptive alt text
- **ARIA Labels**: Proper accessibility labels
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Compatible with screen readers

## Performance

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Images and components load on demand
- **Caching**: Optimized for CDN caching

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for Rebuild & Restore Madagascar charity organization.

## Support

For technical support or questions about this website, please contact the development team or create an issue in the repository.






