# Project Name

tofix

<br>

## Description

The main goal of this app is to find the nearest and fast repair solutions from your actual location.

## User Stories

- **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** As an anonymous user I can sign up on the platform so I can start to use the app.
- **Login:** As a user I can login to the platform so that I can access the main functions of the app.
- **Logout:** As a logged in user I can logout from the platform so no one else can use it.
- **Profile Page**: As a logged in user I can see my full information, choose if I want to be helped or help someone else if I have a establishment.
- **Categories:** As a logged in user I can choose what category I want be help with.
- **(Home/Cars/Devices)Sellers List:** As a logged in user I can access the providers list and choose the one I want and see them in the map.
- **Reviews:** As logged in user I can see the establishment reviews.
- **Map:** As a logged in user I can see the nearest repair establishments from my location.

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                             | Component            | Permissions                | Behavior                                          |
| -------------------------------- | -------------------- | -------------------------- | ------------------------------------------------- |
| `/login`                         | LoginPage            | anon only `<AnonRoute>`    | Login form, navigates to home page after login.   |
| `/signup`                        | SignupPage           | anon only `<AnonRoute>`    | Signup form, navigates to home page after signup. |
| `/`                              | HomePage             | public `<Route>`           | Home page.                                        |
| `/profile`                       | ProfilePage          | user only `<PrivateRoute>` | User and player profile for the current user.     |
| `/profile/edit`                  | EditProfilePage      | user only `<PrivateRoute>` | Edit user profile form.                           |
| `/categories`                    | categoriesPage       | user only `<PrivateRoute>` | See different categories.                         |
| `/categories/home`               | categoriesHome       | user only `<PrivateRoute>` | Home posts list.                                  |
| `/categories/auto`               | categoriesAuto       | user only `<PrivateRoute>` | Auto posts list.                                  |
| `/categories/devices`            | categoriesDevices    | user only `<PrivateRoute>` | Devices posts list .                              |
| `/categories/create`             | categoriesCreate     | user only `<PrivateRoute>` | Devices posts list .                              |
| `/categories/home/:homeId`       | HomePostDetails      | user only `<PrivateRoute>` | Home post details                                 |
| `/categories/auto/:autoId`       | AutoPostDetails      | user only `<PrivateRoute>` | Auto post details.                                |
| `/categories/devices/:devicesId` | DevicesPostDetails   | user only `<PrivateRoute>` | Device post details.                              |
| `/reviews`                       | EstablishmentReviews | user only `<PrivateRoute>` | Reviews comments                                  |

## Components

Pages:

- LoginPage

- SignupPage

- HomePage

- ProfilePage

- EditProfilePage

- CategoriesPage

- CategoriesHomePage

- CategoriesAutoPage

- CategoriesDevicesPage

- CategoriesHomeDetailsPage

- CategoriesAutoDetailsPage
- CategoriesDevicesDetailsPage

- CategoriesCreatePostPage

- ReviewsCreate

- ReviewsPage

Components:

- ProfileCard
- PostCard
- Navbar

## Services

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.logout()`
    - `.validate()`

- **User Service**

  - `userService` :
    - `.updateCurrentUser(id, userData)`
    - `.getCurrentUser()`

- **Category Service**

  - `categoriesService` :
    - `.addCategories(categoriesData)`
    - `.getCategoriess()`
    - `.getOneCategorie(id)`
    - `.deletecategorie(id)`

- **Post Service**

  - `postService` :
    - `.createPost(id)`
    - `.getPost(id)`

<br>

# Server / Backend

## Models

**User model**

```javascript
{
  username: { type: String, required: true, unique: true}
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  comments: { type: Schema.Types.ObjectId, ref:'Comment' },
  establishments: [ { type: Schema.Types.ObjectId, ref:'Establishment' } ]
}
```

**Comments model**

```javascript
 {
   name: { type: String, required: true },
   img: { type: String },
   comment: { type: String}

 }
```

**Establishment model**

```javascript
{
  companyName: { type: String, required: true },
  location: { type: String, required: true },
  profileImage: { type: String },
  phoneNumber: { type: Number},
  email: { type: String, required: true, unique: true }

}
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                                    | Request Body                                                | Success status | Error Status | Description                                                                                                                     |
| ----------- | -------------------------------------- | ----------------------------------------------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/auth/profile `                       | Saved session                                               | 200            | 404          | Check if user is logged in and return profile page                                                                              |
| POST        | `/auth/signup`                         | {name, email, password}                                     | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                          | {username, password}                                        | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST        | `/auth/logout`                         |                                                             | 204            | 400          | Logs out the user                                                                                                               |
| GET         | `/api/categories`                      |                                                             |                | 400          | Show all categories                                                                                                             |
| GET         | `/api/categories/home`                 |                                                             |                |              | Show specific category.                                                                                                         |
| GET         | `/api/categories/auto`                 |                                                             |                |              | Show specific category.                                                                                                         |
| GET         | `/api/categories/devices`              |                                                             |                |              | Show specific category.                                                                                                         |
| POST        | `/api/categories/establishment/create` | { companyName, location, profileImage, phoneNumber, email } | 201            | 400          | Create a new Establishment.                                                                                                     |
| PUT         | `/api/profile/edit/:userId`            | { username, img, establishments }                           | 200            | 400          | edit profile                                                                                                                    |
| DELETE      | `/api/categories/delete/:postId`       |                                                             | 201            | 400          | delete post                                                                                                                     |
| GET         | `/api/reviews/`                        |                                                             |                |              | show reviews                                                                                                                    |
| POST        | `/api/reviews/create`                  | { name, img, comment }                                      | 200            | 404          | add review                                                                                                                      |
| DELETE      | `/api/reviews/:reviewId`               |                                                             | 200            | 400          | delete review                                                                                                                   |
| GET         | `/api/categories/home/:homeId`         |                                                             | 201            | 400          | specific home post                                                                                                              |
| GET         | `/api/categories/auto/:autoId`         |                                                             | 201            | 400          | specific auto post                                                                                                              |
| GET         | `/api/categories/devices/:deviceId`    |                                                             | 201            | 400          | specific device post                                                                                                            |

<br>

## API's

<br>

## Packages

npm react-router-dom
npm axios

<br>

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/sl7YRuH3/tofix) or a picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/pedrocncosta/tofix-management-client)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com) - The url to your _public_ presentation slides

### Contributors

Francisco Bento - <FranciscoGBento> - <[linkedin-profile-link](https://www.linkedin.com/in/francisco-bento-b290b0233/)>

Pedro Costa - <pedrocncosta> - <[linkedin-profile](https://www.linkedin.com/in/pedro-cn-costa/)>
