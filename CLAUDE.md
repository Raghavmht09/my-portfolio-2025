# Portfolio Website Project - Claude Instructions

## Project Overview
This is a portfolio website project built from scratch. The goal is to create a modern, responsive, and professional portfolio website with the relevant context and instructions in this markdown file. You are creating a portfolio website for me (Raghav Mehta, Product Manager @ Increff)

# Portfolio Website Specification

## About Me
I’m Raghav , a Product Manager with 4.5+ years of experience spanning Customer Success, Product Management, and AI-led fulfillment systems. My journey includes managing enterprise portfolios, leading teams, and building zero-to-one products in WMS, OMS, and iPaaS. I specialize in AI-powered product innovation, stakeholder management, and GTM for B2B SaaS.

To know more about me here you go https://www.linkedin.com/in/raghav-mehta-58394015b/
---

## Resume Content

### Career Journey

#### Customer Success (2021–2022)
- Joined as **Customer Success Executive** in 2021 at Increff, handling support issues and deeply learning the product.  
- Delivered training sessions for customer teams and collaborated cross-functionally to resolve high-priority issues.  
- Promoted to **Team Leader** in 2022, managing a portfolio of **18 enterprise customers** (e.g., Puma, Adidas, Aditya Birla Fashion, Urban Lifestyle Brands).  
- Led a team of eight senior executives handling enterprise accounts. Focused on relationship building, quarterly reviews, upselling/cross-selling, trainings, and adoption of new WMS/OMS features.  

#### Transition to Product Management (2023–2024)
- Promoted to **Associate Product Manager** in 2023.  
- Improved internal processes and API documentation.  
- Delivered key **WMS features**: B2B item management, palletization, expiry workflows.  
- Contributed to **OMS enhancements**: dynamic splitting routing engine, manufacturable product definition, rule-based order orchestration.  
- Drove the **Store Fulfillment Solution** as a 0-to-1 product.  

#### Product Manager & iPaaS Leadership (2024–Present)
- Promoted to **Product Manager** in 2024, managing the **API iPaaS platform (Channel Connect)**.  
- Building **AI-first features** across WMS & OMS: smart picking, robotics integration, dynamic order routing.  
- Developing **AI-powered insights** from in-store customer feedback.  
- Leading **API dashboards, health metrics, monitoring, and alerting systems** for integrations.  

---

### Core Skills
- **Technical & AI Tools:** Cursor, Claude, Lovable, Ripplet, LangGraph, Open LLM Telemetry, OpenAI, Anthropic.  
- **Product Management:** Stakeholder management, product discovery, product launches, GTM strategy.  
- **Domain Expertise:** WMS, OMS, Store Fulfillment, iPaaS integrations.  

---

### Education & Certifications
- **B.Tech (Information Technology)** – Guru Gobind Singh Indraprastha University  
- **Mastering Product Management Cohort (Feb 2024)** – Rethink Systems  
- **Advanced Product Management** – Product Faculty  
- **AI Product Management** – Product Faculty (Instructor: Mindad Jafri)  

---

### Achievements
- Mentored 20–25 aspiring PMs; awarded **Best Mentor** in Mastering PM cohort.  
- Winner of **Capstone Project** in Advanced PM skillset program.  

---

## Design Guidelines

### 1. Fundamentals
- Minimalist, whitespace-driven.  
- Typography: `Inter` (UI) + `Playfair Display` / `EB Garamond` (accents).  
- Colors: Neutral gray + primary + secondary; auto dark mode.  
- Layout: 12-col grid, max width 1280px.  
- Motion: Subtle, 200–250ms ease-out.  
- Accessibility: Semantic HTML, WCAG AA compliance.  

---

### 2. Coding Guidelines
- **Stack:** Next.js (App Router) + TypeScript + Tailwind + MDX.  
- **Instruction:** Always use **latest shadcn/ui components**.  
  For expressive UI (FABs, Navigation Rail, Chips, Cards), use **Material 3 expressive design components** (`@material/web`).  
- **UI Libraries:**  
  - `shadcn/ui` (core components)  
  - `@material/web` (Material 3 expressive)  
  - `Radix UI` (accessibility primitives)  
  - `Framer Motion` (interactions)  
  - `Lucide React` (icons)  
- Types: strict mode, no `any`.  
- Performance: Next `Image`, route-level splitting, caching.  
- SEO: Metadata, schema.org JSON-LD.  
- Testing: ESLint, Prettier, type-check, Playwright (a11y), Storybook.  

---

### 3. Component Guidelines
- **Navigation:** Sticky Navbar (shadcn/ui), Navigation Rail (Material 3) desktop, Drawer mobile.  
- **Hero:** Elevated Button (primary CTA), Outlined Button (secondary).  
- **About:** Timeline + Key Stats with Elevated Cards.  
- **Skills:** Filter/Assist Chips.  
- **Experience:** Elevated Cards with metrics.  
- **Projects:** Expressive Cards with image header + chips.  
- **Achievements:** Assist Chips / Outlined Cards.  
- **Contact:** shadcn/ui form fields + Material 3 text fields.  

---

### 4. Project Structure
/  
├─ app/  
│  ├─ (site)/page.tsx              # Home  
│  ├─ projects/[slug]/page.tsx     # Case studies  
│  ├─ experience/page.tsx  
│  └─ layout.tsx  
├─ components/  
│  ├─ ui/                          # shadcn/ui + Material 3 wrappers  
│  ├─ primitives/                  # Container, Grid, Text  
│  ├─ blocks/                      # Hero, Navbar, ProjectCard  
├─ content/                        # MDX/JSON  
├─ lib/                            # seo, mdx, utils  
├─ hooks/                          # useTheme, useMediaQuery  
├─ styles/                         # globals.css, prose.css  
├─ public/                         # images, favicons  
└─ types/                          # content types  

---

## Layout Guidelines & Best Practices
- Grid: 12-col, 16–24px gutters, max 1280px.  
- Section spacing: 80–120px desktop, 48–64px mobile.  
- Typography: 16–18 body, 20–24 subhead, 28–32 section, 40–56 hero.  
- Responsiveness: mobile-first, breakpoints sm=640, md=768, lg=1024, xl=1280.  
- Interaction: 44px+ targets, hover/focus states, 200–250ms transitions.  
- Readability: 50–75 chars per line, line height 1.5–1.7.  
- Best Practices: Consistency, whitespace as design element, progressive disclosure, CTAs per section.  

---

## Tailwind Config Reference (Material 3 Tokens)
```ts
// tailwind.config.ts
import type { Config } from "tailwindcss"

export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6750A4", // Material 3 Primary
          dark: "#D0BCFF",
        },
        secondary: {
          DEFAULT: "#625B71",
          dark: "#CCC2DC",
        },
        surface: {
          DEFAULT: "#FFFBFE",
          dark: "#1C1B1F",
        },
        error: {
          DEFAULT: "#B3261E",
        },
      },
      borderRadius: {
        lg: "16px", // Material 3 expressive
        xl: "28px",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: { fontSize: "3rem", fontWeight: "700" },
            h2: { fontSize: "2.25rem", fontWeight: "600" },
            h3: { fontSize: "1.5rem", fontWeight: "600" },
            p: { fontSize: "1rem", lineHeight: "1.7" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config
```

## Development Guidelines

### Code Standards
- Use semantic HTML5 elements
- Follow CSS best practices (BEM methodology preferred)
- Write clean, readable JavaScript (ES6+)
- Ensure responsive design for all screen sizes
- Optimize images and assets for web performance

### File Organization
- Keep HTML files in `src/` directory
- Place stylesheets in `assets/css/`
- Store JavaScript files in `assets/js/`
- Organize images by category in `assets/images/`

### Performance Guidelines
- Minimize HTTP requests
- Optimize images (WebP format when possible)
- Use CSS and JS minification for production
- Implement lazy loading for images
- Ensure fast loading times (<3 seconds)

### Accessibility Requirements
- Include proper alt attributes for images
- Use semantic HTML structure
- Ensure keyboard navigation works
- Maintain good color contrast ratios
- Include ARIA labels where necessary

### Testing Requirements
- Test across major browsers (Chrome, Firefox, Safari, Edge)
- Validate HTML and CSS
- Test responsive design on multiple devices
- Check for broken links and images

## Important Guardrails

### Security
- Never include sensitive information in code
- Validate all user inputs if forms are added
- Use HTTPS for any external resources
- Implement Content Security Policy headers

### Content Guidelines
- Keep content professional and appropriate
- Use placeholder content during development
- Ensure all images have proper licensing
- Include copyright notices where required

### Deployment Considerations
- Test thoroughly before deploying
- Use version control (git) for all changes
- Create backup of working versions
- Document any deployment steps

## Commands to Remember
- Run linting: `npm run lint` (when package.json is set up)
- Run tests: `npm test` (when test framework is added)
- Build for production: `npm run build` (when build process is configured)

## Change Management Process

### Overview
All significant changes to the portfolio website must follow a structured change management process to ensure quality, alignment with requirements, and stakeholder approval.

### 1. Planning Phase
**Before making any changes, the AI must:**
- Draft a comprehensive plan of action
- Analyze the current state vs desired state
- Identify all components and files that will be affected
- Estimate the scope and complexity of changes
- Consider potential risks or breaking changes

**Plan Template:**
```
## Change Plan: [Brief Description]

### Objective
- Primary goal of the change
- Expected outcomes

### Current State Analysis
- What exists today
- Limitations or issues identified

### Proposed Changes
- Detailed description of what will be changed
- Technical approach and methodology

### Files/Components Affected
- List of all files that will be modified
- New files that will be created
- Dependencies that may be impacted

### Risk Assessment
- Potential breaking changes
- Fallback plan if issues arise
```

### 2. Task Definition & Prioritization
**Define specific tasks with clear priorities:**

#### Task Template
```
### Task: [Task Name]
- **Priority**: Critical | High | Medium | Low
- **Effort**: Small (< 1hr) | Medium (1-3hrs) | Large (3+ hrs)
- **Dependencies**: List any prerequisite tasks
- **Acceptance Criteria**: Clear definition of "done"
- **Impact**: User experience | Performance | Maintainability | Security
```

#### Priority Levels
- **Critical**: Fixes breaking functionality or security issues
- **High**: Implements core features or significant UX improvements
- **Medium**: Enhances existing features or adds nice-to-have functionality
- **Low**: Code cleanup, documentation, or minor optimizations

### 3. Impact Assessment
**For each proposed change, assess:**

#### User Experience Impact
- How will this affect the end user?
- Will it improve usability, accessibility, or performance?
- Any potential negative user experience impacts?

#### Technical Impact
- Code maintainability and readability
- Performance implications (bundle size, runtime performance)
- Browser compatibility considerations
- Accessibility compliance (WCAG AA)

#### Business Impact
- Alignment with portfolio goals
- Professional presentation enhancement
- Mobile responsiveness improvements
- SEO benefits or concerns

#### Risk Impact
- Potential for introducing bugs
- Breaking existing functionality
- Dependencies on external libraries
- Deployment complexity

### 4. Human-in-Loop Approval Process
**Required approval workflow:**

1. **Present the Plan**: Share the complete change plan with task breakdown
2. **Wait for Explicit Approval**: Do NOT proceed without clear "yes, proceed" from human
3. **Clarify Scope**: If human requests modifications, update plan accordingly
4. **Confirm Understanding**: Ensure mutual understanding of what will be implemented

**Approval Required For:**
- Any UI/UX changes affecting user experience
- Adding new dependencies or libraries
- Modifying core architecture or file structure
- Changes affecting performance or accessibility
- Updates to design system or branding

**Auto-Approved (No explicit approval needed):**
- Bug fixes that don't change functionality
- Code refactoring without behavioral changes
- Documentation updates
- Linting or formatting improvements

### 5. LLM-as-Judge Review Process
**Post-implementation validation using sub-agent:**

#### Review Agent Configuration
```typescript
// Sub-agent: "Quality Reviewer"
// Purpose: Validate changes against requirements and best practices
// Tools: Read, Grep, Task, WebFetch
// System Prompt: /.claude/quality-reviewer-prompt.md
// Invocation Guide: /.claude/invoke-quality-review.md
```

**Implementation Files:**
- **Quality Reviewer Prompt**: `/.claude/quality-reviewer-prompt.md` - Complete system prompt for the review agent
- **Invocation Guide**: `/.claude/invoke-quality-review.md` - Step-by-step guide for triggering reviews

#### Review Criteria
The review agent will evaluate:

1. **Requirements Compliance**
   - Does the implementation match the approved plan?
   - Are all acceptance criteria met?
   - Is the solution aligned with CLAUDE.md specifications?

2. **Code Quality**
   - Follows TypeScript best practices
   - Proper error handling and edge cases
   - Consistent with existing code patterns
   - Appropriate comments and documentation

3. **Design System Adherence**
   - Material 3 design principles followed
   - Typography hierarchy maintained
   - Color tokens used correctly
   - Animation timing specifications met

4. **Performance & Accessibility**
   - No unnecessary re-renders or performance issues
   - Proper semantic HTML structure
   - ARIA labels where required
   - Touch targets meet 44px minimum
   - Keyboard navigation support

5. **User Experience**
   - Intuitive and logical interaction patterns
   - Responsive design across all breakpoints
   - Loading states and error handling
   - Professional appearance maintained

#### Review Process
1. **Trigger Review**: After completing implementation
2. **Automated Analysis**: Sub-agent reviews code, tests functionality
3. **Generate Report**: Detailed assessment with scores and recommendations
4. **Recommend Actions**: Suggest improvements or approve changes
5. **Human Decision**: Human reviews the agent's assessment and decides on next steps

#### Review Report Template
```markdown
## Quality Review Report

### Overall Score: [1-10]

### Requirements Compliance: ✅/❌
- [Specific requirement]: [Status] - [Comments]

### Code Quality: ✅/❌
- TypeScript usage: [Score] - [Comments]
- Error handling: [Score] - [Comments]
- Code consistency: [Score] - [Comments]

### Design System: ✅/❌
- Material 3 compliance: [Score] - [Comments]
- Typography: [Score] - [Comments]
- Animations: [Score] - [Comments]

### Performance: ✅/❌
- Bundle size impact: [Analysis]
- Runtime performance: [Analysis]
- Accessibility: [Score] - [Comments]

### Recommendations
1. [High priority recommendation]
2. [Medium priority recommendation]
3. [Low priority recommendation]

### Decision: APPROVE | REQUEST_CHANGES | REJECT
**Rationale**: [Explanation of decision]
```

### 6. Implementation Guidelines
**During implementation:**
- Use TodoWrite tool to track progress on all planned tasks
- Mark tasks as completed only when fully implemented and tested
- If issues arise, update the human and revise the plan
- Test thoroughly before marking work as complete
- Document any deviations from the original plan

### 7. Emergency Bypass Process
**For critical issues requiring immediate attention:**
- Clearly state the emergency nature
- Provide minimal viable fix first
- Follow up with proper change management process
- Document lessons learned

## Notes
- This project starts as a static website but can be enhanced with frameworks later
- Focus on clean, maintainable code
- Prioritize user experience and performance
- Keep the design modern and professional
- **All non-emergency changes must follow the change management process**