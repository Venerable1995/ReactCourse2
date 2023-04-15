import {shallow} from 'enzyme';
import React from 'react';
import { Header } from '../../components/Header';

let starLogout ;

test('should render header correctly',()=>{
    const wrapper=shallow(<Header startLogOut={()=>{}}/>)
    expect(wrapper).toMatchSnapshot()
    // const renderer=new ReactShallowRenderer()
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})
test('should call starLogout on button click ',()=>{
    starLogout = jest.fn()
    const wrapper = shallow(<Header startLogOut={starLogout}/>)
    wrapper.find('button').simulate('click')
    expect(starLogout).toHaveBeenCalled()
})
