export default function Container({ children }){
    return (
        <div className="py-12 w-full px-6 max-w-6xl mx-auto overflow-auto">
            {children}
        </div>
    )
}