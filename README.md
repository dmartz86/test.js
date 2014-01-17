test.js
=======

Web testing with assert questions
====
This is a little tool to test things on html view.


How it works:
- Import test.js library to your html.
- Create a new javascript file to write the tests and add it to your html.
- To run your tests execute on the javascript console:  TestJS.run();


Usage
=======

create
===
TestJS.create(current, expected, name, strict));
where:
- current, is the actual value obtained
- expected, is the value you are expecting
- name, the name o the test
- strict, flag to test with scrict or without

run
===
Once you have created your tests and added to the list of test with line:
TestJS.run();


You can feel free to modify the vars TIMEOUT and  MESSAGES.
