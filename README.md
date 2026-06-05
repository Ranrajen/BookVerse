BookHive — Frontend E-Commerce Platform

BookHive is a fully responsive, multi-page digital bookstore platform built using standard frontend web technologies. The project serves as an online storefront where users can discover books, filter through genres, manage a running shopping cart, and simulate account management workflows.
Core Project Features

⦁ Dynamic Client Engine: Includes an automated home page welcome greeting that adjusts dynamically based on the user's local system clock time.
⦁ Catalog Search & Sorting Matrix: A searchable catalog interface allowing real-time character matching against book titles or author names, alongside low-to-high/high-to-low price sorting hooks.
⦁ Granular Details & Volume Controls: Dedicated product deep-dive displays that render overall ratings, structured reviews, promotional discount math, and adjustable quantity multipliers.
⦁ State-Persistent Shopping Cart: A localized checkout pipeline utilizing the browser's LocalStorage API to preserve selected items, quantites, and structural sub-totals across user refreshes.
⦁ Authentication & Validation UI: Dedicated sign-up and login layouts built with integrated client-side form validation rule checks and an interactive password visibility mask toggle.
⦁ Persistent Theme Core: An explicit, single-click global Light/Dark mode selector button with settings saved directly via local storage parameters.

Project File Architecture:

BookHive/
├── index.html  
├── books.html  
├── book.html  
├── cart.html  
├── login.html  
├── signup.html  
├── about.html  
├── contact.html  
│
├── css/
│ ├── style.css  
│ ├── home.css  
│ ├── books.css  
│ ├── form.css  
│ ├── cart.css  
│ └── responsive.css  
│
└── js/
 ├── main.js  
 ├── books.js  
 ├── cart.js  
 ├── cart-page.js  
 ├── password-toggle.js  
 ├── search.js  
 ├── login.js  
 └── signup.js

Local Installation & Deployment

1. Download the Repository Files
2. git Bash
3. git clone https://github.com/Ranrajen/BookVerse.git
4. Open Project Folder Launch your preferred code editor (such as Visual Studio Code) and select the main root directory file path.
5. Execute the Application Open index.html directly inside any desktop browser profile, or alternatively right-click inside your editor workspace window and choose Open with Live Server to launch a local development connection.
