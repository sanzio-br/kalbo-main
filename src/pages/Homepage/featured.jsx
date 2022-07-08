import { getEvents } from "../../redux/features/eventsfeature";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Featured = () => {
  const dispatch = useDispatch();
  const eventsListState = useSelector((store) => {
    return store["events"];
  });
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  const { loading, events, errorMessage } = eventsListState;
  const newEventsList = events.slice(0, 4);
  return (
    <div className="featured">
      <h1 className="h-2 headers">Upcoming safaris</h1>
      <div className="container">
      {loading ? "Loading" : ""}
        {errorMessage ? errorMessage : ""}
        <div className="row clearfix">
          {newEventsList.map(({ url, title, packageData, id }) => {
            return (
              <div className="col-md-3 col-sm-6 col-xs-12 graphicdesign photography">
                <div className="gal-detail thumb">
                  <a
                    href={`/kalbo/safari-packages/${id}`}
                    className="image-popup"
                    title="Screenshot-5"
                  >
                    <img src={url} className="thumb-img" alt="work-thumbnail" />
                  </a>
                  <h4 className="text-center">
                    {packageData ? packageData.destination : ""}
                  </h4>
                  <div className="ga-border"></div>
                  <Link to={`/kalbo-main/safari-packages/${id}`}>
                    <p className="text-muted text-center">
                      <small>{title}</small>
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Featured;
