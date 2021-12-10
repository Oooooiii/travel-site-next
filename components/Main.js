import Hero from "./Hero"
import Destination from './Destination'
import Review from './Review'
import Banner from './Banner'

function Main() {
    return (
        <div className="flex flex-col">
            <Hero />
            <Destination />
            <Review />
            <Banner />
        </div>
    )
}

export default Main
