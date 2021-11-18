import React from 'react'
import { CardCenter, UpContainer, Top, BlockCenter} from './styled'
import { Photoone } from './styled'
import logoone from '../../assests/Logo_PureSpeed.png'
import HomePageText from './HomePageText'
import imag1 from '../../assests/vitoriaBottas.jpg'



const HomePageForm = () => {
    return(
        <UpContainer>
            <HomePageText/>
            <CardCenter>
                <img src={imag1}/>     
            </CardCenter> 
        </UpContainer>
    )
}

export default HomePageForm