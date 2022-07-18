import CostItem from "./components/CostItem";

function App() {
    const costs = [
        {
            date: new Date(2021, 2, 12),
            description: "Холодильник",
            amount: 999.99
        },
        {
            date: new Date(2021, 11, 25),
            description: "MacBook",
            amount: 1014.99
        },
        {
            date: new Date(2021, 4, 1),
            description: "Car",
            amount: 64.99
        },
    ]

    const costItem = costs.map( c => <CostItem date={c.date} description={c.description} amount={c.amount}/>);

    return (
        <div>
            <h1>
                React
            </h1>
            {costItem}
        </div>
    );
}

export default App;