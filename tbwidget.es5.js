"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*jshint esversion: 6 */

/**
 * Provides support for integrating tb widgets 
 */
var TBWidget = function () {

    /**
     * Initialize the widget integration manager
     * @param {*} publisherid 
     * @param {*} apptype 
     * @param {*} apikey 
     */
    function TBWidget(publisherid, apptype, apikey) {
        _classCallCheck(this, TBWidget);

        this.containers = [];
        this.url = "http://api.taboola.com/1.0/json/" + publisherid + "/recommendations.get?" + "app.type=" + apptype + "&app.apikey=" + apikey + "&source.id=214321562187" + // Should be added as parameter ?
        "&source.url=http://www.site.com/videos/214321562187.html"; // Should be document.location.href
    }

    /**
     * Register a TB widget container
     * @param {string} container The widget container id.
     * @param {string} type The widget item type. 
     * @param {integer} count The widget max items count.
     * @param {function} template The widget item template (optional)
     */


    _createClass(TBWidget, [{
        key: "register",
        value: function register(container, type, count, template) {

            // Ensure there is a default item template
            if (!template) template = this.buildItem;

            // The widget info
            var info = {
                container: container,
                type: type,
                count: count,
                template: template
            };

            this.containers.push(info);

            // Enable users to react to changes in widget
            return new Promise(function (resolved, rejected) {
                info.resolved = resolved;
                info.rejected = rejected;
            });
        }

        /**
         * Build tb widgets
         */

    }, {
        key: "build",
        value: function build() {
            var _this = this;

            this.containers.forEach(function (info) {
                var div = document.getElementById(info.container); // O(1) time complexity
                if (div) {
                    fetch(_this.buildUrl(info)).then(function (response) {
                        response.json().then(function (data) {
                            _this.buildWidget(div, data, info.template, info.resolved);
                        }).catch(function (reason) {
                            _this.logError("Failed to parse widget '" + info.container + "' data", reason, info.rejected);
                        });
                    }).catch(function (reason) {
                        _this.logError("Failed to load widget '" + info.container + "'  data", reason, info.rejected);
                    });
                } else {
                    _this.logError("Failed to find widget container element '" + info.container + "'", reason, info.rejected);
                }
            });
        }

        /**
         * Builds url for current container
         * @param info 
         */

    }, {
        key: "buildUrl",
        value: function buildUrl(info) {
            return this.url + "&count=" + info.count + "&source.type=" + info.type;
        }

        /**
         * Build the specific widget
         * @param {element} div 
         * @param {json} data 
         */

    }, {
        key: "buildWidget",
        value: function buildWidget(div, data, template, resolved) {
            var _this2 = this;

            var list = data.list;
            if (list) {
                var content = '';
                list.forEach(function (item) {
                    content += template(_this2.buildItemInfo(item));
                });
                div.innerHTML = content;

                // If we need to resolve the widget promise
                if (resolved) resolved(div);
            }
        }

        /**
         * Normalizes item info to hide JSON implementation
         * @param {object} item 
         */

    }, {
        key: "buildItemInfo",
        value: function buildItemInfo(item) {
            return {
                url: item.url,
                thumbnail: item.thumbnail[0].url,
                name: item.name,
                branding: item.branding
            };
        }

        /**
         * Gets an HTML item box from item object
         * @param {object} item 
         */

    }, {
        key: "buildItem",
        value: function buildItem(item) {
            return "<div class='tbitem'>" + "<a href='" + item.url + "' target='_blank'>" + "<div class='tbimage' style='background-image:url(\"" + item.thumbnail + "\")'>" + "</div>" + "<div class='tblabel'>" + item.name + "</div>" + "</div>" + "</a>" + "</div>";
        }

        /**
         * Log widget error
         * @param {string} message 
         * @param {string} reason 
         */

    }, {
        key: "logError",
        value: function logError(message, reason, rejected) {
            var text = "ERROR:" + message + "[reason=" + reason + "]";
            console.log(text);
            if (rejected) rejected(text);
        }
    }]);

    return TBWidget;
}();
