import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                <p>Armá tu PC</p>
                <p>PC Armadas</p>
                <p>Hardware</p>
                <p>Periféricos</p>
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile;