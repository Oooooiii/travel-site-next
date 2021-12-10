import { MenuIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter()
    return (
        <div style={{ backgroundColor: '#FFF7F5' }}>
            <div className="flex justify-between items-center layout" >
                {/* Left */}
                <div onClick={() => router.push('/')} className="text-2xl my-6 underline font-semibold">Travel</div>

                {/* Right */}
                <div>
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />

                    <div className="hidden md:inline-flex space-x-8 items-center">
                        <a href="">
                            Login
                        </a>
                        <a href="" className='bg-red-400 px-5 py-2 rounded-full text-white'>
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
