'use client';

 const BasicFooter = () => {
  return (
    <div className='w-full mx-auto flex flex-col gap-8 sticky top-[100vh] opacity-75'>
        <div className="mb-2 h-[1px] bg-black opacity-25" />
      <div className="flex items-center justify-between flex-wrap gap-5 mb-10">
        <div>© 2023 Stitch&Bitch</div>
          <ul className="text-right m-0 flex gap-4">
            <li>Home</li>
            <li>Patterns</li>
            <li>Guides</li>
          </ul>
      </div>
    </div>
  )
}

export default BasicFooter
