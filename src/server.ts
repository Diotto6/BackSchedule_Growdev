import Application from "./app";

const application = new Application();

const port = process.env.PORT ? Number(process.env.PORT) : 9000;

application.init()
application.start(port)