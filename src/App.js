import Costs from "./components/Costs/Costs";

const App = () => {
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
    ];


    return (
        <div>
            <h1>
                React Cost Manager
            </h1>
            <Costs cost={costs}/>
        </div>
    );
}

export default App;