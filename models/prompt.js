import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    name: {
        type: String,
        unique: [true, 'Name already exists!'],
        required: [true, 'Name is required!']
    },
    description: {
        type: String,
        required: [true, "Username is required!"],
    },
    patternlink: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;