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
                    <span className="close-btn" 
                    onClick={this.props.modalClosed}>X</span>
                    <p>
                    You probebly typing too fast for the NY Times Article Search.
                    Please close this window and try again slowly.</p>
                    {/* this.props.children */}
                </div>
                <style jsx>{`

                .Modal {
                    position: fixed;
                    left: 20%;
                    top: 20%; 
                    z-index: 500;
                    background-color: white;
                    width: 60%;
                    min-width: 300px;
                    height: 120px;
                    border: 1px solid #ccc; 
                    border-radius: 10px;
                    box-shadow: 1px 1px 1px black;
                    padding: 15px;
                    
                    box-sizing: border-box;
                    transition: all 0.3s ease-out;
                }
                .close-btn{
                    width: 60px;
                    height: 60px;
                    padding: 4px 6px;
                    margin: 0px 0px 20px 0px;

                    font-size: 14px;
                    border: 1px solid black;
                    border-radius: 6px;
                    background-color: #cccccc;
                    cursor: pointer;
                }

                .close-btn:hover,
                .close-btn:focus{
                    background-color: #eeeeee;
                }
                p{
                    margin-top:10px;
                }

                @media (max-width: 420px) {
                    .Modal {
                        left: 20px;
                        top: 20px; 
                        z-index: 500;
                        background-color: white;
                        width: 260px;
                        min-width: 260px;
                        height: 180px; 
                    }
                }
                
                `}</style>
            </Auxiliry>
        )
    }
}

export default Modal;