# Chuck Norris Gateway GraphQL

This repository serves as a GraphQL gateway designed specifically for fetching random facts about Chuck Norris. It acts as an intermediary layer between the front-end application and the various data sources that provide Chuck Norris facts.

## How to Start the Project

To start the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/arielmell0/chuck-norris-gateway-graphql.git
    ```

2. Navigate to the project directory:
    ```bash
    cd chuck-norris-gateway-graphql
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the server:
    ```bash
    npm run start:dev
    ```

## Features

- **GraphQL API:** A GraphQL endpoint that aggregates and serves Chuck Norris facts.
- **Category Filtering:** Supports querying facts by category.
- **Random Fact Generation:** Provides random Chuck Norris facts.

## Endpoints

- `/graphql`: The main GraphQL endpoint for querying Chuck Norris facts.

## Queries

### Get Random Fact

Fetches a random Chuck Norris fact.

```graphql
query {
  getRandomFact
}
```

### Get Categories

Fetches a list of categories for Chuck Norris facts.

```graphql
query {
  getCategories
}
```

### Get Random Fact by Category

Fetches a random Chuck Norris fact from a specified category.

```graphql
query($category: String!) {
  getRandomFactByCategory(category: $category)
}
```

## Stack

- **NestJS:** A progressive Node.js framework for building efficient and scalable server-side applications.
- **GraphQL:** A query language for your API.
- **Apollo Server:** A fully-featured GraphQL server with focus on easy setup and performance.

## Configuration

No additional configuration is required for starting the server.

## Production URL

The application is also available online:
[Chuck Norris Gateway GraphQL](https://chuck-norris-gateway-graphql.onrender.com).

## Contact

For questions or suggestions, contact [Ariel Oliveira de Mello](https://github.com/arielmell0).

---

I hope this application helps you to create a GraphQL gateway. 🚀
