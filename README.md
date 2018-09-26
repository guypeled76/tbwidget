# tbwidget
Taboola widget (v1)


Design Goals:
==========================
1. Hide implementation details and provide simple APIs while allowing customizations.
2. Optimize for performance
    - Used build method at end of html to queue widget building as soon as possible.
    - Use minumu interactiond with browser DOM
        - Utilized getElementByID which is O(1)
        - Used innerHTML to allow browser to build the entire widget with one API call.
3. Allow customization by providing a template function argument to custom render the item HTML.


Implementation Details:
==========================

