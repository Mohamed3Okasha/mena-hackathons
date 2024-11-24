import { UserCard } from "./UserCard";
import mgLogo from '../../assets/mh-logo-web.png';

export function ProfileId(){
    const user = {
        profilePicture: "https://via.placeholder.com/150",
        // profilePicture: ``,
        name: "John Doe",
        position: "Software Engineer",
        company: "Tech Corp",
        email: "john.doe@example.com",
        mobile: "+123456789",
        qrValue: "https://menahackathons.com/user/johndoe",
        identityLogo: mgLogo,
        identityName: `MENA Hackathons`,
        // socialMedia:{
        //     linkedIn: `linkedin.com`,
        //     instagram: `instagram.com`,
        //     facebook: `facebook.com`,
        //     youtube: `youtube.com`,
        // }
      };
    
    return(
        <div className={`flex flex-col items-center`}>
            <UserCard {...user} />
        </div>
    )
    
}