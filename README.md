# school_system
Problem domain : 
You are building a School system for a school, where they can organize their students with their information and filter them.
Requirements :
create an index.html , app.js and style.css files   
In the html page you have to create :
   - Header with a nav bar (add fake pages for now in the nav) 
   - main which will contain two parts 
               1- Form 
                     Full name, Date of birth, gender, phone number, grade. 
               2- Table 
                    You will fill this from with the students information form in the js 
  - footer 
Your site should be styled properly and it should be responsive 
In the js file : 
 You have to read all the data that the user will fill the form with after the submission and display it in a new row (so you have to create a row for each student using dom manipulation ) then append it to the table that we have in the html

then =>
You will create a constructor to generate a student object which will be rendered in the main section instead of the table  from your app.js file. As follows:

Full name,
Date of birth,
Gender,
Major: 
Administration
IT
Science
Art
Image URL,
Phone number

You will refactor the render function to render each student information in a separate card in the home page as shown in the image. Note that you will use images for the students in the assets directory.
Add all the students in an array and save it to the local storage.
