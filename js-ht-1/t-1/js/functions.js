function searchByName(){
	var NameVal = $('#inputName').val();
	if (NameVal) {
		var resultNext = statMod.searchByName(NameVal);
	}		
		
	var arr = "",
			summa = 0,
			step = 1,
			omission = 0;
	for (var i = 0; i < resultNext.length; i++) {
		arr += '<table class="table table-striped"><h3>Name #' + ': '+resultNext[i].studName + '</h3><thead><th>#</th><th>Subjects</th><th colspan="10">Marks</th><th colspan="1">GPA</th><th colspan="1">Omissions</th></thead><tbody>';

		for (var j = 0; j < resultNext[0].subjects.length; j++) {
			arr += '<tr><th scope="row">' + (step++) + '</th><td>'+ resultNext[0].subjects[j].subjName + '</td>';

			for (var k = 0; k < resultNext[0].subjects[0].mark.length; k++) {
				arr += '<td>' + resultNext[0].subjects[j].mark[k] + '</td>';
				if (resultNext[i].subjects[j].mark[k] == "a") {
						omission++;
					} else {
						parseFloat(summa += resultNext[i].subjects[j].mark[k]);
					}
				}	
				arr += '<td>' + summa/k + '</td><td>'+ omission +'</td></tr>';
				summa = 0;
				omission = 0;
		}
		arr+='</tbody></table>';
	};
	if (!arr) {
		arr = 'Not found';
	}
	$("#ResultSearchByName").html(arr);								
}


function PrintAllGroups(){			
	var resultNext = statMod.PrintGroupsArray(),
	// console.log(resultNext[1].subjects[0].mark.length);				
			arr = "",
			step = 1,
			summa = 0,
			omission = 0;
	arr += '<h2>Всі групи</h2><br>';	
	for (var i = 0; i < resultNext.length; i++) {	
		arr += '<table class="table table-striped"><h3>Student #' + (i+1) + ': '+resultNext[i].studName + '</h3><thead><th>#</th><th>Subjects</th><th colspan="10">Marks</th><th colspan="1">GPA</th><th colspan="1">Omissions</th></thead><tbody>';

		for (var j = 0; j < resultNext[0].subjects.length; j++) {
			arr += '<tr><th scope="row">'+(step++)+'</th><td>'+resultNext[i].subjects[j].subjName + '</td>';

			for (var k = 0; k < resultNext[1].subjects[0].mark.length; k++) {
				arr += '<td>' + resultNext[i].subjects[j].mark[k] + '</td>';

				if (resultNext[i].subjects[j].mark[k] == "a") {
					omission++;
				} else {						
					parseFloat(summa += resultNext[i].subjects[j].mark[k]);
				}
			}	
			arr += '<td>' + summa/k + '</td><td>'+ omission +'</td></tr>';
			summa = 0;
			omission = 0;
		}
		arr+='</tbody></table>';
		step = 1;							
	}

	if(!arr){
		arr = 'not found';
	}			
	$('#Result').html(arr);			
}

function PrintFirstGroup(){			
	var resultNext = statMod.FirstGroupArray(),
	// console.log(resultNext.length);				
			arr = "",
			step = 1,
			summa = 0,
			omission = 0;
	arr += '<h2>Група 1</h2><br>';			
	for (var i = 0; i < resultNext.length; i++) {
		arr += '<table class="table table-striped"><h3>Student #' + (i+1) + ': '+resultNext[i].studName + '</h3><thead><th>#</th><th>Subjects</th><th colspan="10">Marks</th><th colspan="1">GPA</th><th colspan="1">Omissions</th></thead><tbody>';

		for (var j = 0; j < resultNext[0].subjects.length; j++) {
			arr += '<tr><th scope="row">'+(step++)+'</th><td>'+resultNext[i].subjects[j].subjName + '</td>';

			for (var k = 0; k < resultNext[1].subjects[0].mark.length; k++) {
				arr += '<td>' + resultNext[i].subjects[j].mark[k] + '</td>';

				if (resultNext[i].subjects[j].mark[k] == "a") {
					omission++;
				} else {
					parseFloat(summa += resultNext[i].subjects[j].mark[k]);
				}
			}	
			arr += '<td>' + summa/k + '</td><td>'+ omission +'</td></tr>';
			summa = 0;
			omission = 0;
		}
		arr+='</tbody></table>';
		step = 1;							
	}

	if (!arr) {
		arr = 'not found';
	}
	$('#ResultFirst').html(arr);
}

function PrintSecondGroup(){
	var resultNext = statMod.SecondGroupArray(),
	// console.log(typeof resultNext);
			arr = "",
			step = 1,
			summa = 0,
			omission = 0;	
	arr += '<h2>Група 2</h2><br>';		
	for (var i = 0; i < resultNext.length; i++) {
		arr += '<table class="table table-striped"><h3>Student #' + (i+1) + ': '+resultNext[i].studName + '</h3><thead><th>#</th><th>Subjects</th><th colspan="10">Marks</th><th colspan="1">GPA</th><th colspan="1">Omissions</th></thead><tbody>';

		for (var j = 0; j < resultNext[0].subjects.length; j++) {
			arr += '<tr><th scope="row">'+(step++)+'</th><td>'+resultNext[i].subjects[j].subjName + '</td>';

			for (var k = 0; k < resultNext[1].subjects[0].mark.length; k++) {
				arr += '<td>' + resultNext[i].subjects[j].mark[k] + '</td>';

				if (resultNext[i].subjects[j].mark[k] == "a") {
					omission++;
				} else {						
					parseFloat(summa += resultNext[i].subjects[j].mark[k]);
				}
			}

			arr += '<td>' + summa/k + '</td><td>'+ omission +'</td></tr>';
			summa = 0;
			omission = 0;
		}
		arr+='</tbody></table>';
		step = 1;							
	}

	if (!arr) {
		arr = 'not found';
	}			
	$('#Result').html(arr);			
}

function PrintThirdGroup(){			
	var resultNext = statMod.ThirdGroupArray(),
	// console.log(resultNext.length);				
			arr = "",
			step = 1,
			summa = 0,
			omission = 0;
	arr += '<h2>Група 3</h2><br>';		
	for (var i = 0; i < resultNext.length; i++) {
		arr += '<table class="table table-striped"><h3>Student #' + (i+1) + ': '+resultNext[i].studName + '</h3><thead><th>#</th><th>Subjects</th><th colspan="10">Marks</th><th colspan="1">GPA</th><th colspan="1">Omissions</th></thead><tbody>';

		for (var j = 0; j < resultNext[0].subjects.length; j++) {
			arr += '<tr><th scope="row">'+(step++)+'</th><td>'+resultNext[i].subjects[j].subjName + '</td>';
			for (var k = 0; k < resultNext[1].subjects[0].mark.length; k++) {
				arr += '<td>' + resultNext[i].subjects[j].mark[k] + '</td>';

				if (resultNext[i].subjects[j].mark[k] == "a"){
					omission++;
				} else {
					parseFloat(summa += resultNext[i].subjects[j].mark[k]);
				}
			}

			arr += '<td>' + summa/k + '</td><td>'+ omission +'</td></tr>';
			summa = 0;
			omission = 0;
		}

		arr+='</tbody></table>';
		step = 1;
	}
	if (!arr) {
		arr = 'not found';
	}

	$('#ResultThird').html(arr);
}

function AllStatistic(){			
	var arr = "",
			arrFirstGroup ="",
			arrSecondGroup ="",
			arrThirdGroup ="",
			A = statMod.FirstGroupArray(),
			B = statMod.SecondGroupArray(),
			C = statMod.ThirdGroupArray(),
			summaFirstGroup = 0,
			summaSecondGroup = 0,
			summaThirdGroup = 0,
			omissionsFirstGroup = 0,
			omissionsSecondGroup = 0,
			omissionsThirdGroup = 0;
	arrFirstGroup += '<h2>First Group</h2>';
	for (var i = 0; i < A.length; i++) {

		for (var j = 0; j < A[0].subjects.length; j++) {

			for (var k = 0; k < A[0].subjects[0].mark.length; k++) {

				if (A[i].subjects[j].mark[k] == "a") {
					omissionsFirstGroup++;
				} else {
					parseFloat(summaFirstGroup += A[i].subjects[j].mark[k]);
				}
			}					
		}								
	}

	arrFirstGroup += '<h4>Students GPA: ' + summaFirstGroup/500 + '</h4><h4>Omissions in Group: ' + omissionsFirstGroup + '</h4>';
	arrSecondGroup += '<br><h2>Second Group</h2>';
	for (var i = 0; i < B.length; i++) {

		for (var j = 0; j < B[0].subjects.length; j++) {

			for (var k = 0; k < B[0].subjects[0].mark.length; k++) {

				if (B[i].subjects[j].mark[k] == "a") {
					omissionsSecondGroup++;
				} else {						
					parseFloat(summaSecondGroup += B[i].subjects[j].mark[k]);
				}
			}					
		}
	}

	arrSecondGroup += '<h4>Students GPA: ' + summaSecondGroup/500 + '</h4><h4>Omissions in Group: ' + omissionsSecondGroup + '</h4>';
	arrThirdGroup += '<br><h2>Third Group</h2>';
	for (var i = 0; i < C.length; i++) {

		for (var j = 0; j < C[0].subjects.length; j++) {

			for (var k = 0; k < C[0].subjects[0].mark.length; k++) {

				if (C[i].subjects[j].mark[k] == "a") {
					omissionsThirdGroup++;
				} else {
					parseFloat(summaThirdGroup += C[i].subjects[j].mark[k]);
				}
			}					
		}								
	}
	arrThirdGroup += '<h4>Students GPA: ' + summaThirdGroup/500 + '</h4><h4>Omissions in Group: ' + omissionsThirdGroup + '</h4>';
	arr += arrFirstGroup + arrSecondGroup + arrThirdGroup;
	if (!arr) {
		arr = 'not found';
	}
	$('#ResultStat').html(arr);							
}
	