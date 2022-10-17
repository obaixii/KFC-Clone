function Header({person}){
    return(
        <>
        <h2>This is Header</h2>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <p>{person.salary}</p>
        </>
    )
}
export default Header