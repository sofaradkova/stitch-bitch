import { Schema, model, models } from 'mongoose';

const PatternPostSchema = new Schema({
   creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
   },
   name: {
        type: String,
        required: [true, 'Prompt is required'],
   },
   description: {
        type: String,
        required: [true, 'Description is required'],
   },
   patternLink: {
    type: String,
    required: [true, 'Pattern link is required'],
    },
    patternType: {
        type: String,
        required: [true, 'Pattern type is required'],
   }
})

const PatternPost = models.PatternPost || model("PatternPost", PatternPostSchema);

export default PatternPost;