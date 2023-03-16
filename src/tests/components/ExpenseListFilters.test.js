import React from "react";
import { shallow } from "enzyme";
import {ExpenseListFilters} from "../../components/ExpenseListFilter";
import { filters,altFilters } from "../fixtures/filters";
import moment from "./__mocks__/moment";
let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate, wrapper , value;
beforeEach(()=>{
    setTextFilter=jest.fn()
    sortByDate=jest.fn()
    sortByAmount=jest.fn()
    setStartDate=jest.fn()
    setEndDate=jest.fn()
    wrapper = shallow(<ExpenseListFilters 
        filters = { filters} 
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}/>)
})
test('should render expense list filter correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})
test('should render expense list filter with alt data',()=>{
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot()
})
test('should handle text change',()=>{
    value = 'a'
    wrapper.find('input').simulate('change',{
        target:{value}
       })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})
test('should sortby date',()=>{
    wrapper.setProps({
        filters:altFilters
    })
    value = 'date'
    wrapper.find('select').simulate('change',{
        target:{value}
       })
       expect(sortByDate).toHaveBeenCalled()
})
test('should sortby amount',()=>{
    value = 'amount'
    wrapper.find('select').simulate('change',{
        target:{value}
       })
       expect(sortByAmount).toHaveBeenCalled()
})
test('should handle date change',()=>{
    //DateRangePicker / date change
    value = moment(0)
    const startDate = moment(0).add(4,'year')
    const endDate = moment(0).add(8,'year')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)

})
test('should handle date focus change',()=>{
    //DateRangePicker / onFocusChange
    const calenderFocused =  'endDate'

    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused)
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
    

})