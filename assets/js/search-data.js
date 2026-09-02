// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Projects and manuscripts in applied probability, computation, and optimization.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-tutoring",
          title: "tutoring",
          description: "Tutoring, teaching assistant, and course support experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tutoring/";
          },
        },{id: "dropdown-interests",
              title: "interests",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/interests/";
              },
            },{id: "dropdown-reading",
              title: "reading",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/reading/";
              },
            },{id: "news-i-received-the-mildred-l-sanderson-prize-for-excellence-in-mathematics-and-the-jennifer-landry-93-award-for-compassion-in-math-education-at-mount-holyoke-college",
          title: 'I received the Mildred L. Sanderson Prize for Excellence in Mathematics and the...',
          description: "",
          section: "News",},{id: "news-i-attended-women-in-mathematics-in-new-england-2025-and-presented-work-on-neural-dynamics-of-word-segmentation",
          title: 'I attended Women in Mathematics in New England 2025 and presented work on...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-nebraska-conference-for-undergraduate-wisdom-in-mathematics-on-fair-deployment-strategies-for-electric-vehicle-charging-stations",
          title: 'I gave a talk at the Nebraska Conference for Undergraduate Wisdom in Mathematics...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-hudson-river-undergraduate-mathematics-conference-on-monte-carlo-density-estimation-for-the-stochastic-nls-energy-cascade-system",
          title: 'I gave a talk at the Hudson River Undergraduate Mathematics Conference on Monte...',
          description: "",
          section: "News",},{id: "news-i-started-the-rips-2026-program-at-ucla-institute-for-pure-amp-amp-applied-mathematics-working-on-cross-spectral-image-correspondence-for-industrial-robot-perception",
          title: 'I started the RIPS 2026 program at UCLA,Institute for Pure &amp;amp;amp; Applied Mathematics,...',
          description: "",
          section: "News",},{id: "projects-costly-cooperative-behavior",
          title: 'Costly Cooperative Behavior',
          description: "ODE and agent-based simulations for costly cooperation, kin recognition, and group selection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/altruism-simulation/";
            },},{id: "projects-cross-spectral-image-correspondence",
          title: 'Cross-Spectral Image Correspondence',
          description: "Visible-infrared feature matching and evaluation protocols for industrial robot perception.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cross-spectral-correspondence/";
            },},{id: "projects-ev-charger-placement-optimization",
          title: 'EV Charger Placement Optimization',
          description: "Multi-objective optimization for fair and accessible EV charging station deployment in Seattle.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ev-optimization/";
            },},{id: "projects-kepler-sde-numerical-diagnostics",
          title: 'Kepler/SDE Numerical Diagnostics',
          description: "Numerical experiments for stochastic differential equations and nonlinear dynamics diagnostics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kepler-sde/";
            },},{id: "projects-nls-energy-cascade",
          title: 'NLS Energy Cascade',
          description: "SIMD Monte Carlo and Fokker-Planck solvers for stochastic nonlinear Schrödinger energy cascades.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nls-energy-cascade/";
            },},{id: "projects-distal-speech-rate-effects",
          title: 'Distal Speech Rate Effects',
          description: "EEG/ERP analysis and particle-filter modeling of speech-rate-dependent word segmentation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/speech-rate/";
            },},{id: "projects-stochastic-mobility-based-sirs-model",
          title: 'Stochastic Mobility-Based SIRS Model',
          description: "CTMC, ODE, and diffusion approximations for epidemic dynamics with mobility heterogeneity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stochastic-mobility-sirs/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%61%6E%67%33%37%6A@%6D%74%68%6F%6C%79%6F%6B%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jayleenjiang", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jialujiang", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
