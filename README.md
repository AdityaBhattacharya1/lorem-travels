<p align="center">
<img src="https://github.com/AdityaBhattacharya1/lorem-travels/blob/vanilla-js-ver/Images/Lorem-Travels-Demo.png" alt="Lorem Travels website demo" align="centre" />
</p>

# Introduction

This is a responsive sample travel agency website named 'Lorem Travels' (named after the sample cliche of 'lorem ipsum').

# Technologies used

The technologies used are:

-   HTML5
-   CSS3
-   Vanilla JavaScript
-   Workbox (PWA)

# Features

-   The website is downloadable across all devices and can be used offline (when cloned on host device, it is completely self sustaining, else it will continue to function but will break when the application is reloaded).
-   📱 Responsive and mobile-friendly. Some elements differ between mobile and desktop for better accessibility and performance.
-   If one were to use this website, minor but customisable user data-collection services from Google are provided (Google's Analytics.js).
-   Customised scrollbar (optional).
-   🌙 Dark mode (toggleable).
-   📷 Sample images provided (one can change them, of course).
-   Completely customisable (from the colour palette to the UI design).
-   🔃 Pre-loader - animation plays before the page loads.

# Optional Features

-   The analytics provided by Google (as Analytics.js) can be accessed by un-commenting the code (lines 242-265 of app.js)
    -   Relevant links are provided. For complete documentation, visit the [Official Google Analytics Website](https://ga-dev-tools.appspot.com/).
    -   You can access the analytics [here](https://ga-dev-tools.appspot.com/account-explorer/).
-   The scrollbar of the webpage (changes in both `light-mode.css` and `dark-mode.css`) can be altered for better accessibility by removing the relevant CSS styles from both `light-mode.css` and `dark-mode.css` (lines 36-43)
-   Change relevant data of the website (text, favicon, map-location, phone-number and other details)
-   Add or remove social media links from the 'Contact Us' section (the section is commented in `index.html`).
-   Enable the pre-loader by un-commenting the relevant sections from `index.html`, `light-mode.css` and `app.js`.
-   ## Security:
    If you intend on making the form provided in the website functional, do make sure to **sanitise all inputs, mention the request type, use CSRF tokens and all other relevant things**. For more information, visit [CSS Tricks' website](https://css-tricks.com/serious-form-security/).

## To Clone The Website

```
git clone https://github.com/AdityaBhattacharya1/Travel-Agency-Sample

// Once cloned, you can start the webapp on localhost by:
cd Sample-Travel-Agency
npx serve

```

<h4 align="center">OR</h4>

1. On GitHub, navigate to the main page of the repository.
2. Above the list of files, click `↓ Code`.

    ![Github 'Download Code' Button](https://docs.github.com/assets/images/help/repository/code-button.png)

3. You can either click on **Open with Github Desktop** to clone the website and open it in Github Desktop _or_ click on **Download ZIP** to download the files in _.zip_ format. You can then extract the files.

# Live Demo

-   [Lorem-Travels](https://vanilla-lorem-travels.netlify.app/)
