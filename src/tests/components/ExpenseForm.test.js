import moment from 'moment'
import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'


test('should render expense form correctly',()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})
test('should render ExpenseForm correctly with data',()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})
test('should render error for invalid form submision',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})
test('should set description on input chaange',()=>{
    const value = 'New decription'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change',{
     target:{value}
    })
    expect(wrapper.state('description')).toBe(value)
})
test('should set note on textarea chaange',()=>{
    const value = 'New decription'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change',{
     target:{value}
    })
    expect(wrapper.state('note')).toBe(value)
})
test('should set amount if valid input',()=>{

    const value = '12.50'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
     target:{value}
    })
    expect(wrapper.state('amount')).toBe(value)
})
test('should set amount if invalid input',()=>{

    const value = '12.500'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
     target:{value}
    })
    expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission',()=>{
    const onSubmitSpy=jest.fn();
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description:expenses[0].description,
    amount:expenses[0].amount,
    note:expenses[0].note,
    createdAt:expenses[0].createdAt})
})
test('should set new date on chaange',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onDateChange')(moment())
    expect(wrapper.state('createdAt')).toEqual(moment())
})
test('should set render calender focus on chaange',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused : true })
    expect(wrapper.state('calenderFocused')).toBe(true)
})