---
layout: page
permalink: /projects/
title: projects
description: Projects and manuscripts in applied probability, computation, and optimization.
nav: true
nav_order: 1
---

My work centers on applied probability, scientific computing, dynamical systems, and optimization. I am particularly drawn to problems where a mathematical model has to survive contact with computation: stochastic dynamics, nonequilibrium behavior, graph algorithms, neural data, and high-dimensional numerical approximation.

## Featured Projects

### Numerical Study of Energy Cascades in Nonlinear Schrödinger Systems

**Advisor:** Prof. [Yao Li](https://sites.google.com/umass.edu/liyao/), UMass Amherst<br>
**Timeline:** February 2025 - present<br>
**Code:** [jayleenjiang/nls-energy-cascade](https://github.com/jayleenjiang/nls-energy-cascade)

I study a stochastic NLS energy-cascade model in action-angle coordinates, with heat baths driving the system out of equilibrium. My work builds high-throughput Monte Carlo simulation tools for long chains and explores the nonequilibrium steady state beyond the solved three-mode case.

Highlights:

- Built SIMD C++ Monte Carlo integrators and histogram accumulators for stochastic NLS energy-cascade chains.
- Characterized long-chain behavior, including local-Gibbs equilibrium in the bulk and anomalous sub-diffusive heat transport.
- Developed neural-network Fokker-Planck and eigenfunction solvers for the three-mode system, validated against the exact Gibbs measure.

### Cross-Spectral Image Correspondence for Industrial Robot Perception

**Program:** RIPS 2026, IPAM/UCLA<br>
**Sponsor:** Analog Devices<br>
**Timeline:** June 2026 - August 2026

This project studies visible-infrared image correspondence for factory robot perception. I am helping formulate evaluation protocols for feature matching under cross-spectral failure modes, including thermal hotspots, low texture, specular surfaces, and repeated structures.

Highlights:

- Developing a benchmark framework for classical and learned feature-matching methods.
- Exploring matching pipelines that combine descriptor confidence, geometric consistency, and abstention criteria.
- Focusing on reducing false correspondences in safety-critical robotic perception settings.

### Fairness-Constrained Optimization for EV Charger Placement

**Advisor:** Prof. Ming Gu, University of California, Berkeley<br>
**Timeline:** June 2025 - August 2025<br>
**Code:** [jayleenjiang/EV-optimization](https://github.com/jayleenjiang/EV-optimization)

I formulated EV charger placement as a multi-objective optimization problem on a weighted transportation network, balancing accessibility, utilization, and distributional fairness. The project combines demand modeling, candidate-site reduction, greedy construction, and local improvement heuristics for large-scale charger deployment.

Highlights:

- Integrated demographic, infrastructure, and spatial-demand signals into a charger placement framework.
- Compared CDI-weighted, population-weighted, and uniform candidate-site strategies.
- Built reproducibility scripts for manuscript tables, figures, and optimization results.

### Computational Neural Mechanisms of Distal Speech Rate Effects

**Advisor:** Prof. Ben Pittman-Polletta, Mount Holyoke College<br>
**Timeline:** September 2024 - December 2025<br>
**Code:** [jayleenjiang/speech-rate](https://github.com/jayleenjiang/speech-rate)

This project combines EEG/ERP analysis with computational modeling of how distal speech rate affects speech segmentation. I analyzed 128-channel EEG/ERP data and developed a semi-Markov particle filter model with rate-dependent duration priors.

Highlights:

- Analyzed EEG/ERP data from 21 participants, focusing on early neural responses to reduced function words.
- Built a particle-filter model for perceptual state transitions in continuous speech.
- Connected model predictions with ERP findings to explain speech-rate-dependent word segmentation.


## Talks

- **Hudson River Undergraduate Mathematics Conference**, April 2026. Talk: "Monte Carlo Density Estimation for the Stochastic NLS Energy Cascade System."
- **Nebraska Conference for Undergraduate Wisdom in Mathematics**, February 2026. Talk: "Optimal Fair Deployment Strategy for Electric Vehicle Charging Stations."
- **Women in Mathematics in New England**, September 2025. Talk: "Neural Dynamics of Word Segmentation."

## Project Gallery

This section collects code, simulations, and course projects from my research and applied mathematics work.

<div class="projects">
{% assign project_groups = "research|Research Projects,applied|Applied,independent|Independent,coursework|Coursework" | split: "," %}
{% for project_group in project_groups %}
  {% assign group_parts = project_group | split: "|" %}
  {% assign category = group_parts[0] %}
  {% assign label = group_parts[1] %}
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% if sorted_projects.size > 0 %}
    <a id="{{ category }}" href="#{{ category }}">
      <h2 class="category">{{ label }}</h2>
    </a>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
      {% for project in sorted_projects %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
      </div>
    </div>
  {% endif %}
{% endfor %}
</div>
