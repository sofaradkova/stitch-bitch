'use client';
import GuidesCard from '@components/GuidesCard'

const Guides = () => {
  return (
    <section className="flex flex-col items-center pb-10">
        <h1 className="head_text mb-12">Guides</h1>
        <div className="grid grid-cols-3 gap-4">
          <GuidesCard type="knit" image="/assets/knitting.jpg" description="Acquire basic stitches and make a matching set of scarf&hat" />
          <GuidesCard type="crochet" image="/assets/crocheting.jpg" description="Begin by making a pot holder, get creative with a granny square, and finally a bralette" />
          <GuidesCard type="sew" image="/assets/sewing.jpg" description="Begin by making a pot holder, get creative with a granny square, and finally a bralette"/>
        </div>
    </section>
  )
}

export default Guides