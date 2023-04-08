
## Setting up the project
- Please first set-up the API from the following project, instructions are in the ReadMe
https://github.com/mayyaracheva/Learning_Platform
- The API runs on localhost:5000 and the React project runs on localhost:3000

## User details for login:
- Teacher role
Email = "Ragnar.Lodbrock@abv.com",
Password = "adminADMIN123?"
- Student role
 Email = "Ignatio.Italiano@gmail.com",
 Password = "ignitalo123*"
 
 ## Brief project description:
 
 The project is a system that can be used by trainers to deliver online learning content.
 The system consists of three main entities – Users (either teacher or student), Courses (either public or private) and Sections
 Teachers can create courses, add sections to them and optionally enroll students.
 Students can browse available courses and view their content, as well as enroll/unenroll from a course.
 
 - Public part
 Anonymous users are able to see the title and description of available public courses, but are not able to open them. They can login and register.
 
 - Private part
 Accessible only if the user is authenticated.
 
 Students are able to see the courses that they are enrolled in (both public/private). Private courses are visible only if the student is enrolled.
 Students must be able to see available public courses – if they visit one, they are automatically enrolled in it (on first visit).
 
 Teachers are able to see all courses and edit/delete them or create a new course.





