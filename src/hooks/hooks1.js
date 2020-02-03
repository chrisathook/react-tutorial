import React, {useContext, useState, useEffect, useReducer} from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as Reducer1 from '../store/reducers/plain_reducer';
import Context from "../utils/context";
const HooksContainer1 = () => {
    const context = useContext(Context); // context reference for global context based state
    const [value, setValue] = useState(0); // local use state
    const [useEffectValue, setUseEffectValue] = useState(null); // local use state, changed via post render effect hook
    const [state, dispatch] = useReducer(Reducer1.Reducer1, Reducer1.initialState); // local reducer based state
    useEffect(() => {
        setTimeout(() => setUseEffectValue("useEffect Worked"), 3000);
    }, [value]);
    const incrementValue = () => {
        setValue(value + 1);
    };
    const decrementValue = () => {
        setValue(value - 1);
    };
    const handleuseEffectValue = () => {
        setUseEffectValue("Some String");
    };
    const handleDispatchTrue = () => {
        dispatch(ACTIONS.success());
    };
    const handleDispatchFalse = () => {
        dispatch(ACTIONS.failure());
    };
    return (
        <div>
            <div>
                <button onClick={() => handleuseEffectValue()}>Handle use effect Value</button>
                <button onClick={() => handleDispatchTrue()}>Dispatch true</button>
                <button onClick={() => handleDispatchFalse()}>Dispatch False</button>
                <button onClick={() => context.dispatchContextTrue()}>Dispatch Context True</button>
                <button onClick={() => context.dispatchContextFalse()}>Dispatch Context False</button>
                <button onClick={() => incrementValue()}>Add Local Value</button>
                <button onClick={() => decrementValue()}>Dec Local Value</button>
                <br/>
                <br/>
                {context.useContextSubmitState
                    ? <h3> {context.useContextSubmitState}</h3>
                    : <h3> No User Text</h3>
                }
                <br/>
                {state.stateprop1
                    ? <p>stateprop1 is true</p>
                    : <p>stateprop1 is false</p>
                }
                <br/>
                {context.stateProp2
                    ? <p>stateprop2 is true</p>
                    : <p>stateprop2 is false</p>
                }
                <br/>
                {useEffectValue
                    ? <p>{useEffectValue}</p>
                    : <p>no Value</p>
                }
                <br/>
                <p>Local Value: {value}</p>
                <br/>
                <br/>
            </div>
        </div>
    )
};

export default HooksContainer1;
