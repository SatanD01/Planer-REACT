import "./CostItem.css"
import CostDate from "./CostDate";

function CostItem(props) {
    return (
        <div className='costItem'>
            <CostDate date={props.date}/>
            <div className='costItem_description'>
                <h2>{props.description}</h2>
                <div className='costItem_price'>{props.amount}$</div>
            </div>
        </div>
    );
}

export default CostItem;