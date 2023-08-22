'use client';

import { Label, Radio, TextInput, Textarea, Button, FileInput } from 'flowbite-react';

const Post = ({ action, post, setPost, handleSubmit }) => {
  return (
    <section className="w-full flex flex-col items-center">
        <h1 className="text-left head_text mb-4">{action} Pattern</h1>
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="name"
                    value="Name"
                />
                </div>
                <TextInput
                id="name"
                value={post.name}
                onChange={(e) => setPost({ ...post, name: e.target.value })}
                required
                shadow
                type="text"
                />
            </div>
            <div
            className="max-w-md"
            id="textarea"
            >
            <div className="mb-2 block">
                <Label
                htmlFor="description"
                value="Description"
                />
            </div>
            <Textarea
                id="description"
                value={post.description}
                onChange={(e) => setPost({ ...post, description: e.target.value })}
                placeholder="Tell us about your project"
                required
                rows={4}
            />
            </div>
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="pattern"
                    value="Add a link to your pattern"
                />
                </div>
                <TextInput
                id="pattern"
                value={post.patternlink}
                onChange={(e) => setPost({ ...post, patternlink: e.target.value })}
                required
                shadow
                type="text"
                />
            </div>
                <div
                    className="max-w-md"
                    id="photosUpload"
                >
                    <div className="mb-2 block">
                        <Label
                        htmlFor="photosfile"
                        value="Add a photo of your final product"
                        />
                    </div>
                    <FileInput
                        id="photosfile"
                    />
                </div>
            <fieldset
            className="flex max-w-md justify-around gap-4"
            id="radio"
            >
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <Radio
                        id="crochet"
                        name="categories"
                        value="Crochet"
                        />
                        <Label htmlFor="crochet">
                        Crochet
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio
                        id="knit"
                        name="categories"
                        value="Knit"
                        />
                        <Label htmlFor="knit">
                        Knit
                        </Label>
                    </div>
                </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <Radio
                    id="sew"
                    name="categories"
                    value="Sew"
                    />
                    <Label htmlFor="sew">
                    Sew
                    </Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio
                    id="embroider"
                    name="categories"
                    value="Embroider"
                    />
                    <Label htmlFor="embroider">
                    Embroider
                    </Label>
                </div>
            </div>
            
            </fieldset>
            
            <Button type="submit" className="bg-green-700">
                Submit
            </Button>
        </form>
    </section>
  )
}

export default Post