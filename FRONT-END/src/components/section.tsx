import { CircleButton } from "./circleButton"
import { FaShoppingCart } from 'react-icons/fa'

import pepper from '../assets/pepperIcon.png'
import corn from '../assets/cornIcon.png'
import fire from '../assets/fireIcon.png'
import { useState } from "react"
import axios from "axios"

interface SectionProps {
    product: {
        id: string;
        image: string;
        name: string;
        price_id: string;
        price: number;
    }
}

export const Section = ({ product }: SectionProps) => {

    async function handleBuyProduct() {

        try {
            const { data } = await axios.post('http://localhost:3000/products', {
                price_id: product.price_id,
                amount: productAmount,
            })

            window.location.href = data.checkoutURL

        } catch (err) {
            console.log(err)
        }

    }



    const [productAmount, setProductAmount] = useState(0)

    return (
        <section className="font-poppins grid grid-cols-2 items-start ">

            <div className="mt-14">
                <h1 className="text-6xl font-semibold ">
                    {product.name}
                </h1>
                <p className="text-sm font-light text-gray-700 mt-2">
                    Presenting the Classic Nachos with a Flaming Hot <br /> Twist. It will Rock your taste buds with Chilli & Lime.
                </p>
                <div className="mt-8 w-[70%] items-center flex justify-between ">

                    <button onClick={handleBuyProduct} className="flex items-center justify-between p-1 pr-4 rounded-full bg-black w-[50%]">
                        <CircleButton tailwindClass='bg-yellow-400' children={<FaShoppingCart size={30} />} />
                        <p className="text-white font-semibold">ADD TO CART</p>
                    </button>

                    <div className="items-center flex justify-center gap-3">

                        <CircleButton tailwindClass='bg-white hover:bg-yellow-100 active:bg-yellow-300'
                            children='+'
                            onClick={() => { setProductAmount(state => state + 1) }}
                        />

                        <div className="rounded-full border border-orange-500 p-2">
                            <CircleButton tailwindClass='bg-white' children={productAmount} />
                        </div>

                        <CircleButton tailwindClass='bg-white  hover:bg-yellow-100 active:bg-yellow-300'
                            children='-'
                            onClick={() => { setProductAmount(state => state > 0 ? state - 1 : state) }}
                        />

                    </div>

                </div>
            </div>

            <div className="flex justify-center items-center h-full mt-4">
                <div className="self-start  w-[285px] ">
                    <img src={product.image} alt="imagem do ilustrativa salgadinho" />
                </div>
                <div className="flex flex-col h-full gap-4">
                    <div className="flex items-center justify-center gap-6 font-bold">
                        <CircleButton tailwindClass='bg-[#206456] w-14 h-14'
                            children={<img src={pepper} />}
                        />
                        <p>
                            CHILLI
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-6 font-bold">
                        <CircleButton tailwindClass='bg-[#D51037] w-14 h-14'
                            children={<img src={corn} className='w-6' />}
                        />
                        <p>
                            CORN
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-6 font-bold">
                        <CircleButton tailwindClass='bg-[#FDB339] w-14 h-14'
                            children={<img src={fire} className='w-6' />}
                        />
                        <p>
                            SPICES
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
