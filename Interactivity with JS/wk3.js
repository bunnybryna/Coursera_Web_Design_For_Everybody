var grades=[80,87,94,82,74,91];
// grades[0]=80
var foods=['bananas','apples','pizzas'];
var images=document.getElementsByClassName['img'];
var listItems=document.getElementByTagName['li'];
// elements don't have to be the same type
var info=["Bryna",1987,"walnut",440044];
// attributes and methods
grades.length
grades.sort()
grades.push(element)
// same thing as above
grades[grades.length]=element

// for loop
for(j=0;j<array.length;j++)
{
    // a boolean test case
}

for sum=0;
for (index=0;index<grades.length;index++){
    sum+=grades[index];
}

document.write(sum/grades.length);

// flow of control,() is very important
if(boolean expression)
    statement1;
else
    statment2;

// nested if statement
if(boolean-expression){
    statements;
    if(new-boolean){
        statments to execute if both true;
    }
}
// all about {}, not about indentation
// common errors
5 == '5' //true, you want to use === to check if same type
if (name="Bryna")// is an assignment not a comparison
5+5 //=10
'5'+'5' //=55
'5'+5 //=55
// semicolon issues!
if(age<18);
    alert("Too young!");
for(c=0;c<5;x++);
    document.write(c);
  