Authentication Routes::
/api/users/signup: Register a new user account.
/api/users/signin: Log in as a user.
/api/users/logout: Log out the currently logged-in user.
/api/users/logout-all-devices: Log out the user from all devices.

User Profile Routes
/api/users/get-details/:userld: Retrieve user information, ensuring sensitive data like passwords is not exposed.
/api/users/get-all-details: Retrieve information for all users, avoiding display of sensitive credentials like passwords.
/api/users/update-details/:userld: Update user details while ensuring that sensitive data like passwords remains secure and undisclosed.

Post Routes
/api/posts/all: Retrieve all posts from various users to compile a news feed.
/api/posts/:postld: Retrieve a specific post by ID.
/api/posts/: Retrieve all posts for a specific user to display on their profile page.
/api/posts/: Create a new post.
/api/posts/:postid: Delete a specific post.
/api/posts/:postid: Update a specific post.

comments Routes:
/api/comments/:postld: Get comments for a specific post.
/api/comments/:postld: Add a comment to a specific post.
/api/comments/:commentld: Delete a specific comment.
/api/comments/:commentld: Update a specific comment.

Likes Routes:

/api/likes/:id: Get likes for a specific post or comment.
/api/likes/toggle/:id: Toggle like on a post or comment.

Friendship Routes::
/api/friends/get-friends/:userld: Get a user's friends.
/api/friends/get-pending-requests: Get pending friend requests.
/api/friends/toggle-friendship/:friendld: Toggle friendship with another user.
/api/friends/response-to-request/:friendld: Accept or reject a friend request.


Friend Requests:
Endpoints: POST /friends/:id/request, POST /friends/:id/accept, DELETE /friends/:id/reject
Enable users to send and accept/reject friend requests.
Only friends can interact in certain ways.
Friend List:
Endpoint: GET /friends
Return list of a user's friends.


OTP Routes::
/api/otp/send: Send an OTP for password reset.
/api/otp/verify: Verify an OTP.
/api/otp/reset-password: Reset the user's password.

Post Management
Implement CRUD operations for posts, including fields like caption and an image URL related to the post.
Ensure that each post references the user who created it.
Post can be updated or deleted only by the post owner.

Comment System
Develop a comment system that allows users to add, update, and delete comments on posts.
Comments can be updated or deleted only by the post owner or the commenter.

Like Functionality
Create a like system for posts, including logic with MongoDB and population of documents.
Display counts of likes and comments on posts.
Populate user information (id, name, and email) for likes, comments, and posts.

Friendship Features
Implement a friendship system with features like getting user friends, managing pending friend requests, toggling friendships, and accepting/rejecting friend requests.

User Profile Updates
Enable users to update their profiles, including fields like name, gender, or avatar.
Implement avatar uploads for user profiles.
OTP-Based Password Reset (Additional Task)
OTP-based password reset feature.
Create controllers, models, and repositories for OTP management.
You can use the Nodemailer library for email communication.

