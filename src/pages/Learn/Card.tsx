type propsData ={
    text:String
}

const Card = (props:propsData)=>{
    return(
        <>
            <div>
                <section>{props.text}</section>
            </div>
        </>
    )
}

export default Card;