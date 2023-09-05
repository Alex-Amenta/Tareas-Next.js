import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

export const GET = async () => {
    const tasks = await prisma.task.findMany()
    return NextResponse.json(tasks)
}

export const POST = async (request) => {
    const { title, description } = await request.json();
    const createTasks = await prisma.task.create({
        data: {
            title,
            description
        }
    })
    return NextResponse.json(createTasks)
}
