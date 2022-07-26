import './Costs.css'
import CostItem from "./CostItem";
import Card from "../UI/Card";

const Costs = (props) => {
    const costItem = props.cost.map( c => <CostItem date={c.date} description={c.description} amount={c.amount}/>);

    return (
        <Card className='costs'>
            {costItem}
        </Card>
    );
}

export default Costs;