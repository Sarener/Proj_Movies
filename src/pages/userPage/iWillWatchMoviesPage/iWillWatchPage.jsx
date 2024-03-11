    import { Menu } from "../../menu/Menu"
    import { ReceivingIWillWatchMoviesUser } from "../../../components/users/receivingMoviesUser/receivingIWillWatchMoviesUser"
    import './iWillWatchPage.scss'
    export const IWillWatchPage =()=>{
    return(
        <div className="UserPage">
        <Menu/>
        <h2>Тут находятся фильмы, которые вы посмотрели</h2>
        <div className="moviesUserPageWrapper">
        <ReceivingIWillWatchMoviesUser/>
        </div>
        </div>
    )
    }