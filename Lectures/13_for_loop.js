    //for loop - loop a block of code no of times
      //for in loop - loops trough the keys of an object
      //for of loop - loops throung the value of an object
      //foEach method - Its another type of loop which we used to traverse over the array

      //! 1.for loop
      //Program to add first n natural number
      let sum = 0;
      let n = 3; //prompt("enter the value of n")
      for (let i = 0; i < n; i++) {
        sum += i + 1;
      }
      // alert("sum of first "+ n +" natural number is  "+ sum )
      console.log("sum of first " + n + " natural number is  " + sum);

      //! 2.for in loop (Each itereation return a "key" of object)
      let obj = {
        pavan: 90,
        ajay: 95,
        vijay: 78,
        sanjay: 34,
      };
      for (let key in obj) {
        //alert("marks of  "+ a +" is " + obj[a])
        console.log("marks of  " + key + " is " + obj[key]);
      }

      //! 3.for of loop
      let arry = [
        {
          pavan: 90,
          ajay: 95,
          vijay: 78,
          sanjay: 34,
        },
        {
          vanadna: 78,
          manu: 76,
          anjli: 45,
          kavita: 67,
        },
      ];
      for (let obj of arry) {
        console.log(obj);
      }

      //string
      let str = "pavan";
      for (let c of str) {
        console.log(c);
      }

      //! 4. forEach
      let arry2 = [
        {
          pavan: 90,
          ajay: 95,
          vijay: 78,
          sanjay: 34,
        },
        {
          vanadna: 78,
          pavan: 76,
          anjli: 45,
          kavita: 67,
        },
      ];
      arry2.forEach(function (e) {
        console.log(e.pavan);
      });

      //!5.for loop
      for (let i = 0; i < arry2.length; i++) {
        console.log(arry2[i].pavan);
      }





      //!6 nested loop
      for(let i=1; i<=3; i++){
        console.log("outer loop ",i)
        for(let j=1; j<=3; j++){
          console.log(j);
        }
      }


