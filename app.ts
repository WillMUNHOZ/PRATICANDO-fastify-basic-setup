import Fastify from "fastify";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { routes } from "./src/routes/routes";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";

export const app = Fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: "API Fastify",
            description: "Praticando API com Fastify, Swagger, Zod e Typescript",
            version: "1.0.0"
        }
    },
    transform: jsonSchemaTransform
});

app.register(fastifySwaggerUi, {
    routePrefix: "/docs"
});

app.get("/", () => {
    return `
        🚀 HTTP SERVER IS RUNNING!
         🔗 Route: GET /
`
});

app.register(routes);
