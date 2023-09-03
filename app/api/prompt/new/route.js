import { connectToDB } from "@utils/database"
import PatternPost from "@models/patternpost";

export const POST = async (req) => {
    const { name, description, patternLink, patternType, userId } = await req.json()
    try {
        await connectToDB();
        const newPost = new PatternPost({
            creator: userId,
            name,
            description,
            patternLink,
            patternType
        })

        await newPost.save();
        return new Response(JSON.stringify(newPost), { status: 201 })
    } catch (error) {
        return new Response("Failed to create post", { status: 500 })
    }
}