import { Avatar } from "./BlogCard";


export function AppBar() {
  return (
    <div className="bg-slate-50 p-4 shadow-md sticky top-0 z-10 
    ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Blog App</h1>
        </div>
        <div>
          <Avatar author="A" size={10}/>
        </div>
      </div>
    </div>
  )
}

