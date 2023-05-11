import React from 'react' ; 
import { useDispatch , useSelector } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch ();
    const {c} = useSelector( state => state.custom )

    const addBtn = () =>{
        dispatch({
            type : "increment"
        })
    };

    const subBtn = () =>{
        dispatch({
            type : "decrement"
        })
    };

    const addval = () =>{
        dispatch({
            type : "incrementByValue",
            payload : 10 ,
        })
    }

    const value = 10;
    return (
        <>
            <div>{c}</div>
            <button onClick={addBtn}>Increment</button>
            <button onClick={subBtn}>Decrement</button>
            <button onClick={addval}>AddVal</button>
        </>
    )
}
export default Home