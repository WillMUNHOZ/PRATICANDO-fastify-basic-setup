import { FastifyPluginAsync } from "fastify";
import z from "zod/v4";
import { FastifyTypedInstance } from "../types/types";
import { randomUUID } from "node:crypto";
import { users } from "../database/db";

export const routes: FastifyPluginAsync = async (app: FastifyTypedInstance) => {
    app.get("/users", {
        schema: {
            tags: ["users"],
            description: "List all users",
            response: {
                200: z.array(z.object({
                    id: z.string(),
                    name: z.string(),
                    email: z.string()
                }))
            }
        }
    }, () => {
        return users
    })

    app.post("/users", {
        schema: {
            tags: ["users"],
            description: "Create a new user",
            body: z.object({
                name: z.string(),
                email: z.email(),
            }),
            response: {
                201: z.null().describe("User created")
            }
        }
    }, async (req, res) => {
        const { name, email } = req.body

        users.push(
            {
                id: randomUUID(),
                name,
                email
            }
        );
        return res.status(201).send();
    })
}