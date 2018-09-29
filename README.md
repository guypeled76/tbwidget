# tbwidget
Taboola widget 

Design Goals:
==========================
1. Hide implementation details and provide simple APIs while allowing customization.
2. Optimize for performance
    - Used build method at end of html to queue widget building as soon as possible.
    - Use minimum interaction with browser DOM
        - Utilized getElementByID which is O(1)
        - Used innerHTML to allow browser to build the entire widget with one API call.
3. Allow customization by providing a template function argument to custom render 
   the item HTML.
4. Utilize new features for code maintainability and performance while maintaining 
   backwards compatibility.
   - 74% of modern browsers are evergreen (automatically updated) which means that
     utilizing new browser features is a good practice for most of the users while
     polyfilling and transpiling will work for older browsers.
   - Automatic usage of "right" version might hinder 'CDN' capabilities as it will
     require server side forking and as the code is relatively simple we might do 
     with serving es5 for all browsers or providing different resources and allow sites
     to deicide which resource they want to use. 
5. Account for cross domain communication by using CORS protocol (Cross-Origin 
   Resource Sharing) or by implementing script tag creation communication for older browsers.
6. Allow actions to be executed after widget building or widget loading failure.


Implementation Details:
==========================
1. Implement a class that will encapsulate the internal behaviors.
2. Class should be initialized once with common API parameters to centralize their initialization.
3. Each widget should be registered with minimum code while keeping performance as a priority. 
4. Registering a widget should allow for customizing the item template.
5. Hide JSON structure from the client by hiding internal structure of the data
6. Errors will be logged to the console 
7. Modern browsers has optimize string concatenation memory allocation while older browsers 
   where more performant using Array.join. 
8. Register widget should return a promise to allow actions to be executed 
   after widget building or widget loading failure.
