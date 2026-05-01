# RestaurantVinde

## Agent communication
Use the Caveman plugin by default for agent responses in this repository.

## Project direction
This repository is being redesigned from a legacy static AngularJS website into a modern, maintainable, scalable web application.

Do not continue the old AngularJS architecture unless explicitly asked. Prefer modern architecture, reusable components, clean separation of concerns, and scalable data models.

## Current priority
Focus only on the public-facing website redesign for now:
- modern UI/UX
- responsive layout
- cleaner information architecture
- maintainable frontend structure
- menu/content presentation
- performance, accessibility, and SEO basics

Do not implement takeaway ordering, checkout, payments, or admin features yet unless explicitly requested.

## Architecture goals
Build the codebase so it can later support:
- takeaway ordering
- cart and checkout
- admin editing of prices and menu items
- content management
- multiple restaurant locations if needed

Keep domain/data structures extensible for these future features.

## Engineering principles
- Prefer a modern frontend stack with clear component boundaries
- Separate UI, content/data models, and business logic
- Avoid page-specific duplication
- Favor reusable components and shared patterns
- Keep code easy to extend and refactor
- Use clear naming and simple folder structure
- Make pragmatic decisions rather than overengineering

## Design expectations
- Mobile-first responsive design
- Clean, modern restaurant presentation
- Strong visual hierarchy
- Good spacing, typography, and clear calls to action
- Preserve or improve readability of menu and opening-hours content
- Design should feel production-ready, not like a template demo

## Migration expectations
- Treat the existing site as legacy reference only
- Reuse content where useful, but do not preserve poor architecture for compatibility
- When replacing legacy structure, prefer long-term maintainability over minimal change

## When making changes
Unless asked otherwise:
1. inspect the current repo structure
2. propose a sensible target structure
3. make changes in small coherent steps
4. explain major architectural decisions briefly
5. keep the project easy for another developer to continue

## Output expectations
When implementing, prioritize:
- scalable structure
- readability
- maintainability
- UX quality
- future extensibility
