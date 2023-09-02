'use client';

import { Accordion, Progress } from 'flowbite-react';
import Videos from '@components/Videos'

const KnitGuide = () => {
  return (
    <section className="w-full">
        <h1 className="text-left head_text">Knitting Pathway</h1>
        <div>
            <Progress
                labelProgress
                progressLabelPosition="outside"
                labelText
                color="dark"
                progress={45}
                size="lg"
                textLabel="Beginner"
                textLabelPosition="outside"
            />
            <Accordion className="mt-4">
                <Accordion.Panel>
                <Accordion.Title>
                    Step 1 - Learn about needles, yarn & gather the materials
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="choose+knittingt+materials" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 2 - Learn how to hold the needles
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="how+to+hold+knitting+needles" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 3 - Practice casting on the stitches
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="cast+on+stitches+knitting" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 4 - Basic knit stitch
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="basic+knit+stitch" />
                </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
        <div className="mt-8">
            <Progress
                labelProgress
                progressLabelPosition="outside"
                labelText
                color="green"
                progress={45}
                size="lg"
                textLabel="Intermediate"
                textLabelPosition="outside"
            />
            <Accordion collapseAll className="mt-4">
            <Accordion.Panel>
                <Accordion.Title>
                    Step 5 - Basic purl stitch
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="basic+purl+stitch" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 6 - Learn how to cast off the stitches
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="cast+off+stitches" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 7 - Learn how to pick up a dropped stitch
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="pick+up+dropped+stitch+knitting" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 8 - Learn how to weave in the ends
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="weave+in+ends+knitting" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    FIRST PROJECT - Make a scarf
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="knit+beginner+scarf" />
                </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
        <div className="mt-8 mb-20">
            <Progress
                labelProgress
                progressLabelPosition="outside"
                labelText
                color="blue"
                progress={45}
                size="lg"
                textLabel="Advanced"
                textLabelPosition="outside"
            />
            <Accordion collapseAll className="mt-4">
                <Accordion.Panel>
                <Accordion.Title>
                    Step 9 - Learn how to decrease and increase stitches
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="decrease+increase+stitches+knitting" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 10 - Learn how to fix common knitting mistakes
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="fix+common+knitting+mistakes" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    FINAL PROJECT - Make your own hat
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="knit+beginner+hat" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Extra - Learn to read knitting patterns
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="how+to+read+knitting+patterns" />
                </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
  </section>
  )
}

export default KnitGuide