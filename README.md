## How to start the application

1. Install Docker Desktop
2. Enter the project root directory and run "docker-compose up -d --build"
3. Go to "http://localhost:3000"

## Website Structure

- Header & Footer (Nina)

- Main Page (Amber)

- Team (Vian)

- Performances & Past Classes (Vian)

- Events (Vian)

## Meeting Schedule

Thursday - 12pm (Nina), 2pm (Vian and Amber)

## Assests

[Team Cool Members Bio](https://docs.google.com/spreadsheets/d/1hc4pCpTPSeSfhhpOfx_QUp473Pjtu0hQKs0hZIrGRrE/edit?usp=sharing)

[Members Pictures](https://drive.google.com/drive/folders/1PJsJJzpfdbaGrp6xYVPbLjbJ_-DMwwZJ)

Past Performances

- [REACH 2023](https://www.youtube.com/watch?v=z1yt9heh8zA)
- [New Jeans OMG](https://www.youtube.com/watch?v=P46FPSGg_wY)
- [TWICE (트와이스) ''Talk that Talk"](https://www.youtube.com/watch?v=q_ls6QFjI7k)
- [Attention](https://www.youtube.com/@casuallycooldance9736/videos)
- [Lil Jon "ALIVE" ft. Offset & 2Chainz](https://www.youtube.com/watch?v=D_Ijr8iD6VI)
- [BLACKPINK (블랙핑크) ShutDown](https://www.youtube.com/watch?v=0R1X41eIAyE)

Past Classes

- [2023 CCDC Recital](https://www.instagram.com/reel/Cq19sOmsxNe/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==)
- [Original Choreo by YiHong Liu](https://www.instagram.com/p/Cke4chTPD9L/)
- ["Ditto" - NewJeans](https://www.youtube.com/watch?v=veorxMADmxY)
- ["MOONLIGHT SUNRISE " - TWICE](https://www.youtube.com/watch?v=G4sA_d-5YJg)

## Bugs

After adding new dependencies to the project using "npm install", try to use "docker-compose up" restart containers, dependencies does not show up.

- should use "docker-compose up -d --build" command instead
- When you add new dependencies to your project using "npm install", it modifies your project's package.json file
- The --build flag ensures that Docker Compose rebuilds any images that have changes in their build context (such as changes to your Dockerfile or changes in dependencies like package.json).

Tailwind does not work

- tailwind.config.js is not configured correct, should use this [link](https://tailwindcss.com/docs/guides/create-react-app)

Don't know how to send child component click event to its parent

- define state and a function in the parent component
- pass the function as props to the child component
- add onClick event to elements in the child component. When these elements get clicked, they trigger the function of the parent component
- The functioj gets passed determines parameters that are passed through ("Audition", "Class Trail", etc.) and resets the state

Change cursor to clickable element

```
<a href="#" class="cursor-pointer">
    <img src="your-image-source.jpg" alt="Your Image" class="block w-full h-auto" />
</a>
```
