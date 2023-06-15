import cart from "../assets/cart.png"

const styles =  { 

    img: {
        height: "2rem",
        width: "auto",

    },

}
export const CartWidget = () => (
<>

        <img src= {cart} style={styles.img} alt="Chango" /> <span>0</span>
        

</>



);



