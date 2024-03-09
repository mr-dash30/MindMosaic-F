import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";

export function Signin() {
    return (
        <>
            <div className=" grid md:grid-cols-2  bg-slate-200 h-screen">
                <div><Auth type="signin" /></div>
                <div className="invisible md:visible hidden md:block">
                    <Quote />
                </div>
            </div>
        </>
    );
}
