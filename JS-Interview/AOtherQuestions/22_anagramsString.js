//? Qus.22 :- Write a function that determines if two strings are anagrams of each other 

function areAnagrams(str1, str2) { 
    return str1.split("").sort().join("") === str2.split("").sort().join(""); 
  } 