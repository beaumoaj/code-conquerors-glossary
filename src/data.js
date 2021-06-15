const terms = [
    {
        id: 1,
        term: 'Class',
        definition: 'HTML elements can have one or more classes, separated by spaces. You can style elements using CSS by selecting them with their classes.',
    },
    {
        id: 2,
        term: 'Body',
        definition: 'The body is the container for all of a page\'s content. Comes after the <head> tag, within the overall <html> tag.',
    },
    {
        id: 3,
        term: 'Id',
        definition: 'An HTML element can have an id attribute to identify it. id elements should always be unique to that single element, and each element should never have more than one id.'
    },
    {
        id: 4,
        term: 'Header',
        definition: 'Heading elements like <h1>, <h2>, <h3>,... allow you to use six levels of document headings, ranging from largest to smallest, breaking up the document into logical sections. For example, the word \'Headings\' above is wrapped in a <h2> tag.',
    },
    {
        id: 5,
        term: 'href',
        definition: 'Links tell the browser where to go using an href attribute, which stores a URL.',
    },
    {
        id: 6,
        term: 'align-items',
        definition: 'The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.'
    },
    {
        id: 7,
        term: 'flex',
        definition: 'The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.',
    },
    {
        id: 8,
        term: 'Grid',
        definition: 'To specify the number of columns of the grid and the widths of each column, the CSS property grid-template-columns is used on the grid container. The number of width values determines the number of columns and each width value can be either in pixels(px) or percentages(%).',
    },

    {
        id: 9,
        term: 'Margin',
        definition: 'The margin property sets the margins for an element, and is a shorthand property for the following properties:margin-top,margin-right,margin-bottom,margin-left.',
    },
    {
        id: 10,
        term: 'text-align',
        definition: 'The text-align property specifies the horizontal alignment of text in an element.',
    },
    {
        id: 11,
        term: 'Variable',
        definition: 'JavaScript variables are containers for storing data values.',
    },
    {
        id: 12,
        term: 'Loop',
        definition: 'Loops can execute a block of code a number of times.',
    },
    {
        id: 13,
        term: 'Boolean',
        definition: 'A JavaScript Boolean represents one of two values: true or false.',
    },
    {
        id: 14,
        term: 'Array',
        definition: 'An array is a special variable, which can hold more than one value at a time.',
    },
    {
        id: 15,
        term: 'Object',
        definition: 'The Object class represents one of JavaScripts data types. It is used to store various keyed collections and more complex entities.',
    },
    {
        id: 16,
        term: 'require()',
        definition: 'A function used to import modules from other files or Node packages.',
    },
    {
        id: 17,
        term: 'express.js',
        definition: 'Express.js is a Node.js web application server framework, designed for building single-page, multi-page, and hybrid web applications',
    },
    {
        id: 18,
        term: 'GET',
        definition: 'The HTTP GET method requests a representation of the specified resource. Requests using GET should only be used to request data',
    },
    {
        id: 19,
        term: 'POST',
        definition: 'The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.',
    },
    {
        id: 20,
        term: 'Node.js',
        definition: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser.',
    },
    {
        id: 21,
        term: 'SELECT Statement',
        definition: 'The SELECT statement is used to select data from a database. The data returned is stored in a result table, called the result-set.',
    },
    {
        id: 22,
        term: 'SELECT DISTINCT Statement',
        definition: 'The SELECT DISTINCT statement is used to return only distinct (different) values. Inside a table, a column often contains many duplicate values; and sometimes you only want to list the different (distinct) values.',
    },
    {
        id: 23,
        term: 'WHERE Clause',
        definition: 'The WHERE clause is used to filter records. The WHERE clause is used to extract only those records that fulfill a specified condition.',
    },
    {
        id: 24,
        term: 'AND, OR and NOT Operators',
        definition: 'The WHERE clause can be combined with AND, OR, and NOT operators. The AND and OR operators are used to filter records based on more than one condition: The AND operator displays a record if all the conditions separated by AND are TRUE. The OR operator displays a record if any of the conditions separated by OR is TRUE. The NOT operator displays a record if the condition(s) is NOT TRUE.',
    },
    {
        id: 25,
        term: 'ORDER BY Keyword',
        definition: 'The ORDER BY keyword is used to sort the result-set in ascending or descending order.The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.',
    },
    {
        id: 26,
        term: 'INSERT INTO Statement',
        definition: 'The INSERT INTO statement is used to insert new records in a table.',
    },
    {
        id: 27,
        term: 'NULL Value',
        definition: 'A field with a NULL value is a field with no value. If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field. Then, the field will be saved with a NULL value.',
    },
    {
        id: 28,
        term: 'UPDATE Statement',

        definition: 'The UPDATE statement is used to modify the existing records in a table.',
    },
    {
        id: 29,
        term: 'DELETE Statement',
        definition: 'The DELETE statement is used to delete existing records in a table.',
    },
    {
        id: 30,
        term: 'SELECT TOP Clause',

        definition: 'The SELECT TOP clause is used to specify the number of records to return. The SELECT TOP clause is useful on large tables with thousands of records. Returning a large number of records can impact performance.',
    },
    {
        id: 31,
        term: 'MIN and MAX Functions',

        definition: 'The MIN() function returns the smallest value of the selected column. The MAX() function returns the largest value of the selected column.',
    },
    {
        id: 32,
        term: 'COUNT AVG and SUM Functions',
        definition: 'The COUNT() function returns the number of rows that matches a specified criterion. The AVG() function returns the average value of a numeric column. The SUM() function returns the total sum of a numeric column.',
    },
    {
        id: 33,
        term: 'LIKE Operator',

        definition: 'The LIKE operator is used in a WHERE clause to search for a specified pattern in a column. There are two wildcards often used in conjunction with the LIKE operator: % - The percent sign represents zero, one, or multiple characters _ - The underscore represents a single character',
    },
    {
        id: 34,
        term: 'Wildcard Characters',

        definition: 'A wildcard character is used to substitute one or more characters in a string. Wildcard characters are used with the SQL LIKE operator. The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.',
    },
    {
        id: 35,
        term: 'IN Operator',
        definition: 'The IN operator allows you to specify multiple values in a WHERE clause. The IN operator is a shorthand for multiple OR conditions.',
    },
    {
        id: 36,
        term: 'BETWEEN Operator',
        definition: 'The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates. The BETWEEN operator is inclusive: begin and end values are included.',
    },
    {
        id: 37,
        term: 'Aliases',
        definition: 'SQL aliases are used to give a table, or a column in a table, a temporary name. Aliases are often used to make column names more readable. An alias only exists for the duration of the query.',
    },
    {
        id: 38,
        term: 'JOIN',
        definition: 'A JOIN clause is used to combine rows from two or more tables, based on a related column between them.',
    },
    {
        id: 39,
        term: 'INNER JOIN Keyword',
        definition: 'The INNER JOIN keyword selects records that have matching values in both tables.',
    },
    {
        id: 40,
        term: 'LEFT JOIN Keyword',

        definition: 'The LEFT JOIN keyword returns all records from the left table (table1), and the matched records from the right table (table2). The result is NULL from the right side, if there is no match.',
    },
    {
        id: 41,
        term: 'RIGHT JOIN Keyword',
        definition: 'The RIGHT JOIN keyword returns all records from the right table (table2), and the matched records from the left table (table1). The result is NULL from the left side, when there is no match.',
    },
    {
        id: 42,
        term: 'FULL OUTER JOIN Keyword',

        definition: 'The FULL OUTER JOIN keyword returns all records when there is a match in left (table1) or right (table2) table records. Note: FULL OUTER JOIN can potentially return very large result-sets!',
    },
    {
        id: 43,
        term: 'Self JOIN',
        definition: 'A self JOIN is a regular join, but the table is joined with itself.',
    },
    {
        id: 44,
        term: 'Hyperlinks',
        definition: 'Hyperlinks (or just links) take the user to another webpage when they click on it. The most common attribute used with links is href, which tells the browser where the link goes.',
    },
    {
        id: 45,
        term: 'Links',
        definition: 'HTML supports two kinds of lists: ordered lists and unordered lists. Within lists each individual list item has its own tag.Unordered Lists:Unordered lists are just lists whose items are denoted with bullet points.Ordered List:Ordered lists\' items are denoted with numbers.',
    },
    {
        id: 46,
        term: 'Tags & Elements',
        definition: 'Tags are basic labels that define and separate parts of your markup into elements. They are comprised of a keyword surrounded by angle brackets <>. Content goes between two tags and the closing one is prefixed with a slash (Note: there are some self-closing HTML tags, like image tags).',
    },
    {
        id: 47,
        term: 'Title',
        definition: 'This tag tells the browser what to display as the page title at the top and tells search engines what the title of your site is. It goes inside <head> tags. Try and make your page titles descriptive, but not overly verbose.',
    },
    {
        id: 48,
        term: 'Padding',
        definition: 'The padding is the spacing between the content and the border (edge of the element.). We can adjust this value with CSS to move the border closer to or farther from the content. Here, the div with id \'box\' will get 10px of padding all around it.',
    },
    {
        id: 49,
        term: 'Child and  Universal selectors',
        definition: 'Child Selector You can also use multiple selectors to get the exact elements you want, by using parental nesting. By using the \'greater-than\' symbol (>), you can select only the direct children of an element, going down only one level  Universal selector The universal selector (*) may be used to select all the elements in a particular range. Be aware that the universal selector is the most performance taxing selector, and should be used sparingly.',
    },
    {
        id: 50,
        term: 'ID Selector',
        definition: 'ID selectors are used to select only a single item on a page. Like the term (\'identification\') indicates, ID selectors will ONLY select the first element with a matching ID.',
    },
    {
        id: 51,
        term: 'Classes',
        definition: 'A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class',
    },
    {
        id: 52,
        term: 'Console.log',
        definition: 'Prints text to the console. Useful for debugging.',
    },
    {
        id: 53,
        term: 'Function',
        definition: 'A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.It is like a reusable piece of code. Imagine , having 20 for loops ,and then having a single function to handle it all . To use a function, you must define it somewhere in the scope from which you wish to call it. A function definition (also called a function declaration) consists of the function keyword, followed by the name of the function, a list of arguments to the function, enclosed in parentheses and separated by commas, the JavaScript statements that define the function, enclosed in curly braces, { id:1, }.',
    },
    {
        id: 54,
        term: 'IF Statement',
        definition: 'It simply states that if this condition is true, do this, else do something else (or nothing). It occurs in varied forms.',
    },
    {
        id: 55,
        term: 'Math',
        definition: 'The JavaScript Math object allows you to perform mathematical tasks on numbers.',
    },
    {
        id: 56,
        term: 'Scope',
        definition: 'Scope determines the accessibility (visibility) of variables..',
    },
    {
        id: 57,
        term: 'React Directly in HTML',
        definition: 'The quickest way start learning React is to write React directly in your HTML files. Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.',
    },
    {
        id: 58,
        term: 'Setting up a React Environment',
        definition: 'If you have NPM and Node.js installed, you can create a React application by first installing the create-react-app.',
    },
    {
        id: 59,
        term: 'React Render HTML',
        definition: 'React\'s goal is in many ways to render HTML in a web page, React renders HTML to the web page by using a function called ReactDOM.render().',
    },
    {
        id: 60,
        term: 'Lifecyles',
        definition: 'Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.',
    },
    {
        id: 61,
        term: 'State',
        definition: 'The quickest way start learning React is to write React directly in your HTML files. Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.',
    },
    {
        id: 62,
        term: 'React Props',
        definition: 'React Props are like function arguments in JavaScript and attributes in HTML.',
    },
    {
        id: 63,
        term: 'Body',
        definition: 'Props are arguments passed into React components. Props are passed to components via HTML attributes.React Props are like function arguments in JavaScript and attributes in HTML',
    },
];
export {terms}; 
// terms.forEach((t) => {
//    console.log(`${t.id} ${t.term} ${t.definition}`);
// });

