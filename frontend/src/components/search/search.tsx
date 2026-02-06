import { useState } from "react";
import { iCard } from "../card/iCard";


export default function Search(){
    const [search, setSearch] = useState<string>();
    
    return(
        <div>
            <input 
            value={search}
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        
    );
}