import { CardHeader } from '@/components/ui/card'
import { CardBody, Divider } from '@heroui/react'
import React from 'react'

export default function ChatPage() {
  return (
    <>
    <CardHeader className='text-2xl font-semibold text-secondary'>
        Chat
    </CardHeader>
    <Divider />
    <CardBody>Chat Goes here</CardBody>
    </>
  )
}

