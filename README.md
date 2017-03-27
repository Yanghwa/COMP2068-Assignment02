# COMP2068-Assignment02
Assignment02 - CRUD
1.  Create a new ExpressJS application

- Using express generator, the basic structure is made

2.  Implement a site design using your own CSS, or a framework like Bootstrap or Foundation.  Give the application the look and feel of a professional online directory.  It should not look identical to our in-class application.

- Using the part of bootstrap and font-awesome, business web site design is done

3.  Set up your database on www.mlab.com and make sure the database credentials are stored in a config file (NOT in app.js)

- mlab, twitter and facebook config is separated in config directory

4.  Build a home page that serves as a splash page

- splash pages including home, about, portfolio, contact and news are on the site

5.  Build a shared header and footer

- One header and footer are shared on every pages

6.  Build a public page that displays all the items for sale in a Read-Only format (No add / edit / delete).  For Option B (Student-Chosen Application) build a page that displays a Read-Only version of your data (No add / edit / delete).

- Messages page, with auth, edit and delete is possible. adding message is possible on contact page without auth.
- image upload is possible on the portfolio page with auth, and it shows on uploaded file tab on the same page

7.  Build a user registration page.

- register page is built

8.  Build a login page.  Allow users to also log in with either a Google, Github, or Facebook account (choose 1, you don’t have to include all).

- login is possible with new account, facebook, or twitter

9.  Build private pages that allow authenticated users to view, add and edit businesses (Option A) or your own data (option B)

- messages can be edit and delete with auth

10. Enable Delete functionality, including a Delete Confirmation.

- messages can be edit and delete with auth

11. Implement at least 1 additional feature of your choosing that show some independent learning. The feature you choose should be listed in your README.md file on GitHub.  Options for this include but are not limited to:
a.  Authentication with an additional provider besides passport-local, Facebook, Google, or GitHub
b.  Create an API that returns a list of all sale items (Option A) or your own data (Option B) in JSON format
c.  Create an API that adds a new item (Option A) / your own document (Option B) to the database
d.  File Uploads that allow users to upload a photo for a sale item (Option A) or an Image (Option B)
e.  Add a Keyword Search to the public data view page
f.  Any other feature of your choice

- log in is possible with twitter
- image upload is possible on portfolio page with auth

12. Comment your code.

- all codes have explainations