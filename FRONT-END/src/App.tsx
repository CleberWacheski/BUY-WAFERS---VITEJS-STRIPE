import axios from "axios"
import { useEffect, useState } from "react"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Section } from "./components/section"

interface productProps {
    id: string;
    image: string;
    name: string;
    price_id: string;
    price: number;
}

function App() {
    const [product, setProduct] = useState({} as productProps)

    useEffect(() => {
        const product = async () => {
            try {
                const { data } = await axios.get('http://localhost:3000/products')
                setProduct(data)
            }
            catch (err) {
                console.log(err)
            }
        }

        product()
    }, [])

    return (
        <main className="flex items-start justify-center self-center bg-[#F7EFED] h-screen overflow-hidden ">
            <div className="w-[75%]">
                <Header />
                <Section product={product} />
                <Footer />
            </div>
        </main>
    )
}

export default App
