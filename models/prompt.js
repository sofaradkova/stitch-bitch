import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
   
})

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;