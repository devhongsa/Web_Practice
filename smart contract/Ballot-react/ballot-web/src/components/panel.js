function Panel(){
    return(
        <div className="panel">
          <div className="panel-heading">
            <h3 className="panel-title"></h3>
          </div>
          <div className="panel-body">
            <img alt="140x140" className="img-rounded img-center" src="images/Milli.png" />
            <br/><br/>
            <div className="pannel-button"> 
              <button className="btn btn-default btn-vote" type="button" data-id="0">Vote</button>
            </div>  
          </div>
        </div>
    )
}