
const  OlegTroll = ({title="oleg mini JS", onPress, refd}) =>{
    return (
        <p
            ref={refd}
            onClick={()=>onPress(title)}
        >
            {title}
        </p>
    );
}

export default OlegTroll
