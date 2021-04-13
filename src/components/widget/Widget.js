import FollowUser from './FollowUser/FollowUser'
import './Widget.css'
const Widget = () => {
    return (
        <div className="widget">
            <section className="widget__top">
                <div className="widget__topHeader">
                    <p>Add to you feed</p>
                </div>
                <div className="widget__topBody">
                    <FollowUser uname={`Anurodh Acharya`} desc={`Security Specialist`} imagePath={`https://media-exp1.licdn.com/dms/image/C5103AQHpfZ3aUfrUKg/profile-displayphoto-shrink_200_200/0/1577278452622?e=1623888000&v=beta&t=NWlX_4YQeEa-_Ez-RmIS8-Tjik7G5Pathjmw3i86svY`}/>
                    <FollowUser uname={`Apaar Dahal`} desc={`Software Engineer`} imagePath={`https://media-exp1.licdn.com/dms/image/C4D03AQHhyxkXkNNCaQ/profile-displayphoto-shrink_200_200/0/1596960559436?e=1623888000&v=beta&t=iCqcGO8_ad5Pcnk9vW0NwH2jfwbHvv-hImlO1J4byqg`}/>
                    <FollowUser uname={`Kushal M.S Pradhan`} desc={`Network Engineer`} imagePath={`https://media-exp1.licdn.com/dms/image/C5603AQE4lTzTtnyA3A/profile-displayphoto-shrink_200_200/0/1593884010807?e=1623888000&v=beta&t=v5u2bxx5mow8S9-KeCqZB7BRomD3sCrTjZZnlfVRGMA`}/>
                    <FollowUser uname={`Nischal Niraula`} desc={`Network Engineer`} imagePath={`https://scontent.fktm4-1.fna.fbcdn.net/v/t1.6435-1/p200x200/80477793_3103531466539459_405973374108434432_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=k4HHbmqVsQoAX8uy0iB&_nc_ht=scontent.fktm4-1.fna&tp=6&oh=2d36aa9cd37fbb6225dea1e4c5d1e0b4&oe=609993A4`}/>
                    <FollowUser uname={`Piyush Yadav`} desc={`Software Engineer`} imagePath={`https://scontent.fktm4-1.fna.fbcdn.net/v/t1.6435-9/83367449_2642966572491508_4310521623141679104_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=sgMsTWPXGLYAX9mBP0Y&_nc_ht=scontent.fktm4-1.fna&oh=580673a8e9f5b3564aab1c00f6682f4f&oe=6098CC18`}/>
                    <FollowUser uname={`Suzan K.C`} desc={`Network Engineer`} imagePath={`https://instagram.fktm4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/84347675_2760412787383310_1476446745176047616_n.jpg?tp=1&_nc_ht=instagram.fktm4-1.fna.fbcdn.net&_nc_ohc=J3tiNdVgy2oAX9kjJlh&edm=ABfd0MgAAAAA&ccb=7-4&oh=e8ccfb3ca9c77f33e32cfc4936931637&oe=60993B84&_nc_sid=7bff83`}/>
                </div>
                <section className="widget__sectionBreak"></section>
                <p className="widget__quote">Now or Never</p>
            </section>
            
            <section className="widget__bottom">
                <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt=""/>
            </section>
        </div>
    )
}

export default Widget