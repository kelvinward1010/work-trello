import { ClerkProvider } from '@clerk/nextjs'

const FlatFormLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <ClerkProvider>
            {children}
        </ClerkProvider>
    )
}

export default FlatFormLayout