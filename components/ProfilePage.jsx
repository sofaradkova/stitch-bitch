'use client'

import TabsWithUnderline from "./TabsWithUnderline"


const ProfilePage = ({name}) => {
  return (
    <section className="w-full">
        <h1 className="text-left head_text">{name} Profile</h1>
        <div className="mt-8">
            <TabsWithUnderline />
        </div>
    </section>
  )
}

export default ProfilePage