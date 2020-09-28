export default function Container({ children }){
    return (
        <div className="py-12 w-full h-full max-w-6xl mx-auto overflow-auto">
            {children}
        </div>
    )
}