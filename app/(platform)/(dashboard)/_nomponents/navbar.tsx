import Logo from '@/components/Logo'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { Button } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import React from 'react'

function Navbar() {
    return (
        <div className='fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center'>
            <div className='flex items-center gap-x-4'>
                <div className='hidden md:flex'>
                    <Logo />
                </div>
                <Button>
                    <IconPlus />
                    Create
                </Button>
            </div>
            <div className='ml-auto flex items-center gap-x-2'>
                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl={"/organization/:id"}
                    afterLeaveOrganizationUrl='/select-org'
                    afterSelectOrganizationUrl={"/organization/:id"}
                    appearance={{
                        elements: {
                            rootBox: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            },
                        },
                    }}
                />
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: {
                                height: 30,
                                width: 30,
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Navbar