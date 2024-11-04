import FilterMarca from "./filter-marca";

type filtersControlsMarcaProps = {
    setFilterMarca : (marca:string) => void
}
const FilterControlsCategory = (props: filtersControlsMarcaProps) =>{
    const {setFilterMarca} = props
    return(
        <div className="sm:w[350px] sm:mt-5">
            <FilterMarca setFilterMarca={setFilterMarca}></FilterMarca>
        </div>
    )
}

export default FilterControlsCategory;