import Image from 'next/image';

export default function Home() {

    return (
        <div className='bg-gray-200'>
            <Image
                src="/0001.jpg"
                alt="CV"
                width={1000}
                height={1000}
                className="h-screeen w-screen lg:px-40"
            />

        </div>
    )
}
