import { PrismaClient } from "@prisma/client"
import { useState } from "react"

const Search = (props) => {
    const [searchRes, setSearchRes] = useState()
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold">Search</h1>
                <form action="" onSubmit={(e) => {
                    e.preventDefault()
                    const query = document.querySelector("[name=search]").value
                    fetch(`/api/search/${query}`)
                }}>
                    <input type="text"
                        name="search"
                        placeholder="Search For A Game" />
                    <input type="submit" />
                </form>
            </div>

        </>
    )
}

export default Search