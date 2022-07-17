import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { getAllBikeAction } from "../action/bike-action";
import AllBike from "./AllBike";
export default function Home() {
    const dispatch = useDispatch()
    const { bikeredux, isloading } = useSelector(state => state.userBike)
    console.log(bikeredux);
    useEffect(() => {
        dispatch(getAllBikeAction())
    },[])
    return<div className=" alert alert-info">
        <br />
        <div className="container">
        <div className="row">
            {
                isloading
                    ? <div className="spinner spinner-border"></div>
                    :bikeredux.map((item) => (
                        <div className="col-sm-4 mt-3" key={item._id}>
                                 <AllBike allData={item}/>
                        </div>
                    ))
               }
    </div>
       </div>
    </div>
}