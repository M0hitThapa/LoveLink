import { Spinner } from '@heroui/react'
import React from 'react'

export default function Loading() {
  return (
    <div className='flex justify-center items-center vertical-center '>
        <Spinner label='loading...' color='default' />
    </div>
  )
}

