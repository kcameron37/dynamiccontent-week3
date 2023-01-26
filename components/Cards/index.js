export default function Card({
    degree ="none", 
    position = "none", 
    color = "white",
    fontColor = "black",
    font = "0",
    image = "public/icon/runicon.jpg", 
    job = "",
    name =""
    }) {
    return (

        <div style = {{
            backgroundColor: color,
             fontSize: font,
             color: fontColor,
              width: "500px",
              height: "400px",
             padding: "20px",
             margin: "20px",
             borderRadius: "70px", 
             border: "solid 6px",
             display: "flex", 
             justifyContent: "center",
             alignItems: "center",
             textAlign: "center",
             flexDirection: "column",
             }}>

        { 
        
            color==="white" ? <img src={'icon/runicon.jpg'} width = '80'></img>:
                                        <img src={image} width = '50'></img>
        }
           
            {name} <br></br>
            {job} <br></br>
            {degree}
           
    
        </div>
    )
}