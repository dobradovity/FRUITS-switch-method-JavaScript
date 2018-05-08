function checkFruit() {
	  var text;
	  var fruits = document.getElementById("myInput").value;

	  switch(fruits) {
	    case "Banana":
	      text = "<img src='images/banana.png'> <h3><h1 id='Bananas'>Bananas</h1> are one of the most widely consumed fruits in the world for good reason. Eating them could help lower blood pressure and reduce the risks of cancer and asthma.<p>Today, bananas are grown in at least 107 countries and are ranked fourth among the world's food crops in monetary value. Americans consume more bananas than apples and oranges combined.</p><h3>Fast facts about bananas:</h3><h4><ul><li>Bananas are rich in potassium and fiber.</li><li>They may help prevent asthma, cancer, high blood pressure, diabetes, cardiovascular disease, and digestive problems.</li><li>Ripen bananas at room temperature and add them to cereal for a tasty breakfast.</li><li>People who use beta blockers should not suddenly increase their intake of bananas.</li></ul></h4> <h3><p>Nutritional profile</p></h3><p>One serving of banana is considered to be about 126 grams. One serving of banana contains 110 calories, 30 grams of carbohydrate and 1 gram of protein. Bananas are naturally free of fat, cholesterol, and sodium.</p><p>Bananas provide a variety of vitamins and minerals:</p> <ul><li>Vitamin B6 - 0.5 mg</li><li>Manganese - 0.3 mg</li><li>Vitamin C - 9 mg</li><li>Potassium - 450 mg</li><li>Dietary Fiber - 3g</li><li>Protein - 1 g</li><li>Magnesium - 34 mg</li><li>Folate - 25.0 mcg</li><li>Riboflavin - 0.1 mg</li><li>Niacin - 0.8 mg</li><li>Vitamin A - 81 IU</li><li>Iron - 0.3 mg</li></ul><a id='Source' href='https://www.medicalnewstoday.com/articles/271157.php' target='blank_page'>Source</a>";
	      break;
	    case "Orange":
	      text = "<img src='images/orange.png'><h1 id='Orange'>Orange</h1><h3>I am not a fan of orange.</h3>";
	      break;
	    case "Apple":
	      text = "<img src='images/apple.png'> <h1 id='Apples'>Apples</h1> How you like them apples?";
	      break;
	     case "Kiwi":
	      text = "<img src='images/kiwi.png'> <h1 id='Kiwi'>Kiwi</h1><table> <caption><h2><sup><abbr title='source Wikipedia'>*</abbr> </sup>Nutritional value per 100 g:</h2></caption> <tr> <th>  </th><th>Content</th> <th>Quantity</th><th>(%Daily Value)</th></tr> <tr> <td><b>Energy</b></td> <td>   </td> <td>255 kJ (61 kcal)</td><td></td></tr><tr><td><b>Carbohydrates</b></td><td>   </td><td>15.8 g</td><td></td></tr><tr><td>   </td><td> Sugars  </td><td>12.3 g</td><td></td></tr><tr><td>   </td><td>  Dietary fiber </td><td>1.4 g</td><td></td></tr><tr><td><b>Fat</b></td><td>   </td><td>0.28 g</td><td></td></tr><tr><td><b>Protein</b></td><td>   </td><td>1.02 g</td><td></td></tr><tr><td><b>Vitamins</b></td><td></td><td>   </td><td></td></tr><tr><td>  </td><td>  Vitamin A equiv.lutein zeaxanthin </td><td>24 μg</td><td> </td></tr><tr><td>   </td><td>  Thiamine (B<sub>1</sub>) </td><td>0 mg</td><td>(0%)</td></tr><tr><td>   </td><td>  Riboflavin (B<sub>2</sub>) </td><td>0.074 mg</td><td>(6%)</td></tr><tr><td>   </td><td>  Niacin (B<sub>3</sub>) </td><td>0.231 mg</td><td>(2%)</td></tr><tr><td>   </td><td>  Pantothenic acid (B<sub>5</sub>) </td><td>0.12 mg</td><td>(2%)</td></tr><tr><td>   </td><td>  Vitamin B<sub>6</sub> </td><td>0.079 mg</td><td>(6%)</td></tr><tr><td>   </td><td>  Folate (B<sub>9</sub>) </td><td>31 μg</td><td>(8%)</td></tr><tr><td>   </td><td>  Vitamin B<sub>12</sub> </td><td>0.08 μg</td><td>(3%)</td></tr><tr><td>   </td><td>  Choline </td><td>1.9 mg</td><td>(0%)</td></tr><tr><td>   </td><td>  Vitamin C </td><td>161.3 mg</td><td>(194%)</td></tr><tr><td>   </td><td>  Vitamin E </td><td>1.4 mg</td><td>(9%)</td></tr><tr><td>   </td><td>  Vitamin K </td><td>6.1 μg</td><td>(6%)</td></tr><tr><td><b>Minerals</b></td><td></td><td>   </td><td>  </td></tr><tr><td>   </td><td>  Calcium </td><td>17 mg</td><td>(2%)</td></tr><tr><td>   </td><td>  Copper </td><td>0.151 mg</td><td>(8%)</td></tr><tr><td>   </td><td>  Iron </td><td>0.21 mg</td><td>(2%)</td></tr><tr><td>   </td><td>  Magnesium </td><td>Magnesium</td><td>(3%)</td></tr><tr><td>   </td><td>  Phosphorus </td><td>25 mg</td><td>(4%)</td></tr><tr><td>   </td><td> Potassium </td><td>315 mg</td><td>(7%)</td></tr><tr><td>   </td><td> Selenium </td><td>0.4 μg</td><td>(1%)</td></tr><tr><td>   </td><td> Sodium </td><td>3 mg</td><td>(0%)</td></tr><tr><td>   </td><td> Zinc </td><td>0.08 mg</td><td>(1%)</td></tr><tr><td> <b>Other constituents</b>  </td><td>   </td><td>   </td><td>   </td></tr><tr><td>   </td><td> Water </td><td>82 g</td><td>   </td></tr></table><a href='https://en.wikipedia.org/wiki/Kiwifruit' target='blank_page'>Wikipedia</a>";
	      break;
	    default:
	      text = "I have never heard of that fruit.";
	  }
	  document.getElementById("demo").innerHTML = text;
	}

v
	
