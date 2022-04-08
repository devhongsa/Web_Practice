import styles from "../css/Panel.module.css"

function Panel(props){
    console.log('hi')

    return(
        <div className={styles.panel}>
          <div className="panel-heading">
            <h3 className="panel-title">{props.src.split('.')[0]}</h3>
          </div>
          <div className="panel-img">
            <img alt="140x140" className={styles.img} src= {'img/'+props.src} />
            <br/><br/>
          </div>
          <div className="panel-button"> 
              <button className="btn btn-default btn-vote" type="button" data-id={props.id}>Vote</button>
          </div>  
        </div>
    )
};

export default Panel;