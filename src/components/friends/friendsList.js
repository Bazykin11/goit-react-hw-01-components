import { PropTypes } from 'prop-types';

import {
    Friends,
    FriendsItem,
    FriendsStatus,
    FriendsName,
  } from './friendsList.styled';

export const FriendsList = ({ friends }) => {
    return (
      <Friends>
        {friends.map(friend => (
          <FriendsItem key={friend.id}>
            <FriendsStatus status={friend.isOnline}></FriendsStatus>
            <img src={friend.avatar} 
            alt="User avatar" 
            width="48" />
            <FriendsName>{friend.name}</FriendsName>
          </FriendsItem>
        ))}
      </Friends>
    );
  };

  FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    )
  }