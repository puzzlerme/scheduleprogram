var dt = new Date();
//console.log(dt.getHours());
//dt.setHours(dt.getHours() - 7);
//console.log(dt);
var strdt = new Date(dt.toDateString());

var previousDay = new Date(2022, 3, 25);
var previousLetter = "D";
var noSchoolDates = [new Date(2022, 4, 30)];
var noSchoolDatesString = [];
for (let i = 0; i < noSchoolDates.length; i++) {
	noSchoolDatesString.push(noSchoolDates[i].toDateString());
}

function checkOffset(offset) {
	return offset == previousLetter;
}

function optionalNextDays() {
	if (true) {
		//console.log(new Array(dt.getHours(), dt.getMinutes()));
		if ((dt.getHours() >= 15 && dt.getMinutes() >= 30) || dt.getHours() >= 16) {
			strdt.setDate(strdt.getDate() + 1);
			//console.log(new Array(dt.getHours() >= 15, dt.getMinutes() >= 30, dt.getHours() >= 16, dt.getHours()));
		}
	}
	//console.log(skipWeekends);
	if (true) {
		//console.log(skipWeekends);
		if (strdt.getDay() == 6) {
			strdt.setDate(strdt.getDate() + 2);
			//console.log('1');
		} else if (strdt.getDay() == 0) {
			strdt.setDate(dt.getDate() + 1);
			//console.log('2');
		}
	}
	//console.log(strdt);
	getLetterDay();
}

optionalNextDays();

function allowPreviousDays(currentDay) {
	if (currentDay >= previousDay) {
		var numOfDates1 = dayDifference(previousDay, currentDay);
		//console.log('normal');
	} else {
		currentDay.setDate(currentDay.getDate());
		var numOfDates1 = -(dayDifference(currentDay, previousDay));
		//console.log('oh no');
		console.log(new Array(currentDay, previousDay));
	}
	return numOfDates1;
}

function getLetterDay() {
	dt = strdt;
	//var testDate = new Date(dt);
	//var numOfDates = getBusinessDatesCount(previousDay,testDate);
	var thingyNumber = allowPreviousDays(dt);
	//console.log("Thingy: " + thingyNumber);
	//console.log("Normal? " + (dt >= previousDay));
	//console.log("Previous: " + previousDay + " DT: " + dt);
	var letterDayList = new Array(6);
	letterDayList[0] = "A";
	letterDayList[1] = "B";
	letterDayList[2] = "C";
	letterDayList[3] = "D";
	letterDayList[4] = "E";
	letterDayList[5] = "F";
	offsetButWhenIDontKnowWhatToDo = 0;
	offset = letterDayList.findIndex(checkOffset) - offsetButWhenIDontKnowWhatToDo;
	numOfDates = thingyNumber;
	numOfDates = numOfDates + offset;
	let finalIndex = ((numOfDates % 6) + 6) % 6
	var letterDay1 = letterDayList[finalIndex];
	console.log(letterDay1);
	return letterDay1;
}

function dayDifference(startDate, endDate) {
	//alert("SD: " + startDate + " ED: " + endDate);
	let count = 0;
	let sDate = new Date(startDate);

	while (sDate < endDate) {
		if (!((sDate.getDay() == "0") || (sDate.getDay() == "6") || (noSchoolDatesString.includes(sDate.toDateString())))) {
			count++;
			//alert(count + " " + (sDate < endDate) + "  " + sDate);
			//console.log(sDate.getDay());
		}
		sDate.setDate(sDate.getDate() + 1);
	}
	//console.log(sDate.getDay() + "      " + count);
	return count;
}
