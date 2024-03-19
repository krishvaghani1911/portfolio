import './header.scss'

export default function Header() {
  return (
    <div className='container'>
        <header>
            <nav>
                <h1>Krish</h1>
                <div className='nav'>
                    <div><a href="">About</a></div>
                    <div><a href="">Project</a></div>
                    <div><a href="">Contact</a></div>
                </div>
            </nav>
        </header>
    </div>  
  )
}