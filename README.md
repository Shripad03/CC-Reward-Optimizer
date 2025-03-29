To Watch a Live Demo

🔍  Inspect: https://vercel.com/shreepad-avhads-projects/cc-rewards-optimizer-with-ai/8AwVmG9DWkpjw1rZ5gehMn56ozBF \n
✅  Production: https://cc-rewards-optimizer-with-3bmlf0xsx-shreepad-avhads-projects.vercel.app \n
📝  Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F)

**How to Run This Project Locally....**

Here's a step-by-step guide to set up and run the AI-powered credit card rewards optimization app on your local machine:

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)
- Git (optional, for version control)


## Step 1: Create a New Next.js Project

First, create a new Next.js project with the App Router:

```shellscript
npx create-next-app credit-card-rewards-app
```

When prompted, select the following options:

- Would you like to use TypeScript? → Yes
- Would you like to use ESLint? → Yes
- Would you like to use Tailwind CSS? → Yes
- Would you like to use `src/` directory? → No
- Would you like to use App Router? → Yes
- Would you like to customize the default import alias? → Yes, use @/* for imports


## Step 2: Install Required Dependencies

Navigate to your project directory and install the necessary dependencies:

```shellscript
cd credit-card-rewards-app
npm install lucide-react @radix-ui/react-slot @radix-ui/react-tabs @radix-ui/react-progress @radix-ui/react-separator @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-radio-group @radix-ui/react-select @radix-ui/react-avatar class-variance-authority clsx tailwind-merge
```

## Step 3: Set Up shadcn/ui Components

Install the shadcn CLI:

```shellscript
npm install -D @shadcn/ui
```

Initialize shadcn/ui:

```shellscript
npx shadcn init
```

When prompted, select the default options.

Now install the required UI components:

```shellscript
npx shadcn add button card tabs progress badge avatar dialog dropdown-menu label radio-group select separator
```

## Step 4: Copy the Project Files

1. Create the necessary directories:


```shellscript
mkdir -p components app/api/rewards app/api/transactions app/api/recommendations app/api/user app/cards app/rewards
```

2. Copy the code from each file in the project into the corresponding files in your local project. Make sure to create each file with the exact path shown in the code blocks.


## Step 5: Run the Development Server

Start the development server:

```shellscript
npm run dev
```

This will start the Next.js development server, typically on port 3000.

## Step 6: Access the Application

Open your browser and navigate to:

```plaintext
http://localhost:3000
```

You should now see the dashboard of the credit card rewards optimization app.

## Project Structure

Here's an overview of the key files and directories:

```plaintext
credit-card-rewards-app/
├── app/
│   ├── page.tsx                  # Main dashboard
│   ├── cards/
│   │   └── page.tsx              # Credit cards page
│   ├── rewards/
│   │   └── page.tsx              # Rewards page
│   └── api/                      # API routes
│       ├── rewards/
│       ├── transactions/
│       ├── recommendations/
│       └── user/
├── components/
│   ├── rewards-summary.tsx
│   ├── credit-card-list.tsx
│   ├── recent-transactions.tsx
│   └── recommended-cards.tsx
└── public/
```

## Additional Development Tips

1. **Customizing the UI**: You can modify the Tailwind configuration in `tailwind.config.js` to change colors, fonts, and other design elements.
2. **Adding Real Data**: Replace the mock data in the API routes with real data from your database or external APIs.
3. **Authentication**: Implement authentication using NextAuth.js or a similar library to secure user data.
4. **Database Integration**: Connect to a PostgreSQL database using Prisma or another ORM to store and retrieve user data.
5. **AI Integration**: Implement the OpenAI API for the recommendation engine as described in the project requirements.
6. **Mobile Responsiveness**: The UI is already responsive, but test on various device sizes to ensure a good experience.
7. **Deployment**: When ready, deploy to Vercel for the best Next.js hosting experience:

```shellscript
npm install -g vercel
vercel
```

This project provides a solid foundation for the credit card rewards optimization app. You can continue building on it by implementing the backend functionality, AI recommendations, and additional features as outlined in your project requirements.
