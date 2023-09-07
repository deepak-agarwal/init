'use client'

import { GluestackUIProvider } from '@gluestack-ui/themed'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <GluestackUIProvider>{children}</GluestackUIProvider>
    </DndProvider>
  )
}
