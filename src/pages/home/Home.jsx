import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import './home.css'

export default function Home() {
  return (
   <>
      <Header></Header>
      <div className="home"> 
      <Posts/>
      <Sidebar/>
      </div>
   </>
  )
}
