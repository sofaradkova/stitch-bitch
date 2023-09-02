'use client';

import { Accordion, Progress } from 'flowbite-react';
import Videos from '@components/Videos'

const SewGuide = () => {
  return (
    <section className="w-full">
        <h1 className="text-left head_text">Sew Pathway</h1>
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
                    <div classname="flex justify-between">   
                    Step 1 - Choose your sewing machine
                    </div>
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="choose+sewing+machine" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 2 - Find the right materials
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="choose+sewing+materials" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 3 - Learn how to thread a sewing machine
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="how+to+thread+sewing+machine" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 4 - Learn how to wind a bobbin
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="how+to+wind+bobbin" />
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
                    Step 5 - Learn a basic stitch
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="basic sewing machine stitch" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 6 - Learn how to overlock seams
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="how+to+overlock+sewing" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    FIRST PROJECT - Make a tote bag
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="sew+tote+bag+tutorial" />
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
                    Step 7 - Learn how to tailor clothes
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="how+to+tailor+clothes" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 8 - Learn how to fix common sewing mistakes
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="fix+common+sewing+mistakes" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    FINAL PROJECT - Make your own sundress
                </Accordion.Title>
                <Accordion.Content>
                <Videos query="sew+sundress+beginner+tutorial" />
                </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
  </section>
  )
}

export default SewGuide