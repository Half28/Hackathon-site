/*
    Code and comments written by Connor Tollefson on GitHub
    Completed 12/6/20
*/

//We want the webpage to fully load before reading any of the elements, as they will return errors if they haven't loaded by the time we reference and change them
document.addEventListener('DOMContentLoaded', function () {
    //Arbitrary variable names to store page content
	var x, info, indicator = document.getElementById("indicator"), mutationInfo = document.getElementById("mutationinfo"), correct = document.getElementById("correct");
    
    //Checks for invalid input in the search bar
	function checkInvalid(str)
	{
		var invalidChars = 0;
		for (var i = 0; i < str.length; i++)
		{
			if (!checkFor(x, "a", i) && !checkFor(x, "u", i) && !checkFor(x, "g", i) && !checkFor(x, "c", i))
			{
				invalidChars++;
			}
		}
		if (invalidChars > 0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
    
    //Searches for a specific character within a string - returns true if the character is found, case insensitive
	function checkFor(a, c, i) //a is the array in which you're looking, c is the char you're looking for, i is index
	{
		if (a.charAt(i) == c.toLowerCase() || a.charAt(i) == c.toUpperCase())
		{
			return true;
		}
		else
		{
			return false;
		}
	}
    
    //Hides all elements for when the user uses the search bar multiple change. I could have done this much easier in hindsight, but whatever
	function hideAll()
	{
		document.getElementById("aug").style.display = "none";
		document.getElementById("ile").style.display = "none";
		document.getElementById("leu").style.display = "none";
		document.getElementById("phe").style.display = "none";
		document.getElementById("tyr").style.display = "none";
		document.getElementById("cys").style.display = "none";
		document.getElementById("stop").style.display = "none";
		document.getElementById("trp").style.display = "none";
		document.getElementById("ser").style.display = "none";
		document.getElementById("pro").style.display = "none";
		document.getElementById("his").style.display = "none";
		document.getElementById("gln").style.display = "none";
		document.getElementById("arg").style.display = "none";
		document.getElementById("thr").style.display = "none";
		document.getElementById("asp").style.display = "none";
		document.getElementById("lys").style.display = "none";
		document.getElementById("val").style.display = "none";
		document.getElementById("ala").style.display = "none";
		document.getElementById("glu").style.display = "none";
		document.getElementById("gly").style.display = "none";
		document.getElementById("asn").style.display = "none";
	}
    
    //Shorthand way of showing an element (should be called showElement to be honest)
	function getElement(e)
	{
		document.getElementById(e).style.display = "block";
	}
    
    //Event listener that fires when the submit button is clicked. Always use event listeners over onClick functions
	document.getElementById("submitsequence").addEventListener("click", function() {
	
		hideAll();
		x = document.getElementById("codon").value;
        console.log(x);
        //Invalid input handling
		if (isNaN(x) === false)
		{
			alert("Please enter valid data type!");
			document.getElementById("codon").value = "";
		}
		else if (x.length != 3)
		{
			alert("Please enter exactly three characters!");
			document.getElementById("codon").value = "";
		}
		else if (checkInvalid(x))
		{
			alert("Please only enter 'A', 'U', 'G', or 'C'!");
			document.getElementById("codon").value = "";
		}
		else
		{
			if (checkFor(x, "a", 0))
			{
				//Cases for A in first character
				if (checkFor(x, "u", 1))
				{
					
					//Cases for U in second character
					if (checkFor(x, "g", 2))
					{
						//Give info on start codon (AUG)
						getElement("aug");
					}
					else
					{
						//Give info on Ile
						getElement("ile")
					}
				}
				else if (checkFor(x, "c", 1))
				{
					//Cases for C in second character
					//Give info on Thr
					getElement("thr");
				}
				else if (checkFor(x, "a", 1))
				{
					//Cases for A in second character
					if (checkFor(x, "u", 2) || checkFor(x, "c", 2))
					{
						//Give info on Asn
						getElement("asn");
					}
					else
					{
						//Give info on Lys
						getElement("lys");
					}
				}
				else if (checkFor(x, "g", 1))
				{
					//Cases for G in second character
					if (checkFor(x, "u", 2) || checkFor(x, "c", 2))
					{
						//Give info on Ser
						getElement("ser");
					}
					else 
					{
						//Give info on Arg
						getElement("arg");
					}
				}
				else
				{
					alert("Error processing codon!");
				}
			}
			else if (checkFor(x, "u", 0))
			{
				//Cases for U in first character
				if (checkFor(x, "u", 1))
				{
					//Cases for U in second character
					if (checkFor(x, "u", 2) || checkFor(x, "c", 2))
					{
						//Give info on Phe
						getElement("phe");
					}
					else
					{
						//Give info on Leu
						getElement("leu");
					}
				}
				else if (checkFor(x, "c", 1))
				{
					//Cases for C in second character
					//Give info on Ser
					getElement("ser");
				}
				else if (checkFor(x, "a", 1))
				{
					//Cases for A in second character
					if (checkFor(x, "a", 2) || checkFor(x, "g", 2))
					{
						//Give info on stop codon
						getElement("stop");
					}
					else
					{
						//Give info on Tyr
						getElement("tyr");
					}
				}
				else if (checkFor(x, "g", 1))
				{
					//Cases for G in second character
					if (checkFor(x, "a", 2))
					{
						//Give info on stop codon
						getElement("stop");
					}
					else if (checkFor(x, "g", 2))
					{
						//Give info on Trp
						getElement("trp");
					}
					else
					{
						//Give info on Cys
						getElement("cys");
					}
				}
				else
				{
					alert("Error processing codon!");
				}
			}
			else if (checkFor(x, "g", 0))
			{
				//Cases for G in first character
				if (checkFor(x, "u", 1))
				{
					//Cases for U in second character
					//Give info on Val
					getElement("val");
				}
				else if (checkFor(x, "c", 1))
				{
					//Cases for C in second character
					//Give info on Ala
					getElement("ala");
				}
				else if (checkFor(x, "a", 1))
				{
					//Cases for A in second character
					if (checkFor(x, "u", 2) || checkFor(x, "c", 2))
					{
						//Give info on Asp
						getElement("asp");
					}
					else
					{
						//Give info on Glu
						getElement("glu");
					}
				}
				else if (checkFor(x, "g", 1))
				{
					//Cases for G in second character
					//Give info on Gly
					getElement("gly");
				}
				else
				{
					alert("Error processing codon!");
				}
			}
			else if (checkFor(x, "c", 0))
			{
				//Cases for C in first character
				if (checkFor(x, "g", 1))
				{
					//Cases for G in second character
					//Give info on Arg
					getElement("arg");
				}
				else if (checkFor(x, "a", 1))
				{
					//Cases for A in second character
					if (checkFor(x, "g", 2) || checkFor(x, "a", 2))
					{
						//Give info on Gln
						getElement("gln");
					}
					else
					{
						//Give info on His
						getElement("his");
					}
				}
				else if (checkFor(x, "c", 1))
				{
					//Cases for C in second character
					//Give info on Pro
					getElement("pro");
				}
				else if (checkFor(x, "u", 1))
				{
					//Cases for U in second character
					//Give info on Leu
					getElement("leu");
				}
				else 
				{
					alert("Error processing codon!");
				}
			}
			else
			{
				alert("Error processing codon!");
			}
		}
	}
	);
    
    //############### End of protein search bar - beginning of mutation activity ###############//

	document.getElementById("incorrect").addEventListener("click", function() {
		indicator.style.color = "red";
		indicator.innerHTML = "Incorrect! Try again.";
	});
	
	document.getElementById("correct").addEventListener("click", function()
	{
		indicator.style.color = "green";
		correct.style.color = "red";
		indicator.innerHTML = "Correct!";
		mutationInfo.style.display = "block";
	});
});