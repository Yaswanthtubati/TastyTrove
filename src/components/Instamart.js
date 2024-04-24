import { useState } from "react";
import { AboutInstamart, CareerInstamart, DetailsInstamart } from "../components/config";

const Section = ({ title, description }) => {
    const [isVisible, setIsVisible] = useState(false);
    return(
        <div className="bottom-2 bg-emerald-200 p-3 m-2">
            <h1>{title}</h1>
            {isVisible && <p>{description}</p>}
            {(isVisible) ? <button className="border-2 w-14 m-1 rounded-sm border-black" onClick={()=>setIsVisible(false)}>Hide</button> : <button className="border-2 w-14 m-1 rounded-sm border-black" onClick={()=>setIsVisible(true)}>Show</button>}
        </div>
    );
}

const Instamart = () => {
    return(
        <div className="m-2 p-3">
            <Section title = {"About Instamart"}
            description = {AboutInstamart}
        />
            <Section title = {"Career of Instamart"}
            description = {CareerInstamart}
            />
            <Section title = {"Details of items"}
            description = {DetailsInstamart}
            />
        </div>
    );
}

export default Instamart;