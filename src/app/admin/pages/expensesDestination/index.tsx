import AddExpensesDestinationFeature from "./features/AddExpensesDestinationFeature"
import ExpensesDestinationDetailsFeature from "./features/ExpensesDestinationDetailsFeature"

function ExpensesDestinationPage() {
    return (
        <>
            <AddExpensesDestinationFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <ExpensesDestinationDetailsFeature />
        </>
    )
}

export default ExpensesDestinationPage