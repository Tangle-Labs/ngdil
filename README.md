![ngdil logo](https://raw.githubusercontent.com/Tangle-Labs/ngdil/feat/openid-qr-component/client/static/imgs/ngdil.svg?token=GHSAT0AAAAAABXWSODG7VPCSUHWDRDFB6XMZWDBKCA)

---

# NGDIL

This is the repository for (The NGDIL Demo)[https://demo.ngdil.com].

NGDIL Demo by default uses the TangleLabs NGDIL backend but it can consume any provider's backend which comply's to this (API Spec)[https://ngdil-spec.apidocumentation.com/reference]

## How to plug my own backend?

1. Clone this repository
2. Fill out the `.env` taking a copy from `.env.sample`, only fill the fields which are required by the frontend
3. Change the `PUBLIC_BASE_URI` in `.env` to be the base URI for your API which follows the spec as defined in this (API Spec)[https://ngdil-spec.apidocumentation.com/reference]

## Running

-   You can use `./.env.sample` as a boiler to create your own environment config file (`./.env`).

And then with some docker compose magic, we are ready to roll!

```sh
$ docker-compose up
```

## Where to find stuff :)

| Service                              | Default URL                                      |
| ------------------------------------ | ------------------------------------------------ |
| Client (SvelteKit)                   | [localhost:5173](http://localhost:5173)          |
| Storybook (Svelte Component Library) | [localhost:6006](http://localhost:6006)          |
| REST API Server (Express JS)         | [localhost:4269](http://localhost:4269)          |
| REST API Docs (Swagger)              | [localhost:4269](http://localhost:4269/api/docs) |
| Server Metrics (Grafana)             | [localhost:1337](http://localhost:1337)          |

## Project Structure

-   Sveltepress is separated into 2 Yarn Workspaces, the client and the server.
-   The Client is the SvelteKit Front-End with Storybook setup to view and interact with UI Library components.
    -   The `./client/src/lib` folder holds all the UI components, helper functions, configs etc.
    -   The `./client/src/routes` folder is used by SvelteKit to serve the pages on the mapped routes.
-   The REST API Server is the Express.JS server with monitoring setup using Prometheus && Grafana && also Swagger API Docs which can be accessed via `http://<Server IP>:<Server Port>/api/docs`.
    -   The `./server/src/config` folder handles usage of environment variables in the server and setting up of connection to the PostgreSQL DB.
    -   The `./server/src/controllers` folder is where the business logic of the app handles.
    -   The `./server/src/middleware` folder is where the requests and responses of the server a processed before sending to client.
    -   The `./server/src/models` folder is where the tables to be used in the DB are setup.
    -   The `./server/src/routers` folder is where the routes of the server are defined.
    -   The `./server/src/services` folder is where the DB operations have been abstracted to allow for complete modularity and easy switching of DB if need be.
    -   The `./server/src/utils` folder is where the helper functions are stored.
    -   The `./server/src/validators` folder is where the validators are stored.
