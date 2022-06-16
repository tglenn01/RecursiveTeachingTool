#**User Study:**

##Introduction: 
To conduct our *prototype based user study*, we had 2 students who recently completed the CPSC 110 course between
January and April of 2022 as subjects. This allowed us to ensure that our target users are students who are beginning their journey 
within computer science, but also have the knowledge to understand recursion. We gave each student a piece of code from
one of the labs in CPSC 110, and then asked them to draw out a recursive tree and attempt to draw out what the stack for
the given function would look like. We also gave the students a prototype of our analysis tool and asked them if this
tool would make it easier to visualise recursion and avoid infinite recursions (stack overflows). We then asked each user
for their opinion on the prototype design and whether it helped with understanding and programming recursive functions. 


To conduct our *final user study*,


##Sample Code:
// <br>
(define (has-wand-of-wood--low low wood) <br>
(cond [(empty? low) empty] <br>
[else <br>
(append (has-wand-of-wood--wiz (first low) wood) (has-wand-of-wood--low (rest low) wood))])) <br>
//


## Visualisation of Analysis:

![Design](Prototype.PNG?raw=true "Design")


##User Tasks:

## Prototype Results:
The subjects from the prototype user study provided some insightful opinions on the designed UI and the benefits that
that this analysis tool brought to them. Firstly, given that this interface allows them to visualise the recursive behaviour
of the functions they write, the users felt that this was a definite plus point. Furthermore, the users like the idea of
using recursive trees and call-stack graphs stating that both diagrams combined were more comprehensive. The users showed
some concerns about the static analysis capabilities of the tool. They stated that they preferred a tool would be able
to tell them if they were running into an infinite recursion before executing the program itself. 

## Task-Based Results:

##Evaluation:
