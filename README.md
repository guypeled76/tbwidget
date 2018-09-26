# tbwidget
Taboola widget 

Design Goals:
==========================
1. Hide implementation details and provide simple APIs while allowing customizations.
2. Optimize for performance
    - Used build method at end of html to queue widget building as soon as possible.
    - Use minumu interactiond with browser DOM
        - Utilized getElementByID which is O(1)
        - Used innerHTML to allow browser to build the entire widget with one API call.
3. Allow customization by providing a template function argument to custom render 
   the item HTML.
4. Utilize new features for code maintainability and performance while maintaining 
   backwards compatibility.
   - 74% of modern browsers are evergreen (automaticly updated) which means that
     utilizing new browser features is a good practice for most of the users while
     polyfilling and transpaling will work for older browsers.
5. Accound for cross domain communication by using CROS protocol or by implementing 
   script tag creation communication for older browsers.
6. Allow actions to be executed after widget building or widget loading failure.


Implementation Details:
==========================
1. Implement a class that will encapsulate the internal behaviors.
2. Class should be initialized once with common API parameters to centrelize their initialization.
3. Each widget should be registered with minumum code while keeping performance as a priority. 
4. Registering a widget should allow for customizing the item template.
5. Hide JSON structure from the client by hiding internal structure of the data
6. Errors will be logged to the console 
7. Modern browsers has optimize string concatination memory allocation while older browsers 
   where more performant using Array.join. 
8. Register widget should return a promise to allow actions to be executed 
   after widget building or widget loading failure.
