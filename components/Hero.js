import Image from "next/image"

function Hero() {
    return (
        <div style={{ backgroundColor: "#FFF7F5" }}>
            <div className="flex justify-between items-center py-24 xl:pt-36 lg:space-x-20 xl:space-x-28 layout">
                <div className="flex-1">
                    <h1 className="text-5xl font-bold">{`Let's make your best trip ever!`}</h1>
                    <div className="mt-4 md:mt-8 bg-white p-4 flex flex-col rounded-lg">
                        <input placeholder="Search your destination ..." className="bg-gray-100 p-2 rounded focus:outline-none pl-3" />
                        <div className="mt-4 space-x-3 pb-4 text-gray-400">
                            <span>#beach</span>
                            <span>#mountain</span>
                            <span>#climb</span>
                            <span>#dive</span>
                        </div>
                    </div>
                </div>

                <div className="lg:flex-1">
                    <Image src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" width="100%" height="60%" layout="responsive" className="rounded-bl-[180px]" objectFit="cover" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
