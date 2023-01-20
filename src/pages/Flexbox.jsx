import Boxes from "../components/atoms/Boxes";
import styles from "../assets/styles/Flexbox.css"
import FlexContainer from "../components/organisms/FlexContainex";

const Flexbox = () => {
    const itemFlex = [1,2,3,4 ,5 ,6];
    return ( 
        <>
        {/* <Boxes></Boxes> */}
        <FlexContainer itemFlex={itemFlex}></FlexContainer>
        </>   
     );
}
 
export default Flexbox;