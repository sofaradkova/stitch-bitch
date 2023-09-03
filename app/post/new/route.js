import Prompt from "@models/patternpost";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
    const { name, description, patternlink, userId } = await req.json();

  try {
    await connectToDB();
    const newPost = new Prompt({ name, description, patternlink, userId });

    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 })
  } catch (error) {
    return new Response("Failed to create a post", { status: 500 });
  }
}
