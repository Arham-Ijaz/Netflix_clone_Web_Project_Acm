import React from 'react'
import './Footer.css'
import facebookicon from '../../images/facebook.png'
import instagramicon from '../../images/instagram.png'
import youtubeicon from '../../images/youtube.png'

const footer = () => {
    return (
        < div className='footer'>

            <div className='social'>
                <img className='socialsize' src={facebookicon} alt="" />
                <img className='socialsize' src={instagramicon} alt="" />
                <img id='you' src={youtubeicon} alt="" />


            </div>


            <ul class="foot_a" id='a1'>
                <li class="foot_li">
                    <a class="foot_a" href="/browse/audio-description"><span class="footspan">Audio Description</span>
                    </a></li>
                <li class="foot_li">
                    <a class="foot_a" href="https://help.netflix.com/"><span class="footspan">Help Centre</span></a></li>
                <li class="foot_li">
                    <a class="foot_a" href="/redeem">
                        <span class="footspan">Gift Cards</span></a></li>
                <li class="foot_li">
                    <a class="foot_a" href="https://media.netflix.com/">
                        <span class="footspan">Media Centre</span>
                    </a></li>
                <li class="foot_li">
                    <a class="foot_a" href="http://ir.netflix.com/">
                        <span class="footspan">Investor Relations</span></a></li>
                <li class="foot_li">
                    <a class="foot_a" href="https://jobs.netflix.com/">
                        <span class="footspan">Jobs</span></a></li>
                <li class="foot_li"><a class="foot_a" href="https://help.netflix.com/legal/termsofuse">
                    <span class="footspan">Terms of Use</span></a></li>
                <li class="foot_li"><a class="foot_a" href="https://help.netflix.com/legal/privacy">
                    <span class="footspan">Privacy</span></a></li>
                <li class="foot_li">
                    <a class="foot_a" href="https://help.netflix.com/legal/notices">
                        <span class="footspan">Legal Notices</span></a></li>
                <li class="foot_li">
                    <a class="foot_a" href="/Cookies">
                        <span class="footspan">Cookie Preferences</span>
                    </a></li>
                <li class="foot_li">
                    <a class="foot_a" href="https://help.netflix.com/legal/corpinfo">
                        <span class="footspan">Corporate Information</span></a></li>
                <li class="foot_li">
                    <a class="foot_a" href="https://help.netflix.com/contactus" >
                        <span class="footspan">Contact Us</span></a></li></ul>

        </div>
    )
}

export default footer
