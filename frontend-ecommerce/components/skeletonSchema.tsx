import { Skeleton } from "./ui/skeleton";

type SkeletonSchemaProps = {
    grid: number
}
const SkeletonSchema = (props: SkeletonSchemaProps) => {
    console.log('SkeletonSchema renderizado');
    const { grid } = props;
    return (
        Array.from({ length: grid }).map((_, index)=> (
            <div key={index} className="flex flex-col gap-8 mx-auto space-y-3 ">
                <Skeleton className="h-[125px] w-[250px] roundex-xl bg-gray-300 "/>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px] bg-gray-300"/>
                    <Skeleton className="h-4 w-[250px] bg-gray-300"/>
                </div>
            </div>
        ))

    )
}

export default SkeletonSchema;