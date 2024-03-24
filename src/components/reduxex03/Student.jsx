import React from "react";
import { useDispatch } from "react-redux";

const Student = ({ student }) => {

    const dispatch = useDispatch();

    return (
        <p>
            [{student['id']}] {student['name']}
            <button onClick={() => {
                dispatch({
                    type: 'DELETE_STUDENT',
                    id: student['id'],
                })
            }}>DEL</button>
        </p>
    );

}

export default Student;