import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Image from 'next/image'

function Banner() {
    const dataBanner = [
        {
            image_url:
                "https://images.unsplash.com/photo-1516633630673-67bbad747022?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            name: "Allison",
        },
        {
            image_url:
                "https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
            name: "Kattie",
        },
        {
            image_url:
                "https://images.unsplash.com/photo-1496046744122-2328018d60b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1364&q=80",
            name: "Letty",
        },
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    };

    return (
        <div className="bg-white">
            <div className="mt-20 layout grid grid-cols-1 lg:grid-cols-3 lg:gap-3">
                <div className='self-center col-span-1'>
                    <h1 className="text-4xl font-bold leading-relaxed">{`Protect yourself and your family's future`}</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates expedita, quibusdam, consequuntur doloribus est, vel autem accusamus aut aperiam sed illo consectetur odit impedit distinctio! Laborum vitae itaque quo molestias.</p>
                    <button className="mt-6 bg-red-500 text-white px-12 py-3 rounded-full">Contact Us</button>
                </div>

                <div className='mt-10 lg:mt-0 self-center col-span-2'>
                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        infinite={true}
                    >
                        {
                            dataBanner.map((item, key) => (
                                <div key={key} className="mx-2">
                                    <Image className='rounded-xl' src={item.image_url} width="100%" height="60%" layout="responsive" objectFit='cover' alt="" />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </div >
    )
}

export default Banner
