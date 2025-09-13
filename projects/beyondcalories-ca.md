---
title: "BeyondCalories.ca"
excerpt: "A hackathon project that built a recipe recommendation platform using an inverted graph over half a million recipes, providing real‑time search and AI‑powered suggestions based on pantry ingredients and user criteria."
author: "Aayush Pathak"
date: "2025-09-13"
readTime: 5
category: "Software Development"
tags: ["AI", "Elasticsearch", "FastAPI", "React"]
technologies: ["AI", "Elasticsearch", "FastAPI", "React"]
image: "/images/beyond-calories.png"
featured: true
slug: "beyondcalories-ca"
liveUrl: "https://beyondcalories.ca"
---

# BeyondCalories.ca

BeyondCalories.ca was built during a hackathon to explore how artificial intelligence and modern search technologies can help users find the perfect recipe. The platform indexed roughly 500 k recipes and stored their relationships in an inverted graph so that queries on pantry ingredients and preferences could return relevant suggestions. The architecture consisted of:

- **Real‑time search** – Elasticsearch powered instantaneous querying over the large recipe corpus, enabling faceted filtering and full‑text search.
- **AI recommendations** – algorithms interpreted pantry contents and user dietary criteria to recommend healthy, interesting meals.
- **FastAPI backend** – a Python‑based API served search and recommendation requests, exposing endpoints consumed by a React frontend.
- **Responsive UI** – the React client provided a smooth user experience and dynamic filters.

This hackathon project demonstrates how search and machine learning can enhance everyday cooking by turning random ingredients into delicious meals.
