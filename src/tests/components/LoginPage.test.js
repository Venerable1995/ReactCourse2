import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";
let startLogin;
test('should correctly render loginpage',()=>{
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})
test('should call start login on button click',()=>{
    startLogin = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>)
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled()
})


