# Andrew Martin | Nextjs Portfolio


This is my personal portfolio website built with Next.js, showcasing information about myself. It includes sections for about, projects, skills, experience, and a contact form. Project deployed on Vercel.

[View Live Demo](https://andrewmartin-portfolio-tau-azure.vercel.app/)

## Screenshots
Homepage light
![nextjs-portfolio-header](https://github.com/user-attachments/assets/e9838195-b839-475f-814d-6b72f99a277e)

Homepage dark
![nextjs-portfolio-header-dark](https://github.com/user-attachments/assets/ca0d2d5d-61fd-4030-9222-20517553e533)

Projects section
![nextjs-portfolio-projects](https://github.com/user-attachments/assets/b6074474-d903-4fd9-ac1b-e5454a42e00b)

Skills section
![nextjs-portfolio-skills](https://github.com/user-attachments/assets/0a7dab88-ba2a-4a01-8af3-bf73fd7758dd)


## Technologies Used

- [Next.js](https://nextjs.org/): React framework for server-side rendering and static site generation.
- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- [TypeScript](https://www.typescriptlang.org/): A superset of JavaScript that adds static typing.
- [Framer Motion](https://www.framer.com/motion/): Animation library for React.
- [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer): React implementation of the Intersection Observer API for handling viewport-based triggers.
- [React Hot Toast](https://react-hot-toast.com/): Library for creating customizable toast notifications.
- [React Icons](https://react-icons.github.io/react-icons/): A library containing popular icons for React projects.
- [React Email Components](https://react-email-components.dev/): Library for building email templates with React.
- [Resend](https://resend.com/): API for sending transactional emails.
- [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component): React component for creating vertical timelines.

## Project Features

- **Dynamic Navigation:** The website includes a dynamic navigation menu that updates based on the active section, providing a seamless user experience.
- **Animated Sections:** Integrated animations using for smooth transitions and scroll-based animations.
- **Light and Dark Mode:** The website supports light and dark themes.
- **About, Projects, Skills, and Experience Sections:** Comprehensive sections showcasing information on projects, skills, and professional experience.
- **Contact Form:** A fully functional contact form powered by Resend and React Email for handling form submissions.

## Project Outcomes

- **Understanding Key Next.js concepts:** Gained hands-on experience with Next.js 14, including its features such as the app directory, server actions, and integration with React.
- **Development with TypeScript:** Understanding and defining typesafte data and integrating it with react components.
- **Dynamic Theming and Context Management:** Implemented a light and dark mode feature, learning how to manage themes using local storage and React Context API by centralizing global application state and providing/consuming the state accross the application using context providers and custom hooks.
- **Advanced Animation Techniques:** Applied Framer Motion for animations and React Intersection Observer for scroll-based effects, enhancing user interaction.
- **Contact Form Submission:** Successfully integrated Resend and Nextjs Server Action to handle form submissions and customizing email template using React Email.
- **Responsive Design Skills:** Enhanced skills in creating responsive designs, ensuring that the website performs well across different devices and screen sizes.

## Project Setup

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To get started with this Next.js portfolio site, follow these steps:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 2. Install Dependencies

Install the project dependencies using Yarn:

```bash
yarn install
```

### 3. Create Environment File

Create a .env.local file in the root directory of the project to store your environment variables. Add your Resend API key as follows:

```bash
RESEND_API_KEY=your-resend-api-key
```

Replace your-resend-api-key with your actual API key from Resend.

### 4. Run the Development Server

Start the Next.js development server:

```bash
yarn dev
```

The application will be available at http://localhost:3000.

### 5. Build for Production

To build the project for production, run:

```bash
yarn build
```

### 6. Deploy the Project

For deploying the project, use the following command:

```bash
yarn run deploy
```
