import { useState } from 'react';

function useUsers() {
  const [users, setUsers] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  async function fetchSingleUser() {
    try {
      let response = await fetch('/api/users?limit=1&quality=0');
      if (response.status === 200) {
        let fetchedUsers = await response.json();
        setUsers([...users, fetchedUsers[0]]);
      } else {
        throw 'Error fetching user. Try to slow down on the requests and try again.';
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function refreshUser(index) {
    try {
      setIsRefreshing(true);
      let response = await fetch('/api/users?limit=1&quality=0');
      if (response.status === 200) {
        let fetchedUsers = await response.json();
        let newUsers = [...users];
        newUsers[index] = fetchedUsers[0];
        setUsers(newUsers);
      } else {
        throw 'Error refreshing the user. Please try again';
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsRefreshing(false);
    }
  }

  async function refreshAllUsers() {
    try {
      let usersLength = users.length;
      let response = await fetch(`https://tinyfac.es/api/data?limit=${usersLength}&quality=0`);
      if (response.status === 200) {
        let fetchedUsers = await response.json();
        setUsers(fetchedUsers);
      } else {
        throw 'Error refreshing all users. Please try again';
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    users,
    isRefreshing,
    setUsers,
    fetchSingleUser,
    refreshUser,
    refreshAllUsers,
  };
}

export default useUsers;
