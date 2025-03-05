import Link from 'next/link'
import React from 'react'

function MembersPage() {
  return (
    <div>
        <h3 className='text-3xl'>
            This is the members page
        </h3>
        <Link href="/">Go back Home</Link>
    </div>
  )
}

export default MembersPage