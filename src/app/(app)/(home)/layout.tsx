// "use client";

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    const data = {}; // Define or fetch the data here

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <SearchFilters data={data}/>
            <div className="flex-1 bg-[#f4f4f0]">
                    {children} 
            </div>
            <Footer />
        </div>
    );
}
 
export default Layout;