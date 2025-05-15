export const NewsItems = ({ data, index }) => {
    const date = new Date(data.publishedAt);
  
    // 12-hour format for time
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };

  
    return (
      <>
        {data.urlToImage && ( // Conditional rendering using &&
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4" key={data.url}>
            <div className="card">
              <img src={data.urlToImage} className="card-img-top" height={"220rem"} alt="News Image" />
              <div className="card-body mb-2">
                <h5 className="card-title" style={{ color: "#3C3D37", fontWeight: "700" }}>
                  {data.title}
                </h5>
                <p className="card-text" style={{ color: 'gray', fontWeight: '600' }}>
                  {data.description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <a href={data.url} className="btn btn-dark">
                    Read More
                  </a>
                  <div className="d-flex flex-column">
                    <span style={{ fontSize: ".8rem", fontWeight: "600", color: "gray" }}>
                      {date.toLocaleTimeString('en-US', timeOptions)}
                    </span> {/* 12-hour format */}
                    <span style={{ fontSize: ".8rem", fontWeight: "600", color: "gray" }}>
                      {date.toLocaleDateString('en-US', dateOptions)}
                    </span> {/* Formatted date */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  