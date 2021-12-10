import { StarIcon } from "@heroicons/react/outline"
import Image from "next/image"

function Destination() {
    const dataImage = [
        {
            image_url:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
            rate: "4.6",
            name: 'South Island, New Zealand',
            visit: "3 places to visit."
        },
        {
            image_url:
                "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            rate: "5.0",
            name: "Bora Bora",
            visit: "8 places to visit."
        },
        {
            image_url:
                "https://images.unsplash.com/photo-1498855926480-d98e83099315?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            rate: "3.0",
            name: "Phuket",
            visit: "9 places to visit."
        },
        {
            image_url:
                "https://images.unsplash.com/photo-1579981633051-529120895bac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            rate: "4.8",
            name: 'The Great Barrier Reef, Australia',
            visit: "6 places to visit."
        },
        {
            image_url:
                "https://images.unsplash.com/photo-1516370873344-fb7c61054fa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            rate: "4.2",
            name: 'Plitvice Lakes, Croatia',
            visit: "7 places to visit."
        },
        {
            image_url:
                "https://images.unsplash.com/photo-1565619109666-b8bfe0e95ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            rate: "5.0",
            name: 'Taj Mahal, India',
            visit: "2 places to visit."
        },
        {
            image_url:
                "https://images.unsplash.com/photo-1515315230580-4299548a2e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            rate: "3.9",
            name: 'Victoria Falls, Zambia/Zimbabwe',
            visit: "12 places to visit."

        },
        {
            image_url:
                "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            rate: "3.8",
            name: 'Grand Canyon National Park, USA',
            visit: "9 places to visit."
        },
    ];

    return (
        <div className="bg-white">
            <div className="pt-20 layout">
                <h1 className="font-bold text-2xl">Top Destination</h1>
                <p className="pt-4 max-w-xl">There’s no shortage of amazing, awe-inspiring, fascinating locations to visit in this world that we live in. The secret lies in simply picking one, then working your way through them all!</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-12">
                    {
                        dataImage.map((item, key) => (
                            <div key={key}>
                                <Image className="rounded-lg" src={item.image_url} width="100%" height="70%" layout="responsive" objectFit="cover" alt="" />
                                <div className="flex items-center mt-3">
                                    <StarIcon className="h-5 mr-1" />
                                    <p className="font-semibold">{item.rate}</p>
                                </div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-sm text-gray-400">{item.visit}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="flex justify-center mt-20">
                    <button className="w-full sm:w-auto border px-20 py-3 rounded-full text-red-500 font-semibold border-red-500 hover:bg-red-500 hover:text-white">More Destination</button>
                </div>
            </div>
        </div>
    )
}

export default Destination
