import React from "react";
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm'
import { startEditExpenses , startRemoveExpenses } from "../actions/expenses";
export class EditExpensePage extends React.Component{
    onSubmit = (expense)=>{
        this.props.startEditExpenses(this.props.expense.id , expense)
        this.props.history.push('/')
    }
    onClick=()=>{
        this.props.startRemoveExpenses({id:this.props.expense.id})
        this.props.history.push('/')
     }
    render(){
        
        return (
            <div className="content-container"> 
            <div className="page-header"> <h1 className="page-header__title"> Edit Expense</h1>  </div>
             
                <ExpenseForm 
                expense={this.props.expense}
                onSubmit={this.onSubmit}/>
               <div> <button className="button--secondary" onClick={this.onClick}>Remove</button> </div>
            </div>
             )
    }
}

const mapStateToProps = (state,props)=>{
    return {
        expense:state.expenses.find((expense)=> expense.id === props.match.params.id)
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        startEditExpenses:(id,expense)=>dispatch(startEditExpenses(id,expense)),
        startRemoveExpenses:(expense)=>dispatch(startRemoveExpenses({id:expense.id}))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)