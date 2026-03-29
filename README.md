# Patrick Pei - Resume Website 🚀

A modern, professional resume website built with React and deployed via **Cloudflare Workers**.

## 🌐 Live Website
**[https://ppei.dev](https://ppei.dev)** | **[https://www.ppei.dev](https://www.ppei.dev)**

> 🚀 **Deployed on Cloudflare Workers** - Sub-10ms response times globally from 275+ edge locations

## 📋 Contact Information
- **Email**: yingjianpei2022@u.northwestern.edu  
- **GitHub**: [github.com/peiyj](https://github.com/peiyj)
- **LinkedIn**: [linkedin.com/in/patrickpei11](https://linkedin.com/in/patrickpei11)

## ✨ Features

- 🎨 **Modern React Design**: Component-based architecture with smooth animations
- 🌙 **Dark Mode by Default**: Professional dark theme with light mode option
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Edge Performance**: Cloudflare Workers with global CDN and sub-10ms response times
- 🎯 **ATS-Friendly**: SEO optimized and machine-readable
- 🖨️ **Print-Ready**: Optimized CSS for printing
- ♿ **Accessible**: WCAG compliant design with proper semantic HTML
- 💾 **Theme Persistence**: Remembers user's theme preference

## 🏗️ Project Structure

```
resume-react/
├── public/
│   ├── index.html              # HTML template
│   ├── patrick_resume.pdf      # Latest PDF version (100KB, 1 page)
│   ├── patrick_resume.tex      # LaTeX source for PDF
│   └── manifest.json           # PWA manifest
├── src/
│   ├── assets/
│   │   └── images/             # Profile photos, etc.
│   ├── components/
│   │   ├── Header.js           # Contact info & theme toggle
│   │   ├── Background.js       # Animated background
│   │   ├── Experience.js       # Professional experience
│   │   ├── Skills.js           # Technical skills
│   │   ├── AIProjects.js       # AI projects showcase
│   │   ├── Education.js        # Academic background
│   │   └── Footer.js           # Contact links
│   ├── App.js                  # Main application
│   ├── index.css               # Global styles
│   └── index.js                # App entry point
├── package.json                # Dependencies & scripts
├── wrangler.toml               # Cloudflare Workers configuration
└── worker.js                   # Cloudflare Worker script
```

## 🚀 Quick Start

### **Cloudflare Workers Deployment**
```bash
# Clone repository
git clone https://github.com/peiyj/resume.git
cd resume/Resume

# Install dependencies
npm install --legacy-peer-deps

# Deploy to Cloudflare Workers
npm run deploy
```

### **Local Development**
```bash
# Start development server
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### **Preview Deployment**
```bash
# Deploy to preview environment for testing
npm run deploy:preview
```

## 🛠️ Technology Stack

### Frontend
- **React 18.2.0**: Modern component-based architecture
- **CSS Variables**: Dynamic theming system
- **Local Storage**: Theme preference persistence
- **Responsive Design**: Mobile-first approach

### Infrastructure
- **Cloudflare Workers**: Edge deployment and global CDN
- **Wrangler CLI**: Deployment and development tools
- **npm**: Package management

### Content Management
- **LaTeX**: PDF resume generation
- **Organized Assets**: Images in `/src/assets/`
- **Component Architecture**: Modular, reusable components

## 📊 Professional Experience Summary

### AI-Focused Senior Engineer
- **Coursera**: Senior SWE → SWE II → SWE I (Mountain View, CA)
- **Samsara**: IoT fleet management (San Francisco, CA)

### Technical Expertise
- **AI & LLM**: OpenAI API, GPT-4.1, Prompt Engineering, MCP, AI Agent Frameworks
- **Languages**: Java, Python, Go, JavaScript, TypeScript, C++
- **Backend**: Spring Boot, gRPC, GraphQL, Kafka, Redis, PostgreSQL, DynamoDB
- **Cloud**: AWS, Docker, Kubernetes, Terraform

## 📝 Content Customization

### Update Your Information
- **Contact Info**: `src/components/Header.js`
- **AI Projects**: `src/components/AIProjects.js`
- **Experience**: `src/components/Experience.js`
- **Skills**: `src/components/Skills.js`
- **Education**: `src/components/Education.js`
- **Footer Links**: `src/components/Footer.js`

### Asset Management
- **Profile Photos**: Add to `src/assets/images/`
- **Import in components**: `import photo from '../assets/images/photo.jpg'`

### PDF Resume Updates
1. Edit `public/patrick_resume.tex`
2. Compile: `pdflatex patrick_resume.tex`
3. Rebuild: `npm run build`

## 🔧 Available Scripts

```bash
# Development
npm start                        # Start development server
npm run build                    # Production build

# Cloudflare Workers Deployment
npm run deploy                   # Build + Deploy to production
npm run deploy:preview           # Build + Deploy to preview environment

# Cloudflare Workers Development
npm run workers:dev              # Local Workers development server
npm run workers:deploy           # Deploy Workers only
```

## 🎨 Customization

### Color Themes
Update CSS variables in `src/index.css`:
```css
/* Light Mode */
--primary: #3182ce;
--secondary: #38a169; 
--background: #f8fafc;

/* Dark Mode */
--primary-dark: #63b3ed;
--secondary-dark: #68d391;
--background-dark: #1a202c;
```

### Fonts
Currently using Inter from Google Fonts. Update in `public/index.html`.

## 📈 Performance

- **React 18**: Latest React with concurrent features
- **Fast Builds**: Direct npm builds (~35 seconds)
- **Edge Deployment**: Cloudflare Workers global distribution
- **Fast Loading**: < 50KB gzipped bundle

## 🔄 Recent Updates

### Version 2.6 (January 2025) - Latest [[memory:3504629]]
- 🧹 **Simplified Architecture**: Removed Docker complexity, focus on fast npm-based deployment
- ⚡ **Streamlined Workflow**: Single approach for both development and deployment
- 📦 **Reduced Dependencies**: Cleaner project structure with fewer build tools
- 🚀 **Faster Development**: Direct Node.js development without containerization overhead

### Version 2.5 (January 2025)
- ⚡ **Simplified Deployment**: Direct npm build approach for faster Cloudflare deployment (~35s vs 3+ hours)
- 🚀 **Single Approach**: Unified development and deployment workflow
- 📦 **Added Preview Deployment**: `npm run deploy:preview` for branch testing

## 🆘 Troubleshooting

### Common Issues
- **Build failures**: Ensure Node.js 18.x and npm 10.x are installed
- **Dependency conflicts**: Use `npm install --legacy-peer-deps`
- **Workers deployment**: Verify wrangler.toml configuration

### Getting Help
1. Check `CLOUDFLARE_WORKERS_DEPLOYMENT.md` for deployment issues
2. Use `npm start` for local development testing
3. Test deployment with `npm run deploy:preview` first
4. Verify deployment at https://ppei.dev

## 📞 Support & Contributing

For issues or questions:
1. **Check documentation** in this README and `CLOUDFLARE_WORKERS_DEPLOYMENT.md`
2. **Test locally**: `npm start` for development
3. **Deploy**: `npm run deploy` for production
4. **Verify deployment** at https://ppei.dev

---

**Built with ❤️ by Patrick Pei** | **Deployed with ⚡ Cloudflare Workers** | **Live at [ppei.dev](https://ppei.dev)**# GitHub Pages disabled - Cloudflare Workers only
