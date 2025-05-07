# Lab 5 - Starter
Name = 
- Evan Edreo Honggo Widjojo
- Kate Wang

Github Pages = 
[Expose.html](https://evanedreo.github.io/Lab5_Starter/expose.html)
[Explore.html](https://evanedreo.github.io/Lab5_Starter/explore.html)

Answers to Explore Questions:
1. No, I would not use a unit test to fully test the "message" feature, because it likely involves multiple components working together, such as user input, database operations, and network communication. However, individual parts of the message feature, like formatting the message content or checking for empty strings, could be tested using unit tests.
2. Yes, I would use a unit test to test the "max message length" feature. This is a well-contained, predictable behavior that can be tested in isolation. For example, I could create unit tests to check that messages longer than 80 characters are rejected, and messages at or below 80 characters are accepted.