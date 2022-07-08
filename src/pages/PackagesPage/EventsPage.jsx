import React, { useEffect , Suspense} from "react";
import Breadcrumbs from "./crubs";
import { useSelector, useDispatch } from 'react-redux'
import { getEvents } from '../../redux/features/eventsfeature'
import {AiOutlineCalendar} from 'react-icons/ai'
import {WiDaySunny} from 'react-icons/wi'
import {BsPeopleFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
import Button from "../Homepage/button";
export default function Events() {
  const dispatch = useDispatch();
    const eventsListState = useSelector((store)=>{
        return store['events']
    })
    useEffect(()=>{
        dispatch(getEvents())
    },[dispatch])
    const {events} = eventsListState;
  return (
    <section style={{'textAlign':'center'}} className="container mt-0">
      <Breadcrumbs/>
      <h3 style={{
        'color': 'var(--red)',
        "margin":"5px auto"
        }}>
        Available Tours
        </h3>
      <div className="container mt-3">
        <div className="row clearfix">
        {
          events.map(({ title, packageData, id, url}) => {
            return (
              <div className="col-md-3 col-sm-6 col-xs-12" key={id}>
                <div className="boxs project_widget">
                  <div className="pw_img">
                  <Suspense fallback={<div>Loading...</div>}>
                  <img className="img-responsive" src={url} alt="img" />
                  </Suspense>
                  </div>
                  <div className="pw_content">
                    <div className="pw_header">
                      <Link to={`/kalbo/safari-packages/${id}`}>
                        <h6>{title}</h6>
                      </Link>
                      <small className="text-muted">
                        {packageData ? packageData.destination : ""}
                      </small>
                    </div>
                    <div className="pw_meta">
                      <span>
                        <AiOutlineCalendar className="card-icon" />
                        {packageData ? `${packageData.startDate} to ${packageData.endDate}`: ""}
                      </span>
                      <span>
                        <WiDaySunny className="card-icon" />
                        {packageData ? packageData.days : ""} 
                        <BsPeopleFill className="card-icon" />
                        {packageData ? packageData.people : ""}
                      </span>
                      <Link to={`/admin/safari-packages/${id}`}>
                        <Button id={id} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      </div>
    </section>
  )
}
