import React from 'react'

class Restaurant extends React.Component {

    render() {
        console.log('restaurant object', this.props.data);
        const tenBisIcon = <img className="ten_bis_icon"/>;

        return (
            <div className="row">

                <div className="col-sm-2 cuisine_font hidden-sm hidden-xs">
                    {this.props.data.cuisine_icon}
                </div>

                <div className="col-xs-10 col-sm-9">


                    <div className="row">

                        <div className="col-xs-11">

                            <p>
                                <strong>{this.props.data.name}</strong> ({this.props.data.cuisine_name})
                                <p className="small">
                                    Address: {this.props.data.address}
                                </p>
                                <p className="small">
                                    Delivery Time: {this.props.data.max_delivery_time}
                                </p>
                                <GetStars val={this.props.data.rating}/>
                            </p>
                        </div>

                        <div className="col-xs-1 vcenter-no-margin">
                            {this.props.data.accept_10_bis && tenBisIcon}
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