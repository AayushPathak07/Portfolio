---
title: "From Homelab to Production: How I Built an On-Prem DevOps & IT Foundation"
excerpt: "A deep dive into how I transformed Kidcentral Supply’s IT and DevOps environment using lessons from my homelab."
date: "2025-09-04"
readTime: 6
author: "Aayush Pathak"
category: "Case Study"
tags: ["DevOps", "Infrastructure", "Automation", "Digital Transformation", "On-Prem"]
image: "images/Kidcentral_DevOps/blog-cover.png"
featured: true
slug: "from-homelab-to-production-devops-foundation"
---

# From Homelab to Production: How I Built an On-Prem DevOps & IT Foundation

## Introduction

When I joined Kidcentral Supply as an intern in 2023, the IT setup was lean and heavily outsourced. Most systems were SaaS subscriptions, development work was handled by vendors, and the internal IT team’s role was mainly about supporting the ERP and running queries when managers needed data.

For a company that isn’t primarily a software business, this made sense. IT spend wasn’t tied directly to revenue, so the thinking was simple: why build when you can buy?

But my background was different. I had spent years tinkering in my homelab — setting up servers, breaking and fixing virtual machines, experimenting with different ways of automating tasks, containerizing services, and figuring out how to monitor them. That experience wasn’t theoretical. It was practical training.

The real question was: could I bring those lessons into a production environment?

---

## TLDR

I started by proving that ERP data could be securely extracted and used for internal tools. That proof of concept led to approval for a modest on-prem server. I set up virtualization, a proxy layer, and a foundation for internal services.

Over time, I layered in containerized deployments, automated scheduling, external monitoring, and incident management integrated into existing team tools. I built services that powered secure dashboards with live operational insights.

Finally, I replaced costly outsourced integrations with an internal system that could be deployed in minutes.

The results: cost savings, faster deployments, live dashboards for managers, and a cultural shift from “buy first” to “try to build first.”

![Before vs After IT/DevOps](/images/Kidcentral_DevOps/kidcentral_visual1.png)

---

## Step 1: Proof of Concept

The first breakthrough was showing that ERP data could be securely tapped and used to build custom tools. Instead of being limited by what the ERP offered, we could extend it.

I built a simple proof of concept that turned raw database queries into a small internal tool with real business utility. That demo showed leadership we weren’t talking theory — we were talking immediate value.

It was enough to justify investing in a modest server for on-prem experiments. That small step changed everything.

---

## Step 2: Standing Up Infrastructure

The new server became the foundation. I installed a hypervisor to run multiple isolated services side by side. Virtual machines let me separate workloads while still running on one piece of hardware.

On top of that, I set up a proxy layer. This handled routing requests, securing connections, and making sure multiple apps could live behind a single public entry point. With this in place, the infrastructure could grow without constantly needing new IPs or DNS changes.

It wasn’t huge. But it was stable, expandable, and ours.

---

## Step 3: Deployments and Automation

At first, applications were simple services running directly on the server. That worked, but it wasn’t flexible. So I began containerizing apps, making them portable and easier to manage.

As the environment grew, I added a lightweight management layer that made it possible to spin up new services or redeploy existing ones in minutes. No more waiting on external vendors for every change.

Automation was another layer. Scheduled jobs handled recurring tasks, while event-driven triggers responded to real-world signals like incoming orders or updated data. The system went from manual to largely self-sufficient.

![Infrastructure Flow](/images/Kidcentral_DevOps/kidcentral_visual2.png)

---

## Step 4: Monitoring and Incident Management

Reliability became the next challenge. If infrastructure is invisible when it works, it’s painfully visible when it fails.

I set up external monitoring so that even if our internal systems were offline, the status page stayed up. This gave leadership visibility and gave IT a way to show transparency.

I also tied incident reporting directly into the tools the team already used every day. If something broke, they didn’t need to learn a new incident system — they could report, update, and close issues from inside their normal workflow. That cut response times dramatically and reduced friction.

---

## Step 5: Custom Apps and Integrations

With the base infrastructure in place, I built internal services that exposed ERP and operational data securely. These powered a company-wide dashboard that anyone with the right permissions could use.

Instead of waiting hours or days for someone to pull data and email it, managers could open a dashboard and see live targets, sales, and projections instantly. Access was restricted with domain accounts and role-based permissions, so data stayed protected.

The next step was integrations. Previously, e-commerce to ERP integrations were outsourced. They cost tens of thousands of dollars and took months to deliver. I built a reusable internal system where new integrations could be deployed in minutes. This eliminated massive vendor costs and gave us full control.

---

## Results

Cost savings were immediate. We cut recurring contracts, transaction fees, and vendor support retainers.

Deployment times dropped from months to days, sometimes hours.

Support times went from six hours to minutes. My record production fix took thirty seconds.

Managers had real-time dashboards instead of emailed SQL reports.

And the culture shifted. The default wasn’t “what do we buy,” it was “can we build this ourselves?”

![Results Summary](/images/Kidcentral_DevOps/kidcentral_visual3.png)

---

## Lessons Learned

Small proofs of concept can change everything.

Experiments in a homelab directly translate to production when you apply them with discipline.

Real-time dashboards don’t just save time — they change how leaders make decisions.

Templates and repeatability are the real foundation of speed.

People adopt tools faster when those tools live inside apps they already use.

---

## What’s Next

The foundation is solid, but there’s more to do.

Future improvements include moving to Git-driven deployment pipelines with artifact verification, expanding observability with metrics and tracing, and centralizing secret management. Some scheduled jobs should graduate to an orchestrator for reliability.

I also want to run failure drills so recovery times are predictable, not just fast. And eventually, we’ll look at progressive deployment strategies for critical services to further reduce risk.

---

## Conclusion

This project proved something important. Innovation doesn’t always come from big budgets or big vendors. It comes from curiosity, persistence, and the willingness to turn small experiments into production systems.

At Kidcentral Supply, homelab lessons became real-world impact. Costs went down, speed went up, and data became instantly available. The company became more resilient and more self-reliant.

If you’re at a small or mid-sized business wondering whether it’s worth building internally, the answer is yes. Start small. Prove value. Scale step by step.

And if you’re curious about the details of how I did it, reach out. I’d be happy to share more.
