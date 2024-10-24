import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface CarouselProductProps {
    images: {
        data: {
            id: number;
            attributes: {
                url: string;
            }
        }[];
    };
}

const CarouselProduct = (props: CarouselProductProps) => {
    const {images} = props
    return (
        <div className="sm:px-16">
            <Carousel>
                <CarouselContent>
                    {images.data.map((image) => (
                        <CarouselItem key={image.id}>
                            <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                            alt="Image product" 
                            className="rounded-lg"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CarouselProduct;