# Psalms API

### The World's 1st Psalms API (to my knowledge)

#### Overview

A REST API of Pslams. Created as I was wanting to create a website that displays a random psalm upon open. However, there was no such API. So, I made my own.  Please let me know if there are any errors/bugs you encounter.

Deployed Link: https://restless-feather-6525.fly.dev/psalms

There is also a GraphQL version (REST API wrapped as GraphQL via Apollo Server): https://falling-frost-8420.fly.dev/ (github repo link: https://github.com/StanleyY7/psalmsGraphQL)

(Frontend in progress/development)

#### Design

- Designed for ease of use, it is RESTful for this reason. Only one endpoint /psalms too. Only one GET all request to access all the psalm data.

- The schema consists of an id as the primary key (id is also the Psalm number, i.e. Psalm 1 is id 1), verse which is an array of verses (first index (0) of verse array is "", so accurate to the verses in the Book of Psalms too, i.e. Psalm 2 (id 2), verse[3] would be equal to: "Let us break their chains and throw off their shackles." and version (the translation type of the Bible I have used for it) currently is only "NIV" (I may add more versions such as King James, original Hebrew with translation tool later on).

This will be the design for the frontend

<img src="https://github.com/StanleyY7/design-wireframes/assets/119549394/6be7ed66-1260-448b-92fa-9b280c484fc8" width="400px" />

### Tech Stack

- NodeJs
- JavaScript
- Jest
