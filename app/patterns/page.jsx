'use client'
import PatternCard from '@components/PatternCard'
import SearchField from '@components/SearchField'

const Patterns = () => {
  return (
    <section className="w-full">
        <h1 className="text-left head_text">Patterns</h1>
        <SearchField />
        <div className="grid grid-cols-3 gap-4 mb-20">
            <PatternCard />
            <PatternCard />
            <PatternCard />
            <PatternCard />
            <PatternCard />
            <PatternCard />
        </div>
    </section>
  )
}

export default Patterns