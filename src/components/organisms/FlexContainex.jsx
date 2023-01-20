import ItemFlex from "../atoms/ItemFlex";
import "../../assets/styles/ItemFlex.css"
const FlexContainer = ({itemFlex}) => {
    return ( 
         <div className="flexbox-container">
            {itemFlex.map((item)=>
            (<ItemFlex key={item} item={item}></ItemFlex>))}
         </div>
     );
}
 
export default FlexContainer;