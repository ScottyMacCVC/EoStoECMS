Place an html report on a map. Tableau will allow us to build out our reports on a map. 

We are going to attempt to rebuild the same thing with html code. The ideal is to run a BI report, save it as html/htm, and then post it to a viewable location for the field team. 

Examples: 

-https://public.tableau.com/app/profile/scott.macfarlane2218/viz/TodaysOrder/Map 

-https://public.tableau.com/app/profile/scott.macfarlane2218/viz/PLP-MasterMap/Dashboard1

-https://public.tableau.com/app/profile/scott.macfarlane2218/viz/Step1-TheStandard-Mapped/MappedStep1

TODO:

- Create seperate classes.
    - Create a class for the map.
        - Theme is a variable in constructor.
    - Create a class for the report.

- Set up flask server to serve the html report.
- Use python to read html reports and convert them to a map.
- Use python to read xls reports and convert them to a map.
- Use python to read csv reports and convert them to a map.

## Ideas

Im thinking we currently use python to read all the data and send it into javascript for easier manipulation and extraction.
