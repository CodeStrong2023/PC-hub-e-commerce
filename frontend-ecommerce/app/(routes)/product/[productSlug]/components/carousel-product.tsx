import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

interface CarouselProductProps {
    data: {
        id: string
        imagenes: {
            formats: {
                small: {
                    url: string
                }
            }
        }[]
    }
}

const CarouselProduct = (props: CarouselProductProps) => {
    const { data } = props
    return (
        <div className="sm:px-16">
            <Carousel>
                <CarouselContent>
                    {data.imagenes.map((image) => (
                        <CarouselItem key={10}>
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.formats.small.url}`} alt="Image product" className='rounded-lg' />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default CarouselProduct;