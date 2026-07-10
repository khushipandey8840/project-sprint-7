# project-sprint-7# Multi-Step Onboarding Wizard

A React-based multi-step onboarding form that collects user information in three steps using **React Hook Form** and **Zod** for validation.

## Features

- Multi-step form (3 steps)
- Progress bar
- Next & Back navigation
- Data persistence between steps
- Live form validation
- Show/Hide password
- Review before submission
- Success message after submission
- Form submission logged to the console

## Tech Stack

- React
- Vite
- React Hook Form
- Zod
- CSS

## Project Structure

```
src/
├── components/
│   ├── ProgressBar.jsx
│   ├── PersonalInfo.jsx
│   ├── AccountDetails.jsx
│   ├── Review.jsx
│   └── Success.jsx
├── schema/
│   └── formSchema.js
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

```bash
npm install
npm install react-hook-form zod @hookform/resolvers
npm run dev
```

## Validation Rules

- Name: Minimum 2 characters
- Email: Valid email format
- Username: Minimum 3 characters
- Password: Minimum 8 characters

## How It Works

1. Enter Personal Information.
2. Enter Account Details.
3. Review all information.
4. Submit the form.
5. A success message is displayed and the submitted data is logged to the browser console.

## Author

Sakshi Pandey
