'use client';

import { Label, Radio, TextInput, Textarea, Button, FileInput } from 'flowbite-react';

const Post = ({ action, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full flex flex-col items-center mb-20">
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
                value={post.patternLink}
                onChange={(e) => setPost({ ...post, patternLink: e.target.value })}
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
                    <div className="flex items-center gap-2">
                        <Radio
                        id="crochet"
                        name="categories"
                        value="Crochet"
                        checked={post.patternType === "Crochet"}
                        onChange={(e) => setPost({ ...post, patternType: e.target.value })}
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
                        checked={post.patternType === "Knit"}
                        onChange={(e) => setPost({ ...post, patternType: e.target.value })}
                        />
                        <Label htmlFor="knit">
                        Knit
                        </Label>
                    </div>
                <div className="flex items-center gap-2">
                    <Radio
                    id="sew"
                    name="categories"
                    value="Sew"
                    checked={post.patternType === "Sew"}
                    onChange={(e) => setPost({ ...post, patternType: e.target.value })}
                    />
                    <Label htmlFor="sew">
                    Sew
                    </Label>
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