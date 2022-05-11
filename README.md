# Project Sprout for Informatics Capstone 2022 - Team GameUnity 

## Purpose
### Problem Statement
How might 1st-3rd grade teachers in Washington State engage their students in learning about the gardening process so that their students can understand the impact agriculture has on the environment?

### Project Information Overview
The ongoing COVID-19 pandemic has caused decreasing public elementary school student engagement yet increasing comfortability of low-quality online teaching. This is contributing to falling student reading capability and teachers' lack of incentive to challenge their students further through the incorporation of a science curriculum, leaving students underprepared to handle the increase in greener initiatives. To address these informational gaps, Sprout aims to deliver elementary school students from grades 1-3 an interactive web-based storybook that introduces environmental education while increasing reading proficiencies by incorporating elements of both the English Language Arts Common Core (vocabulary, comprehension, inference, etc.) and Next Generation Science Standards (plant lifecycle, ecosystems, energy, etc.).

## Research
### Key Insights
1) There is a dramatic decrease in reading capabilities/proficiencies from grade 8 and under since 2020 according to the United Nations Sustainable Development Goals on Quality Education.
2) There was no existing requirement of incorporating a standard science curriculum in elementary schools according to our initial user and literature research.
3) Elementary school teachers have expressed interest to incorporate resources that complement/support what's already expected/required of them by higher-level authorities (principal, district superintendent, etc.). If it makes their job to teach what they need to easier, they will use it.
4) Market resesarch proved that there were a lack of engaging online resources for elementary schoolers to match the massive shift to online learning.
5) Elementary schoolers value heavy illustration, streamlined functionality, and clear directions due to their low attention spans and lower motor capabilities.
6) The solution must be designed in a way where elementary school students are most likely to have access to it. (i.e., a website because public schools create equitable access to web browsers and computers/tablets).

### Continuing Research
Our user research fell short of recruiting enough elementary school students to produce solid insights. We ran into issues when treading the waters of human subject testing and the need for Institutional Review Board (IRB) approval. Though this was not indicated anywhere in our research process on Miro, we had contacted 60+ elemetary school principals in the Seattle area for potential testing and were met with either no response or rejection. We urge future capstone groups who pursue the continuation of this project to:
- Find ways to test with more elementary school students since they are among the users that our solution benefits directly.
- Look into whether content expansion or current content enhancement is more valuable to both elementary school teachers and students. If you choose content enhancement, be sure to research more in-depth the science behind the agricultural process and take note of any key part we may have looked over in the current solution.
- Sit in on an elementary school classroom (if possible), pick up elementary school books in a library, etc. to truly immerse yourself in the experience and take note of the major pain points, especially when it comes to how students are interacting with technology.
- Consult staff and students in the University of Washington College of Education for potential insights on the "science" behind teaching elementary school students.

## Design
### Design Tactics
- A lot of inspiration from video games as well as children books. 
- Incorporating effective feedback when a user clicks or uses a function (ex: when the shovel is clicked on, animated a shovel digging)
- Using color contrast checker for vision accessibility 
- Using design platforms/free features for icons and vectors (Figma plug-ins and canva)
- Created components that could be reused throughout the game for efficient development

### Message to Future Designers on Continuation (from Vivian Nguyen)
- One of our stretch goals was to create different pathways on what plant will grow depending on the seeds the user chooses in the beginning. (ex: apples, carrots, cucumbers, etc). In the figma components (and in past iterations) I already designed multple packet choices. There just needs to be an ending for each path that is selected.The user can turn each plant they grow into different simple dishes (ex: Salad,carrot cake, apple pie).
- There could also be a continuation on further designing a reward system. Such as adding experience points or a completion bar with the To-Do list. We would want more effective ways to keep engagement through out the game and revisitation.
- Some other smaller Design consideration is adding a "Skip" button if they've already seen the explanation, adding more details within the tool information cards and vocabulary definition (Working with TTS, Visual teaching, sentence examples)

## Development
### Development Tactics
What your code includes, how to build and deploy the code
- Some description of the code is found in [Codeline.md](./Codeline.md)
- Run the code via `npm start`
- We will not have a deployment scheme set up for the open source repository. You will have to set this up yourself, but for reference, we used Netlify for our deployment of the original repository.

### Message to Future Developers on Continuation (from Shane Fretwell)
How to contribute to the code
- We use Typescript here, which has a lot of benefits that you can look into if you aren't familiar. However, those benefits are best brought about by an IDE that knows how to handle TypeScript. Look into how well your IDE works with the language!
- A description of the directory structure and how new code is added is in the [Codeline.md file](./Codeline.md)
- The categories of components (explained in Codeline.md) are meant to make finding a component easier, so don't spend too much time thinking about where a new component might belong in the categories. To some extent, it's just a gut feeling
  - You may even want to reorganize the components into categories that feel more natural to you!
- The rules for component directories described in the Codeline.md file are also not hard and fast; it is just rare that you would want to deviate from them. One example of where we deviated from the typical component directory structure was the Plot component, which has a stripped down version included inside its directory
- You may wish to better organize images into categories within the images directory.
