---
layout: page
title: NLS Energy Cascade
description: SIMD Monte Carlo and Fokker-Planck solvers for stochastic nonlinear Schrödinger energy cascades.
img:
importance: 1
category: research
github: https://github.com/jayleenjiang/nls-energy-cascade
---

This project studies a stochastic nonlinear Schrödinger energy-cascade model driven by heat baths at the ends of a chain. The repository contains C++ simulators, Python analysis scripts, plotting utilities, and notebooks for Fokker-Planck and eigenfunction experiments.

Main components:

- SIMD long-chain stochastic integrators and histogram accumulators.
- Three-mode density estimation and validation against the Gibbs marginal.
- Neural-network Fokker-Planck and eigenfunction solvers.
- Scripts for LTE fitting, phase-locking analysis, and figure generation.

The mathematical goal is to understand nonequilibrium behavior in long chains beyond the analytically solved three-mode setting.
