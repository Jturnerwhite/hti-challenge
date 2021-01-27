# HTI - Challenge

## Prompt:
You are working on a case management application that has a “case overview” page, containing information such as case numbers, demographics, etc. The data for a single case can come from multiple different agencies (e.g. John Doe Medical Office, Linda Hospital).

 Your task is to conceptualize and implement some sort of way to list/display all of the agencies that have contributed data to this case. Please use a modern framework such as React.js (preferred), or Bootstrap.

 You can assume there can be more than 10 agencies contributing data to a single case.

 Please provide your code files and any additional text files you feel inclined to provide (such as explanation of thought process, etc.). We will discuss your result in a follow-up phone call.

 ## Assumptions / Notes
 - I'm assuming the relationship for a case to be something like;  There is an aggregate case file detailing information about what is going on.  This aggregate is from various sources as described, each with their own specific case which contains a slice of the information.
 - I'm assuming that the overall case details, that is supplemented from these multiple cases, is aggregated prior to reaching the front end. And that the point of this is not to conceptualize how to aggregate the data itself.
 - Really rough, doesn't look pretty
 - With more time there would be: styling, filter options for the case list, example data to put into the details panel, demographics placeholder data.