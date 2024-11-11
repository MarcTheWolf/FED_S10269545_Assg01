# __<u>FED_S10269545_Assg01</u>__ (By: Marcus Ong)
## Webflux, Movie Streaming Website (Inspiration from Netflix, Disney+)


## Table of Contents

- [About Project](#about-project)
- [Design Process](#design-process)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Credits](#credits)


## About Project
This website is made to imitate the well known streaming websites/companies like Netflix and Disney+. The website will focus on providing a clean and intuitive interface, where users can easily search for content. 

Features like animated backgrounds and scroll-triggered content transitions will make the platform visually engaging, similar to the interactive elements used by leading streaming services.

The website’s design will be inspired by the clean, minimalist aesthetic commonly found in streaming platforms like Netflix and Disney+. Large visuals, easy-to-read typography, and dynamic content will be used to showcase content effectively.

## Design Process
When you think about Movies or Drama Series, most people would think of Netflix, or maybe even Disney+. But isnt there many other streaming websites? Free ones even. "Hulu", "123Movies", "AZMovies" - Just to name afew. With that many competitors, why? or rather - how? - is Netflix the most well known among them. 

### 1.__<u>Research and Discovery</u>__
  - __Competitive Analysis__: Studying the design, features, and user interface of established streaming platforms such as Netflix, Disney+, Amazon Prime, and Hulu. Key takeaways include the use of grid layouts for content, large visuals, personalized recommendations, and seamless navigation.
  
 - __User Personas__: Creating detailed user personas to understand the target audience’s needs, preferences, and pain points. For example, we might have personas like "Tech-Savvy Teenagers," "Busy Professionals," and "Families." This helps define the user experience (UX) and interface (UI) design in a way that appeals to these groups. For this project, I want the website to heavily appeal to those of the "Tech-Savvy" persona. Meaning that the experience has to be intuitive, as well as cutting edge for this group of people to enjoy.


### 2. __<u>Wireframing and Prototyping</u>__
  - __Low-Fidelity Wireframes__: Creating basic wireframes with simple shapes and annotations to represent key UI elements like the navigation bar, content grids and  search bar. These wireframes help define the website’s layout and functionality without focusing on aesthetic details.

### 3. __<u>Visual Design and Branding</u>__
  - __Color Palette and Typography__: Selecting a color scheme and fonts that are modern, clean, and easy to read. For this website, I have decided to go for a black, white and blue aesthetic.

  - __Imagery__: Since streaming websites rely heavily on visuals to promote content, high-quality images and icons are important. Background images, movie posters, and promotional banners will be used to make the content stand out.

  - __Animation and Interaction Design__: Smooth animations and interactive elements like hover effects, scroll-triggered animations, and content transitions are incorporated to engage users. These dynamic effects make the user experience more enjoyable, which is important as the purpose of a movie stremaing website is to attract viewers.

## Features
### List Of Features
Existing
- [Preloader](#css-animated-preloader)
- [Animated Navigation Bar](#css-animated-navigation-bar)
- [Scroll Interactive Background](#js-scroll-interactive-animated-background)

WIP
### __<u>Existing</u>__

### __CSS Animated Preloader__

#### Why?
- A preloader improves user experience by providing a visual indication that a webpage is loading. This helps prevent users from thinking the page is broken. This is especially important when the page consists of many components.

#### How was it done?
- Using CSS attributes to create shapes and movement.
- A `no-scroll` class was added to the body, which limits the user's viewport to only show the preloader page.
- Other elements will not show without the `visible` class.
- On page load, JavaScript retrieves the corresponding elements that need to be shown and applies the related classes to them.

### __CSS Animated Navigation Bar__

#### Why?
- Animated navigation bars can make a website feel more interactive and dynamic. Smooth animations catch the user’s attention and make the navigation process more engaging.
- Animations give users immediate visual feedback. For example, a hover effect on navigation links can make it clear to users that they are interacting with an element, which helps make the interface more intuitive.

#### How was it done?
- Using a project from [Sarath AR @ Codepen.io](#credits) as a reference.
- Implemented transitions for the navigation bar after the preload completed.


### JS Scroll-Interactive Animated Background

#### Why?
- More of a "Design Choice", giving the website a modern, clean look. Feedback from scrolling, as well as the smooth transition, also contribute to the overall appeal of the website.
- Marketing Benefit

#### How was it done?
- The background video was modeled by me using [Blender](#technologies-used) (I know it's not the best, but it served its purpose).
- Originally, I was going to use the rendered 3D video as the background, but quickly realized that the video didn’t work well with the scroll bar (the animation was too rough). So, using a [thread from GSAP.com](#credits) I found online, I managed to find a way to make smoother animations.
- The method was to use a canvas and replace the image as the user scrolls, or as the animation plays. This method (is said to) have been used by large companies such as Apple to display their 3D models/products.


### WIP

## Technologies Used

## Testing

## Credits

- <h3><u>CSS Animated Navigations Bar</u></h3>

  - Sarath AR @ Codepen.io
    
    - https://codepen.io/sarath-ar/pen/MveqXe

- <h3><u>JS Scroll-Interactive Animated Background</u></h3>

  - Thread @ GSAP.com

    - https://gsap.com/community/forums/topic/29900-scroll-to-control-video-position/