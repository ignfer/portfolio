---
title: "Why astro?"
description: "If the only tool you have is a hammer, you tend to see every problem as a nail. Discover the pros and cons that I've found during the migration of my portfolio site to astro."
lastModified: 07-08-2025
author: "Ignacio Fernández"
tags: [ "frontend","astro","markdown" ]
---

# Why astro?

By [Ignacio Fernández](https://www.linkedin.com/in/ignaciofern%C3%A1ndez/) | Last modified: 07-08-2025

> If the only tool you have is a hammer, you tend to see every problem as a nail.


After applying (and failing) to the [37Signals Junior Software Engineer job opening](https://www.linkedin.com/jobs/view/junior-rails-programmer-at-37signals-4203290317/) I had one
thing clear, I need to show my _current_ skills,
so I set myself to the task of rebuilding my portfolio with all the knowledge that I gathered after a whole year as a software.

After a few iterations, I've found myself with a pretty good and simple roadmap:

- ditch [yarn](https://yarnpkg.com/)(I don't know that I was thinking when I pick it either) and move to npm
- migrate from class-focused approach files to pre-built components like [Mantine](https://mantine.dev/) and if needed [Tailwind](https://tailwindcss.com/)
- add client-side routing using [React Router](https://reactrouter.com/)
- add processing for markdown components, maybe something like [vitepress](https://vitepress.dev/) or some library to support github-flavored markdown

Maybe not a _big_ list, but definitely not a small one either, so in the middle of this proccess, [Lucho](https://www.linkedin.com/in/victor-luciano-rosa-lasiu-418a5b197/) called
me and propose to me to start building simple landing page sites, he was abroad in Ibiza and was convinced that would be fun to try to contact some leads and try to close some
sells.

The plan was simple, create customizable templates that would be fast to setup and easily extensible, have some example projects and try to reach any interested clients.

I was in, I bought the domain and start creating the mailboxes, the logos, and of course, the templates.
That's when I recured to and old friend, [Astro](https://astro.build/),
I've used Astro before, but I haven't sat with it and trully wanting to learn, until now, it was always a tool to deliver a solution _fast_, pick
a [theme](https://astro.build/themes/), replace, customize, ship.

After a few days tailoring our first template I've realized, Astro has everything that I want for my porftolio

- Content focused approach, ideal for blogs
- Excellent SEO
- Routing out of the box
- Support for markdown
- Multilingual support

Of course, I've could stick to React and Vite, but _if the only tool you have is a hammer, you tend to see every problem as a nail._

It was an opportunity to seriously learn what Astro was capable of

---

### Sometimes you dont have to think that much, you could just use an opinionated framework

One of the things that I love as much as I hate about React is the lack of "rules", yes you have good practices of course, but no one stops you from writing your Components files
in
`kebab-case.tsx`, actually is how I prefer it!.

Is good to have choices, but sometimes if the problem is trivial and thousand persons solved it before you, maybe you could re-use something. There are cases in which re-inventing
the wheel is worth doing, creating a static blog template otherwise...

### Focus on the important

Once you have certain files and pretty straight forward configurations made, adding a new post for example is as easy as adding another .md file and start editing, is a literal
dream.
In just a few hours I've accomplished most of the tasks that I had planned, the heavy lifting is done, now I can focus in founding my tailwind classes, it really is the frontend
dream.
