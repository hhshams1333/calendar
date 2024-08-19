
# Calendar App

## Overview
This project is a simple calendar application built with Next.js 14 using the App Router (folder-based structure). The application allows users to interact with a calendar for a specific month. Users can create tasks for each day by clicking on the corresponding date and entering a task description. Additionally, there is a second page displaying an updated list of tasks for each day of the month.

## Features
- **Next.js 14 with TypeScript**: The project is built using the latest version of Next.js, taking advantage of the App Router for organizing the application.
- **AntDesign**: For UI components and styling, AntDesign is used to provide a professional and polished look.
- **Tailwind CSS**: Tailwind is used alongside AntDesign for utility-first CSS styling, enabling rapid UI development.
- **React-Query**: This library is used for data fetching and synchronization, particularly for retrieving a list of default tasks.
- **Recoil**: Recoil is implemented as the state manager to maintain and share state between the two pages of the application.

## Pages

### 1. Calendar Page
- **Description**: Displays a calendar for the selected month. Users can click on any day to add tasks. Tasks are displayed on the respective days.
- **Functionality**: Clicking on a day opens a modal where the user can enter task details. Tasks are saved using Recoil and displayed in the calendar grid.

### 2. Task List Page
- **Description**: Displays a list of all tasks organized by the day they are assigned to.
- **Functionality**: The page retrieves the tasks stored in Recoil and displays them in a list format for easy viewing.

## Installation and Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/hhshams1333/calendar.git
    ```
2. Navigate to the project directory:
    ```bash
    cd calendar
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Usage
- **Adding Tasks**: Click on any date in the calendar to add a task.
- **Viewing Tasks**: Navigate to the tasks page to see a list of tasks for the month.

## Technologies Used
- **Next.js 14**
- **TypeScript**
- **AntDesign**
- **Tailwind CSS**
- **React-Query**
- **Recoil**

## Notes
- The application uses React-Query to fetch a list of default tasks and display them on the calendar.
- Recoil is used for state management to ensure that state is preserved and shared between the calendar page and the task list page.

## License
This project is licensed under the MIT License.
