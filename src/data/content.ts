// This file is auto-generated. Do not edit manually.
// Generated at: 2025-09-13T20:52:23.506Z

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  contentHtml: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export interface ProjectPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  contentHtml: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  date: string;
  category: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    "slug": "introducing-justdev-tools",
    "title": "Introducing justdev.tools",
    "excerpt": "A privacy-first, installable PWA with fast, local developer utilities. Works offline. No accounts. No data leaves your device.",
    "content": "\n# justdev.tools\n\n## Introduction\n\nI built **justdev.tools** to remove friction from everyday developer work. it is a **progressive web app** that installs directly from your browser, runs offline after the first visit, and keeps every operation on your device. there are no accounts and no servers in the path of your data. it is fast, simple, and dependable.\n\n## why this exists\n\nmost days, you need quick utilities while context switching across tasks. format a payload, decode a token, resize an image, generate a hash, preview a QR, convert text encodings, clean CSVs, validate a regex, or create sample data. jumping between random sites wastes time and raises privacy concerns. I wanted a single place that opens instantly, works on desktop and mobile, and respects your data.\n\n## what you can do (high level)\n\n- convert and transform data: json, yaml, xml, csv, url encode/decode, base64, hex\n- generate and verify: uuids, hashes, checksums, lorem, timestamps, slugs\n- security helpers: view headers, decode tokens, inspect payloads, redaction aids\n- text and content helpers: diff, prettify, minify, case transforms\n- media helpers: basic image resize and optimize, quick qr/barcode generation\n- testing helpers: regex tester, http payload builder, time and date utilities\n\nevery operation runs locally in the browser. nothing is uploaded.\n\n## privacy and performance\n\nprivacy was the first constraint. all tools operate in memory on the client side. there is no analytics that fingerprints you and no telemetry that exfiltrates your inputs. performance was the second constraint. the app is pre-cached, so once you open it, it launches instantly and continues to work even when you are offline.\n\n## install it as an app\n\n**desktop (chrome, edge, brave):**\nopen justdev.tools, look for the “install” or “open as app” icon in the address bar, then confirm.\n\n**android (chrome):**\nopen justdev.tools, tap the browser menu, choose “add to home screen,” then confirm.\n\n**ios (safari):**\nopen justdev.tools, tap the share icon, choose “add to home screen,” then confirm.\n\nafter install, it behaves like a native app with its own icon and window.\n\n## keyboard and workflow notes\n\n- every tool favors keyboard input and instant feedback\n- common actions use familiar shortcuts where possible\n- state is kept minimal and local so you can paste, transform, and move on\n\n## roadmap\n\n- more offline-capable utilities based on your requests\n- deeper text, data, and media helpers where local processing makes sense\n- small quality-of-life improvements that keep the app lightweight\n\n## how to give feedback\n\nif there is a utility you reach for often and want it inside justdev.tools, send it my way. the goal is a trustworthy toolbox that saves seconds many times a day without asking for anything in return.\n\n**open the app:** https://justdev.tools\n",
    "contentHtml": "<h1>justdev.tools</h1>\n<h2>Introduction</h2>\n<p>I built <strong>justdev.tools</strong> to remove friction from everyday developer work. it is a <strong>progressive web app</strong> that installs directly from your browser, runs offline after the first visit, and keeps every operation on your device. there are no accounts and no servers in the path of your data. it is fast, simple, and dependable.</p>\n<h2>why this exists</h2>\n<p>most days, you need quick utilities while context switching across tasks. format a payload, decode a token, resize an image, generate a hash, preview a QR, convert text encodings, clean CSVs, validate a regex, or create sample data. jumping between random sites wastes time and raises privacy concerns. I wanted a single place that opens instantly, works on desktop and mobile, and respects your data.</p>\n<h2>what you can do (high level)</h2>\n<ul>\n<li>convert and transform data: json, yaml, xml, csv, url encode/decode, base64, hex</li>\n<li>generate and verify: uuids, hashes, checksums, lorem, timestamps, slugs</li>\n<li>security helpers: view headers, decode tokens, inspect payloads, redaction aids</li>\n<li>text and content helpers: diff, prettify, minify, case transforms</li>\n<li>media helpers: basic image resize and optimize, quick qr/barcode generation</li>\n<li>testing helpers: regex tester, http payload builder, time and date utilities</li>\n</ul>\n<p>every operation runs locally in the browser. nothing is uploaded.</p>\n<h2>privacy and performance</h2>\n<p>privacy was the first constraint. all tools operate in memory on the client side. there is no analytics that fingerprints you and no telemetry that exfiltrates your inputs. performance was the second constraint. the app is pre-cached, so once you open it, it launches instantly and continues to work even when you are offline.</p>\n<h2>install it as an app</h2>\n<p><strong>desktop (chrome, edge, brave):</strong>\nopen justdev.tools, look for the “install” or “open as app” icon in the address bar, then confirm.</p>\n<p><strong>android (chrome):</strong>\nopen justdev.tools, tap the browser menu, choose “add to home screen,” then confirm.</p>\n<p><strong>ios (safari):</strong>\nopen justdev.tools, tap the share icon, choose “add to home screen,” then confirm.</p>\n<p>after install, it behaves like a native app with its own icon and window.</p>\n<h2>keyboard and workflow notes</h2>\n<ul>\n<li>every tool favors keyboard input and instant feedback</li>\n<li>common actions use familiar shortcuts where possible</li>\n<li>state is kept minimal and local so you can paste, transform, and move on</li>\n</ul>\n<h2>roadmap</h2>\n<ul>\n<li>more offline-capable utilities based on your requests</li>\n<li>deeper text, data, and media helpers where local processing makes sense</li>\n<li>small quality-of-life improvements that keep the app lightweight</li>\n</ul>\n<h2>how to give feedback</h2>\n<p>if there is a utility you reach for often and want it inside justdev.tools, send it my way. the goal is a trustworthy toolbox that saves seconds many times a day without asking for anything in return.</p>\n<p><strong>open the app:</strong> https://justdev.tools</p>\n",
    "author": "Aayush Pathak",
    "date": "2025-09-04",
    "readTime": 4,
    "category": "Product",
    "tags": [
      "PWA",
      "Developer Tools",
      "WebDev",
      "Privacy",
      "Offline",
      "Productivity"
    ],
    "image": "images/justdev/justdev.png",
    "featured": true
  },
  {
    "slug": "from-homelab-to-production-devops-foundation",
    "title": "From Homelab to Production: How I Built an On-Prem DevOps & IT Foundation",
    "excerpt": "A deep dive into how I transformed Kidcentral Supply’s IT and DevOps environment using lessons from my homelab.",
    "content": "\n# From Homelab to Production: How I Built an On-Prem DevOps & IT Foundation\n\n## Introduction\n\nWhen I joined Kidcentral Supply as an intern in 2023, the IT setup was lean and heavily outsourced. Most systems were SaaS subscriptions, development work was handled by vendors, and the internal IT team’s role was mainly about supporting the ERP and running queries when managers needed data.\n\nFor a company that isn’t primarily a software business, this made sense. IT spend wasn’t tied directly to revenue, so the thinking was simple: why build when you can buy?\n\nBut my background was different. I had spent years tinkering in my homelab — setting up servers, breaking and fixing virtual machines, experimenting with different ways of automating tasks, containerizing services, and figuring out how to monitor them. That experience wasn’t theoretical. It was practical training.\n\nThe real question was: could I bring those lessons into a production environment?\n\n---\n\n## TLDR\n\nI started by proving that ERP data could be securely extracted and used for internal tools. That proof of concept led to approval for a modest on-prem server. I set up virtualization, a proxy layer, and a foundation for internal services.\n\nOver time, I layered in containerized deployments, automated scheduling, external monitoring, and incident management integrated into existing team tools. I built services that powered secure dashboards with live operational insights.\n\nFinally, I replaced costly outsourced integrations with an internal system that could be deployed in minutes.\n\nThe results: cost savings, faster deployments, live dashboards for managers, and a cultural shift from “buy first” to “try to build first.”\n\n![Before vs After IT/DevOps](/images/Kidcentral_DevOps/kidcentral_visual1.png)\n\n---\n\n## Step 1: Proof of Concept\n\nThe first breakthrough was showing that ERP data could be securely tapped and used to build custom tools. Instead of being limited by what the ERP offered, we could extend it.\n\nI built a simple proof of concept that turned raw database queries into a small internal tool with real business utility. That demo showed leadership we weren’t talking theory — we were talking immediate value.\n\nIt was enough to justify investing in a modest server for on-prem experiments. That small step changed everything.\n\n---\n\n## Step 2: Standing Up Infrastructure\n\nThe new server became the foundation. I installed a hypervisor to run multiple isolated services side by side. Virtual machines let me separate workloads while still running on one piece of hardware.\n\nOn top of that, I set up a proxy layer. This handled routing requests, securing connections, and making sure multiple apps could live behind a single public entry point. With this in place, the infrastructure could grow without constantly needing new IPs or DNS changes.\n\nIt wasn’t huge. But it was stable, expandable, and ours.\n\n---\n\n## Step 3: Deployments and Automation\n\nAt first, applications were simple services running directly on the server. That worked, but it wasn’t flexible. So I began containerizing apps, making them portable and easier to manage.\n\nAs the environment grew, I added a lightweight management layer that made it possible to spin up new services or redeploy existing ones in minutes. No more waiting on external vendors for every change.\n\nAutomation was another layer. Scheduled jobs handled recurring tasks, while event-driven triggers responded to real-world signals like incoming orders or updated data. The system went from manual to largely self-sufficient.\n\n![Infrastructure Flow](/images/Kidcentral_DevOps/kidcentral_visual2.png)\n\n---\n\n## Step 4: Monitoring and Incident Management\n\nReliability became the next challenge. If infrastructure is invisible when it works, it’s painfully visible when it fails.\n\nI set up external monitoring so that even if our internal systems were offline, the status page stayed up. This gave leadership visibility and gave IT a way to show transparency.\n\nI also tied incident reporting directly into the tools the team already used every day. If something broke, they didn’t need to learn a new incident system — they could report, update, and close issues from inside their normal workflow. That cut response times dramatically and reduced friction.\n\n---\n\n## Step 5: Custom Apps and Integrations\n\nWith the base infrastructure in place, I built internal services that exposed ERP and operational data securely. These powered a company-wide dashboard that anyone with the right permissions could use.\n\nInstead of waiting hours or days for someone to pull data and email it, managers could open a dashboard and see live targets, sales, and projections instantly. Access was restricted with domain accounts and role-based permissions, so data stayed protected.\n\nThe next step was integrations. Previously, e-commerce to ERP integrations were outsourced. They cost tens of thousands of dollars and took months to deliver. I built a reusable internal system where new integrations could be deployed in minutes. This eliminated massive vendor costs and gave us full control.\n\n---\n\n## Results\n\nCost savings were immediate. We cut recurring contracts, transaction fees, and vendor support retainers.\n\nDeployment times dropped from months to days, sometimes hours.\n\nSupport times went from six hours to minutes. My record production fix took thirty seconds.\n\nManagers had real-time dashboards instead of emailed SQL reports.\n\nAnd the culture shifted. The default wasn’t “what do we buy,” it was “can we build this ourselves?”\n\n![Results Summary](/images/Kidcentral_DevOps/kidcentral_visual3.png)\n\n---\n\n## Lessons Learned\n\nSmall proofs of concept can change everything.\n\nExperiments in a homelab directly translate to production when you apply them with discipline.\n\nReal-time dashboards don’t just save time — they change how leaders make decisions.\n\nTemplates and repeatability are the real foundation of speed.\n\nPeople adopt tools faster when those tools live inside apps they already use.\n\n---\n\n## What’s Next\n\nThe foundation is solid, but there’s more to do.\n\nFuture improvements include moving to Git-driven deployment pipelines with artifact verification, expanding observability with metrics and tracing, and centralizing secret management. Some scheduled jobs should graduate to an orchestrator for reliability.\n\nI also want to run failure drills so recovery times are predictable, not just fast. And eventually, we’ll look at progressive deployment strategies for critical services to further reduce risk.\n\n---\n\n## Conclusion\n\nThis project proved something important. Innovation doesn’t always come from big budgets or big vendors. It comes from curiosity, persistence, and the willingness to turn small experiments into production systems.\n\nAt Kidcentral Supply, homelab lessons became real-world impact. Costs went down, speed went up, and data became instantly available. The company became more resilient and more self-reliant.\n\nIf you’re at a small or mid-sized business wondering whether it’s worth building internally, the answer is yes. Start small. Prove value. Scale step by step.\n\nAnd if you’re curious about the details of how I did it, reach out. I’d be happy to share more.\n",
    "contentHtml": "<h1>From Homelab to Production: How I Built an On-Prem DevOps &#x26; IT Foundation</h1>\n<h2>Introduction</h2>\n<p>When I joined Kidcentral Supply as an intern in 2023, the IT setup was lean and heavily outsourced. Most systems were SaaS subscriptions, development work was handled by vendors, and the internal IT team’s role was mainly about supporting the ERP and running queries when managers needed data.</p>\n<p>For a company that isn’t primarily a software business, this made sense. IT spend wasn’t tied directly to revenue, so the thinking was simple: why build when you can buy?</p>\n<p>But my background was different. I had spent years tinkering in my homelab — setting up servers, breaking and fixing virtual machines, experimenting with different ways of automating tasks, containerizing services, and figuring out how to monitor them. That experience wasn’t theoretical. It was practical training.</p>\n<p>The real question was: could I bring those lessons into a production environment?</p>\n<hr>\n<h2>TLDR</h2>\n<p>I started by proving that ERP data could be securely extracted and used for internal tools. That proof of concept led to approval for a modest on-prem server. I set up virtualization, a proxy layer, and a foundation for internal services.</p>\n<p>Over time, I layered in containerized deployments, automated scheduling, external monitoring, and incident management integrated into existing team tools. I built services that powered secure dashboards with live operational insights.</p>\n<p>Finally, I replaced costly outsourced integrations with an internal system that could be deployed in minutes.</p>\n<p>The results: cost savings, faster deployments, live dashboards for managers, and a cultural shift from “buy first” to “try to build first.”</p>\n<p><img src=\"/images/Kidcentral_DevOps/kidcentral_visual1.png\" alt=\"Before vs After IT/DevOps\"></p>\n<hr>\n<h2>Step 1: Proof of Concept</h2>\n<p>The first breakthrough was showing that ERP data could be securely tapped and used to build custom tools. Instead of being limited by what the ERP offered, we could extend it.</p>\n<p>I built a simple proof of concept that turned raw database queries into a small internal tool with real business utility. That demo showed leadership we weren’t talking theory — we were talking immediate value.</p>\n<p>It was enough to justify investing in a modest server for on-prem experiments. That small step changed everything.</p>\n<hr>\n<h2>Step 2: Standing Up Infrastructure</h2>\n<p>The new server became the foundation. I installed a hypervisor to run multiple isolated services side by side. Virtual machines let me separate workloads while still running on one piece of hardware.</p>\n<p>On top of that, I set up a proxy layer. This handled routing requests, securing connections, and making sure multiple apps could live behind a single public entry point. With this in place, the infrastructure could grow without constantly needing new IPs or DNS changes.</p>\n<p>It wasn’t huge. But it was stable, expandable, and ours.</p>\n<hr>\n<h2>Step 3: Deployments and Automation</h2>\n<p>At first, applications were simple services running directly on the server. That worked, but it wasn’t flexible. So I began containerizing apps, making them portable and easier to manage.</p>\n<p>As the environment grew, I added a lightweight management layer that made it possible to spin up new services or redeploy existing ones in minutes. No more waiting on external vendors for every change.</p>\n<p>Automation was another layer. Scheduled jobs handled recurring tasks, while event-driven triggers responded to real-world signals like incoming orders or updated data. The system went from manual to largely self-sufficient.</p>\n<p><img src=\"/images/Kidcentral_DevOps/kidcentral_visual2.png\" alt=\"Infrastructure Flow\"></p>\n<hr>\n<h2>Step 4: Monitoring and Incident Management</h2>\n<p>Reliability became the next challenge. If infrastructure is invisible when it works, it’s painfully visible when it fails.</p>\n<p>I set up external monitoring so that even if our internal systems were offline, the status page stayed up. This gave leadership visibility and gave IT a way to show transparency.</p>\n<p>I also tied incident reporting directly into the tools the team already used every day. If something broke, they didn’t need to learn a new incident system — they could report, update, and close issues from inside their normal workflow. That cut response times dramatically and reduced friction.</p>\n<hr>\n<h2>Step 5: Custom Apps and Integrations</h2>\n<p>With the base infrastructure in place, I built internal services that exposed ERP and operational data securely. These powered a company-wide dashboard that anyone with the right permissions could use.</p>\n<p>Instead of waiting hours or days for someone to pull data and email it, managers could open a dashboard and see live targets, sales, and projections instantly. Access was restricted with domain accounts and role-based permissions, so data stayed protected.</p>\n<p>The next step was integrations. Previously, e-commerce to ERP integrations were outsourced. They cost tens of thousands of dollars and took months to deliver. I built a reusable internal system where new integrations could be deployed in minutes. This eliminated massive vendor costs and gave us full control.</p>\n<hr>\n<h2>Results</h2>\n<p>Cost savings were immediate. We cut recurring contracts, transaction fees, and vendor support retainers.</p>\n<p>Deployment times dropped from months to days, sometimes hours.</p>\n<p>Support times went from six hours to minutes. My record production fix took thirty seconds.</p>\n<p>Managers had real-time dashboards instead of emailed SQL reports.</p>\n<p>And the culture shifted. The default wasn’t “what do we buy,” it was “can we build this ourselves?”</p>\n<p><img src=\"/images/Kidcentral_DevOps/kidcentral_visual3.png\" alt=\"Results Summary\"></p>\n<hr>\n<h2>Lessons Learned</h2>\n<p>Small proofs of concept can change everything.</p>\n<p>Experiments in a homelab directly translate to production when you apply them with discipline.</p>\n<p>Real-time dashboards don’t just save time — they change how leaders make decisions.</p>\n<p>Templates and repeatability are the real foundation of speed.</p>\n<p>People adopt tools faster when those tools live inside apps they already use.</p>\n<hr>\n<h2>What’s Next</h2>\n<p>The foundation is solid, but there’s more to do.</p>\n<p>Future improvements include moving to Git-driven deployment pipelines with artifact verification, expanding observability with metrics and tracing, and centralizing secret management. Some scheduled jobs should graduate to an orchestrator for reliability.</p>\n<p>I also want to run failure drills so recovery times are predictable, not just fast. And eventually, we’ll look at progressive deployment strategies for critical services to further reduce risk.</p>\n<hr>\n<h2>Conclusion</h2>\n<p>This project proved something important. Innovation doesn’t always come from big budgets or big vendors. It comes from curiosity, persistence, and the willingness to turn small experiments into production systems.</p>\n<p>At Kidcentral Supply, homelab lessons became real-world impact. Costs went down, speed went up, and data became instantly available. The company became more resilient and more self-reliant.</p>\n<p>If you’re at a small or mid-sized business wondering whether it’s worth building internally, the answer is yes. Start small. Prove value. Scale step by step.</p>\n<p>And if you’re curious about the details of how I did it, reach out. I’d be happy to share more.</p>\n",
    "author": "Aayush Pathak",
    "date": "2025-09-04",
    "readTime": 6,
    "category": "Case Study",
    "tags": [
      "DevOps",
      "Infrastructure",
      "Automation",
      "Digital Transformation",
      "On-Prem"
    ],
    "image": "images/Kidcentral_DevOps/blog-cover.png",
    "featured": true
  }
];

export const projects: ProjectPost[] = [
  {
    "slug": "side-projects-observability",
    "title": "Side Projects & Observability",
    "excerpt": "A collection of DevOps experiments that build telemetry pipelines, automate preview environments and run failure drills to improve reliability and developer experience.",
    "content": "\n# Side Projects & Observability\n\nIn addition to primary DevOps work, Aayush regularly experiments with side projects to improve observability and developer experience. These initiatives include building telemetry pipelines with Grafana and Prometheus for containerized services, automating preview environments and creating repeatable templates【642612861762554†L46-L53】. He also runs failure drills and plans progressive deployments to enhance reliability【642612861762554†L46-L53】.\n\nHighlights:\n\n- **Telemetry pipelines** – integrated dashboards provide insights into application and infrastructure health.\n- **Preview environments** – automated environments enable teams to test changes before they reach production.\n- **Reliability practices** – regular chaos drills and progressive rollout strategies reduce downtime and increase confidence.\n\nThese experiments help refine best practices and foster a culture of continuous improvement within the development team.\n",
    "contentHtml": "<h1>Side Projects &#x26; Observability</h1>\n<p>In addition to primary DevOps work, Aayush regularly experiments with side projects to improve observability and developer experience. These initiatives include building telemetry pipelines with Grafana and Prometheus for containerized services, automating preview environments and creating repeatable templates【642612861762554†L46-L53】. He also runs failure drills and plans progressive deployments to enhance reliability【642612861762554†L46-L53】.</p>\n<p>Highlights:</p>\n<ul>\n<li><strong>Telemetry pipelines</strong> – integrated dashboards provide insights into application and infrastructure health.</li>\n<li><strong>Preview environments</strong> – automated environments enable teams to test changes before they reach production.</li>\n<li><strong>Reliability practices</strong> – regular chaos drills and progressive rollout strategies reduce downtime and increase confidence.</li>\n</ul>\n<p>These experiments help refine best practices and foster a culture of continuous improvement within the development team.</p>\n",
    "image": "/images/side-projects-observability.png",
    "technologies": [],
    "githubUrl": "",
    "liveUrl": "",
    "date": "2025-09-13",
    "category": "DevOps",
    "featured": true
  },
  {
    "slug": "saas-accounting-invoicing-platform",
    "title": "SaaS Accounting & Invoicing Platform",
    "excerpt": "A modern small‑business finance platform built on Next.js and Postgres, delivering fast invoicing, clean ledger workflows and pragmatic CI/CD and observability practices.",
    "content": "\n# SaaS Accounting & Invoicing Platform\n\nThis project is a cloud‑based accounting and invoicing solution designed for small businesses. It provides a modern user experience for creating invoices, tracking payments and managing a ledger, all built on top of a Next.js frontend and a Postgres database【835914650520473†L57-L63】. To support ongoing development, the platform adopts pragmatic CI/CD and observability practices, ensuring that updates are delivered quickly and reliably【835914650520473†L57-L63】. Key aspects include:\n\n- **Fast invoicing workflows** – generate professional invoices in seconds and track their status across the client lifecycle.\n- **Clean ledger management** – maintain an organized record of transactions and automatically reconcile payments.\n- **Modern tech stack** – Next.js offers server‑side rendering and API routes, while Postgres provides transactional integrity【835914650520473†L57-L63】.\n- **Infrastructure** – built with CI/CD pipelines and monitoring to catch issues early and roll out features without downtime.\n\nAs an ongoing freelance project, the platform demonstrates how web technologies can simplify financial operations for small businesses.\n",
    "contentHtml": "<h1>SaaS Accounting &#x26; Invoicing Platform</h1>\n<p>This project is a cloud‑based accounting and invoicing solution designed for small businesses. It provides a modern user experience for creating invoices, tracking payments and managing a ledger, all built on top of a Next.js frontend and a Postgres database【835914650520473†L57-L63】. To support ongoing development, the platform adopts pragmatic CI/CD and observability practices, ensuring that updates are delivered quickly and reliably【835914650520473†L57-L63】. Key aspects include:</p>\n<ul>\n<li><strong>Fast invoicing workflows</strong> – generate professional invoices in seconds and track their status across the client lifecycle.</li>\n<li><strong>Clean ledger management</strong> – maintain an organized record of transactions and automatically reconcile payments.</li>\n<li><strong>Modern tech stack</strong> – Next.js offers server‑side rendering and API routes, while Postgres provides transactional integrity【835914650520473†L57-L63】.</li>\n<li><strong>Infrastructure</strong> – built with CI/CD pipelines and monitoring to catch issues early and roll out features without downtime.</li>\n</ul>\n<p>As an ongoing freelance project, the platform demonstrates how web technologies can simplify financial operations for small businesses.</p>\n",
    "image": "/images/saas-accounting-invoicing-platform.png",
    "technologies": [],
    "githubUrl": "",
    "liveUrl": "",
    "date": "2025-09-13",
    "category": "Software Development",
    "featured": true
  },
  {
    "slug": "react-native-app",
    "title": "React Native App",
    "excerpt": "A cross‑platform mobile application under active development, delivering a lean feature set and a consistent user experience through shared UI primitives.",
    "content": "\n# React Native App\n\nThis React Native project aims to deliver a lean, fast mobile application that works across both iOS and Android devices. By sharing UI primitives and business logic, the app achieves consistent look and feel on different platforms【835914650520473†L65-L69】. The initial feature set focuses on core functionality while leaving room for rapid iteration as user feedback is gathered. Highlights include:\n\n- **Cross‑platform codebase** – React Native enables the majority of the code to run on both platforms while still allowing platform‑specific enhancements.\n- **Shared components** – reusable UI primitives promote consistency and reduce development time【835914650520473†L65-L69】.\n- **Performance** – careful attention to state management and network requests ensures that the app feels responsive on a wide range of devices.\n- **Scalability** – the architecture is designed to accommodate future features without major rewrites.\n\nThis project showcases the advantages of building native‑like experiences using a single JavaScript/TypeScript codebase.\n",
    "contentHtml": "<h1>React Native App</h1>\n<p>This React Native project aims to deliver a lean, fast mobile application that works across both iOS and Android devices. By sharing UI primitives and business logic, the app achieves consistent look and feel on different platforms【835914650520473†L65-L69】. The initial feature set focuses on core functionality while leaving room for rapid iteration as user feedback is gathered. Highlights include:</p>\n<ul>\n<li><strong>Cross‑platform codebase</strong> – React Native enables the majority of the code to run on both platforms while still allowing platform‑specific enhancements.</li>\n<li><strong>Shared components</strong> – reusable UI primitives promote consistency and reduce development time【835914650520473†L65-L69】.</li>\n<li><strong>Performance</strong> – careful attention to state management and network requests ensures that the app feels responsive on a wide range of devices.</li>\n<li><strong>Scalability</strong> – the architecture is designed to accommodate future features without major rewrites.</li>\n</ul>\n<p>This project showcases the advantages of building native‑like experiences using a single JavaScript/TypeScript codebase.</p>\n",
    "image": "/images/react-native-app.png",
    "technologies": [],
    "githubUrl": "",
    "liveUrl": "",
    "date": "2025-09-13",
    "category": "Mobile Development",
    "featured": true
  },
  {
    "slug": "kidcentral-realsense-dimensioner",
    "title": "Kidcentral Realsense Dimensioner",
    "excerpt": "A desktop application that uses Intel RealSense depth cameras to capture and compute object dimensions, packaging C# and OpenCV into a reliable tool for precise measurement.",
    "content": "\n# Kidcentral Realsense Dimensioner\n\nKidcentral Realsense Dimensioner is a Windows desktop tool that captures the physical dimensions of objects using Intel RealSense depth cameras. Leveraging C#, OpenCV and the Intel RealSense SDK, the application measures length, width and height from depth data and packages the results into a user‑friendly interface. Highlights of the project include:\n\n- **Depth‑camera integration** – the tool streams point‑cloud data from Intel RealSense cameras and processes it in real time.\n- **Accurate measurement** – OpenCV algorithms calculate dimensions and compensate for camera distortion and perspective.\n- **Reliable deployments** – packaged installers make it easy to deploy the software across the organization for consistent performance.\n- **Use cases** – warehouse staff can quickly dimension packages for shipping, and product teams can measure prototypes without specialized hardware.\n\nBy combining computer‑vision techniques with off‑the‑shelf hardware, this project provides a cost‑effective alternative to expensive industrial dimensioning systems.\n",
    "contentHtml": "<h1>Kidcentral Realsense Dimensioner</h1>\n<p>Kidcentral Realsense Dimensioner is a Windows desktop tool that captures the physical dimensions of objects using Intel RealSense depth cameras. Leveraging C#, OpenCV and the Intel RealSense SDK, the application measures length, width and height from depth data and packages the results into a user‑friendly interface. Highlights of the project include:</p>\n<ul>\n<li><strong>Depth‑camera integration</strong> – the tool streams point‑cloud data from Intel RealSense cameras and processes it in real time.</li>\n<li><strong>Accurate measurement</strong> – OpenCV algorithms calculate dimensions and compensate for camera distortion and perspective.</li>\n<li><strong>Reliable deployments</strong> – packaged installers make it easy to deploy the software across the organization for consistent performance.</li>\n<li><strong>Use cases</strong> – warehouse staff can quickly dimension packages for shipping, and product teams can measure prototypes without specialized hardware.</li>\n</ul>\n<p>By combining computer‑vision techniques with off‑the‑shelf hardware, this project provides a cost‑effective alternative to expensive industrial dimensioning systems.</p>\n",
    "image": "/images/kidcentral-realsense-dimensioner.png",
    "technologies": [
      "C#",
      "OpenCV",
      "Intel RealSense",
      "Desktop"
    ],
    "githubUrl": "",
    "liveUrl": "",
    "date": "2025-09-13",
    "category": "Software Development",
    "featured": true
  },
  {
    "slug": "kidcentral-analytics-internal-apps",
    "title": "Kidcentral Analytics & Internal Apps",
    "excerpt": "Secure dashboards and internal systems that replace outsourced e‑commerce integrations, providing role‑based access to ERP and operational data and reducing deployment times from months to days.",
    "content": "\n# Kidcentral Analytics & Internal Apps\n\nTo give managers immediate access to operational insights, Aayush built secure dashboards powered by ERP and operational data. These dashboards use role‑based access control so that each team sees only the information relevant to them. By replacing outsourced e‑commerce integrations with reusable internal systems, the project reduced costs, improved transparency and cut deployment times from months to days. The solution uses PocketBase for authentication, a Python/FastAPI backend and a React front end.\n\nKey benefits include:\n\n- **Immediate insights** – live dashboards surface sales, inventory and operational metrics.\n- **Rapid deployment** – new integrations can be deployed in minutes rather than months.\n- **Lower costs** – eliminating vendor fees and contracts saves money and increases control.\n- **CI/CD pipeline** – automated testing and deployment ensure reliability and speed.\n\nBy internalizing analytics and integrations, the company gained control over its data and improved its ability to respond quickly to business needs.\n",
    "contentHtml": "<h1>Kidcentral Analytics &#x26; Internal Apps</h1>\n<p>To give managers immediate access to operational insights, Aayush built secure dashboards powered by ERP and operational data. These dashboards use role‑based access control so that each team sees only the information relevant to them. By replacing outsourced e‑commerce integrations with reusable internal systems, the project reduced costs, improved transparency and cut deployment times from months to days. The solution uses PocketBase for authentication, a Python/FastAPI backend and a React front end.</p>\n<p>Key benefits include:</p>\n<ul>\n<li><strong>Immediate insights</strong> – live dashboards surface sales, inventory and operational metrics.</li>\n<li><strong>Rapid deployment</strong> – new integrations can be deployed in minutes rather than months.</li>\n<li><strong>Lower costs</strong> – eliminating vendor fees and contracts saves money and increases control.</li>\n<li><strong>CI/CD pipeline</strong> – automated testing and deployment ensure reliability and speed.</li>\n</ul>\n<p>By internalizing analytics and integrations, the company gained control over its data and improved its ability to respond quickly to business needs.</p>\n",
    "image": "/images/kidcentral-analytics-internal-apps.png",
    "technologies": [
      "ERP",
      "Dashboards",
      "PocketBase",
      "Python",
      "React",
      "FastAPI",
      "CI/CD"
    ],
    "githubUrl": "",
    "liveUrl": "",
    "date": "2025-09-13",
    "category": "DevOps",
    "featured": true
  },
  {
    "slug": "kidcentral-analytics-dashboard",
    "title": "Kidcentral Analytics Dashboard",
    "excerpt": "Company-wide analytics web app delivering secure access and actionable operational insights with a fast React UI and PocketBase authentication.",
    "content": "\n# Kidcentral Analytics Dashboard\n\nKidcentral Analytics Dashboard is a secure, company‑wide analytics application that exposes operational data to managers and team members. Built with a fast Vite‑powered React frontend and a Python service behind PocketBase authentication, it delivers live charts and tables that help the business make data‑driven decisions. The dashboard provides role‑based access control, ensuring that sensitive information is shared appropriately while still being easy to use. Key features include:\n\n- **Secure authentication** – PocketBase handles user sign‑ups, logins and permissions, while the Python backend serves pre‑processed analytics data.\n- **Fast user experience** – a Vite + React UI renders charts and tables quickly, allowing managers to drill into sales and inventory metrics without delays.\n- **Scalable architecture** – the separation of frontend and backend components enables independent scaling and simplifies maintenance.\n- **Actionable insights** – real‑time data visualizations make it easy to spot trends, anomalies and growth opportunities.\n\nThis project demonstrates how modern web technologies can turn raw business data into operational intelligence. It lays the groundwork for further enhancements such as self‑service reporting and predictive analytics.\n",
    "contentHtml": "<h1>Kidcentral Analytics Dashboard</h1>\n<p>Kidcentral Analytics Dashboard is a secure, company‑wide analytics application that exposes operational data to managers and team members. Built with a fast Vite‑powered React frontend and a Python service behind PocketBase authentication, it delivers live charts and tables that help the business make data‑driven decisions. The dashboard provides role‑based access control, ensuring that sensitive information is shared appropriately while still being easy to use. Key features include:</p>\n<ul>\n<li><strong>Secure authentication</strong> – PocketBase handles user sign‑ups, logins and permissions, while the Python backend serves pre‑processed analytics data.</li>\n<li><strong>Fast user experience</strong> – a Vite + React UI renders charts and tables quickly, allowing managers to drill into sales and inventory metrics without delays.</li>\n<li><strong>Scalable architecture</strong> – the separation of frontend and backend components enables independent scaling and simplifies maintenance.</li>\n<li><strong>Actionable insights</strong> – real‑time data visualizations make it easy to spot trends, anomalies and growth opportunities.</li>\n</ul>\n<p>This project demonstrates how modern web technologies can turn raw business data into operational intelligence. It lays the groundwork for further enhancements such as self‑service reporting and predictive analytics.</p>\n",
    "image": "/images/kidcentral-analytics-dashboard.png",
    "technologies": [
      "Analytics",
      "React",
      "Vite",
      "PocketBase",
      "Python"
    ],
    "githubUrl": "",
    "liveUrl": "",
    "date": "2025-09-13",
    "category": "Software Development",
    "featured": true
  },
  {
    "slug": "directus-nextjs-ui-kit",
    "title": "Directus → Next.js UI Kit",
    "excerpt": "A utility that generates typed, reusable Next.js components from a Directus schema, accelerating CRUD UI development with TypeScript types and Zod validation.",
    "content": "\n# Directus → Next.js UI Kit\n\nTo speed up development of content‑driven web apps, this project converts a Directus data model into fully typed Next.js components. Given a Directus schema, it generates reusable UI components along with TypeScript type definitions and Zod validation schemas. This allows developers to scaffold CRUD interfaces quickly while maintaining strong type safety. Key benefits include:\n\n- **Automated scaffolding** – reduces repetitive coding by creating forms, lists and detail views directly from the schema.\n- **Type safety** – generated TypeScript types ensure that data passed between the client and API aligns with the underlying database structure.\n- **Validation** – Zod schemas guard against invalid inputs at runtime, improving reliability.\n- **Customization** – developers can extend or override generated components to fit specific UI requirements.\n\nBy turning metadata into code, the Directus → Next.js UI Kit shortens the feedback loop between data modelling and user interface.\n",
    "contentHtml": "<h1>Directus → Next.js UI Kit</h1>\n<p>To speed up development of content‑driven web apps, this project converts a Directus data model into fully typed Next.js components. Given a Directus schema, it generates reusable UI components along with TypeScript type definitions and Zod validation schemas. This allows developers to scaffold CRUD interfaces quickly while maintaining strong type safety. Key benefits include:</p>\n<ul>\n<li><strong>Automated scaffolding</strong> – reduces repetitive coding by creating forms, lists and detail views directly from the schema.</li>\n<li><strong>Type safety</strong> – generated TypeScript types ensure that data passed between the client and API aligns with the underlying database structure.</li>\n<li><strong>Validation</strong> – Zod schemas guard against invalid inputs at runtime, improving reliability.</li>\n<li><strong>Customization</strong> – developers can extend or override generated components to fit specific UI requirements.</li>\n</ul>\n<p>By turning metadata into code, the Directus → Next.js UI Kit shortens the feedback loop between data modelling and user interface.</p>\n",
    "image": "/images/directus-nextjs-ui-kit.png",
    "technologies": [
      "Directus",
      "Next.js",
      "TypeScript",
      "Zod"
    ],
    "githubUrl": "",
    "liveUrl": "",
    "date": "2025-09-13",
    "category": "Software Development",
    "featured": true
  },
  {
    "slug": "beyondcalories-ca",
    "title": "BeyondCalories.ca",
    "excerpt": "A hackathon project that built a recipe recommendation platform using an inverted graph over half a million recipes, providing real‑time search and AI‑powered suggestions based on pantry ingredients and user criteria.",
    "content": "\n# BeyondCalories.ca\n\nBeyondCalories.ca was built during a hackathon to explore how artificial intelligence and modern search technologies can help users find the perfect recipe. The platform indexed roughly 500 k recipes and stored their relationships in an inverted graph so that queries on pantry ingredients and preferences could return relevant suggestions. The architecture consisted of:\n\n- **Real‑time search** – Elasticsearch powered instantaneous querying over the large recipe corpus, enabling faceted filtering and full‑text search.\n- **AI recommendations** – algorithms interpreted pantry contents and user dietary criteria to recommend healthy, interesting meals.\n- **FastAPI backend** – a Python‑based API served search and recommendation requests, exposing endpoints consumed by a React frontend.\n- **Responsive UI** – the React client provided a smooth user experience and dynamic filters.\n\nThis hackathon project demonstrates how search and machine learning can enhance everyday cooking by turning random ingredients into delicious meals.\n",
    "contentHtml": "<h1>BeyondCalories.ca</h1>\n<p>BeyondCalories.ca was built during a hackathon to explore how artificial intelligence and modern search technologies can help users find the perfect recipe. The platform indexed roughly 500 k recipes and stored their relationships in an inverted graph so that queries on pantry ingredients and preferences could return relevant suggestions. The architecture consisted of:</p>\n<ul>\n<li><strong>Real‑time search</strong> – Elasticsearch powered instantaneous querying over the large recipe corpus, enabling faceted filtering and full‑text search.</li>\n<li><strong>AI recommendations</strong> – algorithms interpreted pantry contents and user dietary criteria to recommend healthy, interesting meals.</li>\n<li><strong>FastAPI backend</strong> – a Python‑based API served search and recommendation requests, exposing endpoints consumed by a React frontend.</li>\n<li><strong>Responsive UI</strong> – the React client provided a smooth user experience and dynamic filters.</li>\n</ul>\n<p>This hackathon project demonstrates how search and machine learning can enhance everyday cooking by turning random ingredients into delicious meals.</p>\n",
    "image": "/images/beyond-calories.png",
    "technologies": [
      "AI",
      "Elasticsearch",
      "FastAPI",
      "React"
    ],
    "githubUrl": "",
    "liveUrl": "",
    "date": "2025-09-13",
    "category": "Software Development",
    "featured": true
  },
  {
    "slug": "justdev-tools",
    "title": "JustDev.tools",
    "excerpt": "A privacy‑first progressive web app that bundles dozens of developer utilities—conversions, hash generators, media tools, and more—into an installable offline toolbox.",
    "content": "\n# JustDev.tools\n\nJustDev.tools is a collection of lightweight, privacy‑first utilities designed to eliminate context switching during development. Built as an installable progressive web app, it runs entirely in your browser and continues to work offline after the first visit. There are no accounts, no servers and no data leaves your device, making it both fast and dependable. The toolbox exists because developers frequently need to format payloads, decode tokens, generate hashes or test regular expressions without leaving their current task.\n\n## Features\n\n- **Data conversion** – convert between JSON, YAML, XML, CSV and perform URL encoding/decoding and base64/hex transforms.\n- **Generation & verification** – create UUIDs, hashes, checksums, lorem ipsum text, timestamps and slugs.\n- **Security helpers** – decode JWT tokens, inspect HTTP headers and redact sensitive payloads.\n- **Content tools** – diff, prettify or minify text; change case; and clean CSVs.\n- **Media & testing** – resize images, generate QR/barcodes, test regex patterns, build HTTP requests and perform time/date calculations.\n\n## Privacy and Performance\n\nAll operations are executed in memory on the client; nothing is uploaded and there is no analytics. The app is pre‑cached so it launches instantly and works offline, providing a native‑like experience when installed on desktop or mobile. It favors keyboard shortcuts and maintains minimal state, allowing you to paste, transform and move on quickly.\n\nJustDev.tools demonstrates that productivity apps don’t need to compromise on privacy to be effective. It’s a trustworthy companion that saves seconds every day without asking for anything in return.\n",
    "contentHtml": "<h1>JustDev.tools</h1>\n<p>JustDev.tools is a collection of lightweight, privacy‑first utilities designed to eliminate context switching during development. Built as an installable progressive web app, it runs entirely in your browser and continues to work offline after the first visit. There are no accounts, no servers and no data leaves your device, making it both fast and dependable. The toolbox exists because developers frequently need to format payloads, decode tokens, generate hashes or test regular expressions without leaving their current task.</p>\n<h2>Features</h2>\n<ul>\n<li><strong>Data conversion</strong> – convert between JSON, YAML, XML, CSV and perform URL encoding/decoding and base64/hex transforms.</li>\n<li><strong>Generation &#x26; verification</strong> – create UUIDs, hashes, checksums, lorem ipsum text, timestamps and slugs.</li>\n<li><strong>Security helpers</strong> – decode JWT tokens, inspect HTTP headers and redact sensitive payloads.</li>\n<li><strong>Content tools</strong> – diff, prettify or minify text; change case; and clean CSVs.</li>\n<li><strong>Media &#x26; testing</strong> – resize images, generate QR/barcodes, test regex patterns, build HTTP requests and perform time/date calculations.</li>\n</ul>\n<h2>Privacy and Performance</h2>\n<p>All operations are executed in memory on the client; nothing is uploaded and there is no analytics. The app is pre‑cached so it launches instantly and works offline, providing a native‑like experience when installed on desktop or mobile. It favors keyboard shortcuts and maintains minimal state, allowing you to paste, transform and move on quickly.</p>\n<p>JustDev.tools demonstrates that productivity apps don’t need to compromise on privacy to be effective. It’s a trustworthy companion that saves seconds every day without asking for anything in return.</p>\n",
    "image": "/images/justdev-tools.png",
    "technologies": [
      "PWA",
      "React",
      "Vite",
      "JavaScript"
    ],
    "githubUrl": "",
    "liveUrl": "",
    "date": "2025-09-04",
    "category": "Developer Tools",
    "featured": true
  },
  {
    "slug": "homelab-to-production",
    "title": "From Homelab to Production: Kidcentral DevOps Transformation",
    "excerpt": "A DevOps initiative that transformed Kidcentral Supply’s lean, outsourced IT into a self‑sufficient, on‑prem infrastructure with containerization, automation, monitoring and cost‑saving internal systems.",
    "content": "\n# From Homelab to Production: Kidcentral DevOps Transformation\n\nWhen Aayush joined Kidcentral Supply in 2023, the company’s IT environment relied heavily on SaaS providers and outsourced vendors. Drawing on years of homelab experimentation, he proposed a shift toward building rather than buying. The transformation unfolded in several stages:\n\n1. **Proof of concept** – by securely extracting ERP data and turning it into a small internal tool, he proved the value of building custom solutions.\n2. **Standing up infrastructure** – a modest on‑prem server with virtualization and a proxy layer formed the foundation for internal services.\n3. **Deployments and automation** – containerization, scheduled jobs and event‑driven triggers turned manual processes into self‑sufficient workflows.\n4. **Monitoring and incident management** – external monitoring and integrated incident reporting improved reliability and visibility.\n5. **Custom apps and integrations** – secure dashboards and reusable internal systems replaced costly outsourced e‑commerce integrations, cutting expenses and accelerating deployments.\n\nThe results were dramatic: costs dropped, deployment cycles shrank from months to days, managers gained real‑time dashboards and the culture shifted from “buy first” to “build first”. This project illustrates how homelab lessons can have real‑world impact when applied with discipline and curiosity.\n",
    "contentHtml": "<h1>From Homelab to Production: Kidcentral DevOps Transformation</h1>\n<p>When Aayush joined Kidcentral Supply in 2023, the company’s IT environment relied heavily on SaaS providers and outsourced vendors. Drawing on years of homelab experimentation, he proposed a shift toward building rather than buying. The transformation unfolded in several stages:</p>\n<ol>\n<li><strong>Proof of concept</strong> – by securely extracting ERP data and turning it into a small internal tool, he proved the value of building custom solutions.</li>\n<li><strong>Standing up infrastructure</strong> – a modest on‑prem server with virtualization and a proxy layer formed the foundation for internal services.</li>\n<li><strong>Deployments and automation</strong> – containerization, scheduled jobs and event‑driven triggers turned manual processes into self‑sufficient workflows.</li>\n<li><strong>Monitoring and incident management</strong> – external monitoring and integrated incident reporting improved reliability and visibility.</li>\n<li><strong>Custom apps and integrations</strong> – secure dashboards and reusable internal systems replaced costly outsourced e‑commerce integrations, cutting expenses and accelerating deployments.</li>\n</ol>\n<p>The results were dramatic: costs dropped, deployment cycles shrank from months to days, managers gained real‑time dashboards and the culture shifted from “buy first” to “build first”. This project illustrates how homelab lessons can have real‑world impact when applied with discipline and curiosity.</p>\n",
    "image": "/images/homelab-to-production.png",
    "technologies": [
      "On‑Prem",
      "Virtualization",
      "Docker",
      "Automation",
      "Monitoring"
    ],
    "githubUrl": "",
    "liveUrl": "",
    "date": "2025-09-04",
    "category": "DevOps",
    "featured": true
  },
  {
    "slug": "project-template",
    "title": "Your Project Title",
    "excerpt": "A brief description of your project for the card view on the homepage.",
    "content": "\n# Your Project Title\n\nProvide a detailed overview of your project here. To add images, place them in the `/public/images` directory and reference them like this:\n\n![A screenshot of the project](/images/your-project-image.png)\n\n## Project Goal\n\nExplain the purpose of the project and the problem it solves.\n\n## Key Features\n\n- Feature A: Description of the feature.\n- Feature B: Description of the feature.\n- Feature C: Description of the feature.\n\n## Technical Details\n\nDescribe the architecture, technologies used, and any interesting technical challenges you overcame.\n",
    "contentHtml": "<h1>Your Project Title</h1>\n<p>Provide a detailed overview of your project here. To add images, place them in the <code>/public/images</code> directory and reference them like this:</p>\n<p><img src=\"/images/your-project-image.png\" alt=\"A screenshot of the project\"></p>\n<h2>Project Goal</h2>\n<p>Explain the purpose of the project and the problem it solves.</p>\n<h2>Key Features</h2>\n<ul>\n<li>Feature A: Description of the feature.</li>\n<li>Feature B: Description of the feature.</li>\n<li>Feature C: Description of the feature.</li>\n</ul>\n<h2>Technical Details</h2>\n<p>Describe the architecture, technologies used, and any interesting technical challenges you overcame.</p>\n",
    "image": "/images/your-project-image.png",
    "technologies": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite"
    ],
    "githubUrl": "https://github.com/yourusername/your-repo",
    "liveUrl": "https://your-project-live-url.com",
    "date": "2024",
    "category": "Web Application",
    "featured": false
  }
];

export const generatedAt = "2025-09-13T20:52:23.506Z";
