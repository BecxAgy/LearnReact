const Challenge = ()=> {
    const x = 3;
    const y = 9;

    return(
        <div>
            <div>
                <h2>Vamos somar {x} e {y}</h2>
            </div>
            <div>
                <button onClick={()=>console.log(x+y)}>
                    Clique para somar!
                </button>
            </div>
        </div>
    )
}
export default Challenge;