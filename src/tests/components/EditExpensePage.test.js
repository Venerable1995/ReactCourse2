import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from '../fixtures/expenses'
let startEditExpenses,startRemoveExpenses,history,wrapper;
beforeEach(()=>{
    startEditExpenses=jest.fn()
    startRemoveExpenses=jest.fn()
     history={push:jest.fn()}
     wrapper = shallow(<EditExpensePage startEditExpenses={startEditExpenses} startRemoveExpenses={startRemoveExpenses} history={history} expense={expenses[2]}/>)
     
})
test('should render EditExpensePage',()=>{
    expect(wrapper).toMatchSnapshot()
})
test('should render EditExpense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpenses).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])
})
test('should render removeExpense',()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpenses).toHaveBeenLastCalledWith({id:expenses[2].id})
})