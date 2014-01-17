/**
 * Populate
 */
TestJS.create(false,false,false);
TestJS.create(false,false,false,true);
TestJS.create(false,false,'');
TestJS.create(false,false,'',true);
TestJS.create(false,false,'Boolean test');
TestJS.create(false,false,'Second boolean test',true);
TestJS.create(false,true,'Third boolean test');
TestJS.create(true,true,'Four boolean test',true);
TestJS.create("text",true,'String test');
TestJS.create("text",true,'Second String test',true);
TestJS.create(1,true,'Number agains boolean');
TestJS.create(1,true,'Number 2 agains boolean');
TestJS.create(1.093,true,'Decimal agains boolean');
TestJS.create(1.093,true,'Decimal 2 agains boolean');
TestJS.create({test:''},{test:''},'Object test');
TestJS.create({test:''},{test:''},'Object strict test',true);
TestJS.create({test:''},{test:''},'Testing class css');
TestJS.create(false,'','Testing class css strict',true);

//Run method
TestJS.run();
