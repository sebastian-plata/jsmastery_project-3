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

# What I learned from the Navbar section

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

# What I learned from the Hero section

Correctly distributing blocks for content into div (or other HTML element) is very important to stay consitent with the layout design. Having a clear understanding on *what goes where?* and *who is inside what?* allows you to assign styles through classes (Tailwind CSS) more easily.

You can look up any class name here: https://tailwindcss.com/docs 

To see what it does, though it is very self-explanatory.

Also, you can input className value to be dynamic to insert pre-set style rules like they come from an object. like this:

     <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}></div>

Template strings allow you to combine strings and dynamic bits of codes to assign style rules to an element.

The above example is applying:

    flex : 1;
    display: flex;
    for medium devices margin-y: 0;
    generally,
    margin-y: 10;
    position: relative;

The contents of styles.flexCenter are:  
    
    display: flex;
    justify-contents: center; 
    align-items: center;

The number values in "my-10" refer to a percentage in em equivalent to 25% of the value. So "my-10" will apply 2.5em margin top/bottom.

**Time stamp: 7:39:00**

# What I learned from the Stats section

*Tailwind drills* 

**Time stamp: 7:44:00**

# What I learned from the Business section

This section really highlights how important it is to plan ahead and structure the contents of the website *before* coding. Pre-creating styles and having them stored in a "index.js" file which will be imported when needed in any component allows us to write cleaner code, particularly while working with Tailwind.  

**Time stamp: 7:58:00**