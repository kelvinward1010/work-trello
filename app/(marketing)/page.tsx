import { Button, Text } from "@mantine/core"
import Link from "next/link"


function MarketingPage() {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center flex-col">
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-lg uppercase">
                    No 1 task management
                </div>
                <Text size="xl" c="blue" tt={'capitalize'}>
                    Kelvin Ward Helps Team Move
                </Text>
                <div className="text-2xl md:text-4xl bg-gradient-to-r from-teal-600 to-sky-600 text-white px-4 p-2 rounded-md w-fit">
                    Work forward
                </div>
            </div>
            <div className="text-center mt-5">
                <Text c="dimmed">
                    Collaborate, manage projects, and reach new productivity
                    peaks. From high eises to the home office, the way your team works
                    is unique - accomplish it all with Kelvin
                </Text>
            </div>
            <Button 
                className="mt-6"
                variant="gradient"
                gradient={{ from: 'grape', to: 'cyan', deg: 90 }}
            >
                <Link href={"/sign-up"}>
                    Get Kelvin Ward for free
                </Link>
            </Button>
        </div>
    )
}

export default MarketingPage