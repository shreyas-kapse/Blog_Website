# Blogging Website
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Framework](https://img.shields.io/badge/Framework-Nodejs-green)](Framework)

## Overview

The Blogging Website is a dynamic platform that allows users to create, publish, and manage blog posts. This README.md file serves as a comprehensive guide to understanding the features, technologies, and usage of the website.

## Technology Stack

The Blogging Website is built using the following technologies:

- **Node.js**: A powerful runtime environment for executing JavaScript code on the server.
- **Express**: A fast and minimalist web application framework for Node.js.
- **MongoDB**: A flexible NoSQL document database for efficient data storage.
- **HTML/CSS**: Standard web technologies for creating engaging and responsive user interfaces.
- **JavaScript**: The programming language used for client-side interactivity and server-side logic.

## Features

- **User-Friendly Interface**: The website provides an intuitive interface for users to create and publish blog posts effortlessly.
- **Blog Listing**: Displays a list view of all blog posts with titles and snippets for easy navigation and browsing.
- **Detailed Blog View**: Allows users to read full blog posts by clicking on the title, providing a seamless reading experience.
- **Blog Deletion**: Enables the removal of unwanted blog posts to maintain a well-organized and up-to-date website.

## Screenshots

![Screenshot 1](https://github.com/shreyas-kapse/Blog_Website/blob/main/Screenshots/Screenshot%202023-07-03%20220431.png)
*Create blog page*

![Screenshot 2](https://example.com/path/to/screenshot2.png)
*Caption for Screenshot 2*

## Demo Video

[![Project Demo](https://example.com/path/to/video-thumbnail.png)](https://example.com/path/to/demo-video.mp4)
*Click the image to watch the project demo video*

## Installation

To run the Blogging Website locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running the following command:

npm install

3. Create a MongoDB database and update the MongoDB connection string in `app.js` with your database credentials.
4. Start the server using the following command:

npm start

5. Open your web browser and navigate to `http://localhost:3000` to access the website.

## Usage

The website provides the following routes for managing blog posts:

- **GET** `/`: Renders the home page with a list of all blog posts.
- **GET** `/blogs/create`: Renders a form to create a new blog post.
- **POST** `/blogs`: Saves a new blog post to the database.
- **GET** `/blogs/:id`: Renders the detailed view of a specific blog post.
- **DELETE** `/blogs/:id`: Deletes a specific blog post from the database.

You can customize the routes, views, and functionality as needed for your project.

## Contributing

Contributions to the Blogging Website are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Push the branch to your forked repository.
6. Open a pull request.

## License

This project is licensed under the **MIT License**. You can find more information in the [LICENSE](https://example.com/path/to/license) file.

## Contact

For any inquiries or suggestions, please reach out to [shreyaskapse171@gmail.com](mailto:shreyaskapse171@gmail.com). We would love to hear from you!

---

Thank you for your interest in the Blogging Website. We hope it meets your expectations and serves as a strong addition to your portfolio. Happy coding!

