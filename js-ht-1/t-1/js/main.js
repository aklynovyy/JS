var statMod = (function(){

	var firstGroup = [
		{
			studName: "AndriyA",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [9, 11, 8, 6, 6, 9, 10, 8, 7, 9]
				}, {
					subjName: "physics", 
					mark: [8, 9, 7, 6, 6, 8, 9, "a", "a", 10]
				}, {
					subjName: "chemistry", 
					mark: [7, 8, 9, 6, 5, 7, 8, 8, 9, 6]
				}, {
					subjName: "history", 
					mark: [10, 9, 11, 8, 9, "a", 8, 8, 12, 8]
				}, {
					subjName: "anatomy", 
					mark: ["a", 10, 11, 12, 9, 10, 8, 10, 12, 7]
				}
			]
		}, {
			studName: "YuraY",
			subjects: [
				{
					subjName: "mathematics", 
					mark: ["a", 12, 10, 7, 8, 12, 6, 7, 3, 4]
				}, {
					subjName: "physics", 
					mark: [6, 7, 8, 5, 4, 6, 7, 7, 8, 5]
				}, {
					subjName: "chemistry", 
					mark: [9, 8, 10, 7, 8, "a", 7, 7, 10, 7]
				}, {
					subjName: "history", 
					mark: [7, 8, 5, 4, 3, 10, 8, "a", "a", 9]
				}, {
					subjName: "anatomy", 
					mark: [10, 11, 6, 7, 5, 7, 7, 9, 5, 8]
				}
			]
		}, {
			studName: "BogdanB",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [7, 8, "a", 6, 5, 7, 8, "a", 9, 6]
				}, {
					subjName: "physics", 
					mark: ["a", 11, 11, 8, 9, 11, 7, 8, 4, 5]
				}, {
					subjName: "chemistry", 
					mark: [8, 9, 6, 5, 4, 11, 9, "a", "a", 10]
				}, {
					subjName: "history", 
					mark: [11, 12, 7, 8, 6, "a", 8, 10, 6, "a"]
				}, {
					subjName: "anatomy", 
					mark: [10, 9, 11, 8, 9, "a", 8, 8, 11, 8]
				}
			]
		}, {
			studName: "VitaliyV",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [10, 11, 6, 7, 5, 3, 7, 9, 5, "a"]
				}, {
					subjName: "physics", 
					mark: [9, 8, 10, 7, 8, "a", 7, 7, 10, 7]
				}, {
					subjName: "chemistry", 
					mark: ["a", 10, 10, 7, 8, 10, 6, 7, 3, 4]
				}, {
					subjName: "history", 
					mark: [6, 7, "a", 5, 4, 6, 7, "a", 8, 5]
				}, {
					subjName: "anatomy", 
					mark: [7, 8, 5, 4, 3, 10, 8, "a", "a", 9]
				}
			]
		}, {
			studName: "VadumV",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [8, 9, 11, 6, 9, 9, 7, 6, 4, 3]
				}, {
					subjName: "physics", 
					mark: ["a", 8, 10, 7, 8, "a", 7, 7, 10, 7]
				}, {
					subjName: "chemistry", 
					mark: [8, 9, 6, 5, 4, 7, 9, 4, "a", 10]
				}, {
					subjName: "history", 
					mark: [11, 12, 7, 8, 6, 4, 8, 10, 6, "a"]
				}, {
					subjName: "anatomy", 
					mark: [8, 9, "a", 7, 6, 8, 9, "a", 10, 8]
				}
			]
		}, {
			studName: "SergiyS",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [10, 11, 12, 8, 6, 6, 6, 7, 6, 11]
				}, {
					subjName: "physics", 
					mark: [6, 10, 9, 9, 9, "a", 9, 8, 10, 9]
				}, {
					subjName: "chemistry", 
					mark: [9, 9, 8, 9, 6, 9, 9, 7, 8, 9]
				}, {
					subjName: "history", 
					mark: [8, 9, "a", 7, 6, 8, 9, "a", 10, 8]
				}, {
					subjName: "anatomy", 
					mark: [10, 9, 8, 8, 9, 9, 7, 10, 7, "a"]
				}
			]
		}, {
			studName: "PavloP",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [7, "a", 10, 10, 10, "a", 11, 9, 12, 10]
				}, {
					subjName: "physics", 
					mark: [6, 8, 10, 6, 4, 4, 8, 9, 10, 12]
				}, {
					subjName: "chemistry", 
					mark: [8, 7, 9, 10, 12, 6, 4, 5, 5, "a"]
				}, {
					subjName: "history", 
					mark: [10, 10, "a", 10, 8, 10, 10, "a", 9, 10]
				}, {
					subjName: "anatomy", 
					mark: [9, 10, "a", 8, 7, 9, 10, "a", 11, 9]
				}
			]
		}, {
			studName: "SvetaS",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [7, "a", 10, 10, 10, "a", 11, 9, 12, 10]
				}, {
					subjName: "physics", 
					mark: [6, 8, 10, 6, 4, 4, 8, 9, 10, 12]
				}, {
					subjName: "chemistry", 
					mark: [8, 7, 9, 10, 12, 6, 4, 5, 5, "a"]
				}, {
					subjName: "history", 
					mark: [10, 10, "a", 10, 8, 10, 10, "a", 9, 10]
				}, {
					subjName: "anatomy", 
					mark: [9, 10, "a", 8, 7, 9, 10, "a", 11, 9]
				}
			]
		}, {
			studName: "OlgaO",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [8, 9, 11, 11, 11, 9, 10, 9, 11, 9]
				}, {
					subjName: "physics", 
					mark: [7, 8, 9, 8, 7, 7, 8, 9, "a", 8]
				}, {
					subjName: "chemistry", 
					mark: [7, 7, 8, 8, 9, "a", 7, 9, 9, "a"]
				}, {
					subjName: "history", 
					mark: [9, 9, 9, "a", 9, 10, 10, "a", 9, 10]
				}, {
					subjName: "anatomy", 
					mark: [9, 10, 9, 9, 10, 9, 10, 9, 11, "a"]
				}
			]
		}, {
			studName: "IrunaI",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [6, 7, 8, 7, 6, 6, 7, 8, "a", 7]
				}, {
					subjName: "physics", 
					mark: [9, 10, 12, 12, 12, 10, 11, 10, 12, 10]
				}, {
					subjName: "chemistry", 
					mark: [10, 8, 10, "a", 8, 11, 9, "a", 10, 9]
				}, {
					subjName: "history", 
					mark: [7, 12, 7, 12, 8, 12, 7, 6, 4, "a"]
				}, {
					subjName: "anatomy", 
					mark: [5, 5, 6, 6, 7, "a", 6, 7, 7, 6]
				}
			]
		} 
	];

	var secondGroup = [
		{
			studName: "AndriyN",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [7, 10, 7, 7, 7, 9, 10, 7, 7, 9]
				}, {
					subjName: "physics", 
					mark: [7, 9, 7, 7, 7, 7, 9, 6, "a", 10]
				}, {
					subjName: "chemistry", 
					mark: [7, 7, 9, 7, 5, 7, 7, 7, 9, 7]
				}, {
					subjName: "history", 
					mark: [8, 9, 10, 7, 9, "a", 7, 7, 12, 7]
				}, {
					subjName: "anatomy", 
					mark: ["a", 10, 10, 12, 9, "a", 7, 10, 12, 7]
				}
			]
		}, {
			studName: "YuraU",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [3, 12, 10, 7, 8, 12, 6, 7, 3, 4]
				}, {
					subjName: "physics", 
					mark: [5, 8, 9, 6, "a", 7, 8, 8, 9, 6]
				}, {
					subjName: "chemistry", 
					mark: [10, 9, 11, 5, 6, 6, 6, 6, 7, 7]
				}, {
					subjName: "history", 
					mark: [8, 8, 6, 6, 5, 8, 7, 7, "a", 9]
				}, {
					subjName: "anatomy", 
					mark: [10, 11, 6, 7, "a", 7, 7, 9, 5, 8]
				}
			]
		}, {
			studName: "BogdanO",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [7, 8, "a", 6, 5, 7, 8, "a", 9, 6]
				}, {
					subjName: "physics", 
					mark: ["a", 11, 11, 8, 9, 11, 7, 8, 4, 5]
				}, {
					subjName: "chemistry", 
					mark: [7, 8, 5, 4, 3, 10, 8, "a", "a", 9]
				}, {
					subjName: "history", 
					mark: [10, 11, 6, 6, 5, "a", 10, 7, 5, "a"]
				}, {
					subjName: "anatomy", 
					mark: [8, 8, 10, 9, 10, "a", 2, 5, 6, 5]
				}
			]
		}, {
			studName: "VitaliyI",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [6, 4, 11, 3, 4, 5, 4, 6, 6, 4]
				}, {
					subjName: "physics", 
					mark: [2, 5, 5, 5, 6, 6, 4, 5, 5, 4]
				}, {
					subjName: "chemistry", 
					mark: [5, 5, 4, 5, 4, 6, 7, 5, 8, 5]
				}, {
					subjName: "history", 
					mark: [6, 7, 5, 4, 4, 8, 7, 6, 5, 8]
				}, {
					subjName: "anatomy", 
					mark: [6, 6, 7, 7, 8, 8, 6, 7, 4, 4]
				}
			]
		}, {
			studName: "VadumA",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [6, 7, 9, 4, 7, 7, 5, 4, 2, 1]
				}, {
					subjName: "physics", 
					mark: [4, 7, 9, 6, 7, 6, 6, 6, 9, 6]
				}, {
					subjName: "chemistry", 
					mark: [9, 10, 7, 6, 5, 8, 10, 5, 6, 11]
				}, {
					subjName: "history", 
					mark: [8, 9, 9, 10, 9, 8, 7, 7, 5, 6]
				}, {
					subjName: "anatomy", 
					mark: [7, 9, 9, 7, 6, 8, 10, "a", 10, 8]
				}
			]
		}, {
			studName: "SergiyE",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [9, 10, 11, 7, "a", 8, 7, 7, 7, 11]
				}, {
					subjName: "physics", 
					mark: [6, 8, 9, 9, 9, 6, 9, 8, 9, 9]
				}, {
					subjName: "chemistry", 
					mark: [9, 9, 9, 9, 7, 9, 9, 8, 8, 9]
				}, {
					subjName: "history", 
					mark: [8, 9, 8, 7, 6, 8, 9, "a", 9, 8]
				}, {
					subjName: "anatomy", 
					mark: [9, 9, 8, 8, 9, 9, 7, 9, 7, "a"]
				}
			]
		}, {
			studName: "PavloA",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [7, 8, 9, 9, 9, 9, 10, 9, 2, 5]
				}, {
					subjName: "physics", 
					mark: [7, 7, 8, 6, 4, 4, 8, 9, 8, 9]
				}, {
					subjName: "chemistry", 
					mark: [9, 7, 10, 10, 12, 6, 4, 7, 6, "a"]
				}, {
					subjName: "history", 
					mark: [10, 10, 5, 10, 8, 11, 6, "a", 9, 10]
				}, {
					subjName: "anatomy", 
					mark: [9, 10, 9, 8, 7, 9, 9, "a", 11, 9]
				}
			]
		}, {
			studName: "SvetaV",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [7, 3, 7, 5, 11, 6, 8, 9, 9, 5]
				}, {
					subjName: "physics", 
					mark: [2, 5, 8, 4, 4, 4, 5, 4, 5, 7]
				}, {
					subjName: "chemistry", 
					mark: [8, 6, 8, 9, 11, 5, 3, 4, 4, 5]
				}, {
					subjName: "history", 
					mark: [9, 9, 5, 9, 7, 9, 9, "a", "a", 10]
				}, {
					subjName: "anatomy", 
					mark: [9, 10, "a", 8, 7, 9, 10, "a", 11, 9]
				}
			]
		}, {
			studName: "OlgaL",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [7, 8, 10, 10, 10, 8, 9, 8, 10, 10]
				}, {
					subjName: "physics", 
					mark: [8, 9, 10, 9, 8, 8, 9, 10, "a", 1]
				}, {
					subjName: "chemistry", 
					mark: [5, 6, 7, 7, 8, 1, 2, 3, 3, 1]
				}, {
					subjName: "history", 
					mark: [3, 3, 3, 5, 3, 10, 10, 5, 3, 10]
				}, {
					subjName: "anatomy", 
					mark: [3, 10, 3, 3, 10, 3, 10, 3, 11, 3]
				}
			]
		}, {
			studName: "IrunaR",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [2, 3, 4, 3, 2, 2, 3, 4, 6, 5]
				}, {
					subjName: "physics", 
					mark: [5, 6, 8, 8, 8, 6, 7, 6, 8, "a"]
				}, {
					subjName: "chemistry", 
					mark: [10, 8, 10, 6, 8, 11, 9, 4, 10, 9]
				}, {
					subjName: "history", 
					mark: [5, 10, 5, 10, 6, 10, 5, 4, 2, 6]
				}, {
					subjName: "anatomy", 
					mark: [6, 6, 7, 7, 8, 10, 7, 8, 8, 7]
				}
			]
		} 
	];

	var thirdGroup = [
		{
			studName: "AndriyD",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [8, 11, 8, 8, 8, 10, 11, 8, 8, "a"]
				}, {
					subjName: "physics", 
					mark: [4, 6, 4, 4, 4, 4, 6, 3, 7, 6]
				}, {
					subjName: "chemistry", 
					mark: [8, 8, 10, 8, 6, 8, 8, 8, 10, 1]
				}, {
					subjName: "history", 
					mark: [5, 6, 7, 4, 6, 6, 4, 4, 9, 6]
				}, {
					subjName: "anatomy", 
					mark: ["a", 7, 7, 9, 8, "a", 5, 7, 9, 1]
				}
			]
		}, {
			studName: "YuraR",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [4, 11, 11, 8, 9, 11, 7, 8, 4, 4]
				}, {
					subjName: "physics", 
					mark: [6, 9, 10, 7, "a", 9, 9, 9, 10, 6]
				}, {
					subjName: "chemistry", 
					mark: [11, 10, 12, 6, 7, 7, 7, 7, 8, 7]
				}, {
					subjName: "history", 
					mark: [9, 9, 7, 7, 6, 9, 8, 8, "a", 10]
				}, {
					subjName: "anatomy", 
					mark: [11, 12, 7, 8, "a", 9, 8, 10, 6, 8]
				}
			]
		}, {
			studName: "BogdanG",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [6, 7, "a", 4, 4, 6, 7, "a", 7, 6]
				}, {
					subjName: "physics", 
					mark: ["a", 9, 10, 7, 8, 10, 6, 7, "a", 5]
				}, {
					subjName: "chemistry", 
					mark: [6, 7, 4, 3, 2, 9, 6, "a", "a", 8]
				}, {
					subjName: "history", 
					mark: [9, 10, 5, 5, 4, "a", 9, 6, "a", "a"]
				}, {
					subjName: "anatomy", 
					mark: [7, 7, 9, 8, 9, "a", 0, 4, 5, "a"]
				}
			]
		}, {
			studName: "VitaliyT",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [7, "a", 12, 4, 5, 6, 5, 7, 7, 4]
				}, {
					subjName: "physics", 
					mark: [3, 6, "a", "a", 7, 7, 5, 6, 6, 4]
				}, {
					subjName: "chemistry", 
					mark: [6, 6, 5, 6, 5, "a", "a", "a", 9, 5]
				}, {
					subjName: "history", 
					mark: [7, 8, "a", 5, 5, 9, 8, 7, 6, 8]
				}, {
					subjName: "anatomy", 
					mark: [7, 7, 8, 8, 9, 9, 7, 8, 5, 4]
				}
			]
		}, {
			studName: "VadumD",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [8, 9, 11, 6, 9, 9, 7, 6, 4, 6]
				}, {
					subjName: "physics", 
					mark: [6, 9, 11, 8, 9, 8, 8, 8, "a", 6]
				}, {
					subjName: "chemistry", 
					mark: [11, 12, 9, 8, 7, 10, 12, "a", 8, 11]
				}, {
					subjName: "history", 
					mark: [10, 11, 11, 12, 11, 10, 9, "a", 7, 6]
				}, {
					subjName: "anatomy", 
					mark: [9, 11, 11, 9, 8, 10, 12, "a", "a", 8]
				}
			]
		}, {
			studName: "SergiyR",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [6, 7, 8, 4, 3, 5, 4, 4, 4, 11]
				}, {
					subjName: "physics", 
					mark: [3, 5, 6, 6, 6, 3, 6, 5, 6, 9]
				}, {
					subjName: "chemistry", 
					mark: [6, 6, 6, 6, 4, 6, 6, 5, 5, 9]
				}, {
					subjName: "history", 
					mark: [5, 6, 5, 4, 3, 5, 6, 2, 6, 8]
				}, {
					subjName: "anatomy", 
					mark: [6, 6, 5, 5, 6, 6, 4, 6, 4, 6]
				}
			]
		}, {
			studName: "PavloV",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [3, 4, 5, 5, 5, 5, 6, 5, 2, 5]
				}, {
					subjName: "physics", 
					mark: [3, 3, 4, 2, 9, 9, 4, 5, 4, 9]
				}, {
					subjName: "chemistry", 
					mark: [5, 3, 6, 6, 8, 2, 9, 3, 2, "a"]
				}, {
					subjName: "history", 
					mark: [6, 6, 1, 6, 4, 7, 2, 1, 5, 10]
				}, {
					subjName: "anatomy", 
					mark: [5, 6, 5, 4, 3, 5, 5, 1, 7, 9]
				}
			]
		}, {
			studName: "SvetaE",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [10, 6, 10, 8, 12, 9, 11, 12, 12, 5]
				}, {
					subjName: "physics", 
					mark: [5, "a", 11, 7, 7, 7, 8, 7, 8, 7]
				}, {
					subjName: "chemistry", 
					mark: [11, 9, 11, 12, 12, 8, 6, 7, 7, 5]
				}, {
					subjName: "history", 
					mark: [12, 12, 8, 12, 10, 12, 11, "a", 11, 11]
				}, {
					subjName: "anatomy", 
					mark: [12, 11, "a", 10, 10, 12, 11, "a", 12, 9]
				}
			]
		}, {
			studName: "OlgaG",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [6, 7, 9, 9, 9, 7, 8, 7, 9, 10]
				}, {
					subjName: "physics", 
					mark: [7, 8, 9, 8, 7, 7, 8, 9, "a", 1]
				}, {
					subjName: "chemistry", 
					mark: [4, 5, 6, 6, 7, 0, 1, 2, 2, 1]
				}, {
					subjName: "history", 
					mark: [2, 2, 2, 4, 2, 9, 9, 4, 2, 10]
				}, {
					subjName: "anatomy", 
					mark: [2, 9, 2, 2, 9, 2, 9, 2, 10, 3]
				}
			]
		}, {
			studName: "IrunaR",
			subjects: [
				{
					subjName: "mathematics", 
					mark: [4, "a", 6, 5, 4, 4, 5, 6, 8, 5]
				}, {
					subjName: "physics", 
					mark: [7, 8, 10, "a", 10, 8, 9, 8, 10, "a"]
				}, {
					subjName: "chemistry", 
					mark: [12, 10, 12, 8, 10, "a", 11, 6, 12, 9]
				}, {
					subjName: "history", 
					mark: [7, 12, 7, 12, 8, 12, "a", 6, 4, 6]
				}, {
					subjName: "anatomy", 
					mark: [8, 8, 9, 9, 10, 12, 9, "a", 10, 7]
				}
			]
		} 
	];
}) ();