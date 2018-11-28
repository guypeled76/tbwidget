

function test() {
    console.log("In test.");
    var t = new Date();
    window.data = inflate(data);
    t = (new Date()) - t;


    document.getElementById("runTime").innerText = t;
}

function inflate(config) {

    var STYLE = "__style__",
        COMMON = "__common__",
        KEYS = "__keys__";

    function inflateObject(commonInstance, instance) {
        var newmode = {};
        var keys = inflateValue(KEYS, commonInstance, instance);
        for (var index = 0; index < keys.length; index++) {
            var key = keys[index];
            newmode[key] = inflateValue(key, commonInstance, instance);
        }
        return newmode;
    }

    function inflateValue(key, commonInstance, instance) {
        var value = instance[key];
        if (typeof value === 'undefined') {
            value = commonInstance[key];
        }
        return value;
    }

    function inflateStyle(mode, style) {
        var buffer = '';
        for (var selector in style) {
            var parts = selector.split(",");
            for (var index = 0; index < parts.length; index++) {
                if (index > 0) buffer += ',';
                buffer += '.' + mode + ' ' + parts[index];
            }
            buffer += '{' + style[selector] + '}';
        }
        return buffer;
    }


    if (config && config.modes) {
        var modes = config.modes,
            global = config.global,
            style = global.style,
            commonMode = modes[COMMON];

        if (commonMode) {
            var inflatedModes = {};
            var inflatedStyle = style.rtl;
            for (var modeName in modes) {
                if (modeName === COMMON) continue;

                var mode = modes[modeName];
                inflatedModes[modeName] = inflateObject(commonMode, mode);
                inflatedStyle += inflateStyle(modeName, inflateObject(commonMode[STYLE], mode[STYLE]));

            }
            inflatedStyle += style.custom;
            inflatedStyle += style.mode_custom;
            global.style = inflatedStyle;
            config.modes = inflatedModes;
        }
    }

    return config;
}

var data = {
    "modes": {
        "ab_alternating-thumbnails-b_abp-mode": {
            "header": "מרחבי הרשת",
            "widget-creator-revision": "13212368",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 3,
                "cells": 1,
                "virtualThumbWidth": 2,
                "virtualThumbHeight": 1
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:2px 0px 0px 0px;border-color:#ffffff;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#ffffff;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:2px 0px 0px 0px;border-style:SOLID;",
                ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "ab_alternating-thumbnails-c_abp-mode": {
            "widget-creator-revision": "12602271",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 3,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }],
            "__style__": {
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:2px 0px 0px 0px;border-color:#ffffff;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#ffffff;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:2px 0px 0px 0px;border-style:SOLID;"
            }
        },
        "ab_alternating-thumbnails-d_new": {
            "attribution-position": "bottom",
            "widget-creator-revision": "13139792",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 1.532,
                    "h": 1.532
                },
                "rows": 3,
                "cells": 2,
                "virtualThumbWidth": 294,
                "virtualThumbHeight": 210
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:20.0px;font-weight:bold;max-height:60.0px;*height:60.0px;color:#000000;text-decoration:none;",
                ".trc_rbox_header": "font-family:'open sans Heb', 'open sans';font-size:34.0px;font-weight:normal;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 50px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                ".syndicatedItem .video-title": "max-height:40.0px;*height:40.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:20.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#999999;font-size:16.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;"
            }
        },
        "ab_alternating-thumbnails-d_no-read-more": {
            "widget-creator-revision": "12434649",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 3,
                "cells": 2,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:16.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#000000;text-decoration:none;",
                ".trc_rbox_header": "font-family:'Open Sans', Helvetica, Verdana, sans-serif;font-size:1.2rem;font-weight:normal;text-decoration:none;color:#ffffff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:16.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "ab_alternating-thumbnails-d_old": {
            "widget-creator-revision": "12434649",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 3,
                "cells": 2,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }],
            "enable-read-more": true,
            "read-more-box-selector": ".artiwrapper",
            "read-more-caption": "להמשך כתבה",
            "__style__": {
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:15.0px;font-weight:bold;text-decoration:none;color:#ffffff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;"
            }
        },
        "ab_alternating-thumbnails-e_new": {
            "detail-order": "title,description",
            "thumbnail-position": "start",
            "detail-order-ad": "title,description,branding",
            "widget-creator-layout": "autowidget-template-stream",
            "widget-creator-revision": "12437595",
            "responsive-rules": [{
                minWidth: 0,
                margin: {
                    v: 2,
                    h: 2
                },
                rows: 4,
                cells: 1,
                virtualThumbWidth: 140,
                virtualThumbHeight: 80
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:1.1rem;line-height:18.0px;font-weight:bold;max-height:40.0px;*height:40.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:13px;line-height:16px;font-weight:normal;max-height:32px;*height:32px;color:black;text-decoration:none;",
                ".video-label,.sponsored,.sponsored-url": "font-family:Arial,sans-serif;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:1.2rem;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px 0px 0px 0px;border-color:#d7d7d7;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px 0px 0px 0px;border-style:SOLID;",
                ".syndicatedItem .video-description": "max-height:22px;*height:22px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:13px;font-weight:normal;line-height:16px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:40.0px;*height:40.0px;color:#000000;font-family:Arial,sans-serif;font-size:1.1rem;line-height:18.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#bdbdbd;font-size:12.0px;font-weight:600;text-decoration:none;font-family:Arimo, Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".videoCube.thumbnail_start .thumbBlock_holder": "width:128px;_width:128px;"
            }
        },
        "ab_alternating-thumbnails-f_new": {
            "detail-order": "title,description",
            "thumbnail-position": "start",
            "widget-creator-layout": "autowidget-template-stream",
            "widget-creator-revision": "12437595",
            "min-width-for-attribution": 300,
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:1.1rem;line-height:18.0px;font-weight:bold;max-height:40.0px;*height:40.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:13px;line-height:16px;font-weight:normal;max-height:32px;*height:32px;color:black;text-decoration:none;",
                ".video-label,.sponsored,.sponsored-url": "font-family:Arial,sans-serif;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:1.2rem;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px 0px 0px 0px;border-color:#d7d7d7;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px 0px 0px 0px;border-style:SOLID;",
                ".syndicatedItem .video-description": "max-height:22px;*height:22px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:13px;font-weight:normal;line-height:16px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:40.0px;*height:40.0px;color:#000000;font-family:Arial,sans-serif;font-size:1.1rem;line-height:18.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#bdbdbd;font-size:12.0px;font-weight:600;text-decoration:none;font-family:Arimo, Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".videoCube.thumbnail_start .thumbBlock_holder": "width:128px;_width:128px;"
            }
        },
        "ab_alternating-thumbnails-h_carousel-ui": {
            "widget-creator-revision": "13139792",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 1.5,
                    "h": 1.5
                },
                "rows": 1,
                "cells": 4,
                "virtualThumbWidth": 2,
                "virtualThumbHeight": 1
            }],
            "min-width-for-attribution": 315,
            "enable-read-more": true,
            "__style__": {
                ".video-title": "font-family:Arial;font-size:14.0px;line-height:16.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#000000;text-decoration:none;",
                ".trc_rbox_header": "font-family:OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif;font-size:17.0px;font-weight:normal;text-decoration:none;color:#000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 0px 0;",
                "": "width:300px;_width:300px;border-width:0px;border-style:solid solid solid solid;border-color:#e3e3e3;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                ".syndicatedItem .video-title": "max-height:32.0px;*height:32.0px;color:#000000;font-family:Arial;font-size:14.0px;line-height:16.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#999999;font-size:11px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;"
            }
        },
        "ab_alternating-thumbnails-h_new": {
            "attribution-position": "bottom",
            "widget-creator-revision": "13139792",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 1.5,
                    "h": 1.5
                },
                "rows": 1,
                "cells": 4,
                "virtualThumbWidth": 340,
                "virtualThumbHeight": 170
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:20.0px;font-weight:bold;max-height:60.0px;*height:60.0px;color:#000000;text-decoration:none;",
                ".trc_rbox_header": "font-family:'open sans Heb', 'open sans';font-size:34.0px;font-weight:normal;text-decoration:none;color:#000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 50px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                ".syndicatedItem .video-title": "max-height:40.0px;*height:40.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:20.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#999999;font-size:16.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;"
            }
        },
        "ab_alternating-thumbnails-h_old": {
            "widget-creator-revision": "10956690",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 1.5,
                    "h": 1.5
                },
                "rows": 1,
                "cells": 4,
                "virtualThumbWidth": 206,
                "virtualThumbHeight": 80
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:76.0px;*height:76.0px;color:#353535;text-decoration:none;",
                ".trc_rbox_header": "font-family:'south web bold';font-size:17.0px;font-weight:bold;text-decoration:none;color:#000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:none;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;border-style:none;",
                ".syndicatedItem .video-title": "max-height:57.0px;*height:57.0px;color:#353535;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "ab_alternating-thumbnails-h_text-links": {
            "item-renderer": function (box, data) {
                var winWidth = -1,
                    winHeight = -1;

                function resizeVideoBox() {
                    if (box.labelsBox.firstChild) {
                        box.labelsBox.firstChild.innerHTML = box.video_data['title'];
                    }
                    box.fixTextOverflow(true);
                }
                TRC.dom.on(window, 'resize', function (e) {
                    /* IE8 and below has a few issues with window resize. First, it can go into infinite loop due to resize event being called on children resize as well, so we need to check
                       if window dimensions has changed and only if so, call the function. Second issue, is that it will give incorrect dimensions in the calculation unless we use setTimeout() */
                    if (TRC.Browser.ieUpto(8)) {
                        if (document.documentElement.clientWidth != winWidth || document.documentElement.clientHeight != winHeight) {
                            setTimeout(function () {
                                resizeVideoBox();
                                winWidth = document.documentElement.clientWidth;
                                winHeight = document.documentElement.clientHeight;
                            });
                        }
                    } else {
                        resizeVideoBox();
                    }
                });
                if (TRC.widgetCreatorPreview && jQuery) {
                    jQuery(window).on('videoCubeChange', resizeVideoBox);
                }
                if (box.rbox.boxes.length >= box.rbox.recommendationList.length / 2) {
                    box.className += ' rightCol';
                }
            },
            "thumbnail-position": "none",
            "format-syndicator": function (s) {
                return '(' + s + ')';
            },
            "rows": 1,
            "widget-creator-layout": "autowidget-template-text-links",
            "widget-creator-revision": "13859161",
            "details-inline-with-title": "branding",
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 480,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 3,
                "cells": 1
            }, {
                "minWidth": 481,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 3,
                "cells": 1
            }],
            "min-width-for-attribution": 315,
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:18.0px;font-weight:normal;max-height:18.0px;*height:18.0px;color:#2d2eff;text-decoration:none;",
                ".trc_rbox_div": "width:auto;_width:99%;height:auto;border-width:0;padding:0;",
                ".trc_rbox_header": "font-family:OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif;font-size:20.0px;font-weight:normal;text-decoration:none;color:#2c2c2c;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:10px 0 16px 0;",
                ".videoCube": "width:48%;_width:48%;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                "": "width:auto;_width:auto;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                ".syndicatedItem .video-title": "max-height:18.0px;*height:18.0px;color:#2d2eff;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:18.0px;font-weight:normal;text-decoration:none;",
                ".syndicatedItem .branding": "color:#2d2eff;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;"
            }
        },
        "ab_alternating-thumbnails-i_new": {
            "header": "No Header",
            "detail-order": "title,description",
            "thumbnail-position": "start",
            "attribution-position": "none",
            "widget-creator-layout": "autowidget-template-stream",
            "widget-creator-revision": "12437595",
            "disclosure-position": "none",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:1.1rem;line-height:18.0px;font-weight:bold;max-height:40.0px;*height:40.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:13px;line-height:16px;font-weight:normal;max-height:32px;*height:32px;color:black;text-decoration:none;",
                ".video-label,.sponsored,.sponsored-url": "font-family:Arial,sans-serif;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:17.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px 0px 0px 0px;border-color:#d7d7d7;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px 0px 0px 0px;border-style:SOLID;",
                ".syndicatedItem .video-description": "max-height:22px;*height:22px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:13px;font-weight:normal;line-height:16px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:40.0px;*height:40.0px;color:#000000;font-family:Arial,sans-serif;font-size:1.1rem;line-height:18.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#bdbdbd;font-size:12.0px;font-weight:600;text-decoration:none;font-family:Arimo, Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".videoCube.thumbnail_start .thumbBlock_holder": "width:128px;_width:128px;"
            }
        },
        "ab_thumbnails-b_abp-mode": {
            "header": "מרחבי הרשת",
            "widget-creator-revision": "12780754",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 1,
                "virtualThumbWidth": 2,
                "virtualThumbHeight": 1
            }],
            "disclosure-position": "bottom",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:2px 0px 0px 0px;border-color:#E4E4E4;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:2px 0px 0px 0px;border-style:SOLID;",
                ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "ab_thumbnails-e_abp-mode": {
            "header": "מרחבי הרשת",
            "widget-creator-revision": "13210405",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 3,
                "cells": 1,
                "virtualThumbWidth": 2,
                "virtualThumbHeight": 1
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "alternating-text-links-a": {
            "item-renderer": function (box, data) {
                var winWidth = -1,
                    winHeight = -1;

                function resizeVideoBox() {
                    if (box.labelsBox.firstChild) {
                        box.labelsBox.firstChild.innerHTML = box.video_data['title'];
                    }
                    box.fixTextOverflow(true);
                }
                TRC.dom.on(window, 'resize', function (e) {
                    /* IE8 and below has a few issues with window resize. First, it can go into infinite loop due to resize event being called on children resize as well, so we need to check
                       if window dimensions has changed and only if so, call the function. Second issue, is that it will give incorrect dimensions in the calculation unless we use setTimeout() */
                    if (TRC.Browser.ieUpto(8)) {
                        if (document.documentElement.clientWidth != winWidth || document.documentElement.clientHeight != winHeight) {
                            setTimeout(function () {
                                resizeVideoBox();
                                winWidth = document.documentElement.clientWidth;
                                winHeight = document.documentElement.clientHeight;
                            });
                        }
                    } else {
                        resizeVideoBox();
                    }
                });
                if (TRC.widgetCreatorPreview && jQuery) {
                    jQuery(window).on('videoCubeChange', resizeVideoBox);
                }
                if (box.rbox.boxes.length >= box.rbox.recommendationList.length / 2) {
                    box.className += ' rightCol';
                }
            },
            "thumbnail-position": "none",
            "format-syndicator": function (s) {
                return '(' + s + ')';
            },
            "rows": 1,
            "widget-creator-layout": "autowidget-template-text-links",
            "widget-creator-revision": "12429456",
            "details-inline-with-title": "branding",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 3,
                "cells": 1
            }],
            "min-width-for-disclosure": 495,
            "min-width-for-attribution": 625,
            "header-right": "You May Like",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:38.0px;*height:38.0px;color:#000000;text-decoration:none;",
                ".trc_rbox_div": "width:auto;_width:99%;height:auto;border-width:0;padding:0;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:15.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".videoCube": "width:48%;_width:48%;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:3px 3px 3px 0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                "": "width:auto;_width:auto;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                ".syndicatedItem .video-title": "max-height:38.0px;*height:38.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;"
            }
        },
        "alternating-thumbnails-a": {
            "header": ".",
            "widget-creator-revision": "12433883",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 3,
                "virtualThumbWidth": 158,
                "virtualThumbHeight": 132
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:8.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "alternating-thumbnails-aa": {
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 499,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 2,
                "cells": 2,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }, {
                "minWidth": 500,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 4,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#fff;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:'Open Sans';font-size:16.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#fff;font-family:'Open Sans';font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#fff;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Open Sans';background-image:null;text-align:left;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;"
            }
        },
        "alternating-thumbnails-b": {
            "header": "מרחבי הרשת",
            "widget-creator-revision": "13138647",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 6,
                "cells": 1,
                "virtualThumbWidth": 2,
                "virtualThumbHeight": 1
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:2px 0px 0px 0px;border-color:#ffffff;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#ffffff;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:2px 0px 0px 0px;border-style:SOLID;",
                ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "alternating-thumbnails-c": {
            "widget-creator-revision": "12579751",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 2,
                "cells": 3,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }],
            "__style__": {
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:2px 0px 0px 0px;border-color:#ffffff;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#ffffff;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:2px 0px 0px 0px;border-style:SOLID;"
            }
        },
        "alternating-thumbnails-d": {
            "widget-creator-revision": "12434649",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 3,
                "cells": 2,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }],
            "enable-read-more": true,
            "read-more-box-selector": ".artiwrapper",
            "read-more-threshold": 1400,
            "read-more-minimized-size": 1100,
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:16.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#000000;text-decoration:none;",
                ".trc_rbox_header": "font-family:OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif;font-size:1.2rem;font-weight:normal;text-decoration:none;color:#ffffff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:16.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "alternating-thumbnails-e": {
            "detail-order": "title,description",
            "thumbnail-position": "start",
            "detail-order-ad": "title,description,branding",
            "widget-creator-layout": "autowidget-template-stream",
            "widget-creator-revision": "12437595",
            "responsive-rules": [{
                minWidth: 0,
                margin: {
                    v: 2,
                    h: 2
                },
                rows: 4,
                cells: 1,
                virtualThumbWidth: 140,
                virtualThumbHeight: 80
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:1.1rem;line-height:18.0px;font-weight:bold;max-height:40.0px;*height:40.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:13px;line-height:16px;font-weight:normal;max-height:32px;*height:32px;color:black;text-decoration:none;",
                ".video-label,.sponsored,.sponsored-url": "font-family:Arial,sans-serif;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:1.2rem;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px 0px 0px 0px;border-color:#d7d7d7;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px 0px 0px 0px;border-style:SOLID;",
                ".syndicatedItem .video-description": "max-height:22px;*height:22px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:13px;font-weight:normal;line-height:16px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:40.0px;*height:40.0px;color:#000000;font-family:Arial,sans-serif;font-size:1.1rem;line-height:18.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#bdbdbd;font-size:12.0px;font-weight:600;text-decoration:none;font-family:Arimo, Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".videoCube.thumbnail_start .thumbBlock_holder": "width:128px;_width:128px;"
            }
        },
        "alternating-thumbnails-f": {
            "detail-order": "title,description",
            "thumbnail-position": "start",
            "widget-creator-layout": "autowidget-template-stream",
            "widget-creator-revision": "12437595",
            "min-width-for-attribution": 300,
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:1.1rem;line-height:18.0px;font-weight:bold;max-height:40.0px;*height:40.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:13px;line-height:16px;font-weight:normal;max-height:32px;*height:32px;color:black;text-decoration:none;",
                ".video-label,.sponsored,.sponsored-url": "font-family:Arial,sans-serif;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:1.2rem;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px 0px 0px 0px;border-color:#d7d7d7;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px 0px 0px 0px;border-style:SOLID;",
                ".syndicatedItem .video-description": "max-height:22px;*height:22px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:13px;font-weight:normal;line-height:16px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:40.0px;*height:40.0px;color:#000000;font-family:Arial,sans-serif;font-size:1.1rem;line-height:18.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#bdbdbd;font-size:12.0px;font-weight:600;text-decoration:none;font-family:Arimo, Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".videoCube.thumbnail_start .thumbBlock_holder": "width:128px;_width:128px;"
            }
        },
        "alternating-thumbnails-feed-c": {
            "header": "",
            "attribution-position": "bottom",
            "widget-creator-revision": "12579751",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 2,
                "cells": 3,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }],
            "disclosure-position": "bottom",
            "read-more-box-selector": "",
            "__style__": {
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:2px 0px 0px 0px;border-color:#ffffff;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#ffffff;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:2px 0px 0px 0px;border-style:SOLID;"
            }
        },
        "alternating-thumbnails-g": {
            "widget-creator-revision": "12434649",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 3,
                "cells": 2,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }],
            "read-more-box-selector": "“.artiwrapper”",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:16.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#000000;text-decoration:none;",
                ".trc_rbox_header": "font-family:OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif;font-size:1.2rem;font-weight:normal;text-decoration:none;color:#ffffff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:16.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "alternating-thumbnails-h": {
            "widget-creator-revision": "13139792",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 1.5,
                    "h": 1.5
                },
                "rows": 1,
                "cells": 4,
                "virtualThumbWidth": 2,
                "virtualThumbHeight": 1
            }],
            "enable-read-more": true,
            "__style__": {
                ".video-title": "font-family:Arial;font-size:14.0px;line-height:16.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#000000;text-decoration:none;",
                ".trc_rbox_header": "font-family:OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif;font-size:20.0px;font-weight:normal;text-decoration:none;color:#000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 0px 0;",
                "": "width:300px;_width:300px;border-width:0px;border-style:solid solid solid solid;border-color:#e3e3e3;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                ".syndicatedItem .video-title": "max-height:32.0px;*height:32.0px;color:#000000;font-family:Arial;font-size:14.0px;line-height:16.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#999999;font-size:11px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;"
            }
        },
        "alternating-thumbnails-i": {
            "header": "No Header",
            "detail-order": "title,description",
            "thumbnail-position": "start",
            "attribution-position": "none",
            "widget-creator-layout": "autowidget-template-stream",
            "widget-creator-revision": "12437595",
            "disclosure-position": "none",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:1.1rem;line-height:18.0px;font-weight:bold;max-height:40.0px;*height:40.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:13px;line-height:16px;font-weight:normal;max-height:32px;*height:32px;color:black;text-decoration:none;",
                ".video-label,.sponsored,.sponsored-url": "font-family:Arial,sans-serif;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:17.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px 0px 0px 0px;border-color:#d7d7d7;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px 0px 0px 0px;border-style:SOLID;",
                ".syndicatedItem .video-description": "max-height:22px;*height:22px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:13px;font-weight:normal;line-height:16px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:40.0px;*height:40.0px;color:#000000;font-family:Arial,sans-serif;font-size:1.1rem;line-height:18.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#bdbdbd;font-size:12.0px;font-weight:600;text-decoration:none;font-family:Arimo, Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".videoCube.thumbnail_start .thumbBlock_holder": "width:128px;_width:128px;"
            }
        },
        "alternating-thumbnails-j": {
            "widget-creator-revision": "12579751",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 2,
                "cells": 3,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:2px 0px 0px 0px;border-color:#ffffff;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#ffffff;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:2px 0px 0px 0px;border-style:SOLID;"
            }
        },
        "alternating-thumbnails-k": {
            "thumbnail-width": "3",
            "thumbnail-height": "2",
            "rows": 6,
            "widget-creator-revision": "14713316",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 6,
                "cells": 1,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;"
            }
        },
        "alternating-thumbnails-n": {
            "auto-size-rules": [{
                "minWc": 120,
                "maxWc": 349,
                "minWsRange": 8,
                "maxWsRange": 9,
                "n": 2
            }, {
                "minWc": 350,
                "maxWc": 499,
                "minWsRange": 8,
                "maxWsRange": 10,
                "n": 3
            }, {
                "minWc": 500,
                "maxWc": 749,
                "minWsRange": 8,
                "maxWsRange": 11,
                "n": 4
            }, {
                "minWc": 750,
                "maxWc": 999,
                "minWsRange": 7,
                "maxWsRange": 11,
                "n": 5
            }, {
                "minWc": 1000,
                "maxWc": 1249,
                "minWsRange": 6,
                "maxWsRange": 11,
                "n": 6
            }, {
                "minWc": 1250,
                "maxWc": 1499,
                "minWsRange": 6,
                "maxWsRange": 12,
                "n": 7
            }, {
                "minWc": 1500,
                "maxWc": 1749,
                "minWsRange": 6,
                "maxWsRange": 13,
                "n": 8
            }, {
                "minWc": 1750,
                "maxWc": 1920,
                "minWsRange": 6,
                "maxWsRange": 14,
                "n": 9
            }],
            "rows": 1,
            "widget-creator-revision": "14802780",
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 749,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 3,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }, {
                "minWidth": 750,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 5,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#ffffff;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;font-weight:bold;text-decoration:none;color:#ffffff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:2px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:2px 0px 0px 0px;border-style:SOLID;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#ffffff;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#ffffff;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;"
            }
        },
        "alternating-thumbnails-o": {
            "auto-size-rules": [{
                "minWc": 120,
                "maxWc": 349,
                "minWsRange": 8,
                "maxWsRange": 9,
                "n": 2
            }, {
                "minWc": 350,
                "maxWc": 499,
                "minWsRange": 8,
                "maxWsRange": 10,
                "n": 3
            }, {
                "minWc": 500,
                "maxWc": 749,
                "minWsRange": 8,
                "maxWsRange": 11,
                "n": 4
            }, {
                "minWc": 750,
                "maxWc": 999,
                "minWsRange": 7,
                "maxWsRange": 11,
                "n": 5
            }, {
                "minWc": 1000,
                "maxWc": 1249,
                "minWsRange": 6,
                "maxWsRange": 11,
                "n": 6
            }, {
                "minWc": 1250,
                "maxWc": 1499,
                "minWsRange": 6,
                "maxWsRange": 12,
                "n": 7
            }, {
                "minWc": 1500,
                "maxWc": 1749,
                "minWsRange": 6,
                "maxWsRange": 13,
                "n": 8
            }, {
                "minWc": 1750,
                "maxWc": 1920,
                "minWsRange": 6,
                "maxWsRange": 14,
                "n": 9
            }],
            "rows": 1,
            "widget-creator-revision": "14788949",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 2,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .branding": "color:#ccc;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;"
            }
        },
        "alternating-thumbnails-p": {
            "widget-creator-revision": "15503257",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 3,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:57.0px;*height:57.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:22.0px;font-weight:normal;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:38.0px;*height:38.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;text-decoration:none;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;"
            }
        },
        "alternating-thumbnails-q": {
            "header": "אולי יעניין אותך גם",
            "widget-creator-revision": "16004424",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 6,
                "virtualThumbWidth": 256,
                "virtualThumbHeight": 157
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 10px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;"
            }
        },
        "alternating-thumbnails-r": {
            "widget-creator-revision": "17722393",
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 419,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 4,
                "cells": 1,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }, {
                "minWidth": 420,
                "maxWidth": 499,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 2,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }, {
                "minWidth": 500,
                "maxWidth": 659,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 3,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }, {
                "minWidth": 660,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 4,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".video-label,.sponsored,.sponsored-url": "font-family:'Open Sans Hebrew';",
                ".trc_rbox_header": "font-family:'Open Sans Hebrew';font-size:16.0px;font-weight:bold;text-decoration:none;color:#FFFFFF;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:3px 4px 3px 4px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#000000;font-family:'Open Sans Hebrew';font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Open Sans Hebrew';background-image:null;text-align:left;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;"
            }
        },
        "alternating-thumbnails-y": {
            "header": "You May Like",
            "widget-creator-revision": "13208574",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 2,
                "cells": 3
            }],
            "__style__": {
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:15.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;"
            }
        },
        "alternating-thumbnails-z": {
            "header": ".",
            "widget-creator-revision": "13208226",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 3,
                "virtualThumbWidth": 158,
                "virtualThumbHeight": 132
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:8.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "organic-thumbnails-feed": {
            "header": "No Header",
            "detail-order": "description",
            "attribution-position": "none",
            "detail-order-syndicated": "description",
            "widget-creator-revision": "14909100",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 1,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }],
            "disclosure-position": "none",
            "read-more-box-selector": "",
            "before-detail-order": "title",
            "title-icon-url": "http://cdn.taboola.com/libtrc/static/thumbnails/b85ebb441fd89daeaab21635175dd5ba.png",
            "before-detail-order-syndicated": "title,branding",
            "title-icon": "CUSTOM",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:27.0px;*height:27.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;",
                ".video-icon-img": "margin:0px 5px 0px 5px;height:30.0px;",
                ".video-label-box.trc-pre-label": "height:54px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:54px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:5px 0px 7px 0px;"
            }
        },
        "organic-thumbnails-feed-a": {
            "header": "Recommended For You",
            "navigation-type": "scrolling",
            "attribution-position": "none",
            "widget-creator-revision": "14909021",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 1.5,
                    "h": 1.5
                },
                "rows": 1,
                "cells": 4,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }],
            "disclosure-position": "none",
            "read-more-box-selector": "",
            "header-icon-url": "http://cdn.taboola.com/libtrc/static/thumbnails/b85ebb441fd89daeaab21635175dd5ba.png",
            "header-icon": "CUSTOM",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 2px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".trc_rbox_header_icon_img": "margin:0px 5px 3px 5px;height:30.0px;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;"
            }
        },
        "organic-thumbnails-feed-c": {
            "header": "מרחבי הרשת",
            "detail-order": "title,category",
            "attribution-position": "none",
            "item-data-filter": function (data) {
                if (TRC.categoriesMapping[data.category]) {
                    data.category = TRC.categoriesMapping[data.category];
                } else {
                    data.category = 'חדשות';
                }
            },
            "widget-creator-revision": "17102759",
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 480,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 1,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }, {
                "minWidth": 481,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 2,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }],
            "disclosure-position": "none",
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;"
            }
        },
        "organic-thumbnails-feed-d": {
            "header": "",
            "detail-order": "title,category",
            "attribution-position": "none",
            "item-data-filter": function (data) {
                if (TRC.categoriesMapping[data.category]) {
                    data.category = TRC.categoriesMapping[data.category];
                } else {
                    data.category = 'חדשות';
                }
            },
            "widget-creator-revision": "17102759",
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 480,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 1,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }, {
                "minWidth": 481,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 2,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }],
            "disclosure-position": "none",
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px;",
                "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 10px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;"
            }
        },
        "rbox-blended": {
            "header": "Videos",
            "orientation": "vertical",
            "navigation-type": "scrolling",
            "thumbnail-width": "75",
            "thumbnail-height": "55",
            "detail-order": "title,description",
            "thumbnail-position": "start",
            "attribution-position": "bottom",
            "attribution-text": "<span>by<span style=\"font-size:12px;\">Taboola</span></span>",
            "detail-order-syndicated": "branding,title",
            "syndicated-static-text": "Sponsored",
            "auto-size-rules": [{
                "minWc": 120,
                "maxWc": 249,
                "minWsRange": 8,
                "maxWsRange": 8,
                "n": 1
            }, {
                "minWc": 250,
                "maxWc": 379,
                "minWsRange": 8,
                "maxWsRange": 9,
                "n": 2
            }, {
                "minWc": 380,
                "maxWc": 609,
                "minWsRange": 8,
                "maxWsRange": 10,
                "n": 3
            }, {
                "minWc": 610,
                "maxWc": 749,
                "minWsRange": 8,
                "maxWsRange": 11,
                "n": 4
            }, {
                "minWc": 750,
                "maxWc": 1029,
                "minWsRange": 7,
                "maxWsRange": 11,
                "n": 5
            }, {
                "minWc": 1030,
                "maxWc": 1419,
                "minWsRange": 6,
                "maxWsRange": 11,
                "n": 6
            }, {
                "minWc": 1420,
                "maxWc": 1729,
                "minWsRange": 6,
                "maxWsRange": 12,
                "n": 7
            }, {
                "minWc": 1730,
                "maxWc": 1920,
                "minWsRange": 6,
                "maxWsRange": 13,
                "n": 8
            }],
            "rows": 1,
            "widget-creator-layout": "autowidget-template",
            "mode-is-responsive": false,
            "responsive-rules": null,
            "use-css-important": false,
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;text-decoration:none;",
                ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:1px;padding:0;",
                ".videoCube .video-duration": "left:36px;display:block;",
                ".videoCube .video-label-box": "margin-left:81px;margin-right:0px;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:bold;text-decoration:none;color:black;border-width:0;background:transparent;border-style:none none solid none;border-color:#D6D5D3;padding:0;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:3px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:none;",
                "": "width:300px;_width:300px;border-width:0px;border-style:solid solid solid solid;border-color:#000000;padding:0;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                ".videoCube.horizontal": "border-style:none none none solid;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;border-style:none;",
                ".videoCube.syndicatedItem.horizontal": "border-style:none none none solid;",
                ".videoCube.syndicatedItem .video-duration": "display:block;left:36px;",
                ".syndicatedItem .video-title": "max-height:2.58em;*height:2.58em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:17.5px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".videoCube.syndicatedItem .thumbBlock .branding": "text-align:left;background-color:transparent;display:block;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;",
                ".videoCube.syndicatedItem .thumbBlock .static-text": "text-align:left;background-color:black;display:block;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;"
            }
        },
        "text-links-d": {
            "header": "No Header",
            "item-renderer": function (box, data) {
                var winWidth = -1,
                    winHeight = -1;

                function resizeVideoBox() {
                    if (box.labelsBox.firstChild) {
                        box.labelsBox.firstChild.innerHTML = box.video_data['title'];
                    }
                    box.fixTextOverflow(true);
                }
                TRC.dom.on(window, 'resize', function (e) {
                    /* IE8 and below has a few issues with window resize. First, it can go into infinite loop due to resize event being called on children resize as well, so we need to check
                       if window dimensions has changed and only if so, call the function. Second issue, is that it will give incorrect dimensions in the calculation unless we use setTimeout() */
                    if (TRC.Browser.ieUpto(8)) {
                        if (document.documentElement.clientWidth != winWidth || document.documentElement.clientHeight != winHeight) {
                            setTimeout(function () {
                                resizeVideoBox();
                                winWidth = document.documentElement.clientWidth;
                                winHeight = document.documentElement.clientHeight;
                            });
                        }
                    } else {
                        resizeVideoBox();
                    }
                });
                if (TRC.widgetCreatorPreview && jQuery) {
                    jQuery(window).on('videoCubeChange', resizeVideoBox);
                }
                if (box.rbox.boxes.length >= box.rbox.recommendationList.length / 2) {
                    box.className += ' rightCol';
                }
            },
            "thumbnail-position": "none",
            "attribution-position": "none",
            "format-syndicator": null,
            "rows": 1,
            "widget-creator-layout": "autowidget-template-text-links",
            "widget-creator-revision": "12418121",
            "details-inline-with-title": "null",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 5,
                "cells": 1
            }],
            "min-width-for-disclosure": 495,
            "min-width-for-attribution": 625,
            "disclosure-position": "none",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:16.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#000000;text-decoration:none;",
                ".trc_rbox_div": "width:auto;_width:99%;height:auto;border-width:0;padding:0;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0;",
                ".videoCube": "width:48%;_width:48%;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#000000;padding:0px 0px 10px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:DOTTED;",
                "": "width:auto;_width:auto;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#000000;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 0px 0px;border-style:DOTTED;",
                ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:16.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;"
            }
        },
        "thumbnails-a": {
            "header": "מרחבי הרשת",
            "widget-creator-layout": "autowidget-template-stream",
            "widget-creator-revision": "12580378",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 1,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }],
            "disclosure-position": "bottom",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:2px 0px 0px 0px;border-color:#ffffff;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#ffffff;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:2px 0px 0px 0px;border-style:SOLID;",
                ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "thumbnails-aa": {
            "header": "מרחבי הרשת",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 1,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#fff;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:'Open Sans';font-size:16.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#fff;font-family:'Open Sans';font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#fff;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Open Sans';background-image:null;text-align:left;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;"
            }
        },
        "thumbnails-a_backup": {
            "header": "מרחבי הרשת",
            "thumbnail-position": "start",
            "widget-creator-layout": "autowidget-template-stream",
            "widget-creator-revision": "12580378",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 2,
                "cells": 1,
                "virtualThumbWidth": 119,
                "virtualThumbHeight": 85
            }],
            "disclosure-position": "bottom",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:2px 0px 0px 0px;border-color:#ffffff;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#ffffff;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:2px 0px 0px 0px;border-style:SOLID;",
                ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "thumbnails-b": {
            "header": "מרחבי הרשת",
            "widget-creator-revision": "12580440",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 2,
                "cells": 1,
                "virtualThumbWidth": 2,
                "virtualThumbHeight": 1
            }],
            "disclosure-position": "bottom",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:2px 0px 0px 0px;border-color:#E4E4E4;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:2px 0px 0px 0px;border-style:SOLID;",
                ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "thumbnails-c": {
            "header": "אולי יעניין אותך גם",
            "widget-creator-revision": "12416820",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 4,
                "virtualThumbWidth": 230,
                "virtualThumbHeight": 133
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:57.0px;*height:57.0px;color:#353535;text-decoration:none;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".syndicatedItem .video-title": "max-height:38.0px;*height:38.0px;color:#353535;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "thumbnails-d": {
            "header": "אולי יעניין אותך גם",
            "list-suffix": function (itemsContainer, data) {
                if (TRCImpl && TRCImpl.modes[data.mode_name] && !TRCImpl.modes[data.mode_name]['mode-is-responsive']) {
                    for (var i = 0; i < data.boxes.length; i++) {
                        data.boxes[i].style.height = 'auto';
                        if ((i % (data.boxes.length / data.rows) == 0) && i != 0) {
                            var clearDiv = document.createElement('div');
                            clearDiv.style.clear = 'both';
                            clearDiv.style.width = '100%';
                            itemsContainer.insertBefore(clearDiv, data.boxes[i]);
                        }
                    }
                }
                /*** Two Widgets as One ***/
                //create containers for widgets
                var currentContainer = data.container,
                    currentContainerParent = currentContainer.parentNode,
                    widgetsWrapper = document.createElement('div'),
                    headerContainer = data.header,
                    widgetsContainer = document.createElement('div');
                widgetsWrapper.id = 'taboola-ynet-section-front';
                headerContainer.className += ' taboola-ynet-section-front-header';
                widgetsContainer.className = 'taboola-ynet-section-front-widgetsContainer';
                currentContainer.className += ' taboola-ynet-section-front-left';
                currentContainerParent.insertBefore(widgetsWrapper, currentContainer);
                widgetsWrapper.appendChild(headerContainer);
                widgetsWrapper.appendChild(widgetsContainer);
                //inject text-links
                var textLinksContainerDiv = document.createElement('div');
                textLinksContainerDiv.id = 'taboola-ynet-section-front-right';
                widgetsContainer.appendChild(textLinksContainerDiv);
                window._taboola = window._taboola || [];
                _taboola.push({
                    mode: 'text-links-d',
                    container: 'taboola-ynet-section-front-right',
                    placement: 'Ynet Section Front Left',
                    target_type: 'mix'
                });
                widgetsContainer.appendChild(currentContainer);
            },
            "widget-creator-revision": "12418182",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 0,
                    "h": 0
                },
                "rows": 1,
                "cells": 1,
                "virtualThumbWidth": 168,
                "virtualThumbHeight": 103
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:16.0px;font-weight:bold;max-height:32.0px;*height:32.0px;color:#000000;text-decoration:none;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".syndicatedItem .video-title": "max-height:32.0px;*height:32.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:16.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "thumbnails-e": {
            "header": "מרחבי הרשת",
            "widget-creator-revision": "13157020",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 5,
                "cells": 1,
                "virtualThumbWidth": 2,
                "virtualThumbHeight": 1
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:2px 0px 0px 0px;border-color:#ffffff;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#ffffff;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:2px 0px 0px 0px;border-style:SOLID;",
                ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "thumbnails-f": {
            "widget-creator-revision": "13124912",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 4,
                "virtualThumbWidth": 340,
                "virtualThumbHeight": 170
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:108.0px;*height:108.0px;color:#000000;text-decoration:none;",
                ".trc_rbox_header": "font-family:'Open Sans', Helvetica, Verdana, sans-serif;font-size:34.0px;font-weight:normal;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".syndicatedItem .video-title": "max-height:81.0px;*height:81.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;"
            }
        },
        "thumbnails-feed": {
            "header": ".",
            "thumbnail-width": "3",
            "thumbnail-height": "2",
            "rows": 6,
            "widget-creator-revision": "14908947",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 4,
                "cells": 1,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;"
            }
        },
        "thumbnails-feed-a": {
            "header": "",
            "attribution-position": "none",
            "widget-creator-revision": "17102756",
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 480,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 1,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }, {
                "minWidth": 481,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 2,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }],
            "disclosure-position": "bottom",
            "adchoice-position": "bottom",
            "read-more-box-selector": "",
            "header-icon-url": "http://cdn.taboola.com/static/d0/d07b304c-6546-48cd-adc9-08771d79b35a.gif",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 2px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".trc_rbox_header_icon_img": "margin:0px 5px 3px 5px;height:20.0px;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;"
            }
        },
        "thumbnails-feed-b": {
            "header": "",
            "attribution-position": "none",
            "widget-creator-revision": "16976711",
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 480,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 1,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }, {
                "minWidth": 481,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 3,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }],
            "disclosure-position": "bottom",
            "adchoice-position": "bottom",
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#ffffff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;"
            }
        },
        "thumbnails-feed-hero": {
            "header": "No Header",
            "detail-order": "title,category",
            "thumbnail-position": "start",
            "attribution-position": "none",
            "item-data-filter": function (data) {
                if (TRC.categoriesMapping[data.category]) {
                    data.category = TRC.categoriesMapping[data.category];
                } else {
                    data.category = 'חדשות';
                }
            },
            "widget-creator-layout": "autowidget-template-stream",
            "widget-creator-revision": "17836696",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 4,
                "cells": 1,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }],
            "disclosure-position": "bottom",
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:20.0px;font-weight:bold;max-height:45.0px;*height:45.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Roboto, Geneva, 'Lucida Console', sans-serif;font-size:29.0px;font-weight:normal;text-decoration:none;color:#888;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 10px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:45.0px;*height:45.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:20.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".videoCube.thumbnail_start .thumbBlock_holder": "width:25%;_width:25%;",
                ".videoCube .video-label-box.trc-pre-label": "margin:;"
            }
        },
        "thumbnails-feed-hero-2": {
            "header": "No Header",
            "detail-order": "title,description",
            "thumbnail-position": "start",
            "attribution-position": "none",
            "item-data-filter": function (data) {
                if (TRC.categoriesMapping[data.category]) {
                    data.category = TRC.categoriesMapping[data.category];
                } else {
                    data.category = 'חדשות';
                }
            },
            "widget-creator-layout": "autowidget-template-stream",
            "widget-creator-revision": "17836696",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 4,
                "cells": 1,
                "virtualThumbWidth": 5,
                "virtualThumbHeight": 3
            }],
            "disclosure-position": "none",
            "read-more-box-selector": "",
            "read-more-mode-devices": "smart_phone",
            "__style__": {
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Roboto, Geneva, 'Lucida Console', sans-serif;font-size:100%;font-weight:normal;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                ".syndicatedItem .branding": "color:#afadaf;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".videoCube.thumbnail_start .thumbBlock_holder": "width:38.5%;_width:38.5%;",
                ".videoCube .video-label-box.trc-pre-label": "margin:;",
                ".branding": "color:#afadaf;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;"
            }
        },
        "thumbnails-feed-hero-3": {
            "header": "No Header",
            "detail-order": "title,description",
            "thumbnail-position": "start",
            "attribution-position": "none",
            "item-data-filter": function (data) {
                if (TRC.categoriesMapping[data.category]) {
                    data.category = TRC.categoriesMapping[data.category];
                } else {
                    data.category = 'חדשות';
                }
            },
            "widget-creator-layout": "autowidget-template-stream",
            "widget-creator-revision": "17836696",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 4,
                "cells": 1,
                "virtualThumbWidth": 5,
                "virtualThumbHeight": 3
            }],
            "disclosure-position": "none",
            "read-more-box-selector": "",
            "read-more-mode-devices": "smart_phone",
            "__style__": {
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Roboto, Geneva, 'Lucida Console', sans-serif;font-size:100%;font-weight:normal;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                ".syndicatedItem .branding": "color:#afadaf;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".videoCube.thumbnail_start .thumbBlock_holder": "width:38.5%;_width:38.5%;",
                ".videoCube .video-label-box.trc-pre-label": "margin:;",
                ".branding": "color:#afadaf;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;"
            }
        },
        "thumbnails-feed-new": {
            "header": "",
            "attribution-position": "none",
            "widget-creator-revision": "17525866",
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 480,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 1,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }, {
                "minWidth": 481,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 1,
                "virtualThumbWidth": 2,
                "virtualThumbHeight": 1
            }],
            "disclosure-position": "bottom",
            "adchoice-position": "bottom",
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;"
            }
        },
        "thumbnails-feed-new-wide": {
            "header": "No Header",
            "attribution-position": "none",
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 480,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 1,
                "virtualThumbWidth": 16,
                "virtualThumbHeight": 9
            }, {
                "minWidth": 481,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 3,
                "virtualThumbWidth": 2,
                "virtualThumbHeight": 1
            }],
            "disclosure-position": "bottom",
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;"
            }
        },
        "thumbnails-g": {
            "header": "From Around the Web",
            "thumbnail-position": "start",
            "attribution-position": "bottom",
            "widget-creator-layout": "autowidget-template-stream",
            "widget-creator-revision": "12416944",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 8,
                "cells": 1,
                "virtualThumbWidth": 5,
                "virtualThumbHeight": 3
            }],
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:16.0px;font-weight:normal;max-height:64.0px;*height:64.0px;color:#000000;text-decoration:none;",
                ".video-label,.sponsored,.sponsored-url": "font-family:Arimo;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:19.0px;font-weight:normal;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 1px 0px;border-color:#808080;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:none;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#808080;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 1px 0px;border-style:none;",
                ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Arimo;font-size:14.0px;line-height:16.0px;font-weight:normal;text-decoration:none;",
                ".syndicatedItem .branding": "color:#808080;font-size:12.0px;font-weight:normal;text-decoration:none;font-family:Arimo;background-image:null;text-align:left;"
            }
        },
        "thumbnails-h": {
            "widget-creator-revision": "15041326",
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 640,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 2,
                "cells": 2,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }, {
                "minWidth": 641,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 4,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#ffffff;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:'Open Sans Hebrew', Helvetica, Verdana, sans-serif;font-size:26.0px;font-weight:normal;text-decoration:none;color:#ffffff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#ffffff;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#e1e78d;font-size:16.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;"
            }
        },
        "thumbnails-i": {
            "widget-creator-revision": "15685481",
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 479,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 2,
                "cells": 2,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }, {
                "minWidth": 480,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 4,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#fff;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#fff;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;"
            }
        },
        "thumbnails-j": {
            "widget-creator-revision": "16975995",
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 480,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 4,
                "cells": 1,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }, {
                "minWidth": 481,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 2,
                "cells": 4,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".video-label,.sponsored,.sponsored-url": "font-family:'Arial - 400';",
                ".trc_rbox_header": "font-family:'arial - 700';font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#000000;font-family:'Arial - 400';font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Arial - 400';background-image:null;text-align:left;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;"
            }
        },
        "thumbnails-k": {
            "widget-creator-revision": "17088684",
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 480,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 4,
                "cells": 1,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }, {
                "minWidth": 481,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 4,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".video-label,.sponsored,.sponsored-url": "font-family:'Arial - 400';",
                ".trc_rbox_header": "font-family:'arial - 700';font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#000000;font-family:'Arial - 400';font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Arial - 400';background-image:null;text-align:left;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;"
            }
        },
        "thumbnails-l": {
            "responsive-rules": [{
                "minWidth": 0,
                "maxWidth": 480,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 4,
                "cells": 1,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }, {
                "minWidth": 481,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 4,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".video-label,.sponsored,.sponsored-url": "font-family:'Arial - 400';",
                ".trc_rbox_header": "font-family:'arial - 700';font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#000000;font-family:'Arial - 400';font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Arial - 400';background-image:null;text-align:left;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;"
            }
        },
        "thumbnails-n": {
            "header": "No Header",
            "attribution-position": "bottom",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 1,
                "virtualThumbWidth": 2,
                "virtualThumbHeight": 1
            }],
            "disclosure-position": "bottom",
            "read-more-box-selector": "",
            "read-more-mode-devices": "smart_phone",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;"
            }
        },
        "thumbnails-p": {
            "header": "מרחבי הרשת",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 1,
                "cells": 5,
                "virtualThumbWidth": 6,
                "virtualThumbHeight": 5
            }],
            "read-more-box-selector": "",
            "read-more-mode-devices": "smart_phone",
            "__style__": {
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#000000;text-decoration:none;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;"
            }
        },
        "thumbnails-v": {
            "thumbnail-width": "3",
            "thumbnail-height": "2",
            "rows": 6,
            "widget-creator-revision": "14908718",
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 4,
                "cells": 1,
                "virtualThumbWidth": 3,
                "virtualThumbHeight": 2
            }],
            "read-more-box-selector": "",
            "__style__": {
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:;margin-right:;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".video-label-box.trc-pre-label": "height:0px;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;"
            }
        },
        "__common__": {
            "syndicated-attribution-tooltip": "",
            "image-url-prefix": null,
            "read-more-cutoff-length-from-anchor-element": 30,
            "syndicated-static-text": "",
            "expand-animation-duration": 1000,
            "required-attributes": "none",
            "change-url": function (url) {
                return url;
            },
            "loading-animation-url": "hide",
            "pager-style-active-image": "",
            "syndicated-static-text-position": "top-right",
            "pager-button-location": "pager",
            "player-detail-order": "title,description",
            "mode-adc-config": null,
            "slider-scroll-ref-element": function () {
                return window;
            },
            "slider-close-btn-color": "#FFF",
            "details-inline-with-title": "",
            "thumbnail-height": "5",
            "slider-slide-from": "bottom",
            "shade-scroll": false,
            "auto-size": false,
            "pager-button-inactive-image": "",
            "has-thumbs-image-lazy-load": false,
            "visibility-constraints": {},
            "disclosure-alignment": "left",
            "adchoice-large": false,
            "responsive-rules": [{
                "minWidth": 0,
                "margin": {
                    "v": 2,
                    "h": 2
                },
                "rows": 18,
                "cells": 1,
                "virtualThumbWidth": 140,
                "virtualThumbHeight": 80
            }],
            "layout-template": "Horizontal 4",
            "format-description": '%s',
            "ios-sc-link-target-mode": null,
            "gam-allow-trc-ads": false,
            "read-more-config": null,
            "thumbs-image-lazy-load-margins": "600px 1500px",
            "player-container-id": "trc_Embed_Container_Id",
            "image-min-width": 100,
            "before-detail-order": "",
            "read-more-caption": "",
            "template": "Default",
            "slider-close-btn-font-size": "30px",
            "read-more-box-selector": "null",
            "pager-position": "start",
            "widget-creator-layout": "autowidget-template-static",
            "format-uploader": 'User: %s',
            "disclosure-position": "top",
            "image-size-factor": 1.2,
            "format-external-data": '%s',
            "title-icon": "NONE",
            "lightbox-display-title": true,
            "has-image-lazy-load": false,
            "player-thumbnail-height": "200",
            "header-right": "No Header",
            "slider-close-btn-size": "24px",
            "navigation-type": "none",
            "cyclical-paging": false,
            "tokenize-strategy": "word",
            "adchoice-target-url": "",
            "disclosure-link-text-hybrid": "Promoted Links",
            "branding-separator": "|",
            "format-duration": '%s',
            "pager-button-active-image": "",
            "after-visible": function (data) {},
            "player-thumbnail-width": "75",
            "color-scheme": "White",
            "slider-z-index": 2500000,
            "rtb-image-url-prefix": null,
            "slider-transition-duration": 600,
            "use-css-important": true,
            "smart-ellipsis": false,
            "header-icon": "NONE",
            "image-dpr-factor": 2,
            "item-renderer": function (box, data) {
                if (typeof window.trc_itemRenderer == 'function') window.trc_itemRenderer(document.createElement('div'), data, false);
            },
            "read-more-minimized-size": 800,
            "pager-button-hover-image": "",
            "use-browser-line-clamp": true,
            "slider": false,
            "render-player-info": false,
            "item-data-filter": function (data) {},
            "mode-has-adchoice": true,
            "player-embed-code": function () {
                return '';
            },
            "image-allowed-ratio-diff": 0.029,
            "auto-advance": "-1",
            "image-min-dimension": 100,
            "auto-scroll": "none",
            "use-cdn-recommendations": false,
            "format-category": '%s',
            "list-size": 10,
            "enable-read-more": false,
            "auto-advance-animation": "down",
            "format-syndicator": function (s) {
                return s;
            },
            "auto-size-rules": [{
                "minWc": 120,
                "maxWc": 349,
                "minWsRange": 8,
                "maxWsRange": 8,
                "n": 1
            }, {
                "minWc": 350,
                "maxWc": 499,
                "minWsRange": 8,
                "maxWsRange": 9,
                "n": 2
            }, {
                "minWc": 500,
                "maxWc": 749,
                "minWsRange": 8,
                "maxWsRange": 10,
                "n": 3
            }, {
                "minWc": 750,
                "maxWc": 999,
                "minWsRange": 8,
                "maxWsRange": 11,
                "n": 4
            }, {
                "minWc": 1000,
                "maxWc": 1249,
                "minWsRange": 7,
                "maxWsRange": 11,
                "n": 5
            }, {
                "minWc": 1250,
                "maxWc": 1499,
                "minWsRange": 6,
                "maxWsRange": 11,
                "n": 6
            }, {
                "minWc": 1500,
                "maxWc": 1749,
                "minWsRange": 6,
                "maxWsRange": 12,
                "n": 7
            }, {
                "minWc": 1750,
                "maxWc": 1920,
                "minWsRange": 6,
                "maxWsRange": 13,
                "n": 8
            }],
            "carousel-min-items": 1.33,
            "p-video-overlay": true,
            "attribution-text": "by Taboola",
            "slider-transition-delay": 200,
            "popup-custom-url": "",
            "format": {
                'views': 'Views: %s',
                'uploader': 'By: %s',
                'duration': 'Duration: %s',
                'rating': 'Rating: %s'
            },
            "mode-start": function (data) {},
            "auto-syndicated-attribution": true,
            "pager-style-hover-image": "",
            "adchoice-position": "none",
            "syndicated-attribution-position": "bottom-right",
            "disclosure-link-text-sponsored": "Sponsored Links",
            "mode-has-userx": true,
            "attribution-position": "top",
            "slider-background-color": "#666",
            "pager-style-inactive-image": "",
            "image-size-round": 20,
            "min-width-for-attribution": 325,
            "detail-order-ad": "title",
            "style-template": "Light",
            "header": "כתבות נוספות",
            "read-more-cutoff-length-type": "BELOW",
            "tabbed": false,
            "read-more-threshold": 1100,
            "thumbnail-width": "6",
            "min-width-for-disclosure": 225,
            "detail-order": "title",
            "image-max-dimension": 1500,
            "format-published-date": function (d) {
                return this.dateFormatISO(d, false);
            },
            "format-number": function (num) {
                var out = "",
                    m;
                while (num.length > 3 && (m = num.match(/\d{3}\s*$/))) {
                    out = m.toString().replace(/\s+/, "") + "," + out;
                    num = num.replace(/\d{3}\s*$/, "", false);
                }
                out = num + "," + out;
                return out.replace(/,$/, "");
            },
            "mode-is-responsive": true,
            "images-radius": "0",
            "expandable": false,
            "remove-url-playvideo-behavior": false,
            "expand-animation-max-height": 1000,
            "responsive-extra-columns": 1,
            "title": "Related Videos",
            "header-icon-url": "",
            "hide-disclosure-when-no-place": false,
            "thumbnail-position-ad": "inherit",
            "format-title": '%s',
            "pager-button-style": "<span class=\"pager-cont\">&laquo;</span>|<span class=\"pager-cont\">&raquo;</span>",
            "link-target": "normal",
            "widget-creator-revision": "-1",
            "component-id": "rbox-blended",
            "hide-attribution-when-no-place": false,
            "pager-type-style": "numbers",
            "list-suffix": function (internalc, myorigin) {},
            "detail-order-syndicated": "title,branding",
            "title-icon-url": "",
            "read-more-cutoff-from-type": "ARTICLE",
            "impl-class": "TRCRBox",
            "has-expand-animation": false,
            "disclosure-link-text-organic": "",
            "orientation": "horizontal",
            "quantcast-label": "",
            "syndicated-attribution": "",
            "image-lazy-load-space": 200,
            "sponsored-location": "top",
            "__keys__": ['component-id', 'tabbed', 'header', 'expandable', 'list-size', 'orientation', 'navigation-type', 'auto-scroll', 'loading-animation-url', 'thumbnail-width', 'thumbnail-height', 'format', 'detail-order', 'icons', 'format-number', 'change-url', 'list-suffix', 'item-renderer', 'title', 'format-title', 'format-duration', 'format-description', 'format-category', 'format-uploader', 'format-views', 'format-rating', 'format-published-date', 'sponsored-location', 'thumbnail-position', 'color-scheme', 'pager-button-style', 'pager-position', 'pager-type-style', 'template', 'pager-button-location', 'pager-button-active-image', 'pager-button-inactive-image', 'pager-button-hover-image', 'pager-style-active-image', 'pager-style-inactive-image', 'pager-style-hover-image', 'lightbox-display-title', 'detail-order-ad', 'layout-template', 'style-template', 'attribution-position', 'shade-scroll', 'attribution-text', 'required-attributes', 'auto-advance-animation', 'auto-advance', 'format-external-data', 'item-data-filter', 'gam-allow-trc-ads', 'thumbnail-position-ad', 'impl-class', 'player-embed-code', 'player-container-id', 'render-player-info', 'player-thumbnail-width', 'player-thumbnail-height', 'player-detail-order', 'use-cdn-recommendations', 'syndicated-attribution', 'syndicated-attribution-tooltip', 'syndicated-attribution-position', 'detail-order-syndicated', 'format-syndicator', 'syndicated-static-text', 'syndicated-static-text-position', 'quantcast-label', 'cyclical-paging', 'after-visible', 'link-target', 'auto-syndicated-attribution', 'remove-url-playvideo-behavior', 'auto-size', 'auto-size-rules', 'rows', 'widget-creator-layout', 'widget-creator-revision', 'details-inline-with-title', 'mode-is-responsive', 'responsive-extra-columns', 'responsive-rules', 'image-lazy-load-space', 'has-image-lazy-load', 'use-css-important', 'image-url-prefix', 'image-size-factor', 'image-min-width', 'image-size-round', 'image-max-dimension', 'image-min-dimension', 'mode-has-userx', 'min-width-for-disclosure', 'min-width-for-attribution', 'hide-disclosure-when-no-place', 'hide-attribution-when-no-place', 'disclosure-link-text-sponsored', 'disclosure-link-text-hybrid', 'disclosure-link-text-organic', 'disclosure-position', 'header-right', 'use-browser-line-clamp', 'use-dpr-images', 'slider', 'slider-slide-from', 'slider-min-effective-scroll-size', 'slider-transition-duration', 'slider-transition-delay', 'slider-background-color', 'slider-close-btn-font-size', 'slider-close-btn-size', 'slider-close-btn-color', 'slider-scroll-ref-element', 'slider-z-index', 'mode-adc-config', 'images-radius', 'visibility-constraints', 'ios-sc-link-target-mode', 'has-expand-animation', 'expand-animation-duration', 'expand-animation-max-height', 'read-more-config', 'enable-read-more', 'mode-has-adchoice', 'adchoice-large', 'adchoice-position', 'adchoice-target-url', 'read-more-box-selector', 'read-more-threshold', 'read-more-minimized-size', 'read-more-caption', 'mode-start', 'smart-ellipsis', 'tokenize-strategy', 'rtb-image-url-prefix', 'image-dpr-factor', 'image-allowed-ratio-diff', 'popup-custom-url', 'carousel-min-items', 'header-icon-url', 'before-detail-order', 'title-icon-url', 'before-detail-order-syndicated', 'header-icon', 'title-icon', 'has-thumbs-image-lazy-load', 'thumbs-image-lazy-load-margins', 'read-more-cutoff-from-type', 'read-more-anchor-selector', 'read-more-cutoff-length-type', 'read-more-cutoff-length-from-anchor-element', 'read-more-mode-devices', 'branding-separator', 'disclosure-alignment', 'p-video-overlay'],
            "rows": 2,
            "icons": false,
            "format-rating": 'Rating: %s',
            "thumbnail-position": "top",
            "format-views": function (n) {
                return 'Views: ' + this.formatNumber(n, false);
            },
            "read-more-mode-devices": "",
            "read-more-anchor-selector": "",
            "before-detail-order-syndicated": "",
            "slider-min-effective-scroll-size": 20,
            "use-dpr-images": true,
            "__style__": {
                "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                ".playerCube .video-external-data": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                ".trc_lightbox_overlay": "background-color:#000000;opacity:0.70;filter:alpha(opacity=70);",
                "div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover": "background-color:transparent;",
                ".playerCube div.videoCube:hover, div.videoCube_hover": "background-color:transparent;",
                ".trc_pager_prev:hover, .trc_pager_next:hover": "color:#6497ED;",
                ".trc_rbox_border_elm": "border-color:darkgray;",
                ".syndicatedItem .video-views": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                ".syndicatedItem .video-category": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
                ".syndicatedItem .sponsored": "color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;",
                ".pager_disabled": "color:#7d898f;",
                ".playerCube .video-category": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                ".syndicatedItem .video-uploader": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                ".videoCube.thumbnail_start .thumbBlock_holder": "width:40%;_width:40%;",
                ".playerCube .video-uploader": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                ".video-uploader": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                ".trc_sponsored_overlay": "background-color:black;",
                ".syndicatedItem .video-external-data": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#ffffff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;",
                ".syndicatedItem .video-rating": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                ".videoCube.vertical": "border-style:solid none none none;",
                ".trc_pager_unselected": "color:#7d898f;",
                ".video-rating": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                ".video-published-date": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                ".syndicatedItem": "background-color:transparent;",
                ".syndicatedItem .video-duration-detail": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                ".playerCube .videoCube.horizontal": "border-style:none none none none;",
                ".videoCube.syndicatedItem .thumbnail-overlay": "background-image:null;background-position:5% 5%;",
                ".videoCube.syndicatedItem.vertical": "border-style:solid none none none;",
                ".sponsored": "font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;",
                ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;",
                ".videoCube.syndicatedItem .thumbBlock .static-text": "text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;",
                ".videoCube.thumbnail_start.trc-split-label .trc-pre-label": "width:30%;_width:30%;",
                ".video-category": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                ".thumbnail-emblem": "background-position:5% 5%;",
                ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;",
                ".playerCube .video-published-date": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                ".videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay": "background-image:null;",
                ".video-label-box.trc-pre-label": "height:auto;",
                ".video-label,.sponsored,.sponsored-url": "font-family:Arial, Helvetica, sans-serif;",
                ".videoCube.thumbnail_start .trc-pre-label": "width:60%;_width:60%;",
                ".syndicatedItem .video-title": "max-height:57.0px;*height:57.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;text-decoration:none;",
                ".playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay": "background-image:null;",
                ".videoCube.thumbnail_start.trc-split-label .trc-main-label": "width:30%;_width:30%;",
                ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                ".sponsored-default .video-description": "max-height:2.2em;*height:2.2em;",
                ".playerCube .video-description": "font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;",
                ".playerCube .videoCube .video-label-box": "margin-left:81px;margin-right:0px;",
                ".videoCube.syndicatedItem .thumbBlock .branding": "text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;",
                "div.videoCube:hover, div.videoCube_hover": "background-color:transparent;",
                ".videoCube .sponsored": "margin-top:-7px;",
                ".trc_pager_pages div": "font-size:12px;font-weight:normal;text-decoration:none;",
                ".sponsored-url": "font-size:9px;font-weight:bold;text-decoration:underline;color:green;",
                ".playerCube .video-title": "font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;",
                ".videoCube.syndicatedItem .video-label-box": "margin-left:0px;",
                ".trc_rbox_header_icon_img": "margin:0px;height:18px;",
                ".videoCube.syndicatedItem.horizontal": "border-style:none;",
                ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:76.0px;*height:76.0px;color:#000000;text-decoration:none;",
                ".playerCube .video-rating": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".trc_pager_selected": "color:#0056b3;",
                ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 0px 0px;border-style:SOLID;",
                ".videoCube .video-label-box.trc-pre-label": "margin:0;",
                ".branding div.logoDiv": "font-family:inherit;",
                ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;",
                ".playerCube .video-views": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                ".trc_pager div": "font-family:serif;",
                ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
                ".videoCube.horizontal": "border-style:none;",
                "div.trc_pager_pages div:hover": "color:#6497ED;",
                ".pager_enabled": "color:#0056b3;",
                ".playerCube .thumbnail-overlay": "background-image:null;background-position:5% 5%;",
                ".videoCube .thumbnail-overlay": "background-image:null;background-position:5% 5%;",
                ".playerCube .videoCube .video-duration": "display:block;left:36px;",
                ".syndicatedItem .video-published-date": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                ".syndicatedItem .sponsored-url": "color:green;font-size:9px;font-weight:bold;text-decoration:underline;",
                ".playerCube .videoCube .thumbBlock": "border-width:0px;border-color:darkgray;",
                ".playerCube .video-label-box": "text-align:left;",
                "div.sponsored-default:hover, div.sponsored-default.videoCube_hover": "background-color:inherit;",
                ".video-external-data": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                ".trc_pager_prev,.trc_pager_next": "font-size:12px;font-weight:normal;text-decoration:none;",
                ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;",
                ".videoCube.syndicatedItem .video-duration": "display:none;left:36px;",
                ".sponsored-default .video-title": "max-height:2.58em;*height:2.58em;",
                ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                ".sponsored-default": "background-color:#F7F6C6;",
                "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.videoCube.syndicatedItem .video-label-box', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv'],
                ".playerCube .videoCube": "background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;",
                ".branding .logoDiv a span": "color:inherit;font-size:inherit;",
                ".video-label-box": "text-align:left;",
                ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                ".videoCube .video-duration": "left:36px;display:none;",
                "div.syndicatedItem:hover .thumbBlock": "border-color:inherit;",
                ".trc_pager_counter": "color:#000000;",
                ".whatsThisSyndicated": "font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;",
                ".playerCube .video-duration-detail": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                ".video-duration-detail": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                "div.videoCube:hover .thumbBlock": "border-color:inherit;",
                ".video-icon-img": "margin:0px;height:18px;",
                ".video-views": "font-size:10px;font-weight:normal;text-decoration:none;color:black;"
            }
        }
    },
    "language": "he",
    "testmode": false,
    "direction": "rtl",
    "default-thumbnail": "http://cdn.taboola.com/libtrc/static/thumbnails/759bc49732394dde468c8d65a464e1a4.png",
    "domains": "",
    "sponsored-link-text": "Sponsored Link",
    "sponsored-video-text": "Sponsored Video",
    "branding-url": {},
    "configuration-version": "0",
    "external-credentials": "",
    "brightcove-list-id": "",
    "publisher-start": function () {
        this.origGetListSize = this.getListSize;
        this.getListSize = function (m) {
            if (m['mode'] == 'alternating-thumbnails-a' && (document.location.href.indexOf('/articles/0,7340,L-4950420,00.html') > -1 ||
                    document.location.href.indexOf('/articles/0,7340,L-4956867,00.html') > -1)) {
                return 0;
            }
            return this.origGetListSize(m);
        }
        TRC.categoriesMapping = {
            'news': 'חדשות',
            'health': 'בריאות',
            'comput': 'מחשבים',
            'sport': 'ספורט',
            'pnaiplus': 'פנאי פלוס',
            'economy': 'כלכלה',
            'consu': 'צרכנות',
            'vacation': 'חופשה',
            'entertaiment': 'תרבות',
            'dating': 'זוגיות',
            'food': 'אוכל'
        };
        try {
            TRC.footerOverlay = function (cardno) {
                TRC.CARD_NO = cardno;
                var MOBILE_WIDTH = 565,
                    MARGIN_BOTTOM = 10,
                    linkTitles = {
                        'כתבו אלינו': 'https://www.ynet.co.il/home/0,7340,L-824,00.html',
                        'עזרה': 'https://www.ynet.co.il/home/0,7340,L-1893,00.html',
                        'מדיניות פרטיות': 'https://www.ynet.co.il/home/0,7340,L-825,00.html',
                        'תנאי שימוש': 'https://www.ynet.co.il/home/0,7340,L-827,00.html',
                        'מפת האתר': 'https://www.ynet.co.il/home/0,7340,L-4080,00.html'
                    },
                    link = document.createElement('link'),
                    linksContainer = document.createElement('div'),
                    centerLine = document.createElement('div'),
                    hideFooter = document.createElement('div'),
                    LINK_COUNT = Object.keys(linkTitles).length,
                    ITEM_NO = 1;
                TRC.TARGET_HALF_VISIBLE = 2;
                TRC.TARGET_NOT_VISIBLE = 3;
                TRC.oneTimeFlag = 1;
                TRC.body = parent.document.getElementsByTagName('body')[0];
                TRC.footerOverlayDiv = document.createElement('div');
                TRC.closeButton = document.createElement('div');
                link.href = '//cdn.taboola.com/static/37/378bb21d-a3d2-4980-8fd5-211a8b92e61f.css';
                link.type = 'text/css';
                link.rel = 'stylesheet';
                document.getElementsByTagName('head')[0].appendChild(link);
                TRC.footerOverlayDiv.id = 'footerOverlayDiv';
                TRC.footerOverlayDiv.className = ('footerOverlayDiv');
                TRC.closeButton.id = 'closeButton';
                TRC.closeButton.innerHTML = 'X';
                centerLine.id = 'centerLine';
                linksContainer.id = 'linksContainer';
                linksContainer.style.margin = 'auto';
                TRC.footerOverlayDiv.appendChild(TRC.closeButton);
                TRC.footerOverlayDiv.appendChild(centerLine);
                TRC.footerOverlayDiv.appendChild(linksContainer);
                // Creating links from the linkTitles Object
                for (var title in linkTitles) {
                    var link = linkTitles[title];
                    var textNodesSpan = document.createElement('span'),
                        textNodesAnchor = document.createElement('a'),
                        containingDiv = document.createElement('div');
                    textNodesSpan.innerHTML = title;
                    textNodesSpan.className = 'footerLink';
                    containingDiv.className = 'singleLinkDiv';
                    textNodesAnchor.setAttribute('href', link);
                    textNodesAnchor.appendChild(textNodesSpan);
                    containingDiv.appendChild(textNodesAnchor)
                    linksContainer.appendChild(containingDiv);
                    // Mobile Styling
                    if (TRC['body'].offsetWidth < (MOBILE_WIDTH + 1)) {
                        if (LINK_COUNT == 6) {
                            // add lineBreak after the third item for 3x3 layout.
                            if (ITEM_NO == 3) {
                                linksContainer.appendChild(document.createElement('br'));
                            }
                        } else if (LINK_COUNT < 4) {
                            // in case of having 3 or less links, parent div should become one line.
                            TRC.footerOverlayDiv.className = ' smaller'
                        } else if (LINK_COUNT <= 5) {
                            // add lineBreak after the second item for 2x2 or 2x3 layout.
                            if (ITEM_NO == 2) {
                                linksContainer.appendChild(document.createElement('br'));
                            }
                        }
                    }
                    ITEM_NO++;
                }
                TRC['body'].appendChild(TRC.footerOverlayDiv);
                // Hide Overlay
                TRC.closeButton.onclick = function () {
                    setTimeout(function () {
                        TRC.footerOverlayDiv.style.display = 'none';
                    }, 500);
                    TRC.footerOverlayDiv.style.bottom = '-' + (TRC.footerOverlayDiv.offsetHeight + TRC.closeButton.offsetHeight) + 'px';
                };
                TRC.targetElement = parent.document.querySelectorAll('div[data-card-index="' + TRC.CARD_NO + '"]')[0];
                TRC.oberverAPI = function () {
                    function callback(intersectionEvent, b, state) {
                        if (state == TRC.TARGET_HALF_VISIBLE && intersectionEvent.getBoundingClientRect().top > 0) {
                            TRC.footerOverlayDiv.style.bottom = '0';
                        }
                        if (state == TRC.TARGET_NOT_VISIBLE && intersectionEvent.getBoundingClientRect().top > 0) {
                            TRC.footerOverlayDiv.style.bottom = '-' + (TRC.footerOverlayDiv.offsetHeight + TRC.closeButton.offsetHeight + MARGIN_BOTTOM) + 'px';
                        }
                    }
                    var observerParams = {
                        targetElement: TRC.targetElement,
                        onTrigger: callback
                    };
                    TRC.oneTimeFlag = 2;
                    TRC.intersections.isInViewPort(observerParams);
                }
                if (TRC.targetElement) {
                    TRC.oberverAPI();
                }
                window._taboola = window._taboola || [];
                _taboola.push({
                    listenTo: 'render',
                    handler: function (e) {
                        //OBSERVER ITEM
                        TRC.targetElement = parent.document.querySelectorAll('div[data-card-index="' + TRC.CARD_NO + '"]')[0];
                        if (TRC.targetElement && TRC.oneTimeFlag === 1) {
                            TRC.oberverAPI();
                        }
                    }
                });
            }
        } catch (e) {
            console.log(e)
        }

    },
    "get-user": function () {
        return null;
    },
    "get-creator": function () {
        var m = document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);
        for (var i = 0; i < m.length; i++) {
            if (m[i].name == 'uploader' || m[i].name == 'item-uploader') return m[i].content;
        }
    },
    "get-views": function () {
        var m = document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);
        for (var i = 0; i < m.length; i++) {
            if (m[i].name == 'views' || m[i].name == 'item-views') return m[i].content;
        }
    },
    "get-rating": function () {
        var m = document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);
        for (var i = 0; i < m.length; i++) {
            if (m[i].name == 'rating' || m[i].name == 'item-rating') {
                if (!isNaN(parseFloat(m[i].content))) return m[i].content;
            }
        }
    },
    "get-tags": function () {
        return [];
    },
    "logo-image": "http://cdn.taboolasyndication.com/taboola/powered-by.png",
    "has_valid_rss": false,
    "actionscript_version": "3",
    "brightcove-uses-reference": false,
    "publisher-end": function (id) {},
    "ie-logo-image": "http://cdn.taboolasyndication.com/taboola/powered-by-small.gif",
    "attribution": true,
    "notify-loaded": true,
    "metafields": "",
    "normalize-item-id": function (itemid, type, canon) {
        if (!canon && type == 'text' && typeof itemid == 'string' && itemid.search(new RegExp('^https?://')) == 0) itemid = itemid.replace(/\?.*/, '', false);
        return itemid.toLowerCase();
    },
    "normalize-item-url": function (itemurl, type, canon) {
        return itemurl;
    },
    "read-paused-bcplayer": false,
    "normalize-request-param": function (req, mode) {
        return req;
    },
    "normalize-log-param": function (name, value, mode) {
        return value;
    },
    "timeout": 8000,
    "prenormalize-item-id": {
        "host": true,
        "fragment": "^(\/video\/|!)",
        "query": ["p", "id"],
        "truncate-at": ["search.searchcompletion.com", "org.mozilla.javascript.undefined"],
        "trailing-dirsep": true
    },
    "prenormalize-item-url": false,
    "loader-impl": "",
    "trc-network-mapping": {},
    "trc-skip-failover": false,
    "backstage-domain-url": "",
    "adc-config": null,
    "link-target-conf": {
        "NAV": "_blank",
        "NT": "_self",
        "SP": "_blank"
    },
    "ios-sc-link-target": {
        "NAV": "_blank",
        "NT": "_self",
        "SP": "_blank"
    },
    "small-ios-device": "iPhone|iPod",
    "read-more-debug": false,
    "read-more-devices": "smart_phone",
    "attribution-disclosure-direction": "ltr",
    "mode-pub-start": function () {},
    "before-video-load": function () {
        return true;
    },
    "publisher-logo": {},
    "detect-item-from-same-host": function (host, itemHost) {},
    "mode-before-video-load": function (rbox) {
        return true;
    },
    "after-card-created": function (placementData, publisherCardNum, feed) {},
    "publisher-branding": {},
    "global": {
        "abp-detection-enabled": true,
        "allow-nofollow-for-exchange": true,
        "block-video-prob": 1,
        "cloudinary-aspect-ratios-list": false,
        "config-analytics": {
            'logTimer': 50000,
            'logLength': 5,
            'traffic': 20,
            'measureEnable': true,
            'measureTimeToSend': 10000,
            'disableRawDataSend': true
        },
        "consent-presets": {
            taboola_default: null
        },
        "css-isolation": false,
        "disable-unified-iframe-pixel-reporter": true,
        "disable-yield": true,
        "disclosure-enabled": true,
        "enable-analytics": "false",
        "enable-criteo-uid": false,
        "enable-deferred-available": true,
        "enable-deferred-visible": true,
        "enable-detect-bots": true,
        "enable-events-api": true,
        "enable-ie-split-click-event": true,
        "enable-manual-visible": true,
        "enable-multi-pv3": true,
        "enable-organic-redirect": true,
        "enable-rbox-map": false,
        "enable-read-more": true,
        "enable-resource-hints": true,
        "enable-social-events": true,
        "enable-trc-cache": true,
        "enable-visibility-intersection-api": true,
        "events-api-click-enabled": true,
        "explore-delay": 500,
        "feed-observer-load-next-batch": true,
        "force-reset-on-ready": true,
        "has-adchoice": true,
        "has-mode-geometry": true,
        "has-page-geometry": true,
        "has-userx": true,
        "image-url-prefix": "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_{h}%2Cw_{w}%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/",
        "inject-comscore": true,
        "inject-mdotlabs": false,
        "inject-taboolax": true,
        "ios-sc-link-target": {
            "NAV": "_top",
            "NT": "_top",
            "SP": "_top"
        },
        "max-wait-for-cmp": 10000,
        "monitor-dup-items-traffic-pct": 5,
        "p-video-overlay-send-events": true,
        "prefer-response-session-data": true,
        "publisher-onclick-nt-enabled": false,
        "rbox-ajax-post-events-full-rollout": true,
        "rbox-enable-fix-user-id-event": "true",
        "rbox-post-events-as-ajax": true,
        "requests-domain": "trc.taboola.com",
        "rtb-image-url-prefix": "https://images.taboola.com/taboola/image/fetch/$pw_{w}%2C$ph_{h}/t_tbl-cnd/",
        "send-avail-as-get": false,
        "send-avail-as-post": true,
        "send-event-as-post": true,
        "send-full-list": true,
        "send-item-query-string-in-req": true,
        "send-pb-in-click": true,
        "send-user-id-tag": true,
        "send-variant-warning": true,
        "send-visible-as-get": false,
        "show-rtb-ad-choices-icon": true,
        "smart-ellipsis": true,
        "stop-channels-threshold": "0.8",
        "store-userid-first-party-cookie": true,
        "switch-abp-class": false,
        "syndication-embed-code": function (box, recommendation, affiliate) {},
        "syndicator-affiliate-id": "dailyrecord",
        "thumb-lazy-load-method": "PAGE_LOAD,PAGE_INTERACTIVE,RBOX_VISIBLE",
        "thumb-lazy-load-switch": false,
        "tmp-use-pb-params": true,
        "touchstart-enabled": true,
        "trc-cache-it": {
            "text": "d",
            "home": "d",
            "video": "d",
            "search": "d",
            "category": "d",
            "photo": "d",
            "other": "d"
        },
        "trc-request-delay": 500,
        "url-extract-order": ["og", "paramUrl", "meta", "canonical", "location"],
        "use-abp-uim": true,
        "use-calibration-uim": false,
        "use-delay-image-load": true,
        "use-native-json-stringify": true,
        "use-storage-detection": true,
        "user-id-tag-macros": ["tags.bluekai.com/site/35702?id={taboolaID}"],
        "visibility-intersection-api-delay": 1000,
        "visibility-intersection-api-full-rollout": true,
        "visible-delay": 500,
        "style": {
            "rtl": ".trc_rbox_container{direction:rtl;text-align:right;}\n.trc_pager_pages.trc_pager_counter{direction:rtl;}\n.videoCube{direction:rtl;}\n.videoCube .video-label-box{margin-left: auto; margin-right: 81px; direction:rtl;}\n.sponsored-url{float:right;margin-left:auto; margin-right: 1px; direction:ltr;}\n.sponsored{text-align:left;}\n.trc_pager{right: 0px!important; direction:ltr;}\n.trc_pager_prev,.trc_pager_next{margin-top:0 !important; direction:rtl;}\n.trc_pager div{float:right;}\n.trc_related_container div.horizontal{float:right; border-style:none none none solid;}\n.videoCube a .thumbBlock {float: right; margin-right:0; margin-left:5px; margin-right:1px;}\n.videoCube .video-title { margin-left: 3px;margin-right: 0px;}\n.trc_rbox_div {direction:rtl;}\n.trc_pager .trc_pager_pages{_float:none; *float:none;}\n.videoCube .video-duration{position: relative; direction:ltr; text-align:left; }\n.trc_elastic .thumbnail_start .thumbBlock_holder {\n    float: right;\n\tmargin-right: 0;\n\tmargin-left: 10px;\n}\n\n\n.trc_elastic .thumbnail_start.item-has-pre-label .thumbBlock_holder {\n\tmargin-left: 0;\n}\n\n.trc_elastic .thumbnail_start .trc-pre-label {\n\tfloat: right;\n\tpadding-right: 0;\n\tpadding-left: 10px;\n}\n\n.trc_elastic .thumbnail_start.trc-split-label .trc-main-label {\n\tfloat: right;\n\tpadding-left: 0;\n\tpadding-right: 10px;\n}\n\n.branding_div{\n\tfloat:left;\n}\n\n.in_trc_header{\n\tposition: relative;\n\tfloat:left;\t\n\tmargin:0;\n}\n\n.with_trc_pager{\n\tfloat:none;\n}\n\n.trc_related_container .trc_rbox_header .trc_rbox_header_span .trc_header_right_part {\n\tright: 52%;\n}\n\n.trc_header_ext,\n.trc-widget-footer {\n\tfloat: left;\n}\n\n.trc_related_container .videoCube .video-label-box,\n.trc_related_container .trc_rbox .trc_rbox_div .videoCube .video-label-box .branding {\n\ttext-align: right;\n}\n\n.trc_related_container.trc_tl .trc_rbox_div .videoCube.horizontal {\n\tpadding: 3px 0 3px 3px;\n\tclear: right;\n}\n\n.trc_related_container.trc_tl .trc_rbox_div .videoCube.thumbnail_none a {\n\tmargin-right: 15px;\n}\n\n.trc_related_container.trc_tl .trc_rbox_div .videoCube.trc_tl_right_col {\n\tclear: left;\n\tmargin-right: auto;\n\tmargin-left: 0;\n}\n\n.video-icon-container {\n\tfloat: right;\n}\n\n/** specific rules for IE7 to fix attribution alignment issues -\n    does not support floated parent without specific width **/\n.trc_related_container .trc-content-sponsored .attribution-disclosure-link-sponsored,\n.trc_related_container .trc-content-hybrid .attribution-disclosure-link-hybrid {\n\t*display: inline;\n}\n\n.trc_related_container .logoDiv {\n\t*zoom: 1;\n\t*float: none!important;\n}\n/** end of IE7 specific rules **/",
            "custom": "\n.trc-widget-footer {\n    text-align: left;\n}\n.trc_header_ext {\n    text-align: left;\n    float: left;\n}\n.trc_related_container .logoDiv {\n    float: none !important;\n}\n.videoCube {\n    float: right !important;\n}\n.trc_related_container .logoDiv.link-attribution {\n    display: inline-block;\n}\n.trc_related_container .trc-content-hybrid .logoDiv.attribution-disclosure-link-hybrid {\n    display: inline-block;\n}\n.trc_related_container .trc-content-sponsored .logoDiv.attribution-disclosure-link-sponsored {\n    display: inline-block;\n}\n.trc_related_container .video-label-box {\n    text-align: right;\n}\n.trc_related_container .trc_rbox .trc_rbox_div .videoCube .video-label-box .branding {\n    text-align: right;\n}\n.trc_related_container .logoDiv.link-adc {\n    display: inline-block;\n}\n",
            "mode_custom": ".ab_alternating-thumbnails-b_abp-mode img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.ab_alternating-thumbnails-b_abp-mode [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_alternating-thumbnails-b_abp-mode .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #2A2991;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n\tmargin: 0px 0px 0px 0px;\n}\n.ab_alternating-thumbnails-b_abp-mode .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-b_abp-mode .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.ab_alternating-thumbnails-b_abp-mode .logoDiv a {\n    font-size: 100%;\n}\n.ab_alternating-thumbnails-b_abp-mode .logoDiv a span {\n    display: inline;\n    color: #000;\n    font-weight: normal;\n    font-size: 10.0px;\n}\n.ab_alternating-thumbnails-b_abp-mode .videoCube a {\n    padding: 0;\n}\n.ab_alternating-thumbnails-b_abp-mode .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-b_abp-mode .video-label-box {\n    height: 72.0px;\n}\n.ab_alternating-thumbnails-b_abp-mode .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.ab_alternating-thumbnails-b_abp-mode .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.ab_alternating-thumbnails-b_abp-mode .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.ab_alternating-thumbnails-b_abp-mode .video-label-box .branding {\n    display: block;\n}\n.ab_alternating-thumbnails-b_abp-mode .syndicatedItem .branding {\n    line-height: 18.0px;\n}\n.ab_alternating-thumbnails-b_abp-mode .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-b_abp-mode .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.ab_alternating-thumbnails-b_abp-mode .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.ab_alternating-thumbnails-b_abp-mode .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.ab_alternating-thumbnails-c_abp-mode img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.ab_alternating-thumbnails-c_abp-mode [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_alternating-thumbnails-c_abp-mode .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #2A2991;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n}\n.ab_alternating-thumbnails-c_abp-mode .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-c_abp-mode .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.ab_alternating-thumbnails-c_abp-mode .logoDiv a {\n    font-size: 100%;\n}\n.ab_alternating-thumbnails-c_abp-mode .logoDiv a span {\n    display: inline;\n    color: #fffafa;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.ab_alternating-thumbnails-c_abp-mode .videoCube a {\n    padding: 0;\n}\n.ab_alternating-thumbnails-c_abp-mode .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-c_abp-mode .video-label-box {\n    height: 76.0px;\n}\n.ab_alternating-thumbnails-c_abp-mode .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.ab_alternating-thumbnails-c_abp-mode .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.ab_alternating-thumbnails-c_abp-mode .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.ab_alternating-thumbnails-c_abp-mode .video-label-box .branding {\n    display: block;\n}\n.ab_alternating-thumbnails-c_abp-mode .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.ab_alternating-thumbnails-c_abp-mode .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-c_abp-mode .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.ab_alternating-thumbnails-c_abp-mode .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.ab_alternating-thumbnails-c_abp-mode .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.ab_alternating-thumbnails-d_new img {\n        max-width: none;\n}3\n/* override bootstrap default span definitions */\n.ab_alternating-thumbnails-d_new [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_alternating-thumbnails-d_new .trc_rbox_header {\n        line-height: 1.3em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 20px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #2A2991;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n}\n.ab_alternating-thumbnails-d_new .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-d_new .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.ab_alternating-thumbnails-d_new .logoDiv a {\n    font-size: 100%;\n}\n.ab_alternating-thumbnails-d_new .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.ab_alternating-thumbnails-d_new .videoCube a {\n    padding: 0;\n}\n.ab_alternating-thumbnails-d_new .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-d_new .video-label-box {\n    height: 76px;\n}\n.ab_alternating-thumbnails-d_new .videoCube .video-label-box {\n    margin-top: 20px;\n}\n.ab_alternating-thumbnails-d_new .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n    height: 40px;\n}\n.ab_alternating-thumbnails-d_new .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.ab_alternating-thumbnails-d_new .video-label-box .branding {\n    display: block;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-box-orient: vertical;\n}\n.ab_alternating-thumbnails-d_new .syndicatedItem .branding {\n    line-height: 16.0px;\n    margin-top: 20px;\n}\n.ab_alternating-thumbnails-d_new .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-d_new .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.ab_alternating-thumbnails-d_new .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.ab_alternating-thumbnails-d_new .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.trc_elastic .ab_alternating-thumbnails-d_new .trc_rbox_header .trc_rbox_header_span {\n       padding-right: 16px;\n}\n.trc_elastic .ab_alternating-thumbnails-d_new .trc_rbox_outer .trc_rbox_div{\n\t    padding: 0 20px 5px;\n    \tmargin: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-d_new .trc_rbox_outer .trc_rbox_div .videoCube{\n\t    margin-bottom: 30px;\n}\n.trc_elastic .ab_alternating-thumbnails-d_new  .logoDiv.link-attribution {\n    padding-left: 20px;\n}\n.ab_alternating-thumbnails-d_no-read-more img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.ab_alternating-thumbnails-d_no-read-more [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_alternating-thumbnails-d_no-read-more .trc_rbox_header {\n        line-height: 33px;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #1A3A85;\n\tpadding: 0px 0px 0px 0px;\n\tbox-sizing: border-box;\n\tmargin-bottom: 10px;\n\tfont-family: OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif !important;\n}\n.ab_alternating-thumbnails-d_no-read-more .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;i\n}\n.ab_alternating-thumbnails-d_no-read-more .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.ab_alternating-thumbnails-d_no-read-more .logoDiv a {\n    font-size: 100%;\n}\n.ab_alternating-thumbnails-d_no-read-more .logoDiv a span {\n    display: inline;\n    color: #fff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.ab_alternating-thumbnails-d_no-read-more .videoCube a {\n    padding: 0;\n}\n.ab_alternating-thumbnails-d_no-read-more .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-d_no-read-more .video-label-box {\n    height: 68.0px;\n}\n.ab_alternating-thumbnails-d_no-read-more .videoCube .video-label-box {\n    margin-top: 4px;\n}\n.ab_alternating-thumbnails-d_no-read-more .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.ab_alternating-thumbnails-d_no-read-more .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.ab_alternating-thumbnails-d_no-read-more .video-label-box .branding {\n    display: block;\n}\n.ab_alternating-thumbnails-d_no-read-more .syndicatedItem .branding {\n    line-height: 19.0px;\n    padding-top: 4px;\n}\n.ab_alternating-thumbnails-d_no-read-more .trc_header_left_column {\n\tdisplay: inline-block;\n\twidth: 48%;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-d_no-read-more .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.ab_alternating-thumbnails-d_no-read-more .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.ab_alternating-thumbnails-d_no-read-more .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n    \tpadding-top: 5px;\n}\n.trc_elastic .ab_alternating-thumbnails-d_no-read-more .trc_rbox_outer .trc_rbox_div {\n    padding: 0 10px 0 10px;\n}\n.ab_alternating-thumbnails-d_no-read-more .trc-widget-footer .link-attribution a span {\n\tcolor: #000;\n\tpadding-left: 6px;\n}\n.ab_alternating-thumbnails-d_no-read-more  .link-disclosure{\n\tpadding-left: 10px;\n}\nspan.trc_rbox_header_span {\n        padding-right: 6px;\n}\n.trc_elastic .ab_alternating-thumbnails-d_no-read-more .trc_rbox_header .logoDiv.link-disclosure.attribution-disclosure-link-hybrid {\n    margin-top: 0;\n    margin-left: 0;\n}.ab_alternating-thumbnails-d_old img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.ab_alternating-thumbnails-d_old [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_alternating-thumbnails-d_old .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #417cc3;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n\tmargin-bottom: 10px;\n}\n.ab_alternating-thumbnails-d_old .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-d_old .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.ab_alternating-thumbnails-d_old .logoDiv a {\n    font-size: 100%;\n}\n.ab_alternating-thumbnails-d_old .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.ab_alternating-thumbnails-d_old .videoCube a {\n    padding: 0;\n}\n.ab_alternating-thumbnails-d_old .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-d_old .video-label-box {\n    height: 76.0px;\n}\n.ab_alternating-thumbnails-d_old .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.ab_alternating-thumbnails-d_old .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.ab_alternating-thumbnails-d_old .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.ab_alternating-thumbnails-d_old .video-label-box .branding {\n    display: block;\n}\n.ab_alternating-thumbnails-d_old .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.ab_alternating-thumbnails-d_old .trc_header_left_column {\n\tdisplay: inline-block;\n\twidth: 48%;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-d_old .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.ab_alternating-thumbnails-d_old .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.ab_alternating-thumbnails-d_old .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}.ab_alternating-thumbnails-e_new img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.ab_alternating-thumbnails-e_new [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_alternating-thumbnails-e_new .video-description {\n\tpadding-top: 5px;\n}\n.ab_alternating-thumbnails-e_new .trc_rbox_div {\n\tmargin-bottom: 0;\n}\n.ab_alternating-thumbnails-e_new .trc_rbox_header {\n        line-height: 35px;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\theight: auto;\n\tbackground-color: #1a3a75;\n\tpadding: 0px 0px 0px 0;\n\tbox-sizing: initial;\n\tmargin-bottom: 0px;\n\tfont-family: OpenSansHebrew-Regular;\n}\n.ab_alternating-thumbnails-e_new .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-e_new .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.ab_alternating-thumbnails-e_new .logoDiv a {\n    font-size: 100%;\n}\n.ab_alternating-thumbnails-e_new .logoDiv a span {\n    display: inline;\n    color: #fff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.ab_alternating-thumbnails-e_new .videoCube a {\n    padding: 0;\n}\n.ab_alternating-thumbnails-e_new .trc_rbox_outer .videoCube {\n\tmargin-bottom: 10px;\n        padding-top: 10px;\n}\n.ab_alternating-thumbnails-e_new .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-e_new .video-label-box {\n    height: 76.0px;\n}\n.ab_alternating-thumbnails-e_new .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n    margin-left: 0;\n    padding: 0px 0px 0px 10px;\n}\n.ab_alternating-thumbnails-e_new .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.ab_alternating-thumbnails-e_new .video-label-box .branding {\n    display: block;\n    margin-top: 10px;\n}\n.ab_alternating-thumbnails-e_new .syndicatedItem .branding {\n    line-height: 22.0px;\n    margin-top: 10px;\n}\n.ab_alternating-thumbnails-e_new .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-e_new .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.ab_alternating-thumbnails-e_new .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.ab_alternating-thumbnails-e_new .videoCube .video-label-box {\n\tmargin-top: 0px;\n}\n.ab_alternating-thumbnails-e_new .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n\tpadding-left: 5px;\n    padding-top: 5px;\n}\n.ab_alternating-thumbnails-e_new .thumbnail_start .thumbBlock_holder {\n    float: right;\n    margin-right: 10px;\n    margin-left: 18px;\n    width: 140px !important;\n    height: 92px;\n}\n.ab_alternating-thumbnails-e_new .trc_rbox_header .trc_rbox_header_span {\n\tpadding-right: 10px;\n}\n.ab_alternating-thumbnails-e_new .videoCube.videoCube_1_child.trc-first-recommendation {\n    border: none;\n}\n.ab_alternating-thumbnails-e_new .trc-widget-footer .link-attribution span {\n    color: #000;\n}\n.trc_elastic .ab_alternating-thumbnails-e_new .trc_rbox_header .logoDiv.link-disclosure.attribution-disclosure-link-hybrid {\n    margin-top: 0;\n    margin-left: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-e_new .trc_rbox_header .trc_rbox_header_span {\n    font-family: OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif !important;\n}.ab_alternating-thumbnails-f_new img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.ab_alternating-thumbnails-f_new [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_alternating-thumbnails-f_new .trc_rbox_div {\n\tmargin-bottom: 0;\n}\n.ab_alternating-thumbnails-f_new .video-description {\n\tpadding-top: 5px;\n}\n.ab_alternating-thumbnails-f_new .trc_rbox_header {\n        line-height: 35px;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\theight: auto;\n\tbackground-color: #1a3a75;\n\tpadding: 0px 0px 0px 0;\n\tbox-sizing: initial;\n\tmargin-bottom: 0px;\n\tfont-family: OpenSansHebrew-Regular;\n}\n.ab_alternating-thumbnails-f_new .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-f_new .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.ab_alternating-thumbnails-f_new .logoDiv a {\n    font-size: 100%;\n}\n.ab_alternating-thumbnails-f_new .logoDiv a span {\n    display: inline;\n    color: #fff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.ab_alternating-thumbnails-f_new .videoCube a {\n    padding: 0;\n}\n.ab_alternating-thumbnails-f_new .trc_rbox_outer .videoCube {\n\tmargin-bottom: 10px;\n        padding-top: 10px;\n}\n.ab_alternating-thumbnails-f_new .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-f_new .video-label-box {\n    height: 76.0px;\n}\n.ab_alternating-thumbnails-f_new .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n    margin-left: 0;\n    padding: 0px 5px 0px 10px;\n}\n.ab_alternating-thumbnails-f_new .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.ab_alternating-thumbnails-f_new .video-label-box .branding {\n    display: block;\n    margin-top: 10px;\n}\n.ab_alternating-thumbnails-f_new .syndicatedItem .branding {\n    line-height: 22.0px;\n    margin-top: 10px;\n}\n.ab_alternating-thumbnails-f_new .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-f_new .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.ab_alternating-thumbnails-f_new .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.ab_alternating-thumbnails-f_new .videoCube .video-label-box {\n\tmargin-top: 0px;\n}\n.ab_alternating-thumbnails-f_new .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n\tpadding-left: 5px;\n    padding-top: 5px;\n}\n.ab_alternating-thumbnails-f_new .thumbnail_start .thumbBlock_holder {\n    float: right;\n    margin-right: 10px;\n    margin-left: 13px;\n    width: 140px !important;\n    height: 92px;\n}\n.ab_alternating-thumbnails-f_new .trc_rbox_header .trc_rbox_header_span {\n\tpadding-right: 10px;\n}\n.ab_alternating-thumbnails-f_new .videoCube.videoCube_1_child.trc-first-recommendation {\n    border: none;\n}\n.ab_alternating-thumbnails-f_new .trc-widget-footer .link-attribut,\n.ab_alternating-thumbnails-f_new .trc-widget-footer .link-adc a .trc_adc_s_logo {\n    display: none;\n}\n.trc_elastic .ab_alternating-thumbnails-f_new .trc_rbox_outer .videoCube:last-child {\n    border-bottom: 1px solid #eee;\n    margin-bottom: 0px;\n    padding-bottom: 10px;\n}\n.trc_elastic .ab_alternating-thumbnails-f_new .trc_rbox_header .logoDiv.link-disclosure.attribution-disclosure-link-hybrid {\n    margin-top: 0;\n    margin-left: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-f_new .trc_rbox_header .trc_rbox_header_span {\n    font-family: OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif !important;\n}.ab_alternating-thumbnails-h_carousel-ui img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.ab_alternating-thumbnails-h_carousel-ui [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_alternating-thumbnails-h_carousel-ui .trc_rbox_header {\n    line-height: 1.3em;\n    position: relative;\n    display: block;\n    width: auto;\n\tmargin: 2px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tpadding: 0px 4px 0px 4px;\n\tbox-sizing: border-box;\n\tfont-family: OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif !important;\n}\n.trc_elastic .ab_alternating-thumbnails-h_carousel-ui .trc_rbox_header .trc_rbox_header_span {\n    font-family: OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif !important;\n}\n.ab_alternating-thumbnails-h_carousel-ui .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-h_carousel-ui .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.ab_alternating-thumbnails-h_carousel-ui .logoDiv a {\n    font-size: 100%;\n}\n.ab_alternating-thumbnails-h_carousel-ui .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 10.0px;\n}\n.ab_alternating-thumbnails-h_carousel-ui .videoCube a {\n    padding: 0;\n}\n.ab_alternating-thumbnails-h_carousel-ui .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-h_carousel-ui .video-label-box {\n    height: 55px;\n}\n.ab_alternating-thumbnails-h_carousel-ui .videoCube .video-label-box {\n    margin-top: 3px;\n}\n.ab_alternating-thumbnails-h_carousel-ui .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.ab_alternating-thumbnails-h_carousel-ui .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.ab_alternating-thumbnails-h_carousel-ui .video-label-box .branding {\n    display: block;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-box-orient: vertical;\n}\n.ab_alternating-thumbnails-h_carousel-ui .syndicatedItem .branding {\n    line-height: 16.0px;\n    margin-top: 3px;\n}\n.ab_alternating-thumbnails-h_carousel-ui .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-h_carousel-ui .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.ab_alternating-thumbnails-h_carousel-ui .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.ab_alternating-thumbnails-h_carousel-ui .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.trc_elastic .ab_alternating-thumbnails-h_carousel-ui .trc_rbox_outer .trc_rbox_div{\n\tpadding: 0px;\n\tpadding-right: 10px;\n    margin: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-h_carousel-ui .trc_rbox_outer .trc_rbox_div .videoCube{\n\tmargin: 0px 4px;\n}\n.ab_alternating-thumbnails-h_carousel-ui .trc_rbox_div > div {\n    width: 267%!important;\n}\n.trc_related_container .ab_alternating-thumbnails-h_carousel-ui .logoDiv.link-attribution {\n\tfloat: none;\n}\n.ab_alternating-thumbnails-h_carousel-ui .logoDiv.link-disclosure.attribution-disclosure-link-hybrid {\n    margin-top: 0px;\n}\n.trc_related_container .ab_alternating-thumbnails-h_carousel-ui .logoDiv.link-attribution {\n    margin-left: 2px;\n}\n.ab_alternating-thumbnails-h_carousel-ui .trc_rbox_div {\n    -webkit-overflow-scrolling: touch;\n    -webkit-animation-duration: 4000ms;\n    overflow-scrolling: touch;\n     overflow: scroll;\n}\n.trc_rbox_container .trc_rbox.ab_alternating-thumbnails-h_carousel-ui {\n\tbackground: #f6f6f6;\n}\n.trc_elastic .ab_alternating-thumbnails-h_carousel-ui .trc_rbox_outer {\n\tmargin-top: 3px;\n}\n.ab_alternating-thumbnails-h_new img {\n        max-width: none;\n}3\n/* override bootstrap default span definitions */\n.ab_alternating-thumbnails-h_new [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_alternating-thumbnails-h_new .trc_rbox_header {\n        line-height: 1.3em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 20px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n}\n.ab_alternating-thumbnails-h_new .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-h_new .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.ab_alternating-thumbnails-h_new .logoDiv a {\n    font-size: 100%;\n}\n.ab_alternating-thumbnails-h_new .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.ab_alternating-thumbnails-h_new .videoCube a {\n    padding: 0;\n}\n.ab_alternating-thumbnails-h_new .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-h_new .video-label-box {\n    height: 76px;\n}\n.ab_alternating-thumbnails-h_new .videoCube .video-label-box {\n    margin-top: 20px;\n}\n.ab_alternating-thumbnails-h_new .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n    height: 40px;\n}\n.ab_alternating-thumbnails-h_new .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.ab_alternating-thumbnails-h_new .video-label-box .branding {\n    display: block;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-box-orient: vertical;\n}\n.ab_alternating-thumbnails-h_new .syndicatedItem .branding {\n    line-height: 16.0px;\n    margin-top: 20px;\n}\n.ab_alternating-thumbnails-h_new .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-h_new .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.ab_alternating-thumbnails-h_new .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.ab_alternating-thumbnails-h_new .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.trc_elastic .ab_alternating-thumbnails-h_new .trc_rbox_header .trc_rbox_header_span {\n       padding-right: 16px;\n}\n.trc_elastic .ab_alternating-thumbnails-h_new .trc_rbox_outer .trc_rbox_div{\n\t    padding: 0 20px;\n    \tmargin: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-h_new .trc_rbox_outer .trc_rbox_div .videoCube{\n\t    margin-bottom: 30px;\n}\n.trc_elastic .ab_alternating-thumbnails-h_new  .logoDiv.link-attribution {\n    padding-left: 20px;\n}\n.ab_alternating-thumbnails-h_new .trc_rbox_div {\n    -webkit-overflow-scrolling: touch;\n    -webkit-animation-duration: 4000ms;\n    overflow-scrolling: touch;\n     overflow: scroll;\n}\n.ab_alternating-thumbnails-h_new .trc_rbox_div > div {\n    width: 230%!important;\n}\n.ab_alternating-thumbnails-h_new .trc_rbox_div::-webkit-scrollbar {\n    -webkit-appearance: none;\n}\n.ab_alternating-thumbnails-h_new .trc_rbox_div::-webkit-scrollbar:vertical {\n    width: 0px;\n}\n.ab_alternating-thumbnails-h_new .trc_rbox_div::-webkit-scrollbar:horizontal {\n    height: 4px;\n}\n.ab_alternating-thumbnails-h_new .trc_rbox_div::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, .2);\n    border-radius: 10px;\n}\n.ab_alternating-thumbnails-h_new .trc_rbox_div::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background-color: transparent;\n}\n.ab_alternating-thumbnails-h_new .videoCube.videoCube_1_child {\n    margin-right: 1%;\n}\n.ab_alternating-thumbnails-h_old img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.ab_alternating-thumbnails-h_old [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_alternating-thumbnails-h_old {\n    margin-right: 5px;\n}\n.ab_alternating-thumbnails-h_old .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-h_old .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-h_old .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.ab_alternating-thumbnails-h_old .logoDiv a {\n    font-size: 100%;\n}\n.ab_alternating-thumbnails-h_old .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.ab_alternating-thumbnails-h_old .videoCube a {\n    padding: 0;\n}\n.ab_alternating-thumbnails-h_old .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-h_old .video-label-box {\n    height: auto;\n}\n.ab_alternating-thumbnails-h_old .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.ab_alternating-thumbnails-h_old .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.ab_alternating-thumbnails-h_old .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.ab_alternating-thumbnails-h_old .video-label-box .branding {\n    display: block;\n}\n.ab_alternating-thumbnails-h_old .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.ab_alternating-thumbnails-h_old .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-h_old .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.ab_alternating-thumbnails-h_old .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.ab_alternating-thumbnails-h_old .trc_rbox_div {\n    -webkit-overflow-scrolling: touch;\n    -webkit-animation-duration: 4000ms;\n    overflow-scrolling: touch;\n     overflow: scroll;\n}\n.ab_alternating-thumbnails-h_old .trc_rbox_div > div {\n    width: 290%!important;\n}\n.ab_alternating-thumbnails-h_old .trc_rbox_div::-webkit-scrollbar {\n    -webkit-appearance: none;\n}\n.ab_alternating-thumbnails-h_old .trc_rbox_div::-webkit-scrollbar:vertical {\n    width: 0px;\n}\n.ab_alternating-thumbnails-h_old .trc_rbox_div::-webkit-scrollbar:horizontal {\n    height: 4px;\n}\n.ab_alternating-thumbnails-h_old .trc_rbox_div::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, .2);\n    border-radius: 10px;\n}\n.ab_alternating-thumbnails-h_old .trc_rbox_div::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background-color: transparent;\n}\n.ab_alternating-thumbnails-h_old .videoCube.videoCube_1_child {\n    margin-right: 0.6%;\n}\n.ab_alternating-thumbnails-h_old .videoCube {\n    width: 206px!important;\n}\n.ab_alternating-thumbnails-h_old {\n    padding-top: 10px;\n}\n.ab_alternating-thumbnails-h_old div[data-item-id].videoCube .thumbBlock_holder {\n    width: 206px;\n    height: 80px;\n}/* override bootstrap default span definitions */\n.ab_alternating-thumbnails-h_text-links [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_alternating-thumbnails-h_text-links .trc_rbox_header {\n    line-height: 10px;\n    position: relative;\n    display: inline-block;\n    width: 100%;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.ab_alternating-thumbnails-h_text-links .trc_rbox_header .trc_rbox_header_span {\n\tpadding-right: 20px;\n}\n.ab_alternating-thumbnails-h_text-links .trc_rbox_header_span .trc_header_right_column {\n        position: absolute;\n        width: 48%;\n        left: 52%;\n        top: 0;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-h_text-links .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n        position: relative;\n        z-index: 1;\n}\n.ab_alternating-thumbnails-h_text-links .logoDiv a {\n    font-size: 100%;\n}\n.ab_alternating-thumbnails-h_text-links .logoDiv a span {\n    color: #555555;\n    font-weight: normal;\n    font-size: 12.0px;\n}\n.ab_alternating-thumbnails-h_text-links .syndicatedItem .video-title .branding {\n        line-height: 1.3em;\n}\n.ab_alternating-thumbnails-h_text-links .trc_rbox_div .videoCube.horizontal {\n        clear: left;\n}\n.ab_alternating-thumbnails-h_text-links .trc_rbox_div .videoCube.trc_tl_right_col {\n        float: none;\n        clear: right;\n        margin-left: auto;\n}\n.ab_alternating-thumbnails-h_text-links .videoCube:hover span.branding,\n.ab_alternating-thumbnails-h_text-links .videoCube_hover span.branding {\n        text-decoration: none;\n}\n.ab_alternating-thumbnails-h_text-links .trc_rbox_div .videoCube.thumbnail_none a{\n    display: list-item;\n    list-style: disc outside none;\n    vertical-align: top;\n    overflow: visible;\n    margin-left: 15px;\n    color: #2d2eff;\n    font-size: 16px;\n    margin-right: 36px !important;\n    padding: 0;\n}\n.ab_alternating-thumbnails-h_text-links .videoCube .video-label-box {\n    display: inline-block!important;\n    vertical-align: top;\n    width: 100%;\n}\n.ab_alternating-thumbnails-h_text-links .trc_rbox_div .videoCube:hover .video-title {\n        text-decoration: underline;\n}\n.ab_alternating-thumbnails-h_text-links .trc_header_left_column {\n\twidth: auto;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-h_text-links .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.ab_alternating-thumbnails-h_text-links .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.ab_alternating-thumbnails-h_text-links .syndicatedItem .branding {\n\tline-height: normal;\n    font-weight: 700;\n}\n.ab_alternating-thumbnails-h_text-links .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: -9px;\n\tright: auto;\n\tpadding-left: 10px;\n\tline-height: 10px;\n\theight: 16px;\n}\n.trc_rbox_container .trc_rbox.ab_alternating-thumbnails-h_text-links {\n\tbackground: #fff;\n}\n.ab_alternating-thumbnails-h_text-links {\n\theight: 125px;\n}\n.ab_alternating-thumbnails-h_text-links .taboola_spotlight_overlay {\n    display: none;\n}.ab_alternating-thumbnails-i_new img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.ab_alternating-thumbnails-i_new [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_alternating-thumbnails-i_new .trc_rbox_div {\n\tmargin-bottom: 0;\n}\n.ab_alternating-thumbnails-i_new .video-description {\n\tpadding-top: 5px;\n}\n.ab_alternating-thumbnails-i_new .trc_rbox_header {\n        line-height: 33px;\n        position: relative;\n        display: none;\n        width: 100%;\n\theight: auto;\n\tbackground-color: #1a3a75;\n\tpadding: 0px 0px 0px 0;\n\tbox-sizing: initial;\n\tmargin-bottom: 0px;\n\tfont-family: OpenSansHebrew-Regular;\n}\n.ab_alternating-thumbnails-i_new .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-i_new .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.ab_alternating-thumbnails-i_new .logoDiv a {\n    font-size: 100%;\n}\n.ab_alternating-thumbnails-i_new .logoDiv a span {\n    display: inline;\n    color: #fff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.ab_alternating-thumbnails-i_new .videoCube a {\n    padding: 0;\n}\n.ab_alternating-thumbnails-i_new .trc_rbox_outer .videoCube {\n\tmargin-bottom: 10px;\n        padding-top: 10px;\n}\n.ab_alternating-thumbnails-i_new .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .ab_alternating-thumbnails-i_new .video-label-box {\n    height: 76.0px;\n}\n.ab_alternating-thumbnails-i_new .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n    margin-left: 0;\n    padding: 0px 0px 0px 10px;\n}\n.ab_alternating-thumbnails-i_new .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.ab_alternating-thumbnails-i_new .video-label-box .branding {\n    display: block;\n    margin-top: 10px;\n}\n.ab_alternating-thumbnails-i_new .syndicatedItem .branding {\n    line-height: 22.0px;\n    margin-top: 10px;\n}\n.ab_alternating-thumbnails-i_new .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_alternating-thumbnails-i_new .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.ab_alternating-thumbnails-i_new .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.ab_alternating-thumbnails-i_new .videoCube .video-label-box {\n\tmargin-top: 0px;\n}\n.ab_alternating-thumbnails-i_new .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n\tpadding-left: 5px;\n    padding-top: 5px;\n}\n.ab_alternating-thumbnails-i_new .thumbnail_start .thumbBlock_holder {\n    float: right;\n    margin-right: 10px;\n    margin-left: 18px;\n    width: 140px !important;\n    height: 92px;\n}\n.ab_alternating-thumbnails-i_new .trc_rbox_header .trc_rbox_header_span {\n\tpadding-right: 10px;\n}\n.ab_alternating-thumbnails-i_new .videoCube.videoCube_1_child.trc-first-recommendation {\n    border: none;\n}\n.trc_elastic .ab_alternating-thumbnails-i_new .trc_rbox_outer .videoCube:last-child {\n    border-bottom: 1px solid #eee;\n    margin-bottom: 0px;\n    padding-bottom: 10px;\n}.ab_thumbnails-b_abp-mode img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.ab_thumbnails-b_abp-mode [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_thumbnails-b_abp-mode .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #2A2991;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n}\n.ab_thumbnails-b_abp-mode .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_thumbnails-b_abp-mode .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.ab_thumbnails-b_abp-mode .logoDiv a {\n    font-size: 100%;\n}\n.ab_thumbnails-b_abp-mode .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.ab_thumbnails-b_abp-mode .videoCube a {\n    padding: 0;\n}\n.ab_thumbnails-b_abp-mode .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .ab_thumbnails-b_abp-mode .video-label-box {\n    height: 72.0px;\n}\n.ab_thumbnails-b_abp-mode .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.ab_thumbnails-b_abp-mode .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.ab_thumbnails-b_abp-mode .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.ab_thumbnails-b_abp-mode .video-label-box .branding {\n    display: block;\n}\n.ab_thumbnails-b_abp-mode .syndicatedItem .branding {\n    line-height: 18.0px;\n}\n.ab_thumbnails-b_abp-mode .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_thumbnails-b_abp-mode .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.ab_thumbnails-b_abp-mode .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.ab_thumbnails-b_abp-mode .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.ab_thumbnails-e_abp-mode img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.ab_thumbnails-e_abp-mode [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_thumbnails-e_abp-mode .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n}\n.ab_thumbnails-e_abp-mode .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_thumbnails-e_abp-mode .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.ab_thumbnails-e_abp-mode .logoDiv a {\n    font-size: 100%;\n}\n.ab_thumbnails-e_abp-mode .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 10.0px;\n}\n.ab_thumbnails-e_abp-mode .videoCube a {\n    padding: 0;\n}\n.ab_thumbnails-e_abp-mode .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .ab_thumbnails-e_abp-mode .video-label-box {\n    height: 72.0px;\n}\n.ab_thumbnails-e_abp-mode .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.ab_thumbnails-e_abp-mode .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.ab_thumbnails-e_abp-mode .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.ab_thumbnails-e_abp-mode .video-label-box .branding {\n    display: block;\n}\n.ab_thumbnails-e_abp-mode .syndicatedItem .branding {\n    line-height: 18.0px;\n}\n.ab_thumbnails-e_abp-mode .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.ab_thumbnails-e_abp-mode .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.ab_thumbnails-e_abp-mode .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.ab_thumbnails-e_abp-mode .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n/* override bootstrap default span definitions */\n.alternating-text-links-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-text-links-a .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n}\n.alternating-text-links-a .trc_rbox_header_span .trc_header_right_column {\n        position: absolute;\n        width: 48%;\n        left: 52%;\n        top: 0;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-text-links-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n        position: relative;\n        z-index: 1;\n}\n.alternating-text-links-a .logoDiv a {\n    font-size: 100%;\n}\n.alternating-text-links-a .logoDiv a span {\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-text-links-a .syndicatedItem .video-title .branding {\n        line-height: 1.3em;\n}\n.alternating-text-links-a .trc_rbox_div .videoCube.horizontal {\n        clear: left;\n}\n.alternating-text-links-a .trc_rbox_div .videoCube.trc_tl_right_col {\n        float: none;\n        clear: right;\n        margin-left: auto;\n}\n.alternating-text-links-a .videoCube:hover span.branding,\n.alternating-text-links-a .videoCube_hover span.branding {\n        text-decoration: none;\n}\n.alternating-text-links-a .trc_rbox_div .videoCube.thumbnail_none a{\n    display: list-item;\n    list-style: disc outside none;\n    vertical-align: top;\n    overflow: visible;\n    margin-left: 15px;\n    padding: 0;\n}\n.alternating-text-links-a .videoCube .video-label-box {\n        display: inline-block!important;\n        vertical-align: top;\n        width: 100%;\n        *margin-top: -3px;\n\tmin-height: 19.0px;\n}\n.alternating-text-links-a .trc_rbox_div .videoCube:hover .video-title {\n        text-decoration: underline;\n}\n.alternating-text-links-a .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-text-links-a .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.alternating-text-links-a .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-text-links-a .syndicatedItem .branding {\n\tline-height: 19.0px;\n}\n.alternating-text-links-a .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.alternating-thumbnails-a img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-a .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n}\n.alternating-thumbnails-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-a .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-a .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-a .videoCube {\n\tmargin-bottom: 0 !important;\n}\n.alternating-thumbnails-a .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .alternating-thumbnails-a .video-label-box {\n    height: 72.0px;\n}\n.alternating-thumbnails-a .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.alternating-thumbnails-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.alternating-thumbnails-a .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.alternating-thumbnails-a .video-label-box .branding {\n    display: block;\n}\n.alternating-thumbnails-a .syndicatedItem .branding {\n    line-height: 18.0px;\n}\n.alternating-thumbnails-a .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-a .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.alternating-thumbnails-a .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-a .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.alternating-thumbnails-a a.trc_mobile_adc_link.trc_attribution_position_top,\n.alternating-thumbnails-a a.trc_mobile_attribution_link.trc_attribution_position_top,\n.alternating-thumbnails-a a.trc_mobile_disclosure_link.trc_attribution_position_top {\n    display: none !important;\n}\n.alternating-thumbnails-a .videoCube div.taboola_spotlight_overlay a {\n    display: inline-block !important;\n}.alternating-thumbnails-aa img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-aa [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-aa .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.alternating-thumbnails-aa .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-aa .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-aa .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-aa .logoDiv a span {\n    display: inline;\n    color: #fff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-aa .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-aa .thumbBlock {\n    margin: 0;\n}\n.alternating-thumbnails-aa .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n.alternating-thumbnails-aa .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n.alternating-thumbnails-aa .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.alternating-thumbnails-aa .videoCube:hover .video-label-box .video-title,\n.alternating-thumbnails-aa .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.alternating-thumbnails-aa .video-label-box .branding {\n    display: block;\n}\n.alternating-thumbnails-aa .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.alternating-thumbnails-aa .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-aa .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.alternating-thumbnails-aa .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-aa .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.alternating-thumbnails-aa {\n\tbackground-color: rgba(0,0,0,0.5);\n}\n.alternating-thumbnails-b img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-b [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-b .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #2A2991;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n\tmargin: 0px 0px 0px 0px;\n}\n.alternating-thumbnails-b .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-b .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-b .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-b .logoDiv a span {\n    display: inline;\n    color: #000;\n    font-weight: normal;\n    font-size: 10.0px;\n}\n.alternating-thumbnails-b .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-b .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .alternating-thumbnails-b .video-label-box {\n    height: 72.0px;\n}\n.alternating-thumbnails-b .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.alternating-thumbnails-b .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.alternating-thumbnails-b .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.alternating-thumbnails-b .video-label-box .branding {\n    display: block;\n}\n.alternating-thumbnails-b .syndicatedItem .branding {\n    line-height: 18.0px;\n}\n.alternating-thumbnails-b .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-b .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.alternating-thumbnails-b .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-b .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.alternating-thumbnails-c img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-c [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-c .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #2A2991;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n}\n.alternating-thumbnails-c .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-c .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-c .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-c .logoDiv a span {\n    display: inline;\n    color: #fffafa;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-c .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-c .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .alternating-thumbnails-c .video-label-box {\n    height: 76.0px;\n}\n.alternating-thumbnails-c .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.alternating-thumbnails-c .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.alternating-thumbnails-c .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.alternating-thumbnails-c .video-label-box .branding {\n    display: block;\n}\n.alternating-thumbnails-c .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.alternating-thumbnails-c .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-c .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.alternating-thumbnails-c .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-c .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.alternating-thumbnails-d img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-d [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-d .trc_rbox_header {\n        line-height: 33px;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #1A3A85;\n\tpadding: 0px 0px 0px 0px;\n\tbox-sizing: border-box;\n\tmargin-bottom: 10px;\n\tfont-family: OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif !important;\n}\n.alternating-thumbnails-d .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;i\n}\n.alternating-thumbnails-d .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-d .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-d .logoDiv a span {\n    display: inline;\n    color: #fff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-d .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-d .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .alternating-thumbnails-d .video-label-box {\n    height: 68.0px;\n}\n.alternating-thumbnails-d .videoCube .video-label-box {\n    margin-top: 4px;\n}\n.alternating-thumbnails-d .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.alternating-thumbnails-d .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.alternating-thumbnails-d .video-label-box .branding {\n    display: block;\n}\n.alternating-thumbnails-d .syndicatedItem .branding {\n    line-height: 19.0px;\n    padding-top: 4px;\n}\n.alternating-thumbnails-d .trc_header_left_column {\n\tdisplay: inline-block;\n\twidth: 48%;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-d .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.alternating-thumbnails-d .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-d .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n    \tpadding-top: 5px;\n}\n.trc_elastic .alternating-thumbnails-d .trc_rbox_outer .trc_rbox_div {\n    padding: 0 10px 0 10px;\n}\n.alternating-thumbnails-d .trc-widget-footer .link-attribution a span {\n\tcolor: #000;\n\tpadding-left: 10px;\n}\n.alternating-thumbnails-d  .link-disclosure{\n\tpadding-left: 10px;\n}\n.trc_elastic .alternating-thumbnails-d .trc_rbox_header .logoDiv.link-disclosure.attribution-disclosure-link-hybrid {\n    margin-top: 0;\n    margin-left: 0;\n}\n.trc_elastic .alternating-thumbnails-d .trc_rbox_header .trc_rbox_header_span {\n    font-family: OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif !important;\n\tpadding-right: 10px;\n}.alternating-thumbnails-e img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-e [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-e .video-description {\n\tpadding-top: 5px;\n}\n.alternating-thumbnails-e .trc_rbox_div {\n\tmargin-bottom: 0;\n}\n.alternating-thumbnails-e .trc_rbox_header {\n        line-height: 35px;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\theight: auto;\n\tbackground-color: #1a3a75;\n\tpadding: 0px 0px 0px 0;\n\tbox-sizing: initial;\n\tmargin-bottom: 0px;\n\tfont-family: OpenSansHebrew-Regular;\n}\n.alternating-thumbnails-e .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-e .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-e .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-e .logoDiv a span {\n    display: inline;\n    color: #fff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-e .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-e .trc_rbox_outer .videoCube {\n\tmargin-bottom: 10px;\n        padding-top: 10px;\n}\n.alternating-thumbnails-e .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .alternating-thumbnails-e .video-label-box {\n    height: 76.0px;\n}\n.alternating-thumbnails-e .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n    margin-left: 0;\n    padding: 0px 0px 0px 10px;\n}\n.alternating-thumbnails-e .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.alternating-thumbnails-e .video-label-box .branding {\n    display: block;\n    margin-top: 10px;\n}\n.alternating-thumbnails-e .syndicatedItem .branding {\n    line-height: 22.0px;\n    margin-top: 10px;\n}\n.alternating-thumbnails-e .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-e .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.alternating-thumbnails-e .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-e .videoCube .video-label-box {\n\tmargin-top: 0px;\n}\n.alternating-thumbnails-e .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n\tpadding-left: 5px;\n    padding-top: 5px;\n}\n.alternating-thumbnails-e .thumbnail_start .thumbBlock_holder {\n    float: right;\n    margin-right: 10px;\n    margin-left: 18px;\n    width: 140px !important;\n    height: 92px;\n}\n.alternating-thumbnails-e .trc_rbox_header .trc_rbox_header_span {\n\tpadding-right: 10px;\n}\n.alternating-thumbnails-e .videoCube.videoCube_1_child.trc-first-recommendation {\n    border: none;\n}\n.alternating-thumbnails-e .trc-widget-footer .link-attribution span {\n    color: #000;\n}\n.trc_elastic .alternating-thumbnails-e .trc_rbox_header .logoDiv.link-disclosure.attribution-disclosure-link-hybrid {\n    margin-top: 0;\n    margin-left: 0;\n}\n.trc_elastic .alternating-thumbnails-e .trc_rbox_header .trc_rbox_header_span {\n    font-family: OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif !important;\n}.alternating-thumbnails-f img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-f [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-f .trc_rbox_div {\n\tmargin-bottom: 0;\n}\n.alternating-thumbnails-f .video-description {\n\tpadding-top: 5px;\n}\n.alternating-thumbnails-f .trc_rbox_header {\n        line-height: 35px;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\theight: auto;\n\tbackground-color: #1a3a75;\n\tpadding: 0px 0px 0px 0;\n\tbox-sizing: initial;\n\tmargin-bottom: 0px;\n\tfont-family: OpenSansHebrew-Regular;\n}\n.alternating-thumbnails-f .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-f .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-f .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-f .logoDiv a span {\n    display: inline;\n    color: #fff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-f .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-f .trc_rbox_outer .videoCube {\n\tmargin-bottom: 10px;\n        padding-top: 10px;\n}\n.alternating-thumbnails-f .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .alternating-thumbnails-f .video-label-box {\n    height: 76.0px;\n}\n.alternating-thumbnails-f .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n    margin-left: 0;\n    padding: 0px 5px 0px 10px;\n}\n.alternating-thumbnails-f .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.alternating-thumbnails-f .video-label-box .branding {\n    display: block;\n    margin-top: 10px;\n}\n.alternating-thumbnails-f .syndicatedItem .branding {\n    line-height: 22.0px;\n    margin-top: 10px;\n}\n.alternating-thumbnails-f .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-f .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.alternating-thumbnails-f .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-f .videoCube .video-label-box {\n\tmargin-top: 0px;\n}\n.alternating-thumbnails-f .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n\tpadding-left: 5px;\n    padding-top: 5px;\n}\n.alternating-thumbnails-f .thumbnail_start .thumbBlock_holder {\n    float: right;\n    margin-right: 10px;\n    margin-left: 13px;\n    width: 140px !important;\n    height: 92px;\n}\n.alternating-thumbnails-f .trc_rbox_header .trc_rbox_header_span {\n\tpadding-right: 10px;\n}\n.alternating-thumbnails-f .videoCube.videoCube_1_child.trc-first-recommendation {\n    border: none;\n}\n.alternating-thumbnails-f .trc-widget-footer .link-attribut,\n.alternating-thumbnails-f .trc-widget-footer .link-adc a .trc_adc_s_logo {\n    display: none;\n}\n.trc_elastic .alternating-thumbnails-f .trc_rbox_outer .videoCube:last-child {\n    border-bottom: 1px solid #eee;\n    margin-bottom: 0px;\n    padding-bottom: 10px;\n}\n.trc_elastic .alternating-thumbnails-f .trc_rbox_header .logoDiv.link-disclosure.attribution-disclosure-link-hybrid {\n    margin-top: 0;\n    margin-left: 0;\n}\n.trc_elastic .alternating-thumbnails-f .trc_rbox_header .trc_rbox_header_span {\n    font-family: OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif !important;\n}.alternating-thumbnails-feed-c img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-feed-c [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-feed-c .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: none;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #ffffff;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n}\n.alternating-thumbnails-feed-c .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-feed-c .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-feed-c .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-feed-c .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-feed-c .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-feed-c .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .alternating-thumbnails-feed-c .video-label-box {\n    height: 76.0px;\n}\n.alternating-thumbnails-feed-c .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.alternating-thumbnails-feed-c .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.alternating-thumbnails-feed-c .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.alternating-thumbnails-feed-c .video-label-box .branding {\n    display: block;\n}\n.alternating-thumbnails-feed-c .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.alternating-thumbnails-feed-c .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-feed-c .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.alternating-thumbnails-feed-c .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-feed-c .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.alternating-thumbnails-g img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-g [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-g .trc_rbox_header {\n        line-height: 33px;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #1A3A85;\n\tpadding: 0px 0px 0px 0px;\n\tbox-sizing: border-box;\n\tmargin-bottom: 10px;\n\tfont-family: OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif !important;\n}\n.alternating-thumbnails-g .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;i\n}\n.alternating-thumbnails-g .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-g .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-g .logoDiv a span {\n    display: inline;\n    color: #fff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-g .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-g .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .alternating-thumbnails-g .video-label-box {\n    height: 68.0px;\n}\n.alternating-thumbnails-g .videoCube .video-label-box {\n    margin-top: 4px;\n}\n.alternating-thumbnails-g .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.alternating-thumbnails-g .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.alternating-thumbnails-g .video-label-box .branding {\n    display: block;\n}\n.alternating-thumbnails-g .syndicatedItem .branding {\n    line-height: 19.0px;\n    padding-top: 4px;\n}\n.alternating-thumbnails-g .trc_header_left_column {\n\tdisplay: inline-block;\n\twidth: 48%;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-g .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.alternating-thumbnails-g .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-g .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n    \tpadding-top: 5px;\n}\n.trc_elastic .alternating-thumbnails-g .trc_rbox_outer .trc_rbox_div {\n    padding: 0 10px 0 10px;\n}\n.alternating-thumbnails-g .trc-widget-footer .link-attribution a span {\n\tcolor: #000;\n\tpadding-left: 10px;\n}\n.alternating-thumbnails-g  .link-disclosure{\n\tpadding-left: 10px;\n}\n.trc_elastic .alternating-thumbnails-g .trc_rbox_header .logoDiv.link-disclosure.attribution-disclosure-link-hybrid {\n    margin-top: 0;\n    margin-left: 0;\n}\n.trc_elastic .alternating-thumbnails-g .trc_rbox_header .trc_rbox_header_span {\n    font-family: OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif !important;\n\tpadding-right: 10px;\n}.alternating-thumbnails-h img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-h [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-h .trc_rbox_header {\n    line-height: 1.3em;\n    position: relative;\n    display: block;\n    width: auto;\n\tmargin: 7px 0px 2px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tpadding: 0px 4px 0px 4px;\n\tbox-sizing: border-box;\n\tfont-family: OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif !important;\n}\n.trc_elastic .alternating-thumbnails-h .trc_rbox_header .trc_rbox_header_span {\n    font-family: OpenSansHebrew-Regular, Helvetica, Verdana, sans-serif !important;\n}\n.alternating-thumbnails-h .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-h .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-h .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-h .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 10.0px;\n}\n.alternating-thumbnails-h .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-h .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .alternating-thumbnails-h .video-label-box {\n    height: 55px;\n}\n.alternating-thumbnails-h .videoCube .video-label-box {\n    margin-top: 7px;\n}\n.alternating-thumbnails-h .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.alternating-thumbnails-h .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.alternating-thumbnails-h .video-label-box .branding {\n    display: block;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-box-orient: vertical;\n}\n.alternating-thumbnails-h .syndicatedItem .branding {\n    line-height: 16.0px;\n    margin-top: 3px;\n}\n.alternating-thumbnails-h .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-h .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.alternating-thumbnails-h .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-h .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.trc_elastic .alternating-thumbnails-h .trc_rbox_outer .trc_rbox_div{\n\tpadding: 0px;\n\tpadding-right: 10px;\n    margin: 0;\n}\n.trc_elastic .alternating-thumbnails-h .trc_rbox_outer .trc_rbox_div .videoCube{\n\tmargin: 4px;\n}\n.alternating-thumbnails-h .trc_rbox_div > div {\n    width: 500% !important;\n}\n.trc_related_container .alternating-thumbnails-h .logoDiv.link-attribution {\n\tfloat: none;\n}\n.alternating-thumbnails-h .logoDiv.link-disclosure.attribution-disclosure-link-hybrid {\n    margin-top: 0px;\n\tmargin-left: 6px;\n}\n.trc_related_container .alternating-thumbnails-h .logoDiv.link-attribution {\n    margin-left: 2px;\n}\n.alternating-thumbnails-h .trc_rbox_div {\n    -webkit-overflow-scrolling: touch;\n    -webkit-animation-duration: 4000ms;\n    overflow-scrolling: touch;\n     overflow: scroll;\n}\n.trc_rbox_container .trc_rbox.alternating-thumbnails-h {\n\tbackground: #f6f6f6;\n}\n.alternating-thumbnails-h .videoCube {\n\twidth: 9.4975% !important;\n}\n.alternating-thumbnails-i img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-i [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-i .trc_rbox_div {\n\tmargin-bottom: 0;\n}\n.alternating-thumbnails-i .video-description {\n\tpadding-top: 5px;\n}\n.alternating-thumbnails-i .trc_rbox_header {\n        line-height: 33px;\n        position: relative;\n        display: none;\n        width: 100%;\n\theight: auto;\n\tbackground-color: #1a3a75;\n\tpadding: 0px 0px 0px 0;\n\tbox-sizing: initial;\n\tmargin-bottom: 0px;\n\tfont-family: OpenSansHebrew-Regular;\n}\n.alternating-thumbnails-i .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-i .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-i .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-i .logoDiv a span {\n    display: inline;\n    color: #fff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-i .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-i .trc_rbox_outer .videoCube {\n\tmargin-bottom: 10px;\n        padding-top: 10px;\n}\n.alternating-thumbnails-i .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .alternating-thumbnails-i .video-label-box {\n    height: 76.0px;\n}\n.alternating-thumbnails-i .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n    margin-left: 0;\n    padding: 0px 0px 0px 10px;\n}\n.alternating-thumbnails-i .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.alternating-thumbnails-i .video-label-box .branding {\n    display: block;\n    margin-top: 10px;\n}\n.alternating-thumbnails-i .syndicatedItem .branding {\n    line-height: 22.0px;\n    margin-top: 10px;\n}\n.alternating-thumbnails-i .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-i .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.alternating-thumbnails-i .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-i .videoCube .video-label-box {\n\tmargin-top: 0px;\n}\n.alternating-thumbnails-i .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n\tpadding-left: 5px;\n    padding-top: 5px;\n}\n.alternating-thumbnails-i .thumbnail_start .thumbBlock_holder {\n    float: right;\n    margin-right: 10px;\n    margin-left: 18px;\n    width: 140px !important;\n    height: 92px;\n}\n.alternating-thumbnails-i .trc_rbox_header .trc_rbox_header_span {\n\tpadding-right: 10px;\n}\n.alternating-thumbnails-i .videoCube.videoCube_1_child.trc-first-recommendation {\n    border: none;\n}\n.trc_elastic .alternating-thumbnails-i .trc_rbox_outer .videoCube:last-child {\n    border-bottom: 1px solid #eee;\n    margin-bottom: 0px;\n    padding-bottom: 10px;\n}.alternating-thumbnails-j img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-j [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-j .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #2A2991;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n}\n.alternating-thumbnails-j .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-j .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-j .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-j .logoDiv a span {\n    display: inline;\n    color: #fffafa;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-j .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-j .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .alternating-thumbnails-j .video-label-box {\n    height: 76.0px;\n}\n.alternating-thumbnails-j .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.alternating-thumbnails-j .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.alternating-thumbnails-j .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.alternating-thumbnails-j .video-label-box .branding {\n    display: block;\n}\n.alternating-thumbnails-j .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.alternating-thumbnails-j .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-j .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.alternating-thumbnails-j .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-j .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.alternating-thumbnails-k img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.alternating-thumbnails-k [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.alternating-thumbnails-k .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n}\n\n.alternating-thumbnails-k .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.alternating-thumbnails-k .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.alternating-thumbnails-k .logoDiv a {\n    font-size: 100%;\n}\n\n.alternating-thumbnails-k .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.alternating-thumbnails-k .videoCube a {\n    padding: 0;\n}\n\n.alternating-thumbnails-k .thumbBlock {\n    margin: 0;\n}\n\n.trc_elastic .alternating-thumbnails-k .video-label-box {\n    height: 76px;\n\tmargin: 5px 0px 0px 0px;\n}\n\n.alternating-thumbnails-k \n}\n\n.alternating-thumbnails-k .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.alternating-thumbnails-k .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n\n.alternating-thumbnails-k .video-label-box .branding {\n    display: block;\n}\n\n.alternating-thumbnails-k .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.alternating-thumbnails-k .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.alternating-thumbnails-k .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.alternating-thumbnails-k .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.alternating-thumbnails-k .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n\n.alternating-thumbnails-k .syndicatedItem .video-label-box {\n\tmargin: 5px 0px 0px 0px;\n\theight: 76px;\n}\n.alternating-thumbnails-n img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.alternating-thumbnails-n [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.alternating-thumbnails-n .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #7eade6;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: border-box;\n}\n\n.alternating-thumbnails-n .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.alternating-thumbnails-n .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.alternating-thumbnails-n .logoDiv a {\n    font-size: 100%;\n}\n\n.alternating-thumbnails-n .logoDiv a span {\n    display: inline;\n    color: #ffffff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.alternating-thumbnails-n .videoCube a {\n    padding: 0;\n}\n\n.alternating-thumbnails-n .thumbBlock {\n    margin: 0;\n}\n\n.trc_elastic .alternating-thumbnails-n .video-label-box {\n    height: 88px;\n\tmargin: 5px 0px 0px 0px;\n}\n\n.alternating-thumbnails-n \n}\n\n.alternating-thumbnails-n .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.alternating-thumbnails-n .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n\n.alternating-thumbnails-n .video-label-box .branding {\n    display: block;\n}\n\n.alternating-thumbnails-n .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.alternating-thumbnails-n .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.alternating-thumbnails-n .trc_header_right_part {\n\tmargin-top: 3px;\n}\n\n.alternating-thumbnails-n .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.alternating-thumbnails-n .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n\n.alternating-thumbnails-n .syndicatedItem .video-label-box {\n\tmargin: 5px 0px 0px 0px;\n\theight: 88px;\n}\n.alternating-thumbnails-o img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.alternating-thumbnails-o [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.alternating-thumbnails-o .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n}\n\n.alternating-thumbnails-o .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.alternating-thumbnails-o .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.alternating-thumbnails-o .logoDiv a {\n    font-size: 100%;\n}\n\n.alternating-thumbnails-o .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.alternating-thumbnails-o .videoCube a {\n    padding: 0;\n}\n\n.alternating-thumbnails-o .thumbBlock {\n    margin: 0;\n}\n\n.trc_elastic .alternating-thumbnails-o .video-label-box {\n    height: 76px;\n\tmargin: 5px 0px 0px 0px;\n}\n\n.alternating-thumbnails-o \n}\n\n.alternating-thumbnails-o .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.alternating-thumbnails-o .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n\n.alternating-thumbnails-o .video-label-box .branding {\n    display: block;\n}\n\n.alternating-thumbnails-o .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.alternating-thumbnails-o .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.alternating-thumbnails-o .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.alternating-thumbnails-o .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.alternating-thumbnails-o .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n\n.alternating-thumbnails-o .syndicatedItem .video-label-box {\n\tmargin: 5px 0px 0px 0px;\n\theight: 76px;\n}\n.alternating-thumbnails-p img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-p [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-p .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 6px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n\tpadding: 0;\n}\n.alternating-thumbnails-p .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-p .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-p .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-p .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-p .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-p .thumbBlock {\n    margin: 0;\n}\n.alternating-thumbnails-p .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 57px;\n}\n.alternating-thumbnails-p .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 57px;\n}\n.alternating-thumbnails-p .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.alternating-thumbnails-p .videoCube:hover .video-label-box .video-title,\n.alternating-thumbnails-p .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.alternating-thumbnails-p .video-label-box .branding {\n    display: block;\n}\n.alternating-thumbnails-p .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.alternating-thumbnails-p .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-p .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.alternating-thumbnails-p .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-p .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.alternating-thumbnails-p {\n\twidth: 489px !important;\n\theight: 210px;\n\tmargin: 37px 60px 15px 60px;\n}\n.alternating-thumbnails-p .videoCube {\n\tmargin-right: 30px !important;\n\twidth: 143px !important;\n}\n.alternating-thumbnails-p .trc_rbox_outer {\n\tmargin-right: -30px !important;\n}\n.alternating-thumbnails-p .thumbBlock_holder {\n\twidth: 143px !important;\n\theight: 119px;\n}\n.alternating-thumbnails-q img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-q [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-q .trc_rbox_header {\n    line-height: 33px;\n    position: relative;\n    display: block;\n    width: auto;\n    margin: 0px 0px 13px 0px;\n    background: transparent;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n    background: #A80D13;\n}\n.alternating-thumbnails-q .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-q .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-q .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-q .logoDiv a span {\n    display: inline;\n    color: #fff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-q .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-q .thumbBlock {\n    margin: 0;\n}\n.alternating-thumbnails-q .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 76px;\n}\n.alternating-thumbnails-q .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 76px;\n}\n.alternating-thumbnails-q .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.alternating-thumbnails-q .videoCube:hover .video-label-box .video-title,\n.alternating-thumbnails-q .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.alternating-thumbnails-q .video-label-box .branding {\n    display: block;\n}\n.alternating-thumbnails-q .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.alternating-thumbnails-q .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-q .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.alternating-thumbnails-q .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-q .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.trc_elastic .alternating-thumbnails-q .trc_rbox_outer {\n    margin-right: -25px;\n}\n.trc_elastic .alternating-thumbnails-q .trc_rbox_outer .videoCube {\n\t    margin-right: 25px;\n\t    width: calc((100% - 150px) / 6);\n}.alternating-thumbnails-r img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-r [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-r .trc_rbox_header {\n    line-height: 1.2em;\n    position: relative;\n    display: block;\n    width: auto;\n    margin: 0px 0px 0px 0px;\n    background: transparent;\n    height: auto;\n    background-color: #006599;\n    box-sizing: border-box;\n    margin-bottom: 7px;\n}\n.alternating-thumbnails-r .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.alternating-thumbnails-r .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.alternating-thumbnails-r .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-r .logoDiv a span {\n    display: inline;\n    color: #FFFFFF;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-r .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-r .thumbBlock {\n    margin: 0;\n}\n.alternating-thumbnails-r .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n.alternating-thumbnails-r .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n.alternating-thumbnails-r .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.alternating-thumbnails-r .videoCube:hover .video-label-box .video-title,\n.alternating-thumbnails-r .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.alternating-thumbnails-r .video-label-box .branding {\n    display: block;\n}\n.alternating-thumbnails-r .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.alternating-thumbnails-r .trc_header_left_column {\n    width: 48%;\n    display: inline-block;\n    background: transparent;\n    height: auto;\n}\n.alternating-thumbnails-r .trc_header_right_part {\n    margin-top: 3px;\n}\n.alternating-thumbnails-r .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-r .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n.alternating-thumbnails-y img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-y [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-y .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n}\n.alternating-thumbnails-y .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-y .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-y .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-y .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-y .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-y .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .alternating-thumbnails-y .video-label-box {\n    height: 76.0px;\n}\n.alternating-thumbnails-y .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.alternating-thumbnails-y .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.alternating-thumbnails-y .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.alternating-thumbnails-y .video-label-box .branding {\n    display: block;\n}\n.alternating-thumbnails-y .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.alternating-thumbnails-y .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-y .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.alternating-thumbnails-y .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-y .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.alternating-thumbnails-z img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.alternating-thumbnails-z [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.alternating-thumbnails-z .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n}\n.alternating-thumbnails-z .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-z .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.alternating-thumbnails-z .logoDiv a {\n    font-size: 100%;\n}\n.alternating-thumbnails-z .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.alternating-thumbnails-z .videoCube a {\n    padding: 0;\n}\n.alternating-thumbnails-z .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .alternating-thumbnails-z .video-label-box {\n    height: 72.0px;\n}\n.alternating-thumbnails-z .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.alternating-thumbnails-z .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.alternating-thumbnails-z .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.alternating-thumbnails-z .video-label-box .branding {\n    display: block;\n}\n.alternating-thumbnails-z .syndicatedItem .branding {\n    line-height: 18.0px;\n}\n.alternating-thumbnails-z .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.alternating-thumbnails-z .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.alternating-thumbnails-z .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.alternating-thumbnails-z .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.organic-thumbnails-feed img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.organic-thumbnails-feed [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.organic-thumbnails-feed .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: none;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.organic-thumbnails-feed .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.organic-thumbnails-feed .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.organic-thumbnails-feed .logoDiv a {\n    font-size: 100%;\n}\n\n.organic-thumbnails-feed .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11px;\n}\n\n.organic-thumbnails-feed .videoCube a {\n    padding: 0;\n}\n\n.organic-thumbnails-feed .thumbBlock {\n    margin: 0;\n}\n\n.organic-thumbnails-feed .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 44px;\n}\n\n.organic-thumbnails-feed .syndicatedItem .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 44px;\n}\n\n.organic-thumbnails-feed .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.organic-thumbnails-feed .videoCube:hover .video-label-box .video-title,\n.organic-thumbnails-feed .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.organic-thumbnails-feed .video-label-box .branding {\n    display: block;\n}\n\n.organic-thumbnails-feed .syndicatedItem .branding {\n    line-height: 27.0px;\n}\n.organic-thumbnails-feed .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n\n.organic-thumbnails-feed .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.organic-thumbnails-feed .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.organic-thumbnails-feed .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.organic-thumbnails-feed-a img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.organic-thumbnails-feed-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.organic-thumbnails-feed-a .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.organic-thumbnails-feed-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.organic-thumbnails-feed-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.organic-thumbnails-feed-a .logoDiv a {\n    font-size: 100%;\n}\n\n.organic-thumbnails-feed-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11px;\n}\n\n.organic-thumbnails-feed-a .videoCube a {\n    padding: 0;\n}\n\n.organic-thumbnails-feed-a .thumbBlock {\n    margin: 0;\n}\n\n.organic-thumbnails-feed-a .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 66px;\n}\n\n.organic-thumbnails-feed-a .syndicatedItem .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 66px;\n}\n\n.organic-thumbnails-feed-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.organic-thumbnails-feed-a .videoCube:hover .video-label-box .video-title,\n.organic-thumbnails-feed-a .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.organic-thumbnails-feed-a .video-label-box .branding {\n    display: block;\n}\n\n.organic-thumbnails-feed-a .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.organic-thumbnails-feed-a .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.organic-thumbnails-feed-a .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.organic-thumbnails-feed-a .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.organic-thumbnails-feed-a .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.organic-thumbnails-feed-c img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.organic-thumbnails-feed-c [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbnails-feed-c .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 13px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #000066;\n\tbox-sizing: initial;\n}\n.organic-thumbnails-feed-c .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbnails-feed-c .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.organic-thumbnails-feed-c .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbnails-feed-c .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11px;\n}\n.organic-thumbnails-feed-c .videoCube a {\n    padding: 0;\n}\n.organic-thumbnails-feed-c .thumbBlock {\n    margin: 0;\n}\n.organic-thumbnails-feed-c .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 66px;\n}\n.organic-thumbnails-feed-c .syndicatedItem .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 66px;\n}\n.organic-thumbnails-feed-c .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.organic-thumbnails-feed-c .videoCube:hover .video-label-box .video-title,\n.organic-thumbnails-feed-c .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.organic-thumbnails-feed-c .video-label-box .branding {\n    display: block;\n}\n.organic-thumbnails-feed-c .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.organic-thumbnails-feed-c .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbnails-feed-c .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.organic-thumbnails-feed-c .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.organic-thumbnails-feed-c .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.organic-thumbnails-feed-c .trc_rbox_header_span {\n    color: #fff;\n    font-size: 14px;\n    line-height: 24px;\n}\n.organic-thumbnails-feed-c .video-category {\n    font-size: 12px;\n    color: #999;\n}\n.organic-thumbnails-feed-c .video-category dt {\n    font-weight: normal;\n}\n.organic-thumbnails-feed-d img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.organic-thumbnails-feed-d [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbnails-feed-d .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: none;\n        width: auto;\n\tmargin: 0px 0px 13px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #000066;\n\tbox-sizing: initial;\n}\n.organic-thumbnails-feed-d .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbnails-feed-d .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.organic-thumbnails-feed-d .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbnails-feed-d .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11px;\n}\n.organic-thumbnails-feed-d .videoCube a {\n    padding: 0;\n}\n.organic-thumbnails-feed-d .thumbBlock {\n    margin: 0;\n}\n.organic-thumbnails-feed-d .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 66px;\n}\n.organic-thumbnails-feed-d .syndicatedItem .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 66px;\n}\n.organic-thumbnails-feed-d .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.organic-thumbnails-feed-d .videoCube:hover .video-label-box .video-title,\n.organic-thumbnails-feed-d .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.organic-thumbnails-feed-d .video-label-box .branding {\n    display: block;\n}\n.organic-thumbnails-feed-d .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.organic-thumbnails-feed-d .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbnails-feed-d .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.organic-thumbnails-feed-d .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.organic-thumbnails-feed-d .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.organic-thumbnails-feed-d .trc_rbox_header_span {\n    color: #fff;\n    font-size: 14px;\n    line-height: 24px;\n}\n.organic-thumbnails-feed-d .video-category {\n    font-size: 12px;\n    color: #999;\n}\n.organic-thumbnails-feed-d .video-category dt {\n    font-weight: normal;\n}\n/* override bootstrap default span definitions */\n.text-links-d [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.text-links-d .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: none;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n}\n.text-links-d .trc_rbox_header_span .trc_header_right_column {\n        position: absolute;\n        width: 48%;\n        left: 52%;\n        top: 0;\n\tbackground: transparent;\n\theight: auto;\n}\n.text-links-d .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n    position: relative;\n    z-index: 1;\n}\n.text-links-d .logoDiv a {\n    font-size: 100%;\n}\n.text-links-d .logoDiv a span {\n    color: #000000;\n    font-weight: normal;\n    font-size: 11px;\n}\n.text-links-d .syndicatedItem .video-title .branding {\n        line-height: 16px;\n}\n.text-links-d .trc_rbox_div .videoCube.horizontal {\n        clear: left;\n}\n.text-links-d .trc_rbox_div .videoCube.trc_tl_right_col {\n    float: none;\n    clear: right;\n    margin-left: auto;\n}\n.text-links-d .videoCube:hover span.branding,\n.text-links-d .videoCube_hover span.branding {\n        text-decoration: none;\n}\n.text-links-d .trc_rbox_div .videoCube.thumbnail_none a {\n    display: list-item;\n    list-style: none outside none;\n    vertical-align: top;\n    overflow: visible;\n    margin-left: 0;\n    padding: 0;\n}\n.text-links-d .videoCube .video-label-box {\n    display: inline-block!important;\n    vertical-align: top;\n    width: 100%;\n    *margin-top: -3px;\n\tmin-height: 19.0px;\n}\n.text-links-d .trc_rbox_div .videoCube:hover .video-title {\n\ttext-decoration: none;\n\tcolor: #FF0000;\n}\n.text-links-d .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.text-links-d .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.text-links-d .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.text-links-d .syndicatedItem .branding {\n\tline-height: 16.0px;\n}\n.text-links-d .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n#taboola-ynet-section-front .taboola-ynet-section-front-widgetsContainer #taboola-ynet-section-front-right {\n\tdisplay: inline-block;\n\tpadding: 0;\n    margin: 0;\n    height: auto;\n    float: left;\n    width: 316px;\n}\n.text-links-d .trc_rbox_div .videoCube .video-title {\n\tmargin-bottom: 0px;\n}\n#taboola-ynet-section-front-right .trc_rbox.text-links-d .trc_rbox_div .videoCube a {\n\tmargin-right: 0px;\n}\n\n.thumbnails-a img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-a .trc_rbox_div {\n\tmargin-bottom: 0;\n}\n.thumbnails-a .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #2A2991;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n}\n.thumbnails-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbnails-a .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-a .videoCube a {\n    padding: 0;\n}\n.thumbnails-a .trc_rbox_outer .videoCube {\n\tmargin-bottom: 10px;\n}\n.thumbnails-a .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .thumbnails-a .video-label-box {\n    height: 76.0px;\n}\n.thumbnails-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n}\n.thumbnails-a .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.thumbnails-a .video-label-box .branding {\n    display: block;\n}\n.thumbnails-a .syndicatedItem .branding {\n    line-height: 18.0px;\n}\n.thumbnails-a .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-a .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.thumbnails-a .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-a .videoCube .video-label-box {\n\tmargin-top: 0px;\n}\n.thumbnails-a .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.trc_rbox.thumbnails-a .videoCube.thumbnail_start .thumbBlock_holder {\n    width: 100%;\n    float: none;\n}\n.thumbnails-aa img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-aa [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-aa .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbnails-aa .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-aa .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbnails-aa .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-aa .logoDiv a span {\n    display: inline;\n    color: #fff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-aa .videoCube a {\n    padding: 0;\n}\n.thumbnails-aa .thumbBlock {\n    margin: 0;\n}\n.thumbnails-aa .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n.thumbnails-aa .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n.thumbnails-aa .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbnails-aa .videoCube:hover .video-label-box .video-title,\n.thumbnails-aa .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-aa .video-label-box .branding {\n    display: block;\n}\n.thumbnails-aa .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-aa .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-aa .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbnails-aa .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-aa .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-aa .trc_rbox_header {\n    background-color: #ED145B !important;\n}\n.thumbnails-aa {\n\tbackground-color: rgba(0,0,0,0.5);\n}\n.thumbnails-a_backup img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-a_backup [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-a_backup .trc_rbox_div {\n\tmargin-bottom: 0;\n}\n.thumbnails-a_backup .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #2A2991;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n}\n.thumbnails-a_backup .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-a_backup .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbnails-a_backup .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-a_backup .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-a_backup .videoCube a {\n    padding: 0;\n}\n.thumbnails-a_backup .trc_rbox_outer .videoCube {\n\tmargin-bottom: 10px;\n}\n.thumbnails-a_backup .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .thumbnails-a_backup .video-label-box {\n    height: 76.0px;\n}\n.thumbnails-a_backup .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n}\n.thumbnails-a_backup .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.thumbnails-a_backup .video-label-box .branding {\n    display: block;\n}\n.thumbnails-a_backup .syndicatedItem .branding {\n    line-height: 18.0px;\n}\n.thumbnails-a_backup .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-a_backup .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.thumbnails-a_backup .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-a_backup .videoCube .video-label-box {\n\tmargin-top: 0px;\n}\n.thumbnails-a_backup .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-b img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-b [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-b .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #2A2991;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n}\n.thumbnails-b .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-b .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbnails-b .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-b .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-b .videoCube a {\n    padding: 0;\n}\n.thumbnails-b .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .thumbnails-b .video-label-box {\n    height: 72.0px;\n}\n.thumbnails-b .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.thumbnails-b .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbnails-b .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.thumbnails-b .video-label-box .branding {\n    display: block;\n}\n.thumbnails-b .syndicatedItem .branding {\n    line-height: 18.0px;\n}\n.thumbnails-b .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-b .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.thumbnails-b .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-b .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-c img {\n    max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-c [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-c .trc_rbox_header {\n    line-height: 23px;\n    position: relative;\n    display: inline-block;\n    width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #000066;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n}\n.thumbnails-c .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-c .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.thumbnails-c .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-c .logoDiv a span {\n    display: inline;\n    color: #ffffff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-c .videoCube a {\n    padding: 0;\n}\n.thumbnails-c .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .thumbnails-c .video-label-box {\n    height: 57.0px;\n}\n.thumbnails-c .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.thumbnails-c .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbnails-c .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.thumbnails-c .video-label-box .branding {\n    display: block;\n}\n.thumbnails-c .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.thumbnails-c .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-c .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.thumbnails-c .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-c .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.trc_rbox.thumbnails-c {\n\tborder-style: solid;\n    border-width: 0px 1px 1px 1px;\n    border-color: #e6e6e6;\n}\n.thumbnails-c  .trc_rbox_outer .trc_rbox_div {\n\tbackground-color: #f5f5f5;\n    margin: 0;\n    padding: 25px 10px 0px 10px;\n}\n.trc_elastic .thumbnails-c .thumbBlock_holder {\n    position: relative;\n    width: 230px;\n}.thumbnails-d img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-d [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-d .trc_rbox_header {\n    line-height: 1.2em;\n    position: relative;\n    display: none;\n    width: 100%;\n\tbackground: transparent;\n}\n.thumbnails-d .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-d .videoCube a {\n    padding: 0;\n}\n.thumbnails-d .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .thumbnails-d .video-label-box {\n    height: 32.0px;\n}\n.thumbnails-d .videoCube .video-label-box {\n    margin-top: 5px;\n    width: 150px;\n}\n.thumbnails-d .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 10px 0 0 0;\n    -webkit-line-clamp: 2 !important;\n}\n.thumbnails-d .videoCube:hover .video-label-box .video-title {\n    text-decoration: none;\n    color: #FF0000;\n}\n.thumbnails-d .video-label-box .branding {\n    display: block;\n}\n.thumbnails-d .syndicatedItem .branding {\n    line-height: 16.0px;\n}\n.thumbnails-d .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-d .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.thumbnails-d .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-d .trc_rbox_outer .trc_rbox_div .thumbBlock_holder {\n\twidth: 150px;\n    height: 90px;\n}\n#taboola-ynet-section-front .taboola-ynet-section-front-widgetsContainer .taboola-ynet-section-front-left {\n\twidth: 165px;\n    display: inline-block;\n    padding: 0;\n    margin: 0;\n    float: none;\n}\n#taboola-ynet-section-front .taboola-ynet-section-front-header {\n\tposition: relative;\n    display: inline-block;\n    font-size: 16.0px;\n    line-height: 21px;\n    font-weight: bold;\n    font-family: Arial, Helvetica, sans-serif;\n    color: #ffffff;\n\tbackground-color: #224774;\n    padding: 0px 10px;\n    margin-bottom: 15px;\n    height: 24px;\n    width: 490px;\n    text-decoration: none;\n    box-sizing: border-box;\n}\n.thumbnails-d .trc_rbox_header .logoDiv,\n#taboola-ynet-section-front .taboola-ynet-section-front-header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n    display: inline;\n    float: right;\n\tfont-family: Arial,Helvetica,sans-serif;\n    white-space: nowrap;\n}\n.thumbnails-d .logoDiv a,\n#taboola-ynet-section-front .taboola-ynet-section-front-header .logoDiv a {\n    font-size: 100%;\n\ttext-decoration: none!important;\n    color: #000;\n    margin-right: 3px;\n    vertical-align: text-bottom;\n}\n.thumbnails-d .logoDiv a span,\n#taboola-ynet-section-front .taboola-ynet-section-front-header .logoDiv a span {\n    display: inline;\n    color: #ffffff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n#taboola-ynet-section-front .taboola-ynet-section-front-header .link-adc a .trc_adc_wrapper {\n\tvertical-align: middle;\n    height: 15px;\n    width: 15px;\n    display: inline-block;\n    position: relative;\n    background: url(//cdn.taboola.com/libtrc/static/thumbnails/3aadbb71016ecd7a194bbe2791777e9a.png) no-repeat!important;\n    margin-top: 1px;\n}\n.thumbnails-d .trc_rbox_header .trc_header_ext,\n#taboola-ynet-section-front .taboola-ynet-section-front-header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n#taboola-ynet-section-front .taboola-ynet-section-front-header .attribution-disclosure-link-sponsored {\n    display: inline-block;\n}\n#taboola-ynet-section-front .taboola-ynet-section-front-header .attribution-disclosure-link-hybrid {\n    display: none;\n}\n.trc_related_container .thumbnails-d .trc_rbox_outer .trc_rbox_div .videoCube {\n    margin-bottom: 15px;\n}\n.trc_elastic.taboola-ynet-section-front-left {\n\tmargin-left: 0px;\n    margin-bottom: 0px;\n}\n#taboola-ynet-section-front .trc_rbox_header .trc_rbox_header_span {\n\tfloat: right;\n}\n.thumbnails-e img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-e [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-e .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #2A2991;\n\tpadding: 3px 4px 3px 4px;\n\tbox-sizing: border-box;\n\tmargin: 0px 0px 0px 0px;\n}\n.thumbnails-e .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-e .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbnails-e .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-e .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 10.0px;\n}\n.thumbnails-e .videoCube a {\n    padding: 0;\n}\n.thumbnails-e .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .thumbnails-e .video-label-box {\n    height: 72.0px;\n}\n.thumbnails-e .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.thumbnails-e .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbnails-e .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.thumbnails-e .video-label-box .branding {\n    display: block;\n}\n.thumbnails-e .syndicatedItem .branding {\n    line-height: 18.0px;\n}\n.thumbnails-e .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-e .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.thumbnails-e .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-e .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-f img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-f [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-f .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n}\n.thumbnails-f .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-f .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbnails-f .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-f .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-f .videoCube a {\n    padding: 0;\n}\n.thumbnails-f .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .thumbnails-f .video-label-box {\n    height: 108.0px;\n}\n.thumbnails-f .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.thumbnails-f .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbnails-f .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.thumbnails-f .video-label-box .branding {\n    display: block;\n}\n.thumbnails-f .syndicatedItem .branding {\n    line-height: 27.0px;\n}\n.thumbnails-f .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-f .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbnails-f .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-f .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-feed img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-feed [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-feed .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.thumbnails-feed .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-feed .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-feed .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-feed .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-feed .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-feed .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-feed .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 76px;\n}\n\n.thumbnails-feed .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 76px;\n}\n\n.thumbnails-feed .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-feed .videoCube:hover .video-label-box .video-title,\n.thumbnails-feed .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.thumbnails-feed .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-feed .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.thumbnails-feed .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-feed .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-feed .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-feed .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-feed-a img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-feed-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-feed-a .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.thumbnails-feed-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-feed-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-feed-a .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-feed-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-feed-a .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-feed-a .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-feed-a .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 66px;\n}\n\n.thumbnails-feed-a .syndicatedItem .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 66px;\n}\n\n.thumbnails-feed-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-feed-a .videoCube:hover .video-label-box .video-title,\n.thumbnails-feed-a .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.thumbnails-feed-a .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-feed-a .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-feed-a .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-feed-a .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-feed-a .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-feed-a .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-feed-b img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-feed-b [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-feed-b .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.thumbnails-feed-b .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-feed-b .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-feed-b .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-feed-b .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-feed-b .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-feed-b .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-feed-b .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 66px;\n}\n\n.thumbnails-feed-b .syndicatedItem .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 66px;\n}\n\n.thumbnails-feed-b .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-feed-b .videoCube:hover .video-label-box .video-title,\n.thumbnails-feed-b .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.thumbnails-feed-b .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-feed-b .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-feed-b .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-feed-b .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-feed-b .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-feed-b .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n\n    .thumbnails-feed-hero img {\n    max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-feed-hero [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-feed-hero .trc_rbox_div {\n    margin-bottom: 0;\n}\n.thumbnails-feed-hero .trc_rbox_header {\n    line-height: 1.2em;\n    position: relative;\n    display: none;\n    width: auto;\n    margin: 0px 0px 0px 0px;\n    background: transparent;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n}\n.thumbnails-feed-hero .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.thumbnails-feed-hero .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.thumbnails-feed-hero .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-feed-hero .logoDiv a span {\n    display: inline;\n    color: #999;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-feed-hero .videoCube a {\n    padding: 0;\n}\n.thumbnails-feed-hero .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n/*Change for hero*/\n.thumbnails-feed-hero .trc_rbox_outer .videoCube {\n    margin-bottom: 10px;\n    width: 48%;\n}\n.thumbnails-feed-hero .videoCube.thumbnail_start:first-of-type .thumbBlock_holder{\n    width: 100%;\n    float: none;\n    padding-top: 65%;\n    height: 0;\n}\n.thumbnails-feed-hero #trc_rbox_outer .videoCube .video-label-box{\n    margin: 0px 0px 0px 0px;\n}\n.thumbnails-feed-hero .trc_rbox_header .trc_header_ext {\n    top: 10px;\n}\n.thumbnails-feed-hero .trc_rbox_header .trc_header_ext .link-adc a .trc_adc_s_logo {\n    top: 5px;\n}\n/*Change for hero*/\n.thumbnails-feed-hero .videoCube:first-of-type .video-label-box .video-title {\n    font-size: 20px;\n    line-height: 24px;\n    max-height: 48px;\n}\n.thumbnails-feed-hero .thumbBlock {\n    margin: 0;\n}\n.thumbnails-feed-hero .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n}\n.thumbnails-feed-hero .videoCube:hover .video-label-box .video-title,\n.thumbnails-feed-hero .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-feed-hero .video-label-box .branding {\n    display: block;\n}\n.thumbnails-feed-hero .syndicatedItem .branding {\n    line-height: 20.0px;\n}\n.thumbnails-feed-hero .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: auto;\n}\n.thumbnails-feed-hero .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: auto;\n}\n.thumbnails-feed-hero .trc_header_left_column {\n    width: 48%;\n    display: inline-block;\n    background: transparent;\n    height: auto;\n}\n.thumbnails-feed-hero .trc_header_right_part {\n    margin-top: 0px;\n}\n.thumbnails-feed-hero .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-feed-hero .trc_rbox_outer .videoCube.syndicatedItem .thumbBlock_holder {\n    width: 33%;\n}\n.thumbnails-feed-hero .trc_rbox_outer .videoCube.syndicatedItem {\n    margin-bottom: 20px;\n}\n.thumbnails-feed-hero .video-category dt {\n    font-weight: normal;\n}\n.thumbnails-feed-hero .video-category {\n    font-size: 12px;\n    color: #999;\n}\n.thumbnails-feed-hero-2 img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-feed-hero-2 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-feed-hero-2 .trc_rbox_div {\n    margin-bottom: 0;\n}\n.thumbnails-feed-hero-2 .trc_rbox_header {\n    line-height: 1.2em;\n    position: relative;\n    display: none;\n    width: auto;\n    margin: 0px 0px 0px 0px;\n    background: transparent;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n}\n.thumbnails-feed-hero-2 .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.thumbnails-feed-hero-2 .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.thumbnails-feed-hero-2 .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-feed-hero-2 .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-feed-hero-2 .videoCube a {\n    padding: 0;\n}\n.thumbnails-feed-hero-2 .trc_rbox_outer .videoCube {\n    margin-bottom: 10px;\n}\n.thumbnails-feed-hero-2 .thumbBlock {\n    margin: 0;\n}\n.thumbnails-feed-hero-2 .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n}\n.thumbnails-feed-hero-2 .videoCube:hover .video-label-box .video-title,\n.thumbnails-feed-hero-2 .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-feed-hero-2 .video-label-box .branding {\n    display: block;\n    line-height: 19.0px;\n}\n.thumbnails-feed-hero-2 .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.thumbnails-feed-hero-2 .video-label-box {\n    margin: 0px 0px 0px 0px;\n    height: auto;\n}\n.thumbnails-feed-hero-2 .syndicatedItem .video-label-box {\n    margin: 0px 0px 0px 0px;\n    height: auto;\n}\n.thumbnails-feed-hero-2 .trc_header_left_column {\n    background: transparent;\n    height: auto;\n}\n.thumbnails-feed-hero-2 .trc_header_right_part {\n    margin-top: 0px;\n}\n.thumbnails-feed-hero-2 .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-feed-hero-2 .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n.thumbnails-feed-hero-2 .trc_rbox_div div.videoCube.videoCube_1_child {\n    width: 56%;\n    position: relative;\n    margin-bottom: 20px;\n}\n.thumbnails-feed-hero-2 .trc_rbox_outer .trc_rbox_div .videoCube {\n    width: 40%;\n    float: left !important;\n    margin-bottom: 27px;\n}\n.thumbnails-feed-hero-2 .videoCube.videoCube_1_child .thumbBlock_holder {\n    width: 100%;\n}\n.thumbnails-feed-hero-2 .videoCube.videoCube_1_child .video-label-box {\n    position: absolute;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.7);\n    width: 100%;\n    padding: 5px 10px 5px 5px;\n}\n.thumbnails-feed-hero-2 .videoCube.videoCube_1_child .video-title, .thumbnails-feed-hero-2 .videoCube.videoCube_1_child .video-description {\n    color: #fff;\n}\n.thumbnails-feed-hero-2 .videoCube.videoCube_1_child .video-title {\n    font-size: 22px;\n    line-height: 26px;\n    max-height: 26px;\n}\n.thumbnails-feed-hero-2 .videoCube.videoCube_1_child .video-description {\n    font-size: 14px;\n    line-height: 18px;\n    max-height: 36px;\n}\n.thumbnails-feed-hero-3 img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-feed-hero-3 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-feed-hero-3 .trc_rbox_div {\n    margin-bottom: 0;\n}\n.thumbnails-feed-hero-3 .trc_rbox_header {\n    line-height: 1.2em;\n    position: relative;\n    display: none;\n    width: auto;\n    margin: 0px 0px 0px 0px;\n    background: transparent;\n    height: auto;\n    background-color: transparent;\n    box-sizing: initial;\n}\n.thumbnails-feed-hero-3 .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n    height: auto;\n}\n.thumbnails-feed-hero-3 .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: normal;\n}\n.thumbnails-feed-hero-3 .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-feed-hero-3 .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-feed-hero-3 .videoCube a {\n    padding: 0;\n}\n.thumbnails-feed-hero-3 .trc_rbox_outer .videoCube {\n    margin-bottom: 10px;\n}\n.thumbnails-feed-hero-3 .thumbBlock {\n    margin: 0;\n}\n.thumbnails-feed-hero-3 .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n}\n.thumbnails-feed-hero-3 .videoCube:hover .video-label-box .video-title,\n.thumbnails-feed-hero-3 .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-feed-hero-3 .video-label-box .branding {\n    display: block;\n    line-height: 19.0px;\n}\n.thumbnails-feed-hero-3 .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.thumbnails-feed-hero-3 .video-label-box {\n    margin: 0px 0px 0px 0px;\n    height: auto;\n}\n.thumbnails-feed-hero-3 .syndicatedItem .video-label-box {\n    margin: 0px 0px 0px 0px;\n    height: auto;\n}\n.thumbnails-feed-hero-3 .trc_header_left_column {\n    background: transparent;\n    height: auto;\n}\n.thumbnails-feed-hero-3 .trc_header_right_part {\n    margin-top: 0px;\n}\n.thumbnails-feed-hero-3 .trc_rbox_header .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-feed-hero-3 .trc_rbox_header .trc_header_ext {\n    position: relative;\n    top: auto;\n    right: auto;\n}\n.thumbnails-feed-hero-3 .trc_rbox_div div.videoCube.videoCube_1_child {\n    width: 56%;\n    position: relative;\n    margin-bottom: 20px;\n}\n.thumbnails-feed-hero-3 .trc_rbox_outer .trc_rbox_div .videoCube {\n    width: 40%;\n    margin-bottom: 29.2px;\n}\n.thumbnails-feed-hero-3 .videoCube.videoCube_1_child .thumbBlock_holder {\n    width: 100%;\n}\n.thumbnails-feed-hero-3 .videoCube.videoCube_1_child .video-label-box {\n    position: absolute;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.7);\n    width: 100%;\n    padding: 5px 10px 5px 5px;\n}\n.thumbnails-feed-hero-3 .videoCube.videoCube_1_child .video-title, .thumbnails-feed-hero-3 .videoCube.videoCube_1_child .video-description {\n    color: #fff;\n}\n.thumbnails-feed-hero-3 .videoCube.videoCube_1_child .video-title {\n    font-size: 22px;\n    line-height: 26px;\n    max-height: 26px;\n}\n.thumbnails-feed-hero-3 .videoCube.videoCube_1_child .video-description {\n    font-size: 14px;\n    line-height: 18px;\n    max-height: 36px;\n}\n.thumbnails-feed-new img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-feed-new [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-feed-new .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.thumbnails-feed-new .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-feed-new .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-feed-new .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-feed-new .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-feed-new .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-feed-new .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-feed-new .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 66px;\n}\n\n.thumbnails-feed-new .syndicatedItem .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 66px;\n}\n\n.thumbnails-feed-new .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-feed-new .videoCube:hover .video-label-box .video-title,\n.thumbnails-feed-new .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.thumbnails-feed-new .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-feed-new .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-feed-new .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-feed-new .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-feed-new .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-feed-new .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-feed-new-wide img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-feed-new-wide [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-feed-new-wide .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: none;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbnails-feed-new-wide .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-feed-new-wide .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbnails-feed-new-wide .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-feed-new-wide .logoDiv a span {\n    display: inline;\n    color: #999;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-feed-new-wide .videoCube a {\n    padding: 0;\n}\n.thumbnails-feed-new-wide .thumbBlock {\n    margin: 0;\n}\n.thumbnails-feed-new-wide .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 66px;\n}\n.thumbnails-feed-new-wide .syndicatedItem .video-label-box {\n    margin: 5px 5px 0px 5px;\n    height: 66px;\n}\n.thumbnails-feed-new-wide .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbnails-feed-new-wide .videoCube:hover .video-label-box .video-title,\n.thumbnails-feed-new-wide .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-feed-new-wide .video-label-box .branding {\n    display: block;\n}\n.thumbnails-feed-new-wide .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-feed-new-wide .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-feed-new-wide .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbnails-feed-new-wide .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-feed-new-wide .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-g img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-g [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-g .trc_rbox_div {\n\tmargin-bottom: 0;\n}\n.thumbnails-g .trc_rbox_header {\n    line-height: 1.2em;\n    position: relative;\n    display: inline-block;\n    width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: #484848;\n\tpadding: 4px 10px;\n\tbox-sizing: border-box;\n\tmargin-bottom: 15px;\n}\n.thumbnails-g .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-g .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbnails-g .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-g .logoDiv a span {\n    display: inline;\n    color: #fff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-g .videoCube a {\n    padding: 0;\n}\n.thumbnails-g .trc_rbox_outer .videoCube {\n\tmargin-bottom: 10px;\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n}\n.thumbnails-g .trc_rbox_outer .videoCube.videoCube_1_child,\n.thumbnails-g .trc_rbox_outer .videoCube.videoCube_2_child {\n\tpadding-left: 0px;\n\tpadding-right: 0px;\n}\n.thumbnails-g .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .thumbnails-g .video-label-box {\n    height: 64.0px;\n}\n.thumbnails-g .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin-bottom: 0;\n    padding-top: 10px;\n}\n.thumbnails-g .videoCube.videoCube_1_child .video-label-box .video-title,\n.thumbnails-g .videoCube.videoCube_1_child .video-label-box .video-title {\n    padding-top: 0px;\n}\n.thumbnails-g .videoCube:hover .video-label-box .video-title {\n    text-decoration: none;\n}\n.thumbnails-g .video-label-box .branding {\n    display: block;\n}\n.thumbnails-g .syndicatedItem .branding {\n    line-height: 16.0px;\n}\n.thumbnails-g .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-g .trc_header_right_part {\n\tmargin-top: 3px;\n}\n.thumbnails-g .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-g .videoCube .video-label-box {\n\tmargin-top: 0px;\n}\n.thumbnails-g .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-g .trc_rbox_outer .videoCube.thumbnail_start .thumbBlock_holder {\n\tdisplay: none;\n}\n.thumbnails-g .trc_rbox_outer .videoCube.thumbnail_start.videoCube_1_child .thumbBlock_holder,\n.thumbnails-g .trc_rbox_outer .videoCube.thumbnail_start.videoCube_2_child .thumbBlock_holder {\n\tdisplay: block;\n}\n.thumbnails-g {\n\tbackground: #EFEFEF;\n}\n.thumbnails-g .logoDiv.link-attribution a span {\n\tcolor: #000;\n\tpadding-bottom: 10px;\n}\n.thumbnails-g .trc_rbox_outer .videoCube.thumbnail_start.videoCube_2_child{\n\tpadding-top: 5px;\n}\n.thumbnails-g .trc_rbox_outer .videoCube:not(.videoCube_1_child):before{\n    content: '';\n    height: 1px;\n    width: 100%;\n    padding-bottom: 0px;\n    border-bottom: 1px dotted #808080;\n    display: block;\n}\n.thumbnails-g .trc_rbox_outer .videoCube.thumbnail_start.videoCube_1_child:before,\n.thumbnails-g .trc_rbox_outer .videoCube.thumbnail_start.videoCube_2_child:before {\n\tborder-bottom: 0px;\n}\n.thumbnails-h img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-h [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-h .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbnails-h .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-h .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbnails-h .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-h .logoDiv a span {\n    display: inline;\n    color: #ffffff;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-h .videoCube a {\n    padding: 0;\n}\n.thumbnails-h .thumbBlock {\n    margin: 0;\n}\n.thumbnails-h .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n.thumbnails-h .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n.thumbnails-h .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n    max-height: 56px;\n    font-weight: normal;\n}\n.thumbnails-h .videoCube:hover .video-label-box .video-title,\n.thumbnails-h .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-h .video-label-box .branding {\n    display: block;\n}\n.thumbnails-h .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-h .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-h .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbnails-h .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-h .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-h .videoCube .video-label-box .video-label.video-title {\n    margin-bottom: 9px;\n}\n.trc_elastic .thumbnails-h .videoCube {\n    width: 220px;\n}\n.trc_elastic .thumbnails-h .thumbBlock_holder {\n    width: 220px;\n    height: 130px;\n}\n.trc_elastic .thumbnails-h .videoCube .video-label-box {\n    margin-top: 17px;\n}\n.trc_elastic .thumbnails-h .videoCube {\n    margin-right: 20px;\n    margin-bottom: 7px;\n}\n.trc_elastic .thumbnails-h .trc_rbox_header.trc_rbox_border_elm {\n    margin-bottom: 20px;\n}\n.trc_rbox_container .trc_rbox.thumbnails-h {\n    padding: 20px;\n    margin-top: 10px;\n}\n@media screen and (max-width: 640px) {\n    .trc_elastic .thumbnails-h .videoCube {\n        width: 265px;\n    }\n    .trc_elastic .thumbnails-h .thumbBlock_holder {\n        width: 265px;\n        height: 155px;\n    }\n    .trc_elastic .thumbnails-h .videoCube {\n        margin-bottom: 30px;\n        height: 270px;\n    }\n    .trc_elastic .thumbnails-h .videoCube:nth-of-type(even) {\n        margin-right: 30px;\n    }\n    .trc_elastic .thumbnails-h .videoCube:nth-of-type(odd) {\n        margin-right: 0px;\n    }\n    .trc_elastic .thumbnails-h .videoCube:nth-of-type(3) {\n        margin-bottom: 12px;\n    }\n    .trc_elastic .thumbnails-h .videoCube:nth-of-type(4) {\n        margin-bottom: 12px;\n    }\n    .thumbnails-h .videoCube .video-label-box .video-label.video-title {\n        margin-bottom: 20px;\n    }\n    .trc_rbox_container .trc_rbox.thumbnails-h .trc_rbox_outer {\n        transform: translatex(-12px);\n    }\n}.thumbnails-i img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-i [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-i .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.thumbnails-i .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-i .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-i .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-i .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-i .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-i .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-i .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n\n.thumbnails-i .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n\n.thumbnails-i .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-i .videoCube:hover .video-label-box .video-title,\n.thumbnails-i .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.thumbnails-i .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-i .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-i .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-i .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-i .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-i .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-j img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-j [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-j .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.thumbnails-j .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-j .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-j .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-j .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-j .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-j .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-j .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n\n.thumbnails-j .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n\n.thumbnails-j .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-j .videoCube:hover .video-label-box .video-title,\n.thumbnails-j .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.thumbnails-j .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-j .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-j .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-j .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-j .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-j .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-k img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-k [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-k .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.thumbnails-k .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-k .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-k .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-k .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-k .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-k .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-k .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n\n.thumbnails-k .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n\n.thumbnails-k .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-k .videoCube:hover .video-label-box .video-title,\n.thumbnails-k .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.thumbnails-k .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-k .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-k .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-k .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-k .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-k .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-l img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-l [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-l .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.thumbnails-l .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-l .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-l .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-l .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-l .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-l .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-l .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n\n.thumbnails-l .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n\n.thumbnails-l .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-l .videoCube:hover .video-label-box .video-title,\n.thumbnails-l .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.thumbnails-l .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-l .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-l .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-l .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-l .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-l .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-n img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-n [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-n .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: none;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n.thumbnails-n .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-n .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n.thumbnails-n .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-n .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-n .videoCube a {\n    padding: 0;\n}\n.thumbnails-n .thumbBlock {\n    margin: 0;\n}\n.thumbnails-n .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 66px;\n}\n.thumbnails-n .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 66px;\n}\n.thumbnails-n .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbnails-n .videoCube:hover .video-label-box .video-title,\n.thumbnails-n .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n.thumbnails-n .video-label-box .branding {\n    display: block;\n\tline-height: 22.0px;\n}\n.thumbnails-n .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-n .trc_header_left_column {\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-n .trc_header_right_part {\n\tmargin-top: 0px;\n}\n.thumbnails-n .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-n .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-n {\n\twidth: 300px !important;\n\theoght: 250px;\n}\n.thumbnails-p img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-p [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-p .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.thumbnails-p .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-p .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-p .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-p .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-p .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-p .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-p .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n\n.thumbnails-p .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 88px;\n}\n\n.thumbnails-p .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-p .videoCube:hover .video-label-box .video-title,\n.thumbnails-p .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.thumbnails-p .video-label-box .branding {\n    display: block;\n\tline-height: 22.0px;\n}\n\n.thumbnails-p .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-p .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-p .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-p .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-p .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n.thumbnails-v img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-v [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-v .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tbox-sizing: initial;\n}\n\n.thumbnails-v .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-v .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-v .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-v .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-v .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-v .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-v .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 76px;\n}\n\n.thumbnails-v .syndicatedItem .video-label-box {\n    margin: 5px 0px 0px 0px;\n    height: 76px;\n}\n\n.thumbnails-v .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-v .videoCube:hover .video-label-box .video-title,\n.thumbnails-v .videoCube:hover .video-label-box .video-description {\n    text-decoration: underline;\n}\n\n.thumbnails-v .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-v .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.thumbnails-v .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-v .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-v .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-v .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n"
        },
        "locale": null
    },
    "systemFlags": {
        "loaderType": "normal"
    }
};