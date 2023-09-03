import { connectToDB } from "@utils/database"
import PatternPost from "@models/patternpost";

export const GET = async (request) => {
    try {
        await connectToDB()

        const patternPosts = await PatternPost.find({}).populate('creator')

        return new Response(JSON.stringify(patternPosts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 
