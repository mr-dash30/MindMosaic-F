interface BlogCardProps {
    author: string;
    title: string;
    body: string;
    publishedDate: string;
}

export function BlogCard(
    {

        
        author,
        title,
        body,
        publishedDate
        
    }: BlogCardProps) {
    return (
        <div>
            <div className="bg-white hover:shadow-lg rounded-lg p-4 ">
                <div className="flex gap-3 items-center ">
                    <Avatar author={author} size={6}/>
                    <span className="font-light text-gray-700">{author}</span>
                    <span className="font-light text-gray-400">|</span>
                    <span className="pt-1 font-thin text-sm text-gray-600">{publishedDate}</span>
                </div>
                <div className="mt-2">
                    <h2 className="text-2xl text-gray-700 font-semibold">{title}</h2>
                    <p className="mt-2 text-gray-600">{body.slice(0, 225) + '...'}</p>
                </div>
                <div 
                className="flex items-center  mt-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {/* {`${Math.floor(Math.random() * 100)} likes    ` } */}
                    {`${Math.ceil(body.length /  60)} min read`}
                </div>
            </div>

            <div className="bg-slate-200 h-1 w-full"></div>

        </div>
    )
}

export const Avatar = ({ author , size = 6 }: { author: string, size? : number } ) => {

    return (

        <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className="font-medium text-gray-600 dark:text-gray-300">
                {author.charAt(0).toUpperCase()}
            </span>
        </div>

    )
}

