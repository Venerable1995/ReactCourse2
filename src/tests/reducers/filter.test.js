import filterReducer from '../../reducers/filters'
import moment from 'moment'
test('should setup default filter values',()=>{
    const state= filterReducer(undefined,{type :'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate: moment().endOf('month')
    })

})
test('should set sortby to amount',()=>{
    const state= filterReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})
test('should set sortBy to date',()=>{
    const currentState= {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action ={type:'SORT_BY_DATE'}
    const state= filterReducer(currentState,action)
    expect(state.sortBy).toBe('date')
})
test('should set text filter',()=>{
    const currentState= {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action ={type:'SET_TEXT_FILTER',text:'h'}
    const state= filterReducer(currentState,action)
    expect(state.text).toBe('h')
})
test('should set startdate',()=>{
    const currentState= {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action ={type:'SET_START_DATE',startDate:moment().startOf('month')}
    const state= filterReducer(currentState,action)
    expect(state.startDate).toEqual(moment().startOf('month'))
})
test('should set end date',()=>{
    const currentState= {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action ={type:'SET_END_DATE',endDate:moment().endOf('month')}
    const state= filterReducer(currentState,action)
    expect(state.endDate).toEqual(moment().endOf('month'))
})