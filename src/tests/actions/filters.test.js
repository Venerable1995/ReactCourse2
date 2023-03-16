import {setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount} from '../../actions/filters'
import moment from 'moment'


test('should generate set start date',()=>{

    const action =setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
})


test('should generate set end date',()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})
test('should generate set text filter',()=>{
    const action=setTextFilter('m')
    expect(action).toEqual({ type:'SET_TEXT_FILTER',
text:'m'})
})
test('should generate default set text filter',()=>{
    const action=setTextFilter()
    expect(action).toEqual({ type:'SET_TEXT_FILTER',
text:''})
})
test('should generate set sortby date',()=>{
    const action =sortByDate()
    expect(action).toEqual({type:'SORT_BY_DATE'})
})
test('should generate set sortby amount',()=>{
    const action =sortByAmount()
    expect(action).toEqual({type:'SORT_BY_AMOUNT'})
})