import { 
  Board, 
  ProfileText, 
  ImgDesing,
  ProfileList,
  ProfileListTag,
  ProfileUl, 
  ProfileItem, 
  ProfileSpan 
} from "./profile.styled";
import { PropTypes } from 'prop-types';

export const Profile = ({username,tag, avatar,location,followers,views,likes}) => {
return (
    <Board>
      <div>
        <ImgDesing
          src={avatar} 
          width = "320"
          alt="User avatar"
        />
        <ProfileText>
          <ProfileList>{username}</ProfileList>
          <ProfileListTag>{tag}</ProfileListTag>
          <ProfileListTag>{location}</ProfileListTag>
        </ProfileText>
      </div>

      <ProfileUl >
        <ProfileItem>
          <ProfileSpan >Followers</ProfileSpan>
          <ProfileSpan >{followers}</ProfileSpan>
        </ProfileItem>
        <ProfileItem>
          <ProfileSpan >Views</ProfileSpan>
          <ProfileSpan >{views}</ProfileSpan>
        </ProfileItem>
        <ProfileItem>
          <ProfileSpan >Likes</ProfileSpan>
          <ProfileSpan >{likes}</ProfileSpan>
        </ProfileItem>
      </ProfileUl>
    </Board>
)
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};