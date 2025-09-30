# Search GitHub Users

This is a web application that allows searching for GitHub users and exploring their profile data.  
It leverages **GitHub’s GraphQL API** with Apollo Client for fetching data, and presents results in a clean, responsive UI using **ShadCN** and **Recharts** for data visualization.

---

## Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Main Page Description](#main-page-description)
4. [Technical Details](#technical-details)
5. [Live Version](#live-version)

---

## Project Overview

Search GitHub Users provides an interface for quickly finding and exploring GitHub profiles. It includes:

- **Search**: Look up GitHub users by username.
- **User Data**: View user profile information and repositories.
- **Data Visualization**: Insights into repository stats, languages, and popularity using Recharts.
- **Modern UI/UX**: A responsive interface powered by ShadCN components, with Skeleton loaders for smooth data fetching.

---

## Features

- **User Search**: Enter a username to fetch GitHub profile info via GraphQL.
- **Profile Display**: View user bio, avatar, follower stats, and more.
- **Repository Insights**:
  - Most popular repositories by stars
  - Most forked repositories
  - Language usage breakdown
- **Charts & Graphs**: Recharts integrated with ShadCN chart components.
- **Loading States**: Skeleton UI for a smooth experience while fetching data.
- **Responsive Design**: Optimized for both desktop and mobile.

---

## Main Page Description

- **Search Bar**: Input field to search for any GitHub user.
- **Profile Section**: Displays avatar, username, bio, follower/following counts.
- **Repositories Section**: Shows lists of most starred and forked repos.
- **Charts Section**: Visualizes top languages and repository distribution.
- **Loading State**: Skeleton components while data is fetched.

---

## Technical Details

- **Framework**: React
- **Data Layer**: Apollo Client with GitHub GraphQL API
- **UI Library**: ShadCN/UI
- **Charts**: Recharts + ShadCN Chart components
- **Styling**: Tailwind CSS
- **State Management**: Apollo cache

---

## Live Version

https://vsbron-react2025-search-github-users.netlify.app/
