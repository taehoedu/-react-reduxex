import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Student from "./Student";

function App() {

    // hook
    const [name, setName] = useState('');

    const dispatch = useDispatch();
    const state_total_cnt = useSelector(state => state.totalCnt);
    const state_students = useSelector(state => state.students);

    // handler
    const studentNameChangeHandler = (e) => {
        console.log('studentNameChangeHandler()');

        setName(e.target.value);

    }

    const studentRegistBtnClickHandler = () => {
        console.log('studentRegistBtnClickHandler()');

        if (name.trim() === '') {
            setName('');
            return;
        }

        dispatch({
            type: 'REGIST_NEW_STUDENT',
            id: parseInt(Math.random() * 10000),
            name: name,
        });

        setName('');

    }

    return (
        <>
            <h4>전체 학생 수: {state_total_cnt}</h4>
            <input type='text' value={ name } onChange={ (e) => studentNameChangeHandler(e) } />
            <button onClick={ studentRegistBtnClickHandler }>학생등록</button>
            <hr/>
            {
                state_students.map((student, idx) => {
                    return <Student key={ idx } student={ student } /> 
                })
            }
        </>
    );
}

export default App;