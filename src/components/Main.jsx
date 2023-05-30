import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa'
import { BsApple } from 'react-icons/bs'
import { BiWifi } from 'react-icons/bi'
import mcsvg from '../assets/Mastercard_2019_logo.svg'
import mcpng from '../assets/mastercard-png.png'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const Main = () => {
    const [typeText, setTypeText] = useState('text');
    const [typePassword, setTypePassword] = useState('password');
    const [icon, setIcon] = useState(<AiOutlineEyeInvisible />)

    const handleTogglePwd = () => {
        if (typePassword === 'password') {
            setIcon(<AiOutlineEye />)
            setTypePassword('text')
        } else {
            setIcon(<AiOutlineEyeInvisible />)
            setTypePassword('password')
        }
    }
    const handleToggleCvv = () => {
        if (typeText === 'text') {
            setIcon(<AiOutlineEye />)
            setTypeText('password')
        } else {
            setIcon(<AiOutlineEyeInvisible />)
            setTypeText('text')
        }
    }
    return (
        <div className='main'>
            <div className='main-header'>
                {/* <small>X</small> */}
                <div className='main-contain'>
                    <div className='main-container'>
                        <p style={{ fontSize: 20, color: '#263264' }}><span style={{ color: '#263264', fontWeight: 'bolder', fontSize: 20 }}>AceCoin</span>Pay</p>
                        <div className='main-time'>
                            <p>0</p>
                            <p>1</p>
                            <p style={{ marginLeft: 5 }}>:</p>
                            <p>1</p>
                            <p>9</p>
                        </div>
                    </div>
                    <div className='main-first'>
                        <div className='main-first-container'>
                            <h4 style={{ color: '#263264' }}>Card Number</h4>
                            <div className='main-first-label'>
                                <small style={{ color: '#ccc' }}>Enter the 16-digit card number on the card</small>
                                <div style={{ color: '#263264', fontWeight: 'bold', cursor: 'pointer' }}><FaPen style={{ color: '#263264' }} /> Edit</div>
                            </div>
                            <div className='main-card-input'>
                                <img src={mcsvg} alt='' width={30} height={30} />
                                <input type='text' className='main-input' />
                            </div>
                        </div>
                    </div>
                    <div className='main-second'>
                        <div className='main-second-container'>
                            <h4 style={{ color: '#263264' }}>CVV Number</h4>
                            <small style={{ color: '#ccc' }}>Enter the 3 or 4 digit number on the card</small>
                        </div>
                        <div className='main-cvv-input'>
                            <input type={typeText} className='main-input' />
                            <span onClick={handleToggleCvv} style={{ cursor: 'pointer' }}>{icon}</span>
                        </div>
                    </div>
                    <div className='main-third'>
                        <div className='main-third-container'>
                            <h4 style={{ color: '#263264' }}>Expiry Date</h4>
                            <small style={{ color: '#ccc' }}>Enter the expiration date of the card</small>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='main-expiry1-input'>
                                <input type='text' className='main-input' />
                            </div>
                            <small>/</small>
                            <div className='main-expiry-input'>
                                <input type='text' className='main-input' />
                            </div>
                        </div>
                    </div>
                    <div className='main-second'>
                        <div className='main-second-container'>
                            <h4 style={{ color: '#263264' }}>Password</h4>
                            <small style={{ color: '#ccc' }}>Enter your Dynamic password</small>
                        </div>
                        <div className='main-cvv-input'>
                            <input type={typePassword} className='main-input' />
                            <span onClick={handleTogglePwd} style={{ cursor: 'pointer' }}>{icon}</span>
                        </div>
                    </div>
                    <div className='main-pay-btn'>
                        <button>Pay Now</button>
                    </div>
                </div>
            </div>
            <div className='main-billing'>
                <div className='main-billing-container'>
                    <div className='main-billing-card'>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 30 }}>
                            <BiWifi style={{ color: 'black', marginTop: 30 }} />
                            <BiWifi style={{ color: 'black', marginTop: 30 }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', margin: 30 }}>
                            <p style={{ color: '#263264', marginTop: 80, fontSize: 15, fontWeight: 'bold' }}>Jonathan Michael</p>
                            <div style={{ color: '#263264', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: -30, fontWeight: 'bolder' }}>
                                <small style={{ fontSize: 30, color: '#263264' }}>....</small>
                                <p>3456</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <p style={{ color: '#263264', marginTop: -5, fontSize: 15 }}>09/22</p>
                                <div><img src={mcpng} alt='' width={35} height={30} style={{ marginLeft: 50 }} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='main-billing-checkout'>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <small style={{ color: '#263264' }}>Company</small>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <BsApple style={{ color: '#263264' }} />
                                <h4 style={{ color: '#263264', fontWeight: 'bolder' }}>Apple</h4>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: -25 }}>
                            <small style={{ color: '#263264' }}>Order Number</small>
                            <h4 style={{ color: '#263264', fontWeight: 'bolder' }}>1266201</h4>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: -25 }}>
                            <small style={{ color: '#263264' }}>Product</small>
                            <h4 style={{ color: '#263264', fontWeight: 'bolder' }}>MacBook Air</h4>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: -20 }}>
                            <small style={{ color: '#263264' }}>VAT(20%)</small>
                            <h4 style={{ color: '#263264', fontWeight: 'bolder' }}>$100.00</h4>
                        </div>
                    </div>
                    {/* <div>
                        <small>You have to pay</small>
                        <h3>549<small>.99</small> <p>USD</p></h3>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Main;