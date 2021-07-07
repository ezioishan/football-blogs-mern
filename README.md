# Football Blogs

-   Built on ReactJS, NodeJs, ExpressJs & MongoDb.

## How to run

`cd football-blogs-mern`

### add your own mongoDb atlas url in '/server/index.js' under

`const CONNECTION_URL = "mongodb+srv://<username>:<password>@cluster0.fhlsd.mongodb.net/<Db_name>?retryWrites=true&w=majority"; `

Firstly, start backend:
`cd server`

`npm install`

`node index.js`

-To start frontend :
`cd client`

`npm install`

`npm start`

Now visit : http://localhost:3000/

## Screenshots

Home page(No blogs created):
![no-blogs-home](/screenshots/noblog_home.png)

Home page:
![no-blogs-home](/screenshots/blog_home.png)

Viewing a blog:
![view](/screenshots/view_blog.png)

Editing a blog:
![edit](/screenshots/edit_blog.png)

Removing a blog:
![remove](/screenshots/remove_blog.png)
