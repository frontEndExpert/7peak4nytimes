import React, { Component } from 'react';
import Backdrop from './Backdrop'
import Auxiliry from '../../hoc/Auxiliry/Auxiliry';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    
    render () {
        const modal_height = '560px';
        return (
            <Auxiliry>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div  className='Modal'
                    style={{  transform: this.props.show ? 'translateY(0)' : 'translateY(-400vh)',
                        opacity: this.props.show ? '1' : '0'
                        // display: this.props.show ? 'block' : 'none'
                    }}>
                    {this.props.children}
                </div>
                <style jsx>{`
                .Modal {
                    position: fixed;
                    z-index: 500;
                    background-color: white;
                    width: 90%;
                    height: ${modal_height};
                    /* border: 1px solid #ccc; */
                    /* box-shadow: 1px 1px 1px black; */
                    padding: 5px;
                    left: 5%;
                    top: 5%;
                    box-sizing: border-box;
                    transition: all 0.3s ease-out;
                }
                
                @media (max-width: 420px) {
                    .Modal {
                        width: 90%; 
                    }
                }
                @media (max-height: 570px) {
                    .Modal {
                        height: 540px;
                        top: 10px;
                    }
                }
                `}</style>
            </Auxiliry>
        )
    }
}

export default Modal;