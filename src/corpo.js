
import Post from './post'
import Stories from './stories'
import Sidebar from './sidebar'

export default function Corpo() {
    return(
        <div className='corpo'>
            <div className='esquerda'>
                <Stories/>
                <Post/>
            </div>
            <Sidebar/>
        </div>
    )
    
}