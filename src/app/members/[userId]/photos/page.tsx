import { getMemberPhotodByUserId } from '@/app/actions/memberActions'
import { CardHeader } from '@/components/ui/card';
import { CardBody, Divider } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

export default async function PhotoPage({
params,
}: {
    params: { userId : string};
}) {
    const photos = await getMemberPhotodByUserId(
        params.userId
    );
    return(
        <>
        <CardHeader className='text-2xl font-semibold text-secondary'>
            Photos
        </CardHeader>
        <Divider />
        <CardBody>
            <div className='grid grid-cols-5 gap-3 pt-5'>
                {photos && 
                photos.map((photo) => (
                    <div key={photo.id}>
                        <Image src={photo.url} alt="Image of member" className="object-cover aspect-square rounded-lg " width={200} height={200} />
                    </div>
                ))}
            </div>
        </CardBody>
        </>
    )
}