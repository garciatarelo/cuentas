import { useEffect, useState } from "react"

export default function ItemComponent() {
let [valor, setValor] = useState(1)
    return (
    <>
        <h2>Item{valor}</h2>
        <input type="number" onChange={(e)=>{
            setValor(e.target.value)}} />
    </>
    )

}