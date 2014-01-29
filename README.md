MoNoApps | test.js
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


Sample ouput
=======
- Test ignored object:{"current":false,"expected":false,"name":false,"strict":false} people-test.js
- Test ignored object:{"current":false,"expected":false,"name":false,"strict":true} people-test.js
- Test ignored object:{"current":false,"expected":false,"name":"","strict":false} people-test.js
- Test ignored object:{"current":false,"expected":false,"name":"","strict":true} people-test.js
- ✓ Boolean test - Good test people-test.js
- ✓ Second boolean test - Good test people-test.js
- ✗ Third boolean test - Bad test people-test.js
- ✓ Four boolean test - Good test people-test.js
- ✗ String test - Bad test people-test.js
- ✗ Second String test - Bad test people-test.js
- ✓ Number agains boolean - Good test people-test.js
- ✓ Number 2 agains boolean - Good test people-test.js
- ✗ Decimal agains boolean - Bad test people-test.js
- ✗ Decimal 2 agains boolean - Bad test people-test.js
- ✗ Object test - Bad test people-test.js
- ✗ Object strict test - Bad test people-test.js
- ✗ Testing class css - Bad test people-test.js
- ✓ Testing class css strict - Good test people-test.js
- Statistics: {"pass":6,"fail":8,"warn":4}"
