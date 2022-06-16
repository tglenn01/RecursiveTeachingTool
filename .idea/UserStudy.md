#**User Study:**

##Introduction: 
To conduct our *prototype based user study*, we had 2 students who recently completed the CPSC 110 course between
January and April of 2022 as subjects. This allowed us to ensure that our target users are students who are beginning their journey 
within computer science, but also have the knowledge to understand recursion. We gave each student a piece of code from
one of the labs in CPSC 110, and then asked them to draw out a recursive tree and attempt to draw out what the stack for
the given function would look like. We also gave the students a prototype of our analysis tool and asked them if this
tool would make it easier to visualise recursion and avoid infinite recursions (stack overflows)


To conduct our *final user study*,


##Sample Code:
// <br>
(define (has-wand-of-wood--low low wood) <br>
(cond [(empty? low) empty] <br>
[else <br>
(append (has-wand-of-wood--wiz (first low) wood) (has-wand-of-wood--low (rest low) wood))])) <br>
//


## Visualisation of Analysis:




##Code Tasks:

## Prototype Results: 


## Task-Based Results:

##Evaluation:
