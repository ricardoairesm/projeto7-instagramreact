
import Posts from './post'
import Stories from './stories'
import Sidebar from './sidebar'

export default function Corpo() {
    return(
        <div className='corpo'>
            <div className='esquerda'>
                <Stories/>
                <Posts/>
            </div>
            <Sidebar/>
        </div>
    )
    
}