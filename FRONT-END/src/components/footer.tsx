import { Product } from "./product"
import product02 from '../assets/product02.png'
import product03 from '../assets/product03.png'
import product04 from '../assets/product04.png'

export const Footer = () => {
    return (
        <div className="w-full rounded-t-3xl bg-[#23675A] flex items-center justify-between px-10 py-2 mt-2">
            <Product imageSrc={product02} productName="CRUNCHEX CHILLI"/>
            <Product imageSrc={product03} productName="TOMATO TWIST"/>
            <Product imageSrc={product04} productName="CHAAT CHASKA"/>
        </div>
    )
}
