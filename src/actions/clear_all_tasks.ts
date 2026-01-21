"use server"

import prisma from "../utils/prisma"

export const deleteCompleted = async () => {
    try {
        const deletedTasks = await prisma.tasks.deleteMany({
            where: { isCompleted: true }
        })
    } catch (error) {
        throw error
    }
}