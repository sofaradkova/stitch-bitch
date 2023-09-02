'use client';

import { Accordion, Progress } from 'flowbite-react';
import Videos from '@components/Videos'

const CrochetGuide = () => {

  return (
    <section className="w-full">
        <h1 className="text-left head_text">Crochet Pathway</h1>
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
                    Step 1 - Learn about hooks, yarn & gather the materials
                </Accordion.Title>
                <Accordion.Content>
                    <Videos query="choose+crochet+materials" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 2 - Learn how to hold the hook
                </Accordion.Title>
                <Accordion.Content>
                    <Videos query="how+to+hold+crochet+hook" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 3 - Practice chaining
                </Accordion.Title>
                <Accordion.Content>
                    <Videos query="crochet+chain" />  
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 4 - Single crochet stitch
                </Accordion.Title>
                <Accordion.Content>
                    <Videos query="single+crochet" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    FIRST PROJECT - Make a pot holder
                </Accordion.Title>
                <Accordion.Content>
                    <Videos query="crochet+pot+holder" />
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
                    Step 5 - Double crochet stitch
                </Accordion.Title>
                <Accordion.Content>
                    <Videos query="double+crochet" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 6 - Make a turning chain
                </Accordion.Title>
                <Accordion.Content>
                    <Videos query="crochet+turning+chain" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 7 - Crochet in the round
                </Accordion.Title>
                <Accordion.Content>
                    <Videos query="crochet+in+round" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    NEXT PROJECT - Crochet a granny square
                </Accordion.Title>
                <Accordion.Content>
                    <Videos query="crochet+granny+square" />
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
                    Step 8 - Learn how to join in new yarn
                </Accordion.Title>
                <Accordion.Content>
                    <Videos query="how+to+switch+yarn+crochet" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    Step 9 - Learn finishing techniques
                </Accordion.Title>
                <Accordion.Content>
                    <Videos query="crochet+finishing+techniques" />
                </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>
                    FINAL PROJECT - Make your own bralette
                </Accordion.Title>
                <Accordion.Content>
                    <Videos query="crochet+beginner+bralette" />
                </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
  </section>
  )
}

export default CrochetGuide