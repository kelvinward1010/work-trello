import { Button, Text } from '@mantine/core'
import Link from 'next/link'

function Navbar() {
    return (
        <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <h2 className='
                    bg-gradient-to-r 
                    from-blue-600 
                    via-green-500 
                    to-indigo-400 
                    inline-block 
                    text-transparent 
                    bg-clip-text
                    font-bold
                '>Kelvin Ward</h2>
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button
                        variant="gradient"
                        gradient={{ from: 'grape', to: 'cyan', deg: 90 }}
                    >
                        <Link href={"/sign-in"}>
                            Login
                        </Link>
                    </Button>
                    <Button
                        variant="gradient"
                        gradient={{ from: 'grape', to: 'cyan', deg: 90 }}
                    >
                        <Link href={"/sign-up"}>
                            Get Kelvin Ward for free
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar