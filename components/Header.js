import Link from "next/link";

export default (props) => (
    <div className="bg-blue-100">
        <div className="container mx-auto p-6 flex items-center justify-between">
            <Link href={'/'}>
                <a>
                    <svg className="h-5 w-5 fill-current text-black transform -rotate-90" viewBox="0 0 100 100">
                        <path d="M0,50 a1,1 0 0,0 100,0" />
                    </svg>
                </a>
            </Link>
        </div>
    </div>
)