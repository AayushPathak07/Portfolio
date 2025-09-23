# Vite + React + TypeScript Portfolio & Blog

This is a portfolio and blog website built with Vite, React, and TypeScript. It's designed to be easily customizable and to showcase your projects and blog posts. The content for the blog and projects is written in Markdown and is automatically converted to HTML and injected into the application.

## About the Project

This project serves as a personal portfolio and blog. It's a single-page application (SPA) that dynamically loads content from Markdown files. This approach allows for easy content management without the need for a complex Content Management System (CMS).

### Features

-   **React-based:** Built with the popular React library for a component-based architecture.
-   **Vite-powered:** Fast development and build times thanks to Vite.
-   **TypeScript:** for type safety and improved developer experience.
--  **Tailwind CSS:** for a utility-first CSS workflow.
-   **Static Content Generation:** Blog posts and project descriptions are written in Markdown and are automatically converted to HTML.
-   **Easy Content Management:** Simply add or edit Markdown files in the `blog/posts` and `projects` directories to update the website's content.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Usage

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will start the Vite development server and you can view the application at `http://localhost:5173`. The server will automatically reload when you make changes to the code.

### Building for Production

To create a production build of the application, run the following command:

```bash
npm run build
```

This command first runs the `generate-content` script to generate the `content.ts` file from your Markdown files, and then it creates a `dist` folder with the optimized and minified production-ready code.

## Content Management

### Adding a New Blog Post

1.  Create a new `.md` file in the `blog/posts` directory.
2.  Add the following frontmatter to the top of the file:
    ```markdown
    ---
    title: "Your Blog Post Title"
    excerpt: "A short summary of your blog post."
    author: "Your Name"
    date: "YYYY-MM-DD"
    readTime: 5
    category: "Technology"
    tags: ["react", "typescript", "vite"]
    image: "/public/images/your-image.png"
    featured: false
    ---

    Your blog post content in Markdown goes here.
    ```
3.  Run `npm run dev` to see your new blog post.

### Adding a New Project

1.  Create a new `.md` file in the `projects` directory.
2.  Add the following frontmatter to the top of the file:
    ```markdown
    ---
    title: "Your Project Title"
    excerpt: "A short description of your project."
    image: "/public/images/your-project-image.png"
    technologies: ["React", "TypeScript", "Vite"]
    githubUrl: "https://github.com/your-username/your-project"
    liveUrl: "https://your-project-live-url.com"
    date: "YYYY-MM"
    category: "Development"
    featured: true
    ---

    A more detailed description of your project in Markdown goes here.
    ```
3.  Run `npm run dev` to see your new project.

## Technologies Used

*   [Vite](https://vitejs.dev/)
*   [React](https://reactjs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Framer Motion](https://www.framer.com/motion/) for animations.
*   [React Router](https://reactrouter.com/) for routing.
*   [Remark](https://remark.js.org/) and [remark-html](https://github.com/remarkjs/remark-html) for Markdown to HTML conversion.
*   [Gray Matter](https://github.com/jonschlinkert/gray-matter) for parsing frontmatter from Markdown files.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
