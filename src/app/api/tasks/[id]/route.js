import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

export const GET = async (request, { params }) => {
    const detailTask = await prisma.task.findUnique({
        where: {
            id: Number(params.id),
        }
    })

    return NextResponse.json(detailTask)
}

export const PUT = async (request, { params }) => {
    const data = await request.json();

    const updateTask = await prisma.task.update({
        where: {
            id: Number(params.id),
        },
        data: data
    })

    return NextResponse.json(updateTask)
}

export const DELETE = async (request, { params }) => {
    try {
        const deleteTask = await prisma.task.delete({
            where: {
                id: Number(params.id),
            }
        })

        return NextResponse.json("Tarea Eliminada con exito", deleteTask)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}