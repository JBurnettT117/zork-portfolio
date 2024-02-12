import React from "react"

const Resume = () => {
    return (
        <body>

            <header>
                <h1>Joshua Burnett</h1>
                <p>Full Stack Web Developer | Software Engineer</p>
                <p>Fort Worth, TX | 817.575.9610 | joshuaburnett429@gmail.com | <a href="https://github.com/JBurnettT117" target="_blank" rel="noreferrer">GitHub</a> | <a
                        href="https://www.linkedin.com/in/joshua-burnett-883054157/" target="_blank" rel="noreferrer">LinkedIn</a></p>
            </header>

            <section id="technical-skills">
                <h2>TECHNICAL SKILLS</h2>
                <p><strong>Front End:</strong> React.js, Redux, Hooks, Context API, Figma, Jest, Cypress, Yup, Axios, JavaScript,
                    Typescript, HTML and CSS</p>
                <p><strong>Back End:</strong> Node.js, Python, GitHub, VS Code and Vercel</p>
                <p><strong>Additional:</strong> Agile Project Management, Algorithms, Architecture, Debugging and Deployment</p>
            </section>

            <section id="projects">
                <h2>PROJECTS</h2>

                <article>
                    <h3>Asylum-rg-fe, Front End Development</h3>
                    <p><a href="https://github.com/JBurnettT117/asylum-rg-fe-starter" target="_blank" rel="noreferrer">GitHub</a></p>
                    <ul>
                        <li>A search tool to help users sort through an extensive database of asylum decisions including real time visualizations,
                            graphs, and heatmaps</li>
                        <li>Implemented authorization using  Auth0 to verify users and create a protected profile page with user 
                            information</li>
                        <li>Setup a conditional fetch request with error handling for retrieving data based on different selectors 
                            and populating graphs, charts, and maps with appropriate data</li>
                    </ul>
                </article>

                <article>
                    <h3>Async Redux, Full Stack Developer</h3>
                    <p><a href="https://github.com/JBurnettT117/web-module-project-async-redux" target="_blank" rel="noreferrer">GitHub</a></p>
                    <ul>
                        <li>Built async redux application to fetch data from a Giphy API based on a search query to display
                            optional GIFs</li>
                        <li>Implemented asynchronous data fetching with Axios, ensuring a smooth user experience by dispatching
                            actions such as "FETCH_START" and "FETCH_SUCCESS" to indicate loading status and successful data
                            retrieval</li>
                        <li>Configured API data inside of a redux store with reducers to manage state, maintain GIF collection,
                            and handle errors</li>
                    </ul>
                </article>

                <article>
                    <h3>Pizza Store, Full Stack Developer</h3>
                    <p><a href="https://github.com/JBurnettT117/web-sprint-challenge-single-page-applications/tree/675b65c380dc30e4537d205b4eec0bc8453873a3" target="_blank" rel="noreferrer">GitHub</a></p>
                    <ul>
                        <li>Built a React platform to process customizable online food order fulfillment and delivery</li>
                        <li>Developed 5+ dynamic forms using JavaScript to process and display a list of available food item
                            selections</li>
                        <li>Created the landing page and main web application user interface using HTML, CSS, and Yup user
                            authentication</li>
                    </ul>
                </article>

            </section>

            <section id="experience">
                <h2>EXPERIENCE</h2>

                <article>
                    <h3>Empire Title, Addison, TX - Escrow Assistant</h3>
                    <p>2020 - 2022</p>
                    <ul>
                        <li>Collaborated on a team of 5+ members and streamlined closing process for 350+ homes per month new
                            home buyers</li>
                        <li>Streamlined workflow by removing redundant tasks to accomplish 3x the work expected within given
                            timelines</li>
                        <li>Utilized communication platforms to facilitate contract agreements between different real estate
                            parties</li>
                    </ul>
                </article>

                <article>
                    <h3>Heritage Church of Christ, Fort Worth, TX - Contract Building Liaison</h3>
                    <p>2020 - 2021</p>
                    <ul>
                        <li>Organized events, resource allocation, and required building maintenance services</li>
                        <li>Coordinated requested accommodations when hosting specialized small and large group events</li>
                        <li>Provided assistance with building management, renovations, and repair work orders</li>
                    </ul>
                </article>

            </section>

            <section id="education">
                <h2>EDUCATION</h2>
                <p><strong>BloomTech, Full Stack Web Development Program Graduate</strong></p>
                <p>2022 - 2023</p>
                <p><strong>Lubbock Christian University, Bachelor of Arts in Criminal Justice</strong></p>
                <p>2015 - 2019</p>
            </section>

        </body>
    )
}

export default Resume;