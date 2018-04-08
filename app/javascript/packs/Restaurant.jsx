import React from 'react'
import Modal from 'react-modal'

class Restaurant extends React.Component {

    render() {
        console.log('restaurant object', this.props.data);

        return (
            <div className="row">

                <div className="col-sm-2 cuisine_font hidden-sm hidden-xs">
                    {this.props.data.cuisine_icon}
                </div>

                <div className="col-xs-10 col-sm-9">


                    <div className="row">

                        <div className="col-xs-11">

                                <strong>{this.props.data.name}</strong> ({this.props.data.cuisine_name})
                                <p className="small">
                                    Address: {this.props.data.address}
                                </p>
                                <p className="small">
                                    Delivery Time: {this.props.data.max_delivery_time}
                                </p>
                                <GetStars val={this.props.data.rating}/>
                        </div>

                        <div className="col-xs-1 vcenter-no-margin">
                            {this.props.data.accept_10_bis && <img className="ten_bis_icon"/>}
                        </div>

                    </div>


                </div>

            </div>
        )
    }


}


function GetStars(arg) {


    var stars = [];
    for (var i = 0; i < 3; i++) {
        if (i < arg.val) {
            stars.push("fa fa-star");
        }
        else {
            stars.push("fa fa-star-o");
        }

    }

    return (
        <div>
            {stars.map(function (line, i) {
                    return (<i className={line} aria-hidden="true" key={i}></i>)
                }
            )}
        </div>
    )
}

export default Restaurant