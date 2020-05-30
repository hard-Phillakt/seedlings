import React from 'react';
import gsap from 'gsap';
import './index.scss';

class ArrowBottom extends React.Component {

    constructor(props){
        super(props);

        this.inDeltaY = this.props.ArrowBottom.components.inDeltaY;
        this.layerCount = this.props.ArrowBottom.components.layer.layer.length;
        this.refArrow = React.createRef();
    }

    rotateArrow(){
        const tl = gsap.timeline();

        if(this.props.ArrowBottom.components.layer.count === 2){
            tl.to(this.refArrow.current, {
                rotate: -45,
                duration: 0.5,
            });
        }else {
            tl.to(this.refArrow.current, {
                rotate: 135,
                duration: 0.5,
            }); 
        }
    }


    render(){

        this.rotateArrow();

        return(
            <section className="arrow-wrap">
                <div className="fjc-c">
                    <span ref={this.refArrow} onClick={() => (this.inDeltaY({count: 100, layer: this.layerCount}))} className="arrow arrow__to-bottom"></span>
                </div>
            </section>
        )
    }

}


export default ArrowBottom;