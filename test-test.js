/**
 * Populate
 */
TestJS.LIST.push(TestJS.create(false,false,false));
TestJS.LIST.push(TestJS.create(false,false,false,true));
TestJS.LIST.push(TestJS.create(false,false,''));
TestJS.LIST.push(TestJS.create(false,false,'',true));
TestJS.LIST.push(TestJS.create(false,false,'Boolean test'));
TestJS.LIST.push(TestJS.create(false,false,'Second boolean test',true));
TestJS.LIST.push(TestJS.create(false,true,'Third boolean test'));
TestJS.LIST.push(TestJS.create(true,true,'Four boolean test',true));
TestJS.LIST.push(TestJS.create("text",true,'String test'));
TestJS.LIST.push(TestJS.create("text",true,'Second String test'),true);
TestJS.LIST.push(TestJS.create(1,true,'Number agains boolean'));
TestJS.LIST.push(TestJS.create(1,true,'Number 2 agains boolean'));
TestJS.LIST.push(TestJS.create(1.093,true,'Decimal agains boolean'));
TestJS.LIST.push(TestJS.create(1.093,true,'Decimal 2 agains boolean'));
TestJS.LIST.push(TestJS.create({test:''},{test:''},'Object test'));
TestJS.LIST.push(TestJS.create({test:''},{test:''},'Object strict test'),true);
TestJS.LIST.push(TestJS.create({test:''},{test:''},'Testing class css'));
TestJS.LIST.push(TestJS.create(false,'','Testing class css strict',true));

//Run method
TestJS.run();
