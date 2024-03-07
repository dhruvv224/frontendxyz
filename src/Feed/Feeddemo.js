import React, { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [currentUser, setCurrentUser] = useState('User');
  const [content, setContent] = useState('');
  const [groupName, setGroupName] = useState('');

  const handlePostSubmit = (content) => {
    const newPost = {
      id: posts.length + 1,
      content: content,
      author: currentUser,
    };
    setPosts([...posts, newPost]);
  };

  const handleGroupCreation = (groupName) => {
    const newGroup = {
      id: groups.length + 1,
      name: groupName,
      members: [currentUser],
      requests: [],
    };
    setGroups([...groups, newGroup]);
  };

  const handleJoinGroup = (groupId) => {
    const updatedGroups = groups.map((group) => {
      if (group.id === groupId && !group.members.includes(currentUser)) {
        return {
          ...group,
          requests: [...group.requests, currentUser],
        };
      }
      return group;
    });
    setGroups(updatedGroups);
  };

  const handleAcceptRequest = (groupId, requestUser) => {
    const updatedGroups = groups.map((group) => {
      if (group.id === groupId && group.requests.includes(requestUser)) {
        return {
          ...group,
          members: [...group.members, requestUser],
          requests: group.requests.filter((user) => user !== requestUser),
        };
      }
      return group;
    });
    setGroups(updatedGroups);
  };

  return (
    <div>
      <h1>Welcome to the Community</h1>
      <div>
        <h2>Create a Post</h2>
        <textarea
          placeholder="Write your post here..."
          rows="4"
          cols="50"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={() => handlePostSubmit(content)}>Post</button>
      </div>

      <div>
        <h2>Recent Posts</h2>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.author}</h3>
            <p>{post.content}</p>
            <button onClick={() => setCurrentUser(post.author)}>Connect</button>
          </div>
        ))}
      </div>

      <div>
        <h2>Create a Group</h2>
        <input
          type="text"
          placeholder="Enter group name"
          onChange={(e) => setGroupName(e.target.value)}
        />
        <button onClick={() => handleGroupCreation(groupName)}>Create Group</button>
      </div>

      <div>
        <h2>Groups</h2>
        {groups.map((group) => (
          <div key={group.id}>
            <h3>{group.name}</h3>
            {group.members.includes(currentUser) ? (
              <p>You're already a member of this group.</p>
            ) : (
              <>
                <button onClick={() => handleJoinGroup(group.id)}>Request to Join</button>
                <p>
                  {group.requests.length > 0 &&
                    group.requests.map((request, index) => (
                      <span key={index}>
                        {request} wants to join
                        <button onClick={() => handleAcceptRequest(group.id, request)}>Accept</button>
                      </span>
                    ))}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
