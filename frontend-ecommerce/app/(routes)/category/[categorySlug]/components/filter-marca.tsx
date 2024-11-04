
"use client"

import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";
type filterMarcaProps = {
    setFilterMarca : (marca:string) => void
    products: ProductType[]
}

const FilterMarca = (props : filterMarcaProps) =>{
    const {setFilterMarca, products} = props
    const {result,loading}: FilterTypes = useGetProductField();
    

    return(
        <div className='my-5'>
            <p className='mb-3 font-bold'>Marcas</p>
            {loading && result === null && (
                <p>Cargando Marcas...</p>
            )}
            <RadioGroup onValueChange={(value)=> setFilterMarca(value)}>
                {result !== null && result.schema.attributes.Marca.enum.map((marca: string)=>(
                    <div key={marca} className="flex items-center space-x-2">
                        <RadioGroupItem value={marca} id={marca}/>
                        <Label htmlFor={marca}>{marca}</Label>  
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default FilterMarca;