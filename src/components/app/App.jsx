import { Container } from "./app.styled";

import { Profile } from "../profile/profile";
import user from "../data/user.json"

import { Statistics } from "../statistics/statistics";
import data from "../data/data.json"

import {FriendsList} from '../friends/friendsList';
import friends from '../data/friends.json'

import { TransactionHistory } from "components/transaction/transactionHistory";
import transactions from "../data/transactions.json"

export const App = () => {
  return  ( 
    <Container>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
    />
      <Statistics title="Upload stats" stats={data}/>
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
);
};
