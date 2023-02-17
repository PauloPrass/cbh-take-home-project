# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
1 - Task (Ticket): At first we will need to add a new field in the Facilities table, called reportId, so this field will also have to be considered in the Facilities object and be linked to the project. The estimate for this task is 6 hours, for creating the query and adding the field to the object in our project.

2 - Task (Ticket): As a second task, we will have to create a "generateFacilityId" method where we will implement a single sequential logic to link to the Facility object whenever a new object is persisted in the database. The estimate for this task is 8 hours.

3 - Task (Ticket): The third task will be to change the id field presented in the PDF of the `generateReport` method where we currently have the installation id field, it will be replaced by the reportId field. The estimate for this task is 2 hours.