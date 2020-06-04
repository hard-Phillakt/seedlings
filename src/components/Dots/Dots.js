import React from 'react';
import { connect } from 'react-redux';
import toggleLayers from '../../actions/toggleLayers';

import './Dots.scss';

const dots = (props) => {

    const layers = props.layers.layers;

    return (

        <ul className="dots">

            {
                layers.map((item, i) => {

                    return (

                        <li key={item}>

                            {
                                item === props.layers.count
                                    ?
                                    (<a href="#!" className="dots-link__active" onClick={() => (props.onToggleLayersHandler(item))}></a>)
                                    :
                                    (<a href="#!" onClick={() => (props.onToggleLayersHandler(item))}></a>)
                            }

                        </li>

                    )
                })
            }

        </ul>
    );

}

const mapStateToProps = (state) => {

    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onToggleLayersHandler: (param) => {

            dispatch(toggleLayers(param));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dots);