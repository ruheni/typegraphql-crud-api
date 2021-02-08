# CRUD API using TypeGraphQL and Prisma

This example explores building a CRUD API with [TypeGraphQL](https://typegraphql.com/), [Apollo Server](https://apollographql.com/docs) and [Prisma](https://prisma.io).

This project uses a SQLite database to work with some dummy data. If you would like to work with your own database, Prisma currently supports [MySQL](https://www.prisma.io/docs/concepts/database-connectors/mysql), [PostgreSQL](https://www.prisma.io/docs/concepts/database-connectors/postgresql) and [SQL Server](https://www.prisma.io/docs/concepts/database-connectors/microsoft-sql-server).

## Get up and running:

Clone the repository:

```bash
git clone git@github.com:ruheni/typegraphql-crud-api.git
```

Install dependencies:

```bash
cd typegraphql-crud-api
npm install
```

Start the GraphQL server:

```bash
npm run dev
```

Navigate to [localhost:4000](http://localhost:4000) in your browser and explore the API.