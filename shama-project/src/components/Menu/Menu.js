import React, { useEffect, useRef, useState } from 'react';
import Typed from 'react-typed';
import './Menu.scss'

const Menu = ({sayingArr, say, setSay, findMyGhost}) => {
    const ref = useRef()
    const [isVisible, setIsVisible] = useState(true)
    const [changeSaying, setChangeSaying] = useState({
        sayingText : ''
    })
    const {sayingText} = changeSaying
    const changeVal = (e) => {  
        const {value} = e.target 
        setChangeSaying({
            ...changeSaying,
            sayingText : value
        })
    }
    const onAdd = (e) => {
        if(findMyGhost){
            findMyGhost.saying.push(sayingText)
        }else{
            alert("please connect your account to save")
        }
    }
    const onReset = () => {
        if(findMyGhost){
            findMyGhost.saying.length = 0
        }else{
            alert("please connect your account to save")
        }
    }
    const onDefault = () => {
        if(findMyGhost){
            findMyGhost.saying.push(...sayingArr)
        }else{
            alert("please connect your account to save")
        }
    }
    useEffect(() => {

        if(findMyGhost && findMyGhost.saying.length == 0){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    },)
    console.log(isVisible)
    return (
        <div className="menu">
            <Typed className="subject" strings={['Teach your ghost to say!']} showCursor={false}
                    typeSpeed={80}/>
            <div className="sayingWrap">
                <input type="text" name="sayingText" maxLength="5" autoFocus={true} className="CustomText" onChange={changeVal} ref={ref}/>
                <button type='button' className='btnAdd' onClick={onAdd}>ADD</button>
            </div>
            <span className='mapText'>I can say...</span> 
            <ul className='sayingList'>
            {
                findMyGhost && findMyGhost.saying.map((index,item) => <li key={index}>{findMyGhost.saying[item]}<button className='btnDel'><span className='vh'>delete</span></button></li>)
            }
            </ul>
            <div className='btnWrap'>
                {
                    isVisible && <button type="button" className='btnDefault' onClick={onDefault}>Use Default</button>
                }
                {
                    !isVisible && <button type="button" className='btnReset' onClick={onReset} >Reset</button>
                }
            </div>
        </div>
    );
};

export default Menu;