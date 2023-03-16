import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpensesListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList=(props)=>(
    <div>
    {
        props.expenses.length===0? (<p> No Expenses</p>  )  : (props.expenses.map((expense)=>{
            return <ExpensesListItem key={expense.id ? expense.id : '0'} {...expense}/>
        })
        )
    }
        
    </div>
)

const mapStateToProps= (state)=>{
    return {
        expenses:selectExpenses(state.expenses , state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList)

