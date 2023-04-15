import { login , logout } from "../../actions/auth";

test('should render login correctly',()=>{
    const action = login('abc123')
    expect(action).toEqual({
        type:'LOGIN',
        uid:'abc123'
    })

})
test('should render logout correctly',()=>{
    const action = logout()
    expect(action).toEqual({type:'LOGOUT'})
})

