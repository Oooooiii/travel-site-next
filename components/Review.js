import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Review() {
    const dataReview = [
        {
            image_url: "/assets/people1.png",
            name: "Allison",
            review: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.'
        },
        {
            image_url: "/assets/people2.png",
            name: "Kattie",
            review: 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.'
        },
        {
            image_url: "/assets/people3.png",
            name: "iBrong",
            review: 'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.'
        },
        {
            image_url: "/assets/people1.png",
            name: "Joseph",
            review: 'Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.'
        },
        {
            image_url: "/assets/people2.png",
            name: "Alice",
            review: 'Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.'
        },
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="bg-white">
            <div className="layout mt-24">
                <div className="w-full flex flex-col items-center">
                    <h1 className="text-3xl font-semibold">What travellers say about us</h1>
                    <p className="italic font-semibold mt-10 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="mt-14">
                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        arrows={false}
                        showDots={false}
                        infinite={true}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="pr-8"
                    >
                        {
                            dataReview.map((item, key) => (
                                <div key={key} className="border p-8 rounded-md">
                                    <div className='flex flex-col justify-between h-[330px] sm:h-[230px] lg:h-[174px]'>
                                        <p className='italic leading-relaxed'>
                                            “{item.review}”
                                        </p>
                                        <div className="flex items-center">
                                            <div className='w-10 h-10 mr-5'>
                                                <Image src={item.image_url} width="100%" height="100%" layout="responsive" objectFit="cover" alt="" />
                                            </div>
                                            <span>{item.name}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Review
