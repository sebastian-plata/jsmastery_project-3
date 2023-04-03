# jsmastery_project-3 

Third Project: Fully Responsive Website with Modern UI/UX in React JS with Tailwind

# Setting up the dev environment

**Installing Vite-React**

In console run:

    npm create vite@latest

*Note: you can use 'npm create vite@latest ./' to install Vite in the current directory. However, it will prompt a question to delete existing files if the directory is not empty.*

Then run:

    npm install 

and,

    npm run dev 

to start the application server.

**Installing Tailwind CSS**

In console run:

    npm install -D tailwindcss postcss autoprefixer

and then:

    npx tailwindcss init -p

the '-p' flag creates a postcss file. 

After installation is complete you can edit "tailwind.config.js" to set up styles(customizations) such as: colors, font-families and media queries.

To learn more: https://tailwindcss.com/docs/configuration

*Note: It is required to install PostCSS language Support extension to prevent vsCode from flagging @tailwind rules as errors*

**Create a file to store static text**

For text that wont be changed it is convenient to store it in a "index.js" file to later call them inside the JSX elements. Although, static text is not usually changed if one wanted to do so it'll be much efficient because you need just edit the object inside "index.js" to change any and every instance of that same text. 

Having static texts stored like this will allow you to *map()* them instead of waste time writting them down every time, one by one.

Additionally, this will help non code savvy people to easily edit their webpage/application by editing directly in "index.js" instead of facing code.


# What I learned from the Navbar component

Baby steps into learning tailwind CSS. It looks like you apply CSS rules through class names, rather than CSS blocks. That explains *why* none of the components need an .css file. 

It definitely seems faster but its a bit confusing due to the syntax. It will take time to get used to use the "className" attribute to apply styles.

    <ul className="list-none flex flex-col justify-end items-center flex-1">
    {navLinks.map((nav, index) => (
    <li
    key={nav.id}
    className={`font-poppins font-normal cursor-pointer text-[16px] ${
      index === navLinks.length - 1 ? "mr-0" : "mb-4"
    } text-white mr-10`}
    >
    <a href={`#${nav.id}`}>{nav.title}</a>
    </li>
    ))}
    </ul>

**Time stamp: 7:16:00**