![amazon-clone](https://amazon-clone13.vercel.app/amazon-clone-img.png)
# Amazon Clone with Stripe Payment Method

This project is a clone of the Amazon website with Stripe payment method integration. It also includes user login using Next Auth, Server-Side Rendering (SSR) using Next.js, Firebase Admin for server-side functionality, Tailwind CSS for styling, and Redux for state management.

## Getting Started

To get started with this project, follow the steps below:

- Clone the repository
- Rename the .env.example file to .env.local
- Obtain a Google ID and Google secret from cloud.google.com and add it to your .env.local file
- Create a random Next secret and add it to your .env.local file
- Create a Stripe account and get a public key and secret key, then add them to your .env.local file
- Add the URL to cloud.google.com.
- Start the server by running `npm run dev` in your terminal
- Install Stripe CLI and run stripe `listen --forward-to localhost:3000` in a new terminal window
  Obtain the STRIPE_SIGNING_SECRET and add it to your .env.local file.
- Open the application at http://localhost:3000 in your browser

## Technologies Used

    Next.js
    Stripe Payment Method
    Next Auth
    Firebase Admin
    Tailwind CSS
    Redux

## Contributors

- Your Name

If you would like to contribute to this project, please feel free to fork the repository and submit a pull request with your changes. We welcome any contributions, including bug fixes, new features, and documentation improvements.

Please make sure to adhere to the code standards and guidelines established in the project. Also, ensure that your changes are well-tested and do not introduce any breaking changes.

Thank you for your interest in contributing to this project!
