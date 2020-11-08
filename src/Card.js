
function Card({college}) {
    return (
      <div className="card">
        <div className="image">
            <div className="bg">
            </div>
        {college.promoted?<div className="promoted">Promoted</div>:""} 
            <div className="rating">
                <div className="rating-number">{college.rating}/5</div>
                <div className="rating-text">{college.rating_remarks}</div>
            </div>
            <div className="ranking">
                <div className="key">
                    {college.tags.map((tag)=>(
                    <div className="rounded"> {tag}</div>
                    ))}
                </div>
                <div className="college-number">#{college.ranking}</div>
            </div>
        </div>
        <div className="info">
            <div className="info-main">
                <div className="name">{college.college_name}</div>
                <div className="price">{college.original_fees}</div>
            </div>
            <div className="info-secondary">
                <div className="text">
                    <span className="dark">{college.nearest_place[0]}</span>
                    <span className="light">| {college.nearest_place[1]}</span>
                </div>
                <div className="number">
                    <div className="amount">
                    {college.discounted_fees}
                    </div>
                    <div className="frequency">
                    {college.fees_cycle}
                    </div>
                </div>
            </div>
            <div className="nearby">
                <span class="match">97% Match:</span>
                <span>{college.famous_nearest_places}</span>
            </div>
            <div className="offers">
                <div className="discount"> {college.offertext} </div>
                {college.amenties.map((ammenity)=>(
                <span className="ammenities">{ammenity}</span>
                ))}
            </div>
        </div>
      </div>
    );
  }

  export default Card;