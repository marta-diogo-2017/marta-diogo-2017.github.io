var Iframemap = React.createClass({

  render:function()
  {
    var Iframe=this.props.iframe;

    return(

      <div>

       <Iframe src={this.props.src} className={this.props.className}/>

      </div>
      )
  }
});
