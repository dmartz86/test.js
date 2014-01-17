/**
 * Easy test for print on console.
 */

/* Namespace to functions test */
var TestJS = {
	/* */
	CHECK_MARK : String.fromCharCode(0x2713),
	BALLOT_X : String.fromCharCode(0x2717),
	MESSAGES: {
		1: '- Good test',
		2: '- Bad test',
		3: 'Test ignored object:',
		4: '\nStatistics:'
	},
	STATS : {
		pass: 0,
		fail: 0,
		warn: 0
	},
	LIST : [],
	/* Assert for equal or strict equal */
	assertEquals : function(test) {
			if (test.strict){
				if (test.current == test.expected) {return true;} 
				else {return false;}
			}else{
				if (test.current == test.expected) {return true;} 
				else {return false;}
			}
	},
	create: function(current, expected, name, strict){
		return test =
		{
			current : current,
			expected : expected,
			name : name,
			strict : (strict ||false)
		};
	},
	run : function() {
		for (var index in TestJS.LIST) {
			  //Ignore tests without current and expected or name
			  if (!TestJS.LIST[index].current && !TestJS.LIST[index].expected && !TestJS.LIST[index].name){
			  	TestJS.STATS.warn++;
			  	console.log(TestJS.MESSAGES[3] + JSON.stringify(TestJS.LIST[index]));
			  }else{
			  	var assert = TestJS.assertEquals(TestJS.LIST[index]);
					if (assert){
						TestJS.STATS.pass++;
						console.log(TestJS.CHECK_MARK + ' ' + TestJS.LIST[index].name + ' ' + TestJS.MESSAGES[1]);
					}else{
						TestJS.STATS.fail++;
						console.log(TestJS.BALLOT_X + ' ' + TestJS.LIST[index].name + ' ' + TestJS.MESSAGES[2]);
					}
			  }
		}
		
		setTimeout(function() {
			console.log(TestJS.MESSAGES[4] + ' ' + JSON.stringify(TestJS.STATS));
		}, 1000);
	}
};
