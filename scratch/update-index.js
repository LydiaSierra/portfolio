const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

const oldProjectsSectionRegex = /<!-- 5\. Featured Projects Section -->[\s\S]*?<\/section>/;

const newProjectsSection = `<!-- 5. Featured Projects Section (Full-Width Immersive Showcase) -->
    <section id="projects" class="projects-section" aria-labelledby="projects-title">
      <div class="container container-wide projects-container">
        <div class="projects-panel surface-card">
          <div class="projects-header-bar">
            <h2 id="projects-title" class="section-title" data-i18n="projects.title">Featured projects</h2>
            <span class="badge badge-subtle" data-i18n="projects.badge">Selected Works</span>
          </div>

          <!-- Immersive Project Showcase Stage (The Image IS the Showcase) -->
          <div class="showcase-stage" id="showcase-stage" aria-label="Featured Projects Showcase">
            <!-- 1. Full-Bleed Background Image Layer -->
            <div class="showcase-bg-layer">
              <img
                id="showcase-bg"
                class="showcase-bg-img"
                src="assets/images/project-flashcards.svg"
                alt="Flashcards App interface preview showing a study card on Angular Signals with progress tracking and navigation buttons"
                width="800"
                height="500"
                loading="lazy"
                decoding="async"
              >
            </div>

            <!-- 2. Reduced-Intensity Gradient Scrim (~50% lighter than prototype) -->
            <div class="showcase-scrim" aria-hidden="true"></div>

            <!-- 3. Floating Edge Navigation Arrows (Desktop / Tablet) -->
            <button class="showcase-edge-arrow showcase-arrow-prev" id="showcase-prev-btn" aria-label="Previous project" title="Previous Project (Left Arrow)">←</button>
            <button class="showcase-edge-arrow showcase-arrow-next" id="showcase-next-btn" aria-label="Next project" title="Next Project (Right Arrow)">→</button>

            <!-- 4. Interactive Overlay Floating Directly Over the Image -->
            <div class="showcase-overlay">
              <!-- Top Row: Eyebrow Badge + Position Stepper -->
              <div class="showcase-top-bar">
                <span class="showcase-eyebrow-pill" id="showcase-badge">ANGULAR 17+ SIGNALS · ACTIVE RECALL</span>
                
                <div class="showcase-stepper" role="tablist" aria-label="Project exhibition switcher">
                  <span class="showcase-counter" id="showcase-counter">01 / 04</span>
                  <button class="showcase-step-btn active" id="step-btn-0" onclick="window.__portfolioProjects.goToProject(0)" aria-label="Go to project 01: Flashcards App" aria-current="true">
                    <span>01</span>
                    <span class="step-title">Flashcards</span>
                  </button>
                  <button class="showcase-step-btn" id="step-btn-1" onclick="window.__portfolioProjects.goToProject(1)" aria-label="Go to project 02: GeDocs">
                    <span>02</span>
                    <span class="step-title">GeDocs</span>
                  </button>
                  <button class="showcase-step-btn" id="step-btn-2" onclick="window.__portfolioProjects.goToProject(2)" aria-label="Go to project 03: Portfolio">
                    <span>03</span>
                    <span class="step-title">Portfolio</span>
                  </button>
                  <button class="showcase-step-btn" id="step-btn-3" onclick="window.__portfolioProjects.goToProject(3)" aria-label="Go to project 04: Commercial Web">
                    <span>04</span>
                    <span class="step-title">Freelance</span>
                  </button>
                </div>
              </div>

              <!-- Bottom Row: Title, Concise Bio, Tags, and Action Buttons -->
              <div class="showcase-info-cluster" id="showcase-info">
                <h3 class="showcase-title" id="showcase-title">Flashcards App</h3>
                <p class="showcase-desc" id="showcase-desc">
                  Interactive web application for active recall and spaced-repetition learning with client-side persistence and fine-grained reactive state.
                </p>

                <ul class="showcase-tags" id="showcase-tags" aria-label="Technologies used">
                  <li class="showcase-tag-pill accent-primary">Angular</li>
                  <li class="showcase-tag-pill neutral">TypeScript</li>
                  <li class="showcase-tag-pill accent-turquoise">Signals</li>
                  <li class="showcase-tag-pill accent-pink">Tailwind CSS</li>
                  <li class="showcase-tag-pill neutral">Local Storage</li>
                </ul>

                <div class="showcase-actions">
                  <button class="btn btn-primary btn-showcase-primary" id="btn-explore-case-study">
                    <span data-i18n="projects.exploreCaseStudy">Explore Case Study</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                  <a id="showcase-repo-link" href="https://github.com/LydiaSierra" target="_blank" rel="noopener noreferrer" class="btn-showcase-secondary" aria-label="View on GitHub (opens in new tab)">
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    <span data-i18n="projects.githubRepo">GitHub</span>
                  </a>
                  <a id="showcase-demo-link" href="#" target="_blank" rel="noopener noreferrer" class="btn-showcase-secondary" style="display:none;" aria-label="View live demo (opens in new tab)">
                    <span data-i18n="projects.liveDemo">Live Demo</span>
                    <span aria-hidden="true">&nearr;</span>
                  </a>

                  <!-- Mobile Dedicated Navigation Buttons -->
                  <div class="mobile-nav-cluster" aria-label="Project navigation controls">
                    <button class="mobile-arrow-btn" id="showcase-mobile-prev-btn" aria-label="Previous project">&larr;</button>
                    <button class="mobile-arrow-btn" id="showcase-mobile-next-btn" aria-label="Next project">&rarr;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Accessible Case Study Detail Modal (Substantially Wider with Screenshot Gallery) -->
      <div class="modal-overlay" id="project-detail-modal" role="dialog" aria-modal="true" aria-labelledby="modal-project-title" aria-hidden="true">
        <div class="modal-dialog" id="modal-project-dialog">
          <button class="modal-close" id="modal-close-btn" aria-label="Close project details">✕</button>
          <div class="modal-body" id="modal-project-body">
            <!-- Dynamic Case Study Content with Screenshot Gallery rendered via JS -->
          </div>
        </div>
      </div>
    </section>`;

indexHtml = indexHtml.replace(oldProjectsSectionRegex, newProjectsSection);
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Successfully updated index.html with Immersive Showcase and Detail Modal');
