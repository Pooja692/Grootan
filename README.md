# Web Application to upload CSV file


## Description

Create a web application with an option to upload a CSV file of 1 lakh or more records,
where the application should read the records, process it, and push to the database table.
The CSV file will have a header row that denotes the database table column names and rowswhich represent the values of the database table.
After the upload of the CSV file, only the database table should be created dynamically
based on the header names of the CSV file and the insert of row values should be carried
out later.In case if there are any header named as “password”, the value should be encrypted dynamically and saved in the database.
