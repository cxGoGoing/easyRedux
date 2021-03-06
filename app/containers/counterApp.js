import React,{Component} from 'react';
import {bindActionCreators}from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import {connect} from 'react-redux';

class CounterApp extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {state,actions} = this.props;
        return(
            <Counter counterReducer = {state.count} {...actions}/>
        ); 
    }
}
export default connect(
    (state=>({state:state.counterReducer})),
    (dispatch)=>({actions:bindActionCreators(counterActions,dispatch)})
)(CounterApp);
