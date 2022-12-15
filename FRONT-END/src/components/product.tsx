import { AiFillStar } from 'react-icons/ai'

interface ProductProps {
    imageSrc: string;
    productName: string;
}


export const Product = ({ imageSrc, productName }: ProductProps) => {
    return (
        <div className='font-poppins flex items-center justify-center relative hover:bottom-8 transition-all cursor-pointer'>
            <div className='z-50'>
                <img src={imageSrc} alt="cheetos 02" className='w-24'  />
            </div>

            <div className='bg-white py-3 px-3 -translate-x-5 z-0 rounded-r-2xl'>

                <h2 className='font-bold text-sm'>
                    {productName}
                </h2>
                <div className='flex  gap-3'>
                    <div className='flex items-center justify-center text-yellow-600'>
                        <AiFillStar size={16} />
                        <AiFillStar size={16} />
                        <AiFillStar size={16} />
                        <AiFillStar size={16} />
                        <AiFillStar size={16} />
                    </div>
                    <p className='font-bold '>
                        ₹10
                    </p>
                </div>
                <div className='bg-yellow-500 rounded-3xl p-1 text-xs font-bold flex justify-center mt-2'>
                    <p>ORDER NOW</p>
                </div>

            </div>

        </div>
    )
}
