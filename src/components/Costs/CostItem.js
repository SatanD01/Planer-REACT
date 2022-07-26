import "./CostItem.css"
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = (props) => {
    return (
        <Card className='costItem'>
            <CostDate date={props.date}/>
            <div className='costItem_description'>
                <h2>{props.description}</h2>
                <div className='costItem_price'>{props.amount}$</div>
            </div>
        </Card>
    );
}

export default CostItem;