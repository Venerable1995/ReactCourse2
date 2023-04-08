import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expensis'

test('should set default state',()=>{
    const state=expensesReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id',()=>{
    const action = { type:'REMOVE_EXPENSE',id : expenses[1].id}
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
})
test('should remove expense by id',()=>{
    const action = { type:'REMOVE_EXPENSE',id : '-1'}
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})
test('should edit expense by id',()=>{
    const updates = {...expenses[1],note:'dd'}
    const action = { type:'EDIT_EXPENSE',id : expenses[1].id,updates:{note:'dd'}}
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],updates,expenses[2]])
})
test('should not edit expense if expense not found',()=>{
    const updates = {...expenses[33],note:'dd'}
    const action = { type:'EDIT_EXPENSE',id :'123',updates:{note:'dd'}}
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})
test('should add expense by id',()=>{
    const expense = {
        id:'4',
        description :'',
        note:'',
        amount:0,
        createdAt:0}
    const action = { type:'ADD_EXPENSE',expense}
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([...expenses,expense])
})
test('should set expenses',()=>{
    const action = {type:'SET_EXPENSE',expenses:expenses[1]}
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})