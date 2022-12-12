export const Product = (props) => {
    return (
        <div className="text-left mt-10 px-5 text-primary">
            <span
            className="bg-black block max-w-4xl h-80 xl:h-96 max-h-96 rounded-md bg-cover bg-center m-auto"
            style={{backgroundImage: `url("${props.img}")`}} />
            <h3 className="text-2xl font-bold">{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}