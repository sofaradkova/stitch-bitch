'use client';

import { Tabs } from 'flowbite-react';

import { useSession } from 'next-auth/react';

export default function TabsWithUnderline() {
  const { data: session } = useSession();

  return (
    <Tabs.Group
      aria-label="Tabs with underline"
      style="underline"
    >
      <Tabs.Item
        active
        title="My Patterns"
      >
        <p>
          text
        </p>
      </Tabs.Item>
      <Tabs.Item
        title="Saved Patterns"
      >
        <p>
          text
        </p>
      </Tabs.Item>
      <Tabs.Item
        title="Guides In Progress"
      >
        <p>
          text
        </p>
      </Tabs.Item>
      <Tabs.Item
        title="My Community"
        className="focus:ring-0"
      >
        <p>
          text
        </p>
      </Tabs.Item>
    </Tabs.Group>
  )
}


